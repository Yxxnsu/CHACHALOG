---
title: '📖 [Dart] 🔥애증의 Dart🔥'
date: 2020-02-20 17:05:00
category: 'Dart'
draft: false
showToc: true
---

<!-- 임시 저장 글 -->
<!-- Draft Post -->
<!-- Draft Post -->
<!-- Draft Post -->
<!-- Draft Post -->
<!-- Draft Post -->
# data type
**코드 블럭 내부 ``print();`` 오른쪽 주석에는 출력 결과물을 기재했다.**  
**dart 언어는 기본적으로 값을 주지 않으면 null 값으로 세팅이 된다.**

### 출력 - 안녕

```dart
void main() {

  print('안녕');  //안녕
  
}
```

### bool - 참, 거짓


```dart
void main() {

  bool visible = true;
  print(visible); //true
  
}
```

### int - 정수
숫자 표현, 사칙연산 등등 정수...

```dart
void main() {

  int number1 = 17 ~/ 4; //나누기
  int number2 = 17 % 4; //나머지 몫 구하기

  print(number1); //4
  print(number2); //1
  
}
```


### double - 소수
소수는 나누기할때 ``/`` 로 계산됨


```dart
void main() {

  double pi = 3.14 / 2;

  print(pi); //1.57
}
```

### String - 문자열

```dart
void main() {

  String name = '진주';

  print(name); //진주
  
}
```

### List - 리스트(배열)


```dart
void main() {
  
  List ages = [10, 11, 12];

  print(ages); //10, 11, 12
  print(ages[1]); //11

}
```

### Map - key: value

```dart
void main() {

  Map person = {'name': '차진주', 'age': '29'};

  print(person); //{name: 차진주, age: 29}
  
}
```

### var
변수를 지정할 때 앞에 타입을 써주지 않고,  
var 키워드를 쓰면 자동적으로 타입추론이 가능해진다.  
하지만 공식문서에서도 권장하듯이 나중에 꼬일 상황을 대비해서  
해당 타입을 명시해주는 것을 습관화하자!

```dart
void main() {

  var year = 2020;
  
  print(year); //2020
  
}
```

var 키워드로 변수를 선언하고,  
아래와 같이 문자열 타입의 값을 주려고 하면 에러가 난다.    
이미 처음에 int 타입으로 선언이 되었기 때문이다.

```dart
void main() {

  var year = 2020;
  year = '차진주';

  print(year); //Error
  
}
```

주의해서 사용을 해주자!

### final
- 값을 한 번만 설정 가능
- 값이 수정이 안됨
- 컴파일 시점이 아니라,
  컴파일 된 파일을 유저들이 설치를 해서 실행할 때 (런타임) 값이 대입이 된다.  
- const 보다는 속도가 느리지만 class에서 최초로 한 번 값을 바꿀 수 있기 때문에 좀 더 유연하다.
  


우리가 작업중에 실수할 수도 있으니까,   
값이 바뀌는 걸 방지해주는 역할을 한다.

이 때도 자동 타입추론이 가능해서   
``final pi = 3.14;`` 요로코롬  
final 뒤에 double 이란 타입을 명시해주지 않아도  
자동으로 double 타입을 추론해주기 때문에 문제가 없다.


```dart
void main() {

  final double pi = 3.14;
  
  print(pi); //3.14
  
}
```

값을 수정하려고 하면 에러가 난다.


```dart
void main() {

  final double pi = 3.14;
  pi = 4.5;

  print(pi); //Error
  
}
```


### const
- 상수
- 컴파일 시점에서 상수가 되는데 암묵적으로는 final 이라고도 함


final 과 마찬가지로 값이 바뀌질 않는다.

둘다 고정값이라고 보면 되는데,  
왜 같은 기능이 두개나 있냐고?!  

class 에서 이 두개의 키워드는 달라진다.

final은 처음에 class에서 값을 정의(선언)만 해놓고  
나중에 생성자를 통해서 최초의 1번만 값을 바꿀 수 있는데, 

const는 값을 바꿀 수 없다.
그래서 const는 class에서 값 선언할 때 무조건 값 대입까지 완벽히 해놔야 한다. 
고정된 값이라서...

결국 동작할 때는 똑같지만!  
final은 런타임 시점에서, const는 컴파일 시점에서 값이 들어가는거라  
const는 프로그램 만들때 세팅이 되기 때문에 좀 더 빠르다.  
사용자들에게 배포할 때 이미 값이 들어간 상태라 final보다 속도가 빠른 편이다.  

