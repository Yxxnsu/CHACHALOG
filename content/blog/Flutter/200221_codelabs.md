---
title: '💎 [Flutter] 코드랩 (미완)'
date: 2020-02-21 03:20:00
category: 'Flutter'
draft: false
showToc: true
---


# 랜덤 문자 출력

- 라이브러리 가져와서 랜덤문자 출력하기

저장할때마다 랜덤하게 문자가 출력된다.


```dart
import 'package:flutter/material.dart';
import 'package:english_words/english_words.dart'; //라이브러리

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final wordPair = WordPair.random();
    return MaterialApp(
      title: '데모',
      home: Scaffold(
        appBar: AppBar(
          title: Text('Welcome to Flutter'),
        ),
        body: Center(
          child: Text(
            wordPair.asPascalCase, //대문자로 시작하는 단어 랜덤 출력
            style: TextStyle(fontSize: 60.0),
          ),
        ),
      ),
    );
  }
}
```

![2020-02-21 03-23-00 2020-02-21 03_23_57](https://user-images.githubusercontent.com/55340876/74966021-a547f380-5459-11ea-8dd8-69dc5218457d.gif)



# StatefulWidget 통해 랜덤 문자 출력

결과는 동일하다.

stateful 위젯을 구현하려면 최소 2개의 위젯이 필요하다.   
1. State 클래스  
   - 생명주기의 수명동안 객체는 지속된다. (위젯이 유지되는 동안 없어지지 않음)
2. State 클래스의 인스턴스를 생성하는 StatefulWidget 클래스  
   - 객체 그 자체가 immutable. (불변성)
   



```dart
import 'package:flutter/material.dart';
import 'package:english_words/english_words.dart';

void main() => runApp(MyApp());

class RandomWordsState extends State<RandomWords> {
    //유저가 스크롤시 생성되는 무한의 단어들을 저장
  @override
  Widget build(BuildContext context) { 
    //영어 단어를 랜덤하게 생성해주는 build 메서드
    final WordPair wordPair = WordPair.random();
    return Text(wordPair.asPascalCase);
  }
}

class RandomWords extends StatefulWidget {
  @override
  RandomWordsState createState() => RandomWordsState();
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: '데모',
      home: Scaffold(
        appBar: AppBar(
          title: Text('Welcome to Flutter'),
        ),
        body: Center(
          child: RandomWords(),
        ),
      ),
    );
  }
}
```

# 무한 스크롤 만들기











<br/>


---
---

# Reference  
- [Robby Rahmana 유튜브](https://www.youtube.com/user/robbyrahmana)
- [코드랩 (공식문서)](https://flutter-ko.dev/docs/codelabs)

