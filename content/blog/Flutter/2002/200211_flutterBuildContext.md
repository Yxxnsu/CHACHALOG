---
title: '๐ [Flutter] BuildContext / ์ค๋ต๋ฐ'
date: 2020-02-11 16:55:00
category: 'Flutter'
draft: false 
showToc: true
---


# BuildContext

"A handle to the location of a widget in the widget tree."  
"widget tree ์์ ํ์ฌ widget์ ์์น๋ฅผ ์ ์ ์๋ ์ ๋ณด"

build method ๋ Scaffold Widget ๋ผ๋ ์์ ฏ์ ๋ฆฌํดํ๋๋ฐ  
์ด ๋์ ์์ ฏํธ๋ฆฌ ์์์ ์ด๋์ ์์นํ๋๊ฐ์ ๋ํ ์ ๋ณด๋ฅผ ๊ฐ์ง๊ณ  ์๋ context๋ผ๋ ๊ฒ์ ๋ฃ์ด์ ๋ฆฌํดํด์ค๋ค.

"Each widget has its own BuildContext, which becomes the parent of the widget returned by the StatelessWidget.build or State.build function."  
"๋ชจ๋  ์์ ฏ์ ์์ ๋ง์ BuildContext๋ฅผ ๊ฐ๊ณ ์๋๋ฐ, ์ด BuildContext ๋ Stateless ์์ ฏ์ด๋ State ๋น๋ ๋ฉ์๋์ ์ํด์ ๋ฆฌํด ๋ ์์ ฏ์ ๋ถ๋ชจ๊ฐ ๋๋ค."





```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'JINJOO',
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
        title: Text('Snack Bar'),
        centerTitle: true,
      ),
      body: Center(
        child: FlatButton(
          child: Text(
            'Show me',
            style: TextStyle(color: Colors.white),
          ),
          color: Colors.red,
          onPressed: () {
            Scaffold.of(context).showSnackBar(SnackBar(
              content: Text('Hollow'),
            ));
          },
        ),
      ),
    );
  }
}

```

## Scaffold.of(context) method

"ํ์ฌ ์ฃผ์ด์ง context์์ ์๋ก ์ฌ๋ผ๊ฐ๋ฉด์ ๊ฐ์ฅ ๊ฐ๊น์ด Scaffold๋ฅผ ์ฐพ์์ ๋ฐํํ๋ผ."

ex)  
``Something.of(context)``
๋ฉ์๋๋ ํ์ฌ ์ฃผ์ด์ง context์์ ์๋ก ์ฌ๋ผ๊ฐ๋ฉด์ ๊ฐ์ฅ ๊ฐ๊น์ด Something์ ์ฐพ์์ ๋ฐํํ๋ผ  
๋ผ๋ ์๋ฏธ.  
``Theme.of(context)``
๋ฉ์๋๋ ํ์ฌ ์ฃผ์ด์ง context์์ ์๋ก ์ฌ๋ผ๊ฐ๋ฉด์ ๊ฐ์ฅ ๊ฐ๊น์ด Theme์ ์ฐพ์์ ๋ฐํํ๋ผ  
๋ผ๋ ์๋ฏธ. 


<img width="1014" alt="1" src="https://user-images.githubusercontent.com/55340876/74588994-bd2c0b80-5044-11ea-9ffd-e84d45e8bdee.png">



<img width="1014" alt="2" src="https://user-images.githubusercontent.com/55340876/74588996-c1f0bf80-5044-11ea-97bc-0b28812eaf90.png">



