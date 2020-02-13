---
title: '💎 [Flutter] I Am Rich - App Challenge'
date: 2020-02-13 19:52:00
category: 'Flutter'
draft: false 
showToc: true
---

# I Like Orange

주어진 다이어그램은 이렇다.

![](https://images.velog.io/images/chajanee/post/238d6957-d4c3-401d-9711-b925aedeb99d/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-13%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%207.28.50.png)

## 내가 작성한 코드

![](https://images.velog.io/images/chajanee/post/525b0a0c-d85e-4830-98ab-9d18db8c921c/Untitled%20Diagram%20(3).jpg)

ㅋㅋㅋㅋㅋㅋㅋㅋ하  
다이어그램으로 구현해보니 갱쟁히 복잡쓰  

![](https://images.velog.io/images/chajanee/post/12b3b6f8-d6a8-4c35-8d87-b68992ba75dd/%E1%84%86%E1%85%A9%E1%86%BA%E1%84%86%E1%85%A1%E1%84%84%E1%85%A1%E1%86%BC.png)

몇개 추가한 기능도 있는데   
뭔가 지저분허다.  
코드도 넘모 길어.. 🤔 


```go
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: MyPage(),
    );
  }
}

class MyPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.redAccent,
      appBar: AppBar(
        title: Text(
          'I Like Orange',
          style: TextStyle(
            fontWeight: FontWeight.w900,
            fontSize: 35,
          ),
        ),
        backgroundColor: Colors.red,
      ),
      body: Center(
        child: Image(
          image: AssetImage(
            'images/orange.png',
          ),
          width: 370,
        ),
      ),
    );
  }
}

```

![](https://images.velog.io/images/chajanee/post/351812b1-24ff-48ef-b2d2-0aaa6740841d/2020-02-13%2019-19-53.2020-02-13%2019_20_32.gif)

앱 아이콘은 아직 다듬는 법을 터득하지 않았으니 나중에 디테일하게 고쳐보자.  

에헴.

<br/>

---

## 더 간결한 코드

MyApp 과 MyPage 위젯을 없애고,   
빌드 위젯도 빼버리고 초반에 배운대로 해봤다.  

결과는 동일함.  

![](https://images.velog.io/images/chajanee/post/926eacad-f4a5-4db0-a6c5-2d40b30ba0a4/%E1%84%82%E1%85%A1%E1%84%86%E1%85%AE%E1%84%82%E1%85%B4.jpg)

아뉘대체웨!!!!  
왜때문에!!!  
나는 초장부터 이런 깨르꼼한 코드를 구현 할 생각을 못하는걸까..

정신체리 진주야  
배운거 워따써먹는겨 밥먹을 때 쓰니?!

```go
import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        backgroundColor: Colors.redAccent,
        appBar: AppBar(
          title: Text(
            'I Like Orange',
            style: TextStyle(
              fontWeight: FontWeight.w900,
              fontSize: 35,
            ),
          ),
          backgroundColor: Colors.red,
        ),
        body: Center(
          child: Image(
            image: AssetImage(
              'images/orange.png',
            ),
            width: 370,
          ),
        ),
      ),
    ));

```

![](https://images.velog.io/images/chajanee/post/279e109e-e31e-4238-970c-ae2f8f33f174/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-13%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%207.25.29.png)

<br/>


---
---

# Reference  
- [Angela Yu 강의(유료)](https://www.udemy.com/course/flutter-bootcamp-with-dart/)

