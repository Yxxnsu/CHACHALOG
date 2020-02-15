---
title: '💎 [Flutter] Flutter란?'
date: 2020-02-07 01:19:00
category: 'Flutter'
draft: false 
showToc: true
---

<!-- Draft Post -->
<!-- Draft Post -->
<!-- Draft Post -->
<!-- Draft Post -->
<!-- Draft Post -->

# flutter? 그게 뭔데?

<img width="849" alt="1" src="https://user-images.githubusercontent.com/55340876/74588806-e350ac00-5042-11ea-940c-962706b5f689.png">



- **Flutter는 프레임워크**
  - 자동차를 만드는 공장을 생각해봐라.  
우선 자동차의 틀.   
즉, 프레임워크를 준비하고  
정해진 위치에 정해진 부속품들을 조립해서 자동차를 완성한다.  
이런 규칙이 존재하면 보다 쉽고 빠르게 자동차를 만들 수 있다.  
플러터는 이렇게 앱을 만들기 위한 정확한 규칙이 제공되는 틀이다.  

<br/>

- **Fuchsia의 사용자 인터페이스와 애플리케이션을 만들기 위해 사용**
  - 즉, 플러터로 만든 안드로이드 앱은 어떠한 수정도 필요없이  
그대로 fuchsia에서 완벽하게 작동한다.  
이 말은 만약 구글 바램대로 fuchsia 가 모든 기기를 아우르는 os가 된다면  
우리는 플러터로 단지 스마트폰용 앱이 아닌,  
다양한 기기에서 작동되는 앱을 만들 수도 있다는 의미가 된다.

<br/>

- **flutter 앱 개발을 위한 프로그래밍 언어로는 Dart 언어를 사용**
  - 안드로이드 앱을 만들 때 java 를 사용하듯이!  

<br/>

- **크로스 플랫폼(안드로이드, iOS) 애플리케이션 동시개발**

<br/>

- **인터페이스나 사용자 경험을 하나로 통일**
  - 자체적으로 인터페이스를 렌더링하기 때문에 안드로이드나 iOS 구별없이 같은 사용자 경험을 제공

<br/> 

---

<br/>

# Widget
- 독립적으로 실행되는 작은 프로그램
- 주로 바탕화면 등에서 날씨나 뉴스, 생활정보 등을 보여줌
- 그래픽이나 데이터 요소를 처리하는 함수를 갖고있음

<br/>

# flutter에서 쓰이는 Widget 이란?

