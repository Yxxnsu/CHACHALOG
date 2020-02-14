---
title: '💎 [Flutter] 명함 App'
date: 2020-02-14 16:38:00
category: 'Flutter'
draft: false 
showToc: true
---

# CircleAvatar Widget
 
사용자를 나타내는 원 형태의 위젯.  
보통 유저 프로필 이미지를 꾸밀 때 사용해주는 위젯이다.  



# Icon Widget

Icon 위젯은   
색상 불러올때처럼 있는 디자인 참고해서 갖다쓰면 되는거니까   
더 이상의 설명은 생략한다.

```go
...


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
              Container(
                color: Colors.white,
                padding: EdgeInsets.all(10.0),
                margin: EdgeInsets.symmetric(vertical: 10.0, horizontal: 25.0),
                child: Row(
                  children: <Widget>[
                    Icon(
                      Icons.phone,
                      color: Colors.teal,
                    ),
                    SizedBox(
                      width: 10.0,
                    ),
                    Text(
                      '+82 123 456 789',
                      style: TextStyle(
                        color: Colors.teal.shade900,
                        fontFamily: 'Source Sans Pro',
                        fontSize: 20.0,
                      ),
                    ),
                  ],
                ),
              ),
              Container(
                color: Colors.white,
                padding: EdgeInsets.all(10.0),
                margin: EdgeInsets.symmetric(vertical: 10.0, horizontal: 25.0),
                child: Row(
                  children: <Widget>[
                    Icon(
                      Icons.email,
                      color: Colors.teal,
                    ),
                    SizedBox(
                      width: 10.0,
                    ),
                    Text(
                      'chajanee@gmail.com',
                      style: TextStyle(
                        color: Colors.teal.shade900,
                        fontFamily: 'Source Sans Pro',
                        fontSize: 20.0,
                      ),


...
```

![](https://images.velog.io/images/chajanee/post/6313f746-8bb0-4880-a6b7-2d0687885368/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-14%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%204.40.48.png)


# Card Widget & Padding Widget

![](https://images.velog.io/images/chajanee/post/a0c11054-e209-458b-9d67-433a0282df10/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-14%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%205.24.28.png)

Card 위젯은  
카드의 모서리가 약간 둥글고 그림자가 있으며,  
padding 속성이 없다.  
(기본적으로 Card 위젯은 색상이 white로 먹여져있다)

으아니 패딩을 지정하고 싶은데 안된다고?! 롸?  

이럴 경우엔,  
Card 위젯의 자식으로 Padding 위젯을 써주자.  

여기서 드는 의문점!  
나는 안쪽 패딩 말고 바깥쪽으로 여백을 좀 주고 싶은데?  
요 경우에는 반대로 Card 위젯을 자식으로 두고,  
부모 위젯으로 Padding 위젯을 심어주면 된다!  



공식문서를 요긴하게 써먹자. 다 나와있다.

![](https://images.velog.io/images/chajanee/post/32149bc4-ddf4-4507-891b-8fd39f329280/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-14%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%205.01.22.png)

```go
...


              Card(
                color: Colors.white,
                margin: EdgeInsets.symmetric(vertical: 10.0, horizontal: 25.0),
                child: Row(
                  children: <Widget>[
                    Icon(
                      Icons.phone,
                      color: Colors.teal,
                    ),
                    SizedBox(
                      width: 10.0,
                    ),
                    Text(
                      '+82 123 456 789',
                      style: TextStyle(
                        color: Colors.teal.shade900,
                        fontFamily: 'Source Sans Pro',
                        fontSize: 20.0,
                      ),
                    ),
                  ],
                ),
              ),
              Card(
                color: Colors.white,
                margin: EdgeInsets.symmetric(vertical: 10.0, horizontal: 25.0),
                child: Row(
                  children: <Widget>[
                    Icon(
                      Icons.email,
                      color: Colors.teal,
                    ),
                    SizedBox(
                      width: 10.0,
                    ),
                    Text(
                      'chajanee@gmail.com',
                      style: TextStyle(
                        color: Colors.teal.shade900,
                        fontFamily: 'Source Sans Pro',
                        fontSize: 20.0,
                      ),
                    ),
                  ],


...
```

![](https://images.velog.io/images/chajanee/post/e5be1b51-bff4-49eb-a24d-03976af9de0f/2020-02-14%2017-16-18.2020-02-14%2017_21_18.gif)

# ListTile Widget

항목 리스트로,  
일반적으로 리스트 박스의 앞부분이나 뒷부분에 아이콘 뿐만 아니라 일부 텍스트를 포함하는  
단일 고정 높이의 행이다. 

![](https://images.velog.io/images/chajanee/post/a412c892-0f42-4c03-bf0b-4a09bf6f330f/list-tile2.png)

# Divider Widget

수평선 위젯.  
요소 사이를 구분 (컨텐츠 분리) 지을 때 자주 사용한다.


# 최종코드

```go
import 'package:flutter/cupertino.dart';
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
            mainAxisAlignment: MainAxisAlignment.center,
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
              SizedBox(
                height: 20.0,
                width: 150.0,
                child: Divider(
                  color: Colors.teal.shade100,
                ),
              ),
              Card(
                margin: EdgeInsets.symmetric(vertical: 10.0, horizontal: 25.0),
                child: ListTile(
                  leading: Icon(
                    Icons.phone,
                    color: Colors.teal,
                  ),
                  title: Text(
                    '+82 123 456 789',
                    style: TextStyle(
                      color: Colors.teal.shade900,
                      fontFamily: 'Source Sans Pro',
                      fontSize: 20.0,
                    ),
                  ),
                ),
              ),
              Card(
                margin: EdgeInsets.symmetric(vertical: 10.0, horizontal: 25.0),
                child: ListTile(
                  leading: Icon(
                    Icons.email,
                    color: Colors.teal,
                  ),
                  title: Text(
                    'chajanee@gmail.com',
                    style: TextStyle(
                      color: Colors.teal.shade900,
                      fontFamily: 'Source Sans Pro',
                      fontSize: 20.0,
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

```

![](https://images.velog.io/images/chajanee/post/0263e6cb-3be0-462f-ba36-caff40341c45/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-14%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%205.53.14.png)

![](https://images.velog.io/images/chajanee/post/5d41a0e1-e82a-4740-918c-5852b14e09fd/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-14%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%205.55.05.png)

<br/>


---
---

# Reference  
- [Angela Yu 강의(유료)](https://www.udemy.com/course/flutter-bootcamp-with-dart/)
- [CircleAvatar Class (공식문서)](https://api.flutter.dev/flutter/material/CircleAvatar-class.html)
- [Material Icons](https://www.materialpalette.com/icons)
- [Card Class (공식문서)](https://api.flutter.dev/flutter/material/Card-class.html)
- [Padding Class (공식문서)](https://api.flutter.dev/flutter/widgets/Padding-class.html)
- [ListTile Class (공식문서)](https://api.flutter.dev/flutter/material/ListTile-class.html)
- [Divider Class (공식문서)](https://api.flutter.dev/flutter/material/Divider-class.html)


