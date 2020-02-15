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

![](https://images.velog.io/images/chajanee/post/84756420-f6e7-4da5-9905-deaad7821738/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%203.22.57.png)

# 3. import로 불러오기
- 4번에서는 오디오재생을 위한 AudioCache 를 import 했다.

![](https://images.velog.io/images/chajanee/post/b815a0e4-2bc5-49db-ab4a-3563f27ae11c/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%203.24.13.png)

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

![](https://images.velog.io/images/chajanee/post/bffb5653-4725-40a4-8653-02ae8a523677/2020-02-15%2015-48-42.2020-02-15%2015_49_26.gif)


<br/>


---
---

# Reference  
- [Angela Yu 강의(유료)](https://www.udemy.com/course/flutter-bootcamp-with-dart/)
- [AudioPlayers Package](https://pub.dev/packages/audioplayers#-readme-tab-)
- [Audio Cache](https://github.com/luanpotter/audioplayers/blob/master/doc/audio_cache.md)