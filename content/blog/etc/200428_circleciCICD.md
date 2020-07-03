---
title: '🚥 [etc] CircleCI - CD 붙이기'
date: 2020-04-28 00:20:00
category: 'etc'
draft: false
showToc: true
---



<img width="700" alt="스크린샷 2020-07-03 오후 2 51 52" src="https://user-images.githubusercontent.com/55340876/86436490-51211a00-bd3d-11ea-980a-9b0055a31eca.png">


어제에 이어서 오늘은 CD를 붙여보았다.

나는 모르는게 아직 너무 많...  
죄송스럽게도 너무*3 많아서 들으면서도 으잉? 오잉? 읭?  
🥺🥺🥺🥺🥺🥺🥺🥺🥺🥺  

<img width="400" alt="스크린샷 2020-07-03 오후 2 51 52" src="https://user-images.githubusercontent.com/55340876/86436866-21264680-bd3e-11ea-8158-d991cc073f5d.png">



열심히 설명해주신 예나르께 감사한 맘을 품고 (리스펙ㅌ!!!!!!! 🙏🏻)  
블로그를 정리하면서 다시 되새겨보자!!  

# CD 를 붙여보자!

> **CircleCI를 사용하여 Firebase 호스팅에 배포하는 방법**  

(일단 현시점 DEV 쪽은 firebase 호스팅에서 수동 배포까지 마친 상태 + 어제 CI로 build 붙이는 것까지 함)  
여기서부터 시작하자면!!

---

## firebase token 겟하기

웹앱을 계정에 배포 할 수 있도록 Firebase 토큰이 필요하다.   
CircleCI에 Firebase 프로젝트에 대한 액세스 권한을 부여하지 않았다.  
**Firebase 토큰**을 생성하고 CircleCI 설정에 추가해주자!  

```
firebase login:ci
```

요로코롬 하면 firebase login 창이 뜨고 연동된 계정으로 로긴을 해주면  
터미널 창에 token 내용이 뿅! 뜬다.


## CircleCI 환경변수에 추가하기

CircleCI 의 해당 프로젝트 안에서 우상단 `Project Settings` 를 누르면 요 이미지에 보이는 화면으로 들어가진다.  
`Add Variabel` 을 클릭하여 받은 토큰을 등록해주면 된다.  
나는 **DEV deploy** 와 **PRD deploy** 2개가 있어서 각 토큰을 받아 **환경변수 추가**하였다.


<img width="800" alt="스크린샷 2020-07-03 오후 2 51 52" src="https://user-images.githubusercontent.com/55340876/86436905-43b85f80-bd3e-11ea-9b05-e7f381005f26.png">



---

## 빌드-배포 과정에서 발생하는 Failed 잡기

<img width="300" alt="스크린샷 2020-07-03 오후 2 51 52" src="https://user-images.githubusercontent.com/55340876/86437028-8b3eeb80-bd3e-11ea-9447-e9da06dc5791.gif">  
<img width="400" alt="스크린샷 2020-07-03 오후 2 51 52" src="https://user-images.githubusercontent.com/55340876/86437006-824e1a00-bd3e-11ea-827d-3b9f9f36a0cc.png">

~~Failed 와의 싸움 😭~~  


➕ CI system build를 위한 firebase-tools 의존성 추가  

```
npm install -D firebase-tools
```

prd용 json 파일 추가해주기!!!  
(package.json 에 `firebase-tools` 추가 됬는지 반드시 확인!)  

**firebase-prd.json**

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

**이외에는 모두 config.yml 파일을 수정하였다.**  


## config.yml 수정

DEV계 deploy 와 PRD deploy 를 위해 yml 파일을 수정한다.  

중복되는 로직은 상단에 빼고 갖고오는 식으로 수정을 했다.  
(들여쓰기 넘나 헷갈리..)


**config.yml**

