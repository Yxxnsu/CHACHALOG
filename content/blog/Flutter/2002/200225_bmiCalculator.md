---
title: '๐ [Flutter] BMI Calculator App'
date: 2020-02-26 02:18:00
category: 'Flutter'
draft: false
showToc: true
---

# ํ๋ง ์ฌ์ฉ๋ฒ

```dart
...

class BMICalculator extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false, //๋๋ฒ๊ทธ ๋  ๊ฐ์ถ๊ธฐ
      theme: ThemeData(
        primaryColor: Color(0xFF0A0E21), //์ฑ๋ฐ ๋ถ๋ถ ์์
        accentColor: Colors.purple, //ํ๋กํ์ก์๋ฒํผ ์์
        scaffoldBackgroundColor: Color(0xFF0A0E21), //scaffold ๋ฐฐ๊ฒฝ ์์
        textTheme: TextTheme(body1: TextStyle(color: Colors.white)), //ํ๋ฐ๋ ๋ถ๋ถ ํ์คํธ ์์
      ),
      home: InputPage(),
    );
  }
}

...
```



<img width="350" alt="แแณแแณแแตแซแแฃแบ 2020-02-25 แแฉแแฎ 7 31 10" src="https://user-images.githubusercontent.com/55340876/75239194-9d93a080-5805-11ea-8383-12f787652a5b.png">



์ด ๋ฐฉ๋ฒ ๋ง๊ณ ๋  

```dart
...

class BMICalculator extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData.dark().copyWith( //๋คํฌํ๋ง.copyWith
        primaryColor: Color(0xFF0A0E21),
        scaffoldBackgroundColor: Color(0xFF0A0E21),
      ),
      home: InputPage(),
    );
  }
}

...
```

๋คํฌ ํ๋ง๋ฅผ ์ง์  ํ,  
copyWith ๋ฉ์๋๋ก ๋ช ๋ถ๋ถ๋ง ์๋ฐ์ดํธ ํด์ค๋ ๊ฒฐ๊ณผ๋ ๊ฐ๋ค. 

์ฝ๋๊ฐ ์ข ๋ ๊ฐ๊ฒฐํด์ง๋ค.

ํ๋กํ์ก์๋ฒํผ ์์ ฏ์ ํ๋ง ์์ ฏ์ผ๋ก ๊ฐ์ธ์ ์ข ๋ ์ธ๋ฐํ๊ฒ ๊พธ๋ฉฐ์ค ์๋ ์๋ค.

```dart
...

      floatingActionButton: Theme(
        data: ThemeData(accentColor: Colors.purple), //๋ฒํผ๋ถ๋ถ ์์
        child: FloatingActionButton(
          child: Icon(Icons.add),
        ),

...
```

---

<br/>

---

์ผ๋จ ์ฝ๋๋ฅผ ๊ฐ ํ์ผ์ ๋๋๊ณ  ์์ํ์.  

lib/mail.dart

```dart
import 'package:flutter/material.dart';
import 'input_page.dart';

void main() => runApp(BMICalculator());

class BMICalculator extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData.dark().copyWith(
        primaryColor: Color(0xFF0A0E21),
        scaffoldBackgroundColor: Color(0xFF0A0E21),
      ),
      home: InputPage(),
    );
  }
}
```

lib/input_page.dart

```dart
import 'package:flutter/material.dart';

class InputPage extends StatefulWidget {
  @override
  _InputPageState createState() => _InputPageState();
}

class _InputPageState extends State<InputPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('BMI CALCULATOR'),
      ),
    );
  }
}
```

<br/>


# ์์ ฏ ๋ฆฌํฉํ ๋ง

์ผ๋จ ์์ ฏ์ ์นด๋ ๋ถ๋ถ - ๊ฐ ๋ถ๋ถ๋ค์ด ๋ณด์ฌ์ง๋ ๋ท๋จ ๋ฐฐ๊ฒฝ ๋ถ๋ถ์ ๋ง๋ค๊ฑฐ๋ค.

lib/input_page.dart

```dart
...

    return Scaffold(
      appBar: AppBar(
        title: Text('BMI CALCULATOR'),
      ),
      body: Container(
        color: Color(0xFF1D1E33), //์ปจํ์ด๋ ์์
        height: 200.0,
        width: 170.0,
        margin: EdgeInsets.all(15.0), //์ฌ๋ฐฉ ์ฌ๋ฐฑ
      ),
    );
  }
}

```

์ฌ๊ธฐ๊น์ง ๋ฐ๋ผ์ค๋ฉด ์นด๋ ๋ฐฐ๊ฒฝ ๋ถ๋ถ์ ๋ํ๋๋ค.  

<img width="371" alt="แแณแแณแแตแซแแฃแบ 2020-02-25 แแฉแแฎ 9 06 58" src="https://user-images.githubusercontent.com/55340876/75246263-c79f8f80-5812-11ea-89e6-a3a56e67ec5d.png">


ํ์ง๋ง ์ปจํ์ด๋์ ํ๋๋ฆฌ๊ฐ ๋๋ฌด ๊ฐ์ก์ผ๋ ์ข ๋ฅ๊ธ๊ฒ ๋ค๋ฌ์ด๋ณด์.

```dart
...

      body: Container(
        height: 200.0,
        width: 170.0,
        margin: EdgeInsets.all(15.0), //์ฌ๋ฐฉ ์ฌ๋ฐฑ
        decoration: BoxDecoration(
          color: Color(0xFF1D1E33), //์ปจํ์ด๋ ์์
          borderRadius: BorderRadius.circular(10.0), //์ปจํ์ด๋ ํ๋๋ฆฌ
        ),
      ),
    );
  }
}
```

decoration ์์ฑ์ ํตํด BoxDecoration ์์ ฏ ๋ด๋ถ์ ํ๋๋ฆฌ๋ฅผ ๋งค๊ฒผ๋ค.  
๋๋ถ์ด ์ปจํ์ด๋ ์์ ฏ์ ์คฌ๋ ``color: Color(0xFF1D1E33),`` ์์ ๋ถ๋ถ๋ ๊ฐ์ด ์ฎ๊ฒจ์ฃผ์๋ค.  
์ง์ ํด์คฌ๋ ์์๋ ํด๋น ์ปจํ์ด๋ ๋ฐ์ฝ๋ ์ด์์ ํ ๋ถ๋ถ์ด๊ธฐ ๋๋ฌธ์,  
๋ฐ์ฝ๋ ์ด์ ์์ ฏ์ด ์์ผ๋ฉด ์์ผ๋ก ๋ค ์ฎ๊ฒจ์ค์ผ ํ๋ค.  
๊ทธ๋ ์ง ์์ผ๋ฉด ์๋ฌ๊ฐ ๋ฌ๋ค!  

<img width="371" alt="แแณแแณแแตแซแแฃแบ 2020-02-25 แแฉแแฎ 9 12 37" src="https://user-images.githubusercontent.com/55340876/75246652-91164480-5813-11ea-9c03-25535d7f55d0.png">

์ ์ด์  ๋ฅ๊ธ๋ฅ๊ธํด์ก๋ค!  
๋ ์ด์์์ ์ก์๋ณด์.

```dart
...

      body: Column(
        children: <Widget>[
          Expanded(
            child: Row(
              children: <Widget>[
                Expanded(
                  child: Container(
                    margin: EdgeInsets.all(15.0), //์ฌ๋ฐฉ ์ฌ๋ฐฑ
                    decoration: BoxDecoration(
                      color: Color(0xFF1D1E33), //์ปจํ์ด๋ ์์
                      borderRadius: BorderRadius.circular(10.0), //์ปจํ์ด๋ ํ๋๋ฆฌ
                    ),
                  ),
                ),
                Expanded(
                  child: Container(
                    margin: EdgeInsets.all(15.0), //์ฌ๋ฐฉ ์ฌ๋ฐฑ
                    decoration: BoxDecoration(
                      color: Color(0xFF1D1E33), //์ปจํ์ด๋ ์์
                      borderRadius: BorderRadius.circular(10.0), //์ปจํ์ด๋ ํ๋๋ฆฌ
                    ),
                  ),
                ),
              ],
            ),
          ),
          Expanded(
            child: Container(
              margin: EdgeInsets.all(15.0), //์ฌ๋ฐฉ ์ฌ๋ฐฑ
              decoration: BoxDecoration(
                color: Color(0xFF1D1E33), //์ปจํ์ด๋ ์์
                borderRadius: BorderRadius.circular(10.0), //์ปจํ์ด๋ ํ๋๋ฆฌ
              ),
            ),
          ),
          Expanded(
            child: Row(
              children: <Widget>[
                Expanded(
                  child: Container(
                    margin: EdgeInsets.all(15.0), //์ฌ๋ฐฉ ์ฌ๋ฐฑ
                    decoration: BoxDecoration(
                      color: Color(0xFF1D1E33), //์ปจํ์ด๋ ์์
                      borderRadius: BorderRadius.circular(10.0), //์ปจํ์ด๋ ํ๋๋ฆฌ
                    ),
                  ),
                ),
                Expanded(
                  child: Container(
                    margin: EdgeInsets.all(15.0), //์ฌ๋ฐฉ ์ฌ๋ฐฑ
                    decoration: BoxDecoration(
                      color: Color(0xFF1D1E33), //์ปจํ์ด๋ ์์
                      borderRadius: BorderRadius.circular(10.0), //์ปจํ์ด๋ ํ๋๋ฆฌ
                    ),

...
```

<img width="1455" alt="แแณแแณแแตแซแแฃแบ 2020-02-25 แแฉแแฎ 9 23 03" src="https://user-images.githubusercontent.com/55340876/75247333-06cee000-5815-11ea-8cad-42c97407aa75.png">

์ฝ๋๋ฅผ ๋ณด๋ฉด ๋ณต์ก์๋ฝ์ง๋ง  
๋ ์ด์์ ์ง๋๊ฑด ๊ธฐ๋ณธ์ด๊ธฐ ๋๋ฌธ์ ๋ถ๋ชํ ์ดํดํ๊ณ  ๋์ด๊ฐ์ผ ํ๋ค!  

ํ์ฌ ์ฝ๋๋ Container ๋ถ๋ถ์ด ๋ฐ๋ณต๋๋๊ฒ ๋๋ฌด ๋ง๋ค.  
์ฝ๋๋ฅผ **DRY** ํ๊ฒ ์ ์งํด๋ณด์.  
**DRY - Don't Repeat Yourself**  

ํด๋น Container ํ๋์ ์ปค์๋ฅผ ๋๊ณ  ์ค๋ฅธ์ชฝ์ Flutter Outline ํด๋ฆญ์ ํ๋ฉด  
๋ด๊ฐ ์ปค์๋ฅผ ๋ ์ปจํ์ด๋๋ฅผ ๊ฐ๋ฅดํจ๋ค.  
๊ทธ๋ผ ์ค๋ฅธ์ชฝ ๋ง์ฐ์ค๋ฅผ ํด๋ฆญํ์ฌ Extract Widget ์ ๋!!  
์ด๋ฆ ์ง์ ์ ๋!! ์์ฑํ๋ฉด,   




<img width="642" alt="แแณแแณแแตแซแแฃแบ 2020-02-25 แแฉแแฎ 11 48 29" src="https://user-images.githubusercontent.com/55340876/75258111-57e8cf00-5829-11ea-8bd2-7aac6d1181d9.png">



์ปค์๊ฐ ์๋ ์ปจํ์ด๋ ์์ ฏ๋ ์๋กท๊ฒ ๋ฐ๋๊ณ   
ํ๋จ์ stl ํด๋์ค๋ก ์์ฑ์ด ๋๊ฑธ ํ์ธ ํ  ์ ์๋ค.  

```dart
...

class ReusableCard extends StatelessWidget {
  const ReusableCard({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.all(15.0), //์ฌ๋ฐฉ ์ฌ๋ฐฑ
      decoration: BoxDecoration(
        color: Color(0xFF1D1E33), //์ปจํ์ด๋ ์์
        borderRadius: BorderRadius.circular(10.0), //์ปจํ์ด๋ ํ๋๋ฆฌ
      ),
    );
  }
}
```

<br/>



