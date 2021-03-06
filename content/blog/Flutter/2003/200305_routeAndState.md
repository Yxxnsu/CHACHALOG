---
title: 'π [Flutter] push(), pop(), routes'
date: 2020-03-05 12:42:00
category: 'Flutter'
draft: false 
showToc: true
---



# νλ©΄μ΄λ

## push(), pop()

```dart
import 'package:flutter/material.dart';

void main() => runApp(NavigationDemo());

class NavigationDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: FirstPage(),
    );
  }
}

class FirstPage extends StatelessWidget {
  _showSecondPage(BuildContext context) => Navigator.push(
      context, MaterialPageRoute(builder: (context) => SecondPage()));

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.amber,
      appBar: AppBar(
        title: Text('Push And Pop'),
      ),
      body: Center(
        child: RaisedButton(
          child: Text('SecondPage λ‘ μ΄λ'),
          onPressed: () => _showSecondPage(context),
        ),
      ),
    );
  }
}

class SecondPage extends StatelessWidget {
  _backFirstPage(BuildContext context) => Navigator.pop(context);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.purple,
      appBar: AppBar(
        title: Text('Push And Pop'),
      ),
      body: Center(
        child: RaisedButton(
          child: Text('SecondPage λ‘ μ΄λ'),
          onPressed: () => _backFirstPage(context),
        ),
      ),
    );
  }
}
```

<img width="300" alt="" src="https://user-images.githubusercontent.com/55340876/75947536-07860700-5ee4-11ea-9d7c-9f68eee4ddb9.gif">

κ°μ₯ κΈ°λ³Έμ μΈ νλ©΄μ΄λ λ°©λ²μ΄λ€.  
``FirstPage`` μ ``SecondPage`` λκ°μ stl ν΄λμ€λ‘ κ΅¬μ±λλ€.  
μ΄κ²λ€μ κ° RaisedButton μ λλ₯΄λ μκ° onPressed μ΄λ²€νΈλ₯Ό ν΅ν΄ μ¬μ΄λ λ©μλκ° νΈμΆλκ³  νμ΄μ§κ° μ νλλ€.  

```dart
class FirstPage extends StatelessWidget {
  _showSecondPage(BuildContext context) => Navigator.push(
      context, MaterialPageRoute(builder: (context) => SecondPage()));

...

        onPressed: () => _showSecondPage(context),
```

1. ``Navigator`` ν΄λμ€μ ``push()`` λ©μλλ₯Ό νΈμΆ.
2. μΈμλ‘ ``BuildContext`` νμμ ``context`` μ ``MaterialPageRoute`` κ°μ²΄λ₯Ό λκΉ.  
   μ΄ λ, **context** λ μμ ―μ μμΉλ₯Ό μ°Έμ‘°ν¨.   
   **BuildContext** κ°μ²΄λ stl ν΄λμ€μ **build()** λ©μλμ μΈμλ‘ λμ΄μ€λλ° νλ©΄ μ΄λμ μν΄ νμν¨.  
   (λ΄λΆ κ°μ²΄λ‘ μ κ·Όν  λ νμ)
3. ``MaterialPageRoute`` ν΄λμ€λ νλ©΄μ νμ λ΄λΉ.  
   μΈμλ‘ ``BuildContext`` κ°μ²΄λ₯Ό λ°μ ``SecondPage`` μμ ―μ λ°ννμ¬ νλ©΄ μ΄λμ ν¨.  
   λ νμ΄μ§λ μλ‘ μ’μκ΄κ³κ° λ¨.  


```dart
class SecondPage extends StatelessWidget {
  _backFirstPage(BuildContext context) => Navigator.pop(context);

...

        onPressed: () => _backFirstPage(context),
```

1. μ²«λ²μ§Έ νμ΄μ§μ λμΌν λ°©μμΌλ‘ ``_backFirstPage()`` λ©μλλ₯Ό νΈμΆ.
2. μ΄κ²λ νλ¬ν° λ΄λΆλ₯Ό μ‘°μνκΈ° λλ¬Έμ ``context`` μΈμκ° νμ.   
   μμλμκ±Έ(**push**) λΉΌλ΄κΈ°λ§(**pop**) νλ©΄λ¨


