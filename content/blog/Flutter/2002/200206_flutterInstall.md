---
title: '๐ [Flutter] ์ค์น'
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

#MAC ๊ธฐ์ค  

VSCode ๊น์๋จ์ง?!  

java๋   

[Java SE Development Kit 8 Downloads](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)  

Java SE Development Kit 8 Downloads ๋ก ๋ฐ์!  

๋๋ java 13 ์ต์ ๋ฒ์ ์ผ๋ก ์งํํ๋๋ฐ ์๊พธ ์๋จนํ์..  
๋ค์ด๊ทธ๋ ์ด๋ํ๋๊น ์ํํ๊ฒ ์งํ๋๋๋ผ๊ณต!  
์ฌ๋ฌ๋ฒ์ ์ด ์์ผ๋ฉด ์  ๋ฒ์  ํด์ฃผ๋ฉด ๋๊ณ !!!  

ํ๊ฒฝ๋ณ์ ์ค์  ์์ง๋ง์!!  

---
# flutter SDK ์ค์น

[flutter SDK Downloads](https://flutter-ko.dev/docs/get-started/install/macos)  

์ผ๋จ ๋งํฌ๋ฅผ ๋ค์ด๊ฐ์ ๋ค์ด์ ๋ฐ์์ฃผ์.

<img width="961" alt="1" src="https://user-images.githubusercontent.com/55340876/74588517-a5528880-5040-11ea-9716-327de7aef2c3.png">

development ํด๋๋ฅผ ํ๋ ๋ง๋ค์ด์ ์ฌ๋ฐ ์์ถ์ ํ์ด์ค  
๊ทธ๋ฆฌ๊ณ   
flutter ํด๋ ๋๊ฐ์ ํ๋จ ๋ช๋ น์ด๋ฅผ ํตํด ํด๋ก  ํจ ๋ฐ์์ฃผ์!  

```go
$ git clone -b stable https://github.com/flutter/flutter.git
```

<img width="708" alt="2" src="https://user-images.githubusercontent.com/55340876/74588525-abe10000-5040-11ea-950b-a33de2086425.png">



๋บด์ฐ~!  


๋น ์ด์ด์


```go
$ vi ~/.bash_profile
$ export PATH="$PATH:$HOME/development/flutter/bin"
```
๋ช๋ น์ด ์๋ ฅ.

<img width="805" alt="3" src="https://user-images.githubusercontent.com/55340876/74588535-be5b3980-5040-11ea-9412-33ce690bb38c.png">



:wq ์ ์ฅ๋๊ฐ๊ธฐ!  
๊ทธ๋ฅ :q ํ๋ฉด ์ ์ฅ ์๋๋๊น ์กฐ์ฌํด!  

```go
$ source ~/.bash_profile
```

๋ค์ ์ ์ฉ ํ์ธ ํด์ฃผ๊ณ ~  

```go
$ flutter doctor
```

์ ๋ช๋ น์ด๋ฅผ ์ด์ฉํด์ ํ์ํ ํ๋ซํผ์ ํ์ธํด๋ณด์.  

<img width="1014" alt="4" src="https://user-images.githubusercontent.com/55340876/74588537-bf8c6680-5040-11ea-967d-559d76754f15.png">



์์ 4๊ฐ์ง๊ฐ ๋ฑ๋ด๋ ์๋ฃ ์๋ ๊ฒ ๊ฐ์ง?  
์ ๊ฑธ ๋ค ๊น์์ค์ผํด  

---

# Android Studio ์ค์น  

[Android Studio Downloads](https://developer.android.com/studio?hl=ko)

๋งํฌ๋ฅผ ํ๊ณ  ๋ค์ด๋ก๋ ํด์ฃผ์.


<img width="850" alt="5" src="https://user-images.githubusercontent.com/55340876/74588543-c4e9b100-5040-11ea-856b-3c01845102dd.png">



๋ค์ด ๋ฐ์๊ฑฐ ๋๋ธํด๋ฆญํ๋ฉด ์๋ ๋จ๋๋ฐ


<img width="654" alt="6" src="https://user-images.githubusercontent.com/55340876/74588548-cc10bf00-5040-11ea-8244-19212660374d.png">



์ด๋ , Android Studio ์์ด์ฝ์ Applications์ ๋ง์ฐ์ค๋ก ๋์ด์ค์ผํด!  
๊ฒฝ๋ก๋ ๊ทธ๋ฅ Do not ํ์ด!

![7](https://user-images.githubusercontent.com/55340876/74588555-d03cdc80-5040-11ea-9229-b84f632240ca.gif)



๋๋ ๋คํฌํ๊ฒ ์ข๊ธฐ ๋๋ฌธ์ ๋ฐ๋ก ๋ชจ๋๋ฅผ ์ ํํด์ค๊ฒ!

<img width="794" alt="8" src="https://user-images.githubusercontent.com/55340876/74588560-d59a2700-5040-11ea-99ea-97fa2b8db7af.png">



HAXM ์ด ๋ถ๋ถ์์ mac์ ๋ ํ์ธ์๋ฌ๋ค๊ณ  ์ํธ ํ๋ฒ ์๊ตฌํ๋๋ฐ ๊ทธ๊ฑฐ ์ธ์ฆ ํด์ฃผ๊ณ   
๋ณด์์ค์ ์์ ํจ๋ ํ์ธํด์ฃผ๋ฉด ๋ค์ ์ค๋ญ์คํ๊ฒ ์ค์น ์งํ์ ํ ๊ฑฐ์ผ.  


<img width="794" alt="9" src="https://user-images.githubusercontent.com/55340876/74588572-e34fac80-5040-11ea-95d0-b481778f49fa.png">



Finish!!!


<img width="661" alt="10" src="https://user-images.githubusercontent.com/55340876/74588520-a97ea600-5040-11ea-9b1b-a440bf985d34.png">



์๋ ์ฐฝ์ด ๋จ๋๋ฐ,  
์์ ์ ๋ฐ๋ผ์์ผํด~  



<img width="796" alt="11" src="https://user-images.githubusercontent.com/55340876/74588521-aa173c80-5040-11ea-9b59-1111e976fcbc.png">



Configure -> Preferences  

<img width="1024" alt="12" src="https://user-images.githubusercontent.com/55340876/74588529-adaac380-5040-11ea-8362-d0d85a22f976.png">



Plugins -> Flutter Install ํด๋ฆญ  

![13](https://user-images.githubusercontent.com/55340876/74588538-c0bd9380-5040-11ea-9783-c595a0a1e11b.gif)



์ด๋ฌ๋ฉด Dart ๊น์ง ๊น๊ณ  ์ฌ์์์ด ๋ ๊ฑฐ์ผ.  

์, flutter doctor ์คํํ, ๋ผ์ด์ผ์ค ์ธ์ฆ ์์ง๋ง์!  

---
# Xcode ์ค์น

๊ทธ๋ค์์ App Store ์์ Xcode ์ค์น!  

์.. ๋ช๋ น์ด๋ฅผ ํตํด์ ํด๋ ๋๊ณ  ๋ฐ๋ก ์ฌ์ดํธ๋ฅผ ๋ค์ด๊ฐ๋ ๋๋๋ฐ,  
๋๋ App Store ํตํด์ ํ์ด  

<img width="472" alt="14" src="https://user-images.githubusercontent.com/55340876/74588544-c5824780-5040-11ea-866b-29015e991108.png">


<img width="830" alt="15" src="https://user-images.githubusercontent.com/55340876/74588551-cd41ec00-5040-11ea-9700-a88d6b5dbe82.png">



์ค์นํ์ ๋ค์ flutter doctor๋ฅผ ์น๋ฉด ์ ๋ ๊ฒ ๋ชจ์ง๋ ๋ถ๋ถ ์ฑ์์ฃผ๋ผ๊ณ  ์น์ ํ ๊ฐ์ด๋๋ฅผ ์ฃผ์ง!  
์์ ์ผ๋ฅธ ๋ฐ๋ผ์ ๋ง์  ์ค์นํ์  

<img width="807" alt="16" src="https://user-images.githubusercontent.com/55340876/74588557-d337cd00-5040-11ea-915a-4f306698dc00.png">


๋พฐ๋ก๋กฑ!!!!  
๊ฐ์ด๋๋ฅผ ๋ค ๋ฐ๋ผ์ค๋ฉด ์๋์๋ ์์ฑ!!  
์ฌ๊น์งํ๋ฉด ์๋ฒฝํ ๋๊ฒจ!! ์ ๋ฐ๋ผ์๊ตฌ๋จผ!!! ๊ทฃ๊ฒฐ๊ทฃ๋ฝ์ด~   

๋งจ๋ฐ์ ```! No devices available``` ์ ์์ง ๋๋ฐ์ด์ค๋ฅผ ์คํํ๊ธฐ ์ ์ด๋๊น ๊ด์ฐฎ์!  

---

# ์๋๋ก์ด๋ Emulator ์์ฑ


![17](https://user-images.githubusercontent.com/55340876/74588561-d632bd80-5040-11ea-8d4d-a0ff6174fc80.gif)



![18](https://user-images.githubusercontent.com/55340876/74588567-de8af880-5040-11ea-8a7a-88ad1debddd7.gif)




์์ gif ๋๋ก ์ ๋ฐ๋ผ์ค๊ณ  ์์ง?!

<img width="992" alt="19" src="https://user-images.githubusercontent.com/55340876/74588526-ac799680-5040-11ea-9206-0dd27dd0d4c0.png">



Q -> Next !!

<img width="992" alt="20" src="https://user-images.githubusercontent.com/55340876/74588527-ad122d00-5040-11ea-9fba-24a59f3acadd.png">



Hardware -> Finish !!

<img width="1196" alt="21" src="https://user-images.githubusercontent.com/55340876/74588530-aedbf080-5040-11ea-983b-2c46f6cd6333.png">



์ธ๋ชจ์ธ๋ชจ ๋ฒํผ์ ํด๋ฆญํด์ฃผ์! 

<img width="1346" alt="22" src="https://user-images.githubusercontent.com/55340876/74588541-c3b88400-5040-11ea-90fa-3d4be443fbbf.png">



๋นผ์ฐ!!  
์ค๋๋ง์ ๋ณด๋ ์๋๋ก์ด๋ ํ๋ฉด์ด๊ตฌ๋จผ!!

<img width="809" alt="23" src="https://user-images.githubusercontent.com/55340876/74588546-c6b37480-5040-11ea-8bd5-c978eef2be38.png">



flutter doctor ๋ฅผ ์ณ์ ์๋ฃ ๋ ๊ฑฐ ํ์ธ ํด์ฃผ๊ณ ~

<img width="807" alt="24" src="https://user-images.githubusercontent.com/55340876/74588553-cf0baf80-5040-11ea-8c89-41f006c5dbbd.png">



๋ค์ ์๋๋ก์ด๋ ์คํ๋์ค ์๋จ์์ ๋๋ฒ๊ทธ๋ชจ๋ ํด๋ฆญํด์ค

<img width="807" alt="25" src="https://user-images.githubusercontent.com/55340876/74588558-d5019080-5040-11ea-9282-a81a25d71860.png">



ํ๋จ ์ฝ์์ฐฝ์์ ๋๋ฒ๊ทธ๋ชจ๋๊ฐ ์คํ์ด ๋  ๋๊น์ง ๊ธฐ๋ค๋ฆฌ๋ฉด...


![26](https://user-images.githubusercontent.com/55340876/74588562-d8951780-5040-11ea-8137-4e3660c1488c.gif)



BOOM!!!   
์๋ฃ์๋ฃ!!

---

# iOS Emulator ์์ฑ

์ ์ด์  iOS ์๋ฎฌ๋์ดํฐ~~~~~   
ํฐ๋ฏธ๋์ ๋ช๋ น์ด๋ฅผ ์คํํด์ฃผ์

```
$ open -a Simulator
```


<img width="484" alt="27" src="https://user-images.githubusercontent.com/55340876/74588564-da5edb00-5040-11ea-812c-af6354c363bf.png">



๋ก๋ฉ๋ก๋ฉ ๋๊ทผ๋๊ทผ

<img width="756" alt="28" src="https://user-images.githubusercontent.com/55340876/74588533-b3a0a480-5040-11ea-84f4-a5d2fe4bacbe.png">



๋๋ฐ์ด์ค ์ข๋ฅ๋ ๋ง์ ๋๋ ๊ฑธ๋ก ๋ฐ๊ฟ ์ ์์ด!
 
<img width="468" alt="29" src="https://user-images.githubusercontent.com/55340876/74588534-bbf8df80-5040-11ea-909f-3b80aea5e09d.png">



์์ ๋ก๋ฉ ์๋ฃ๋๋ฉด ์๋ ๋จ์ง?!  
์๋๋ก์ด๋ ์คํ๋์ค ์คํ์ค์ด๋๊ฑธ ๊ฐ์~


<img width="642" alt="30" src="https://user-images.githubusercontent.com/55340876/74588536-bef3d000-5040-11ea-99ac-66371b1c9cb2.png">



์์ดํฐ ๋๋ฐ์ด์ค๋ก ๋ฐ๊ฟ์ค ๋ค์์~

<img width="728" alt="31" src="https://user-images.githubusercontent.com/55340876/74588542-c4511a80-5040-11ea-97ff-80d1fc129d6a.png">




๋๋ฒ๊ทธ ๋ชจ๋~ 

<img width="696" alt="32" src="https://user-images.githubusercontent.com/55340876/74588547-c7e4a180-5040-11ea-9f2f-5cc88837f630.png">



BOOM!!  
๋ฒํผ ํด๋ฆญํด์ ์ซ์ ์ฌ๋ผ๊ฐ๋ ๊ฒ๋ ํ์ธํด์ค!  

๋ง์ฝ ๋๋ฒ๊ทธ๋ชจ๋ ํ๋๋ฐ ํฐ ํ๋ฉด๋ง ๋์ค๋ฉด,

<img width="351" alt="33" src="https://user-images.githubusercontent.com/55340876/74588554-cfa44600-5040-11ea-8ed2-ce1cb26c47ab.png">



์ ๋นจ๊ฐ ๋ฒํผ ๋๋ฌ์ Stop ํ ๋ค์ ๋ค์ ๋๋ฒ๊ทธ๋ชจ๋ ๋๋ฌ๋ด!
์ด ๋ฐฉ๋ฒ๋ ์๋๋ฉด,

<img width="700" alt="34" src="https://user-images.githubusercontent.com/55340876/74588556-d206a000-5040-11ea-8dc4-85ad45cfaa9d.png">



Xcode ๋ก ์คํํด์ฃผ๋ ๋ฐฉ๋ฒ๋ ์์ด!  

์ ํ๋ฌํฐ ํ๋ก์ ํธ ์์ pod file ์ถ๊ฐ๋ฅผ ํด์ฃผ์  

ํฐ๋ฏธ๋์ ํตํด  
~/AndroidStudioProjects/flutter_app/ios ํด๋๊น์ง ๊ฐ์!  

```
$ pod init
$ pod install
```

<img width="578" alt="35" src="https://user-images.githubusercontent.com/55340876/74588563-d9c64480-5040-11ea-8970-60d8fe35956c.png">



๋นผ์ฐ!  

ํด... ์ฐธ ์ค๋๋ ๊ฑธ๋ ธ๋ค ๊ทธ์น?!  
๋ฐ์์ง์ง!!  

```
$ flutter doctor -v
```

์ต์ข ๋ฒ์  ํ์ธ ํด๋ณผ๊น?

<img width="821" alt="36" src="https://user-images.githubusercontent.com/55340876/74588565-db900800-5040-11ea-8934-f2acdadb9c29.png">


์ ์ด์  ์ด ์ํ๋ก ๋๋ฐ์ด์ค ์ํ ์คํ์ด ๋๋๋ฐ ๊ทธ๊ฑด ์ฐจ์ฐจ ์์๊ฐ์!!  


---
---

# Reference  
- [๋์ฝ๋ฉํํ ์ ํ๋ธ](http://bit.ly/TheCodingPapa)