상황에 맞게 쓰면된다.


```dart
void main() {

  const pi = 3.14;

  print(pi); //3.14
  
}
```

요경우 출력하면 당연히 에러겠지?!

```dart
void main() {

  const pi = 3.14;
  pi = 2.7;

  print(pi); //Error
  
}
```

# Control flow statements

### if / else if / else

- () 괄호 안에 조건이 true 이면 실행 됨


```dart
void main() {

  if (true) {
    print('참'); //참
  }
  
}
```

- () 괄호 안에 조건이 false 이면 else 해당하는 로직이 실행 됨


```dart
void main() {

  if (false) {
    print('참');
  } else {
    print('거짓'); //거짓
  }
  
}
```

```dart
void main() {

  bool b = true;

  if (b) {
    print('참'); //참
  } else {
    print('거짓');
  }
  
}
```

``&&`` AND 연산자를 이용할 수도 있는데,   
이 경우네는 b2 도 true 여야 참이 뜬다.


```dart
void main() {

  bool b = true;
  bool b2 = false;
  bool b3 = true;

  if (b && b2 && b3) {
    print('참');
  } else {
    print('거짓'); //거짓
  }
  
}
```

``>=`` 요로코롬 비교 연산자를 이용할 수도 있다.

```dart
void main() {

  int year = 2020;
  bool b = year >= 2000;

  if (b) {
    print('참'); //참
  } else {
    print('거짓');
  }
  
}

```

``==`` 같다 / ``!=`` 같지 않다

```dart
void main() {

  int year = 1900;
  bool b = year != 2000;

  if (b) {
    print('참'); //참
  } else {
    print('거짓');
  }
  
}

```

- ``else if`` 조건 추가

```dart
void main() {

  int score = 77;

  if (score >= 90) {
    print('수');
  } else if (score >= 80) {
    print('우');
  } else if (score >= 70) {
    print('미'); //미
  } else {
    print('기타점수');
  }
  
}
```

연산자 종류는 여러가지니까 공식문서나 구글링을 통해 훑어보자!


### for (part1)

(초기값; 조건문; 증감연산자) 로 구성이 되는데,  
초기값 ``int month = 1;`` 부분은 처음에 딱 1번만 실행된다.  
그 다음, ``month <= 12;`` 비교연산자를 확인해서   
month 가 12보다 작거나 같으면(true) ``month++`` +1을 해준다.

이런식으로 계속 실행하면서 month 가 13이 되었을 때,  
조건이 false가 되니 for문에서 빠져나온다.

```dart
void main() {

  for (int month = 1; month <= 12; month++) {
    print(month);
  }
  
}
```

```dart
//console창 결과는?
1
2
3
4
5
6
7
8
9
10
11
12
```

### for (part2_간편한 문법)

요즘은 더 간편하게 이런식으로도 작성한다.

``(var age in ages)``  
in 뒤에 ages를 넣어주고, var age 부분은 초기 선언값과 동일하다(어떤 변수를 쓰겠다).  
ages 를 순차적으로 하나씩 돌면서 변수 age에 세팅이 된다.  
그래서 하나씩 출력이 된다.  


```dart
void main() {

  List ages = [10, 11, 12];
  
  for (var age in ages) {
    print(age);
  }
  
}
```

```dart
//console창 결과는?
10
11
12
```

### while

``year += 1;`` 는 ``year = year + 1;`` 또는 ``year++`` 과 같은 말이다.

if 문은 한 번 실행하면 끝나는데  
while 문은 조건이 충족될 때까지 끊임없이 돈다.  

브레이크를 걸지 않으면 무한루프 돌다가 컴퓨터가 뻑날 수 있으니 주의하자!

```dart
void main() {

  int year = 2010;
  while (year < 2016) {
    year += 1;
    print(year);
  }
  
}
```

```dart
//console창 결과는?
2011
2012
2013
2014
2015
2016
```

# 함수

### 기본 함수


```dart
void main() {

  int result = 1 + 2;
  print(result); //3
  
}
```

반환값이 없는 void 타입을 제외하고    
return 이 있다면 리턴 타입을 맨 앞에 정해주는데,  
이 경우에는 int 타입을 주었다.  

물론 타입을 아예 없애고 쓸 수 도 있지만 만약을 위해서 타입 명시는 해주자!  


```dart
int add(int a, int b) {
  return a + 2;
}

void main() {
  int result = add(1, 2);
  print(result); //3
}
```


### fibonacci 피보나치

