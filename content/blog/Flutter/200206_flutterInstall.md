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

<img width="961" alt="1" src="https://user-images.githubusercontent.com/55340876/74588517-a5528880-5040-11ea-9716-327de7aef2c3.png">

development 폴더를 하나 만들어서 여따 압축을 풀어줘  
그리고  
flutter 폴더 드가서 하단 명령어를 통해 클론 함 받아주자!  

```go
$ git clone -b stable https://github.com/flutter/flutter.git
```

<img width="708" alt="2" src="https://user-images.githubusercontent.com/55340876/74588525-abe10000-5040-11ea-950b-a33de2086425.png">



뺴앰~!  


빔 열어서


```go
$ vi ~/.bash_profile
$ export PATH="$PATH:$HOME/development/flutter/bin"
```
명령어 입력.

<img width="805" alt="3" src="https://user-images.githubusercontent.com/55340876/74588535-be5b3980-5040-11ea-9412-33ce690bb38c.png">



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

<img width="1014" alt="4" src="https://user-images.githubusercontent.com/55340876/74588537-bf8c6680-5040-11ea-967d-559d76754f15.png">



자자 4가지가 딱봐도 완료 안된 것 같지?  
저걸 다 깔아줘야해  

---

# Android Studio 설치  

[Android Studio Downloads](https://developer.android.com/studio?hl=ko)

링크를 타고 다운로드 해주자.


<img width="850" alt="5" src="https://user-images.githubusercontent.com/55340876/74588543-c4e9b100-5040-11ea-856b-3c01845102dd.png">



다운 받은거 더블클릭하면 요래 뜨는데


<img width="654" alt="6" src="https://user-images.githubusercontent.com/55340876/74588548-cc10bf00-5040-11ea-8244-19212660374d.png">



이때 , Android Studio 아이콘을 Applications에 마우스로 끌어줘야해!  
경로는 그냥 Do not 했어!

![7](https://user-images.githubusercontent.com/55340876/74588555-d03cdc80-5040-11ea-9229-b84f632240ca.gif)



나는 다크한게 좋기 때문에 따로 모드를 선택해줄게!

<img width="794" alt="8" src="https://user-images.githubusercontent.com/55340876/74588560-d59a2700-5040-11ea-99ea-97fa2b8db7af.png">



HAXM 이 부분에서 mac은 또 확인안됬다고 암호 한번 요구하는데 그거 인증 해주고  
보안설정에서 함더 확인해주면 다시 스뭇스하게 설치 진행을 할거야.  


<img width="794" alt="9" src="https://user-images.githubusercontent.com/55340876/74588572-e34fac80-5040-11ea-95d0-b481778f49fa.png">



Finish!!!


<img width="661" alt="10" src="https://user-images.githubusercontent.com/55340876/74588520-a97ea600-5040-11ea-9b1b-a440bf985d34.png">



요래 창이 뜨는데,  
자자 잘 따라와야해~  



<img width="796" alt="11" src="https://user-images.githubusercontent.com/55340876/74588521-aa173c80-5040-11ea-9b59-1111e976fcbc.png">



Configure -> Preferences  

<img width="1024" alt="12" src="https://user-images.githubusercontent.com/55340876/74588529-adaac380-5040-11ea-8362-d0d85a22f976.png">



Plugins -> Flutter Install 클릭  

![13](https://user-images.githubusercontent.com/55340876/74588538-c0bd9380-5040-11ea-9783-c595a0a1e11b.gif)



이러면 Dart 까지 깔고 재시작이 될거야.  

자, flutter doctor 실행후, 라이센스 인증 잊지말자!  

---
# Xcode 설치

그다음엔 App Store 에서 Xcode 설치!  

음.. 명령어를 통해서 해도 되고 따로 사이트를 들어가도 되는데,  
나는 App Store 통해서 했어  

<img width="472" alt="14" src="https://user-images.githubusercontent.com/55340876/74588544-c5824780-5040-11ea-866b-29015e991108.png">


<img width="830" alt="15" src="https://user-images.githubusercontent.com/55340876/74588551-cd41ec00-5040-11ea-9700-a88d6b5dbe82.png">



설치후에 다시 flutter doctor를 치면 저렇게 모지란 부분 채워주라고 친절히 가이드를 주지!  
자자 얼른 따라서 마저 설치하자  

<img width="807" alt="16" src="https://user-images.githubusercontent.com/55340876/74588557-d337cd00-5040-11ea-915a-4f306698dc00.png">


뾰로롱!!!!  
가이드를 다 따라오면 요래요래 완성!!  
여까지하면 완벽히 된겨!! 잘 따라왔구먼!!! 귣결귣뽀이~   

맨밑에 ```! No devices available``` 은 아직 디바이스를 실행하기 전이니까 괜찮아!  

---

# 안드로이드 Emulator 생성


![17](https://user-images.githubusercontent.com/55340876/74588561-d632bd80-5040-11ea-8d4d-a0ff6174fc80.gif)



![18](https://user-images.githubusercontent.com/55340876/74588567-de8af880-5040-11ea-8a7a-88ad1debddd7.gif)




자자 gif 대로 잘 따라오고 있지?!

<img width="992" alt="19" src="https://user-images.githubusercontent.com/55340876/74588526-ac799680-5040-11ea-9206-0dd27dd0d4c0.png">



Q -> Next !!

<img width="992" alt="20" src="https://user-images.githubusercontent.com/55340876/74588527-ad122d00-5040-11ea-9fba-24a59f3acadd.png">



Hardware -> Finish !!

<img width="1196" alt="21" src="https://user-images.githubusercontent.com/55340876/74588530-aedbf080-5040-11ea-983b-2c46f6cd6333.png">



세모세모 버튼을 클릭해주자! 

<img width="1346" alt="22" src="https://user-images.githubusercontent.com/55340876/74588541-c3b88400-5040-11ea-90fa-3d4be443fbbf.png">



빼앰!!  
오랜만에 보는 안드로이드 화면이구먼!!

<img width="809" alt="23" src="https://user-images.githubusercontent.com/55340876/74588546-c6b37480-5040-11ea-8bd5-c978eef2be38.png">



flutter doctor 를 쳐서 완료 된 거 확인 해주고~

<img width="807" alt="24" src="https://user-images.githubusercontent.com/55340876/74588553-cf0baf80-5040-11ea-8c89-41f006c5dbbd.png">



다시 안드로이드 스튜디오 상단에서 디버그모드 클릭해줘

<img width="807" alt="25" src="https://user-images.githubusercontent.com/55340876/74588558-d5019080-5040-11ea-9282-a81a25d71860.png">



하단 콘솔창에서 디버그모드가 실행이 될 때까지 기다리면...


![26](https://user-images.githubusercontent.com/55340876/74588562-d8951780-5040-11ea-8137-4e3660c1488c.gif)



BOOM!!!   
완료완료!!

---

# iOS Emulator 생성

자 이제 iOS 시뮬래이터~~~~~   
터미널에 명령어를 실행해주자

```
$ open -a Simulator
```


<img width="484" alt="27" src="https://user-images.githubusercontent.com/55340876/74588564-da5edb00-5040-11ea-812c-af6354c363bf.png">



로딩로딩 듀근듀근

<img width="756" alt="28" src="https://user-images.githubusercontent.com/55340876/74588533-b3a0a480-5040-11ea-84f4-a5d2fe4bacbe.png">



디바이스 종류는 맘에 드는 걸로 바꿀 수 있어!
 
<img width="468" alt="29" src="https://user-images.githubusercontent.com/55340876/74588534-bbf8df80-5040-11ea-909f-3b80aea5e09d.png">



자자 로딩 완료되면 요래 뜨지?!  
안드로이드 스튜디오 실행중이던걸 가서~


<img width="642" alt="30" src="https://user-images.githubusercontent.com/55340876/74588536-bef3d000-5040-11ea-99ac-66371b1c9cb2.png">



아이폰 디바이스로 바꿔준 다음에~

<img width="728" alt="31" src="https://user-images.githubusercontent.com/55340876/74588542-c4511a80-5040-11ea-97ff-80d1fc129d6a.png">




디버그 모드~ 

<img width="696" alt="32" src="https://user-images.githubusercontent.com/55340876/74588547-c7e4a180-5040-11ea-9f2f-5cc88837f630.png">



BOOM!!  
버튼 클릭해서 숫자 올라가는 것도 확인해줘!  

만약 디버그모드 했는데 흰 화면만 나오면,

<img width="351" alt="33" src="https://user-images.githubusercontent.com/55340876/74588554-cfa44600-5040-11ea-8ed2-ce1cb26c47ab.png">



요 빨간 버튼 눌러서 Stop 한 뒤에 다시 디버그모드 눌러봐!
이 방법도 안되면,

<img width="700" alt="34" src="https://user-images.githubusercontent.com/55340876/74588556-d206a000-5040-11ea-8dc4-85ad45cfaa9d.png">



Xcode 로 실행해주는 방법도 있어!  

자 플러터 프로젝트 안에 pod file 추가를 해주자  

터미널을 통해  
~/AndroidStudioProjects/flutter_app/ios 폴더까지 가서!  

```
$ pod init
$ pod install
```

<img width="578" alt="35" src="https://user-images.githubusercontent.com/55340876/74588563-d9c64480-5040-11ea-8970-60d8fe35956c.png">



빼앰!  

휴... 참 오래도 걸렸다 그치?!  
박수짝짝!!  

```
$ flutter doctor -v
```

최종 버전 확인 해볼까?

<img width="821" alt="36" src="https://user-images.githubusercontent.com/55340876/74588565-db900800-5040-11ea-8934-f2acdadb9c29.png">


자 이제 이 상태로 디바이스 상태 실행이 되는데 그건 차차 알아가자!!  


---
---

# Reference  
- [더코딩파파 유튜브](http://bit.ly/TheCodingPapa)

