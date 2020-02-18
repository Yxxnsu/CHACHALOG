---
title: '💎 [Flutter] Layout widgets'
date: 2020-02-14 01:50:00
category: 'Flutter'
draft: false 
showToc: true
---

# 내가 써 본 레이아웃 위주로만 기재

# Single-child layout widgets

## Container
``Container`` : 하위요소 위젯의 구성, 장식, 위치를 지정해줌




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

![1](https://user-images.githubusercontent.com/55340876/74589130-f618b000-5045-11ea-8e9f-78972ac288c8.gif)




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

<img width="1441" alt="2" src="https://user-images.githubusercontent.com/55340876/74589136-fe70eb00-5045-11ea-877a-b3bae1f4f87c.png">



<br/>

Column 위젯 부분을 Row 위젯으로 바꾸고,  
width 길이를 주면  
가로도 똑같이 먹히는걸 볼 수 있다. 👇🏻

<br/>

<img width="1441" alt="3" src="https://user-images.githubusercontent.com/55340876/74589137-ff098180-5045-11ea-9340-898abd99035a.png">




<br/>

---

<br/>


# Multi-child layout widgets

## Column 
``Column`` : 세로 배치


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


<img width="1441" alt="4" src="https://user-images.githubusercontent.com/55340876/74589138-ffa21800-5045-11ea-8c3c-57538c721a12.png">



<br/>

---

<br/>


### mainAxisSize

``mainAxisSize: MainAxisSize.크기`` : 세로축 공간 크기
- .min
- .max


```dart
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

![5](https://user-images.githubusercontent.com/55340876/74589139-00d34500-5046-11ea-9253-e071cddfe50a.gif)



<br/>

---

<br/>


### verticalDirection

``verticalDirection: VerticalDirection.위치`` : 수직배열 순서 바꾸기
- .down
- .up

```dart
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



![6](https://user-images.githubusercontent.com/55340876/74589140-02047200-5046-11ea-96e4-dd3fa8fb2e17.gif)



<br/>

---

<br/>

<div align="center">

<img width="400" alt="rowcolumn" src="https://user-images.githubusercontent.com/55340876/74718880-6574e680-5276-11ea-8eb4-8071856f3fe9.png">

</div>


### mainAxisAlignment
``mainAxisAlignment: MainAxisAlignment.위치`` : 수직 정렬 배치
- .start
- .end 
- .center 
- .spaceAround 
- .spaceBetween 
- .spaceEvenly

``width: double.infinity`` 가로 길이 창만큼 모두 차지.

```dart
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



![7](https://user-images.githubusercontent.com/55340876/74589141-03359f00-5046-11ea-9455-e3fe71b32bb2.gif)



<br/>

---

<br/>


### crossAxisAlignment
``crossAxisAlignment: CrossAxisAlignment.위치`` :  보면 이해감
- .end
- .start
- .stretch (컨테이너 가로 너비 속성 별도로 지정 안해도 모든 하위 요소들 가로 길이가 전체창만큼 뻗음)


```dart
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

![8](https://user-images.githubusercontent.com/55340876/74589142-0597f900-5046-11ea-8430-2e6a7a6f1445.gif)



Row 위젯으로 .stretch 주고,  
각 하위요소의 Container 1 만 가로 세로 길이 주고,  
SizedBox 위젯만 속성 부여를 했을 경우엔? 👇🏻

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


<img width="1441" alt="9" src="https://user-images.githubusercontent.com/55340876/74589143-092b8000-5046-11ea-951c-501dcd1018ed.png">





<br/>


---
---

# Reference  
- [Angela Yu 강의(유료)](https://www.udemy.com/course/flutter-bootcamp-with-dart/)
- [레이아웃 위젯 (Flutter 공식문서)](https://flutter.dev/docs/development/ui/widgets/layout)
- [Tomek의 Flutter Layout Cheat Sheet](https://medium.com/flutter-community/flutter-layout-cheat-sheet-5363348d037e)