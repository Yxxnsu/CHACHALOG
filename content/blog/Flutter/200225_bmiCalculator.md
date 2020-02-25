---
title: '💎 [Flutter] BMI Calculator App'
date: 2020-02-26 02:18:00
category: 'Flutter'
draft: false
showToc: true
---

# 테마 사용법

```dart
...

class BMICalculator extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false, //디버그 띠 감추기
      theme: ThemeData(
        primaryColor: Color(0xFF0A0E21), //앱바 부분 색상
        accentColor: Colors.purple, //플로팅액션버튼 색상
        scaffoldBackgroundColor: Color(0xFF0A0E21), //scaffold 배경 색상
        textTheme: TextTheme(body1: TextStyle(color: Colors.white)), //홈바디 부분 텍스트 색상
      ),
      home: InputPage(),
    );
  }
}

...
```



<img width="350" alt="스크린샷 2020-02-25 오후 7 31 10" src="https://user-images.githubusercontent.com/55340876/75239194-9d93a080-5805-11ea-8383-12f787652a5b.png">



이 방법 말고도  

```dart
...

class BMICalculator extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData.dark().copyWith( //다크테마.copyWith
        primaryColor: Color(0xFF0A0E21),
        scaffoldBackgroundColor: Color(0xFF0A0E21),
      ),
      home: InputPage(),
    );
  }
}

...
```

다크 테마를 지정 후,  
copyWith 메소드로 몇 부분만 업데이트 해줘도 결과는 같다. 

코드가 좀 더 간결해진다.

플로팅액션버튼 위젯을 테마 위젯으로 감싸서 좀 더 세밀하게 꾸며줄 수도 있다.

```dart
...

      floatingActionButton: Theme(
        data: ThemeData(accentColor: Colors.purple), //버튼부분 색상
        child: FloatingActionButton(
          child: Icon(Icons.add),
        ),

...
```

---

<br/>

---

일단 코드를 각 파일에 나누고 시작하자.  

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


# 위젯 리팩토링

일단 위젯의 카드 부분 - 각 부분들이 보여지는 뒷단 배경 부분을 만들거다.

lib/input_page.dart

```dart
...

    return Scaffold(
      appBar: AppBar(
        title: Text('BMI CALCULATOR'),
      ),
      body: Container(
        color: Color(0xFF1D1E33), //컨테이너 색상
        height: 200.0,
        width: 170.0,
        margin: EdgeInsets.all(15.0), //사방 여백
      ),
    );
  }
}

```

여기까지 따라오면 카드 배경 부분은 나타난다.  

<img width="371" alt="스크린샷 2020-02-25 오후 9 06 58" src="https://user-images.githubusercontent.com/55340876/75246263-c79f8f80-5812-11ea-89e6-a3a56e67ec5d.png">


하지만 컨테이너의 테두리가 너무 각졌으니 좀 둥글게 다듬어보자.

```dart
...

      body: Container(
        height: 200.0,
        width: 170.0,
        margin: EdgeInsets.all(15.0), //사방 여백
        decoration: BoxDecoration(
          color: Color(0xFF1D1E33), //컨테이너 색상
          borderRadius: BorderRadius.circular(10.0), //컨테이너 테두리
        ),
      ),
    );
  }
}
```

decoration 속성을 통해 BoxDecoration 위젯 내부에 테두리를 매겼다.  
더불어 컨테이너 위젯에 줬던 ``color: Color(0xFF1D1E33),`` 색상 부분도 같이 옮겨주었다.  
지정해줬던 색상도 해당 컨테이너 데코레이션의 한 부분이기 때문에,  
데코레이션 위젯이 있으면 안으로 다 옮겨줘야 한다.  
그렇지 않으면 에러가 뜬다!  

<img width="371" alt="스크린샷 2020-02-25 오후 9 12 37" src="https://user-images.githubusercontent.com/55340876/75246652-91164480-5813-11ea-9c03-25535d7f55d0.png">

자 이제 둥글둥글해졌다!  
레이아웃을 잡아보자.

```dart
...

      body: Column(
        children: <Widget>[
          Expanded(
            child: Row(
              children: <Widget>[
                Expanded(
                  child: Container(
                    margin: EdgeInsets.all(15.0), //사방 여백
                    decoration: BoxDecoration(
                      color: Color(0xFF1D1E33), //컨테이너 색상
                      borderRadius: BorderRadius.circular(10.0), //컨테이너 테두리
                    ),
                  ),
                ),
                Expanded(
                  child: Container(
                    margin: EdgeInsets.all(15.0), //사방 여백
                    decoration: BoxDecoration(
                      color: Color(0xFF1D1E33), //컨테이너 색상
                      borderRadius: BorderRadius.circular(10.0), //컨테이너 테두리
                    ),
                  ),
                ),
              ],
            ),
          ),
          Expanded(
            child: Container(
              margin: EdgeInsets.all(15.0), //사방 여백
              decoration: BoxDecoration(
                color: Color(0xFF1D1E33), //컨테이너 색상
                borderRadius: BorderRadius.circular(10.0), //컨테이너 테두리
              ),
            ),
          ),
          Expanded(
            child: Row(
              children: <Widget>[
                Expanded(
                  child: Container(
                    margin: EdgeInsets.all(15.0), //사방 여백
                    decoration: BoxDecoration(
                      color: Color(0xFF1D1E33), //컨테이너 색상
                      borderRadius: BorderRadius.circular(10.0), //컨테이너 테두리
                    ),
                  ),
                ),
                Expanded(
                  child: Container(
                    margin: EdgeInsets.all(15.0), //사방 여백
                    decoration: BoxDecoration(
                      color: Color(0xFF1D1E33), //컨테이너 색상
                      borderRadius: BorderRadius.circular(10.0), //컨테이너 테두리
                    ),

...
```

