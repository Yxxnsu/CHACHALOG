---
title: '๐ [Flutter] Magic 8 Ball Challenge'
date: 2020-02-15 00:47:00
category: 'Flutter'
draft: false
showToc: true
---

# ์์ 

## 1. Stateless Widget ์์ฑ
- ์ด๊ธฐ ํ๋ฉด๊ตฌํ

<br/>



## 2. Stateful Widget ์์ฑ
- StatefulWidget ์์ ฏ์ผ๋ก ํ๋ฉด๊ตฌํ
- ์ฃผ์ด์ง ์ด๋ฏธ์ง ๋ฃ์ด์ฃผ๊ธฐ

<br/>



## 3. ์ฝ์ ์ฐ์ด๋ณด๊ธฐ
- FlatButton ์์ ฏ์ผ๋ก ํ๋ฉด๊ตฌํ
- ๋ฒํผ์ ๋๋ฅผ ๋ ํธ๋ฆฌ๊ฑฐ ๋๋ ๋ฌธ์ฅ ์ถ๊ฐํด์ ์ฝ์๋ก ํ์ธํ๊ธฐ
  
<br/>



## 4. ๋๋คํ
- dart:math ๋ผ์ด๋ธ๋ฌ๋ฆฌ์ ๋ฉ์๋๋ฅผ ์ฌ์ฉํด ๋ฒํผ ํด๋ฆญ์, 
  0~4 ์ฌ์ด ๋๋ค์ซ์๊ฐ ๋์ค๋ ๋ณ์ ๋ง๋ค๊ธฐ
- ์ฝ์๋ก ์๋๋ ํ์ธํ๊ธฐ

<br/>




## 5. ์ํ ์๋ฐ์ดํธ
- ๋ฒํผ ํด๋ฆญ์, 1 ~ 5 ์ฌ์ด์ ์ฃผ์ด์ง ์ด๋ฏธ์ง ๋๋ค ํ๋ฉด๊ตฌํ

<br/>





<br/>

---

<br/>



# ์ฝ์งํ ๋ถ๋ถ

- ``child: Image.asset('์ด๋ฏธ์ง๊ฒฝ๋ก'),`` ์ด๊ฑฐ์ด๊ฑฐ!!  
 ์ ๋ฐฉ๋ฒ ์ฐ๋ฉด ๋๋๋ฐ ์์ด ์๊พธ ImageAsset ์์ ฏ์ ๋ถ๋ฅธ๋ค..

<br/>

- ``FlatButton`` ์์ ฏ์ Center ์์ ฏ์ ํฌํจํด์ ๊ฐ์์ง~  
 Center ์์ ฏ์ ๋ถ๋ชจ๋ก ์์ ์์ ฏ์ผ๋ก ๋ค์ด๊ฐ์ง~ ๋ผ๋ ์ธ๋ฐ์๋ ๊ณ ๋ฏผ์ ํ๋ค.

 <br/>
 

- ``ballNumber = Random().nextInt(5) + 1;`` ์ ๋ถ๋ถ์์    
 ์ค๋ณต๋๋ ์ฝ๋ ์์ด, ์ด๋์ ๋ฑ ํ ๋ฒ๋ง ์จ๋จน๋๋ฐ ๊ตณ์ด ํจ์๋ก ๋ง๋ค์ด์ ๋ถ๋ฌ์๋ค. 


 <br/>
 

- ``StatefulWidget`` ์ด๋ ``setState`` ๋ฅผ ์์ง๋ง์...


<br/>


# ์ต์ข์ฝ๋

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
- [Angela Yu ๊ฐ์(์ ๋ฃ)](https://www.udemy.com/course/flutter-bootcamp-with-dart/)