위키백과를 빌어보자면,

>제0항을 0, 제1항을 1로 두고, 둘째 번 항부터는 바로 앞의 두 수를 더한 수로 놓는다.  
1번째 수를 1로, 2번째 수도 1로 놓고, 3번째 수부터는 바로 앞의 두 수를 더한 수로 정의하는 게   
좀더 흔하게 알려져 있는 피보나치 수열이다. 
>
이 둘 사이에는 시작점이 다르다는 정도를 빼면 사실상 동일하다.
>
>그 중에서 16 번째 항까지만 나열해 보자면,
(0), 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987

0번째 0과 첫번째 1을 더하면 두번째 자리에 그 더한 값인 1을 놓고,  
두번째 1과 세번째 2를 더하면 네번째 자리는 그 둘을 더한 값 3을 놓고,  
네번째 3과 다섯번째 5를 더하면 여섯번째 자리는 그 둘을 더한 값 8을 놓고...   

뭐 이런 식이다.

``int result = fibonacci(3);``   
3번째 항을 구하고 싶을 경우, 파라미터로 3을 넣어주면?    
결과로 3번째 항의 2가 나온다.


```dart
int fibonacci(int n) {
  if (n == 0 || n == 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

void main() {
  int result = fibonacci(3);
  print(result); //2
}
```

피보나치 함수는 재귀함수 라는 것을 쓰는데  
함수 안에 함수를 호출한다.  
코드로 살펴보자.  

```dart
int fibonacci(int n) {
  if (n == 0 || n == 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

void main() {
  int result = fibonacci(1);
  print(result);
}
```


파라미터로 1을 주었다.  
``int fibonacci(int n)`` 여기서 ``(int n)``에 3이 들어간다.  
``if (n == 0 || n == 1)`` || OR 연산자가 보이는데    
``(n == 0 || n == 1)`` 첫번째 조건문과 두번째 조건문 중에서 하나라도 true면 전체 조건은 true가 된다.  
이 때 n = 1 이니까 두번째 조건문이 true가 되면서 조건문 전체가 true가 된다.  
``return n;`` 이렇게 바로 1이 리턴되서,    
두번째 코드인 ``return fibonacci(n - 1) + fibonacci(n - 2);`` 는 실행되지 않고 바로 콘솔에 1이 반환되는 것이다.



# arrow syntax



```dart
void main() {
  List ages = [10, 11, 12];
  var filteredAges = ages.where((age) => age > 10);
  print(filteredAges); //(11, 12)

  // flybyObjects.where((name) => name.contains('turn')).forEach(print);
}
```

(11, 12) 말고  
한 줄씩 출력하고 싶다면?  

```dart
void main() {
  List ages = [10, 11, 12];
  var filteredAges = ages.where((age) => age > 10);
  filteredAges.forEach(print);

  // flybyObjects.where((name) => name.contains('turn')).forEach(print);
}
```

```dart
//console창 결과는?
11
12
```

이 때,  
변수를 따로 선언하지 않고 바로 호출을 해주면  

```dart
void main() {
  List ages = [10, 11, 12];

  ages.where((age) => age > 10).forEach(print);

  // flybyObjects.where((name) => name.contains('turn')).forEach(print);
}

```

```dart
//console창 결과는?
11
12
```

이런식으로 결과는 같다.  
실제로도 이렇게 많이 쓴다.

이제 공식문서의 예제로 살펴보자.

```dart
void main() {
  var flybyObjects = ['abc', 'yourturn', 'hello'];

  flybyObjects.where((name) => name.contains('turn')).forEach(print); //yourturn
}
```

여기서 ``name.contains('turn')`` 이 부분은  

```dart
void main() {
  String name = '홍길동';
  print(name.contains('길동')); //true
}
```

해당 스트링에 '길동' 이라는 문자열을 포함하고 있냐?  
있다면 true 를 리턴하는 사전에 정의된 메소드 이다.  

```dart
void main() {
  var flybyObjects = ['abc', 'yourturn', 'myturn', 'hello'];

  flybyObjects.where((name) => name.contains('turn')).forEach(print);
}
```

```dart
//console창 결과는?
yourturn
myturn
```

즉,  
이 코드는 turn 이라는 문자열을 포함한 단어가 2개니까  
forEach 를 통해  
yourturn 과 myturn 을 한 줄씩 뱉어내게 된다.  
각각 출력이 되는 것이다.  

# 주석

```dart
void main() { //호잇

  /**
   * 여러줄
   * 주석을
   * 함써봅세
   */

}//히햐
```

