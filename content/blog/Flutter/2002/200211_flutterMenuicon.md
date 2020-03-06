---
title: '💎 [Flutter] 앱바 메뉴 아이콘 만들기'
date: 2020-02-11 03:05:00
category: 'Flutter'
draft: false 
showToc: true
---

# App bar icon button

- leading
  - 아이콘 버튼이나 간단한 위젯을 왼쪽에 배치할 때
- actions
  - 복수의 아이콘 버튼 등을 오른쪽에 배치할 때
- onPressed
  - 반환값이 없는 함수의 형태로 일반 버튼이나 아이콘 버튼을 터치했을 때 일어나는 이벤트를 정의하는 곳
  
  
```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Appbar',
      theme: ThemeData(primarySwatch: Colors.red),
      home: MyPage(),
    );
  }
}

class MyPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Appbar icon menu'),
        centerTitle: true,
        elevation: 0.0,
        leading: IconButton(
          //간단한 위젯이나 아이콘 등을 앱바 타이틀 왼쪽에 위치. 꼭 앱바에만 쓰이는게 아니라 리스트타일 등에도 쓰인다.
          //버튼이 있으면 반드시 액션도 줘야함. IconButton 에 마우스를 대서 왼쪽 전구를 클릭후, onPressed를 클릭하면 밑줄에 코드가 생성됨.
          icon: Icon(Icons.menu),
          onPressed: () {
            //마우스를 대면 {void function() onPressed} 뜨는데, 이건 아이콘 버튼을 눌렀을때 반환값이 없는 함수가 실행됨을 의미.
            print('menu button is clicked');
          },
        ),
        actions: <Widget>[
          //[] 이곳에 한개 이상의 위젯 리스트를 가진다. 앱바의 경우엔 주로 아이콘 버튼 위젯들이 온다.
          IconButton(
            icon: Icon(Icons.shopping_cart),
            onPressed: () {
              print('Shopping cart button is clicked');
            },
          ),
          IconButton(
            icon: Icon(Icons.search),
            onPressed: () {
              print('Search button is clicked');
            },
          ),
        ],
      ),
    );
  }
}

```

![1](https://user-images.githubusercontent.com/55340876/74588942-5149a300-5044-11ea-8650-17a94c320513.gif)



<br/>


---
---

# Reference  
- [코딩셰프 유튜브](https://www.youtube.com/channel/UC_2ge45JCuJH1z6VYt4iCgQ)

