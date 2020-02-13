---
title: '💎 [Flutter] Layouts Challenge'
date: 2020-02-14 02:28:00
category: 'Flutter'
draft: false 
showToc: true
---

# 주어진 예제

![](https://images.velog.io/images/chajanee/post/f71ddda6-1a16-4b97-98fe-f593ec479702/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-14%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%202.29.04.png)

<br/>

---

<br/>

# 내가 작성한 코드


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

![](https://images.velog.io/images/chajanee/post/2f2caa23-cbd5-45eb-95a2-81dff334771c/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-14%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%202.31.22.png)

![](https://images.velog.io/images/chajanee/post/90ea2284-82ab-4497-8ebb-bdbf374c1b37/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-14%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%202.29.34.png)

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

![](https://images.velog.io/images/chajanee/post/209606db-7b84-4883-bff8-44c2fb025812/C6anKxJXQAcSZ5Q.jpg)

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