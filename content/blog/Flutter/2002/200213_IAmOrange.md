---
title: 'π [Flutter] I Am Rich - App Challenge'
date: 2020-02-13 19:52:00
category: 'Flutter'
draft: false 
showToc: true
---

# I Like Orange

μ£Όμ΄μ§ λ€μ΄μ΄κ·Έλ¨μ μ΄λ λ€.

<img width="784" alt="1" src="https://user-images.githubusercontent.com/55340876/74589064-6d9a0f80-5045-11ea-9f59-696ecdacb541.png">



## λ΄κ° μμ±ν μ½λ

![2](https://user-images.githubusercontent.com/55340876/74589066-712d9680-5045-11ea-9a65-25ffef4b49f2.jpg)



γγγγγγγγν  
λ€μ΄μ΄κ·Έλ¨μΌλ‘ κ΅¬νν΄λ³΄λ κ°±μν λ³΅μ‘μ°  

![3](https://user-images.githubusercontent.com/55340876/74589067-71c62d00-5045-11ea-9cdc-b8ca685ae67f.gif)



λͺκ° μΆκ°ν κΈ°λ₯λ μλλ°   
λ­κ° μ§μ λΆνλ€.  
μ½λλ λλͺ¨ κΈΈμ΄.. π€ 


```dart
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

![4](https://user-images.githubusercontent.com/55340876/74589068-738ff080-5045-11ea-9296-af935ed75b42.jpg)



μ± μμ΄μ½μ μμ§ λ€λ¬λ λ²μ ν°λνμ§ μμμΌλ λμ€μ λνμΌνκ² κ³ μ³λ³΄μ.  

μν΄.

<br/>

---

## λ κ°κ²°ν μ½λ

MyApp κ³Ό MyPage μμ ―μ μμ κ³ ,   
λΉλ μμ ―λ λΉΌλ²λ¦¬κ³  μ΄λ°μ λ°°μ΄λλ‘ ν΄λ΄€λ€.  

κ²°κ³Όλ λμΌν¨.  

<img width="1345" alt="5" src="https://user-images.githubusercontent.com/55340876/74589069-74288700-5045-11ea-9f75-035c2fb65c4b.png">



μλλμ²΄μ¨!!!!  
μλλ¬Έμ!!!  
λλ μ΄μ₯λΆν° μ΄λ° κΉ¨λ₯΄κΌΌν μ½λλ₯Ό κ΅¬ν ν  μκ°μ λͺ»νλκ±ΈκΉ..

μ μ μ²΄λ¦¬ μ§μ£ΌμΌ  
λ°°μ΄κ±° μλ°μ¨λ¨Ήλκ²¨ λ°₯λ¨Ήμ λ μ°λ?!

```dart
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
- [Angela Yu κ°μ(μ λ£)](https://www.udemy.com/course/flutter-bootcamp-with-dart/)

