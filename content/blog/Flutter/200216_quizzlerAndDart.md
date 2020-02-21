---
title: '💎 [Flutter] 퀴즈 앱 / Dart 리스트, 조건부, 클래스 (미완)'
date: 2020-02-17 01:18:00
category: 'Flutter'
draft: false
showToc: true
---

# 퀴즈 앱 - 1. List 생성
- 위젯 타입의 List 생성하여 아이콘 나열해주기
- ``.add`` 를 이용하여 유저가 클릭했을때 아이콘 새로 추가

```dart
import 'package:flutter/material.dart';

void main() => runApp(Quizzler());

class Quizzler extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        backgroundColor: Colors.grey.shade900,
        body: SafeArea(
          child: Padding(
            padding: EdgeInsets.symmetric(horizontal: 10.0),
            child: QuizPage(),
          ),
        ),
      ),
    );
  }
}

class QuizPage extends StatefulWidget {
  @override
  _QuizPageState createState() => _QuizPageState();
}

class _QuizPageState extends State<QuizPage> {
  List<Icon> scoreKeeper = [
    //Icon 위젯을 포함하므로 List 옆 꺽쇠 안에 데이터타입을 꼭 명시해줘야 함
    //String 이라던지 int 같은 전혀 다른 유형의 데이터타입을 명시하면 에러가 난다.
    Icon(
      Icons.check,
      color: Colors.green,
    ),
    Icon(
      Icons.close,
      color: Colors.red,
    ),
    Icon(
      Icons.close,
      color: Colors.red,
    ),
    Icon(
      Icons.close,
      color: Colors.red,
    ),
    Icon(
      Icons.close,
      color: Colors.red,
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: <Widget>[
        Expanded(
          flex: 5,
          child: Padding(
            padding: EdgeInsets.all(10.0),
            child: Center(
              child: Text(
                '이것은 퀴즈 앱이다.',
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontSize: 25.0,
                  color: Colors.white,
                ),
              ),
            ),
          ),
        ),
        Expanded(
          child: Padding(
            padding: EdgeInsets.all(15.0),
            child: FlatButton(
              textColor: Colors.white,
              color: Colors.green,
              child: Text(
                'True',
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 20.0,
                ),
              ),
              onPressed: () {
                //유저가 True를 클릭했을 때 새로운 아이콘이 추가된다.
                setState(() {
                  scoreKeeper.add(
                    Icon(
                      Icons.check,
                      color: Colors.green,
                    ),
                  );
                }); //함수의 끝은 항상 세미콜론 ; 이다.
              },
            ),
          ),
        ),
        Expanded(
          child: Padding(
            padding: EdgeInsets.all(15.0),
            child: FlatButton(
              color: Colors.red,
              child: Text(
                'False',
                style: TextStyle(
                  fontSize: 20.0,
                  color: Colors.white,
                ),
              ),
              onPressed: () {
                //The user picked false.
              },
            ),
          ),
        ),
        Row(
          children: scoreKeeper,
        ),
      ],
    );
  }
}

/*
question1: '한국은 4계절이다.', true,
question2: '1 + 1 은 3이다.', false,
question3: '인간의 피는 초록색이다.', false,
*/
```
<div align="center">

<img width="300" src="https://user-images.githubusercontent.com/55340876/75015968-37d5aa80-54cd-11ea-8ef2-7c1e095ccc32.gif">

</div>

# Dart - LIST

리스트 = [] 이다.  
리스트 생성시에는 ``List<dataType>`` 꺽쇠 안에 데이터 타입을 꼭 명시해주어야 한다.

```dart
void main() {
  
  List<String> myList = [
    '진주', //0번째 자리
    '희라', //1번째 자리
    '소연', //2번째 자리
    '효진', //3번째 자리
  ];
  
  print(myList[3]);
  
}
```

리스트 배열은 첫번째 = 0번째라고 보면 되니까 

이 때,  
``print(myList[3]);`` 에서 콘솔에 출력되는 것은  
3번째 자리의 ``효진`` 이다.  

<br/>

색인 방식으로 접근을 원한다면 이런식으로도 가능하다.  

