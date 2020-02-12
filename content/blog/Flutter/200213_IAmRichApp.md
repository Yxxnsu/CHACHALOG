---
title: '💎 [Flutter] 앱의 기초 (I Am Rich App)'
date: 2020-02-13 00:57:00
category: 'Flutter'
draft: false 
showToc: true
---

# 기본 위치 위젯

![](https://images.velog.io/images/chajanee/post/d1d997ab-c946-40bf-91e0-5e85f62df941/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-11%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2011.21.20.png)

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

![](https://images.velog.io/images/chajanee/post/f83a4a3a-0efe-4311-85e5-04607ebc2ec0/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-13%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2012.54.08.png)


---


# [다이어그램 만드는 사이트](https://www.draw.io/)

I Am Rich App 코드를 다이어그램으로 구현했을 때 👇🏻

<br/>

![](https://images.velog.io/images/chajanee/post/11997158-d1f6-48ea-b7c1-ddc961a6e0ca/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-13%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2012.48.01.png)


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

![](https://images.velog.io/images/chajanee/post/2c6e19af-6cb4-46e0-93ec-a747535a7044/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-13%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%203.22.35.png)

<br/>
<br/>

---

# * 이미지 불러오기 

![](https://images.velog.io/images/chajanee/post/a02634a4-e994-47f9-99f6-0fe51c128f9c/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-13%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%203.27.03.png)

항상 ``pubspec.yaml`` 파일에서 경로를 수정 후,  

적용이 잘 되었는지 확인해주고 (저장 + 우상단 Packages get + 하단 console 창)  
그 후에 이미지를 불러와주자!


<br/>


---
---

# Reference  
- [Angela Yu 강의(유료)](https://www.udemy.com/course/flutter-bootcamp-with-dart/)

