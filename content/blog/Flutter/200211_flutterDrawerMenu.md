---
title: '💎 [Flutter] Drawer Menu'
date: 2020-02-11 04:16:00
category: 'Flutter'
draft: false 
showToc: true
---



# Drawer menu 1

리스트의 한줄한줄을 플러터에서는 ``ListTile`` 이라고 부른다.  
각각의 ListTile 내에서는 각 요소들의 배치가 필요하다.  

<br/>

![](https://images.velog.io/images/chajanee/post/572fd336-59f6-4e35-bc8c-82875927ce0a/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-11%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%203.17.01.png)

<br/>

플러터는 이런 요소들을 패딩이나 마진 값 등에 전혀 신경쓰지 않고 편하게 배치하도록  
ListTile 이란 위젯을 제공한다.

각 메뉴를 클릭하면 스플래시(splash : 프로그램이 처음에 실행될 때 사진이나 그림이 화면 중앙에 멋있게 나타났다가 점점 천천히 사라지는 효과를 가져오는 것) 효과가 나타나는데,  
기본적으로 ListTile에 빌드인 되어있는 애니메이션이다.



```go
...


      drawer: Drawer(
        //햄버거 메뉴가 생성되는데 클릭하면 메뉴 나타남
        child: ListView(
          padding: EdgeInsets.zero,
          children: <Widget>[
            //여러줄의 정보를 보여주는 목록이기 떄문에 child 가 아닌 children 위젯을 불러옴
            UserAccountsDrawerHeader(
              //위젯리스트 내에서 사용자이미지와 정보를 보여주는 위젯
              currentAccountPicture: CircleAvatar(
                //currentAccountPicture는 현재 사용자의 이미지를 가져옴
                backgroundImage: AssetImage('assets/duck.png'),
                backgroundColor: Colors.white,
              ),

...

```


![](https://images.velog.io/images/chajanee/post/a38d183c-e2ff-4d49-ab2c-b0084b51a2bc/2020-02-11%2003-28-24.2020-02-11%2003_29_07.gif)

``UserAccountsDrawerHeader`` 를 컨트롤+위젯을 클릭하면 위젯이 갖고있는 argument를 확인할 수 있는데, 

```go
    @required this.accountName,
    @required this.accountEmail,
```

``@required`` 란 단어가 붙어있으면 이 2개의 argument 들은 위젯 내에서 반드시 사용되야 한다.

이제까지 작성한 코드를 다시보자!

```go
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Appbar',
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
        title: Text('Appbar icon menu'),
        centerTitle: true,
        elevation: 0.0,
        actions: <Widget>[
          IconButton(
            icon: Icon(Icons.shopping_cart),
            onPressed: () {
              print('Shopping cart button is clicked');
            },
          ),
          IconButton(
            icon: Icon(Icons.search),
            onPressed: () {
              print('Search button is clicked');
            },
          ),
        ],
      ),
      drawer: Drawer(
        //햄버거 메뉴가 생성되는데 클릭하면 메뉴 나타남
        child: ListView(
          padding: EdgeInsets.zero,
          children: <Widget>[
            //여러줄의 정보를 보여주는 목록이기 떄문에 child 가 아닌 children 위젯을 불러옴
            UserAccountsDrawerHeader(
              //위젯리스트 내에서 사용자이미지와 정보를 보여주는 위젯
              currentAccountPicture: CircleAvatar(
                //currentAccountPicture는 현재 사용자의 이미지를 가져옴
                backgroundImage: AssetImage('assets/duck.png'),
                backgroundColor: Colors.white,
              ),
              accountName: Text('JINJOO'),
              accountEmail: Text('chajanee@gmail.com'),
              onDetailsPressed: () {
                //클릭하면 밑으로 펼쳐지면서 추가정보를 보여지는 기능을 수행한다. onPressed 참고
                print('arrow is clicked');
              },
              decoration: BoxDecoration(
                color: Colors.red[200],
                borderRadius: BorderRadius.only(
                    //UserAccountsDrawerHeader 박스 부분을 예쁘게 꾸며보겠다는 의미
                    bottomLeft: Radius.circular(40.0),
                    bottomRight: Radius.circular(40.0)),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

```

![](https://images.velog.io/images/chajanee/post/a6225e60-e6d6-423c-87c7-bc68ef24726d/2020-02-11%2003-38-58.2020-02-11%2003_39_19.gif)

---

# Drawer menu 2



```go
...


              otherAccountsPictures: <Widget>[
                //한개 이상의 다른 계정 이미지를 추가할 수 있다. 상단 currentAccountPicture 단수로 끝나는거완 다르게 otherAccountsPictures 복수로 끝나는 것을 구분하자.
                CircleAvatar(
                  backgroundImage: AssetImage('assets/chacha.jpg'),
                ),
                CircleAvatar(
                  backgroundColor: Colors.white,
                  backgroundImage: AssetImage('assets/duck.png'),
                ),
                CircleAvatar(
                  backgroundImage: AssetImage('assets/moana.gif'),
                ),
              ],
              accountName: Text('JINJOO'),
              accountEmail: Text('chajanee@gmail.com'),
              onDetailsPressed: () {
                print('arrow is clicked');
              },
                    
                    
...
```

![](https://images.velog.io/images/chajanee/post/49467f62-7bba-46d5-a745-275f23dac5f7/2020-02-11%2003-51-22.2020-02-11%2003_51_47.gif)

``otherAccountsPictures`` 사용하면 요로코롬 여러 사용자 계정을 구현 가능하다.

![](https://images.velog.io/images/chajanee/post/dcd4263d-657a-40c5-8136-95767e3a9cd1/%E1%84%8C%E1%85%A6%E1%84%86%E1%85%A9%E1%86%A8_%E1%84%8B%E1%85%A5%E1%86%B9%E1%84%82%E1%85%B3%E1%86%AB_%E1%84%8B%E1%85%A1%E1%84%90%E1%85%B3%E1%84%8B%E1%85%AF%E1%84%8F%E1%85%B3.jpg)


``onTap``
``onPressed``

이 두개 함수의 차이는,  
기능상으로는 거의 동일하지만  

``onPressed`` 
- 주로 버튼에 사용  
  
``onTap`` 
- gestureDetector, InkWell 등에 사용   
 (가령! 길게 누르기, 두번 탭하기 등 어떤 동작에 반응하는 이벤트를 위해서 사용됨)

``ListTile`` 에서 ``onTap`` 함수가 사용되는 이유는  
일반 버튼과는 달리,  
ListTile 위젯은 탭하거나 길게 누르기 등 액션을 감지할 수 있는 기능을 갖고있기 때문이다.



# 최종코드

```go
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Appbar',
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
        title: Text('Appbar icon menu'),
        centerTitle: true,
        elevation: 0.0,
        actions: <Widget>[
          IconButton(
            icon: Icon(Icons.shopping_cart),
            onPressed: () {
              print('Shopping cart button is clicked');
            },
          ),
          IconButton(
            icon: Icon(Icons.search),
            onPressed: () {
              print('Search button is clicked');
            },
          ),
        ],
      ),
      drawer: Drawer(
        child: ListView(
          padding: EdgeInsets.zero,
          children: <Widget>[
            UserAccountsDrawerHeader(
              currentAccountPicture: CircleAvatar(
                backgroundImage: AssetImage('assets/chacha.jpg'),
                // backgroundColor: Colors.white,
              ),
              otherAccountsPictures: <Widget>[
                //한개 이상의 다른 계정 이미지를 추가할 수 있다. 상단 currentAccountPicture 단수로 끝나는거완 다르게 otherAccountsPictures 복수로 끝나는 것을 구분하자.
                // CircleAvatar(
                //   backgroundImage: AssetImage('assets/chacha.jpg'),
                // ),
                CircleAvatar(
                  backgroundColor: Colors.white,
                  backgroundImage: AssetImage('assets/duck.png'),
                ),
                // CircleAvatar(
                //   backgroundImage: AssetImage('assets/moana.gif'),
                // ),
              ],
              accountName: Text('JINJOO'),
              accountEmail: Text('chajanee@gmail.com'),
              onDetailsPressed: () {
                print('arrow is clicked');
              },
              decoration: BoxDecoration(
                color: Colors.red[200],
                borderRadius: BorderRadius.only(
                    bottomLeft: Radius.circular(40.0),
                    bottomRight: Radius.circular(40.0)),
              ),
            ),
            ListTile(
              leading: Icon(
                Icons.home,
                color: Colors.grey[850],
              ),
              title: Text('Home'),
              onTap: () {
                print('Home is clicked');
              },
              trailing: Icon(Icons.add), //오른쪽에 아이콘을 배치
            ),
            ListTile(
              leading: Icon(
                Icons.settings,
                color: Colors.grey[850],
              ),
              title: Text('Setting'),
              onTap: () {
                print('Setting is clicked');
              },
              trailing: Icon(Icons.add), //오른쪽에 아이콘을 배치
            ),
            ListTile(
              leading: Icon(
                Icons.home,
                color: Colors.grey[850],
              ),
              title: Text('Q&A'),
              onTap: () {
                print('Q&A is clicked');
              },
              trailing: Icon(Icons.add), //오른쪽에 아이콘을 배치
            ),
          ],
        ),
      ),
    );
  }
}

```

![](https://images.velog.io/images/chajanee/post/2baaa006-c731-4975-a7a6-e8edb2ee8214/2020-02-11%2004-13-43.2020-02-11%2004_14_05.gif)



<br/>


---
---

# Reference  
- [코딩셰프 유튜브](https://www.youtube.com/channel/UC_2ge45JCuJH1z6VYt4iCgQ)

