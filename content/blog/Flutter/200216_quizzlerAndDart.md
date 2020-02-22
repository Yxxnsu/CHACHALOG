---
title: '💎 [Flutter] 🔥Quiz App / 리스트,조건문,OOP🔥'
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

그리고 Question 데이터 타입의 Q&A 리스트 객체(object)를 만들자.

**_main.dart_**
```dart
import 'package:flutter/material.dart';
import 'package:quizzler/question.dart'; //가져다 쓸 파일


...


  List<Question> questionBank = [
    //Question 데이터 타입의 Q&A 리스트 생성
    Question(q: '한국은 4계절이다.', a: true),
    Question(q: '1 + 1 은 3이다.', a: false),
    Question(q: '인간의 피는 초록색이다.', a: false),
  ];


...
```


이로써 이전에 작성했던 questions 리스트, answers 리스트, q1 인스턴스는 필요가 없으니 삭제해준다.  
이제 Question 클래스의 생성자를 통해 만든 요 변수 한 놈만 관리해주면 된다.  

오류도 수정하자.

**_main.dart_**
```dart
import 'package:flutter/material.dart';
import 'package:quizzler/question.dart'; //가져다 쓸 파일

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

  List<Question> questionBank = [
    //Question 데이터 타입의 Q&A 리스트 생성
    Question(q: '한국은 4계절이다.', a: true),
    Question(q: '1 + 1 은 3이다.', a: false),
    Question(q: '인간의 피는 초록색이다.', a: false),
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
                //questions[questionNumber],
                questionBank[questionNumber].questionText, //Question 속성에서 비롯됨
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
                //bool correctAnswer = answers[questionNumber];
                bool correctAnswer = questionBank[questionNumber]
                    .questionAnswer; //Question 속성에서 비롯됨

                if (correctAnswer == true) {
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
                //bool correctAnswer = answers[questionNumber];
                bool correctAnswer = questionBank[questionNumber]
                    .questionAnswer; //Question 속성에서 비롯됨

                if (correctAnswer == false) {
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
```

작동은 동일하게 된다.  
이렇게 class를 생성하고 그것을 이용하여 Question 데이터 타입의 Q&A 리스트 객체(object)를 만들 수 있다.



<br/>
<br/>

---

<br/>


# Dart - CLASS

아 정말 내가 상당히 어려워하는 부분....

<img width="400" alt="피오" src="https://user-images.githubusercontent.com/55340876/75034912-9876de80-54f1-11ea-883a-9c0c417f1dc8.jpg">

정말 ~~죽겠는~~ 부분이다.... x999999999  
후.. 시작해보자.

<br/>

## 클래스

**class**  라는 **블루프린트** 를 사용하여 앱을 만들거다.  

**Class 는  
객체가 가져야 하는 속성과 기능을 정의한 내용을 담고 있는 설계도 역할을 한다.  
변수와 메소드의 집합체라고 보면 된다.**

비유를 들어보자면..  
자동차를 빗대어보면 2가지 중요점이 있다.

``Properties``
- color;
- numberOfSeats;

``Methods``
- drive();
- break();

<br/>

**자동차의 속성과, 기능을 담당하는 메소드이다.**

```dart
class Car {
  int numberOfDoors = 5;

   void drive() {
     print('wheels start turning');
   }
}
```

- 클래스 키워드를 사용해서 클래스 이름을 대문자로 하고 변수를 정의한다.  
- 정의 된 변수는 해당 클래스의 속성이다.
- 클래스의 중괄호 {} 안에 정의 된 함수는 메소드라고 한다.  
  (클래스가 할 수 있는 기능을 담당하는 메소드가 되는 함수 제공)


이 클래스에서 객체를 만들면 이렇다.

```dart
Car myCar = Car(); //Object
```

"인간" 이라는 클래스를 만들어보자.

```dart
void main() {
  Human jane = new Human(); //객체(Human 클래스의 인스턴스)
  print(jane.height); //객체.객체변수
  
  jane.height = 20; //객체.객체변수 = 값
  print(jane.height); //객체: jane, 객체변수: height
  
}

class Human { // 클래스 
  
  //속성(멤버변수, 필드라고도 함. 객채의 고유 데이터가 저장되는 곳)
  double height = 15;
  int age = 0;
  
}
```

```dart
//console 결과는??
15
20
```

클래스 안에 속성 값이 정해지지 않으면,  
출력시 ``null`` 값이 나온다.

``Human jane = new Human();``   
Human 클래스의 인스턴스인,  
Human 의 객체가 만들어진 것이다.  
**new** 는 객체를 생성해주는 키워드 이다. (dart 언어는 옵션이라 안써도 됨)    
new 키워드로 객체가 만들어짐(객체 생성)


