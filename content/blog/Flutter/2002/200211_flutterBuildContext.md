---
title: '💎 [Flutter] BuildContext / 스낵바'
date: 2020-02-11 16:55:00
category: 'Flutter'
draft: false 
showToc: true
---


# BuildContext

"A handle to the location of a widget in the widget tree."  
"widget tree 에서 현재 widget의 위치를 알 수 있는 정보"

build method 는 Scaffold Widget 라는 위젯을 리턴하는데  
이 때의 위젯트리 상에서 어디에 위치하는가에 대한 정보를 가지고 있는 context라는 것을 넣어서 리턴해준다.

"Each widget has its own BuildContext, which becomes the parent of the widget returned by the StatelessWidget.build or State.build function."  
"모든 위젯은 자신만의 BuildContext를 갖고있는데, 이 BuildContext 는 Stateless 위젯이나 State 빌드 메서드에 의해서 리턴 된 위젯의 부모가 된다."





```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'JINJOO',
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
        title: Text('Snack Bar'),
        centerTitle: true,
      ),
      body: Center(
        child: FlatButton(
          child: Text(
            'Show me',
            style: TextStyle(color: Colors.white),
          ),
          color: Colors.red,
          onPressed: () {
            Scaffold.of(context).showSnackBar(SnackBar(
              content: Text('Hollow'),
            ));
          },
        ),
      ),
    );
  }
}

```

## Scaffold.of(context) method

"현재 주어진 context에서 위로 올라가면서 가장 가까운 Scaffold를 찾아서 반환하라."

ex)  
``Something.of(context)``
메서드는 현재 주어진 context에서 위로 올라가면서 가장 가까운 Something을 찾아서 반환하라  
라는 의미.  
``Theme.of(context)``
메서드는 현재 주어진 context에서 위로 올라가면서 가장 가까운 Theme을 찾아서 반환하라  
라는 의미. 


<img width="1014" alt="1" src="https://user-images.githubusercontent.com/55340876/74588994-bd2c0b80-5044-11ea-9ffd-e84d45e8bdee.png">



<img width="1014" alt="2" src="https://user-images.githubusercontent.com/55340876/74588996-c1f0bf80-5044-11ea-97bc-0b28812eaf90.png">



위젯트리 상에서 Scaffold.of(context) 메서드는 주어진 context를 가지고 Scaffold 위젯을 찾아나서는데,  
이 context는 결국 MyPage의 context 이므로 MyPage 위젯부터 Scaffold를 찾게되고  
계속 위로 위젯 트리를 거슬러 올라가면서 Scaffold를 찾아보지만 끝내 찾지못하고   
Scaffold가 포함되지 않은 context라는 오류 메세지를 보내게 된다.

이 때,  
Scaffold.of(context) 메서드가 위젯트리 상에서 Scaffold를 찾을 수 있게 하려면?  

결론은,  
Scaffold.of(context) 메서드가 위젯트리 상에서 Scaffold 보다 밑에 있는 위젯의 context를 사용할 수 있게 하면 된다.  
그렇다면 그곳에서부터 거슬러 올라가면서 결국 위젯트리 상에서 Scaffold를 찾아낼 수 있을 것이다.  

이를 위해 존재하는 것이 ``Builder`` 위젯이다.  
이 위젯의 핵심적인 역할은  
지금까지 사용했던 context가 무엇이었던간에 다 무시하고 새로운 context로 새로운 위젯을 만들라는 것.  
Builder 위젯 밑에 존재하는 Scaffold.of(context) 메서드가 더이상 MyPage 위젯의 context가 아니라  
Builder 위젯의 context를 사용하게 만드는 것이다.

결과적으로,    
Scaffold.of(context) 메서드가 위젯트리 상에서 Builder 위젯 위로 거슬러 올라가면서 Scaffold 위젯을 찾게 된다.


```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'JINJOO',
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
          title: Text('Snack Bar'),
          centerTitle: true,
        ),
        body: Builder(
          builder: (BuildContext ctx) {
            return Center(
              child: FlatButton(
                child: Text(
                  'Show me',
                  style: TextStyle(color: Colors.white),
                ),
                color: Colors.red,
                onPressed: () {
                  Scaffold.of(ctx).showSnackBar(SnackBar(
                    content: Text('Hollow'),
                  ));
                },
              ),
            );
          },
        ));
  }
}

```


![3](https://user-images.githubusercontent.com/55340876/74588997-c2895600-5044-11ea-9126-7fad2dbe98d0.gif)



<br/>


---
---

# Reference  
- [코딩셰프 유튜브](https://www.youtube.com/channel/UC_2ge45JCuJH1z6VYt4iCgQ)

