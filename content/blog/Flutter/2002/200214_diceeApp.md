---
title: '๐ [Flutter] Dicee App'
date: 2020-02-14 23:30:00
category: 'Flutter'
draft: false 
showToc: true
---


# setState method

<br/>

๋ณ์์ ๊ฐ์ด ๋ณ๊ฒฝ๋๋ฉด ๊ทธ ๋ณ์๊ฐ ์ฌ์ฉ๋๋ ๋ชจ๋  ์ฅ์๋ฅผ ์๋ฐ์ดํธ ํ๋ค.  
๊ทธ๋ฌ๊ธฐ ์ํด์ ``setState`` ๋ผ๋ ๋ฉ์๋๋ฅผ ํธ์ถํ๋ค.  

์ด ๋ฉ์๋๋ ์๋ฐ์ดํธ ๋๋ ๊ฐ์ ๋ณํ๊ฐ ์ฌ์ฉ๋๋ ๋ถ๋ถ์ด  
ํ๋ฉด์์ ์๋ฐ์ดํธ ๋  ์ ์๋๋ก stateful ์์ ฏ์ ๋ค์ ๋น๋ํ๋ค.  

<br/>

FlatButton ์ ๋๋ฅด๋ฉด onPressed ๋ฆฌ์ค๋๊ฐ ํธ๋ฆฌ๊ฑฐ๋๊ณ   
changeDiceFace() ํจ์๋ฅผ ์ฐพ๋๋ฐ,  
์๋จ changeDiceFace() ํจ์๋ฅผ ์ฐพ์ ์์ ์๋ setState๋ฅผ ํธ์ถํ๊ณ ,   
leftDiceNumber ์ rightDiceNumber ์ ๊ฐ์ ๋ณ๊ฒฝํ๋ค.

<br/>

```dart
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
      //nextInt(max) ๋ 0 ~ (max) ๊น์ง ๋๋ค ์นด์ดํธ ํด์ฃผ๋ 0 ~ 5 ๊น์ง๋ง ๋์ด.
      //1 ~ 6 ๊น์ง๋ฅผ ์ํ๋ฉด ๋์ + 1 ์ ํด์ฃผ๋ฉด ๋๋ค.
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
              //FlatButton ์์ ฏ์ void ์ฝ๋ฐฑ () ์ ๊ฐ์ง. ์ธ์๊ฐ ์์ผ๋ฉฐ ๋ฐ์ดํฐ๋ฅผ ๋ฐํ์ํจ.
              //๊ณ ๋ก ์ต๋ชํจ์. onPressed: () { //doSomething }
              onPressed: () {
                changeDiceFace();
              },
              child: Image.asset(
                //์ด๋ฏธ์ง ์์ ฏ๋ณด๋ค ์ฝ๋๋ฅผ ๊ฐ๊ฒฐํ๊ฒ ํด์ค
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
- [Angela Yu ๊ฐ์(์ ๋ฃ)](https://www.udemy.com/course/flutter-bootcamp-with-dart/)