>※ 객체와 인스턴스 (점프 투 자바 참고)  
클래스에 의해서 만들어진 객체를 인스턴스라고도 한다.   
그렇다면 객체와 인스턴스의 차이는 무엇일까? 이렇게 생각 해 보자.   
Animal cat = new Animal() 이렇게 만들어진 cat은 객체이다.   
그리고 cat이라는 객체는 Animal의 인스턴스(instance)이다.   
즉 인스턴스라는 말은 특정 객체(cat)가 어떤 클래스(Animal)의 객체인지를   
관계위주로 설명할 때  사용된다.   
즉, "cat은 인스턴스" 보다는 "cat은 객체"라는 표현이   
"cat은 Animal의 객체" 보다는 "cat은 Animal의 인스턴스" 라는 표현이 훨씬 잘 어울린다.  

```dart
Human jane = new Human();
Human jinjoo = new Human();
Human dohee = new Human();
Human bobea = new Human();
...
```

이렇게 수많은 인간 객체를 Human 클래스로 만들 수 있다.


## 생성자


하지만 내가 만든 코드에서는 인간의 키가 다 15센치로 태어난다.  
이처럼 클래스를 통해 생성되는 객체는  
클래스의 필드를 기본 초기값으로 갖고있다.  

각 객체를 다른 값으로 초기화 하는 방법 2가지
- 필드 선언시 초기값을 맥이는 방법
- 생성자에 초기값을 맥이는 방법

생성자(Constructor) 를 이용해 초기값을 주는 방법을 살펴보자.  
**생성자는 메소드와 비슷하지만 클래스와 이름이 동일하고 return 타입이 없다.**  

```dart
void main() {
  Human jane = new Human(15);
  print(jane.height);
  
  Human james = new Human(20); //new 클래스명(입력항목, ...)
  print(james.height); //객체: jane, 객체변수: height
}

class Human {
  
  double height;
  int age = 0;
  
  Human(double startingHeight) { //생성자
    height = startingHeight;
  }
  
}
```

생성자 역시 new 키워드로 객체가 생성될 때 호출된다.

``Human(double startingHeight)``  
요 생성자 놈은 ``double startingHeight`` 요 값을 필요로 하기 때문에  
객체 생성시(생성사 호출시) 반드시 값을 전달해줘야 한다.

```dart
Human james = new Human();
```

이런식으로 코딩하면 객체 생성 방법이 생성자 규칙과 맞지 않아서 코딩하면 오류가 뜬다.  
생성자가 선언된 경우,  
생성자 규칙대로만 객체를 생성할 수 있다.


```dart
void main() {
  Human jane = new Human(); //객체(Human 클래스의 인스턴스)
  print('-----jane-----');
  print(jane.height);
  print(jane.age);
  
  Human james = new Human(age: 2, height: 20);
  print('-----james-----');
  print(james.age);
  print(james.height);
  
  Human yammy = new Human(age: 5);
  print('-----yammy-----');
  print(yammy.age);
}

class Human { // 클래스
  
  //속성(멤버변수, 필드라고도 함. 객채의 고유 데이터가 저장되는 곳)
  double height;
  int age;
  
  Human({this.height, this.age=3}) { //생성자(명명된 매개변수)
  }
  
}
```

```dart
//console 결과는??
-----jane-----
null //지정된 height 값이 어디에도 없으니 null이 나온다.
3
-----james-----
2
20
-----yammy-----
5
```

``Human({this.height, this.age=3})``   
여기서 ``this``는 해당 클래스의 속성을 가르킨다.
**생성자(명명된 매개변수)** 는,  
{} 중괄호로 이용해서 매개변수를 묶어주면 옵션이 되어서 객체 생성시, 선택해서 사용해주면된다.  

이 때 주의할점은!  
{} 중괄호를 사용해서 묶여진 명명된 매개변수를 사용할 떄는!!!  
함수 호출시.. 그러니까 객체가 생성될 때 반드시 매개변수의 이름을 지정해주어야 한다는 것이다.  
이름을 주지 않으면 에러가 뜬다.

``Human james = new Human(age: 2, height: 20);``

이런식으로 쓰게 되는데  
명명 매개변수는 옵션이라고 말했듯,  

``Human jane = new Human();``  
상단 코드처럼 아예 안주고 호출해도 되고 (이 경우에는 지정된 옵션값으로 출력된다) 

``Human james = new Human(age: 2, height: 20);``  
``Human yammy = new Human(age: 5);``  
선택해서 줘도 된다.  
(이름을 정의해서 불러오기 때문에 생성자 매개변수 자리와 똑같이 기입 안하고!  
 순서가 바뀌어도 상관없다)


## 메소드

메소드는 단순히 클래스 내부에 정의 된 함수이다.  

이제 인간에게 키랑 나이 기본적으로 가져야하는 속성도 줬겠다..  
말하는 기능을 가진 메소드를 만들어보자.

