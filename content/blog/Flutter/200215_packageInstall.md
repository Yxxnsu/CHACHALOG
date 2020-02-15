---
title: '💎 [Flutter] 패키지 설치 방법'
date: 2020-02-15 15:39:00
category: 'Flutter'
draft: false
showToc: true
---

# 1. 원하는 [플러터 패키지](https://pub.dev/flutter/packages) 찾기
- 후기 잘보기
- 평점 높은것으로

# 2. pubspec.yaml 폴더에 해당 dependency 추가
- 들여쓰기 주의

<img width="1367" alt="1" src="https://user-images.githubusercontent.com/55340876/74589348-e0a48580-5047-11ea-8330-6c110dd77782.png">



# 3. import로 불러오기
- 4번에서는 오디오재생을 위한 AudioCache 를 import 했다.

<img width="1367" alt="2" src="https://user-images.githubusercontent.com/55340876/74589351-e69a6680-5047-11ea-85b2-2a94c4e913f9.png">



# 4. 사용방법은 문서를 잘 읽어보자

오디오재생 패키지를 깔아서   
AudioCache 부분을 import 해서 사용해보았는데,    
실제로 소리가 잘 나는 것을 확인할 수 있다.

```go
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
                player.play('note1.wav'); //현 패키지는 폴더경로 생략(이미포함되어있다)
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

```go
import 'package:flutter/material.dart';
import 'package:audioplayers/audio_cache.dart';
...


            child: FlatButton(
              onPressed: () {
                final player = AudioCache();
                player.play('note1.wav'); //현 패키지는 폴더경로 생략(이미포함되어있다)
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
- [Angela Yu 강의(유료)](https://www.udemy.com/course/flutter-bootcamp-with-dart/)
- [AudioPlayers Package](https://pub.dev/packages/audioplayers#-readme-tab-)
- [Audio Cache](https://github.com/luanpotter/audioplayers/blob/master/doc/audio_cache.md)