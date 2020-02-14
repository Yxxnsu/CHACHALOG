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

![](https://images.velog.io/images/chajanee/post/e84a6c07-e90b-4b3a-b290-782a6dba5941/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-14%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%203.35.51.png)
  

### 5. 코드 추가

![](https://images.velog.io/images/chajanee/post/77ecb209-bca5-427c-a565-72047193de32/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-14%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%203.38.59.png)

![](https://images.velog.io/images/chajanee/post/eb59be28-e60b-47ac-baac-24298c7a8bda/2020-02-14%2015-38-08.2020-02-14%2015_39_25.gif)

### 6. 최종코드

```go
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


```go
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

![](https://images.velog.io/images/chajanee/post/75a8896d-bab7-4869-a3ee-af0cf47c5abc/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-14%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%203.53.58.png)

![](https://images.velog.io/images/chajanee/post/245266d8-c5a7-458d-bded-4ba6cc443741/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-14%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%203.54.23.png)



<br/>


---
---

# Reference  
- [Angela Yu 강의(유료)](https://www.udemy.com/course/flutter-bootcamp-with-dart/)
- [Flutter 폰트변경 (공식문서)](https://flutter.io/custom-fonts/#from-packages)