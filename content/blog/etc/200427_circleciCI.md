---
title: '🚥 [etc] CircleCI - CI 붙이기'
date: 2020-04-27 00:20:00
category: 'etc'
draft: false
showToc: true
---

<img width="700" alt="스크린샷 2020-07-03 오후 2 51 52" src="https://user-images.githubusercontent.com/55340876/86436490-51211a00-bd3d-11ea-980a-9b0055a31eca.png">

# CircleCI 가 뭐야?

>**CircleCI는 CI/CD(지속적 통합, 지속적 배포 또는 개발)을 간편하게 해주는 서비스 중에 하나로,   
>소프트웨어 개발 시 형상관리 시스템(Github, Github Enterprise)과 연계하여   
>Automated-build/Deployment를 기능을 지원하는 제품이다.**  
>
>**여러 개발환경에 대해 보다 쉽게 빠르게 자동화된 빌드 및 배포가 가능하며  
>그 외의 기능으로 다양한 편의 기능(Automated Testing, Notification)도 제공한다.**  
>
>**Managed Service이기 때문에 *DevOps에서 많은 시간을 절약시켜주는 서비스이다.  
>(불필요한 작업을 줄여주고, 개발 효율성을 높여준다.)**  
>
>*데브옵스(DevOps)는 소프트웨어의 개발(Development)과 운영(Operations)의 합성어로서,   
>소프트웨어 개발자와 정보기술 전문가 간의 소통, 협업 및 통합을 강조하는 개발 환경이나 문화를 말한다.   
>데브옵스는 소프트웨어 개발조직과 운영조직간의 상호 의존적 대응이며   
>조직이 소프트웨어 제품과 서비스를 빠른 시간에 개발 및 배포하는 것을 목적으로 한다.  

---

# Firebase Hosting

firebase hosting 을 통해서 수동으로 배포를 진행했었다.

```
npm install -g firebase-tools
firebase login
firebase init
```

`firebase init` 을 통해 프롬프트가 완료되면   
Firebase CLI는 두 개의 파일을 생성한다.

`.firebaserc`  
`firebase.json`

참고 : 이 firebase.json파일을 사용하면 사용자 지정 호스팅 동작을 구성 할 수 있다.   
(이에 대한 자세한 내용은 Firebase 전체 구성 문서를 참조하라.)  

Firebase CLI가 프로젝트를 로드하지 않는 경우 생성 된 `.firebaserc` 파일에 프로젝트 ID를 수동으로 추가 할 수 있다.  

프로젝트 별칭 추가는 요로코롬!

```
firebase use 프로젝트별칭
```


**.firebaserc**

```json
{
  "projects": {
    "dev": "프로젝트별칭부분",
    "prd": "프로젝트별칭부분"
  }
}
```

**firebase.json**

```json
{
  "hosting": {
    "site": "프로젝트명",
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```



>**🚫 주의 할 점 🚫**  
>`.firebase` Firebase에서 **`캐시`**를 저장하기 위해 생성 한 새 폴더 도 있는데  
>저장소에는 이 폴더가 들어가길 원치 않기 때문에  
>폴더 이름을 `.gitignore` 파일에 추가하여 Git에서 **무시**하도록 해준다.  
>
>**gitignore**  

```
...
>
# Firebase 배포관련
#.firebaserc # CI 시스템에서 별칭 접근이 가능하도록 프로젝트에 추가
.firebase/
```

자, 이제 커밋하고 푸쉬 후 👇🏻

```
//이시점에서 npm build 수동으로 해주고 deploy 진행

firebase deploy --only hosting:프로젝트명
```

커밋하고~ 푸쉬하고~ 수동으로 npm서 빌드하고~ 수동 배포하고~ 반복쓰!   
넘나 손이 많이 가는 작업이다.  
수동 작업을 하다보면 중간에서 에러도 빈번하게 발생할 수 있고,  
어느 시점에서 에러가 발생했는지도 캐치하기 애매한 경우도 생긴다.  
CircleCI 를 사용해서 삶의 질을 높여보자!!!  

**회사에서는 CircleCI 에 Bitbucket 을 연동해서 사용하고 있다!**

<img width="700" alt="스크린샷 2020-07-03 오후 2 51 52" src="https://user-images.githubusercontent.com/55340876/86436532-672eda80-bd3d-11ea-9a68-419abcf43d7f.png">