```dart
void main() {
  
  List<String> myList = [
    '진주', //0번째 자리
    '희라', //1번째 자리
    '소연', //2번째 자리
    '효진', //3번째 자리
  ];
  
//   print(myList[3]);
  
  print(myList.indexOf('희라'));
  
}
```

``print(myList.indexOf('희라'));``  출력시,   
콘솔에 출력되는 결과는 ``1`` 이다.

<br/>

리스트에 데이터를 또 추가하고 싶을 경우엔?  

```dart
void main() {
  
  List<String> myList = [
    '진주', //0번째 자리
    '희라', //1번째 자리
    '소연', //2번째 자리
    '효진', //3번째 자리
  ];
  
//   print(myList[3]);
  
//   print(myList.indexOf('희라'));
  
  myList.add('보배');
  
  print(myList);
  
}
```

``.add`` 를 이용해서 추가하면 

<img width="678" alt="스크린샷 2020-02-16 오후 6 02 18" src="https://user-images.githubusercontent.com/55340876/74601914-873f6380-50e6-11ea-8d33-4f2c59c36640.png">

이런식으로 배열의 맨 뒤에 추가 된다.  

'오, 나는 항상 끝에 말고 내가 원하는 곳에 추가하고 싶은데?'  
라고 생각할 수도 있다.  

```dart
void main() {
  
  List<String> myList = [
    '진주', //0번째 자리
    '희라', //1번째 자리
    '소연', //2번째 자리
    '효진', //3번째 자리
  ];
  
//   print(myList[3]);
  
//   print(myList.indexOf('희라'));
  
//   myList.add('보배');
  
  myList.insert(2, '보배');
  
  print(myList);
  
}
```

``myList.insert(2, '보배');`` 처럼,  

``.insert(원하는 자리, 요소)`` 를 써주면?

<img width="678" alt="스크린샷 2020-02-16 오후 6 07 05" src="https://user-images.githubusercontent.com/55340876/74601963-282e1e80-50e7-11ea-8d4e-a181acc0b4a0.png">

원하는 자리에 지정해준 데이터가 있고  
나머지는 순차적으로 뒤로 밀려난 것을 확인할 수 있다.  

항상 리스트는 0, 1, 2 ... 로 순서가 시작된다는 걸 기억해주자!

.first 로 맨 첫번째 요소를 불러오거나..  
.last 로 맨 마지막 요소를 불러오거나..  
.sort 메소드 등등...  