# imports

현재 파일 말고 다른 파일에 있는 함수라던지 변수를 가져올 때 맨 상단에서 불러오는 것이다.  

소스가 길어지거나 복잡해지면 파일을 분리하지 않느냐?!  
분리된 애들을 불러와서 쓸 때!  
물론 라이브러리라던지 갖다 쓸 때도 사용해준다.

```dart
// Importing core libraries
import 'dart:math';

// Importing libraries from external packages
import 'package:test/test.dart';

// Importing files
import 'path/to/my_other_file.dart';
```

# Classes

변수와 함수를 하나의 주머니에 담아두는 곳이다.  

class 안의 함수를 method 라고 한다.

예를 들어,  
Person 이라는 주머니에는 사람에 연관된 변수와 함수들이 있다.  
Person 클래스라고 정의를 하고  
클래스 안에는 그 사람의 이름과 나이가 있고  
그런 데이터 타입들은 변수로 정의를 한다.  
그리고 잔다거나 일하는 행동들은 함수로 정의를 한다.

코딩을 하다보면 코드가 복잡해지고 길어지는데  
이럴 때 우리는 어떤 변수와 함수를 사용할지 힘들어진다.

그럴 때,  
클래스를 만들어 주면  
아~ 저런 함수 이런 변수는 저 클래스에 있었지!  
라고 머릿속에 이미지화해서 코딩을 좀 더 쉽게 할 수 있다.

이런 코딩 방법은 객체지향 프로그래밍이라고 한다.

간단한 예제로 살펴보자.

```dart
class Person {
  //클래스를 만들고 속성을 정의
  int age;
  String name;

  Person(int age, String name) {
    //클래스 이름과 동일한 함수를 만듦. 생성자가 만들어진 것이다.
    //이 생성자에서는 초기화를 하는데,
    this.age = age;
    this.name = name;
    //이런식으로 전달받은 파라미터를 클래스 안에 있는 멤버변수에 대입해준다.
    //이때 this 는 클래스 내부의 변수를 가르키는 예약된 키워드이기 때문에 그냥 외워주자.
  }
}

void main() {
  Person person = Person(20, '철수');
  //맨처음 데이터 타입 자리에 클래스 이름을 선언해주고,
  //자신이 원하는 변수명 기입 (보통 클래스 이름과 동일하게 간다)
  //대입 연산자 사용(오른쪽 값을 왼쪽에 넣겠다)
  //생성자(넘겨줄 인자값) 호출
  //person 인스턴스가 생성된다.

  Person person2 = Person(21, '영희');
  Person person3 = Person(24, '수진');
}
```

``Person person = Person(20, '철수');``  
보통 클래스 이름과 동일하게 변수 선언을 해준다.

이렇게 class 라는 틀을 이용해서 계속해서 객체를 만들어낼 수 있다.

```dart
class Person {
  int age;
  String name;

  Person(int age, String name) {
    this.age = age;
    this.name = name;
  }

  void study() {
    //study 라는 함수 정의. Method
    print('$name study');
  }
}

void main() {
  Person person = Person(20, '철수');
  Person person2 = Person(21, '영희');
  Person person3 = Person(24, '수진');

  person.study(); //철수 study
  person2.study(); //영희 study
  person3.study(); //수진 study
}

```

```dart
//console창 결과는?
철수 study
영희 study
수진 study
```

각각 다른 타입의 데이터를 갖고있는 person 을  
동일한 메소드를 이용해서 출력할 수 있다.


많이 쓰는 패턴으로 살펴보자.

```dart
...


 Person(int age, String name) {
    this.age = age;
    this.name = name;
  }


...
```

상단 코드 부분에 몇가지를 생략하고,  
``Person(this.age, this.name);`` 로 바꿔주면

파라미터로 넘어온 값이 자동으로 멤버변수에 대입된다.

```dart
class Person {
  int age;
  String name;

  Person(this.age, this.name); //바뀐 부분

  void study() {
    //study 라는 함수 정의. Method
    print('$name($age)가 공부합니다.');
  }
}

void main() {
  Person person = Person(20, '철수');
  Person person2 = Person(21, '영희');
  Person person3 = Person(24, '수진');

  person.study(); //철수(20)가 공부합니다.
  person2.study(); //영희(21)가 공부합니다.
  person3.study(); //수진(24)가 공부합니다.
}
```

```dart
//console창 결과는?
철수(20)가 공부합니다.
영희(21)가 공부합니다.
수진(24)가 공부합니다.
```