์๋์ ๋ฐ๋ณต ๋ถ๋ถ์ ์ฌ์ฌ์ฉ ํด์ฃผ๋ฉด ๋๋ค๋ ์๋ฆฌ!!  
(ReusableCard ์ด๋ ์ด๋ฆ์ผ๋ก ์ถ์ถํด์ฃผ์๋ค)

```dart
...

      body: Column(
        children: <Widget>[
          Expanded(
            child: Row(
              children: <Widget>[
                Expanded(
                  child: ReusableCard(),
                ),
                Expanded(
                  child: ReusableCard(),
                ),
              ],
            ),
          ),
          Expanded(
            child: ReusableCard(),
          ),
          Expanded(
            child: Row(
              children: <Widget>[
                Expanded(
                  child: ReusableCard(),
                ),
                Expanded(
                  child: ReusableCard(),
                ),

...
```

์ค์ค์ด ์์ธ์ง ๊ฐ๋ ์ฝ๋๊ฐ ๋ณด๊ธฐ ์ข์์ก๋ค. ๊ทฃ๊ฒฐ๊ทฃ๊ฒฐ  
์ฌ์ฌ์ฉ ๊ฐ๋ฅํ ์นด๋์ ๋ฌธ์ ๊ฐ ์๋ ๊ฒฝ์ฐ์๋ ์์ฑ ๋ ์ฅ์๋ฅผ ์ฐพ์์ ์์ ๋ง ํด์ฃผ๋ฉด ๊ณ ๋ฏผํํ!!


```dart
  const ReusableCard({Key key,}) : super(key: key);
```

๋ถ๋ถ์ ์ ๊น ์ดํด๋ณด์๋ฉด,  
``{Key key,}`` Key ์์ ฏ์ด ๋ณด์ธ๋ค.  
ํค ์์ ฏ์ ์์ ฏ ํธ๋ฆฌ์์ ์์ ฏ์ด ์์ง์ผ ๋๋ง๋ค ํ ์ํ๋ฅผ ๋ณด์กดํ๋ ์ญํ ์ ํ๋ค.  
์ฌ์ฉ์์ ์คํฌ๋กค ์์น๋  
์ปฌ๋ ์์ ์์ ํ๋ ์ํ๋ฅผ ๋ณด์กดํ  ์ ์๋ค.  

์ฆ,   
์ด๋ค ์ํ๋ฅผ ์ ์งํ๊ณ  ์๋ ๊ฐ์ ์ข๋ฅ์ ์์ ฏ ์ปฌ๋ ์์ ๋ํ๊ฑฐ๋ ์ ๊ฑฐํ๊ฑฐ๋ ์๋ก ์ ๋ ฌํด์ผ ํ  ๋ ์ฌ์ฉํ๋ค.    
(์๋ฅผ ๋ค๋ฉด ToDo ์ฑ์ ํ ์ผ ๋ชฉ๋ก)   
_์ค์ ๋ก ๋ณ๋ก ์์ด๋ค๋๊น ์ผ๋จ ์ฌ๊ธฐ๊น์ง๋ง ์์๋์_

<br/>
<br/>

์ง๊ธ์ ๊ฒฝ์ฐ์๋ ํ์๊ฐ ์์ผ๋ ์ผ๋จ ์ ๋ถ๋ถ์ ์ญ์ ํด์ฃผ๊ณ   
ReusableCard์์ ์ฌ์ฉํ๋ ์์ฑ ์ค์์ ํ๋์ ๋ํ ๊ฐ์ ์์ฑํ๋ ค๋ฉด ์์ฑ์๊ฐ ํ์ํ๋ค.  
์..   
์นด๋ ๋ ์ด์์ ๋ถ๋ถ์ ํด๋ฆญํ ๋๋ง๋ค ์ปจํ์ด๋ ์์์ด๋ผ๋ ์์ฑ์ด ๋ฐ๋๋ค.    
์๋์ ๊ณ ์น๋ฉด ๋๋ค!  

<br/>

์๋ก์ด ReusableCard ์์ ฏ์ ๋ง๋ค ๋,  
์ ๋ฌํ  ์ ์๋ ReusableCard ์ ์์ฑ์ผ๋ก  
``Color colour;`` ๋ผ๊ณ  ์์ ์ ํ์ ์์ฑ์ ๋ง๋ค์ด์ฃผ๊ณ   
``ReusableCard({this.colour});`` ์๋ก์ฝ๋กฌ ์์ฑ์๋ฅผ ๋ง๋ ๋ค.  
(์์ฑ์ ์ด๋ฆ์ ์ฐธ์กฐํ๊ฒ๋ ์ด๋ฆ์ ์ง์ ํ๋ ค๋ ๋ชจ๋  ์์ฑ์ {} ์ค๊ดํธ๋ก ๋ฌถ์ด์ค๋ค)


<img width="651" alt="แแณแแณแแตแซแแฃแบ 2020-02-26 แแฉแแฅแซ 1 10 41" src="https://user-images.githubusercontent.com/55340876/75265851-d4cd7600-5834-11ea-8895-7fb46327ab0b.png">

``@required`` ๋ ๊ผญ! ํ์๋ก ๋ช์๋ฅผ ํด์ค์ผํ๋ค๋ ํค์๋.   
์ฌ๊ธฐ์๋ ReusableCard์ ๋งค๊ฐ ๋ณ์๋ก ์์์ด ๋ฐ๋์ ํ์ํ๋ค๊ณ  ๋งฅ์ฌ์คฌ๋๋ฐ,  
์๋จ ์บก์ณ๋ฅผ ๋ณด๋ฉด ํ์ธํ  ์ ์๋ฏ์ด ํ์ํ ๋ถ๋ถ์ ๋ธ๋์ ํ์ด๋ผ์ดํธ๋ก ์๋ ค์ค๋ค.

```dart
...

          child: ReusableCard( //๋ชจ๋  ReusableCard ์์ ฏ ๋ด๋ถ๋ง๋ค ๋์ผํ ์์ ์ถ๊ฐ
            colour: Color(0xFF1D1E33),
          ),

...
...

class ReusableCard extends StatelessWidget {
  ReusableCard({@required this.colour});

  Color colour;

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.all(15.0), //์ฌ๋ฐฉ ์ฌ๋ฐฑ
      decoration: BoxDecoration(
        color: colour, //์ปจํ์ด๋ ์์
        borderRadius: BorderRadius.circular(10.0), //์ปจํ์ด๋ ํ๋๋ฆฌ
      ),
    );
  }
}

```

์ฝ๋๋ ์ด๋ ๊ณ ,  
๋ชจ๋  ``ReusableCard()`` ์์๋ ``colour: Color(0xFF1D1E33)`` ๋ฅผ ์ถ๊ฐํด์คฌ๋ค.  

์ด๋ก์จ ์์ ฏ๋ค ์ค์์ ํ๋๋ฅผ ๊ณจ๋ผ ์ปฌ๋ฌ๋ฅผ ๋ฐ๊พธ๋ฉด?  

<img width="1456" alt="แแณแแณแแตแซแแฃแบ 2020-02-26 แแฉแแฅแซ 1 19 30" src="https://user-images.githubusercontent.com/55340876/75266719-1b6fa000-5836-11ea-9d16-40fc13278ef4.png">

์ฌ์ฌ์ฉ์ฑ ์ฉ๋ ๋์ ๋ง๋ค์ด์ค๊ฒจ!!


