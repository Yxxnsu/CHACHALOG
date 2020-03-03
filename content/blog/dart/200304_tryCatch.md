---
title: '📖 [Dart] 예외처리 / null 연산자'
date: 2020-03-04 00:10:00
category: 'Dart'
draft: false 
showToc: true
---

# 예외처리

문자열 15에 정수 5를 더한다고 해보자.

```dart
main() {
  String myString = '15';
  
  myString + 5;
}
```

이 경우는 문자와 정수를 강제로 더한다고 하는거니 당연히 컴파일 에러가 난다.

```dart
main() {
  String myString = '15';
  
  double myStringAsDouble = double.parse(myString);
  print(myStringAsDouble + 5);
}
```

```dart
//console 결과는??
20
```

일단 문자열을 ``.parse()`` 를 이용해서 문자열을 숫자로 바꿔주고,  
그것을 다시 새로운 변수에 할당하고 출력에서 더해주면 **20** 이 제대로 나온다.

오류를 잡아내는 예외처리 방법을 보자.

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

abc 문자열은 숫자로 변환이 안되고 그러므로 컴파일 오류가 난다.  
try {} 블록 안에 식을 넣고 cat (e) {} 블록을 통해 오류를 출력해보자.  
여기서 (e) 는 exception 예외 의 약자이다.  

```dart
//console 결과는??
FormatException: Invalid double
abc
```
예외처리를 통해  
abc 는 double 타입이 될 수 없다는 오류를 잡아낸다.  

컴파일 에러가 뜨면 앱이 중단되고 사용자에게 검은 화면이 표시되거나 앱이 종료되는데,  
예외처리를 통해 해당 오류를 잡아내고 앱 중단을 막고 해당 포인트를 고칠 수 있다.

실 프로젝트를 예를 든다면,

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

요건 컴파일 에러를 뜨며 앱이 중단된다.  

<img width="340" alt="스크린샷 2020-03-03 오후 10 59 34" src="https://user-images.githubusercontent.com/55340876/75782906-f71a4300-5da2-11ea-8f77-750e51b20e6a.png">

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

try 로 해당 코드를 실행해보고 오류면   
catch 로 잡아서 해당 오류와 함께 대안용 위젯을 뱉어준다.


```dart
//console 결과는??
flutter: FormatException: Invalid double
abc
```


<img width="340" alt="스크린샷 2020-03-03 오후 11 08 57" src="https://user-images.githubusercontent.com/55340876/75783468-f7ffa480-5da3-11ea-9bdc-21af43716bbd.png">


다른 방법으로는 

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

margin 30이 적용된 red 컨테이너가 반환된다.

# null 연산자

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
myMarginAsADouble 가 **null 이 아니면** 이라는 ``??`` 를 넣는다.  
null 인 경우 대안은 30.0 이다.

결과는   
margin 30이 적용된 red 컨테이너가 반환된다.






<br/>


---
---

# Reference  
- [Angela Yu 강의(유료)](https://www.udemy.com/course/flutter-bootcamp-with-dart/)