이외에도  
이름이 있는 생성자도 사용할 수 있는데  

```dart
class Person {
  int age;
  String name;

  Person(this.age, this.name);

  Person.age(int age) { //이름있는 생성자
    this.age = age;
    this.name = '손님';
  }

  void study() {
    print('$name($age)가 공부합니다.');
  }
}

void main() {
  Person person = Person(20, '철수');
  Person person2 = Person(21, '영희');
  Person person3 = Person(24, '수진');

  Person person4 = Person.age(29);
  person4.study(); //손님(29)가 공부합니다.
}
```

```dart
//console창 결과는?
손님(29)가 공부합니다.
```

이렇게 호출이 되는데  
``this.name = '손님';`` 부분이 상단 생성자의 역할과 동일해서 별로다.

```dart
class Person {
  int age;
  String name;

  Person(this.age, this.name);

  Person.age(int age) : this(age, '손님'); // : 상단 생성자 대입

  void study() {
    print('$name($age)가 공부합니다.');
  }
}

void main() {
  Person person = Person(20, '철수');
  Person person2 = Person(21, '영희');
  Person person3 = Person(24, '수진');

  Person person4 = Person.age(29);
  person4.study(); //손님(29)가 공부합니다.
}
```

```dart
//console창 결과는?
손님(29)가 공부합니다.
```

그래서 보통 이런식으로도 쓴다.

공식문서를 살펴보자.

```dart
class Spacecraft {
  String name;
  DateTime launchDate;

  // Constructor, with syntactic sugar for assignment to members.
  Spacecraft(this.name, this.launchDate) {
    // Initialization code goes here.
    name = name + '님';
  }

  // Named constructor that forwards to the default one.
  Spacecraft.unlaunched(String name) : this(name, null);
  //이름있는 생성자 : 이름만 넘겼을 경우~ 즉, 발사일이 없으면 null이 넘겨진다.

  int get launchYear => launchDate?.year; // read-only non-final property

  // Method.
  void describe() {
    print('Spacecraft: $name');
    if (launchDate != null) {
      int years = DateTime.now().difference(launchDate).inDays ~/ 365;
      print('Launched: $launchYear ($years years ago)');
    } else {
      print('Unlaunched');
    }
  }
}

void main() {
  Spacecraft spacecraft = Spacecraft('진주', DateTime.now());

  print(spacecraft); //Instance of 'Spacecraft'
  print(
      '이름: ${spacecraft.name}, 발사일: ${spacecraft.launchDate}'); //이름: 진주님, 발사일: 2020-02-20 15:42:44.520999
}
```

```dart
//console창 결과는?
Instance of 'Spacecraft'
이름: 진주님, 발사일: 2020-02-20 15:42:44.520999
```


``print(spacecraft);`` 는 출력시 데이터 타입만 출력을 해준다.

``print('이름: ${spacecraft.name}, 발사일: ${spacecraft.launchDate}');``  
요로코롬  
``&`` 달러 표시로 변수를 꺼낼 수 있다.  
``.`` 을 이용해 변수안에 변수를 끄낸다.


``int get launchYear => launchDate?.year;`` 부분을 보자.

```dart
class Spacecraft {
  String name;
  DateTime launchDate;

  Spacecraft(this.name, this.launchDate) {
    name = name + '님';
  }

  Spacecraft.unlaunched(String name) : this(name, null);

  int get launchYear => launchDate?.year; // read-only non-final property
  //get 키워드가 있으면 내가 직접 값을 세팅할 수 없다.
  //.year 는 지금 갖고있는 DateTime 에서 년도에 해당하는 값만 리턴해줌
  //?. 은 값이 null 이 아닌 경우에만 반환을 해줌

  // Method.
  void describe() {
    print('Spacecraft: $name');
    if (launchDate != null) {
      int years = DateTime.now().difference(launchDate).inDays ~/ 365;
      print('Launched: $launchYear ($years years ago)');
    } else {
      print('Unlaunched');
    }
  }
}

void main() {
  Spacecraft spacecraft = Spacecraft('진주', DateTime.now());

  print(spacecraft.launchYear); //2020
}
```

``('진주', DateTime.now())`` 여기서 데이트타임 부분에 null을 주면?

```dart
...


void main() {
  Spacecraft spacecraft = Spacecraft('진주', null);

  print(spacecraft.launchYear); //null
}
```

null을 반환한다.

``describe`` 메소드를 보자.

