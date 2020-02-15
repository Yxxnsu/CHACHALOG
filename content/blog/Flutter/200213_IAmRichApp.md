---
title: '💎 [Flutter] 앱의 기초 (I Am Rich App)'
date: 2020-02-13 00:57:00
category: 'Flutter'
draft: false 
showToc: true
---

# 기본 위치 위젯

<img width="1223" alt="1" src="https://user-images.githubusercontent.com/55340876/74589010-ecdb1380-5044-11ea-854e-09fbfc347023.png">



---

# I Am Rich App 1

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

<img width="1403" alt="2" src="https://user-images.githubusercontent.com/55340876/74589013-f2385e00-5044-11ea-891d-964f71518123.png">




---


# [다이어그램 만드는 사이트](https://www.draw.io/)

I Am Rich App 코드를 다이어그램으로 구현했을 때 👇🏻

<br/>

<img width="749" alt="3" src="https://user-images.githubusercontent.com/55340876/74589014-f4022180-5044-11ea-858b-8ed6471881ff.png">




<br/>

---



# I Am Rich App 2 (최종코드)

```go
import 'package:flutter/material.dart';

//main() 함수는 모든 Flutter 앱의 시작점이다.
void main() => runApp(
      MaterialApp(
        debugShowCheckedModeBanner: false,
        home: Scaffold(
          backgroundColor: Colors.amber[100],
          appBar: AppBar(
            title: Text('I Am Rich'),
            backgroundColor: Colors.amber,
            elevation: 0.0,
          ),
          body: Center(
            child: Image(
              image: AssetImage('images/diamond.png'),
            ),
          ),
        ),
      ),
    );

```

<img width="1676" alt="4" src="https://user-images.githubusercontent.com/55340876/74589015-f49ab800-5044-11ea-83b4-e92eedaf03db.png">



<br/>
<br/>

---

# * 이미지 불러오기 

<img width="1272" alt="5" src="https://user-images.githubusercontent.com/55340876/74589016-f5334e80-5044-11ea-93a9-ca686d1df107.png">



항상 ``pubspec.yaml`` 파일에서 경로를 수정 후,  

적용이 잘 되었는지 확인해주고 (저장 + 우상단 Packages get + 하단 console 창)  
그 후에 이미지를 불러와주자!


<br/>


---
---

# Reference  
- [Angela Yu 강의(유료)](https://www.udemy.com/course/flutter-bootcamp-with-dart/)