![2020-02-26 11-36-00 2020-02-26 11_36_42](https://user-images.githubusercontent.com/55340876/75306403-47b60b80-588c-11ea-87bd-e5022bb0482b.gif)  

๊ตฌ๋ถ๊ตฌ๋ถํ ์๋ฌ๊ฐ์ ํ์์  

```dart
...

class ReusableCard extends StatelessWidget {
  ReusableCard({@required this.colour});

  final Color colour;

  @override

...
```
์๋ก์ผ final ์ ์์ ์จ์ฃผ๋ฉด ํ๋กํผํฐ๊ฐ ๋ถ๋ณ์ผ๋ก ๋ณํด์ ๊พธ๋ถ๋ฆฌ๊ฐ ์ฌ๋ผ์ง๋ค!  

ํ๋จ ํ๋ํ๋ ๋ฐํ๋ ๋ง๋ค์ด๋ณด์.

```dart
import 'package:flutter/material.dart';

const bottomContainerHeight = 80.0; //์์์ ์ธ
const activeCardColour = Color(0xFF1D1E33); //์์์ ์ธ
const bottomContainerColour = Color(0xFFEB1555); //์์์ ์ธ

class InputPage extends StatefulWidget {
  @override
  _InputPageState createState() => _InputPageState();
}

class _InputPageState extends State<InputPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('BMI CALCULATOR'),
      ),
      body: Column(
        children: <Widget>[
          Expanded(
            child: Row(
              children: <Widget>[
                Expanded(
                  child: ReusableCard(
                    colour: activeCardColour,
                  ),
                ),
                Expanded(
                  child: ReusableCard(
                    colour: activeCardColour,
                  ),
                ),
              ],
            ),
          ),
          Expanded(
            child: ReusableCard(
              colour: activeCardColour,
            ),
          ),
          Expanded(
            child: Row(
              children: <Widget>[
                Expanded(
                  child: ReusableCard(
                    colour: activeCardColour,
                  ),
                ),
                Expanded(
                  child: ReusableCard(
                    colour: activeCardColour,
                  ),
                ),
              ],
            ),
          ),
          Container(
            color: bottomContainerColour,
            margin: EdgeInsets.only(top: 10.0),
            width: double.infinity, //์ด๋ ๋๋ฐ์ด์ค์์ ๊ตฌ๋๋๋ ๊ฐ๋ก ์ ์ฒด ์ฐจ์ง
            height: bottomContainerHeight,
          ),
        ],
      ),
    );
  }
}

...
```

์๋จ์ ์ค๋ณต๋๋ ๊ฒ๋ค์ ์์๋ก ์ ์ธํด์ฃผ๊ณ  ๊ฐ ์์ ์์น์ ๋์์ฃผ๋ฉด?!

<img width="350" alt="แแณแแณแแตแซแแฃแบ 2020-02-26 แแฉแแฎ 3 29 51" src="https://user-images.githubusercontent.com/55340876/75318102-d9357580-58ac-11ea-87fd-e8e56fc5424b.png">

๋นผ์ฐ!

# ์ฌ์ฉ์ ์ ์ ์์ ฏ

```dart
...

class ReusableCard extends StatelessWidget {
  ReusableCard({@required this.colour, this.cardChild});

  final Color colour;
  final Widget cardChild;

  @override
  Widget build(BuildContext context) {
    return Container(
      child: cardChild,

...
```

``cardChild`` ๋ฅผ ์ถ๊ฐํด์ฃผ๊ณ ,  
๊ธฐ๋ฅ์ ๋ฃ๊ธฐ ์ ์ ๋จผ์ , ์คํ์ผ๋ง์ ์ํด  
[font_ awesome_flutter 8.7.0](https://pub.dev/packages/font_awesome_flutter) ํจํค์ง๋ฅผ pubspec.yaml ์ ์ถ๊ฐํด์ค๋ค.  

```dart
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
```

import๋ ์์ง๋ง๊ณ !  
์ด์  ์ฒซ๋ฒ์งธ ReusableCard ์์ ฏ์ ์คํ์ผ๋ง์ ์ค๋ณด์.

```dart
...

      child: ReusableCard(
        colour: activeCardColour,
        cardChild: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Icon(
              FontAwesomeIcons.mars,
              size: 80.0,
            ),
            SizedBox(
              height: 15.0,
            ),
            Text(
              'MALE',
              style: TextStyle(
                fontSize: 18.0,
                color: Color(
                  0xFF8D8E98,
                ),
              ),
            ),

...
```

์๋ฎฌ๋ ์ดํฐ๋ฅผ ์ฌ์คํํ๋ฉด 

<img width="376" alt="แแณแแณแแตแซแแฃแบ 2020-02-26 แแฉแแฎ 3 54 39" src="https://user-images.githubusercontent.com/55340876/75319586-50203d80-58b0-11ea-953d-bac8abfc97a5.png">

์๋ก์ฝ๋กฌ ๋ํ๋๋ค.  
์ด์  ์ค๋ฅธ์ชฝ๋ ๋์ผํ ์์ด์ฝ ์ปจํ์ธ  ์์ ฏ์ผ๋ก ๋ง๋ค์ด์ค์ผํ๋,  
์๋จ์์ ๋ฐฐ์ ๋ฏ ์์ ฏ์ ์ถ์ถํด์ ์ฌ์ฌ์ฉ ํ๋๋ก ๋ง๋ค์.

์ถ์ถํ  ๋ ๋์ค๋ ๊ธฐ๋ณธ ์์ฑ์๋ฅผ ์ ๊ฑฐํด์ฃผ๊ณ   
์ฌ์ฌ์ฉํ  ์์ด์ฝ๊ณผ ํ์คํธ ๋ถ๋ถ์ final ํค์๋๋ฅผ ์ด์ฉํด ์์ฑ์ผ๋ก ๋ฃ์ด์ค๋ค.  
``final ๋ฐ์ดํฐํ์ ์์ฑ๋ช;``  
์๋ก ์์ผ๋ก 2๊ฐ์ง ์์ฑ์ ์ ์ํด์ฃผ๊ณ ,  
์ ์์ฑ๋ค์ ์์ฑ์๋ฅผ ํตํด ์ด๊ธฐํ๋ฅผ ์์ผ์ค๋ค.  

```dart
...

class IconContent extends StatelessWidget { //์ถ์ถํ ์์ ฏ
  IconContent({this.icon, this.label}); //์์ฑ์ ์ด๊ธฐํ

  final IconData icon; //์์ฑ ์ ์
  final String label; //์์ฑ ์ ์
  
...
```

์ด ํ์  
๋ฉ์ธ ๋น๋ ๋ฉ์๋์์ ์ ์ํ ์์ฑ๋ค(์์ด์ฝ, ํ์คํธ)์ด ์ด๋๋ก ๊ฐ์ง ์ง์ ํด์ค๋ค.  

```dart
...

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        Icon(
          icon, //์๋
          size: 80.0,
        ),
        SizedBox(
          height: 15.0,
        ),
        Text(
          label, //์๋
          style: TextStyle(
            fontSize: 18.0,
            color: Color(
              0xFF8D8E98,
            ),
          ),
        ),
      ],
    );
  }
}

...
```

์ฌ๊ธฐ์ ๋์ด๋๊ณ ?  

<img width="376" alt="แแณแแณแแตแซแแฃแบ 2020-02-26 แแฉแแฎ 4 12 04" src="https://user-images.githubusercontent.com/55340876/75320758-bf972c80-58b2-11ea-9df7-d7107ff1abdf.png">

ํ์ฌ๋ ์ฌ์ฉํ๋ ๊ณณ์์ ๋๊ฒจ์ค ์ธ์๊ฐ์ด ์์ผ๋ ์๋ฌ๊ฐ ๋ฌ๋ค.  

```dart
...

      Expanded(
        child: ReusableCard(
          colour: activeCardColour,
          cardChild: IconContent( //์ธ์๊ฐ์ ์ค์ผ์ง?!
            icon: FontAwesomeIcons.mars,
            label: 'MALE',
          ),
        ),
      ),
      Expanded(
        child: ReusableCard(
          colour: activeCardColour,
          cardChild: IconContent( //์ธ์๊ฐ์ ์ค์ผ์ง?!
            icon: FontAwesomeIcons.venus,
            label: 'FEMALE',
          ),

...
```


<img width="376" alt="แแณแแณแแตแซแแฃแบ 2020-02-26 แแฉแแฎ 4 15 50" src="https://user-images.githubusercontent.com/55340876/75321022-451adc80-58b3-11ea-857e-9523c22c00df.png">

baaaaaam!!


์ถ์ถ๋ ์์ ฏ ๋ฉ์๋๋์ ์ฝ๋๊ฐ ์์ฒญ ๊ธธ์ด์ก๋ค.  
๊ธฐ๋ฅ๋ณ๋ก ์ฝ๋๋ฅผ ๊ฐ ํ์ผ์ ๋ถ๋ฆฌํด์ฃผ์


reusable_card.dart

```dart
import 'package:flutter/material.dart';

class ReusableCard extends StatelessWidget {
  ReusableCard({@required this.colour, this.cardChild});

  final Color colour;
  final Widget cardChild;

  @override
  Widget build(BuildContext context) {
    return Container(
      child: cardChild,
      margin: EdgeInsets.all(15.0), //์ฌ๋ฐฉ ์ฌ๋ฐฑ
      decoration: BoxDecoration(
        color: colour, //์ปจํ์ด๋ ์์
        borderRadius: BorderRadius.circular(10.0), //์ปจํ์ด๋ ํ๋๋ฆฌ
      ),
    );
  }
}
```

icon_content.dart

```dart
import 'package:flutter/material.dart';

class IconContent extends StatelessWidget {
  IconContent({this.icon, this.label});

  final IconData icon;
  final String label;

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        Icon(
          icon,
          size: 80.0,
        ),
        SizedBox(
          height: 15.0,
        ),
        Text(
          label,
          style: TextStyle(
            fontSize: 18.0,
            color: Color(
              0xFF8D8E98,
            ),
          ),
        ),
      ],
    );
  }
}
```

์ต์๋จ์๋ ํญ์ ``import 'package:flutter/material.dart';``  
๋จธํฐ๋ฆฌ์ผ ํจํค์ง๋ฅผ ๋ถ๋ฅด๋๊ฑธ ์์ง๋ง์.  

icon_content.dart ์ ์ฝ๋๋ฅผ ๋ณด๋ฉด  
ํ๋์ฝ๋ฉํ ๊ฒ์ด ๋ง๋ค.  
์์ด์ฝ ํฌ๊ธฐ, sizedBox ํ์คํธ ์คํ์ผ ๋ฑ..  
์ด์ ๋ ์ด๋ฐ ๋ถํ๋ค์ ๊บผ๋ด์ ์๋จ์ ์์๋ก ๋ง๋๋ ๊ฒ์ด ํฉ๋ฆฌ์ ์ด๋ค.  

ํ์คํธ์คํ์ผ ๋ถ๋ถ์ ์์๋ก ๋๋ด์.  

```dart
...

const labelTextStyle = TextStyle( //์์๋ก~
  fontSize: 18.0,
  color: Color(
    0xFF8D8E98,
  ),
);

...

        Text(label, style: labelTextStyle), //์๋

...
```

๋ง์ง๋ง์ผ๋ก input_page.dart ์์  
๋ถ๋ฆฌํ ์ฝ๋ ํ์ผ๋ค์ import ํด์ฃผ๋ฉด ๋๋ค.

input_page.dart

```dart
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'icon_content.dart';
import 'reusable_card.dart';

...
```

์ด์  ๋ชจ๋  ๊ฒ์ ๋ณ๋์ ํ์ผ๋ก ๋ฆฌํฉํ ๋งํ๋ ๊ฒ์ ์ต๊ดํํ๊ณ ,   
์ด๊ฑธ ํตํด ๊ฐ ์์์ ํจ์ฌ ์ฝ๊ฒ ์ํ ํ  ์ ์๋ค.  

๋ด๊ฐ ๋ง๋  ์์ ฏ (์ฌ์ฉ์ ์ ์ ์์ ฏ) ์ผ๋ก ํ๋ก์ ํธ ์ ์ฒด์์ ์ฌ์ฌ์ฉํ  ์ ์๋ ๊ฒ์ด๋ค!

# GestureDetector ์์ ฏ

์ด์  ์์ด์ฝ ์นด๋๋ฅผ ํด๋ฆญํ๋ฉด ์์์ด ๋ณํ๋ ๊ฒ์ ํด๋ณด์.

์๋จ์ ์๋ ์ฒซ๋ฒ์งธ ReusableCard ์์ ฏ์ ์ปค์๋ฅผ ๋๊ณ    
์๋์ ๊ฐ์ธ๋ FlatButton ์์ ฏ์ ๋ง๋ค์ด์ค๋ค.  


```dart
...

    Expanded(
      child: FlatButton( //ReusableCard๋ฅผ ๊ฐ์ธ๋ ์๋ก์ด ๋ฒํผ์์ ฏ
        onPressed: () {}, //๋จ
        child: ReusableCard(

...
```

๊ฐ์ฅ ๊ธฐ๋ณธ์ ์ธ ``onPressed: () {},`` ๋ฅผ ์ฃผ๋ฉด  

<img width="376" alt="แแณแแณแแตแซแแฃแบ 2020-02-26 แแฉแแฎ 4 42 44" src="https://user-images.githubusercontent.com/55340876/75322877-05ee8a80-58b7-11ea-9ec2-8a8c3a8ad0b4.png">


๋ชจ์์ด ์ด๋ฐ์์ผ๋ก ๋งด๋๋ก ๋ฐ๋๋ค.  
ํ๋ซ ๋ฒํผ์ ๋จธํฐ๋ฆฌ์ผ ํ๋ซ ๋ฒํผ์ ์คํ์ผ์ ๊ตฌํํ๋ คํ๋ ์์ฑ๋ค์ด ์๋ค.  
๋ค์ํ ์์, ๋ค์ํ ํ๋ง, ๋ชจ์๋ค์ด ์๋๋ฐ   
๋๋ ์ง๊ธ ๋ด ์นด๋์ ๋ชจ์์ ์ ์งํ๊ณ  ์ถ๋ค.  
๊ทธ๋ ๋ค๋ฉด ๋ญ ์จ์ผํ ๊น?

ํ๋ซ ๋ฒํผ ๋์   
``GestureDetector ์์ ฏ`` ์ ์ฌ์ฉํ๋ค!  
๋ง ๊ทธ๋๋ก ์ ์ค์ฒ๋ฅผ ๊ฐ์งํ๋ ์์ ฏ.  
์ด ์์ ฏ์ ์์ ์์ ฏ์ ์ด๋ค ์คํ์ผ์ด๋ ๋ชจ์, ์ ๋๋ฉ์ด์์ ๊ฐ์ํ๋ ค ์๋ํ์ง ์๋๋ค.  
์ฌ์ฉ์๊ฐ ์์ ฏ๊ณผ ์ํธ์์ฉํ  ๋ ์ด๋ฅผ ๊ฐ์งํ๋ ๋ฒ ๋ฆฌ์ํจ์ดํ ๋ฐฉ๋ฒ์ด๋ค.  

๋ฐ๋ผ์ FlatButton ์์ ฏ ๋ง๊ณ ,  
GestureDetector ์์ ฏ์ด ReusableCard ์์ ฏ์ ๋ถ๋ชจ๊ฐ ๋๋ฉด  

```dart
...

      child: GestureDetector( //๋ถ๋ชจ
        onTap: () {}, //ํ๋ซ๋ฒํผ์ onPressed ์ ๋์ผํ ์ญํ 
        child: ReusableCard(

...
```

<img width="376" alt="แแณแแณแแตแซแแฃแบ 2020-02-26 แแฉแแฎ 4 59 18" src="https://user-images.githubusercontent.com/55340876/75323990-5666e780-58b9-11ea-81da-12dabc502363.png">

์คํ์ผ์ ๊ทธ๋๋ก๋ค!  
์ด๋, GestureDetector ์์ ฏ์ onPressed ์์ฑ์ ์ฃผ์ง ๋ชปํ๋  
๋์ผํ ์ญํ ์ ํ๋ onTap๊ณผ ์ต๋ช ์ฝ๋ฐฑ์ ์ถ๊ฐ๋ก ๋งฅ์ฌ์ค๋ค.  
``print('๋จ์ ์นด๋๋ฅผ ๋๋ ์ต๋๋ค');`` ๋ฅผ ์ถ๊ฐํด ์ฝ์์ ์ฐํ๋์ง ํ์ธํด์ค๋ค.

์ด์   ํด๋ฆญ ํ์ ๋ ๋ฐฐ๊ฒฝ์์ด ๋ณํ๋ ํจ๊ณผ๋ฅผ ์ฃผ์.

์ผ๋จ ์นด๋์ ๊ธฐ์กด ๋ฐฐ๊ฒฝ์๋ณด๋ค ์ด๋์ด ์์์ ์์๋ก ์ ์ธํด์ฃผ๊ณ  

```dart
...

const inactiveCardColour = Color(0xFF111328); //์์์ ์ธ
const bottomContainerColour = Color(0xFFEB1555);

...
```

State ์์ ฏ์ผ๋ก ์ด๋ํด ์์ฑ์ ๋ณ๊ฒฝํด๋ณด์.  

์ด ๊ฒฝ์ฐ์๋ ์์์ด ๋ณ๊ฒฝ๋  ์ผ์ด ์์ผ๋(๋ณ๊ฒฝ๋  ์ ์๋ ๋ณ์), final์ ์ ์ธํ์ง ์์๋ ๋๋ค.  

```dart
...

class _InputPageState extends State<InputPage> {
  Color maleCardColor = inactiveCardColour; //์ด๊ธฐ ์ปฌ๋ฌ๊ฐ
  Color femaleCardColor = inactiveCardColour; //์ด๊ธฐ ์ปฌ๋ฌ๊ฐ

...
```

์ด๊ฒ๋ค์ ๋จ์ฌ ์นด๋์ ์ด๊ธฐ ์ปฌ๋ฌ๊ฐ์ด ๋๋ค.  

<img width="376" alt="แแณแแณแแตแซแแฃแบ 2020-02-26 แแฉแแฎ 6 22 52" src="https://user-images.githubusercontent.com/55340876/75330817-02620000-58c5-11ea-9c27-4a9fd867aaed.png">

์ด์  ๋๋ ์ ๋ ๊ฒฝ์ฐ๋ฅผ if๋ฌธ์ผ๋ก ๊ตฌํํด์ค๋ค.

```dart
...

  Color femaleCardColor = inactiveCardColour;

  //1 = male, 2 = female
  void updateColour(int gender) {
    //๋จ์ ์นด๋๋ฅผ ๋๋ ์ ๋,
    if (gender == 1) {
      if (maleCardColor == inactiveCardColour) {
        maleCardColor = activeCardColour;
      } else {
        maleCardColor = inactiveCardColour;
      }
    }
  }

...
```

์ด๋ค ์ฑ๋ณ์ ํด๋ฆญํ๋์ง ์๋ ค์ฃผ๋ ์๋ ฅ์ ๋ฐ๊ณ  ``(int gender)``  
๋จ์ ์นด๋๋ฅผ ๋๋ ์๋ ๊ทธ ์ปฌ๋ฌ๊ฐ ๊ธฐ์ด ์ปฌ๋ฌ์ธ ๋นํ์ฑํ ์ปฌ๋ฌ๋ฉด ํ์ฑํ ์ปฌ๋ฌ๋ก ๋ฐ๊พธ๊ณ ,  
๊ทธ๊ฒ ์๋๋ฉด ๋ค์ ๊ธฐ์ด ์ปฌ๋ฌ๊ฐ์ผ๋ก ๋ฐ๊พธ๋ผ.  

๊ทธ๋ฆฌ๊ณ  onTap ์์ ์ํ ์๋ฐ์ดํธ๋ฅผ ์ํด setState ์์ ๋ฃ์ด์ค๋ค. 

```dart
...

      child: GestureDetector(
        onTap: () {
          setState(() {
            updateColour(1);
          });
        },

...
```

<img width="376" alt="" src="https://user-images.githubusercontent.com/55340876/75332268-72718580-58c7-11ea-8dd7-586d768dc087.gif">

์ด๊ธฐ ์ธํ์ ์ด๋์ด ๋ฐฐ๊ฒฝ์์ด๊ณ  ํฐ์น๋ฅผ ๊ฐ์งํ๋ฉด ์์์ด ์๋ฐ์ดํธ ๋๋ค.  
๋จ์ ์นด๋๋ฅผ ํด๋ฆญํ์๋ ํ์ฑํ ์ปฌ๋ฌ, ๋ค์ ํด๋ฆญํ๋ฉด ๋นํ์ฑํ ์ปฌ๋ฌ๋ก ๋ฐ๋๋๊ฑธ ๋ณผ ์ ์๋ค.  

๋์ผ ๋ฐฉ๋ฒ์ผ๋ก ์ฌ์ ์นด๋๋ ์๋ฐ์ดํธ ํด์ฃผ์.  

```dart
...

  //1 = male, 2 = female
  void updateColour(int gender) {
    //๋จ์ ์นด๋๋ฅผ ๋๋ ์ ๋,
    if (gender == 1) {
      if (maleCardColor == inactiveCardColour) {
        maleCardColor = activeCardColour;
      } else {
        maleCardColor = inactiveCardColour;
      }
    }
    //์ฌ์ ์นด๋๋ฅผ ๋๋ ์ ๋,
    if (gender == 2) {
      if (femaleCardColor == inactiveCardColour) {
        femaleCardColor = activeCardColour;
      } else {
        femaleCardColor = inactiveCardColour;
      }
    }
  }

...

        child: GestureDetector(
          onTap: () {
            setState(() {
              updateColour(2);
            });
          },
          child: ReusableCard(
            colour: femaleCardColor,

...
```

์ฌ๊ธฐ์ ๋ฌธ์ ์ ์ ๋จ์๋ฅผ ํด๋ฆญํ๋ฉด ์ฌ์๊ฐ ๋นํ์ฑํ,  
์ฌ์๋ฅผ ํด๋ฆญํ๋ฉด ๋จ์๊ฐ ๋นํ์ฑํ ๋์ผํ๋๋ฐ ์ง๊ธ์ ๊ทธ๋ฐ ์ ์ด๊ฐ ์๋ ์ํฉ์ด๋ค.  

์ด๊ฑด ์์ฃผ ์ฝ๋ค!  
๋จ์ ์นด๋๋ฅผ ํด๋ฆญํ์ ๋  
ํ์ฑํ ์์ ํด๊ณผ ๋์์ ์ฌ์ ์นด๋๋ฅผ ๋นํ์ฑํ ์ํค๋ ์กฐ๊ฑด๋ ๊ฑธ์ด์ฃผ๋ฉด ๋๋ค.  
์ฌ์ ์นด๋๋ฅผ ํด๋ฆญํ ๊ฒฝ์ฐ์ ๊ทธ ๋ฐ๋๊ฒ ์ง?  

```dart
...

  //1 = male, 2 = female
  void updateColour(int gender) {
    //๋จ์ ์นด๋๋ฅผ ๋๋ ์ ๋,
    if (gender == 1) {
      if (maleCardColor == inactiveCardColour) {
        maleCardColor = activeCardColour;
        femaleCardColor = inactiveCardColour;
      } else {
        maleCardColor = inactiveCardColour;
        femaleCardColor = activeCardColour;
      }
    }
    //์ฌ์ ์นด๋๋ฅผ ๋๋ ์ ๋,
    if (gender == 2) {
      if (femaleCardColor == inactiveCardColour) {
        femaleCardColor = activeCardColour;
        maleCardColor = inactiveCardColour;
      } else {
        femaleCardColor = inactiveCardColour;
        maleCardColor = activeCardColour;
      }
    }
  }
...
```

<img width="376" alt="" src="https://user-images.githubusercontent.com/55340876/75333248-2293be00-58c9-11ea-8470-d3692d8464b6.gif"> 

ํ ์ฐ!  
๊ทธ์น๋ง ์ฝ๋๊ฐ ๋๋ฌด ๊ฐ๋์ฑ์ด ๋จ์ด์ง๋ค.  
๋จ์๋ 1 ์ฌ์๋ 2.. ์ง๊ด์ ์ด์ง ๋ชปํ๋ค. 

# Dart - Enums 

```dart
enum EnumName {typeA, typeB, typeC}

EnumName.typeA
```

```dart
void main() {

  //new BMW
  Cart myCar = Car(carStyle: CarType.BMW);

}

class Car {
  //1 = hatchback, 2 = BMW...
  CarType carStyle;
  
  Car({this.carStyle});
}

enum CarType {
  cooper,
  BMW,
  SUV,
  hatchback,
  coupe,
  
}
```

ํ๋ก์ ํธ์ ๋์ํด๋ณด์.  
(ํด๋์ค ๋ด๋ถ์๋ ๋ง๋ค ์ ์์)

```dart
...

const bottomContainerColour = Color(0xFFEB1555);

enum Gender { //enum
  male,
  female,
}

...

  //1 = male, 2 = female
  void updateColour(Gender selectedGender) {
    //๋จ์ ์นด๋๋ฅผ ๋๋ ์ ๋,
    if (selectedGender == Gender.male) {

...

    //์ฌ์ ์นด๋๋ฅผ ๋๋ ์ ๋,
    if (selectedGender == Gender.female) {

...

              setState(() {
                updateColour(Gender.male);
              });
            },

...

              setState(() {
                updateColour(Gender.female);
              });
            },

...
```


enum ์ ์์ฑ์ ๋ํด 2๊ฐ ์ด์์ ์ต์์ด ์์๋ ์ ์ฉํ๋ค.  
updateColour ๋ฉ์๋๋ฅผ ์ฌ์ฉํด ์ฑ๋ณ์ด ๋จ์์ธ์ง ์ฌ์์ธ์ง ํ์ธํ๋ค.

# Dart - 3ํญ ์ฐ์ฐ์

```dart
if (Condition is ture) { DoThisIfTrue } 
        else { DoThisIfFalse }
```

```dart
void main() {
  
  bool JinJooIsAwesome = true;
  
  if (JinJooIsAwesome == true) {
    print('๋ง์!');
  } else {
    print('์๋๋ฐ?!');
  }
}
```

```dart
//console ๊ฒฐ๊ณผ๋??
๋ง์!
```

if ๋ฌธ์ ๊ดํธ๊ฐ ๋ง๊ณ  ํค์๋๊ฐ ๋ง๋ค.  

```dart
Condition ? DoThisIfTrue : DoThisIfFalse
```



```dart
void main() {
  
  bool JinJooIsAwesome = true;

  JinJooIsAwesome == true ? print('๋ง์!') : print('์๋๋ฐ?!');

}
```

```dart
//console ๊ฒฐ๊ณผ๋??
๋ง์!
```

3ํญ ์ฐ์ฐ์๋ ๊ทธ๊ฒ์ ํ์ค๋ก ๋จ์ํ ํด์ค๋ค.

```dart
void main() {
  
  int myAge = 29;
  
  bool canBuyAlcohol = myAge > 21 ? true : false;
  print(canBuyAlcohol);

}
```

```dart
//console ๊ฒฐ๊ณผ๋??
true
```

๋ค์ ์ฝ๋๋ฅผ ์์ ํ์!  

์ฌ์ง๊ป ์์ฑํ๋ if ๋ฌธ ๋ถ๋ถ๊ณผ ๋จ์ฌ Color 2๊ฐ๋ฅผ ๋ค ์ฃผ์์ฒ๋ฆฌ๋ ์ญ์ ๋ฅผ ํด์ฃผ๊ณ ,  

```dart
...

class _InputPageState extends State<InputPage> {
  Gender selectedGender; //๋ณ์์ ์ธ

...

        setState(() {
          selectedGender = Gender.male; //๋ญ ํด๋ฆญํ๋์ง ๋ณ์ ์ ์ธ
        });
      },
      child: ReusableCard(
        colour: selectedGender == Gender.male
            ? activeCardColour
            : inactiveCardColour,

  ...

        setState(() {
          selectedGender = Gender.female; //๋ญ ํด๋ฆญํ๋์ง ๋ณ์ ์ ์ธ
        });
      },
      child: ReusableCard(
        colour: selectedGender == Gender.female
            ? activeCardColour
            : inactiveCardColour,

...
```

์๋จ์ ๋ด๊ฐ ์ ํํ  ์ฑ๋ณ์ ๋ณ์๋ก ํ๋ ์ ์ธํด์ฃผ๊ณ   
setState ๋ด๋ถ์ ๋ด๊ฐ ์ด๋ค ์ฑ๋ณ ์นด๋๋ฅผ ํด๋ฆญํ๋์ง๋ฅผ ๊ฐ๋ฅดํค๋ ๋ณ์๋ฅผ ์ ์ธํ๋ค.  
colour ์๋ selectedGender ๊ฐ Gender.์ฑ๋ณ๊ณผ ๊ฐ์์ง ํ์ธํ๊ณ   
true ๋ฉด ReusableCard ๋ ํ์ฑํ ์ปฌ๋ฌ๋ก ๋ฐ๋์ด์ผํ๋ฉฐ,  
false ๋ผ๋ฉด ๋นํ์ฑํ ์ปฌ๋ฌ์ฌ์ผํ๋ค. 

์ฑ์ ์ฒ์ ์์ํ๋ฉด ๋น์ฐํ ์ ํ ๋ ๊ฒ์ด ์๋ฌด๊ฒ๋ ์๊ธฐ์  
``Gender selectedGender;`` ๋ null์ด ๋๊ณ   
์กฐ๊ฑด์ ์์ฐ์ค๋  false ๊ฐ ๋์ด ๋นํ์ฑํ ์ปฌ๋ฌ์์๋ถํฐ ์์ํ๋ค.  
๊ทธ๋ฆฌ๊ณ  ์ฐ๋ฆฌ๊ฐ ์ฑ๋ณ ์นด๋ ์ค ํ๋๋ฅผ ์ ํํ๋ฉด,  
3ํญ ์ฐ์ฐ์์ ๋ฐ๋ผ์ ์ปฌ๋ฌ๊ฐ ํ์ฑํ ๋๋ ๊ฒ์ด๋ค.
๋ฐ๋ ์นด๋๋ฅผ ์ ํํ๋ฉด ๋น์ฐํ ํด๋น ์นด๋๋ ๋นํ์ฑํ ๋๋ค.


```dart
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'icon_content.dart';
import 'reusable_card.dart';

const bottomContainerHeight = 80.0;
const activeCardColour = Color(0xFF1D1E33);
const inactiveCardColour = Color(0xFF111328); 
const bottomContainerColour = Color(0xFFEB1555);

enum Gender {
  male,
  female,
}

class InputPage extends StatefulWidget {
  @override
  _InputPageState createState() => _InputPageState();
}

class _InputPageState extends State<InputPage> {
  Gender selectedGender; //๋ณ์์ ์ธ

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('BMI CALCULATOR'),
      ),
      body: Column(
        children: <Widget>[
          Expanded(
            child: Row(
              children: <Widget>[
                Expanded(
                  child: GestureDetector(
                    onTap: () {
                      setState(() {
                        selectedGender = Gender.male; 
                      });
                    },
                    child: ReusableCard(
                      colour: selectedGender == Gender.male
                          ? activeCardColour
                          : inactiveCardColour, //3ํญ ์ฐ์ฐ์
                      cardChild: IconContent(
                        icon: FontAwesomeIcons.mars,
                        label: 'MALE',
                      ),
                    ),
                  ),
                ),
                Expanded(
                  child: GestureDetector(
                    onTap: () {
                      setState(() {
                        selectedGender = Gender.female; 
                      });
                    },
                    child: ReusableCard(
                      colour: selectedGender == Gender.female
                          ? activeCardColour
                          : inactiveCardColour, //3ํญ ์ฐ์ฐ์
                      cardChild: IconContent(
                        icon: FontAwesomeIcons.venus,
                        label: 'FEMALE',
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
          Expanded(
            child: ReusableCard(
              colour: activeCardColour,
            ),
          ),
          Expanded(
            child: Row(
              children: <Widget>[
                Expanded(
                  child: ReusableCard(
                    colour: activeCardColour,
                  ),
                ),
                Expanded(
                  child: ReusableCard(
                    colour: activeCardColour,
                  ),
                ),
              ],
            ),
          ),
          Container(
            color: bottomContainerColour,
            margin: EdgeInsets.only(top: 10.0),
            width: double.infinity,
            height: bottomContainerHeight,
          ),
        ],
      ),
    );
  }
}
```

์ฝ๋๊ฐ ๋ณด๊ธฐ์ข์์ก๋ค!





# Dart - 1๊ธ ๊ฐ์ฒด

Dart์์ ํจ์๋ ์ผ๊ธ ํด๋์ค ๊ฐ์ฒด๋ก, ํจ์๋ฅผ ๋ค๋ฅธ ํจ์์ ํ๋ผ๋ฏธํฐ๋ก ์ ๋ฌํ  ์ ์๋ค.  

```dart
void main() {
  
  int result = add(3, 5);
  print(result);

}

int add(int n1, int n2) {
  return n1 + n2;
}

int multiply(int n1, int n2) {
  return n1 * n2;
}
```

```dart
//console ๊ฒฐ๊ณผ๋??
8
```

๋๊ฐ์ ์ ์๋ฅผ ์ธ์๋ก ๋ฐ๊ณ ,  
๋ํ๊ธฐ์ ๊ณฑ์์ ํด์ฃผ๋ ํจ์๋ฅผ ๋ง๋ค์๋ค.  
ํธ์ถ ํ ๋๋ ์ ๋ฐ์์ผ๋ก add, multiply ๋ฐ๋ก๋ฐ๋ก ํด์ค์ผ ๊ฐ์ด ๋์ค๋๋ฐ  
๋ง์ฝ ๊ณ์ฐ๊ธฐ์ฒ๋ผ ๋ฒํผ์ ๋๋ฅด๋ฉด ๊ฐ์ด ๋์ค๋ ๊ฒ์ฒ๋ผ ๋ง๋ค๊ณ  ์ถ๋ค๋ฉด?  

```dart
void main() {
  
  int result = calculator(5, 8, add);
  print(result);

}

int calculator(int n1, int n2, Function calculation) {
  return calculation(n1, n2);
}

int add(int n1, int n2) {
  return n1 + n2;
}

int multiply(int n1, int n2) {
  return n1 * n2;
}
```

```dart
//console ๊ฒฐ๊ณผ๋??
13
```

``int result = calculator(5, 8, add);`` ์ด ๋ถ๋ถ์,  
``int result = calculator(5, 8, multiply);`` ์๋ก์ฝ๋กฌ  

**multiply** ๋ก ๋ฐ๊ฟ์ฃผ๊ธฐ๋ง ํ๋ฉด ๊ฒฐ๊ณผ๋ ``40``์ด ๋์จ๋ค.

ํจ์๋ ๋ค๋ฅธ ์ ์ 2๊ฐ์ธ ์ธ์๊ฐ๊ณผ ๋ง์ฐฌ๊ฐ์ง๋ก ๋๊ฐ์ด ์ ๋ฌ๋๋ค.  

ํจ์๋ก ํ  ์ ์๋ ๋ค๋ฅธ ๊ฒ์  
ํจ์๋ฅผ ๋ณ์์ ๊ฐ์ผ๋ก ํ ๋นํ  ์๋ ์๋ค๋ ๊ฒ์ด๋ค.  

```dart
void main() {
  
  int result = calculator(5, 8, multiply);
  print(result);

}

Function calculator = (int n1, int n2, Function calculation) { //๋ณ์์ ํ ๋น
  return calculation(n1, n2);
}; //์ธ๋ฏธ์ฝ๋ก  ํ์

int add(int n1, int n2) {
  return n1 + n2;
}

int multiply(int n1, int n2) {
  return n1 * n2;
}
```

์ด๋ฐ์์ผ๋ก ํด๋ ๊ฐ์ ๋์ผํ๊ฒ **40** ์ด ์ฐํ๋ค.  
``final Function calculator = (int n1, int n2, Function calculation) {``  
์ํ๋ค๋ฉด ์์ final์ ๋ถ์ฌ์ค๋ ๋๋ค.  
์ด ๊ฒฝ์ฐ์๋ ๋์ด์ ํ ๋น ๊ฐ์ ๋ณ๊ฒฝํ  ์ ์๊ฒ ๋๊ณ   

<img width="1167" alt="แแณแแณแแตแซแแฃแบ 2020-02-27 แแฉแแฅแซ 2 02 53" src="https://user-images.githubusercontent.com/55340876/75368534-44ab3180-5905-11ea-92a5-055ef1e4e6e5.png">

๋ณ๊ฒฝ์ ํ๋ คํ๋ฉด ๋น๊ทผ ์๋ฌ๊ฐ ๋ฌ๋ค.  

```dart
void main() {
  
  Car myCar = Car(drive: slowDrive); //slowDrive๋ฅผ ๋ฐ๊ผฌ์ฌ๋ () ๊ดํธ๊ฐ ์๋๊ฒ์ ์ฃผ๋ชฉํด๋ผ.
  
  print(myCar.drive);
  
  myCar.drive();
  
  myCar.drive = fastDrive; //myCar ์์ฑ์ ๊ฐ์ ๋ณ๊ฒฝํ ๊ฑฐ๋ผ fastDrive ๋ค์ () ๊ดํธ๋ ์๋ค.
  
  myCar.drive(); //๋ฉ์๋๋ช() ๋ฅผ ๊ฐ์ด ํธ์ถํด์ ๊ธฐ๋ฅ์ ํธ๋ฆฌ๊ฑฐ ํ๋ค.
}

class Car {
  Function drive;
  
  Car({this.drive});
  
}

void slowDrive() {
  print('๋๋ฆฌ๊ฒ ์ด์ ');
}

void fastDrive() {
  print('๋น ๋ฅด๊ฒ ์ด์ ');
}
```

```dart
//console ๊ฒฐ๊ณผ๋??
Closure 'slowDrive'
๋๋ฆฌ๊ฒ ์ด์ 
๋น ๋ฅด๊ฒ ์ด์ 
```

๋ฐฐ์ด ๋ด์ฉ์ ์ฝ๋์ ์ ์ฉํด๋ณด์!  

์ถ๊ฐํ๋ 2๊ฐ์ GestureDetector ์์ ฏ์ ์ปค์๋ฅผ ๋๊ณ   
์ต์+์ํฐ(mac ๊ธฐ์ค) ๋ก Remove this widget ์ ํด์ ์ง์์ฃผ์.

reusable_card.dart
```dart
...

class ReusableCard extends StatelessWidget {
  ReusableCard({@required this.colour, this.cardChild, this.onPress}); //์ถ๊ฐ

  final Color colour;
  final Widget cardChild;
  final Function onPress; //ํจ์ ํ์์ผ๋ก ์ถ๊ฐ

  @override
  Widget build(BuildContext context) {
    return GestureDetector( //์ปจํ์ด๋ ์์ ฏ ๊ฐ์ธ๊ธฐ
      onTap: onPress, //์ถ๊ฐ
      child: Container(

...
```

์ต๋ช ํจ์๋ฅผ ์ถ๊ฐํ๊ณ  ์ต๋ช ํจ์ ์์ setState๋ฅผ ์ฃผ๊ณ   
๊ทธ ๋ด๋ถ์์ Gender.male ์ selectedGender ๋ก ํ ๋นํด์ค๋ค.  

input_page.dart

```dart
...

        Expanded(
          child: ReusableCard(
            onPress: () { //๋ฟ
              setState(() {
                selectedGender = Gender.male;
              });
            },
            colour: selectedGender == Gender.male
                ? activeCardColour
                : inactiveCardColour,
            cardChild: IconContent(
              icon: FontAwesomeIcons.mars,
              label: 'MALE',
            ),
          ),
        ),
        Expanded(
          child: ReusableCard(
            onPress: () { //๋ฟ
              setState(() {
                selectedGender = Gender.female;
              });
            },
            colour: selectedGender == Gender.female
                ? activeCardColour
                : inactiveCardColour,

...
```

์ฑ ์คํ ๊ฒฐ๊ณผ๋ ๋์ผํ๋ค!  

# Slider ์์ ฏ

์ผ๋จ ๋ชจ๋  ์์๋ค์ ํ๊ณณ์ ๋ชจ์์ฃผ์.

contants.dart

```dart
import 'package:flutter/material.dart';

const KBottomContainerHeight = 80.0;
const KActiveCardColour = Color(0xFF1D1E33);
const KInactiveCardColour = Color(0xFF111328);
const KBottomContainerColour = Color(0xFFEB1555);

const KLabelTextStyle = TextStyle(
  fontSize: 18.0,
  color: Color(
    0xFF8D8E98,
  ),
);
```
๊ทธ๋ฆฌ๊ณ  ๋ชจ๋  ์์๋ช์ ๋ช๋ช ๊ท์น์ ์ฌ์ฉํด์ ๋์ผํ๊ฒ rename ํด์ค๋ค. 
(์ค๋ฅธ๋ง์ฐ์ค ํด๋ฆญ refactor -> rename)  
์ด ๊ณผ์ ์์ ์์๋ฅผ ์ฌ์ฉํ๋ ๋ชจ๋  ๊ณณ์ ์ด๋ฆ์ด ๋ฐ๋๋ค.  
์์ k ๋ฅผ ๋ถ์์ผ๋ก ๋ชจ๋  ์์๋ฅผ ํ๋ฒ์ ์ฝ๊ฒ ๊ฒ์ํ  ์ ์๋ค.

์ด ๋ ๋น์ฐํ ์๋ผ์จ ํ์ผ๋ค์์๋ ์๋ค๋ฅผ ์ฌ์ฉํ  ์ ์๊ฒ

``import 'constants.dart';`` import ๊ตฌ๋ฌธ์ ์์ง๋ง์!  

input_page.dart

```dart
...

      title: Text('BMI CALCULATOR'),
    ),
    body: Column(
      crossAxisAlignment: CrossAxisAlignment.stretch, //๊ฐ๋ก ๊ธธ์ด ํ์ฅ

  ...

        Expanded(
          child: ReusableCard(
            colour: KActiveCardColour,
            cardChild: Column(
              children: <Widget>[
                Text(
                  'HEIGHT',
                  style: KLabelTextStyle, //์์ ๋งฅ์ธ๊ฑฐ ๊ฐ์ ธ์ด
                )

...
```

<img width="371" alt="แแณแแณแแตแซแแฃแบ 2020-02-27 แแฉแแฅแซ 2 45 12" src="https://user-images.githubusercontent.com/55340876/75372046-2fd19c80-590b-11ea-8367-30433cd43fee.png">

์ธ๋ฒ์งธ ์นด๋ ์์ ฏ๋ ์ผ๋ฅธ ๊ตฌ์ฑํด๋ณด์!! 
์ฐ๋ฆฌ๊ฐ ๋ง๋ค ์นด๋๋ค์ ๋์ผํ ๋ถ๋ถ๋ค์ const ๋ฅผ ํตํด์ ์์ ์ ์ธ์ ํด์ฃผ๊ณ ,  
constants ๋ผ๋ ํ์ผ์ ํ๋๋ก ๋ฌถ์ด์ค์ ๊ฐ๋ค ์ด๋ค๊ณ  ํ๋ค.  

<img width="371" alt="แแณแแณแแตแซแแฃแบ 2020-02-27 แแฉแแฅแซ 2 54 25" src="https://user-images.githubusercontent.com/55340876/75372844-783d8a00-590c-11ea-9059-5d49e3e58a7f.png">

(์์  ์ด๋ฏธ์ง๋ฅผ ๋ณด๋ฉด ์ซ์ ํ์คํธ ๋ถ๋ถ์ด ๋ค ๋์ผํ ์คํ์ผ์ ์ ์งํ๋๊ฑธ ๋ณผ ์ ์์)

์ฌ๊ธฐ์๋ ์ซ์๊ฐ ๋ค์ด๊ฐ๋ ํ์คํธ๋ค์ ๋ชจ๋  ์นด๋ ์์ ฏ ๋ถ๋ถ์ ๋์ผํ ์คํ์ผ์ ์๊ตฌํ๋ค.  
์์๋ก ์ ์ธํด์ ๊ทธ๊ฒ๋ค์ ์ฌ์ฌ์ฉ ์ฉ๊ฒ ๊ฐ๋ค์จ์ฃผ์! 

constants.dart
```dart
...

const KNumberTextStyle = TextStyle(
  fontSize: 50.0,
  fontWeight: FontWeight.w900,
);
```

input_page.dart
```dart
...

  Gender selectedGender;
  int height = 180; //๋ณ์ ์ ์ธ

...

    Text(
      'HEIGHT',
      style: KLabelTextStyle,
    ),
    Row(
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.baseline,
      textBaseline: TextBaseline.alphabetic,
      children: <Widget>[
        Text(
          height.toString(),
        //์ ์ธํด์ค height ๋ณ์๋ ๊ฐ์ผ๋ก int 180์ ๊ฐ์ง๊ธฐ์ ํ์คํธ ์์ ฏ์์๋ ๋ฌธ์์ด๋ก ๋ณํํด์ค์ผํจ.
          style: KNumberTextStyle,
        ),
        Text(
          'cm',
          style: KLabelTextStyle,
        ),

...
```


<img width="371" alt="แแณแแณแแตแซแแฃแบ 2020-02-27 แแฉแแฅแซ 3 06 07" src="https://user-images.githubusercontent.com/55340876/75373689-1a11a680-590e-11ea-9aba-212c435b6c89.png">



``crossAxisAlignment: CrossAxisAlignment.baseline,``

baseline์ ์ฐ๋ ค๋ฉด null ๊ฐ์ ์๋ฌ๊ฐ ๋จ๋, ๊ธฐ์ค์ ์ธ baseline ์ ํ์๋ก ์ง์ ํด์ค์ผ ํ๋ค.  
์  ๊ฒฝ์ฐ``textBaseline: TextBaseline.alphabetic,`` ๋ถ๋ถ์ด ์๋ค๋ฉด ์๋ฌ๊ฐ ๋๋ค.

```dart
...

            'cm',
            style: KLabelTextStyle,
          ),
        ],
      ),
      Slider(
        value: height.toDouble(), //ํ๋ณํ
        min: 120.0,
        max: 220.0,
        activeColor: Color(0xFFEB1555),
        inactiveColor: Color(0xFF8D8E98),
        onChanged: (double newValue) {
          setState(() {
            height = newValue
                .round(); //์ ์๋ก ๋ฐ์ฌ๋ฆผํ์ฌ ๊ฐ์ฅ ๊ฐ๊น์ด ์ ์๋ก ๋ฐ๊ฟ์ค (๋๋ธ ํ์์ด์์ผ๋๊น)
          });
        },
      )

...
```

์ฌ๋ผ์ด๋ ์์ ฏ์ ๊ธฐ๋ณธ์ ์ผ๋ก double ํ์์ ๊ฐ๊ณ ์๋ค.  
height ๋ ํ์ฌ ์๋จ์์ int ํ์ 180์ผ๋ก ์ ์ธ๋์ด์๋ค.  
value ๊ฐ์ ์ค์ ํ์์ผ๋ก ํ๋ณํ์ ํด์ฃผ๊ณ   
์ต์๊ฐ, ์ต๋๊ฐ, ์์, ํ์๊ฐ์ธ onChanged ์ง์ ์ ํด์ฃผ๋ฉด!   

![2020-02-27 03-31-29 2020-02-27 03_32_04](https://user-images.githubusercontent.com/55340876/75375603-c2753a00-5911-11ea-8328-be1398d74b3c.gif)


์ฌ๋ผ์ด๋๊ฐ ์ ๊ฐ์ ์ฝ๋ฐฑ์ ์ ๋ฌํ๊ณ   
๋ฐ๋ผ์ ํ ๊ธ์ ์์ง์ด๋ฉด ์๋ ฅ์ ํตํด ์๋ก์ด ๊ฐ์ ์ฝ๋ฐฑ์ ์ ๋ฌํ๋ค.  
``(double newValue)``  
๊ทธ๋ฆฌ๊ณ  setState ๋ด๋ถ์์ ์ํ๋ฅผ ์๋ฐ์ดํธ ํด์ค๋ค.  
``height = newValue.round();``

2% ๋ถ์กฑํ ์คํ์ผ์ ์ ์ํด๋ณด์.

```dart
...

    SliderTheme(
      data: SliderTheme.of(context).copyWith(
        //๊ธฐ๋ณธ์ฑ์ ํ๋ง ์ ๋ณด ๊ทธ๋๋ก ๊ฐ์ ธ์ค๊ธฐ
        inactiveTrackColor: Color(0xFF8D8E98),
        activeTrackColor: Colors.white,
        thumbColor: Color(0xFFEB1555), //๋๊ทธ๋ผ๋ฏธ ์์
        overlayColor: Color(0x29EB1555), //์ค๋ฒ๋ ์ด ์์ (16%๋ถํฌ๋ช)
        thumbShape: RoundSliderThumbShape(
            enabledThumbRadius: 15.0), //์ฌ๋ผ์ด๋ ๋๊ทธ๋ผ๋ฏธ ํฌ๊ธฐ
        overlayShape: RoundSliderOverlayShape(
            overlayRadius: 30.0), //์ค๋ฒ๋ ์ด ํฌ๊ธฐ
      ),
      child: Slider(
        value: height.toDouble(), //ํ๋ณํ
        min: 120.0,
        max: 220.0,
        onChanged: (double newValue) {
          setState(() {
            height = newValue
                .round(); //์ ์๋ก ๋ฐ์ฌ๋ฆผํ์ฌ ๊ฐ์ฅ ๊ฐ๊น์ด ์ ์๋ก ๋ฐ๊ฟ์ค (๋๋ธ ํ์์ด์์ผ๋๊น)
          });
        },
      ),

...
```

SliderTheme ์์ ฏ์ผ๋ก Slider๋ฅผ ๊ฐ์ธ์ฃผ๊ณ ,  
์ฌ๋ผ์ด๋์๊ฒ ์ฃผ์๋ ์ปฌ๋ฌ 2๊ฐ์ง๋ฅผ ํธ๋์ปฌ๋ฌ๋ก ๊ฐ์ ธ์ค๊ณ  ๋๋จธ์ง ์คํ์ผ์ ๋ค์ ์ปค์คํํด์ค๋ค.  

<img width="350" alt="" src="https://user-images.githubusercontent.com/55340876/75644202-d5c33500-5c84-11ea-9088-34c4b1377719.gif">

# ์ฒด์ค, ๋์ด ์นด๋

```dart
...

class _InputPageState extends State<InputPage> {
  Gender selectedGender;
  int height = 180;
  int weight = 60; //์ฒด์ค ๋ณ์ ์ ์ธ

...

        child: ReusableCard(
          colour: KActiveCardColour,
          cardChild: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Text(
                'WEIGHT',
                style: KLabelTextStyle,
              ),
              Text(
                weight.toString(),
                style: KNumberTextStyle,
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  FloatingActionButton(
                    backgroundColor: Color(0xFF4C4F5E),
                    child: Icon(
                      Icons.add,
                      color: Colors.white,
                    ),
                  ),
                  SizedBox(
                    width: 10.0,
                  ),
                  FloatingActionButton(
                    backgroundColor: Color(0xFF4C4F5E),
                    child: Icon(
                      Icons.add,
                      color: Colors.white,
                    ),
                  ),

...
```

``FloatingActionButton`` ๋ถ๋ถ์  
์ ๋ฐ์์ผ๋ก ์ฝ๋๋ฅผ ํด๋ ๋์ง๋ง ๋ฒํผ ์์ ฏ์ ์ง์  ๋ง๋ค์ด๋ณด์.

๋งจ ํ๋จ์ stl ํ๋๋ฅผ ๋ง๋ค์ด์ฃผ๊ณ , 

```dart
...

class RoundIconButton extends StatelessWidget {
  final IconData icon; //์์ฑ ์ง์ 

  RoundIconButton({this.icon}); //์์ฑ์๋ก ์ด๊ธฐํ

  @override
  Widget build(BuildContext context) {
    return RawMaterialButton(
      child: Icon(icon), // - ๋ฒํผ๊ณผ +๋ฒํผ 2๊ฐ๊ฐ ์์ผ๋ ์ด๊ฑด ์์ฑ์ ๋ฐ๋ก ๋บด์ค์ผํจ
      onPressed: () {},
      elevation: 6.0, //๊ทธ๋ฆผ์
      constraints: BoxConstraints.tightFor(
        //๋ฒํผํฌ๊ธฐ
        width: 56.0,
        height: 56.0,
      ),
      shape: CircleBorder(), //๋ฒํผ ๋ชจ์
      fillColor: Color(0xFF4C4F5E), //๋ฒํผ ์์
    );
  }
}
```

์ด๋ฐ์์ผ๋ก ์คํ์ผ์ ๋ด๊ฐ ์ง์  ์ ์ํด์ค๋ค  
์๋จ์ FAB ์์ ฏ์ ์ง์ฐ๊ณ  ๋ณ๊ฒฝํด์ค๋ค.

```dart
...

      Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          RoundIconButton(
            icon: FontAwesomeIcons.minus,
            //ํ๋จ์์ ์์ด์ฝ ์์ฑ์ผ๋ก ๋บ์ผ๋ ์์ด์ฝ๋ถ๋ถ๋ง ๋ฐ๊ฟ์ฃผ๋ฉด๋จ
          ),
          SizedBox(
            width: 10.0,
          ),
          RoundIconButton(
            icon: FontAwesomeIcons.plus,
            //ํ๋จ์์ ์์ด์ฝ ์์ฑ์ผ๋ก ๋บ์ผ๋ ์์ด์ฝ๋ถ๋ถ๋ง ๋ฐ๊ฟ์ฃผ๋ฉด๋จ
          ),
        ],

...
```

<img width="362" alt="แแณแแณแแตแซแแฃแบ 2020-03-02 แแฉแแฎ 6 45 04" src="https://user-images.githubusercontent.com/55340876/75664629-1d15e980-5cb6-11ea-93cb-3d52bb0d2dd4.png">

icon ์์ฑ ๋ถ๋ถ์ - ๋ฒํผ๊ณผ + ๋ฒํผ 2๋ฒ ์ฌ์ฉํ๋ ์์ฑ์ ๋ฐ๋ก ๋นผ์  
์ง์  ์ธ ๋ ์ ์ํด์ฃผ๋ฉด ๋๋ค!

๋ง์ฝ ``shape:`` ๋ถ๋ถ์ ์์ ํ์ฌ ๋ฒํผ ๋ชจ์์ ๋ค๋ฅด๊ฒ ํด์ฃผ๊ณ ์ถ๋ค๋ฉด?  

```dart
//      shape: CircleBorder(), //๋ฒํผ ๋ชจ์
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10.0)),
      fillColor: Color(0xFF4C4F5E), //๋ฒํผ ์์
```

<img width="362" alt="แแณแแณแแตแซแแฃแบ 2020-03-02 แแฉแแฎ 6 45 50" src="https://user-images.githubusercontent.com/55340876/75664636-1f784380-5cb6-11ea-85e6-fabe22c4dca7.png">

์๋ก์ฝ๋กฌ ์ปค์คํฐ๋ง์ด์ง์ด ๊ฐ๋ฅํ๋ค!

์ด์  ๋ฒํผ์ ํด๋ฆญํ์๋ ์ซ์๊ฐ ๋ด๋ ค๊ฐ๊ณ  ์ฌ๋ผ๊ฐ๋ ๊ฒ์ ๊ตฌํํ์.


```dart
...

class RoundIconButton extends StatelessWidget {
  final IconData icon; 
  final Function onPressed; //์์ฑ ์ง์ 

  RoundIconButton({@required this.icon, @required this.onPressed}); //๋๋ค ํ์ ํญ๋ชฉ์ผ๋ก!!

  @override
  Widget build(BuildContext context) {
    return RawMaterialButton(
      child: Icon(icon), 
      onPressed: onPressed, //์ ์ธ

...
```

๋ด๊ฐ ๋ง๋  ์์ ฏ์ด๋ฏ๋ก onPressed ์์ฑ์ด ์์ผ๋ ์ ๋ ๊ฒ ๋ง๋ค์ด์ค๋ค.   
์์ฑ์ ์ง์ ํ๊ณ ~  
์์ฑ์๋ก ์ด๊ธฐํํ๋ฉด์ icon, onPressed ๋ ํ์ ์ธ์๋ก ์ ํด์ค๋ค.  
๊ทธ๋ฆฌ๊ณ  onPressed ์์ฑ์ ์ ์๋ฅผ ๋ค์ ํด์ฃผ๊ณ ! (์ด ๊ฒฝ์ฐ ์ด๋ฆ์ ๊ทธ๋ฅ ๋๊ฐ์ด ํด์คฌ๋ค)

```dart
...

      Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          RoundIconButton(
            icon: FontAwesomeIcons.minus,
            onPressed: () { //๊ฐ ๋ฃ์ด์ฃผ๊ธฐ
              setState(() {
                weight--;
              });
            },
          ),
          SizedBox(
            width: 10.0,
          ),
          RoundIconButton(
            icon: FontAwesomeIcons.plus,
            onPressed: () { //๊ฐ ๋ฃ์ด์ฃผ๊ธฐ
              setState(() {
                weight++;
              });
            },
          ),
        ],

...
```

์ธ์๊ฐ์ผ๋ก ์๊น ์ ์ํ onPressed ์์ฑ์ ๋ฃ์ด์ฃผ๊ณ ,  
ํด๋ฆญ์๋ง๋ค ๋ฐ๋์ด์ผ ํ๋๊น setState ์์ ๊ฐ์ ์ ์ํด์ฃผ๋ฉด?  


<img width="350" alt="" src="https://user-images.githubusercontent.com/55340876/75665687-e7720000-5cb7-11ea-8e29-3781b657167a.gif">

์ข์์์์ใใด!!  
์์ ๋์ด ์นด๋๋ ๊ฐ์ ๋ฐฉ์์ผ๋ก ํด์ฃผ๋ฉด ๋๋ค!

```dart
...

  int weight = 60;
  int age = 20; //๊ธฐ๋ณธ๊ฐ

...

      child: ReusableCard(
        colour: KActiveCardColour,
        cardChild: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              'AGE',
              style: KLabelTextStyle,
            ),
            Text(
              age.toString(),
              style: KNumberTextStyle,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                RoundIconButton(
                  icon: FontAwesomeIcons.minus,
                  onPressed: () {
                    setState(() {
                      age--;
                    });
                  },
                ),
                SizedBox(
                  width: 10.0,
                ),
                RoundIconButton(
                  icon: FontAwesomeIcons.plus,
                  onPressed: () {
                    setState(() {
                      age++;
                    });
                  },

...
```


<img width="362" alt="แแณแแณแแตแซแแฃแบ 2020-03-02 แแฉแแฎ 7 06 34" src="https://user-images.githubusercontent.com/55340876/75666329-f2796000-5cb8-11ea-92f5-ddd7df469f79.png">

์๋ฃจ!

# Navigation (๊ฒฝ๋ก์ ํ์)

context ๋ ํน์  ์์ ฏ์ด ์ด๋์ ์๋์ง ์์๋ด๋ ๋ฐฉ๋ฒ์ผ๋ก,  
์ด๋์ ์๊ณ  ์ด๋๋ก ๊ฐ์ผํ๋์ง ํ์ํ  ๋ ๋์์ด ๋๋ค.


ํ์ด์ง๋ค์ **stack** ๊ตฌ์กฐ๋ก ์์ด๋๋ฐ  
**push()** ๋ ์๊ณ , **pop()** ์ ์ ๊ฑฐํ๋ค.  

๋ค์ํ์ด์ง๋ก ๊ฐ๊ธธ ์ํ๋ฉด,  
onpressed: () {} ๋ด๋ถ์
``Navigator.push(context, route)``    

์ด์ ํ์ด์ง๋ฅผ ์ํ๋ฉด,  
``Navigator.pop(context);``  

๋์ ํ์ฌ ์์น์ ๊ฐ์ผํ  ๊ฒฝ๋ก(์์น) ๋ผ๊ณ  ์๊ฐํ๋ฉด ํธํ๋ค.  

```dart
Navigator.push(context), MaterialPageRoute(builder: (context) => [์ด๋ํ์ด์ง]);
//๋ค์ ํ์ด์ง

Navigator.pop(context);
//์ด์  ํ์ด์ง
```

๋ณต์กํ ์ฌ๋ฌ ๊ฒฝ๋ก๋ก ๊ฐ์ผํ  ๋๋?  

```dart
initialRoute: '/',
routes: {
  '/': (context) => FirstScreen(),
  '/second': (context) => SecondScreen(),
}
```
์ด๋ฐ์์ผ๋ก ์ ์๋ฅผ ํด์ฃผ๋๋ฐ ์์ธํ ํ๋ณด์๋ฉด  


main.dart

```dart
import 'package:flutter/material.dart';
import 'screen1.dart';
import 'screen0.dart';
import 'screen2.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
//      home: Screen0(),
      //์ด๊ธฐ ๊ฒฝ๋ก์ธ initialRoute ์ ์ค๋ณต์ด๋ ์ถฉ๋๋๋ค. ์ด๊ฒฝ์ฐ home ์์ฑ์ ์ง์์ฃผ์.
      initialRoute: '/',
      routes: {
        '/': (context) => Screen0(),
        '/first': (context) => Screen1(),
        '/second': (context) => Screen2(),
      },
    );
  }
}
```

Screen0.dart

```dart
import 'package:flutter/material.dart';

class Screen0 extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.purple,
        title: Text('Screen 0'),
      ),
      body: Center(
        child: Column(
          children: <Widget>[
            RaisedButton(
              color: Colors.red,
              child: Text('Go To Screen 1'),
              onPressed: () {
                Navigator.pushNamed(context, '/first');
                //Navigate to Screen 1
              },
            ),
            RaisedButton(
              color: Colors.blue,
              child: Text('Go To Screen 2'),
              onPressed: () {
                Navigator.pushNamed(context, '/second');
                //Navigate to Screen 2
              },
            ),
          ],
        ),
      ),
    );
  }
}
```




Screen1.dart


```dart
import 'package:flutter/material.dart';
import 'screen2.dart';

class Screen1 extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.red,
        title: Text('Screen 1'),
      ),
      body: Center(
        child: RaisedButton(
          color: Colors.red,
          child: Text('Go Forwards To Screen 2'),
          onPressed: () {
            Navigator.push(
              context,
              MaterialPageRoute(
                builder: (context) => Screen2(),
              ),
            );
          },
        ),
      ),
    );
  }
}
```




Screen2.dart

```dart
import 'package:flutter/material.dart';

class Screen2 extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.blue,
        title: Text('Screen 2'),
      ),
      body: Center(
        child: RaisedButton(
          color: Colors.blue,
          child: Text('Go Back To Screen 1'),
          onPressed: () {
            Navigator.pop(context);
          },
        ),
      ),
    );
  }
}

```



<img width="340" alt="" src="https://user-images.githubusercontent.com/55340876/75685579-1dc27600-5cde-11ea-82d1-c8d30648f5ca.gif">

<br/>

---
---

<br/>
<br/>

ํ๋ก์ ํธ์ ๋์ํด๋ณด์.  
์ฒซ ํ์ด์ง์์ ์ฑ๋ณ, ํค, ๋ชธ๋ฌด๊ฒ, ๋์ด๋ฅผ ์ค์ ํ๋ฉด ๊ฐ์ ๋๋ฒ์งธ ํ์ด์ง์์ ์ถ๋ ฅ์ด ๋๋ค.  

results_page.dart ํ์ด์ง๋ฅผ ํ๋ ์์ฑํด์ฃผ๊ณ ,

```dart
import 'package:flutter/material.dart';

class ResultsPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('BMI CALCULATOR'),
      ),
      body: Text('HELLO'),
    );
  }
}
```

input_page.dart

```dart
...

import 'results_page.dart';

...

      GestureDetector(
        onTap: () {
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (context) => ResultsPage(),
            ),
          );
        },
        child: Container(
          child: Text('CALCULATOR'),
          color: KBottomContainerColour,
          margin: EdgeInsets.only(top: 10.0),
          width: double.infinity,
          height: KBottomContainerHeight,
        ),
      ),

...
```


pop() ์ ๋ฐ๋ก ์ค ํ์์์ด ํ์ด์ง๊ฐ 2๊ฐ ๋ฟ์ด๋ผ  
๊ธฐ์กด์ ์๋ ์ฑ๋ฐ์ ๋ค๋ก๊ฐ๊ธฐ ๊ธฐ๋ฅ์ ์จ๋จน๊ณ   
push() ๋ง ์ฃผ์๋ค.

<img width="340" alt="" src="https://user-images.githubusercontent.com/55340876/75694208-7ea47b00-5ceb-11ea-9ad0-f6f155a6c09b.gif">

๋๋จธ์ง ์คํ์ผ๋ ์ฃผ์.

constants.dart

```dart
...

const KLargeButtonTextStyle = TextStyle(
  fontSize: 25.0,
  fontWeight: FontWeight.bold,
);
```
์์๋ก ์ฌํ์ ํด์ค ์คํ์ผ ์ ์ ํด์ฃผ๊ณ ,

input_page.dart

```dart
...

    child: Container(
      child: Center( //๊ฐ์ด๋ฐ๋ก ๋ฟ!
        child: Text(
          'CALCULATOR',
          style: KLargeButtonTextStyle, //ํธ์
        ),
      ),
      color: KBottomContainerColour,
      margin: EdgeInsets.only(top: 10.0),
      padding: EdgeInsets.only(bottom: 20.0), //ํธ์ (๋ฐ๋ฅ๊ณผ์ ๊ฐ๊ฒฉ์ด ๋๋ชจ ์ข์์!)

...
```

<img width="373" alt="แแณแแณแแตแซแแฃแบ 2020-03-03 แแฉแแฅแซ 1 15 28" src="https://user-images.githubusercontent.com/55340876/75694812-7a2c9200-5cec-11ea-8be5-3aad139bf550.png">


์๋ก์ฝ๋กฌ ํ๋ฉด ์ฒซ ํ์ด์ง๋ ๋์ด๋ค!



# Map

```dart
Map<KeyType, ValueType> mapName {
  Key: Value
}

//
mapName[Key]
```

์น๊ตฌ๋ค์ ์ด๋ฆ๊ณผ ์ ํ๋ฒํธ๊ฐ ์๋  
์ ํ๋ฒํธ๋ถ ๋ผ๊ณ  ์๊ฐํด๋ณด์.

```dart

Map<String, int> phoneBook = {
  '์ง์ฃผ': 1234567,
  'ํฌ๋ผ': 4325556,
  '์ฑ์ฃผ': 1345566,
  '์ํ': 8547885,
};

main() {
  
  print(phoneBook['์ฑ์ฃผ']);

  phoneBook['ํจ์ญ'] = 87539947;
  print(phoneBook['ํจ์ญ']);

  print(phoneBook);

  print(phoneBook.keys);
  print(phoneBook.values);
    
}
```

```dart
//console ๊ฒฐ๊ณผ๋??
1345566
87539947
{์ง์ฃผ: 1234567, ํฌ๋ผ: 4325556, ์ฑ์ฃผ: 1345566, ์ํ: 8547885, ํจ์ญ: 87539947}
(์ง์ฃผ, ํฌ๋ผ, ์ฑ์ฃผ, ์ํ, ํจ์ญ)
(1234567, 4325556, 1345566, 8547885, 87539947)
```

์ฌ๊ธฐ์ ``'์ฑ์ฃผ':`` ๊ฐ ``Key`` ๊ณ ,   
``1345566`` ๊ฐ ``Value`` ๊ฐ ๋๋ค.  
์กด์ฌํ์ง ์๋ Key ๋ฅผ ๊บผ๋ด๋ คํ๋ฉด ``null`` ์ด ์ถ๋ ฅ๋๋ค.

# ๊ฒฐ๊ณผ ํ์ด์ง

์ผ๋จ ๊ธฐ๋ฅ๋ณ๋ก ์ชผ๊ฐ์ ๋๋ ํ ๋ฆฌ ํ์ผ ์์ ๋ถ๋ฅํด์ฃผ์.  
๋ฆฌ์กํธ ์ปดํฌ๋ํธ ์ชผ๊ฐ๋๋ผ ๋จธ๋ฆฌ ์ชผ๊ฐ์ง๋ปํ๋ ๋๊ฐ ์๊ฐ๋๋ค...

<img width="221" alt="แแณแแณแแตแซแแฃแบ 2020-03-03 แแฉแแฅแซ 1 54 51" src="https://user-images.githubusercontent.com/55340876/75698375-faa1c180-5cf1-11ea-8740-a973a7aebd1b.png">

input_page.dart
```dart
...

      BottomButton( //์์ ฏ์ถ์ถ
        onTap: () {
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (context) => ResultsPage(),
            ),
          );
        },
        buttonTitle: 'CALCULATOR',
      ),
    ],

...
```

ํ๋จ ๋ฐ์ปด ์ปจํ์ด๋ ๋ถ๋ถ ์์ ฏ์ ์ถ์ถํด์ ๋ถ๋ฆฌํ๋ค.  
(2ํ์ด์ง ํธํฐ์๋ ์ธ๊ฑฐ๊ธฐ ๋๋ฌธ์!!)

bottom_button.dart
```dart
import 'package:flutter/material.dart';
import '../constants.dart';

class BottomButton extends StatelessWidget {
  //์์ ฏ ์ถ์ถํด์ฃผ๊ณ 
  final Function onTap;
  //onTap๊ณผ buttonTitle ์์ฑ์ ๋ํ์ด์ง์ ํธํฐ๋ง๋ค ๋ค๋ฅด๊ฒ ๊ฐ์ ์ค์ผํ๋๊น ๋ฐ๋ก ์ ์ํ๋ค
  final String buttonTitle;

  BottomButton({@required this.onTap, @required this.buttonTitle});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        child: Center(
          child: Text(
            buttonTitle,
            style: KLargeButtonTextStyle,
          ),
        ),
        color: KBottomContainerColour,
        margin: EdgeInsets.only(top: 10.0),
        padding: EdgeInsets.only(bottom: 20.0),
        width: double.infinity,
        height: KBottomContainerHeight,
      ),
    );
  }
}
```

constantes.dart

```dart
...

const KLargeButtonTextStyle = TextStyle(
  fontSize: 25.0,
  fontWeight: FontWeight.bold,
);

const KTitleTextStyle = TextStyle(
  fontSize: 50.0,
  fontWeight: FontWeight.bold,
);

const KResultTextStyle = TextStyle(
  color: Color(0xFF24D876),
  fontSize: 22.0,
  fontWeight: FontWeight.bold,
);

const KBMITextStyle = TextStyle(
  fontSize: 100.0,
  fontWeight: FontWeight.bold,
);

const KBodyTextStyle = TextStyle(
  fontSize: 22.0,
);
```

results_page.dart

```dart
import 'package:flutter/material.dart';
import '../constants.dart';
import '../components/reusable_card.dart';
import '../components/bottom_button.dart';

class ResultsPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('BMI CALCULATOR'),
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        crossAxisAlignment: CrossAxisAlignment.stretch, //ํ๋ฉด์ ๊ฐ๋ก์ง๋ฌ ๋์ด๋จ
        children: <Widget>[
          Expanded(
            child: Container(
              padding: EdgeInsets.all(15.0),
              alignment: Alignment.bottomLeft,
              child: Text(
                'Your Result',
                style: KTitleTextStyle,
              ),
            ),
          ),
          Expanded(
            flex: 5, //ํ๋์ค๋ฅผ ์ฃผ์ง ์๋ ๋ชจ๋  Expanded ์์ ฏ์ ์ฒ์์ 1์ ๋น์จ์ ์ ์งํ๋ค.
            child: ReusableCard(
              colour: KActiveCardColour,
              cardChild: Column(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: <Widget>[
                  Text(
                    'Normal',
                    style: KResultTextStyle,
                  ),
                  Text(
                    '18.3',
                    style: KBMITextStyle,
                  ),
                  Text(
                    'Your BMI result is quite low, you should eat more!',
                    textAlign: TextAlign.center, //ํ์คํธ ๋ด์์์ ๊ฐ์ด๋ฐ ์ ๋ ฌ
                    style: KBodyTextStyle,
                  ),
                ],
              ),
            ),
          ),
          BottomButton(
            buttonTitle: 'RE-CALCULATE',
            onTap: () {
              Navigator.pop(context);
            },
          ),
        ],
      ),
    );
  }
}
```


<img width="345" alt="แแณแแณแแตแซแแฃแบ 2020-03-03 แแฉแแฅแซ 2 00 59" src="https://user-images.githubusercontent.com/55340876/75698890-d7c3dd00-5cf2-11ea-86f2-06b5c84fcbb7.png">


# ๊ณ์ฐ ๊ธฐ๋ฅ ์ถ๊ฐ

calculator_brain.dart ํ์ผ ์ถ๊ฐ
```dart
import 'dart:math';

class CalculatorBrain {
  final int height;
  final int weight;

  CalculatorBrain({this.height, this.weight});

  double _bmi;

  String calculateBMI() {
    //BMI ๊ณ์ฐ ๊ณต์. BMI ๊ฒฐ๊ณผ๋ฅผ ๋ฌธ์์ด ํ์์ผ๋ก ๋ฐํํ๋ค
    _bmi = weight / pow(height / 100, 2); //pow(x, ์ ๊ณฑ)
    return _bmi.toStringAsFixed(1);
    //์์ ๊ณต์์ผ๋ก๋ ๊ฒ๋ ๊ธด ์ค์๊ฐ ๋์ค๋๊น 10์๋ก ๋ฐํ์ํจ๋ค. (๊ดํธ ์์ 1์ ์์ผ๋ก ์์์  ์ดํ ํ์๋ฆฌ๋ง ๋ฐํํด์ค)
  }
  //์๋จ ํ ๋น ๋ณ์๋ช์ด ๊ทธ๋ฅ double bmi ์๋ค๋ฉด {} ์ค๊ดํธ ์์ ํด๋น ๋ก์ปฌ์์๋ง ๊ฐ์ ๋ณผ์ ์์ด์
  //getResult bmi๋ก ์ ๊ทผ์ ๋ชปํ๋ค. ๊ทธ๋ ๊ธฐ ๋๋ฌธ์ ํ๋ผ์ด๋น ๋ณ์๋ก ์ ์ธ์ ํด์ฃผ๊ณ  ๋ชจ๋  ๋ช์ ๋๊ฐ์ด ๋ฐ๊ฟ์ฃผ๋ฉด ์ ๊ทผ ๊ฐ๋ฅํ๋ค.

  String getResult() {
    //๊ฒฐ๊ณผ๊ฐ ๋  ๋ฌธ์์ด์ ๋ฐํํ๋ ๋ฉ์๋
    if (_bmi >= 25) {
      return '๊ณผ์ฒด์ค';
    } else if (_bmi > 18.5) {
      return '์ ์';
    } else {
      return '์ ์ฒด์ค';
    }
  }

  String getInterpretation() {
    //BMI ํด์ ๋ฉ์๋
    if (_bmi >= 25) {
      return '๋น์ ์ ์ ์ ์ฒด์ค๋ณด๋ค ๋์ต๋๋ค.\n์ด๋์ ์ข ๋ ํด์ฃผ์ธ์.';
    } else if (_bmi > 18.5) {
      return '๋น์ ์ ์ ์ ์ฒด์ค์๋๋ค.\n์ํ๊ณ  ์์ด์!';
    } else {
      return '๋น์ ์ ์ ์ ์ฒด์ค๋ณด๋ค ๋ฎ์ต๋๋ค.\n์์์ ์ข ๋ ์ญ์ทจ ํด์ฃผ์ธ์.';
    }
  }
}
```

์ฌ์ฉ์๊ฐ ๋ชจ๋  ์กฐ๊ฑด์ ์ค์ ํ๊ณ  ํธํฐ์ ๊ฒฐ๊ณผ๋ณด๊ธฐ๋ฅผ ํด๋ฆญ ํ์ ๋ ๊ฐํ์ด์ง๊ฐ ํธ์ถ๋์ผ ํ๋ค.

input_page.dart

```dart
...

    BottomButton(
      onTap: () {
        CalculatorBrain calc = CalculatorBrain(
          //๊ฐ์ฒด์์ฑ
          height: height,
          weight: weight,
        );

        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => ResultsPage(
              bmiResult: calc.calculateBMI(),
              resultText: calc.getResult(),
              interpretation: calc.getInterpretation(),
            ),

...
```

results_page.dart

```dart
...

class ResultsPage extends StatelessWidget {
  final String bmiResult;
  final String resultText;
  final String interpretation;

  ResultsPage(
      {@required this.bmiResult,
      @required this.resultText,
      @required this.interpretation});

...

      child: ReusableCard(
        colour: KActiveCardColour,
        cardChild: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: <Widget>[
            Text(
              resultText, //์๋ฌธ์ ์์ด์์ผ๋ฉด .toUpperCase() ๋ถ์ฌ์ ๋ฐ๊พธ๋ฉด๋จ
              style: KResultTextStyle,
            ),
            Text(
              bmiResult,
              style: KBMITextStyle,
            ),
            Text(
              interpretation,
              textAlign: TextAlign.center, //ํ์คํธ ๋ด์์์ ๊ฐ์ด๋ฐ ์ ๋ ฌ
              style: KBodyTextStyle,
            ),

...
```

<img width="360" alt="" src="https://user-images.githubusercontent.com/55340876/75704261-5ec98300-5cfc-11ea-9092-de3d5b8e4e31.gif">

๋์!!





<br/>


---
---

# Reference  
- [Angela Yu ๊ฐ์(์ ๋ฃ)](https://www.udemy.com/course/flutter-bootcamp-with-dart/)