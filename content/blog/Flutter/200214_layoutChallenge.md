---
title: '💎 [Flutter] Layouts Challenge'
date: 2020-02-14 02:28:00
category: 'Flutter'
draft: false 
showToc: true
---

# 주어진 예제

<img width="676" alt="1" src="https://user-images.githubusercontent.com/55340876/74589183-64f60900-5046-11ea-85da-6b39560855db.png">



<br/>

---

<br/>

# 내가 작성한 코드


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
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: <Widget>[
              Container(
                width: 100.0,
                color: Colors.red,
              ),
              Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  Container(
                    width: 100.0,
                    height: 100.0,
                    color: Colors.yellow,
                  ),
                  Container(
                    width: 100.0,
                    height: 100.0,
                    color: Colors.lime[600],
                  ),
                ],
              ),
              Container(
                width: 100.0,
                height: double.infinity,
                color: Colors.blue,
              ),
            ],
          ),
        ),
      ),
    );
  }
}

```

<img width="1450" alt="2" src="https://user-images.githubusercontent.com/55340876/74589180-5dcefb00-5046-11ea-87b2-ff31b9e9eae3.png">



<img width="397" alt="3" src="https://user-images.githubusercontent.com/55340876/74589184-658e9f80-5046-11ea-9147-2ae226ad0e8d.png">



사이드에 양쪽 박스 두개는 쉬웠는데  
가운데 박스 두개를 세로로 나열하는데서 막혔었다.  
~~(빌어먹을 CSS)~~

바보같이 Row 위젯 안에 Column 위젯은 못들어간다고 생각을 하고  (웨?! 대체 왜?!!!)  
계속 삽질하다가...  

어?  
아니지?!  
Row 위젯 -> children 위젯 안에 복수로 자식들 위젯이 쫘ㅏ라라락 있는건데!!  
당연히 다른 위젯도 들어가지 진주야!!!! 정신차리라고!!! 

해서 바로 타ㄱ타타각탁  

![4](https://user-images.githubusercontent.com/55340876/74589182-645d7280-5046-11ea-9f5e-1f68f5f2eb70.jpg)



챌린지 성공!  

제발 진주야.... 코드 좀 직접 쳐보고 되는지 안되는지 판단하자...  
너는 너의 🧠를 믿으면 안돼..   
의심하고 또 의심하고 또 의심하고 또 의심하거라... 



<br/>


---
---

# Reference  
- [Angela Yu 강의(유료)](https://www.udemy.com/course/flutter-bootcamp-with-dart/)
- [레이아웃 위젯 (Flutter 공식문서)](https://flutter.dev/docs/development/ui/widgets/layout)
- [Tomek의 Flutter Layout Cheat Sheet](https://medium.com/flutter-community/flutter-layout-cheat-sheet-5363348d037e)