**[List (공식문서)](https://dart.dev/guides/libraries/library-tour#collections)** 통해서 더 많은 것을 알아볼 수 있다!  

<br/>

항상 공부를 할 때,   
공식문서를 통째로 외울 생각보다는 한 번 간단한 가이드나 요약본 같은 것을 훑고,  
나중에 내가 기능 구현시 필요로 할 때!  
그 때! 찾아보는 것이 더 머릿속에 잘 남는다.  
_(케바케겠지만?!)_  

![dog](https://user-images.githubusercontent.com/55340876/74602175-688e9c00-50e9-11ea-8f20-4604e279fe6e.gif)

확실히 나의 경우에는  
언어 문법만 딥하게 주구장창 파는 것보다는  
직접 기능구현하면서 코드칠 때  
오호라하.. 이건 이런 경우에 쓰이는 거였구나  
웜마? 이걸 이 때 쓰는거야?  
이렇게 머리에 들어오는 타입이라 이 말에 백배 공감한다.



<br/>
<br/>

---

<br/>

# 시간여행 ⏱ 

(코드짜다 실수했을때?! 시점변경하기)

과거의 코드로 돌아가고 싶거나,  
다시 돌아갔는데 또 열심히 쳤었던 그 코드로 가고싶다?!

![2020-02-16 18-31-12 2020-02-16 18_35_44](https://user-images.githubusercontent.com/55340876/74602380-2b2b0e00-50eb-11ea-8ce0-570738be20f9.gif)

VCS -> Local History -> Show History  
를 통해 시점 변경을 하고 진행을 하자!



<br/>
<br/>

---

<br/>




# 오타지적 👾

쭈글쭈글 밑줄이 가면서 오타지적을 할 때가 있다.  
안드로이드 스튜디오가 오타라고 생각하기 때문에!  
그럴 때는 사전에 강제저장 해주자.

![2020-02-16 18-42-26 2020-02-16 18_42_55](https://user-images.githubusercontent.com/55340876/74602476-2ca90600-50ec-11ea-8574-2cc148be8bed.gif)



<br/>
<br/>

---

<br/>



# 퀴즈 앱 - 2. 질문 생성

지금까지는 List에 하드코딩을 한 것이고,  
유저가 실제로 대답한 것에 따라 질문이 바뀌는 것을 구현해야 한다!

questionNumber의 초기 세팅값은 0이고,   
유저가 true 를 클릭했을 때, 다음 질문으로 넘어가야 한다.  
즉,  
questions[questionNumber] 의 **questionNumber가 +1 씩 증가해야한다.**


```dart
...


      onPressed: () {
        questionNumber++;
      },


...
```

``questionNumber++;`` 요 부분은,  

``questionNumber = questionNumber + 1;`` 와 같은 말이다.

![2020-02-21 17-55-43 2020-02-21 17_56_10](https://user-images.githubusercontent.com/55340876/75019038-8423e900-54d3-11ea-97c8-3b236502cb68.gif)

print를 찍어보면 실제로 +1씩 증가하는게 콘솔창에 확인된다.

자.  
이제 onPressed 내에 ``setState((){});`` 를 이용해서 **상태 업데이트**를 한다.  

코드는 이렇다.

```dart
import 'package:flutter/material.dart';

void main() => runApp(Quizzler());

class Quizzler extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        backgroundColor: Colors.grey.shade900,
        body: SafeArea(
          child: Padding(
            padding: EdgeInsets.symmetric(horizontal: 10.0),
            child: QuizPage(),
          ),
        ),
      ),
    );
  }
}

class QuizPage extends StatefulWidget {
  @override
  _QuizPageState createState() => _QuizPageState();
}

class _QuizPageState extends State<QuizPage> {
  List<Icon> scoreKeeper = [];

  List<String> questions = [
    //질문 리스트 생성
    '한국은 4계절이다.',
    '1 + 1 은 3이다.',
    '인간의 피는 초록색이다.',
  ];

  int questionNumber = 0; //질문 넘버 생성

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: <Widget>[
        Expanded(
          flex: 5,
          child: Padding(
            padding: EdgeInsets.all(10.0),
            child: Center(
              child: Text(
                questions[questionNumber], //0번째 질문을 불러온다.
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontSize: 25.0,
                  color: Colors.white,
                ),
              ),
            ),
          ),
        ),
        Expanded(
          child: Padding(
            padding: EdgeInsets.all(15.0),
            child: FlatButton(
              textColor: Colors.white,
              color: Colors.green,
              child: Text(
                'True',
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 20.0,
                ),
              ),
              onPressed: () {
                setState(() {
                  //상태 업데이트
                  questionNumber++; //+1씩 증가
                  print(questionNumber);
                });
              },
            ),
          ),
        ),
        Expanded(
          child: Padding(
            padding: EdgeInsets.all(15.0),
            child: FlatButton(
              color: Colors.red,
              child: Text(
                'False',
                style: TextStyle(
                  fontSize: 20.0,
                  color: Colors.white,
                ),
              ),
              onPressed: () {
                setState(() {
                  //상태 업데이트
                  questionNumber++; //+1씩 증가
                  print(questionNumber);
                });
              },
            ),
          ),
        ),
        Row(
          children: scoreKeeper,
        ),
      ],
    );
  }
}

/*
question1: '한국은 4계절이다.', true,
question2: '1 + 1 은 3이다.', false,
question3: '인간의 피는 초록색이다.', false,
*/
```

![2020-02-21 18-10-29 2020-02-21 18_11_16](https://user-images.githubusercontent.com/55340876/75020226-a1f24d80-54d5-11ea-8545-1b44d6e2303c.gif)

<img width="385" alt="스크린샷 2020-02-21 오후 6 11 39" src="https://user-images.githubusercontent.com/55340876/75020260-b6cee100-54d5-11ea-86c1-be9dbb8af7cc.png">

만들어놓은 질문은 총 3가지로(0, 1, 2) 인덱스 2까지였기 때문에 에러가 뜬다.  
3번째 질문은 없으니 당욘히 에러어어어어!!!

<br/>
<br/>

---

<br/>




# \ 백 슬러시 

```dart
'A slug\'s blood is green'
```

문자열을 표시하는 따옴표 안에 한 개의 따옴표가 더 존재한다.  
그때 문자열이 끝나는 곳을 프로그램이 헷갈려서 에러를 낼 수 있으니  
``\'`` 백 슬러시와 함께 표시를 해준다.



<br/>
<br/>

---

<br/>




# 퀴즈 앱 - 3. 정답 판별

정답 리스트를 만들고,  
유저가 선택한 답과 함께 조건문을 추가해준다.

```dart
import 'package:flutter/material.dart';

void main() => runApp(Quizzler());

class Quizzler extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        backgroundColor: Colors.grey.shade900,
        body: SafeArea(
          child: Padding(
            padding: EdgeInsets.symmetric(horizontal: 10.0),
            child: QuizPage(),
          ),
        ),
      ),
    );
  }
}

class QuizPage extends StatefulWidget {
  @override
  _QuizPageState createState() => _QuizPageState();
}

class _QuizPageState extends State<QuizPage> {
  List<Icon> scoreKeeper = [];

  List<String> questions = [
    '한국은 4계절이다.',
    '1 + 1 은 3이다.',
    '인간의 피는 초록색이다.',
  ];

  List<bool> answers = [
    //정답 리스트 생성
    true,
    false,
    false,
  ];

  int questionNumber = 0;

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: <Widget>[
        Expanded(
          flex: 5,
          child: Padding(
            padding: EdgeInsets.all(10.0),
            child: Center(
              child: Text(
                questions[questionNumber],
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontSize: 25.0,
                  color: Colors.white,
                ),
              ),
            ),
          ),
        ),
        Expanded(
          child: Padding(
            padding: EdgeInsets.all(15.0),
            child: FlatButton(
              textColor: Colors.white,
              color: Colors.green,
              child: Text(
                'True',
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 20.0,
                ),
              ),
              onPressed: () {
                bool correctAnswer = answers[questionNumber]; //선택했을때,

                if (correctAnswer == true) {
                  //조건문 추가
                  print('정답이야!');
                } else {
                  print('틀렸어!');
                }

                setState(() {
                  questionNumber++;
                  print(questionNumber);
                });
              },
            ),
          ),
        ),
        Expanded(
          child: Padding(
            padding: EdgeInsets.all(15.0),
            child: FlatButton(
              color: Colors.red,
              child: Text(
                'False',
                style: TextStyle(
                  fontSize: 20.0,
                  color: Colors.white,
                ),
              ),
              onPressed: () {
                bool correctAnswer = answers[questionNumber]; //선택했을때,

                if (correctAnswer == false) {
                  //조건문 추가
                  print('정답이야!');
                } else {
                  print('틀렸어!');
                }

                setState(() {
                  questionNumber++;
                  print(questionNumber);
                });
              },
            ),
          ),
        ),
        Row(
          children: scoreKeeper,
        ),
      ],
    );
  }
}

/*
question1: '한국은 4계절이다.', true,
question2: '1 + 1 은 3이다.', false,
question3: '인간의 피는 초록색이다.', false,
*/
```


![2020-02-21 19-34-39 2020-02-21 19_35_37](https://user-images.githubusercontent.com/55340876/75027113-5e9ddc00-54e1-11ea-8865-472030bda9e7.gif)

판별은 해주나 아직 목록이 3가지 뿐이니 에러는 동일한 이유로 발생한다.



<br/>
<br/>

---

<br/>


# Dart - IF / ELSE

IF문은 기본적으로 조건이 있는지 확인한다.

```dart
if (track == 'clear') {go();}
```

``만약 기찻길에 트랙이 깨끗하다면 가라;``  
라는 뜻으로 해석하면 된다.  

하지만 트랙 위에 커다란 바위가 있다면?  
조건이 충족하지 못한거니 지나갈 수 없다.  
(중괄호{} 안에 지침을 수행하지 않는다.)  

조건 불충족일 때 코드는 이렇다.  

```dart
if (track == 'clear') {goStraight();}
else {turnRight();}
```

트랙이 깨끗하면 쭉 가고,  
아니면 우회전해라!

자세히는 다음과 같이 구조화 되어있다.

```dart
if (track == 'clear') {
    goStraight();
} else {
    turnRight();
}
```

다트 패드로 좀 더 알아보자.

```dart
import 'dart:math';

void main() {
  
  loveCalculator();
  
}

void loveCalculator() {
  
  int loveScore = Random().nextInt(100) + 1; //1~100가지의 랜덤 수
  
  print(loveScore);
  
  if (loveScore > 70) {
    print('어쩌면 당신들은 서로 사랑하고 있네요.');
  } else {
    print('헤어지는게 나을지도..?');
  }
  
}
```

출력하면,

![2020-02-17 00-05-20 2020-02-17 00_06_15](https://user-images.githubusercontent.com/55340876/74607130-617f8200-5119-11ea-9026-3f69e7e49076.gif)

조건에 해당하는 결과물을 뱉어낸다.

<br/>

조건문에 사용되는 기호는 여러가지가 있다.  

```dart
== //같다면
!= //같지않다면
> //크다면
< //작다면
>= //크거나 같다면
<= //작거나 같다면

&& //AND 그리고
|| //OR 또는
! //NOT 아니라면
```

``else if`` 로 조건을 추가해줄 수도 있다.

```dart
if (loveScore > 70) { 
    //do A   
} else if (loveScore > 30) {    
    //do B
} else {
    //do C
}
```


```dart
import 'dart:math';

void main() {
  
  loveCalculator();
  
}

void loveCalculator() {
  
  int loveScore = Random().nextInt(100) + 1; //1~100가지의 랜덤 수
  
  print(loveScore);
  
  if (loveScore > 70) {
    print('어쩌면 당신들은 서로 사랑하고 있네요.');
  } else if (loveScore > 50 && loveScore < 70) {
    print('애매하네요. 일단 연애 잘해봐요!');
  } else if (loveScore < 50 && loveScore > 30) {
    print('헤어지는게 나을지도..?');
  } else {
    print('깨져그냥');
  }
  
}
```

![2020-02-17 00-17-40 2020-02-17 00_18_39](https://user-images.githubusercontent.com/55340876/74607291-17979b80-511b-11ea-8bbf-341bcbba14f1.gif)



<br/>
<br/>

---

<br/>


# 퀴즈 앱 - 4. 질문 class 만들기

lib에 ``question.dart`` 라는 새로운 다트 파일을 생성하자.

여기에는 ``Question`` 이란 클래스를 생성해주자.

**_question.dart_**
```dart
class Question { //클래스 생성
  String questionText;
  bool questionAnswer;

  Question({String q, bool a}) {
    //생성자 Constructor 생성

    questionText = q;
    questionAnswer = a;
  }
}
```

이제 이걸 main.dart 에 가져와서 써야하는데  
그러기 위해선 메인 파일 상단에 임포트 해주어야 한다.  

**_main.dart_**
```dart
import 'package:flutter/material.dart';
import 'package:quizzler/question.dart'; //가져다 쓸 파일


...
```

이제 데이터 타입의 질문을 가진 새로운 변수를 만들자.

<br/>
<br/>

---

<br/>


# Dart - CLASS

``class``  라는 ``블루프린트`` 를 사용하여 앱을 만들거다.  

자동차를 빗대어보면 2가지 중요점이 있다.

Properties
- color;
- numberOfSeats;

Methods
- drive();
- break();

자동차의 속성과, 기능을 담당하는 메소드이다.  

```dart
class Car {
  int numberOfDoors = 5;

   void drive() {
     print('wheels start turning');
   }
}
```

```dart
Car myCar = Car();
```


- 클래스 키워드를 사용해서 클래스 이름을 대문자로 하고 변수를 정의한다.  
- 정의 된 변수는 해당 클래스의 속성이다.
- 클래스가 할 수 있는 기능 담당 메소드가 되는 함수도 준다.



<br/>


---
---

# Reference  
- [Angela Yu 강의(유료)](https://www.udemy.com/course/flutter-bootcamp-with-dart/)

