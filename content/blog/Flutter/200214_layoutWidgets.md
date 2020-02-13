---
title: '💎 [Flutter] Layout widgets (수정중🧐)'
date: 2020-02-14 01:50:00
category: 'Flutter'
draft: false 
showToc: true
---

# 내가 써 본 레이아웃 위주로만 기재

# Single-child layout widgets

## Container
``Container`` : 하위요소 위젯의 구성, 장식, 위치를 지정해줌




```go
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
        backgroundColor: Colors.teal,
        body: SafeArea( //아이폰 M자 탈모처럼 화면 구성을 방해하는 요소와 상관없이 안정적으로 화면 구성을 해줌.
          child: Container(
            height: 100.0,
            width: 100.0,
//            margin: EdgeInsets.all(50.0),
//            margin: EdgeInsets.symmetric(vertical: 50.0, horizontal: 10.0),
//            margin: EdgeInsets.fromLTRB(10.0, 20.0, 0.0, 0.0),
            margin: EdgeInsets.only(left: 30.0),
            padding: EdgeInsets.all(20.0),
            color: Colors.white,
            child: Text('Hello'),
          ),
        ),
      ),
    );
  }
}

```

![](https://images.velog.io/images/chajanee/post/2b7ab340-5c6e-4f9f-bd97-894d50407463/2020-02-13%2023-43-21.2020-02-14%2000_36_48.gif)


``margin: EdgeInsets.all(50.0),`` : 외부 4면 모두 마진 50 만큼

``margin: EdgeInsets.symmetric(vertical: 50.0, horizontal: 10.0),`` 세로 50, 가로 10 만큼

``margin: EdgeInsets.fromLTRB(10.0, 20.0, 0.0, 0.0),`` left, top, right, bottom 순으로

``margin: EdgeInsets.only(left: 30.0),`` 왼쪽 30 주고 나머지는 다 0

``padding: EdgeInsets.all(20.0),`` 내부 4면 모두  패딩 20 만큼


``SafeArea`` widget : 아이폰 M자 탈모처럼 화면 구성을 방해하는 요소와 상관없이 안정적으로 화면 구성을 해줌.

<br/>

---

## SizedBox
``SizedBox`` : 가로, 세로 요소 사이 여백주는 위젯


```go
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
        backgroundColor: Colors.teal,
        body: SafeArea(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: <Widget>[
              Container(
                height: 100.0,
                width: 100.0,
                color: Colors.white,
                child: Text('Container 1'),
              ),
              SizedBox(
                height: 40.0,
              ),
              Container(
                width: 100.0,
                height: 100.0,
                color: Colors.blue,
                child: Text('Container 2'),
              ),
              Container(
                width: 100.0,
                height: 100.0,
                color: Colors.red,
                child: Text('Container 3'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

```
![](https://images.velog.io/images/chajanee/post/008fdda6-9ec7-40c5-9038-31b7ec3a749f/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-14%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%201.37.21.png)

<br/>

Column 위젯 부분을 Row 위젯으로 바꾸고,  
width 길이를 주면  
가로도 똑같이 먹히는걸 볼 수 있다. 👇🏻

<br/>

![](https://images.velog.io/images/chajanee/post/7cbc8ece-6bf8-403a-9c0f-992afa6e8f59/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-14%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%201.42.35.png)


<br/>

---

<br/>


# Multi-child layout widgets

## Column 
``Column`` : 세로 배치


```go
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
        backgroundColor: Colors.teal,
        body: SafeArea(
          child: Column(
            verticalDirection: VerticalDirection.down,
            children: <Widget>[
              Container(
                height: 100.0,
                width: 100.0,
                color: Colors.white,
                child: Text('Container 1'),
              ),
              Container(
                width: 100.0,
                height: 100.0,
                color: Colors.blue,
                child: Text('Container 2'),
              ),
              Container(
                width: 100.0,
                height: 100.0,
                color: Colors.red,
                child: Text('Container 3'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

```
![](https://images.velog.io/images/chajanee/post/d006f728-a7f7-4f8a-8f9c-2f1d3a1cd8f0/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-14%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%201.02.50.png)

<br/>

---

<br/>


### mainAxisSize

``mainAxisSize: MainAxisSize.크기`` : 세로축 공간 크기
- .min
- .max


```go
...


          child: Column(
            mainAxisSize: MainAxisSize.min, //.max
            children: <Widget>[
              Container(
                height: 100.0,
                width: 100.0,
                color: Colors.white,
                child: Text('Container 1'),
              ),
              Container(
                width: 100.0,
                height: 100.0,
                color: Colors.blue,
                child: Text('Container 2'),
              ),
              Container(
                width: 100.0,
                height: 100.0,
                color: Colors.red,
                child: Text('Container 3'),
              ),
            ],
          ),
         
         
...
```

![](https://images.velog.io/images/chajanee/post/e238f1e3-31ed-45ba-bfe1-2db29084bc60/2020-02-14%2000-57-57.2020-02-14%2000_59_22.gif)

<br/>

---

<br/>


### verticalDirection

``verticalDirection: VerticalDirection.위치`` : 수직배열 순서 바꾸기
- .down
- .up

```go
...


          child: Column(
            verticalDirection: VerticalDirection.down, //.up
            children: <Widget>[
              Container(
                height: 100.0,
                width: 100.0,
                color: Colors.white,
                child: Text('Container 1'),
              ),
              Container(
                width: 100.0,
                height: 100.0,
                color: Colors.blue,
                child: Text('Container 2'),
              ),
              Container(
                width: 100.0,
                height: 100.0,
                color: Colors.red,
                child: Text('Container 3'),
              ),
            ],
          ),
         
         
...
```

![](https://images.velog.io/images/chajanee/post/cdb99b79-5082-46e2-a0ad-97014d10d37e/2020-02-14%2000-59-41.2020-02-14%2001_01_06.gif)

<br/>

---

<br/>


### mainAxisAlignment
``mainAxisAlignment: MainAxisAlignment.위치`` : 수직 정렬 배치
- .start
- .end 
- .center 
- .spaceAround 
- .spaceBetween 
- .spaceEvenly

``width: double.infinity`` 가로 길이 창만큼 모두 차지.

```go
...


          child: Column(
            mainAxisAlignment: MainAxisAlignment.start, //.end, .center, .spaceAround,                                                                 .spaceBetween, .spaceEvenly
            children: <Widget>[
              Container(
                height: 100.0,
                width: 100.0,
                color: Colors.white,
                child: Text('Container 1'),
              ),
              Container(
                width: 100.0,
                height: 100.0,
                color: Colors.blue,
                child: Text('Container 2'),
              ),
              Container(
                width: 100.0,
                height: 100.0,
                color: Colors.red,
                child: Text('Container 3'),
              ),
            ],
          ),
         
         
...
```

![](https://images.velog.io/images/chajanee/post/65947b84-8a6f-4636-9db4-d54d510ea2dc/2020-02-14%2001-22-00.2020-02-14%2001_26_05.gif)

<br/>

---

<br/>


### crossAxisAlignment
``crossAxisAlignment: CrossAxisAlignment.위치`` :  보면 이해감
- .end
- .start
- .stretch (컨테이너 가로 너비 속성 별도로 지정 안해도 모든 하위 요소들 가로 길이가 전체창만큼 뻗음)


```go
...


          child: Column(
            crossAxisAlignment: CrossAxisAlignment.end, //.start, .center, .stretch
            children: <Widget>[
              Container(
                height: 100.0,
                width: 100.0,
                color: Colors.white,
                child: Text('Container 1'),
              ),
              Container(
                width: 100.0,
                height: 100.0,
                color: Colors.blue,
                child: Text('Container 2'),
              ),
              Container(
                width: 100.0,
                height: 100.0,
                color: Colors.red,
                child: Text('Container 3'),
              ),
            ],
          ),
         
         
...
```

![](https://images.velog.io/images/chajanee/post/ee49f97b-0403-472c-a64e-3fc2ff42e98c/2020-02-14%2001-28-29.2020-02-14%2001_39_03.gif)

Row 위젯으로 .stretch 주고,  
각 하위요소의 Container 1 만 가로 세로 길이 주고,  
SizedBox 위젯만 속성 부여를 했을 경우엔? 👇🏻

```go
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
        backgroundColor: Colors.teal,
        body: SafeArea(
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: <Widget>[
              Container(
                width: 30.0,
                color: Colors.white,
                child: Text('Container 1'),
              ),
              SizedBox(
                width: 40.0,
              ),
              Container(
                color: Colors.blue,
                child: Text('Container 2'),
              ),
              Container(
                color: Colors.red,
                child: Text('Container 3'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

```
![](https://images.velog.io/images/chajanee/post/4cdd75d5-a500-4cac-a540-5f7708b199d7/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-14%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%201.48.09.png)





<br/>


---
---

# Reference  
- [Angela Yu 강의(유료)](https://www.udemy.com/course/flutter-bootcamp-with-dart/)
- [레이아웃 위젯 (Flutter 공식문서)](https://flutter.dev/docs/development/ui/widgets/layout)
- [Tomek의 Flutter Layout Cheat Sheet](https://medium.com/flutter-community/flutter-layout-cheat-sheet-5363348d037e)