```yml
aliases:
  - &attach_workspace # 지정한 workspace 를 attach 해줌 (CircleCI에 올려준다)
    at: ~/디렉토리명

  - &update-npm # command 에 지정된 명령어 수행. 여기서는 npm 업데이트를 한다.
    name: npm 업데이트
    command: sudo npm install -g npm@6.1.0

  - &restore-npm-cache # keys 로 지정된 키로 캐시에 저장된 내용을 복구한다.
    # 설치된 아이들의 대한 의존성. 현재 설치된 것에 대한 저장(캐싱)
    keys:
      - v1-dependencies-{{ .Branch }}-{{ checksum "package.json" }}
        # checksum "package.json" 이란 해당 파일의 현 상태를 체크할 수 있는 명령어
      - v1-dependencies-{{ .Branch }}-

  - &install-npm # npm 설치
    name: npm 설치
    command: npm install

  - &save-npm-cache # key 에 지정된 키로 paths 에 명시된 경로의 내용을 캐시에 저장한다.
    key: v1-dependencies-{{ .Branch }}-{{ checksum "package.json" }}
    paths:
      - node_modules

defaults: &defaults
    working_directory: ~/디렉토리명 # 작업이 수행될 디렉토리
    docker: # 해당 job을 어디서 수행할 것인지에 대한 구성.
      - image: circleci/node:13.7 # 라는 도커 이미지를 사용하여 도커 컨테이너에서 빌드작업을 수행한다. (/node 버전)

version: 2 # CircleCI의 언어 버전
jobs: # 작업 목록
  test:
    <<: *defaults
    steps: # 배포할 때 사용할 스크립트를 step 별로 실행하게 된다. (작업의 순서)
      - checkout # workflow 에서 트리거된 git branch 를 checkout 한다.
      - attach_workspace: *attach_workspace
      - run: *update-npm
      - restore_cache: *restore-npm-cache
      - run: *install-npm
      - save_cache: *save-npm-cache
      - run: # npm 테스트
          name: npm 테스트
          command: npm test

  build:
    <<: *defaults
    steps:
      - checkout
      - attach_workspace: *attach_workspace
      - run: *update-npm
      - restore_cache: *restore-npm-cache
      - run: *install-npm
      - run:
          name: sass rebuild
          command: npm rebuild node-sass
      - save_cache: *save-npm-cache
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

  dev-deploy:
    <<: *defaults
    steps:
      - checkout
      - attach_workspace: *attach_workspace
      - run: *update-npm
      - restore_cache: *restore-npm-cache
      - run: *install-npm
      - save_cache: *save-npm-cache
      - run:
          name: Dev Firebase Deploy # firebase 경로 지정
          command:  ./node_modules/.bin/firebase deploy --project dev --only hosting:프로젝트명 --token "$DEV_FIREBASE_TOKEN" # 코드를 Firebase 호스팅에 배포 하는 명령을 실행. 이 명령은 해당 firebase token 환경 변수 에서 토큰을 가져 오도록 지정 한다.

  prd-deploy:
    <<: *defaults
    steps:
      - checkout
      - attach_workspace: *attach_workspace
      - run: *update-npm
      - restore_cache: *restore-npm-cache
      - run: *install-npm
      - save_cache: *save-npm-cache
      - run:
          name: firebase.json prd용으로 대체
          command: mv firebase-prd.json firebase.json
      - run:
          name: Prd Firebase Deploy
          command:  ./node_modules/.bin/firebase deploy --project prd --only hosting:프로젝트명 --token "$FIREBASE_TOKEN"

# Workflow 는 CircleCI 에서 수행되는 모든 작업을 조율하는 설정키워드이다.
# 각 workflow 는 설정파일 내에 고유한 이름으로 구성되어야 하며,
# 해당 workflow 의 이름을 키로, 수행할 내용을 해당 workflow 의 값으로 구성된다.
workflows:
  version: 2
  build-deploy: # Workflow 이름
    jobs:
#      - test
      - build
      - dev-deploy: # deploy job은 build가 끝난뒤에 실행한다.
          requires:
            - build
          filters:
            branches:
              only: # master 브랜치에 push 했을때만 실행
                - master
      - prd-deploy:
          requires:
            - build
          filters:
            branches:
              only:
                - release

```

>여기서 키포인트는!!  
>
>DEV 와 PRD 가 나누어지니까  
>`project` `hosting` `token` 이 달리지고,  
>`firebase.json` 파일이 대체되어야 한다.  
>
>PRD 는 당연히 `release` 브랜치를 따서 master 코드를 머지한 후, 푸쉬해주는 것이고!  
>케바케지만 master 코드 머지시에는 해당 프로젝트 버전을 올리고 release에 푸쉬를 해준다.

---

## 나의 Workflow