์์ ฏํธ๋ฆฌ ์์์ Scaffold.of(context) ๋ฉ์๋๋ ์ฃผ์ด์ง context๋ฅผ ๊ฐ์ง๊ณ  Scaffold ์์ ฏ์ ์ฐพ์๋์๋๋ฐ,  
์ด context๋ ๊ฒฐ๊ตญ MyPage์ context ์ด๋ฏ๋ก MyPage ์์ ฏ๋ถํฐ Scaffold๋ฅผ ์ฐพ๊ฒ๋๊ณ   
๊ณ์ ์๋ก ์์ ฏ ํธ๋ฆฌ๋ฅผ ๊ฑฐ์ฌ๋ฌ ์ฌ๋ผ๊ฐ๋ฉด์ Scaffold๋ฅผ ์ฐพ์๋ณด์ง๋ง ๋๋ด ์ฐพ์ง๋ชปํ๊ณ    
Scaffold๊ฐ ํฌํจ๋์ง ์์ context๋ผ๋ ์ค๋ฅ ๋ฉ์ธ์ง๋ฅผ ๋ณด๋ด๊ฒ ๋๋ค.

์ด ๋,  
Scaffold.of(context) ๋ฉ์๋๊ฐ ์์ ฏํธ๋ฆฌ ์์์ Scaffold๋ฅผ ์ฐพ์ ์ ์๊ฒ ํ๋ ค๋ฉด?  

๊ฒฐ๋ก ์,  
Scaffold.of(context) ๋ฉ์๋๊ฐ ์์ ฏํธ๋ฆฌ ์์์ Scaffold ๋ณด๋ค ๋ฐ์ ์๋ ์์ ฏ์ context๋ฅผ ์ฌ์ฉํ  ์ ์๊ฒ ํ๋ฉด ๋๋ค.  
๊ทธ๋ ๋ค๋ฉด ๊ทธ๊ณณ์์๋ถํฐ ๊ฑฐ์ฌ๋ฌ ์ฌ๋ผ๊ฐ๋ฉด์ ๊ฒฐ๊ตญ ์์ ฏํธ๋ฆฌ ์์์ Scaffold๋ฅผ ์ฐพ์๋ผ ์ ์์ ๊ฒ์ด๋ค.  

์ด๋ฅผ ์ํด ์กด์ฌํ๋ ๊ฒ์ด ``Builder`` ์์ ฏ์ด๋ค.  
์ด ์์ ฏ์ ํต์ฌ์ ์ธ ์ญํ ์  
์ง๊ธ๊น์ง ์ฌ์ฉํ๋ context๊ฐ ๋ฌด์์ด์๋๊ฐ์ ๋ค ๋ฌด์ํ๊ณ  ์๋ก์ด context๋ก ์๋ก์ด ์์ ฏ์ ๋ง๋ค๋ผ๋ ๊ฒ.  
Builder ์์ ฏ ๋ฐ์ ์กด์ฌํ๋ Scaffold.of(context) ๋ฉ์๋๊ฐ ๋์ด์ MyPage ์์ ฏ์ context๊ฐ ์๋๋ผ  
Builder ์์ ฏ์ context๋ฅผ ์ฌ์ฉํ๊ฒ ๋ง๋๋ ๊ฒ์ด๋ค.

๊ฒฐ๊ณผ์ ์ผ๋ก,    
Scaffold.of(context) ๋ฉ์๋๊ฐ ์์ ฏํธ๋ฆฌ ์์์ Builder ์์ ฏ ์๋ก ๊ฑฐ์ฌ๋ฌ ์ฌ๋ผ๊ฐ๋ฉด์ Scaffold ์์ ฏ์ ์ฐพ๊ฒ ๋๋ค.


```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'JINJOO',
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
          title: Text('Snack Bar'),
          centerTitle: true,
        ),
        body: Builder(
          builder: (BuildContext ctx) {
            return Center(
              child: FlatButton(
                child: Text(
                  'Show me',
                  style: TextStyle(color: Colors.white),
                ),
                color: Colors.red,
                onPressed: () {
                  Scaffold.of(ctx).showSnackBar(SnackBar(
                    content: Text('Hollow'),
                  ));
                },
              ),
            );
          },
        ));
  }
}

```


![3](https://user-images.githubusercontent.com/55340876/74588997-c2895600-5044-11ea-9126-7fad2dbe98d0.gif)



<br/>


---
---

# Reference  
- [์ฝ๋ฉ์ฐํ ์ ํ๋ธ](https://www.youtube.com/channel/UC_2ge45JCuJH1z6VYt4iCgQ)