![2](https://user-images.githubusercontent.com/55340876/74588812-eba8e700-5042-11ea-8e1b-6461cfaf87d3.png)



1. **UI를 만들고 구성하는 모든 기본 단위 요소**
   - nav bar의 text나 icon,  
 body의 image나 text field, button 등등..  
 앱 화면을 구성하고 있는 이 모든 것들이 다 위젯이다.
 
 
 
 
![3](https://user-images.githubusercontent.com/55340876/74588816-f1063180-5042-11ea-97fc-2032543096d1.png)



 
2. **눈에 보이지 않는 요소들까지 위젯**
   - 요소들을 정중앙에 위치시키기 위한 기능을 담당하는 center,  
 세로로 배치시키기 위한 column,    
 위치를 세세히 지정하는 기능을 담당하는 padding 등..    
 레이아웃을 정의하는 모든 요소들도 위젯이라 한다.  
 
 
 
3. **Everything is a widget!!!**

<br/>

---

<br/>

# flutter에서 꼭 알아야 할 위젯


![4](https://user-images.githubusercontent.com/55340876/74588817-f2375e80-5042-11ea-82bb-03bc3ae5c8d0.png)



1. **Stateless Widget**
   - 앱 화면상에 존재만 할 뿐 아무것도 하지않음  
   - 어떠한 실시간 데이터도 저장하지 않음
   - 어떤 변화(모양, 상태)을 유발시키는 value값을 가지지 않음
 

![5](https://user-images.githubusercontent.com/55340876/74588818-f2cff500-5042-11ea-9023-a296bc1565c2.gif)



2. **Stateful Widget**
   - 사용자의 interaction에 따라서 모양, 상태가 바뀜  
  (체크박스나, 라디오버튼 등)
   - 데이터를 받게 되었을 때 모양이 바뀜  
  (text field에서 사용자가 무언가를 입력할 때마다 그 문자 정보를 표시해주는 과정에서 지속적으로 필드의 내용이 바뀜)
  
  
3. **Inherited Widget**
   - 나중에 알아보자.

 <br/>

 ---

 <br/>


 
 # Stateless와 Stateful의 의미

<img width="356" alt="6" src="https://user-images.githubusercontent.com/55340876/74588819-f5cae580-5042-11ea-9536-bd93d94cfc5c.png">




 1. **Stateless : 이전 상호작용의 어떠한 값도 저장하지 않음**
    - 상태가 없는 정적인 위젯 (어떤 움직임이나 변화가 없음)
    - 갱얼쥐가 안움직이네?!
  
![7](https://user-images.githubusercontent.com/55340876/74588820-f6fc1280-5042-11ea-89c7-11ea48cd3f5c.gif)



 2. **Stateful : Value 값을 지속적으로 추적 보존**
    - 계속 움직임이나 변화가 있는 위젯
    - 갱얼쥐가 움직이네?!

<br/>

---

<br/>


# Flutter Widget Tree
- **위젯들은 트리 구조로 정리될 수 있음**
  
<br/>

- **한 위젯 내에 얼마든지 다른 위젯들이 포함될 수 있음**
  
<br/>

- **위젯은 부모 위젯과 자식 위젯으로 구성**

<br/>

- **Parent widget을 widget container 라고 부르기도 함**

<br/>



![8](https://user-images.githubusercontent.com/55340876/74588822-fa8f9980-5042-11ea-817e-43afd451c3b4.png)



- **최상위 위치에는 ```MyApp``` 이란 위젯이 존재**
   - 앱의 root 위젯이자 앱의 시작점.
   - 이름이 꼭 MyApp 일 필요는 없고, 일종의 custom 위젯이다.
   - 여기서 MaterialApp 이란것이 빌드한다.

<br/>


- **```MaterialApp``` 위젯은 실질적으로 전체 앱을 감싸는 위젯이다.**
   - 우리가 설치했던 flutter SDK 에서 위젯이라 이름이 붙여진 모든 것들을 사용할 수 있게 됨

<br/>


- **```MyHomePage``` 도 custom 위젯이며 이름은 고쳐도 된다**
   - 여기서부터 본격적으로 앱의 디자인과 기능들이 만들어진다.

<br/>


- **```Scaffold``` 위젯은 아주 중요한 위젯**
   - 앱 화면과 기능을 구성하기 위한 빈 페이지를 준비해주는 위젯이다.
   - 이 위젯 밑으로 본격적으로 UI와 관련해서 보여지는 모든 앱의 구성요소 (이미지, 버튼, 텍스트, 눈에 보이지 않는 센터나 컬럼, 패딩 등..) 위젯들이 사용된다.

<br/>


- **```AppBar``` 위젯**
   - 앱 화면의 가장 상단에 위치.

<br/>


- **```Text``` 위젯**
   - AppBar 의 구성요소 중 하나 (nav)

<br/>


- **```Center``` 위젯**
   - 화면 중앙에 위치시키기 위함

<br/>


- **```Column``` 위젯**
   - 요소들을 세로로 위치

<br/>


- **```text.. button.. icon 위젯 등 순차적으로 위치하게 됨.```**

<br/>

---

<br/>

# 정리
1. **Fluuter의 모든 것은 Widget**

<br/>


2. **위젯이 전혀 변화가 없으면 stateless widgets**

<br/>


3. **위젯의 모양이나 상태가 바뀐다면 stateful widgets**

<br/>


4. **위젯은 트리구조로 구성되어 있음**


<br/>

---

<br/>

# 나는 왜 flutter를 배울까?

~~솔직히 18년도에 최악의 프로그래밍 언어 1위로 뽑히기도 했지만..~~

19년도엔 14위로 떨어졌다.  
발전가능성 및 트렌드 최우수 언어 20위로도 선정되었고!  
구글이 노력하는게 보이지 않나?!  


<img width="633" alt="9" src="https://user-images.githubusercontent.com/55340876/74588824-fb283000-5042-11ea-829d-1cc3fe6e2b4f.png">




그렇지만..  
구글이 버린게 하도 많아서 개발자들의 신뢰도도 낮은 것은 사실이다.

솔직히 dart라는 언어도 flutter 아니면 뭐 쓸데도 없고..

나는 코린이이고 개발자들 생태계를 잘 모른다.  
모르지만!!

dart와 flutter에 대해서 공식 사이트, 블로그, 유튜브를 꽤 봐왔는데  
처음볼때나 지금이나 나한테는 너무 신선했다!!  

![10](https://user-images.githubusercontent.com/55340876/74588814-ecda1400-5042-11ea-9eff-7933c174394c.gif)



매력적인 프레임워크임은 틀림없다!!  
지금도 리액트랑 같이 계속 공부를 하고있고!  
_(근데 자꾸 flutter 쪽으로 맘이 쏠린다.  
재밌어... 신선해.. 짜릿해..)_  

또 내 맴쏙 구석 쩌~기 한편으로는  
flutter가 국내에서 채용공고도 턱없이 적고,  
국내에서는 아직 dart나 flutter를 다루는 문서나 영상물도 적어서  
배우기가 힘든 것은 사실이다.  
이게 나한테 정말 도움을 줄 수 있을까? 싶기도 하다.  

요놈을 학습한다는 것은 정말 큰 모험이다.  
이게 득이 될 수도, 실이 될 수도 있는데..  
일단 시작한김에 한 번 제대로 배워보려고 한다.  



![11](https://user-images.githubusercontent.com/55340876/74588815-f06d9b00-5042-11ea-8f39-11ee4121097a.jpg)





어쨋든 배워두면 어따가 쓸 일이 생기지 않을까?  
가령 혼자 어플을 만들던지..  
음.. 혼자 어플을 만들던지..    
아니면 혼자 어플을 만들던지..  
그것도 아니면 혼자 어플을 만들던지..  

일단 쇠불도 단김에 빼랬다고 식기전에 호다닥 해보자! 버닝버닝!! 🔥




<br/>



---
---

# Reference  
- [코딩셰프 유튜브](https://www.youtube.com/channel/UC_2ge45JCuJH1z6VYt4iCgQ)