```dart
class Spacecraft {
  String name;
  DateTime launchDate;

  Spacecraft(this.name, this.launchDate) {
    name = name + '님';
  }

  Spacecraft.unlaunched(String name) : this(name, null);

  int get launchYear => launchDate?.year;

  // Method.
  void describe() {
    print('Spacecraft: $name');
    if (launchDate != null) {
      int years = DateTime.now().difference(launchDate).inDays ~/ 365;
      // 현재 날짜에서 몇일이나 지났는지 뺀 값이 yeart에 담기는 로직이다.
      print('Launched: $launchYear ($years years ago)');
    } else {
      print('Unlaunched');
    }
  }
}

void main() {
  Spacecraft spacecraft = Spacecraft('진주', DateTime.now());

  spacecraft.describe();
}
```

```dart
//console창 결과는?
Spacecraft: 진주님
Launched: 2020 (0 years ago)
```

우주선이랑~  
언제 발사되었는지~ 몇년전까지 출력이 된다.

if문이니까 조건인 ``(launchDate != null)`` 에서  
값이 없는 null 이면 else 부분인  
``print('Unlaunched');`` 출력되겠지?!


# 상속 Inheritance

상속은 기존 class 를 확장하는 것이다.

예제로 살펴보자.

```dart
class Orbiter extends Spacecraft { //Orbiter 는 Spacecraft 클래스의 자식 클래스라고 볼 수 있음
  num altitude; //고도라는 속성을 하나 더 갖고있음
  Orbiter(String name, DateTime launchDate, this.altitude)
      : super(name, launchDate);
}
```

``num`` 은 기존 int 와 double 타입의 기반이 되는 부모 클래스 데이터 타입이다.  
그래서 int 와 double 타입이 모두 담길 수 있다.

```dart
class Spacecraft {
  String name;
  DateTime launchDate;

  Spacecraft(this.name, this.launchDate) {
    name = name + '님';
  }

  Spacecraft.unlaunched(String name) : this(name, null);

  int get launchYear => launchDate?.year;

  // Method.
  void describe() {
    print('Spacecraft: $name');
    if (launchDate != null) {
      int years = DateTime.now().difference(launchDate).inDays ~/ 365;
      print('Launched: $launchYear ($years years ago)');
    } else {
      print('Unlaunched');
    }
  }
}

class Orbiter extends Spacecraft {
  //Orbiter 는 Spacecraft 클래스의 자식 클래스라고 볼 수 있음
  num altitude; //고도라는 속성을 하나 더 갖고있음
  Orbiter(String name, DateTime launchDate, this.altitude)
      : super(
            name, launchDate); //super 는 부모 생성자(name, launchDate) 를 호출하겠다. 는 의미
}

void main() {
  Orbiter orbiter = Orbiter('진주', DateTime.now(), 100);
  orbiter.describe();

  Spacecraft spacecraft = Orbiter('진주', DateTime.now(), 100); //부모는 자식의 타입을 받을 수도 있다
  spacecraft.describe();
}
```

```dart
//console창 결과는?
Spacecraft: 진주님
Launched: 2020 (0 years ago)
Spacecraft: 진주님
Launched: 2020 (0 years ago)
```

만약에 자식과 부모가 동일한 이름의 메소드가 정의되어 있다면?  