>※ 메소드 (점프 투 자바 참고)  
메소드를 설명하기 전에 믹서기를 생각해보자.  
우리는 믹서기에 과일을 넣는다.   
그리고 믹서를 이용해서 과일을 갈아서 과일 쥬스를 만들어 낸다.   
우리가 믹서기에 넣는 과일은 입력이 되고 과일 쥬스는 그 출력(리턴값)이 된다.   
여기서 믹서기는 메소드이다. 입력을 가지고 어떤 일을 수행한 다음에 결과물을 내어놓는 것,   
이것이 메소드가 하는 일이다.

**“어떤 입력값을 주었을 때 어떤 리턴값을 돌려준다”**

```dart
void main() {
  Human jane = new Human(height: 15); //객체(Human 클래스의 인스턴스)
  print('-----jane-----');
  print(jane.height);
  print(jane.age);
  
  jane.talk('배고파죽겄다');
  

}

class Human { // 클래스
  
  //속성(멤버변수, 필드라고도 함. 객채의 고유 데이터가 저장되는 곳)
  double height;
  int age;
  
  Human({this.height, this.age=3}) { //생성자(명명된 매개변수)
  }
  
  void talk(String whatToSay) { //메소드
    print(whatToSay);
  }
  
}
```

```dart
//console 결과는??
-----jane-----
15
3
배고파죽겄다
```

메소드 역시,  
``jane.talk('배고파죽겄다');``  
요로코롬 클래스 필드에 접근할때처럼 ``.`` 방식을 이용해서 접근한다.
객체는 ``.`` 을 통해 그것을 수행하거나 속성을 얻는다.

## [(참고)실로폰 앱 / Dart 함수](https://jinjoo.netlify.com/Flutter/200215_xylophoneAppDartFunction/)

요 게시물의 함수 내용도 참고하자!!!

<br/>
<br/>

---

<br/>

# 객체지향 프로그래밍 (OOP)

<img width="400" alt="토나와" src="https://user-images.githubusercontent.com/55340876/75091111-38de0900-55ad-11ea-87dc-588f9407ee16.jpg">


객체지향 너무 어려워서 토나온다 🤢  
진즉에 공부 좀 할걸.. OOP 하.. 발목을 잡는구나..  
왜 진입장벽이 높다는지 알겠다 너란녀석.. 크븡ㄴ느흫ㄱ흐크흡ㄱ  

_~~피똥싸게~~_  **열심히 해보자!**


**객체지향 프로그래밍(Object-Oriented Programming)**  
코드가 길어질수록 복잡성은 우리에게 적이 된다.  
복잡할수록 충돌 가능성이 높아지고 문제를 야기시키며 성능이 저하된다.  
따라서 이런 문제 때문에 객체지향 프로그래밍이라는 개념이 나타난 것이다.  
- 프로그램을 어떻게 설계해야 하는지에 대한 일종의 개념, 방법
- 프로그램을 수많은 '객체'라는 기본 단위로 나누고 이 객체들의 상호작용으로 서술하는 방식

<br/>

---



## 객체지향 프로그래밍 언어의 특성

크게는 **4가지**로 나눌 수 있다.

<div align="center">

<img width="400" alt="oop기둥" src="https://user-images.githubusercontent.com/55340876/75092559-477fec80-55bc-11ea-85b0-bd04abed2bf0.png">

</div>

### - **추상화 (Abstraction)**
  - 각 클래스가 별도의 역할과 별도의 직무를 갖는다.  
    (다른 직업을 다른 역할과 다른 클래스로 분리)
  - **클래스 (class) = 추상 (abstract)**
      - 공통 특징, 서술
  - **오브젝트 (object) = 실체 (instance)**
      - 오브젝트는 클래스의 인스턴스이다. (클래스가 실체로 만들어진 것) 
      - 구체, 실제 존재, 고유성
  - **메소드 (method)**


```dart
void main() {
  Human andreas = Human(startingHeight: 15);
  print(andreas.height);
  andreas.talk('Why is the sky so clear today');
}

class Human{
  
  double height = 15;
  int age = 0;

    Human({double startingHeight}){
    height = startingHeight;
  }
  void talk(String whatToSay){
    print(whatToSay);
  } 
}
```

---

### - **캡슐화 (Encapsulation)**
  - 데이터 + 데이터 조작법 의 묶음
  - 정보 은닉 **(dart에서는 private 타입으로 ``_`` 언더스코어를 변수명 앞에 붙인다)**
      - 각 객체의 수정이 다른 객체에게 주는 영향을 최소화
      - 외부 객체가 접근하거나 사용하지 못하므로 유지보수와 소프트웨어 확장 시 오류를 최소화  
        (다른 사람이 특수 작업을 방해하지 않도록 private 과 같은 액세스 수정자를 설정 하여 각 클래스 또는 데이터의 경계 를 만드는 것)
  