---

# CI 를 붙여보자!


1️⃣ CircleCI 에 저장소 생성  


2️⃣ 플젝 내부 저장소의 최상위 경로에 `.circleci` 폴더 생성 후,  
안에다가 `config.yml` 파일 생성을 하고 내용을 작성한다.  
** (현재 해당 프로젝트는 `test` 와 `deploy` 를 `jobs` 에서 제외한 상태이다.   
고로,  커밋-푸쉬하면 `build` 만 진행된다는 것!) **  


<img width="300" alt="스크린샷 2020-07-03 오후 2 51 52" src="https://user-images.githubusercontent.com/55340876/86436638-9fceb400-bd3d-11ea-9397-54f090350360.png">

**config.yml**  (yml 을 작성하는 방법에 대해서는 밑에서 다루겠음)

```yml
version: 2 # CircleCI의 언어 버전
jobs: # 작업 목록
  test:
    working_directory: ~/디렉토리명 # 작업이 수행될 디렉토리
    docker: # 해당 job을 어디서 수행할 것인지에 대한 구성.
      - image: circleci/node:8.11 # 라는 도커 이미지를 사용하여 도커 컨테이너에서 빌드작업을 수행한다. (/node 버전)
    steps: # 배포할 때 사용할 스크립트를 step 별로 실행하게 된다. (작업의 순서)
      - checkout # workflow 에서 트리거된 git branch 를 checkout 한다.
      - attach_workspace: # 지정한 workspace 를 attach 해준다. (서클씨아이에 올려준다)
          at: ~/디렉토리명
      - run: # command 에 지정된 명령어 수행. 여기서는 npm 업데이트를 한다.
          name: npm 업데이트
          command: sudo npm install -g npm@6.1.0
      - restore_cache: # keys 로 지정된 키로 캐시에 저장된 내용을 복구한다.
          # 설치된 아이들의 대한 의존성. 현재 설치된 것에 대한 저장(캐싱)
          keys:
            - v1-dependencies-{{ .Branch }}-{{ checksum "package.json" }}
            # checksum "package.json" 이란 해당 파일의 현상태를 체크할 수 있는 명령어
            - v1-dependencies-{{ .Branch }}-
      - run: # npm 설치
          name: npm 설치
          command: npm install
      - save_cache: # key 에 지정된 키로 paths 에 명시된 경로의 내용을 캐시에 저장한다.
          key: v1-dependencies-{{ .Branch }}-{{ checksum "package.json" }}
          paths:
            - node_modules
      - run: # npm 테스트
          name: npm 테스트
          command: npm test

  build:
    working_directory: ~/디렉토리명
    docker:
      - image: circleci/node:8.11
    steps:
      - checkout
      - attach_workspace:
          at: ~/디렉토리명
      - run:
          name: npm 업데이트
          command: sudo npm install -g npm@6.1.0
      - restore_cache:
          keys:
            - v1-dependencies-{{ .Branch }}-{{ checksum "package.json" }}
            - v1-dependencies-{{ .Branch }}-
      - run:
          name: npm 설치
          command: npm install
      - save_cache:
          key: v1-dependencies-{{ .Branch }}-{{ checksum "package.json" }}
          paths:
            - node_modules
      - run:
          name: Build in Development Mode
          command: npm run build
      # workflow 를 이용해서 job 을 나누게 되면 각각의 job 은 격리된 상태이므로 다른 job 에서 생성한 파일은 보이지 않는다. (서로 공유안됨)
      # 각 job 마다 매번 checkout 을 정의하는 것은 비효율적이므로 persist_to_workspace 라는 옵션을 이용하여 job 간에 파일을 공유할 수 있게 해준다.
      # 다음 job 에서 docker 이미지를 사용 할 수 있도록 workspace 에 저장해둔다.
      - persist_to_workspace:
          root: .
          paths: dist # 공유할 패스를 명시
      - run: # 해당 디렉토리 파일을 확인
          name: check dist directory
          command: pwd; ls; ls dist


#  deploy:

# Workflow 는 CircleCI 에서 수행되는 모든 작업을 조율하는 설정키워드이다.
# 각 workflow 는 설정파일 내에 고유한 이름으로 구성되어야 하며,
# 해당 workflow 의 이름을 키로, 수행할 내용을 해당 workflow 의 값으로 구성된다.
workflows:
  version: 2
  chacha: # Workflow 이름
    jobs:
#      - test
      - build
#      - deploy

```