<img width="1455" alt="스크린샷 2020-02-25 오후 9 23 03" src="https://user-images.githubusercontent.com/55340876/75247333-06cee000-5815-11ea-8cad-42c97407aa75.png">

코드를 보면 복잡시럽지만  
레이아웃 짜는건 기본이기 때문에 분명히 이해하고 넘어가야 한다!  

현재 코드는 Container 부분이 반복되는게 너무 많다.  
코드를 **DRY** 하게 유지해보자.  
**DRY - Don't Repeat Yourself**  

해당 Container 하나에 커서를 두고 오른쪽에 Flutter Outline 클릭을 하면  
내가 커서를 둔 컨테이너를 가르킨다.  
그럼 오른쪽 마우스를 클릭하여 Extract Widget 을 뙇!!  
이름 지정을 뙇!! 생성하면,   




<img width="642" alt="스크린샷 2020-02-25 오후 11 48 29" src="https://user-images.githubusercontent.com/55340876/75258111-57e8cf00-5829-11ea-8bd2-7aac6d1181d9.png">



커서가 있던 컨테이너 위젯도 요롷게 바뀌고  
하단에 stl 클래스로 생성이 된걸 확인 할 수 있다.  

```dart
...

class ReusableCard extends StatelessWidget {
  const ReusableCard({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.all(15.0), //사방 여백
      decoration: BoxDecoration(
        color: Color(0xFF1D1E33), //컨테이너 색상
        borderRadius: BorderRadius.circular(10.0), //컨테이너 테두리
      ),
    );
  }
}
```

<br/>



요놈을 반복 부분에 재사용 해주면 된다는 소리!!  
(ReusableCard 이란 이름으로 추출해주었다)

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

줄줄이 소세지 같던 코드가 보기 좋아졌다. 귣결귣결  
재사용 가능한 카드에 문제가 있는 경우에는 생성 된 장소를 찾아서 수정만 해주면 고민타파!!


```dart
  const ReusableCard({Key key,}) : super(key: key);
```

부분을 잠깐 살펴보자면,  
``{Key key,}`` Key 위젯이 보인다.  
키 위젯은 위젯 트리에서 위젯이 움직일 때마다 현 상태를 보존하는 역할을 한다.  
사용자의 스크롤 위치나  
컬렉션을 수정하는 상태를 보존할 수 있다.  

즉,   
어떤 상태를 유지하고 있는 같은 종류의 위젯 컬렉션을 더하거나 제거하거나 새로 정렬해야 할 때 사용한다.    
(예를 들면 ToDo 앱의 할일 목록)   
_실제로 별로 안쓴다니까 일단 여기까지만 알아두자_

<br/>
<br/>

지금의 경우에는 필요가 없으니 일단 저부분은 삭제해주고  
재사용 가능한 카드에서 사용하는 속성 중에서 하나에 대한 값을 생성하려면 생성자가 필요하다.  
음..   
카드 레이아웃 부분을 클릭할때마다 컨테이너 색상이라는 속성이 바뀐다.    
요놈을 고치면 된다!  

<br/>

새로운 재사용 가능한 카드 위젯을 만들 때,  
전달할 수 있는 재사용 가능한 카드의 속성으로  
``Color colour;`` 라고 색상 유형의 속성을 만들어주고  
``ReusableCard({this.colour});`` 재사용 가능한 카드의 생성자를 만든다.  
(속성의 이름을 참조하게끔 이름을 지정하려는 모든 속성을 {} 중괄호로 묶어준다)


<img width="651" alt="스크린샷 2020-02-26 오전 1 10 41" src="https://user-images.githubusercontent.com/55340876/75265851-d4cd7600-5834-11ea-8895-7fb46327ab0b.png">

``@required`` 는 꼭! 필수로 명시를 해줘야한다는 키워드.   
여기서는 재사용 가능한 코드의 매개 변수 색상이 필요하다고 맥여줬는데,  
상단 캡쳐를 보면 확인할 수 있듯이 필요한 부분을 노란색 하이라이트로 알려준다.

```dart
...

          child: ReusableCard( //모든 ReusableCard 위젯 내부마다 동일한 색상 추가
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
      margin: EdgeInsets.all(15.0), //사방 여백
      decoration: BoxDecoration(
        color: colour, //컨테이너 색상
        borderRadius: BorderRadius.circular(10.0), //컨테이너 테두리
      ),
    );
  }
}

```

코드는 이렇고,  
모든 ``ReusableCard()`` 안에는 ``colour: Color(0xFF1D1E33)`` 를 추가해줬다.  

이로써 위젯들 중에서 하나를 골라 컬러를 바꾸면?  

<img width="1456" alt="스크린샷 2020-02-26 오전 1 19 30" src="https://user-images.githubusercontent.com/55340876/75266719-1b6fa000-5836-11ea-9d16-40fc13278ef4.png">

재사용성 쩌는 놈을 만들어준겨!!










<br/>


---
---

# Reference  
- [Angela Yu 강의(유료)](https://www.udemy.com/course/flutter-bootcamp-with-dart/)