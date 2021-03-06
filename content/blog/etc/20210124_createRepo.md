---
title: '🚥 [etc] 하나의 repo에 프젝 여러개 push하기'
date: 2021-01-24 02:00:00
category: 'etc'
draft: false
showToc: true
---

# 새 repo 만들기

![1](https://user-images.githubusercontent.com/55340876/110200533-d0a15300-7ea1-11eb-9026-e0b1dcee6188.png)

READEME 나 .gitignore 은 **선택사항!**

![2](https://user-images.githubusercontent.com/55340876/110200531-d008bc80-7ea1-11eb-8ec6-d85bf75f29ec.png)

짠!!  
상위 디렉토리에서 레포 만든걸 클론해주자.

![3](https://user-images.githubusercontent.com/55340876/110200530-d008bc80-7ea1-11eb-8772-3fb0ee8f0d83.png)

폴더 확인을 해보면?

![4](https://user-images.githubusercontent.com/55340876/110200529-cf702600-7ea1-11eb-9091-05f465265e29.png)

여기 내부에 iOS 생성하고  
iOS 폴더 내부에는 여러개의 프로젝트를 쪼로록! 넣어줄 예정!

```sh
mkdir 폴더명 // 새로운 폴더 생성
```

![5](https://user-images.githubusercontent.com/55340876/110200528-cf702600-7ea1-11eb-8d7a-956d90a35f70.png)
![6](https://user-images.githubusercontent.com/55340876/110200527-ced78f80-7ea1-11eb-8116-26b48fbd45e6.png)

짠!!

**숨김폴더 보기 : Shift + Command + .**

쟈쟈.  
iOS 폴더에 Xcode로 프로젝트 한개를 만들고 푸쉬를 해보자.

![7](https://user-images.githubusercontent.com/55340876/110200526-ced78f80-7ea1-11eb-842e-de1715ee6259.png)
![8](https://user-images.githubusercontent.com/55340876/110200525-ce3ef900-7ea1-11eb-84cf-05458c59be82.png)

제대로 커밋 됐나 git log 로 확인 함 해주고!  
푸쉬푸쉬

![9](https://user-images.githubusercontent.com/55340876/110200524-cda66280-7ea1-11eb-87af-cd0c04d4193b.png)
![10](https://user-images.githubusercontent.com/55340876/110200523-cda66280-7ea1-11eb-9d76-ab88e3d657c6.png)

iOS 폴더 내부로 프로젝트 폴더가 들어간걸 확인 할 수 있음!  
다른 프로젝트도 만들어서 푸쉬해볼까?

해당 iOS 폴더에 TestApp 이라는 프로젝트 하나를 더 생성해주고,

![11](https://user-images.githubusercontent.com/55340876/110200522-cbdc9f00-7ea1-11eb-854d-e033c0582b2a.png)
![12](https://user-images.githubusercontent.com/55340876/110200520-cb440880-7ea1-11eb-9465-9c3b853d30a3.png)

iOS 폴더를 드가보면?

![13](https://user-images.githubusercontent.com/55340876/110200518-c97a4500-7ea1-11eb-9c79-1869455e9acb.png)

짠!!!  
이제 하나의 레포로 여러개의 프로젝트를 푸쉬할 수 있돠!

열공빡공하쟈!! 🔥

# 디폴트 브랜치가 main 이라구여!!

여기서 궁금한게 브랜치 명이 `main` 이다.  
원래 `master` 아니었누?? 읭??

<img width="506" alt="1" src="https://user-images.githubusercontent.com/55340876/110200780-e3685780-7ea2-11eb-9ffb-16d0f20daead.png">

뭐고?  
디폴트 브랜치가 `main` 이라는 이름으로 되어있다.  
원래 `master` 였는디? 오잉?

구글링 구글링...

![2](https://user-images.githubusercontent.com/55340876/110200779-e2cfc100-7ea2-11eb-825c-01f6bd49137d.png)

녜에.. 그렇군요... 10월달에 이미 바뀌었군요..?  
내가 너무 깃을 안썼는갑닼ㅋㅋㅋㅋ

기본 브랜치명이 이제 `main` 이란다.  
그것도 모르고 만약 `master`로 푸쉬를 해줬다면 우째야할까??  
당근 브랜치 2개가 생기죠?!  
기존 master에 푸쉬한거는 깨르꼼하게 삭제해주고 브랜치명을 바꾸어보쟈.

![3](https://user-images.githubusercontent.com/55340876/110200777-e2372a80-7ea2-11eb-84af-8a874343d599.png)

기존 master 브랜치 푸쉬한고 삭제삭제

![4](https://user-images.githubusercontent.com/55340876/110200776-e2372a80-7ea2-11eb-8c54-c0123f558629.png)

브랜치명 `main`으로 변경

![5](https://user-images.githubusercontent.com/55340876/110200775-e19e9400-7ea2-11eb-86e7-f4685bbc26aa.png)

`git branch` 로 확인~  
응 이제 main~~

자 이제 다시 푸쉬해볼까?

![6](https://user-images.githubusercontent.com/55340876/110200773-e105fd80-7ea2-11eb-9102-4e34ecab2952.png)

????

<img width="482" alt="7" src="https://user-images.githubusercontent.com/55340876/110200770-de0b0d00-7ea2-11eb-9670-b3784815cb58.png">

하... 외않되?

진주야 너 풀땡겼어 안땡겼어?  
안땡겼어.  
^^

왠만하면 강제푸쉬 하지말고!!!  
강제푸쉬 했다가 다 날라가고싶니?

![8](https://user-images.githubusercontent.com/55340876/110200767-dcd9e000-7ea2-11eb-823c-1653fe049dac.png)

이후는 알아서 해결해보쟈. 😉