---

### - **상속성 (Inheritance)**
  - 하나의 클래스가 갖고있는 특징(데이터+데이터 조작법)들을 그대로 다른 클래스가 물려 받는 것
  - IS-A 관계
  - 재사용
  - 유연성
  - 상속 계층을 따라 특성을 공유
  - 상속 받은 속성이나 메소드 외에 새로운 속성과 메소드 추가 가능  
    (우리 클래스가 우리가 확장하는 다른 클래스로부터 어떤 속성이나 메소드를 얻을 수 있게 함)

```dart
void main(){
  Car car = Car();
  print(car.numberOfSeat);
  
  ElectricCar myTesla = ElectricCar();

  myTesla.drive();
  myTesla.recharge();
}

class Car{
  int numberOfSeat = 5;
  
  void drive(){
    print('wheels turn.');
  }
}

class ElectricCar extends Car {
  int batteryLevel = 100;
  
  void recharge(){
    batteryLevel = 100;
    print(batteryLevel);
  }
}
```

---

### - **다형성 (Polymorphism)**
  - 상속성의 계층을 따라 각 클래스에 하나의 이름을 부여함
  - 각 클래스에 동일 이름의 메소드를 사용할 수 있음  
    (다양한 형태에 동일한 명령을 사용 : 같은 명령을 각기 다른 오브젝트에 줄 수 있다는 것)
  - 클래스가 @override를 추가하여 확장하는 부모와 동일한 속성 또는 Method 를 사용자 정의 할 수 있게하고,  
    Super를 사용하면 해당 메소드를 얻고 더 많은 일을 추가하고 다른 결과를 수신 할 수 있음

```dart

void main(){
  
  SelfDrivingCar futureCar = SelfDrivingCar('Jakarta');
  futureCar.drive();
}

class Car{
  int numberOfSeat = 5;
  
  void drive(){
    print('wheels turn.');
  }
}

class SelfDrivingCar extends Car {
  String destination;
  SelfDrivingCar(String userSetDestination){
    destination = userSetDestination;
  }
  

  @override
  void drive(){

    super.drive();

    print('setting towards $destination');
  }
}
```

--- 

- 추가적으로 **메세지 전달 (Message passing)**   
  -  실제 구체적 동작과 관계없이 "객체" 와 객체에 대한 상호작용 관점을 제공  
     (객체간에 메세지를 주고받아 실행)

<br/>

---

**객체지향 분석/설계**
1. 문제 영역에서 배우(actor) 를 찾아내고
2. 각 배우들의 책임과 역할을 정의하고
3. 배우들간의 관계를 지정하고
4. 각 배우들에 대한 대본(script)를 쓴다.
   
<br/>

- 즉,
  식별하고 일반화하고(object, class)   
  대상들 간의 관계(inheritance, embedded) 를 설정하고,   
  상호작용 하도록(behavior) 한다.

<br/>


**캡슐화(추상화 능력), 상속성(분류하는 능력), 다형성(같은 방법으로 다루기),  
메세지 전달(실존하는 객체들이 상호작용)  
객체지향은 사람의 추상능력, 인식방법에 가까운 개발 방법론.**

<br/>

<img width="500" alt="명수" src="https://user-images.githubusercontent.com/55340876/75091945-25836b80-55b6-11ea-8c99-0d1fe6c8a118.jpeg">

뭐쩌라고 진짜 뭐쩌고저쩌고 뭔소리여여여머라ㅓㅎ너햐ㅣㅓㅎ니허너넉ㅎ  
후... 머리에 넣자 머리에 넣자..  
진주야 이해해야 쓴다..  
이해해야 써먹는다..  

``실력 = 연봉`` 이다..  

**나는 돌머리가 아니다 할수있다 아이캔뚜잇!**  
**나는 돌머리가 아니다 할수있다 아이캔뚜잇!**  
**나는 돌머리가 아니다 할수있다 아이캔뚜잇!**  


<br/>
<br/>

---

<br/>

# 퀴즈 앱 - 5. 추상화

코드가 전체적으로 너무 길어졌다.  
파일을 나눠서 모듈화를 시켜보자.  

**question.dart**
```dart
class Question {
  String questionText;
  bool questionAnswer;

  Question(String q, bool a) {
    //생성자 Constructor 생성

    questionText = q;
    questionAnswer = a;
  }
}
```

**quiz_brain.dart**