큰놈 2개를 간단하게는 이렇게 생각해주자.  

**`jobs` 👉🏻 워크플로우를 구성하는 애**  
**`workflows` 👉🏻 파이프라인**  




3️⃣ CircleCI 에 로그인 후, 연결하고 싶은 레포지토리를 찾아 설정을 해준다.    


4️⃣ `Start Building` 을 통해 `Run`한다.
    



좌!!  
이제 기존 프로젝트 안에서 커밋 - 푸쉬를 하면  
자동으로 build 를 진행해주는 것을 확인할 수 있다.  

<img width="600" alt="스크린샷 2020-07-03 오후 2 51 52" src="https://user-images.githubusercontent.com/55340876/86436693-bc6aec00-bd3d-11ea-91d5-9faaa5a80e9d.png">

슬랙 딜리버리 설정도 해주면,  
요로코롬 슬랙으로 노티를 받아볼 수도 있다!

<img width="600" alt="스크린샷 2020-07-03 오후 2 51 52" src="https://user-images.githubusercontent.com/55340876/86436779-e4f2e600-bd3d-11ea-98c5-54f601142bb3.png">

한 번 정의해주니,  
커밋 - 푸쉬만 해도  
자동으로 테스트 - 빌드 - 배포까지 휙휙ㄱ휳귁후휙!  

아주 편리하구먼 껄껄.  
(하.. 근데 넘모 어렵다 큽.. 반복학습이 답이다!!)  

---

# YAML 이 뭔디?

>  Ain’t Markup Language (마크업 언어가 아니다...... ~~롸?~~)  
>  데이터를 모아놓는 리스트 형식의 포멧.  
>  어떠한 프로그램의 설정을 저장하고 읽어들이는 방식. (설정 파일의 저장 양식)  

개발자가 조정해야 하는 정보의 저장 부분은 읽기도 쉽고 쓰기도 편해야 한다.  
xml 이나 json 은 정보를 적재하는 방식이고 좀 읽고 쓰기가 불편한 느낌적인 느낌이 있다.  
(물논 json이 문법적으로는 더 단순하여 많이 사용들 하고있긴 하다.)  

<img width="600" alt="스크린샷 2020-07-03 오후 2 51 52" src="https://user-images.githubusercontent.com/55340876/86436797-f4722f00-bd3d-11ea-8ed7-d1d267159182.png">

그렇게 탄생하게 된 것이 **YAML** !!

# YAML의 기본 자료형(primitives)

- 스칼라(scalar) : 스트링 또는 숫자  
- 시퀀스(sequence) : 배열 또는 리스트  
  - 시퀀스는 들여쓰기와 -를 통해 표현  
- 맵핑(mapping) : 해시 또는 딕셔너리, 키(key)/값(value) 형태  
  - 맵핑 시 키/값은 :를 이용해서 구분합니다. ex> key: value  

- 각 블록은 들여쓰기를 통해 구분  

- `#`으로 시작하면 주석  
- 하나의 스트림으로 여러개의 문서를 표현할 때에는 하이픈 세개(---)로 나눈다.   
- 마침표 세개(...)는 스트림의 끝을 나타낸다.  
- 반복되는 값은 & 를 통해 alias를 설정할 수 있다.  



---
---

# Reference  
- [YAML 포멧이란](http://anitoy.pe.kr/yaml-format/)
- [Sample 2.0 config.yml Files](https://circleci.com/docs/2.0/sample-config/)
- [circleCI2.0 persist_to_workspace를 이용한 workflow job간 파일공유](https://negabaro.github.io/archive/circleci_persist_to_workspace)
- [GitHub과 CircleCI를 활용한 자동배포](https://dkant.net/2019/06/25/circleci01/)
- [Circel Ci를 통해 React 자동 배포하기 (4) - 배포하기](https://velog.io/@joker/Circel-Ci%EB%A5%BC-%ED%86%B5%ED%95%B4-React-%EC%9E%90%EB%8F%99-%EB%B0%B0%ED%8F%AC%ED%95%98%EA%B8%B0-4-%EB%B0%B0%ED%8F%AC%ED%95%98%EA%B8%B0-tak5g1b09u)
- [firebase 호스팅 동작 구성](https://firebase.google.com/docs/hosting/full-config)