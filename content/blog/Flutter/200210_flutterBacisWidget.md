---
title: '💎 [Flutter] 캐릭터 페이지 디자인'
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

# 위젯정리

```go
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
        centerTitle: false, //아이폰은 기본적으로 가운데 정렬 먹어져 있음. true 하면 가운데 정렬됨.
        backgroundColor: Colors.redAccent, //백그라운드 색
        elevation: 0.0, //그림자효과 지워줌.수치로 값을 지정해줌(소수점까지 지정가능)
      ),
      body: Padding(
          padding: EdgeInsets.fromLTRB(30.0, 40.0, 0.0, 0.0), //패딩값 지정
      child: Column(
          mainAxisAlignment: MainAxisAlignment.center, //앱스크린내에서 세로축으로 center 정렬할때 쓰임
          children: <Widget>[ //텍스트 배열을 세로로만 위치시킴
            Text('차차블로그'),
            Text('차차블로그'),
            Text('차차블로그')
      ],
      ),
      ),
    );
  }
}

```


![스크린샷 2020-02-10 오전 2.07.25.png](https://images.velog.io/post-images/chajanee/addf8f20-4b5e-11ea-8570-dbce49e001ff/-2020-02-10-2.07.25.png)

padding 위젯을 지워서 확인해보자  
Center 위젯이 Column 위젯을 감싸게!!


```go
      body: Center(
        child: Column(
            mainAxisAlignment: MainAxisAlignment.center, //앱스크린내에서 세로축으로 center 정렬할때 쓰임
            children: <Widget>[ //텍스트 배열을 세로로만 위치시킴
              Text('차차블로그'),
              Text('차차블로그'),
              Text('차차블로그')
        ],
        ),
      ),
```

![2020-02-10 02-09-40.2020-02-10 02_11_47.gif](https://images.velog.io/post-images/chajanee/5f9380a0-4b5f-11ea-8570-dbce49e001ff/2020-02-10-02-09-40.2020-02-10-021147.gif)

---

```Column 위젯```
 - 자식 위젯들에게 세로축 관련해서 높이 제약이 전혀 없으니 내 맴대로 확장해도 됨! 이라는 성질이 있음
 
```Center 위젯과 Column 위젯이 결합했을 때```
- Center 위젯은 Column 위젯의 자식들에 대한 세로축 위치에 대해선 관여하지 않고,
현재 Column 위젯의 자식 위젯 세로축 높이에 자동으로 픽스가 되어버린다.
이럴 경우,

```mainAxisAlignment: MainAxisAlignment.center,``` 부분을 없애버리면?


![스크린샷 2020-02-10 오전 2.18.58.png](https://images.velog.io/post-images/chajanee/46cc01e0-4b60-11ea-86a5-4dca15d8a4bf/-2020-02-10-2.18.58.png)

이런 식으로 가로축으로만 정중앙에 위치하게 된다.  
그래서 Center 위젯과 Column 위젯이 결합했을 때,  
세로축 상으로 정중앙에 Column 위젯의 자식들을 위치시키려면 MainAxisAlignment 가 꼭 필요하다!

**정리하자면,  
Column 위젯을 가로축 상으로 정중앙에 위치시키려면 Center 위젯을 사용하고  
세로축으로 정중앙에 위치시키려면 Column 위젯 내에서 MainAxisAlignment 속성을 사용하면 된다!**

---

# 실전코딩 1

```go
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
            crossAxisAlignment: CrossAxisAlignment.start, //시작점 정렬
            children: <Widget>[
              Text('NAME',
              style: TextStyle(
                color: Colors.white,
                letterSpacing: 2.0, //철자간의 간격
              ),
              ),
              SizedBox( //빈 box를 넣어줌으로 글자 세로 간격을 넓혀줌
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
![](https://images.velog.io/images/chajanee/post/f625cce3-aa98-4148-a602-7a6dd977b1d6/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-10%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%205.45.10.png)

---

# 실전코딩 2 (최종코드)

**pubspec.yaml 파일에서 assets 부분에 내가 넣은 이미지 코드로 수정.  
assets -> duck.png, moana.gif 추가.**


```go
  assets:
   - assets/duck.png
   - assets/moana.gif
```

```go
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false, //우측상당 디버그 빨간띠 제거
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
          crossAxisAlignment: CrossAxisAlignment.start, //시작점 정렬
          children: <Widget>[
            Center(
              child: CircleAvatar(
                backgroundImage: AssetImage('assets/moana.gif'),
                radius: 60.0,
              ),
            ),
            Divider(
              //분리선 위젯
              height:
                  60.0, //자체높이가 아니라 위 30.0 + 아래 30.0 으로 사이 간격이 합쳐져서 60.0이란 것.
              color: Colors.grey[850],
              thickness: 0.5, //선의 두께
              endIndent: 30.0, //선이 끝에서부터 어느정도 떨어져야 할지 지정해줌
            ),
            Text(
              'NAME',
              style: TextStyle(
                color: Colors.white,
                letterSpacing: 2.0, //철자간의 간격
              ),
            ),
            SizedBox(
              //빈 box를 넣어줌으로 글자 세로 간격을 넓혀줌
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
                letterSpacing: 2.0, //철자간의 간격
              ),
            ),
            SizedBox(
              //빈 box를 넣어줌으로 글자 세로 간격을 넓혀줌
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
            Row( //복수의 위젯들을 가로로 같이 나열해야할 때 쓰는 위젯
              children: <Widget>[
                Icon(Icons.check_circle_outline), //아이콘 위젯
                SizedBox(
                  width: 10.0, //아이콘과 텍스트 사이 가로 간격 조정
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

![](https://images.velog.io/images/chajanee/post/5926a886-06c6-43b2-baf6-9ebc80263232/2020-02-11%2000-36-02.2020-02-11%2000_36_45.gif)


``backgroundColor: Colors.amber[800]``
``Icon(Icons.check_circle_outline)``

이 때,
``.`` 은 항상 위젯이 갖고있는 여러 속성이나 기능, 관련 아이템들 중에서 하나를 선택하고 싶을 때 사용한다고 이해하자!


<br/>


---
---

# Reference  
- [코딩셰프 유튜브](https://www.youtube.com/channel/UC_2ge45JCuJH1z6VYt4iCgQ)