![2020-02-20 16-25-01 2020-02-20 16_25_53](https://user-images.githubusercontent.com/55340876/74910389-bebb5200-53fd-11ea-97a0-2e2bcb55f719.gif)


``// TODO: implement describe`` 이런식으로 할일을 잊지 말라고 주석처리로 알려준다.  
자식이 describe() 호출했을 때, 해야할 일을 정의해주면 된다.

```dart
class Spacecraft {
  String name;
  DateTime launchDate;

  Spacecraft(this.name, this.launchDate) {
    name = name + '님';
  }

  Spacecraft.unlaunched(String name) : this(name, null);

  int get launchYear => launchDate?.year;

  // Method.
  void describe() {
    print('Spacecraft: $name');
    if (launchDate != null) {
      int years = DateTime.now().difference(launchDate).inDays ~/ 365;
      print('Launched: $launchYear ($years years ago)');
    } else {
      print('Unlaunched');
    }
  }
}

class Orbiter extends Spacecraft {
  num altitude;
  Orbiter(String name, DateTime launchDate, this.altitude)
      : super(name, launchDate);

  @override //부모의 메소드를 가리고 재정의 하겠다 (오버라이딩 한다)
  void describe() {
    print('---자식의 정보---');
    super.describe(); //부모 클래스의 describe() 호출함
    print('altitude: $altitude');
  }
}

void main() {
  Spacecraft spacecraft = Spacecraft('진주', DateTime.now());
  spacecraft.describe();

  Orbiter orbiter = Orbiter('진주', DateTime.now(), 100);
  orbiter.describe();

  // Spacecraft spacecraft =
  //     Orbiter('진주', DateTime.now(), 100); //부모는 자식의 타입을 받을 수도 있다
  // spacecraft.describe();
}
```

```dart
//console창 결과는?
Spacecraft: 진주님
Launched: 2020 (0 years ago)
---자식의 정보---
Spacecraft: 진주님
Launched: 2020 (0 years ago)
altitude: 100
```

이 떄, 궁금점.
부모는 자식의 타입을 받을 수도 있다고 했다.  
그럼 부모의 describe() 가 호출되는가?  
자식의 describe() 가 호출되는가?  

실행해보자.

```dart
class Spacecraft {
  String name;
  DateTime launchDate;

  Spacecraft(this.name, this.launchDate) {
    name = name + '님';
  }

  Spacecraft.unlaunched(String name) : this(name, null);

  int get launchYear => launchDate?.year;

  // Method.
  void describe() {
    print('Spacecraft: $name');
    if (launchDate != null) {
      int years = DateTime.now().difference(launchDate).inDays ~/ 365;
      print('Launched: $launchYear ($years years ago)');
    } else {
      print('Unlaunched');
    }
  }
}

class Orbiter extends Spacecraft {
  num altitude;
  Orbiter(String name, DateTime launchDate, this.altitude)
      : super(name, launchDate);

  @override //부모의 메소드를 가리고 재정의 하겠다 (오버라이딩 한다)
  void describe() {
    print('---자식의 정보---');
    super.describe(); //부모 클래스의 describe() 호출함
    print('altitude: $altitude');
  }
}

void main() {
  // Spacecraft spacecraft = Spacecraft('진주', DateTime.now());
  // spacecraft.describe();

  // Orbiter orbiter = Orbiter('진주', DateTime.now(), 100);
  // orbiter.describe();

  Spacecraft spacecraft =
      Orbiter('진주', DateTime.now(), 100); //부모는 자식의 타입을 받을 수도 있다
  spacecraft.describe();
}
```

```dart
//console창 결과는?
---자식의 정보---
Spacecraft: 진주님
Launched: 2020 (0 years ago)
altitude: 100
```

이런식으로 어떤 데이터 타입이던 상관없이 자식의 인스턴스를 가져온다.

_하지만, 자식은 부모의 인스턴스를 가져올 수 없다!_

# Mixins

```dart
class Spacecraft {
  String name;
  DateTime launchDate;

  Spacecraft(this.name, this.launchDate) {
    name = name + '님';
  }

  Spacecraft.unlaunched(String name) : this(name, null);

  int get launchYear => launchDate?.year;

  // Method.
  void describe() {
    print('Spacecraft: $name');
    if (launchDate != null) {
      int years = DateTime.now().difference(launchDate).inDays ~/ 365;
      print('Launched: $launchYear ($years years ago)');
    } else {
      print('Unlaunched');
    }
  }
}

class Orbiter extends Spacecraft {
  num altitude;
  Orbiter(String name, DateTime launchDate, this.altitude)
      : super(name, launchDate);

  @override
  void describe() {
    print('---자식의 정보---');
    super.describe();
    print('altitude: $altitude');
  }
}

class Piloted {
  int astronauts = 1;
  void describeCrew() {
    print('Number of astronauts: $astronauts');
  }
}

class PilotedCraft extends Spacecraft with Piloted {
  PilotedCraft(String name, DateTime launchDate) : super(name, launchDate);
}

void main() {
  PilotedCraft pilotedCraft = PilotedCraft('홍길동', DateTime.now());
  pilotedCraft.describe();
  pilotedCraft.describeCrew();

  // Spacecraft spacecraft = Spacecraft('진주', DateTime.now());
  // spacecraft.describe();

  // Orbiter orbiter = Orbiter('진주', DateTime.now(), 100);
  // orbiter.describe();

  // Spacecraft spacecraft =
  //     Orbiter('진주', DateTime.now(), 100); //부모는 자식의 타입을 받을 수도 있다
  // spacecraft.describe();
}
```

Piloted 클래스를 선언.  
Spacecraft 클래스를 부모 클래스로 상속을 받고,  
Piloted 라는 클래스를 믹스인으로 with 키워드를 이용해서  
PilotedCraft 라는 또다른 클래스 선언.

이것은 Piloted 클래스의 속성과 메소드를 동일하게 상속받는 효과를 얻을 수 있다.  
상단에서 extends 한 것과 동일하다고 보면 된다.

```dart
//console창 결과는?
Spacecraft: 홍길동님
Launched: 2020 (0 years ago)
Number of astronauts: 1
```

여기서 주의할 점은  
Piloted 클래스 내부에 생성자를 만들면 안된다.  

만들면 바로 에러난다.  
생성자가 정의되어 있는 클래스라서 믹스인으로 사용할 수 없다.


# Interfaces and abstract classes

## implements

다트의 Interfaces 라는 키워드는 없다.  
대신 모든 클래스는 ``implements`` 라는 키워드로 재정의 될 수 있다.

예제를 보자.


![2020-02-20 16-51-06 2020-02-20 16_51_26](https://user-images.githubusercontent.com/55340876/74912085-4b1b4400-5401-11ea-8c05-9e311eb17f03.gif)


```dart
...


class MockSpaceship implements Spacecraft {
  @override
  DateTime launchDate;

  @override
  String name;

  @override
  void describe() {
    // TODO: implement describe
  }

  @override
  // TODO: implement launchYear
  int get launchYear => null;
  // ···
}


...
```

이전에는 extends 를 이용해서 상위 수퍼 클래스의 멤버들을 그대로 상속받아 왔는데,  
``implements`` 키워드를 이용하면  
상위 클래스의 변수와 메소드들을 **싸그리 모두** 재정의 해줘야한다.  
구현체가 기존에 있던말던 싹다 재정의!  
상위의 있는 것들이 먹히지 않는다.  

상위 클래스의 동일한 뼈대를 이용해서 새로운 클래스를 정의하겠다 라는 용도다.

```dart
class Spacecraft {
  String name;
  DateTime launchDate;

  Spacecraft(this.name, this.launchDate) {
    name = name + '님';
  }

  Spacecraft.unlaunched(String name) : this(name, null);

  int get launchYear => launchDate?.year;

  // Method.
  void describe() {
    print('Spacecraft: $name');
    if (launchDate != null) {
      int years = DateTime.now().difference(launchDate).inDays ~/ 365;
      print('Launched: $launchYear ($years years ago)');
    } else {
      print('Unlaunched');
    }
  }
}

class Orbiter extends Spacecraft {
  num altitude;
  Orbiter(String name, DateTime launchDate, this.altitude)
      : super(name, launchDate);

  @override
  void describe() {
    print('---자식의 정보---');
    super.describe();
    print('altitude: $altitude');
  }
}

class Piloted {
  int astronauts = 1;
  void describeCrew() {
    print('Number of astronauts: $astronauts');
  }
}

class PilotedCraft extends Spacecraft with Piloted {
  PilotedCraft(String name, DateTime launchDate) : super(name, launchDate);
}

class MockSpaceship implements Spacecraft {
  @override
  DateTime launchDate;

  @override
  String name;

  MockSpaceship(this.launchDate, this.name);

  @override
  void describe() {
    // TODO: implement describe
  }

  @override
  // TODO: implement launchYear
  int get launchYear => null;
  // ···
}

void main() {
  MockSpaceship mockSpaceship = MockSpaceship(DateTime.now(), 'Cha');
  print(mockSpaceship.name);
}
```

```dart
//console창 결과는?
Cha
```

## abstract class

![2020-02-20 17-00-35 2020-02-20 17_00_51](https://user-images.githubusercontent.com/55340876/74912726-94b85e80-5402-11ea-9289-b905cd0f3b79.gif)

```dart
...


abstract class Describable {
  void describe();

  void describeWithEmphasis() {
    print('=========');
    describe();
    print('=========');
  }
}

class Unit extends Describable {
  @override
  void describe() {
    // TODO: implement describe
  }
}


...
```

``@override`` 는  
부모에 있는 동일한 메소드가 있는데 그걸 사용하지 말고 요 자식의 메소드를 재정의한다.   
라고 이해하자!


# Async

예전 게시물을 참고하자.  

## [[Dart] future & async-await](http://localhost:8000/dart/200203_futureAsync/)



<br/>



---
---

# Reference  
- [코딩의신 유튜브](https://www.youtube.com/channel/UCdgj6CLA8xpOjJUu_PTPxXw)
- [dart 문법 (공식문서)](https://dart.dev/samples)

