---
title: '💎 [Flutter] 앱의 기초 틀 (I Am Rich App)'
date: 2020-02-13 12:57:00
category: 'Flutter'
draft: false 
showToc: true
---

# 기본 위치 위젯

![](https://images.velog.io/images/chajanee/post/d1d997ab-c946-40bf-91e0-5e85f62df941/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-11%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2011.21.20.png)

---

# I Am Rich App

```go
import 'package:flutter/material.dart';

//main() 함수는 모든 Flutter 앱의 시작점이다.
void main() => runApp(
  MaterialApp(
    debugShowCheckedModeBanner: false,
    home: Scaffold(
      backgroundColor: Colors.redAccent,
      appBar: AppBar(
        title: Text('I Am Rich'),
        backgroundColor: Colors.amber,
        elevation: 0.0,
      ),
      body: Center(
        child: Image(
          image: NetworkImage(
              'https://cdn.bitdegree.org/learn/pexels-photo-920220.jpeg?4d5e638c'),
        ),
      ),
    ),
  ),
);

```

![](https://images.velog.io/images/chajanee/post/f83a4a3a-0efe-4311-85e5-04607ebc2ec0/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-13%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2012.54.08.png)


---


# [다이어그램 만드는 사이트](https://www.draw.io/)

I Am Rich App 코드를 다이어그램으로 구현했을 때 👇🏻

<br/>

![](https://images.velog.io/images/chajanee/post/11997158-d1f6-48ea-b7c1-ddc961a6e0ca/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-13%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2012.48.01.png)





<br/>


---
---

# Reference  
- [Angela Yu 강의(유료)](https://www.udemy.com/course/flutter-bootcamp-with-dart/)

