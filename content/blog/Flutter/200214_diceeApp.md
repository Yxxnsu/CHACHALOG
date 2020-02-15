---
title: '💎 [Flutter] Dicee App'
date: 2020-02-14 23:30:00
category: 'Flutter'
draft: false 
showToc: true
---


# setState method

<br/>

변수의 값이 변경되면 그 변수가 사용되는 모든 장소를 업데이트 한다.  
그러기 위해서 ``setState`` 라는 메소드를 호출한다.  

이 메소드는 업데이트 되는 값의 변화가 사용되는 부분이  
화면에서 업데이트 될 수 있도록 stateful 위젯을 다시 빌드한다.  

<br/>

FlatButton 을 누르면 onPressed 리스너가 트리거되고  
changeDiceFace() 함수를 찾는데,  
상단 changeDiceFace() 함수를 찾아 안에 있는 setState를 호출하고,   
leftDiceNumber 와 rightDiceNumber 의 값을 변경한다.

<br/>

```go
import 'dart:math';
import 'package:flutter/material.dart';

void main() {
  return runApp(
    MaterialApp(
      home: Scaffold(
        backgroundColor: Colors.red,
        appBar: AppBar(
          title: Text('Dicee'),
          backgroundColor: Colors.red,
        ),
        body: DicePage(),
      ),
    ),
  );
}

class DicePage extends StatefulWidget {
  @override
  _DicePageState createState() => _DicePageState();
}

class _DicePageState extends State<DicePage> {
  int leftDiceNumber = 1;
  int rightDiceNumber = 1;

  void changeDiceFace() {
    setState(() {
      leftDiceNumber = Random().nextInt(6) + 1;
      rightDiceNumber = Random().nextInt(6) + 1;
      //nextInt(max) 는 0 ~ (max) 까지 랜덤 카운트 해주니 0 ~ 5 까지만 나옴.
      //1 ~ 6 까지를 원하면 끝에 + 1 을 해주면 된다.
    });
  }

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: <Widget>[
          Expanded(
            flex: 1,
            child: FlatButton(
              //FlatButton 위젯은 void 콜백 () 을 가짐. 인수가 없으며 데이터를 반환안함.
              //고로 익명함수. onPressed: () { //doSomething }
              onPressed: () {
                changeDiceFace();
              },
              child: Image.asset(
                //이미지 위젯보다 코드를 간결하게 해줌
                'images/dice$leftDiceNumber.png',
              ),
            ),
          ),
          Expanded(
            flex: 1,
            child: FlatButton(
              onPressed: () {
                changeDiceFace();
              },
              child: Image.asset(
                'images/dice$rightDiceNumber.png',
              ),
            ),
          ),
        ],
      ),
    );
  }
}

```

![1](https://user-images.githubusercontent.com/55340876/74589259-1eed7500-5047-11ea-9708-bbb648aa3a45.gif)



<br/>


---
---


# Reference  
- [Angela Yu 강의(유료)](https://www.udemy.com/course/flutter-bootcamp-with-dart/)
