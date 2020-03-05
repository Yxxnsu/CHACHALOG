---
title: '💎 [Flutter] push(), pop(), routes'
date: 2020-03-05 12:42:00
category: 'Flutter'
draft: false 
showToc: true
---



# 화면이동

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
          child: Text('SecondPage 로 이동'),
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
          child: Text('SecondPage 로 이동'),
          onPressed: () => _backFirstPage(context),
        ),
      ),
    );
  }
}
```

<img width="300" alt="" src="https://user-images.githubusercontent.com/55340876/75947536-07860700-5ee4-11ea-9d7c-9f68eee4ddb9.gif">

가장 기본적인 화면이동 방법이다.  
``FirstPage`` 와 ``SecondPage`` 두개의 stl 클래스로 구성된다.  
이것들은 각 RaisedButton 을 누르는 순간 onPressed 이벤트를 통해 심어둔 메서드가 호출되고 페이지가 전환된다.  

```dart
class FirstPage extends StatelessWidget {
  _showSecondPage(BuildContext context) => Navigator.push(
      context, MaterialPageRoute(builder: (context) => SecondPage()));

...

        onPressed: () => _showSecondPage(context),
```

1. ``Navigator`` 클래스의 ``push()`` 메서드를 호출.
2. 인자로 ``BuildContext`` 타입의 ``context`` 와 ``MaterialPageRoute`` 객체를 넘김.  
   이 때, **context** 는 위젯의 위치를 참조함.   
   **BuildContext** 객체는 stl 클래스의 **build()** 메서드의 인자로 넘어오는데 화면 이동을 위해 필요함.  
   (내부 객체로 접근할 때 필요)
3. ``MaterialPageRoute`` 클래스는 화면전환을 담당.  
   인자로 ``BuildContext`` 객체를 받아 ``SecondPage`` 위젯을 반환하여 화면 이동을 함.  
   두 페이지는 서로 종속관계가 됨.  


```dart
class SecondPage extends StatelessWidget {
  _backFirstPage(BuildContext context) => Navigator.pop(context);

...

        onPressed: () => _backFirstPage(context),
```

1. 첫번째 페이지와 동일한 방식으로 ``_backFirstPage()`` 메서드를 호출.
2. 이것도 플러터 내부를 조작하기 때문에 ``context`` 인자가 필요.   
   쌓아놓은걸(**push**) 빼내기만(**pop**) 하면됨


<br/>
<br/>


---
---


## routes

여러 페이지를 넘나들때 편하다.  

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
          child: Text('SecondPage 로 이동'),
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
          child: Text('SecondPage 로 이동'),
          onPressed: () => _backFirstPage(context),
        ),
      ),
    );
  }
}
```

결과는 상단과 똑같다.  



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

**주의** 할점은 ``home: `` 속성과 ``initialRoute:`` 속성은 중복이라 둘다 사용할 경우 충돌난다.  
``routes`` 를 사용할거면 ``home:`` 은 지워주자!  

<br/>

1. ``initialRoute:`` 속성은 앱이 시작할 때 첫 경로를 의미.  
   편의상 루트 경로 ``/`` 를 넣어줌.  
2. ``routes:`` 속성은 맵(``Map``) 으로 왼쪽엔 화면 경로의 이름을 문자열 키로 하고 오른쪽 이동할 화면의 위젯을 값으로 넣어줌.  
   각 페이지간 의존성이 끊기고 정의한 key만 넘기면 됨.
3. ``routes:`` 에 정의된 이름을 기반으로 ``pushNamed()`` 메서드를 호출하여 화면전환.


```dart
class SecondPage extends StatelessWidget {
  _backFirstPage(BuildContext context) => Navigator.pushNamed(context, '/');

...

        onPressed: () => _backFirstPage(context),
```

1. ``pop()`` 메서드를 사용해도 되지만 이제부터는 ``routes`` 방식을 애용해주자.  



<br/>
<br/>
<br/>


---
---

# Reference  
- 처음 배우는 플러터 (도서)