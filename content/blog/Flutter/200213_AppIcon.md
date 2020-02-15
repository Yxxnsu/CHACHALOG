---
title: '💎 [Flutter] 앱 아이콘 변경하기'
date: 2020-02-13 03:05:00
category: 'Flutter'
draft: false 
showToc: true
---


# 1. 앱 아이콘 이미지 파일 준비

<br/>

# 2. [appicon 사이트](https://appicon.co/) 통해서 앱 아이콘 파일 받기

준비 된 이미지 파일을 끌어다가 넣고,  
해당 기기들을 선택하고 Generate 클릭하면  
zip 형태로 다운 받아진다.  

압축을 풀고 폴더를 준비해놓자.

![1](https://user-images.githubusercontent.com/55340876/74589033-2449c000-5045-11ea-81a0-0d5fe7a75101.gif)


  
<br/>

# 3. 기존 폴더 삭제 후, 적용할 폴더 옮기기

(안드로이드 스튜디오 iOS 기준)

![2](https://user-images.githubusercontent.com/55340876/74589035-2ad83780-5045-11ea-926b-d214bb20299d.gif)



## **iOS는?**

- ios -> Runner -> Assets.xcassets 폴더 마우스 우클릭 -> Reveal in Finder 클릭      
-> 기존 Assets.xcassets 폴더 삭제후, 적용할 폴더 옮기기

## **안드로이드는?**
  
- android -> app -> src -> main -> res 폴더 마우스 우클릭 -> Reveal in Finder 클릭    
-> 기존 mipmap 폴더 삭제후, 적용할 폴더 옮기기


<br/>

# 4. Simulator 재실행

(안드로이드 기기라면 Android Emulator 를 재실행 해주면 확인된다.)

<img width="389" alt="3" src="https://user-images.githubusercontent.com/55340876/74589038-2f045500-5045-11ea-8232-7556adf8859d.png">



<br/>

짠!!!   
요로코롬 변한 앱 아이콘을 확인할 수 있다.

정말 쉽지 않은가?! 

<br/>

---

# * 안드로이드 아이콘 모양 변경하기

보통의 안드로이드 앱 아이콘이라면 원형 모양으로 되어있다.  

틀에 맞게 모양이나 이미지 자체의 사이즈를 바꾸고 싶다면?

- android -> app -> src -> main -> res 폴더 마우스 우클릭 ->  New -> Image Asset   
  -> 입맛에 맞게 변경 -> Next -> Finish

<br/>

![4](https://user-images.githubusercontent.com/55340876/74589039-30358200-5045-11ea-80a1-5e33428ca0e2.gif)



<br/>


---
---

# Reference  
- [Angela Yu 강의(유료)](https://www.udemy.com/course/flutter-bootcamp-with-dart/)

