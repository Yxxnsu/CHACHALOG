---
title: '๐ [Flutter] ์บ๋ฆญํฐ ํ์ด์ง ๋์์ธ'
date: 2020-02-10 02:30:00
category: 'Flutter'
draft: false 
showToc: true
---

<!-- Draft Post -->
<!-- Draft Post -->
<!-- Draft Post -->
<!-- Draft Post -->
<!-- Draft Post -->

# ์์ ฏ์ ๋ฆฌ

```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Charactor card',
      home: MyCard(),
    );
  }
}

class MyCard extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('JinJoo'),
        centerTitle: false, //์์ดํฐ์ ๊ธฐ๋ณธ์ ์ผ๋ก ๊ฐ์ด๋ฐ ์ ๋ ฌ ๋จน์ด์ ธ ์์. true ํ๋ฉด ๊ฐ์ด๋ฐ ์ ๋ ฌ๋จ.
        backgroundColor: Colors.redAccent, //๋ฐฑ๊ทธ๋ผ์ด๋ ์
        elevation: 0.0, //๊ทธ๋ฆผ์ํจ๊ณผ ์ง์์ค.์์น๋ก ๊ฐ์ ์ง์ ํด์ค(์์์ ๊น์ง ์ง์ ๊ฐ๋ฅ)
      ),
      body: Padding(
          padding: EdgeInsets.fromLTRB(30.0, 40.0, 0.0, 0.0), //ํจ๋ฉ๊ฐ ์ง์ 
      child: Column(
          mainAxisAlignment: MainAxisAlignment.center, //์ฑ์คํฌ๋ฆฐ๋ด์์ ์ธ๋ก์ถ์ผ๋ก center ์ ๋ ฌํ ๋ ์ฐ์
          children: <Widget>[ //ํ์คํธ ๋ฐฐ์ด์ ์ธ๋ก๋ก๋ง ์์น์ํด
            Text('์ฐจ์ฐจ๋ธ๋ก๊ทธ'),
            Text('์ฐจ์ฐจ๋ธ๋ก๊ทธ'),
            Text('์ฐจ์ฐจ๋ธ๋ก๊ทธ')
      ],
      ),
      ),
    );
  }
}

```


<img width="1439" alt="1" src="https://user-images.githubusercontent.com/55340876/74588887-bc46aa00-5043-11ea-9b4e-e1f347fddab7.png">



padding ์์ ฏ์ ์ง์์ ํ์ธํด๋ณด์  
Center ์์ ฏ์ด Column ์์ ฏ์ ๊ฐ์ธ๊ฒ!!


```dart
...


      body: Center(
        child: Column(
            mainAxisAlignment: MainAxisAlignment.center, //์ฑ์คํฌ๋ฆฐ๋ด์์ ์ธ๋ก์ถ์ผ๋ก center ์ ๋ ฌํ ๋ ์ฐ์
            children: <Widget>[ //ํ์คํธ ๋ฐฐ์ด์ ์ธ๋ก๋ก๋ง ์์น์ํด
              Text('์ฐจ์ฐจ๋ธ๋ก๊ทธ'),
              Text('์ฐจ์ฐจ๋ธ๋ก๊ทธ'),
              Text('์ฐจ์ฐจ๋ธ๋ก๊ทธ')
        ],
        ),
      ),


...
```

