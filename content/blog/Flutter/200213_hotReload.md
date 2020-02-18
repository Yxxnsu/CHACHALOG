---
title: '💎 [Flutter] Hot Reload / Hot Restart'
date: 2020-02-13 21:03:00
category: 'Flutter'
draft: false 
showToc: true
---


# Hot Reload란?

**저장을 하는 순간마다    
stl 위젯 안에 있는 빌드 위젯을 통해 앱 화면이 재호출된다.    
(가장 가까운 빌드 기능이 어디에 있는지 확인한 후 재실행)**

즉,  
**_statelessWidget 이 존재해야만 hot reload 기능을 사용할 수 있다._**

<br/>

개발을 할 때,  
코드 하나하나 변경사항이 존재하여 그것을 확인하고 싶으면  
항상 run을 다시 해줘야하는 번거로움이 있다.    
<br/>
<br/>
실험결과 Simulator 를 재실행하고 화면까지 호출되는데 30초 가량이 소비된다.  
물론 첫 실행때는 30초를 참아줘야겠지만..  
<br/>
<br/>
에러가 나지 않는 상황에 뭐 색상 하나 바꾼거 확인하는데도 30초를 대기타라고?!  
~~마 짱난하나! 내가 맛집도 웨이팅 길면 바로 패쓰하는 새럼이야!!!~~

![1](https://user-images.githubusercontent.com/55340876/74589094-ae922400-5045-11ea-9356-82cce747b4d0.jpg)




심지어 로딩도 길어서 기다리는 것도 짜증난다.  
(나는야 의지의 8282 한국인)   

<br/>

우리의 구세주,  
``Hot Reload``는 즉시 변경 사항을 볼 수 있게 해주어서  
각 개발에 걸리는 시간을 크게 줄일 수 있고  
그만큼 업무의 생산성도 높아지게끔 도와준다.  

실험결과 화면에 나타나는 데까지 대략 5초 정도 걸린다.  

<img width="316" alt="2" src="https://user-images.githubusercontent.com/55340876/74589096-afc35100-5045-11ea-80f5-68c919749d5a.png">



뻬리귣 👍🏻

<br/>
<br/>

빌드 내에 위젯 중 하나를 변경할 때마다 호출 할 수 있는 방법은 2가지다.   
- 맥 기준 command+s 클릭
- Hot Reload 버튼 (⚡️) 클릭
  
<br/>

사실상 command+s 클릭 방법이 효율적이다.

<br/>


```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());
//void main() {
//  runApp(
//      MyApp()
//  );
//}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        backgroundColor: Colors.blueGrey,
        body: Container(),
      ),
    );
  }
}

```

![3](https://user-images.githubusercontent.com/55340876/74589100-b356d800-5045-11ea-8ccc-75038ac63d8d.gif)




변경 사항이 있으면,  
Hot Reload를 통해 materialApp 이 재구성 되고 앱 화면에 바로 반영이 된다.

<br/>
<br/>

---

<br/>

# Hot Restart란?

**Hot Reload 버튼 (⚡️) 옆에 있는 저 초록색 재활용 비스무리한 버튼이다.  
앱의 상태를 빠르게 재설정 해준다.**

<br/>

처음부터 앱을 테스트 해야 한다면?  

가령, 카운팅 앱을 예를 들어보자.    

도넛 갯수는 처음에 0으로 시작한다.    
``+`` 버튼을 클릭할 때마다 도넛 갯수가 1씩 더해진다.

야무지게 클릭을 해주느라 도넛 갯수가 18이 되었는데  
모두 초기화 시키고 처음부터 앱을 다시 테스트 하고싶다면,   
``Hot Restart`` 를 눌러주자. 도넛 갯수가 0으로 바뀐다.

<br/>

배경색과 도넛 갯수를 초기화하는 실험을 한 결과,  
대략 8초의 시간이 걸렸다.



<img width="506" alt="4" src="https://user-images.githubusercontent.com/55340876/74589103-b5209b80-5045-11ea-8c40-4ab93da4fd11.png">



<br/>


---
---

# Reference  
- [Angela Yu 강의(유료)](https://www.udemy.com/course/flutter-bootcamp-with-dart/)