```dart
import 'question.dart';

class QuizBrain {
  //퀴즈가 해야하고 할 수 있는 모든 것을 정의

  List<Question> questionBank = [
    Question('한국은 4계절이다.', true),
    Question('1 + 1 은 3이다.', false),
    Question('인간의 피는 초록색이다.', false),
    Question('악어는 파충류이다.', true),
    Question('인어공주의 엔딩은 물거품이 되어 사라지는 것이다.', true),
    Question('메두사의 눈을 쳐다보면 돌로 변한다.', true),
    Question('하루는 12시간이다.', false),
    Question('한강은 겨울이 되면 스케이트장으로 바뀐다.', false),
    Question('강아지와 고양이는 친하다.', false),
    Question('폐암은 담배를 많이 폈을 때 발병될 가능성이 높다.', true),
    Question('Dart 는 구글이 개발한 프로그래밍 언어이다.', true),
    Question('초콜릿은 강아지의 심장과 신경계에 영향을 미친다. 강아지에게 먹이면 죽을 수도 있다.', true),
    Question('도로교통법 : 스쿨존의 제한속도는 30km 이내로 제한된다.', true),
  ];
}
```

**main.dart**

```dart
import 'package:flutter/material.dart';
import 'quiz_brain.dart';

QuizBrain quizBrain = new QuizBrain(); //질문 객체 생성


...


              child: Text(
                quizBrain.questionBank[questionNumber].questionText,


...


                bool correctAnswer =
                    quizBrain.questionBank[questionNumber].questionAnswer;
...


                bool correctAnswer =
                    quizBrain.questionBank[questionNumber].questionAnswer;


...
```

퀴즈를 위한 질문 리스트를 별도의 객체로 만들었다.

만약   
sport_brain, music_brain, picture_brain 등  
여러 파일의 다른 장르의 퀴즈 리스트들이 있다고 치자.

장르마다 다른 퀴즈를 불러오고 싶을 때에는  
``QuizBrain quizBrain = new QuizBrain();``  
요 부분의 객체를 알맞게 변경해주면 된다. (import 잊지말고!)



<br/>
<br/>

---

<br/>

# 퀴즈 앱 - 6. 캡슐화

```dart
...


    bool correctAnswer =
        quizBrain.questionBank[questionNumber].questionAnswer;


...
```

main.dart 의 상단 코드를 한 번 보자.  
이 코드는 퀴즈 리스트에 답과 일치하면 정답, 아니면 땡이라고 말해준다.


```dart
...


  List<Question> questionBank = [
    Question('한국은 4계절이다.', true),


...
```

이 질문의 실제 답은 true 이다.  
하지만 내가 강제로 답을 준다면?  