![2](https://user-images.githubusercontent.com/55340876/74588890-c1a3f480-5043-11ea-9411-e511c3b29468.gif)



---

```Column ์์ ฏ```
 - ์์ ์์ ฏ๋ค์๊ฒ ์ธ๋ก์ถ ๊ด๋ จํด์ ๋์ด ์ ์ฝ์ด ์ ํ ์์ผ๋ ๋ด ๋งด๋๋ก ํ์ฅํด๋ ๋จ! ์ด๋ผ๋ ์ฑ์ง์ด ์์
 
```Center ์์ ฏ๊ณผ Column ์์ ฏ์ด ๊ฒฐํฉํ์ ๋```
- Center ์์ ฏ์ Column ์์ ฏ์ ์์๋ค์ ๋ํ ์ธ๋ก์ถ ์์น์ ๋ํด์  ๊ด์ฌํ์ง ์๊ณ ,
ํ์ฌ Column ์์ ฏ์ ์์ ์์ ฏ ์ธ๋ก์ถ ๋์ด์ ์๋์ผ๋ก ํฝ์ค๊ฐ ๋์ด๋ฒ๋ฆฐ๋ค.
์ด๋ด ๊ฒฝ์ฐ,

```mainAxisAlignment: MainAxisAlignment.center,``` ๋ถ๋ถ์ ์์ ๋ฒ๋ฆฌ๋ฉด?


<img width="1521" alt="3" src="https://user-images.githubusercontent.com/55340876/74588893-c8cb0280-5043-11ea-90d4-dc7c714a7659.png">



์ด๋ฐ ์์ผ๋ก ๊ฐ๋ก์ถ์ผ๋ก๋ง ์ ์ค์์ ์์นํ๊ฒ ๋๋ค.  
๊ทธ๋์ Center ์์ ฏ๊ณผ Column ์์ ฏ์ด ๊ฒฐํฉํ์ ๋,  
์ธ๋ก์ถ ์์ผ๋ก ์ ์ค์์ Column ์์ ฏ์ ์์๋ค์ ์์น์ํค๋ ค๋ฉด MainAxisAlignment ๊ฐ ๊ผญ ํ์ํ๋ค!

**์ ๋ฆฌํ์๋ฉด,  
Column ์์ ฏ์ ๊ฐ๋ก์ถ ์์ผ๋ก ์ ์ค์์ ์์น์ํค๋ ค๋ฉด Center ์์ ฏ์ ์ฌ์ฉํ๊ณ   
์ธ๋ก์ถ์ผ๋ก ์ ์ค์์ ์์น์ํค๋ ค๋ฉด Column ์์ ฏ ๋ด์์ MainAxisAlignment ์์ฑ์ ์ฌ์ฉํ๋ฉด ๋๋ค!**

---

# ์ค์ ์ฝ๋ฉ 1

```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'JinJoo',
      home: Grade(),
    );
  }
}

class Grade extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.amber[500],
      appBar: AppBar(
        title: Text('JinJoo'),
        backgroundColor: Colors.amber[700],
        centerTitle: true,
        elevation: 0.0,
      ),
      body: Padding(
          padding: EdgeInsets.fromLTRB(30.0, 40.0, 0.0, 0.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start, //์์์  ์ ๋ ฌ
            children: <Widget>[
              Text('NAME',
              style: TextStyle(
                color: Colors.white,
                letterSpacing: 2.0, //์ฒ ์๊ฐ์ ๊ฐ๊ฒฉ
              ),
              ),
              SizedBox( //๋น box๋ฅผ ๋ฃ์ด์ค์ผ๋ก ๊ธ์ ์ธ๋ก ๊ฐ๊ฒฉ์ ๋ํ์ค
                height: 10.0,
              ),
              Text('JinJoo',
              style: TextStyle(
                color: Colors.white,
                letterSpacing: 2.0,
                fontSize: 28.0,
                fontWeight: FontWeight.bold
              ),),
            ],
          ),
      ),

    );
  }
}

```


<img width="1024" alt="4" src="https://user-images.githubusercontent.com/55340876/74588895-ca94c600-5043-11ea-981c-38bcfaa41e99.png">



---

# ์ค์ ์ฝ๋ฉ 2 (์ต์ข์ฝ๋)

**pubspec.yaml ํ์ผ์์ assets ๋ถ๋ถ์ ๋ด๊ฐ ๋ฃ์ ์ด๋ฏธ์ง ์ฝ๋๋ก ์์ .  
assets -> duck.png, moana.gif ์ถ๊ฐ.**


```dart
  assets:
   - assets/duck.png
   - assets/moana.gif
```

```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false, //์ฐ์ธก์๋น ๋๋ฒ๊ทธ ๋นจ๊ฐ๋  ์ ๊ฑฐ
      title: 'JinJoo',
      home: Grade(),
    );
  }
}

class Grade extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.amber[800],
      appBar: AppBar(
        title: Text('JinJoo'),
        backgroundColor: Colors.amber[700],
        centerTitle: true,
        elevation: 0.0,
      ),
      body: Padding(
        padding: EdgeInsets.fromLTRB(30.0, 40.0, 0.0, 0.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start, //์์์  ์ ๋ ฌ
          children: <Widget>[
            Center(
              child: CircleAvatar(
                backgroundImage: AssetImage('assets/moana.gif'),
                radius: 60.0,
              ),
            ),
            Divider(
              //๋ถ๋ฆฌ์  ์์ ฏ
              height:
                  60.0, //์์ฒด๋์ด๊ฐ ์๋๋ผ ์ 30.0 + ์๋ 30.0 ์ผ๋ก ์ฌ์ด ๊ฐ๊ฒฉ์ด ํฉ์ณ์ ธ์ 60.0์ด๋ ๊ฒ.
              color: Colors.grey[850],
              thickness: 0.5, //์ ์ ๋๊ป
              endIndent: 30.0, //์ ์ด ๋์์๋ถํฐ ์ด๋์ ๋ ๋จ์ด์ ธ์ผ ํ ์ง ์ง์ ํด์ค
            ),
            Text(
              'NAME',
              style: TextStyle(
                color: Colors.white,
                letterSpacing: 2.0, //์ฒ ์๊ฐ์ ๊ฐ๊ฒฉ
              ),
            ),
            SizedBox(
              //๋น box๋ฅผ ๋ฃ์ด์ค์ผ๋ก ๊ธ์ ์ธ๋ก ๊ฐ๊ฒฉ์ ๋ํ์ค
              height: 10.0,
            ),
            Text(
              'JINJOO',
              style: TextStyle(
                  color: Colors.white,
                  letterSpacing: 2.0,
                  fontSize: 28.0,
                  fontWeight: FontWeight.bold),
            ),
            SizedBox(
              height: 30.0,
            ),
            Text(
              'JINJOO POWER LEVEL',
              style: TextStyle(
                color: Colors.white,
                letterSpacing: 2.0, //์ฒ ์๊ฐ์ ๊ฐ๊ฒฉ
              ),
            ),
            SizedBox(
              //๋น box๋ฅผ ๋ฃ์ด์ค์ผ๋ก ๊ธ์ ์ธ๋ก ๊ฐ๊ฒฉ์ ๋ํ์ค
              height: 10.0,
            ),
            Text(
              '14',
              style: TextStyle(
                  color: Colors.white,
                  letterSpacing: 2.0,
                  fontSize: 28.0,
                  fontWeight: FontWeight.bold),
            ),
            SizedBox(
              height: 30.0,
            ),
            Row( //๋ณต์์ ์์ ฏ๋ค์ ๊ฐ๋ก๋ก ๊ฐ์ด ๋์ดํด์ผํ  ๋ ์ฐ๋ ์์ ฏ
              children: <Widget>[
                Icon(Icons.check_circle_outline), //์์ด์ฝ ์์ ฏ
                SizedBox(
                  width: 10.0, //์์ด์ฝ๊ณผ ํ์คํธ ์ฌ์ด ๊ฐ๋ก ๊ฐ๊ฒฉ ์กฐ์ 
                ),
                Text(
                  'using lightsaber',
                  style: TextStyle(fontSize: 16.0, letterSpacing: 1.0),
                ),
              ],
            ),
            Row(
              children: <Widget>[
                Icon(Icons.check_circle_outline),
                SizedBox(
                  width: 10.0,
                ),
                Text(
                  'face hero tattoo',
                  style: TextStyle(fontSize: 16.0, letterSpacing: 1.0),
                ),
              ],
            ),
            Row(
              children: <Widget>[
                Icon(Icons.check_circle_outline),
                SizedBox(
                  width: 10.0,
                ),
                Text(
                  'fire flames',
                  style: TextStyle(fontSize: 16.0, letterSpacing: 1.0),
                ),
              ],
            ),
            Center(
              child: CircleAvatar(
                backgroundImage: AssetImage('assets/duck.png'),
                radius: 60.0,
                backgroundColor: Colors.amber[800],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

```



![5](https://user-images.githubusercontent.com/55340876/74588896-cb2d5c80-5043-11ea-9190-08b15d7be9a2.gif)




``backgroundColor: Colors.amber[800]``
``Icon(Icons.check_circle_outline)``

์ด ๋,
``.`` ์ ํญ์ ์์ ฏ์ด ๊ฐ๊ณ ์๋ ์ฌ๋ฌ ์์ฑ์ด๋ ๊ธฐ๋ฅ, ๊ด๋ จ ์์ดํ๋ค ์ค์์ ํ๋๋ฅผ ์ ํํ๊ณ  ์ถ์ ๋ ์ฌ์ฉํ๋ค๊ณ  ์ดํดํ์!


<br/>


---
---

# Reference  
- [์ฝ๋ฉ์ฐํ ์ ํ๋ธ](https://www.youtube.com/channel/UC_2ge45JCuJH1z6VYt4iCgQ)

