---
title: '💎 [Flutter] 설치'
date: 2020-02-06 15:50:00
category: 'Flutter'
draft: false 
showToc: true
---

<!-- Draft Post -->
<!-- Draft Post -->
<!-- Draft Post -->
<!-- Draft Post -->
<!-- Draft Post -->

#MAC 기준  

VSCode 깔아놨지?!  

java는   

[Java SE Development Kit 8 Downloads](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)  

Java SE Development Kit 8 Downloads 로 받자!  

나는 java 13 최신버전으로 진행했는데 자꾸 안먹혀서..  
다운그레이드하니까 원활하게 진행되더라공!  
여러버전이 있으면 저 버전 해주면 되고!!!  

환경변수 설정 잊지말자!!  

---
# flutter SDK 설치

[flutter SDK Downloads](https://flutter-ko.dev/docs/get-started/install/macos)  

일단 링크를 들어가서 다운을 받아주자.

![스크린샷 2020-02-06 오전 1.16.05.png](https://images.velog.io/post-images/chajanee/8181fb20-4834-11ea-8454-d5721d260fb7/-2020-02-06-1.16.05.png)

development 폴더를 하나 만들어서 여따 압축을 풀어줘  
그리고  
flutter 폴더 드가서 하단 명령어를 통해 클론 함 받아주자!  

```go
$ git clone -b stable https://github.com/flutter/flutter.git
```


![스크린샷 2020-02-06 오전 1.17.52.png](https://images.velog.io/post-images/chajanee/0cc512d0-4835-11ea-8bc9-1154de62eaeb/-2020-02-06-1.17.52.png)

뺴앰~!  


빔 열어서


```go
$ vi ~/.bash_profile
$ export PATH="$PATH:$HOME/development/flutter/bin"
```
명령어 입력.

![스크린샷 2020-02-06 오전 1.14.44.png](https://images.velog.io/post-images/chajanee/ec436340-4834-11ea-8454-d5721d260fb7/-2020-02-06-1.14.44.png)

:wq 저장나가기!  
그냥 :q 하면 저장 안되니까 조심해!  

```go
$ source ~/.bash_profile
```

다시 적용 확인 해주고~  

```go
$ flutter doctor
```

요 명령어를 이용해서 필요한 플랫폼을 확인해보자.  

![스크린샷 2020-02-06 오전 1.18.25.png](https://images.velog.io/post-images/chajanee/211dd050-4835-11ea-8bc9-1154de62eaeb/-2020-02-06-1.18.25.png)

자자 4가지가 딱봐도 완료 안된 것 같지?  
저걸 다 깔아줘야해  

---

# Android Studio 설치  

[Android Studio Downloads](https://developer.android.com/studio?hl=ko)

링크를 타고 다운로드 해주자.


![스크린샷 2020-02-06 오전 1.22.32.png](https://images.velog.io/post-images/chajanee/61259160-4835-11ea-b304-4b2307a19410/-2020-02-06-1.22.32.png)

다운 받은거 더블클릭하면 요래 뜨는데


![스크린샷 2020-02-06 오전 1.58.54.png](https://images.velog.io/post-images/chajanee/41b8d770-4839-11ea-b2c2-4942f8bce877/-2020-02-06-1.58.54.png)

이때 , Android Studio 아이콘을 Applications에 마우스로 끌어줘야해!  
경로는 그냥 Do not 했어!

![2020-02-06 01-59-35.2020-02-06 02_00_35.gif](https://images.velog.io/post-images/chajanee/4613f430-4839-11ea-b2c2-4942f8bce877/2020-02-06-01-59-35.2020-02-06-020035.gif)

나는 다크한게 좋기 때문에 따로 모드를 선택해줄게!

![스크린샷 2020-02-06 오전 2.01.48.png](https://images.velog.io/post-images/chajanee/4a1e7ff0-4839-11ea-ab94-49d2db3cf043/-2020-02-06-2.01.48.png)

HAXM 이 부분에서 mac은 또 확인안됬다고 암호 한번 요구하는데 그거 인증 해주고  
보안설정에서 함더 확인해주면 다시 스뭇스하게 설치 진행을 할거야.  


![스크린샷 2020-02-06 오전 2.03.34.png](https://images.velog.io/post-images/chajanee/76a19c60-4839-11ea-b2c2-4942f8bce877/-2020-02-06-2.03.34.png)

Finish!!!


![스크린샷 2020-02-06 오전 2.04.05.png](https://images.velog.io/post-images/chajanee/8882ca30-4839-11ea-ab94-49d2db3cf043/-2020-02-06-2.04.05.png)

요래 창이 뜨는데,  
자자 잘 따라와야해~  



![스크린샷 2020-02-06 오전 2.07.22.png](https://images.velog.io/post-images/chajanee/9f1c6440-486b-11ea-ac72-d32af84ed469/-2020-02-06-2.07.22.png)

Configure -> Preferences  

![스크린샷 2020-02-06 오전 2.07.48.png](https://images.velog.io/post-images/chajanee/a80baf20-486b-11ea-ac72-d32af84ed469/-2020-02-06-2.07.48.png)

Plugins -> Flutter Install 클릭  

![2020-02-06 02-08-05.2020-02-06 03_13_12.gif](https://images.velog.io/post-images/chajanee/b13da850-486b-11ea-9f96-2f8d998cf711/2020-02-06-02-08-05.2020-02-06-031312.gif)

이러면 Dart 까지 깔고 재시작이 될거야.  

자, flutter doctor 실행후, 라이센스 인증 잊지말자!  

---
# Xcode 설치

그다음엔 App Store 에서 Xcode 설치!  

음.. 명령어를 통해서 해도 되고 따로 사이트를 들어가도 되는데,  
나는 App Store 통해서 했어  

![스크린샷 2020-02-06 오전 8.06.47.png](https://images.velog.io/post-images/chajanee/3d216cd0-486c-11ea-9b7b-15f40835dca1/-2020-02-06-8.06.47.png)


![스크린샷 2020-02-06 오전 2.10.44.png](https://images.velog.io/post-images/chajanee/2e993890-486d-11ea-b486-eb64b81fb031/-2020-02-06-2.10.44.png)

설치후에 다시 flutter doctor를 치면 저렇게 모지란 부분 채워주라고 친절히 가이드를 주지!  
자자 얼른 따라서 마저 설치하자  

![스크린샷 2020-02-06 오전 8.07.35.png](https://images.velog.io/post-images/chajanee/530d9b90-486c-11ea-9b7b-15f40835dca1/-2020-02-06-8.07.35.png)


뾰로롱!!!!  
가이드를 다 따라오면 요래요래 완성!!  
여까지하면 완벽히 된겨!! 잘 따라왔구먼!!! 귣결귣뽀이~   

맨밑에 ```! No devices available``` 은 아직 디바이스를 실행하기 전이니까 괜찮아!  

---

# 안드로이드 Emulator 생성


![2020-02-06 08-39-47.2020-02-06 08_41_19.gif](https://images.velog.io/post-images/chajanee/358260f0-4872-11ea-a594-db5e67dc90ae/2020-02-06-08-39-47.2020-02-06-084119.gif)


![2020-02-06 08-29-13.2020-02-06 08_31_59.gif](https://images.velog.io/post-images/chajanee/759e1f30-4872-11ea-a594-db5e67dc90ae/2020-02-06-08-29-13.2020-02-06-083159.gif)

자자 gif 대로 잘 따라오고 있지?!

![스크린샷 2020-02-06 오전 8.31.50.png](https://images.velog.io/post-images/chajanee/7ab33d20-4872-11ea-a594-db5e67dc90ae/-2020-02-06-8.31.50.png)

Q -> Next !!

![스크린샷 2020-02-06 오전 8.32.37.png](https://images.velog.io/post-images/chajanee/81af91a0-4872-11ea-922a-ad9cfe5eacaf/-2020-02-06-8.32.37.png)

Hardware -> Finish !!

![스크린샷 2020-02-06 오전 8.33.36.png](https://images.velog.io/post-images/chajanee/8cc00ed0-4872-11ea-a594-db5e67dc90ae/-2020-02-06-8.33.36.png)

세모세모 버튼을 클릭해주자! 

![스크린샷 2020-02-06 오전 8.34.24.png](https://images.velog.io/post-images/chajanee/9432f2e0-4872-11ea-a594-db5e67dc90ae/-2020-02-06-8.34.24.png)

빼앰!!  
오랜만에 보는 안드로이드 화면이구먼!!

![스크린샷 2020-02-06 오전 8.42.02.png](https://images.velog.io/post-images/chajanee/99bfb1d0-4872-11ea-b585-f790339403fb/-2020-02-06-8.42.02.png)

flutter doctor 를 쳐서 완료 된 거 확인 해주고~

![스크린샷 2020-02-06 오전 8.44.04.png](https://images.velog.io/post-images/chajanee/a007f890-4872-11ea-922a-ad9cfe5eacaf/-2020-02-06-8.44.04.png)

다시 안드로이드 스튜디오 상단에서 디버그모드 클릭해줘

![스크린샷 2020-02-06 오전 8.44.25.png](https://images.velog.io/post-images/chajanee/a2d919f0-4872-11ea-a594-db5e67dc90ae/-2020-02-06-8.44.25.png)

하단 콘솔창에서 디버그모드가 실행이 될 때까지 기다리면...


![2020-02-06 08-46-11.2020-02-06 08_46_33.gif](https://images.velog.io/post-images/chajanee/df16e870-4877-11ea-8dac-8b640cf26c0d/2020-02-06-08-46-11.2020-02-06-084633.gif)

BOOM!!!   
완료완료!!

---

# iOS Emulator 생성

자 이제 iOS 시뮬래이터~~~~~   
터미널에 명령어를 실행해주자

```
$ open -a Simulator
```


![스크린샷 2020-02-06 오전 8.55.49.png](https://images.velog.io/post-images/chajanee/35c91170-4873-11ea-9ad8-f3f128f884f9/-2020-02-06-8.55.49.png)

로딩로딩 듀근듀근

![스크린샷 2020-02-06 오전 8.56.12.png](https://images.velog.io/post-images/chajanee/3d3035b0-4873-11ea-b6f9-e371a3c9a605/-2020-02-06-8.56.12.png)

디바이스 종류는 맘에 드는 걸로 바꿀 수 있어!
 
![스크린샷 2020-02-06 오전 8.56.28.png](https://images.velog.io/post-images/chajanee/39465150-4873-11ea-b6f9-e371a3c9a605/-2020-02-06-8.56.28.png)

자자 로딩 완료되면 요래 뜨지?!  
안드로이드 스튜디오 실행중이던걸 가서~


![스크린샷 2020-02-06 오전 8.58.22.png](https://images.velog.io/post-images/chajanee/6a893fc0-4873-11ea-b6f9-e371a3c9a605/-2020-02-06-8.58.22.png)

아이폰 디바이스로 바꿔준 다음에~

![스크린샷 2020-02-06 오전 8.59.19.png](https://images.velog.io/post-images/chajanee/991dfe20-4873-11ea-b6f9-e371a3c9a605/-2020-02-06-8.59.19.png)

디버그 모드~ 

![스크린샷 2020-02-06 오전 9.00.35.png](https://images.velog.io/post-images/chajanee/badd5dd0-4873-11ea-b6f9-e371a3c9a605/-2020-02-06-9.00.35.png)

BOOM!!  
버튼 클릭해서 숫자 올라가는 것도 확인해줘!  

만약 디버그모드 했는데 흰 화면만 나오면,

![스크린샷 2020-02-06 오전 9.01.50.png](https://images.velog.io/post-images/chajanee/e65328f0-4873-11ea-80f8-154ff0612381/-2020-02-06-9.01.50.png)

요 빨간 버튼 눌러서 Stop 한 뒤에 다시 디버그모드 눌러봐!
이 방법도 안되면,

![스크린샷 2020-02-06 오전 9.03.35.png](https://images.velog.io/post-images/chajanee/230137b0-4874-11ea-896e-853d3c609478/-2020-02-06-9.03.35.png)

Xcode 로 실행해주는 방법도 있어!  

자 플러터 프로젝트 안에 pod file 추가를 해주자  

터미널을 통해  
~/AndroidStudioProjects/flutter_app/ios 폴더까지 가서!  

```
$ pod init
$ pod install
```

![스크린샷 2020-02-06 오전 9.11.27.png](https://images.velog.io/post-images/chajanee/3f6b6dc0-4875-11ea-922a-ad9cfe5eacaf/-2020-02-06-9.11.27.png)

빼앰!  

휴... 참 오래도 걸렸다 그치?!  
박수짝짝!!  

```
$ flutter doctor -v
```

최종 버전 확인 해볼까?

![스크린샷 2020-02-06 오후 7.07.47.png](https://images.velog.io/post-images/chajanee/8fd7e010-48c8-11ea-86f3-5dbaf93611ac/-2020-02-06-7.07.47.png)


자 이제 이 상태로 디바이스 상태 실행이 되는데 그건 차차 알아가자!!  


---
---

# Reference  
- [더코딩파파 유튜브](http://bit.ly/TheCodingPapa)

