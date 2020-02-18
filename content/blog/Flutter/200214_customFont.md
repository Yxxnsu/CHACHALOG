---
title: '💎 [Flutter] 폰트변경'
date: 2020-02-14 15:57:00
category: 'Flutter'
draft: false 
showToc: true
---

### 1. [구글폰트](https://fonts.google.com/) 에서 폰트 다운로드

### 2. 프로젝트에 `fonts` 폴더 생성

### 3. 생성한 폴더에 다운받은 `.ttf` 파일 옮겨주기

### 4. `pubspec.yaml` 파일 수정하기 + 저장하고 우상단 `Packages get` 클릭 필수!  
**(들여쓰기 주의하자!)**

<img width="1041" alt="1" src="https://user-images.githubusercontent.com/55340876/74589204-9c64b580-5046-11ea-8d81-9c87bd636489.png">


  

### 5. 코드 추가

<img width="1041" alt="2" src="https://user-images.githubusercontent.com/55340876/74589206-a090d300-5046-11ea-8754-dcb2f2a7f22f.png">



![3](https://user-images.githubusercontent.com/55340876/74589207-a1c20000-5046-11ea-8f1a-3d4f1af383fa.gif)



### 6. 최종코드

```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        backgroundColor: Colors.teal,
        body: SafeArea(
          child: Column(
            children: <Widget>[
              CircleAvatar(
                radius: 60.0,
                backgroundImage: AssetImage('images/chacha.jpg'),
              ),
              Text(
                'JinJoo',
                style: TextStyle(
                  fontFamily: 'Pacifico',
                  fontSize: 40.0,
                  color: Colors.white,
                  fontWeight: FontWeight.bold,
                ),
              ),
              Text(
                'FLUTTER DEVELOPER',
                style: TextStyle(
                    fontFamily: 'Source Sans Pro',
                    color: Colors.teal.shade100,
                    fontSize: 20.0,
                    letterSpacing: 2.5,
                    fontWeight: FontWeight.bold),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

```


### 7. pubspec.yaml 코드


```dart
...


  fonts:
    - family: Pacifico # font name
      fonts:
      - asset: fonts/Pacifico-Regular.ttf # location & filename

    - family: Source Sans Pro
      fonts:
      - asset: fonts/SourceSansPro-Reaular.ttf
      
      
...
```

<img width="1649" alt="4" src="https://user-images.githubusercontent.com/55340876/74589209-a38bc380-5046-11ea-9123-08e281287f8c.png">



<img width="373" alt="5" src="https://user-images.githubusercontent.com/55340876/74589210-a5558700-5046-11ea-9cda-bb0b40f82492.png">



<br/>


---
---

# Reference  
- [Angela Yu 강의(유료)](https://www.udemy.com/course/flutter-bootcamp-with-dart/)
- [Flutter 폰트변경 (공식문서)](https://flutter.io/custom-fonts/#from-packages)