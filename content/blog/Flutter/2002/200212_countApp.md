---
title: '💎 [Flutter] 카운트 앱'
date: 2020-02-12 01:00:00
category: 'Flutter'
draft: false
showToc: true
---

```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  int counter = 0; //Text UI에 표시될 값

  void increaseCounter() {
    //버튼을 누르면 counter 값을 증가시킴
    setState(() {
      counter++;
    });
  }

  void decreaseCounter() {
    //버튼을 누르면 counter 값을 감소시킴
    setState(() {
      counter--;
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Demo App',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(primaryColor: Colors.black),
      home: Scaffold(
        appBar: AppBar(
          title: Text(
            'Count App',
            style: TextStyle(fontWeight: FontWeight.bold, fontSize: 25.0),
          ),
        ),
        body: Container(
          padding: const EdgeInsets.all(20.0),
          child: Column(
            children: <Widget>[
              Text(
                '$counter',
                style: TextStyle(fontSize: 160.0),
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: <Widget>[
                  RaisedButton(
                    color: Colors.black,
                    child: Text(
                      '+',
                      style: TextStyle(fontSize: 40.0, color: Colors.white),
                    ),
                    onPressed: () {
                      increaseCounter();
                    },
                  ),
                  RaisedButton(
                    color: Colors.black,
                    child: Text(
                      '-',
                      style: TextStyle(fontSize: 40.0, color: Colors.white),
                    ),
                    onPressed: () {
                      decreaseCounter();
                    },
                  ),
                ],
              )
            ],
          ),
        ),
      ),
    );
  }
}

```
<div align="center">

<img width=380 alt="CountApp" src="https://user-images.githubusercontent.com/55340876/74946298-6a839280-543c-11ea-8dd0-4c8e3bd89a26.gif">

</div>


<br/>


---
---

# Reference  
- [소프트웨어 이야기](https://software-creator.tistory.com/10?category=681555)