<br/>
<br/>


---
---


## routes

μ¬λ¬ νμ΄μ§λ₯Ό λλλ€λ νΈνλ€.  

```dart
import 'package:flutter/material.dart';

void main() => runApp(NavigationDemo());

class NavigationDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      //home: FirstPage(),
      initialRoute: '/',
      routes: {
        '/': (context) => FirstPage(),
        '/second': (context) => SecondPage(),
      },
    );
  }
}

class FirstPage extends StatelessWidget {
  _showSecondPage(BuildContext context) =>
      Navigator.pushNamed(context, '/second');

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.amber,
      appBar: AppBar(
        title: Text('Push And Pop'),
      ),
      body: Center(
        child: RaisedButton(
          child: Text('SecondPage λ‘ μ΄λ'),
          onPressed: () => _showSecondPage(context),
        ),
      ),
    );
  }
}

class SecondPage extends StatelessWidget {
  _backFirstPage(BuildContext context) => Navigator.pop(context);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.purple,
      appBar: AppBar(
        title: Text('Push And Pop'),
      ),
      body: Center(
        child: RaisedButton(
          child: Text('SecondPage λ‘ μ΄λ'),
          onPressed: () => _backFirstPage(context),
        ),
      ),
    );
  }
}
```

κ²°κ³Όλ μλ¨κ³Ό λκ°λ€.  



```dart
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      //home: FirstPage(),
      initialRoute: '/',
      routes: {
        '/': (context) => FirstPage(),
        '/second': (context) => SecondPage(),
      },
    );

...

class FirstPage extends StatelessWidget {
  _showSecondPage(BuildContext context) =>
      Navigator.pushNamed(context, '/second');

...

        onPressed: () => _showSecondPage(context),
```

**μ£Όμ** ν μ μ ``home: `` μμ±κ³Ό ``initialRoute:`` μμ±μ μ€λ³΅μ΄λΌ λλ€ μ¬μ©ν  κ²½μ° μΆ©λλλ€.  
``routes`` λ₯Ό μ¬μ©ν κ±°λ©΄ ``home:`` μ μ§μμ£Όμ!  

<br/>

1. ``initialRoute:`` μμ±μ μ±μ΄ μμν  λ μ²« κ²½λ‘λ₯Ό μλ―Έ.  
   νΈμμ λ£¨νΈ κ²½λ‘ ``/`` λ₯Ό λ£μ΄μ€.  
2. ``routes:`` μμ±μ λ§΅(``Map``) μΌλ‘ μΌμͺ½μ νλ©΄ κ²½λ‘μ μ΄λ¦μ λ¬Έμμ΄ ν€λ‘ νκ³  μ€λ₯Έμͺ½ μ΄λν  νλ©΄μ μμ ―μ κ°μΌλ‘ λ£μ΄μ€.  
   κ° νμ΄μ§κ° μμ‘΄μ±μ΄ λκΈ°κ³  μ μν keyλ§ λκΈ°λ©΄ λ¨.
3. ``routes:`` μ μ μλ μ΄λ¦μ κΈ°λ°μΌλ‘ ``pushNamed()`` λ©μλλ₯Ό νΈμΆνμ¬ νλ©΄μ ν.


```dart
class SecondPage extends StatelessWidget {
  _backFirstPage(BuildContext context) => Navigator.pushNamed(context, '/');

...

        onPressed: () => _backFirstPage(context),
```

1. ``pop()`` λ©μλλ₯Ό μ¬μ©ν΄λ λμ§λ§ μ΄μ λΆν°λ ``routes`` λ°©μμ μ μ©ν΄μ£Όμ.  



<br/>
<br/>
<br/>


---
---

# Reference  
- μ²μ λ°°μ°λ νλ¬ν° (λμ)