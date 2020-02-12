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

  ![](https://images.velog.io/images/chajanee/post/3bcbe6d7-69ac-401f-96af-70e4c11e7052/2020-02-13%2002-24-25.2020-02-13%2002_25_33.gif)
  
<br/>

# 3. 기존 폴더 삭제 후, 적용할 폴더 옮기기

(안드로이드 스튜디오 iOS 기준)

  ![](https://images.velog.io/images/chajanee/post/94be9ca7-fc68-479d-8712-bf87777072be/2020-02-13%2002-18-36.2020-02-13%2002_22_22.gif)

## **iOS는?**

- ios -> Runner -> Assets.xcassets 폴더 마우스 우클릭 -> Reveal in Finder 클릭      
-> 기존 Assets.xcassets 폴더 삭제후, 적용할 폴더 옮기기

## **안드로이드는?**
  
- android -> app -> src -> main -> res 폴더 마우스 우클릭 -> Reveal in Finder 클릭    
-> 기존 mipmap 폴더 삭제후, 적용할 폴더 옮기기


<br/>

# 4. Simulator 재실행

(안드로이드 기기라면 Android Emulator 를 재실행 해주면 확인된다.)

![](https://images.velog.io/images/chajanee/post/769b338f-6162-4afc-8356-eda38c3c7477/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-13%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%202.38.45.png)

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

![](https://images.velog.io/images/chajanee/post/63f37a19-4c65-43d7-961a-64147aa92572/2020-02-13%2002-46-15.2020-02-13%2002_53_48.gif)


<br/>


---
---

# Reference  
- [Angela Yu 강의(유료)](https://www.udemy.com/course/flutter-bootcamp-with-dart/)

