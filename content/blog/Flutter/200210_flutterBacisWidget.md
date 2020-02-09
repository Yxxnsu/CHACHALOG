---
title: '💎 [Flutter] 캐릭터 페이지 디자인'
date: 2020-02-10 01:30:00
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


<br/>

---
---

# Reference  
- [코딩셰프 유튜브](https://www.youtube.com/channel/UC_2ge45JCuJH1z6VYt4iCgQ)

