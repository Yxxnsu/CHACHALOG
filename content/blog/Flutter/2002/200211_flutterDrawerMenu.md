---
title: '๐ [Flutter] Drawer Menu'
date: 2020-02-11 04:16:00
category: 'Flutter'
draft: false 
showToc: true
---



# Drawer menu 1

๋ฆฌ์คํธ์ ํ์คํ์ค์ ํ๋ฌํฐ์์๋ ``ListTile`` ์ด๋ผ๊ณ  ๋ถ๋ฅธ๋ค.  
๊ฐ๊ฐ์ ListTile ๋ด์์๋ ๊ฐ ์์๋ค์ ๋ฐฐ์น๊ฐ ํ์ํ๋ค.  

<br/>

<img width="750" alt="1" src="https://user-images.githubusercontent.com/55340876/74588958-7ccc8d80-5044-11ea-829f-f290477a5c14.png">



<br/>

ํ๋ฌํฐ๋ ์ด๋ฐ ์์๋ค์ ํจ๋ฉ์ด๋ ๋ง์ง ๊ฐ ๋ฑ์ ์ ํ ์ ๊ฒฝ์ฐ์ง ์๊ณ  ํธํ๊ฒ ๋ฐฐ์นํ๋๋ก  
ListTile ์ด๋ ์์ ฏ์ ์ ๊ณตํ๋ค.

๊ฐ ๋ฉ๋ด๋ฅผ ํด๋ฆญํ๋ฉด ์คํ๋์(splash : ํ๋ก๊ทธ๋จ์ด ์ฒ์์ ์คํ๋  ๋ ์ฌ์ง์ด๋ ๊ทธ๋ฆผ์ด ํ๋ฉด ์ค์์ ๋ฉ์๊ฒ ๋ํ๋ฌ๋ค๊ฐ ์ ์  ์ฒ์ฒํ ์ฌ๋ผ์ง๋ ํจ๊ณผ๋ฅผ ๊ฐ์ ธ์ค๋ ๊ฒ) ํจ๊ณผ๊ฐ ๋ํ๋๋๋ฐ,  
๊ธฐ๋ณธ์ ์ผ๋ก ListTile์ ๋น๋์ธ ๋์ด์๋ ์ ๋๋ฉ์ด์์ด๋ค.



```dart
...


      drawer: Drawer(
        //ํ๋ฒ๊ฑฐ ๋ฉ๋ด๊ฐ ์์ฑ๋๋๋ฐ ํด๋ฆญํ๋ฉด ๋ฉ๋ด ๋ํ๋จ
        child: ListView(
          padding: EdgeInsets.zero,
          children: <Widget>[
            //์ฌ๋ฌ์ค์ ์ ๋ณด๋ฅผ ๋ณด์ฌ์ฃผ๋ ๋ชฉ๋ก์ด๊ธฐ ๋๋ฌธ์ child ๊ฐ ์๋ children ์์ ฏ์ ๋ถ๋ฌ์ด
            UserAccountsDrawerHeader(
              //์์ ฏ๋ฆฌ์คํธ ๋ด์์ ์ฌ์ฉ์์ด๋ฏธ์ง์ ์ ๋ณด๋ฅผ ๋ณด์ฌ์ฃผ๋ ์์ ฏ
              currentAccountPicture: CircleAvatar(
                //currentAccountPicture๋ ํ์ฌ ์ฌ์ฉ์์ ์ด๋ฏธ์ง๋ฅผ ๊ฐ์ ธ์ด
                backgroundImage: AssetImage('assets/duck.png'),
                backgroundColor: Colors.white,
              ),

...

```


