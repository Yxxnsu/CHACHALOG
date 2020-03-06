---
title: '💎 [Flutter] Magic 8 Ball Challenge'
date: 2020-02-15 00:47:00
category: 'Flutter'
draft: false
showToc: true
---

# 예제

## 1. Stateless Widget 생성
- 초기 화면구현

<br/>



## 2. Stateful Widget 생성
- StatefulWidget 위젯으로 화면구현
- 주어진 이미지 넣어주기

<br/>



## 3. 콘솔 찍어보기
- FlatButton 위젯으로 화면구현
- 버튼을 누를 때 트리거 되는 문장 추가해서 콘솔로 확인하기
  
<br/>



## 4. 랜덤화
- dart:math 라이브러리의 메소드를 사용해 버튼 클릭시, 
  0~4 사이 랜덤숫자가 나오는 변수 만들기
- 콘솔로 잘되나 확인하기

<br/>




## 5. 상태 업데이트
- 버튼 클릭시, 1 ~ 5 사이의 주어진 이미지 랜덤 화면구현

<br/>





<br/>

---

<br/>



# 삽질한 부분

- ``child: Image.asset('이미지경로'),`` 이거이거!!  
 요 방법 쓰면 되는데 손이 자꾸 ImageAsset 위젯을 부른다..

<br/>

- ``FlatButton`` 위젯을 Center 위젯을 포함해서 감쌀지~  
 Center 위젯을 부모로 자식 위젯으로 들어갈지~ 라는 쓸데없는 고민을 했다.

 <br/>
 

- ``ballNumber = Random().nextInt(5) + 1;`` 요 부분에서    
 중복되는 코드 없이, 이놈은 딱 한 번만 써먹는데 굳이 함수로 만들어서 불러왔다. 


 <br/>
 

- ``StatefulWidget`` 이랑 ``setState`` 를 잊지말자...


<br/>


# 최종코드

```dart
import 'dart:math';
import 'package:flutter/material.dart';

void main() => runApp(
      MaterialApp(
        debugShowCheckedModeBanner: false,
        home: BallPage(),
      ),
    );

class BallPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.blue,
      appBar: AppBar(
        title: Text('Ask Me Anything'),
        backgroundColor: Colors.blue[900],
      ),
      body: Ball(),
    );
  }
}

class Ball extends StatefulWidget {
  @override
  _BallState createState() => _BallState();
}

class _BallState extends State<Ball> {
  int ballNumber = 1;

  @override
  Widget build(BuildContext context) {
    return Center(
      child: FlatButton(
        onPressed: () {
          setState(() {
            ballNumber = Random().nextInt(5) + 1;
          });
        },
        child: Image.asset(
          'images/ball$ballNumber.png',
        ),
      ),
    );
  }
}

```


![7](https://user-images.githubusercontent.com/55340876/74589292-565c2180-5047-11ea-84a3-16903d9ef9f0.gif)



<br/>


---
---

# Reference  
- [Angela Yu 강의(유료)](https://www.udemy.com/course/flutter-bootcamp-with-dart/)