![2020-02-22 22-26-26 2020-02-22 22_27_13](https://user-images.githubusercontent.com/55340876/75093144-9761b200-55c2-11ea-9c39-235a4bc8ff37.gif)

```dart
...


    onPressed: () {
      quizBrain.questionBank[questionNumber].questionAnswer = false;

      bool correctAnswer =
          quizBrain.questionBank[questionNumber].questionAnswer;


...
```

보라.  
한국은 4계절이냐는 질문에 false를 줘도 강제로 답을 맥여서 정답이라고 뜨는 것을!!  

이렇게 main.dart 파일에서 quiz_brain 파일의 속성을 강제로 접근하여 틀린 정보로 수정할 수 있고,    
이런 경우가 생기면 앱이 예상치 않은 방식으로 동작하게 된다.

이럴 때 필요한 것이 **캡슐화**의 **정보 은닉성**이다.

> 레스토랑으로 말하면  
> 
웨이터 클래스가 있고 셰프 클래스가 있다.   
웨이터가 셰프를 방해하는 것을 원할까?  
웨이터가 갑자기 요리 중인 셰프한테 가서 "너 요리 좀 제대로 해!" 라고 한다면?  
어처구니 없는 상황이지 않나?  
당연히 누구던 자기 업무를 방해받는 것은 원치 않는다.  
웨이터 클래스는 '요리사 참견하기' 라는 코드까지 섞이며 코드는 더 길어진다.  
>
**서로 터치하지 않게끔 구역을 철저히 분리하고 자신의 일만 하게하자!**

모든 클래스는 별도의 모듈로 구성된다.

**quiz_brain.dart**
```dart
...


  List<Question> _questionBank = [


...
```

<img width="769" alt="스크린샷 2020-02-22 오후 10 49 45" src="https://user-images.githubusercontent.com/55340876/75093502-a6962f00-55c5-11ea-9e01-b3aa80901a07.png">


``_questionBank``  

질문 리스트 변수명 앞에 ``_`` 을 추가하면 ``private 타입`` 으로 인식하며 외부에서 접근을 못하게 된다.  

이로써 외부에서는 더이상  ``_questionBank`` 접근도, 수정도 불가하다.

그럼 어떻게 질문 리스트를 메인 파일로 가져오냐고??  
질문 리스트 담당자에 접근을 못하니 우리는 담당자 말고 위임받은 애를 데리고 오면 된다.  

class 안에 메소드를 만들어서 불러오자!
**(같은 클래스 안에 있는 것은 private 타입이라도 불러올 수 있다!)**

**quiz_brain.dart**

```dart
...


    Question('도로교통법 : 스쿨존의 제한속도는 30km 이내로 제한된다.', true),
  ];

  String getQuestionText(int questionNumber) { //질문 메소드
    return _questionBank[questionNumber].questionText;
    //_questionBank 의 questionNumber(인덱스를 의미)의 질문을 말한다.
  }

    bool getCorrectAnswer(int questionNumber) { //답변 메소드
    return _questionBank[questionNumber].questionAnswer;
  }
}
```

**main.dart**

```dart
...

          child: Text(
          //quizBrain.questionBank[questionNumber].questionText,
          quizBrain.getQuestionText(questionNumber),
        
...

          onPressed: () {
            bool correctAnswer = quizBrain.getCorrectAnswer(questionNumber);

...

          onPressed: () {
            bool correctAnswer = quizBrain.getCorrectAnswer(questionNumber);

...
```
questionNumber 는 처음에 0으로 세팅되어 있으니까  
퀴즈 뇌로 가서 해당하는 첫번째 질문을 받게된다. 

답변도 같은 방식으로 만들어준다!

캡슐화를 통해 이제 외부의 방해를 받지 않는다.

자 이제 마지막 질문만 가면 터지는 에러를 수정해보자.   
(다음 질문이 없으니 에러가 나는 상황)

**quiz_brain.dart**

```dart
...

class QuizBrain {
  //퀴즈가 해야하고 할 수 있는 모든 것을 정의

  int _questionNumber = 0; //main.dart 에서 잘라옴

...

  void nextQuestion() {
    if (_questionNumber < _questionBank.length - 1) {
      //_questionNumber가 _questionBank의 길이를 -1한 12가 되는 순간 조건이 false가 되니까 ++하지 않음
      _questionNumber++;
    }
    print(_questionNumber);
    print(_questionBank.length);
  }

  String getQuestionText() {
    //메소드
    return _questionBank[_questionNumber].questionText;
    //_questionBank 의 questionNumber(인덱스를 의미)의 질문을 말한다.
  }

  bool getCorrectAnswer() {
    return _questionBank[_questionNumber].questionAnswer;
  }
}
```

**main.dart**

```dart
...

      child: Text(
        quizBrain.getQuestionText(),

...

      onPressed: () {
        bool correctAnswer = quizBrain.getCorrectAnswer();

...

        setState(() {
          quizBrain.nextQuestion();
        });

...

      onPressed: () {
        bool correctAnswer = quizBrain.getCorrectAnswer();

...

        setState(() {
          quizBrain.nextQuestion();
        });

...
```







<br/>
<br/>

---

<br/>

# 퀴즈 앱 - 7. 상속성

우리는 많고 다른 코드로 추상화를 할 때   
기능들이 서로 중복되지 않도록 클래스와 별도의 모듈을 사용하므로   
객체를 만들 때 **상속**이 정말 중요하다.

```dart
void main() {
  
  Car myNormalCar = new Car();
  print(myNormalCar.numberOfSeat);
  myNormalCar.drive();
}

class Car {
  int numberOfSeat = 5;
  
  void drive() {
    print('바퀴가 굴러간다.');
  }
}
```

```dart
//console 결과는??
5
바퀴가 굴러간다.
```

Car 클래스를 만들고,  
기본값으로 카시트는 5개가 주어진다.  
그리고 모든 차에 주행 방법이 있듯이,  
기능으로 drive 메소드를 호출해서 단순히 바퀴만 돌려보자.  

설계를 했으니 나만의 차 객체를 생성해보자.  
``Car myNormalCar = Car();``  
따로 설정된 카시트가 없으니 기본값 5가 나올 것이고,  
.drive() 를 호출하면 바퀴가 돌 것이다.  

우리는 이미 앞전에 배웠기에 클래스 객체가 이런식으로 작동하는 방식이 익숙하다.  
그러나 다른 유형의 자동차를 만들고 싶다면?  
전기 자동차?    
가솔린 자동차?  
태양열 자동차?  
**속성은 같지만 기능이 다른 자동차를 만들어보자.**

```dart
class Car {
  int numberOfSeat = 5;
  
  void drive() {
    print('바퀴가 굴러간다.');
  }
}
```

새 클래스를 생성하면서 기존에 Car 클래스에 쓴 속성과 기능들을 어느 세월에 다시 쓰냐..  
당연히 바퀴 네개, 시트 다섯새, 문짝 네개 등등..  
일반 자동차랑 같은 점들을 또 써줘야하나..  
시간낭비다!  

나는 게으른 개발자니까 머리를 굴리겠다.   
자, Car 클래스의 것들을 상속받아쓰면 되겠지!  

```dart
class ElectricCar extends Car {
  
}
```

``ElectricCar`` 클래스는 extends 구문을 통해 ``Car`` 클래스의 모든 것을 갖게 된다.  
이로써 Car 클래스가 부모가 되고,  
그 부모의 재산을 자식인 ElectricCar 클래스가 상속받는 것이다.

```dart
void main() {
  
//   Car myNormalCar = new Car();
//   print(myNormalCar.numberOfSeat);
//   myNormalCar.drive();
  
  ElectricCar myTesla = new ElectricCar();
  myTesla.drive();
}

class Car { //부모 클래스
  int numberOfSeat = 5;
  
  void drive() {
    print('바퀴가 굴러간다.');
  }
}

class ElectricCar extends Car { //상속받은 클래스
  
}
```
코드를 추가해서 콘솔을 찍으면?  

```dart
//console 결과는??
바퀴가 굴러간다.
```

**WOW!!!**  

ElectricCar 클래스는 기존 Car 클래스에는 당연히 없는!!  
**전기자동차만의 속성과 기능들을 추가해줘서 사용할 수도 있다.**  
가령,  
배터리는 100% 로 시작하고,  
고장나면 100% 로 재충전할 수 있게 재충전 기능을 제공해주자.

```dart
...

class ElectricCar extends Car {
  int batteryLevel = 100;
  
  void recharge() {
    batteryLevel = 100;
  }
}
```

요로코롬 부모 클래스로부터 상속을 받고나서   
부모와 다른 원하는 모든 것(부모에겐 없는 속성, 기능들)을 추가해주면 된다.


<br/>
<br/>

---

<br/>

# 퀴즈 앱 - 8. 다형성

한 챕터마다 끝날 것 같으면서도 끝나지 않는 안젤라유 쓰앵님의 강의...  

![1539617118_8424_zzal](https://user-images.githubusercontent.com/55340876/75097105-19b19c80-55ea-11ea-8333-e11c210fd262.png)

bmi계산기랑.. clima랑.. 비트코인.. 채팅.. 상태관리..  
할게 겁나 궤많은데 벌써 눙무리..
내 볼에 흐르는거 뭐햐..  
내가 학창시절에 이렇게까지 공부를 한 적이 있던가  
지난 날으 나년 반성훼.. 쏘th뜌삣! 😞

후.. 드디어 OOP 마지막 기둥 **다형성**을 까보자!  

프로그램을 추상화하고 별도의 역할을 위한 별도의 모듈을 만들었다.  
그리고 부모 클래스로부터 많은 행동을 상속 받았다.  
이 때 기본적으로 부모 클래스의 사본을 얻는다. 

이런 생각이 들 수 있다.

>내가 Car라는 부모 클래스로부터 상속받아서 공중부양자동차를 만들었는데  
아.. 상속받은 기능이랑 속성 몇개가 거슬려!   
쫌 바꿔야 될 것 같은데.. 
시대가 시대이니만큼 공중부양인데 어?!  
바퀴 필요없잖아!  
아니 하늘을 나는데 바퀴 굴러가는 기능은 왜있는겨?  
상속받은 부분 몇개만 쫌 바꾸면 깐지나겠는데?  
올드한건 갖다버리자꼬!!

```dart
void main() {
  
//   Car myNormalCar = new Car();
//   print(myNormalCar.numberOfSeat);
//   myNormalCar.drive();
  
//   ElectricCar myTesla = new ElectricCar();
//   myTesla.drive();
  
  LevitatingCar myMagLev = new LevitatingCar();
  myMagLev.drive();
  
}

class Car {
  int numberOfSeat = 5;
  
  void drive() {
    print('바퀴가 굴러간다.');
  }
}

class ElectricCar extends Car {
  int batteryLevel = 100;
  
  void recharge() {
    batteryLevel = 100;
  }
}

class LevitatingCar extends Car {
  
  @override
  void drive() {
    print('공중에 뜬다');
  }
}
```

```dart
//console 결과는??
공중에 뜬다
```

<br/>

- ``@override`` : drive()를 재정의할 수 있도록 이전 버전과 똑같이 보이는 자체 버전의 drive()를 만듦

<br/>


워후  
부모 클래스로부터 상속받은 메소드를 내 입맛대로 다시 재정의 해서 쓰다니!  
쌈박하다.  

자율주행자동차도 하나 만들어보자!

```dart
void main() {
  
  SelfDrivingCar myWaymo = new SelfDrivingCar('제주도');
  
  myWaymo.drive();
  
}

class Car {
  int numberOfSeat = 5;
  
  void drive() {
    print('바퀴가 굴러간다.');
  }
}

class ElectricCar extends Car {
  int batteryLevel = 100;
  
  void recharge() {
    batteryLevel = 100;
  }
}

class LevitatingCar extends Car {
  
  @override //재정의 키워드
  void drive() {
    print('공중에 뜬다');
  }
}

class SelfDrivingCar extends Car { //커스텀 생성자 추가
  
  String destination;
  
  SelfDrivingCar(String userSetDestination) {
    destination = userSetDestination;
  }
  
  @override
  void drive() {
    super.drive();
    
    print('$destination로 알아서 운전해라.');
  }
}
```


```dart
//console 결과는??
바퀴가 굴러간다.
제주도로 알아서 운전해라.
```

``@override`` 를 통해 ``drive()`` 메소드를 재정의하면서  
``super.drive();`` 를 이용하여 
부모 메소드의 ``바퀴가 굴러간다.`` 를 더해 내가 향상시킨 기능도 함께 출력했다.  

이처럼 부모로부터 물려받을 수 있음과 동시에 그걸 향상시킬 수도 있다.  
메소드를 재정의 하여 조금 변경할 수 있는 것이다.


<br/>
<br/>

---

<br/>

# 퀴즈 앱 - 9. scoreKeeper, alert 추가

**main.dart**
```dart
...

class _QuizPageState extends State<QuizPage> {
  List<Icon> scoreKeeper = [];

  void checkAnswer(bool userPickedAnswer) {
    bool correctAnswer = quizBrain.getCorrectAnswer();

    setState(() {
      if (userPickedAnswer == correctAnswer) {
        scoreKeeper.add(Icon(
          Icons.check,
          color: Colors.green,
        ));
      } else {
        scoreKeeper.add(Icon(
          Icons.close,
          color: Colors.red,
        ));
      }

      quizBrain.nextQuestion();
    });
  }

...
```

이제 경고창을 띄워보자!

1. **[rflutter_alert 1.0.3](https://pub.dev/packages/rflutter_alert#-readme-tab-)** 에서 디펜더시 복사
2. pubspec.yaml 디펜더시 부분에 붙여넣기 (들여쓰기 주의!)
3. main.dart에 import 추가
   ```dart
   ...

   import 'package:rflutter_alert/rflutter_alert.dart';

   ...
   ```
4. quiz_brain.dart에 마지막 질문을 확인하는 메소드 추가
  (퀴즈가 끝날때와 시작해야할 때 print문으로 true를 반환하는지 확인필!)
  ```dart
  ...

      bool isFinished() {
      if (_questionNumber >= _questionBank.length - 1) {
        //_questionNumber가 _questionBank의 길이를 -1한 12보다 크거나같으면 print문 실행
        print('Now returning true');
        return true;
      } else {
        return false;
      }
     }
  }
  ```
5. quiz_brain.dart에 _questionNumber를 다시 0으로 설정하는 reset () 메소드 추가
   ```dart
   ...

        void reset() {
        _questionNumber = 0;
      }
    }
   ```

6. main.dart 도 수정 
      ```dart
      ...

          setState(() {
            if (quizBrain.isFinished() == true) {
              //퀴즈 끝에 도달했는지 확인
              Alert(
                //rFlutter_alert를 사용하여 경고 표시
                //기본 코드 형식은 사이트를 참고하자
                context: context,
                title: "Finished!",
                desc: "퀴즈가 끝났습니다!",
              ).show();

              quizBrain.reset(); //questionNumber를 재설정하고

              scoreKeeper = []; //점수를 초기화함
            } else {
              //끝에 도달하지 못한 경우 ELSE는 아래 답변 확인 단계를 수행한다 👇
              if (userPickedAnswer == correctAnswer) {

      ...
      ```

<div align="center">

<img width="350" alt="퀴즈앱완성본" src="https://user-images.githubusercontent.com/55340876/75098412-3bfee680-55f9-11ea-83be-89e7d18aa086.gif">


**드디어 완성!!!!! 후하후하후하**

</div>


<br/>


---
---

# Reference  
- [Angela Yu 강의(유료)](https://www.udemy.com/course/flutter-bootcamp-with-dart/)
- [클래스, 객체, 인스턴스의 차이](https://gmlwjd9405.github.io/2018/09/17/class-object-instance.html)
- [점프 투 자바 - 객체지향 프로그래밍](https://wikidocs.net/218)
- [클래스](https://gbs1995.tistory.com/10?category=797664)
- [명명 생성자](https://beomseok95.tistory.com/306)
- [변수와 함수의 기본](https://sysocoder.com/flutter-%EB%B3%80%EC%88%98%EC%99%80-%ED%95%A8%EC%88%98%EC%9D%98-%EA%B8%B0%EB%B3%B8/)
- [클래스, 제너릭](https://sysocoder.com/flutter-%ed%81%b4%eb%9e%98%ec%8a%a4class-%ec%a0%9c%eb%84%88%eb%a6%adgenerics/)
- [객체지향](https://www.slideshare.net/plusjune/ss-46109239)