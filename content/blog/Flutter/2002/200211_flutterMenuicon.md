---
title: 'π [Flutter] μ±λ° λ©λ΄ μμ΄μ½ λ§λ€κΈ°'
date: 2020-02-11 03:05:00
category: 'Flutter'
draft: false 
showToc: true
---

# App bar icon button

- leading
  - μμ΄μ½ λ²νΌμ΄λ κ°λ¨ν μμ ―μ μΌμͺ½μ λ°°μΉν  λ
- actions
  - λ³΅μμ μμ΄μ½ λ²νΌ λ±μ μ€λ₯Έμͺ½μ λ°°μΉν  λ
- onPressed
  - λ°νκ°μ΄ μλ ν¨μμ ννλ‘ μΌλ° λ²νΌμ΄λ μμ΄μ½ λ²νΌμ ν°μΉνμ λ μΌμ΄λλ μ΄λ²€νΈλ₯Ό μ μνλ κ³³
  
  
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
          //κ°λ¨ν μμ ―μ΄λ μμ΄μ½ λ±μ μ±λ° νμ΄ν μΌμͺ½μ μμΉ. κΌ­ μ±λ°μλ§ μ°μ΄λκ² μλλΌ λ¦¬μ€νΈνμΌ λ±μλ μ°μΈλ€.
          //λ²νΌμ΄ μμΌλ©΄ λ°λμ μ‘μλ μ€μΌν¨. IconButton μ λ§μ°μ€λ₯Ό λμ μΌμͺ½ μ κ΅¬λ₯Ό ν΄λ¦­ν, onPressedλ₯Ό ν΄λ¦­νλ©΄ λ°μ€μ μ½λκ° μμ±λ¨.
          icon: Icon(Icons.menu),
          onPressed: () {
            //λ§μ°μ€λ₯Ό λλ©΄ {void function() onPressed} λ¨λλ°, μ΄κ±΄ μμ΄μ½ λ²νΌμ λλ μλ λ°νκ°μ΄ μλ ν¨μκ° μ€νλ¨μ μλ―Έ.
            print('menu button is clicked');
          },
        ),
        actions: <Widget>[
          //[] μ΄κ³³μ νκ° μ΄μμ μμ ― λ¦¬μ€νΈλ₯Ό κ°μ§λ€. μ±λ°μ κ²½μ°μ μ£Όλ‘ μμ΄μ½ λ²νΌ μμ ―λ€μ΄ μ¨λ€.
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
- [μ½λ©μ°ν μ νλΈ](https://www.youtube.com/channel/UC_2ge45JCuJH1z6VYt4iCgQ)

