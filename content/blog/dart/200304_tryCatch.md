---
title: '๐ [Dart] ์์ธ์ฒ๋ฆฌ / null ์ฐ์ฐ์'
date: 2020-03-04 00:10:00
category: 'Dart'
draft: false 
showToc: true
---

# ์์ธ์ฒ๋ฆฌ

๋ฌธ์์ด 15์ ์ ์ 5๋ฅผ ๋ํ๋ค๊ณ  ํด๋ณด์.

```dart
main() {
  String myString = '15';
  
  myString + 5;
}
```

์ด ๊ฒฝ์ฐ๋ ๋ฌธ์์ ์ ์๋ฅผ ๊ฐ์ ๋ก ๋ํ๋ค๊ณ  ํ๋๊ฑฐ๋ ๋น์ฐํ ์ปดํ์ผ ์๋ฌ๊ฐ ๋๋ค.

```dart
main() {
  String myString = '15';
  
  double myStringAsDouble = double.parse(myString);
  print(myStringAsDouble + 5);
}
```

```dart
//console ๊ฒฐ๊ณผ๋??
20
```

์ผ๋จ ๋ฌธ์์ด์ ``.parse()`` ๋ฅผ ์ด์ฉํด์ ๋ฌธ์์ด์ ์ซ์๋ก ๋ฐ๊ฟ์ฃผ๊ณ ,  
๊ทธ๊ฒ์ ๋ค์ ์๋ก์ด ๋ณ์์ ํ ๋นํ๊ณ  ์ถ๋ ฅ์์ ๋ํด์ฃผ๋ฉด **20** ์ด ์ ๋๋ก ๋์จ๋ค.

์ค๋ฅ๋ฅผ ์ก์๋ด๋ ์์ธ์ฒ๋ฆฌ ๋ฐฉ๋ฒ์ ๋ณด์.

```dart
main() {
  String myString = 'abc';
  
  try{
    double myStringAsDouble = double.parse(myString);
  print(myStringAsDouble + 5);
  }
  catch (e) {
    print(e);
  }
}
```

abc ๋ฌธ์์ด์ ์ซ์๋ก ๋ณํ์ด ์๋๊ณ  ๊ทธ๋ฌ๋ฏ๋ก ์ปดํ์ผ ์ค๋ฅ๊ฐ ๋๋ค.  
try {} ๋ธ๋ก ์์ ์์ ๋ฃ๊ณ  cat (e) {} ๋ธ๋ก์ ํตํด ์ค๋ฅ๋ฅผ ์ถ๋ ฅํด๋ณด์.  
์ฌ๊ธฐ์ (e) ๋ exception ์์ธ ์ ์ฝ์์ด๋ค.  

```dart
//console ๊ฒฐ๊ณผ๋??
FormatException: Invalid double
abc
```
์์ธ์ฒ๋ฆฌ๋ฅผ ํตํด  
abc ๋ double ํ์์ด ๋  ์ ์๋ค๋ ์ค๋ฅ๋ฅผ ์ก์๋ธ๋ค.  

์ปดํ์ผ ์๋ฌ๊ฐ ๋จ๋ฉด ์ฑ์ด ์ค๋จ๋๊ณ  ์ฌ์ฉ์์๊ฒ ๊ฒ์ ํ๋ฉด์ด ํ์๋๊ฑฐ๋ ์ฑ์ด ์ข๋ฃ๋๋๋ฐ,  
์์ธ์ฒ๋ฆฌ๋ฅผ ํตํด ํด๋น ์ค๋ฅ๋ฅผ ์ก์๋ด๊ณ  ์ฑ ์ค๋จ์ ๋ง๊ณ  ํด๋น ํฌ์ธํธ๋ฅผ ๊ณ ์น  ์ ์๋ค.

์ค ํ๋ก์ ํธ๋ฅผ ์๋ฅผ ๋ ๋ค๋ฉด,

```dart
...

  @override
  Widget build(BuildContext context) {
    String myMargin = 'abc';

    return Scaffold(
      body: Container(
        margin: EdgeInsets.all(double.parse(myMargin)),
        color: Colors.red,
      ),
    );
  }
}
```

์๊ฑด ์ปดํ์ผ ์๋ฌ๋ฅผ ๋จ๋ฉฐ ์ฑ์ด ์ค๋จ๋๋ค.  

<img width="340" alt="แแณแแณแแตแซแแฃแบ 2020-03-03 แแฉแแฎ 10 59 34" src="https://user-images.githubusercontent.com/55340876/75782906-f71a4300-5da2-11ea-8f77-750e51b20e6a.png">

```dart
...

  @override
  Widget build(BuildContext context) {
    String myMargin = 'abc';

    try {
      double myMarginAsADouble = double.parse(myMargin);
      return Scaffold(
        body: Container(
          margin: EdgeInsets.all(myMarginAsADouble),
          color: Colors.red,
        ),
      );
    } catch (e) {
      print(e);
      return Scaffold(
        body: Container(
          margin: EdgeInsets.all(30),
          color: Colors.blue,
        ),
      );
    }
  }
}
```

try ๋ก ํด๋น ์ฝ๋๋ฅผ ์คํํด๋ณด๊ณ  ์ค๋ฅ๋ฉด   
catch ๋ก ์ก์์ ํด๋น ์ค๋ฅ์ ํจ๊ป ๋์์ฉ ์์ ฏ์ ๋ฑ์ด์ค๋ค.


```dart
//console ๊ฒฐ๊ณผ๋??
flutter: FormatException: Invalid double
abc
```


<img width="340" alt="แแณแแณแแตแซแแฃแบ 2020-03-03 แแฉแแฎ 11 08 57" src="https://user-images.githubusercontent.com/55340876/75783468-f7ffa480-5da3-11ea-9bdc-21af43716bbd.png">


๋ค๋ฅธ ๋ฐฉ๋ฒ์ผ๋ก๋ 

```dart
...

  @override
  Widget build(BuildContext context) {
    String myMargin = 'abc';
    double myMarginAsADouble;

    try {
      double myMarginAsADouble = double.parse(myMargin);
    } catch (e) {
      print(e) {
        myMarginAsADouble = 30.0;
      }

      return Scaffold(
        body: Container(
          margin: EdgeInsets.all(30),
          color: Colors.red,
        ),
      );
    }
  }
}
```

margin 30์ด ์ ์ฉ๋ red ์ปจํ์ด๋๊ฐ ๋ฐํ๋๋ค.

# null ์ฐ์ฐ์

```dart
...

  @override
  Widget build(BuildContext context) {
    String myMargin = 'abc';
    double myMarginAsADouble;

    try {
      double myMarginAsADouble = double.parse(myMargin);
    } catch (e) {
      print(e);
    }

    return Scaffold(
      body: Container(
        margin: EdgeInsets.all(myMarginAsADouble ?? 30.0),
        color: Colors.red,
      ),
    );
  }
}
```

``(myMarginAsADouble ?? 30.0)``  
myMarginAsADouble ๊ฐ **null ์ด ์๋๋ฉด** ์ด๋ผ๋ ``??`` ๋ฅผ ๋ฃ๋๋ค.  
null ์ธ ๊ฒฝ์ฐ ๋์์ 30.0 ์ด๋ค.

๊ฒฐ๊ณผ๋   
margin 30์ด ์ ์ฉ๋ red ์ปจํ์ด๋๊ฐ ๋ฐํ๋๋ค.






<br/>


---
---

# Reference  
- [Angela Yu ๊ฐ์(์ ๋ฃ)](https://www.udemy.com/course/flutter-bootcamp-with-dart/)