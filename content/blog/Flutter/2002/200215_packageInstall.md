---
title: 'π [Flutter] ν¨ν€μ§ μ€μΉ λ°©λ²'
date: 2020-02-15 15:39:00
category: 'Flutter'
draft: false
showToc: true
---

# 1. μνλ [νλ¬ν° ν¨ν€μ§](https://pub.dev/flutter/packages) μ°ΎκΈ°
- νκΈ° μλ³΄κΈ°
- νμ  λμκ²μΌλ‘

# 2. pubspec.yaml ν΄λμ ν΄λΉ dependency μΆκ°
- λ€μ¬μ°κΈ° μ£Όμ

<img width="1367" alt="1" src="https://user-images.githubusercontent.com/55340876/74589348-e0a48580-5047-11ea-8330-6c110dd77782.png">



# 3. importλ‘ λΆλ¬μ€κΈ°
- 4λ²μμλ μ€λμ€μ¬μμ μν AudioCache λ₯Ό import νλ€.

<img width="1367" alt="2" src="https://user-images.githubusercontent.com/55340876/74589351-e69a6680-5047-11ea-85b2-2a94c4e913f9.png">



# 4. μ¬μ©λ°©λ²μ λ¬Έμλ₯Ό μ μ½μ΄λ³΄μ

μ€λμ€μ¬μ ν¨ν€μ§λ₯Ό κΉμμ   
AudioCache λΆλΆμ import ν΄μ μ¬μ©ν΄λ³΄μλλ°,    
μ€μ λ‘ μλ¦¬κ° μ λλ κ²μ νμΈν  μ μλ€.

```dart
import 'package:flutter/material.dart';
import 'package:audioplayers/audio_cache.dart';

void main() => runApp(XylophoneApp());

class XylophoneApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        body: SafeArea(
          child: Center(
            child: FlatButton(
              onPressed: () {
                final player = AudioCache();
                player.play('note1.wav'); //ν ν¨ν€μ§λ ν΄λκ²½λ‘ μλ΅(μ΄λ―Έν¬ν¨λμ΄μλ€)
              },
              child: Text('Click Me'),
            ),
          ),
        ),
      ),
    );
  }
}

```

```dart
import 'package:flutter/material.dart';
import 'package:audioplayers/audio_cache.dart';
...


            child: FlatButton(
              onPressed: () {
                final player = AudioCache();
                player.play('note1.wav'); //ν ν¨ν€μ§λ ν΄λκ²½λ‘ μλ΅(μ΄λ―Έν¬ν¨λμ΄μλ€)
              },
              child: Text('Click Me'),
            ),


...
```

![3](https://user-images.githubusercontent.com/55340876/74589352-e7cb9380-5047-11ea-8101-795a9bc6c531.gif)




<br/>


---
---

# Reference  
- [Angela Yu κ°μ(μ λ£)](https://www.udemy.com/course/flutter-bootcamp-with-dart/)
- [AudioPlayers Package](https://pub.dev/packages/audioplayers#-readme-tab-)
- [Audio Cache](https://github.com/luanpotter/audioplayers/blob/master/doc/audio_cache.md)