![2](https://user-images.githubusercontent.com/55340876/74588959-80601480-5044-11ea-9b60-644f25a9ddb7.gif)



``UserAccountsDrawerHeader`` ๋ฅผ ์ปจํธ๋กค+์์ ฏ์ ํด๋ฆญํ๋ฉด ์์ ฏ์ด ๊ฐ๊ณ ์๋ argument๋ฅผ ํ์ธํ  ์ ์๋๋ฐ, 

```dart
    @required this.accountName,
    @required this.accountEmail,
```

``@required`` ๋ ๋จ์ด๊ฐ ๋ถ์ด์์ผ๋ฉด ์ด 2๊ฐ์ argument ๋ค์ ์์ ฏ ๋ด์์ ๋ฐ๋์ ์ฌ์ฉ๋์ผ ํ๋ค.

์ด์ ๊น์ง ์์ฑํ ์ฝ๋๋ฅผ ๋ค์๋ณด์!

```dart
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
        //ํ๋ฒ๊ฑฐ ๋ฉ๋ด๊ฐ ์์ฑ๋๋๋ฐ ํด๋ฆญํ๋ฉด ๋ฉ๋ด ๋ํ๋จ
        child: ListView(
          padding: EdgeInsets.zero,
          children: <Widget>[
            //์ฌ๋ฌ์ค์ ์ ๋ณด๋ฅผ ๋ณด์ฌ์ฃผ๋ ๋ชฉ๋ก์ด๊ธฐ ๋๋ฌธ์ child ๊ฐ ์๋ children ์์ ฏ์ ๋ถ๋ฌ์ด
            UserAccountsDrawerHeader(
              //์์ ฏ๋ฆฌ์คํธ ๋ด์์ ์ฌ์ฉ์์ด๋ฏธ์ง์ ์ ๋ณด๋ฅผ ๋ณด์ฌ์ฃผ๋ ์์ ฏ
              currentAccountPicture: CircleAvatar(
                //currentAccountPicture๋ ํ์ฌ ์ฌ์ฉ์์ ์ด๋ฏธ์ง๋ฅผ ๊ฐ์ ธ์ด
                backgroundImage: AssetImage('assets/duck.png'),
                backgroundColor: Colors.white,
              ),
              accountName: Text('JINJOO'),
              accountEmail: Text('chajanee@gmail.com'),
              onDetailsPressed: () {
                //ํด๋ฆญํ๋ฉด ๋ฐ์ผ๋ก ํผ์ณ์ง๋ฉด์ ์ถ๊ฐ์ ๋ณด๋ฅผ ๋ณด์ฌ์ง๋ ๊ธฐ๋ฅ์ ์ํํ๋ค. onPressed ์ฐธ๊ณ 
                print('arrow is clicked');
              },
              decoration: BoxDecoration(
                color: Colors.red[200],
                borderRadius: BorderRadius.only(
                    //UserAccountsDrawerHeader ๋ฐ์ค ๋ถ๋ถ์ ์์๊ฒ ๊พธ๋ฉฐ๋ณด๊ฒ ๋ค๋ ์๋ฏธ
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


![3](https://user-images.githubusercontent.com/55340876/74588961-835b0500-5044-11ea-8c34-134195356f85.gif)



---

# Drawer menu 2



```dart
...


              otherAccountsPictures: <Widget>[
                //ํ๊ฐ ์ด์์ ๋ค๋ฅธ ๊ณ์  ์ด๋ฏธ์ง๋ฅผ ์ถ๊ฐํ  ์ ์๋ค. ์๋จ currentAccountPicture ๋จ์๋ก ๋๋๋๊ฑฐ์ ๋ค๋ฅด๊ฒ otherAccountsPictures ๋ณต์๋ก ๋๋๋ ๊ฒ์ ๊ตฌ๋ถํ์.
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

![4](https://user-images.githubusercontent.com/55340876/74588962-83f39b80-5044-11ea-9632-779829a3fa74.gif)



``otherAccountsPictures`` ์ฌ์ฉํ๋ฉด ์๋ก์ฝ๋กฌ ์ฌ๋ฌ ์ฌ์ฉ์ ๊ณ์ ์ ๊ตฌํ ๊ฐ๋ฅํ๋ค.


![5](https://user-images.githubusercontent.com/55340876/74588963-8524c880-5044-11ea-9170-b40670478c9e.jpg)




``onTap``
``onPressed``

์ด ๋๊ฐ ํจ์์ ์ฐจ์ด๋,  
๊ธฐ๋ฅ์์ผ๋ก๋ ๊ฑฐ์ ๋์ผํ์ง๋ง  

``onPressed`` 
- ์ฃผ๋ก ๋ฒํผ์ ์ฌ์ฉ  
  
``onTap`` 
- gestureDetector, InkWell ๋ฑ์ ์ฌ์ฉ   
 (๊ฐ๋ น! ๊ธธ๊ฒ ๋๋ฅด๊ธฐ, ๋๋ฒ ํญํ๊ธฐ ๋ฑ ์ด๋ค ๋์์ ๋ฐ์ํ๋ ์ด๋ฒคํธ๋ฅผ ์ํด์ ์ฌ์ฉ๋จ)

``ListTile`` ์์ ``onTap`` ํจ์๊ฐ ์ฌ์ฉ๋๋ ์ด์ ๋  
์ผ๋ฐ ๋ฒํผ๊ณผ๋ ๋ฌ๋ฆฌ,  
ListTile ์์ ฏ์ ํญํ๊ฑฐ๋ ๊ธธ๊ฒ ๋๋ฅด๊ธฐ ๋ฑ ์ก์์ ๊ฐ์งํ  ์ ์๋ ๊ธฐ๋ฅ์ ๊ฐ๊ณ ์๊ธฐ ๋๋ฌธ์ด๋ค.



# ์ต์ข์ฝ๋

```dart
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
                //ํ๊ฐ ์ด์์ ๋ค๋ฅธ ๊ณ์  ์ด๋ฏธ์ง๋ฅผ ์ถ๊ฐํ  ์ ์๋ค. ์๋จ currentAccountPicture ๋จ์๋ก ๋๋๋๊ฑฐ์ ๋ค๋ฅด๊ฒ otherAccountsPictures ๋ณต์๋ก ๋๋๋ ๊ฒ์ ๊ตฌ๋ถํ์.
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
              trailing: Icon(Icons.add), //์ค๋ฅธ์ชฝ์ ์์ด์ฝ์ ๋ฐฐ์น
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
              trailing: Icon(Icons.add), //์ค๋ฅธ์ชฝ์ ์์ด์ฝ์ ๋ฐฐ์น
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
              trailing: Icon(Icons.add), //์ค๋ฅธ์ชฝ์ ์์ด์ฝ์ ๋ฐฐ์น
            ),
          ],
        ),
      ),
    );
  }
}

```



![6](https://user-images.githubusercontent.com/55340876/74588964-85bd5f00-5044-11ea-8b7f-225635d07719.gif)



<br/>


---
---

# Reference  
- [์ฝ๋ฉ์ฐํ ์ ํ๋ธ](https://www.youtube.com/channel/UC_2ge45JCuJH1z6VYt4iCgQ)