<img width="600" alt="스크린샷 2020-07-03 오후 2 51 52" src="https://user-images.githubusercontent.com/55340876/86437156-dbb64900-bd3e-11ea-87ff-f5a29040ba2c.png">


요로코롬 각각 master 와 release 에 푸쉬하는 경우  
해당하는 DEV계 / PRD계로 build -> deploy 와 같이 순차진행된다.  

푸쉬 하면 빌드-배포까지 똬똬 진행해주고 실시간 돌아가는 상황을 circleCI 를 통해 확인 가능하다!  
배포가 완벽히 되면 firebase hosting 에서도 

<img width="200" alt="스크린샷 2020-07-03 오후 2 51 52" src="https://user-images.githubusercontent.com/55340876/86437222-00aabc00-bd3f-11ea-9872-96e62fb85cf7.png">

쫘란!!! 배포완료잼 👍🏻

---

## 테스트를 위한 hidden text 버전 출력

완벽히 빌드 - 배포까지 되었는지 확인을 위해  
package.json 에 있는 해당 프로젝트 버전을 출력해보자.

template 태그 안에  
`<div style="display: none">Version : {{version}}</div>` 를 추가해주고,

```js
<script>
   import packageJson from "../../package.json";

   export default {
      data() {
         return {
            version: packageJson.version.toString(),
         }
      },
   }
</script>
```

하면?!

<img width="800" alt="스크린샷 2020-07-03 오후 2 51 52" src="https://user-images.githubusercontent.com/55340876/86437278-2041e480-bd3f-11ea-9de6-d75d08cc8512.png">

쫘롼!! 해당 버전이 요로코롬 출력되는 것을 볼 수 있다.

<img width="400" alt="스크린샷 2020-07-03 오후 2 51 52" src="https://user-images.githubusercontent.com/55340876/86437291-2df76a00-bd3f-11ea-96e6-2e07815f9ff2.png">

정리를 나름 한다고 했는데 정리하면서도 너무 어렵다. 큽 (너무 듬성듬성 쓴것 같...)  
한번 세팅하고 나면 나중에 새로운 프로젝트 들어갈 때에도 같은 로직 가져다 쓰면 될 것 같은데  
yml 문법이라던지 ci/cd 진행하는 순서라던지   
이게 정확히 어디에 쓰이는 것이고 어떻게 진행이 되는 것인지  
명확히 알 필요가 있다. 🤯

제대로 이해해야 제대로 사용하니까!!   

합! 이로써 1차 B2C 랜딩페이지는 마무리 되었다.. 후하후하  
(추가적으로 유지보수가 생길 경우가 있지만!)  

다시 뷰 강의와 함께 담주 시작될 2차 프젝을 위해 달리즈아!!  
🏃🏻‍♀️🏃🏻‍♀️🏃🏻‍♀️🏃🏻‍♀️🏃🏻‍♀️🏃🏻‍♀️🏃🏻‍♀️🏃🏻‍♀️🏃🏻‍♀️🏃🏻‍♀️🏃🏻‍♀️🏃🏻‍♀️🏃🏻‍♀️🏃🏻‍♀️🏃🏻‍♀️🏃🏻‍♀️🏃🏻‍♀️🏃🏻‍♀️🏃🏻‍♀️




---
---

# Reference  
- [CircleCI 구성](https://circleci.com/docs/2.0/configuration-reference/)
- [샘플 2.0 config.yml 파일](https://circleci.com/docs/2.0/sample-config/)
- [Firebase CLI 참조](https://firebase.google.com/docs/cli?hl=ko)
- [CircleCI를 사용하여 Firebase 호스팅에 배포하는 방법](https://codeburst.io/how-to-deploy-on-firebase-hosting-with-circleci-f5fa58bce01d)
- [Gatsby 사이트를 Firebase 호스팅에 자동 배포](https://circleci.com/blog/automatically-deploy-a-gatsby-site-to-firebase-hosting/)
- [CircleCI + Fastlane + Firebase Test Lab으로 앱 테스트 및 게시](https://proandroiddev.com/test-and-publish-your-apps-with-circleci-fastlane-firebase-test-lab-e716c075b99b)
- [Github + Heroku + Circle CI 를 이용한 Django Application 배포 자동화](https://www.slideshare.net/JaeyeolLee4/github-heroku-circle-ci-django-application)