---
title: 'π [Flutter] μ½λλ©'
date: 2020-02-21 03:20:00
category: 'Flutter'
draft: false
showToc: true
---


# λλ€ λ¬Έμ μΆλ ₯

- λΌμ΄λΈλ¬λ¦¬ κ°μ Έμμ λλ€λ¬Έμ μΆλ ₯νκΈ°

μ μ₯ν λλ§λ€ λλ€νκ² λ¬Έμκ° μΆλ ₯λλ€.


```dart
import 'package:flutter/material.dart';
import 'package:english_words/english_words.dart'; //λΌμ΄λΈλ¬λ¦¬

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final wordPair = WordPair.random();
    return MaterialApp(
      title: 'λ°λͺ¨',
      home: Scaffold(
        appBar: AppBar(
          title: Text('Welcome to Flutter'),
        ),
        body: Center(
          child: Text(
            wordPair.asPascalCase, //λλ¬Έμλ‘ μμνλ λ¨μ΄ λλ€ μΆλ ₯
            style: TextStyle(fontSize: 60.0),
          ),
        ),
      ),
    );
  }
}
```

![2020-02-21 03-23-00 2020-02-21 03_23_57](https://user-images.githubusercontent.com/55340876/74966021-a547f380-5459-11ea-8dd8-69dc5218457d.gif)



# StatefulWidget ν΅ν΄ λλ€ λ¬Έμ μΆλ ₯

κ²°κ³Όλ λμΌνλ€.

stateful μμ ―μ κ΅¬ννλ €λ©΄ μ΅μ 2κ°μ μμ ―μ΄ νμνλ€.   
1. State ν΄λμ€  
   - μλͺμ£ΌκΈ°μ μλͺλμ κ°μ²΄λ μ§μλλ€. (μμ ―μ΄ μ μ§λλ λμ μμ΄μ§μ§ μμ)
2. State ν΄λμ€μ μΈμ€ν΄μ€λ₯Ό μμ±νλ StatefulWidget ν΄λμ€  
   - κ°μ²΄ κ·Έ μμ²΄κ° immutable. (λΆλ³μ±)
   



```dart
import 'package:flutter/material.dart';
import 'package:english_words/english_words.dart';

void main() => runApp(MyApp());

class RandomWordsState extends State<RandomWords> {
    //μ μ κ° μ€ν¬λ‘€μ μμ±λλ λ¬΄νμ λ¨μ΄λ€μ μ μ₯
  @override
  Widget build(BuildContext context) { 
    //μμ΄ λ¨μ΄λ₯Ό λλ€νκ² μμ±ν΄μ£Όλ build λ©μλ
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
      title: 'λ°λͺ¨',
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

# λ¬΄ν μ€ν¬λ‘€ λ§λ€κΈ°











<br/>


---
---

# Reference  
- [Robby Rahmana μ νλΈ](https://www.youtube.com/user/robbyrahmana)
- [μ½λλ© (κ³΅μλ¬Έμ)](https://flutter-ko.dev/docs/codelabs)

