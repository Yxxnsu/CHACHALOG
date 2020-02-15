---
title: '💎 [Flutter] 클래스와 위젯 개념정리'
date: 2020-02-11 01:21:00
category: 'Flutter'
draft: false 
showToc: true
---

# Class and Widget

## class 개념 1

```go
Class {  
	  속성: 액정, 카메라모듈, 홈버튼, 스크린  
      기능: 전화걸기, 사진찍기, 인터넷검색  
      }  
```
      
여기서 만들어진 사물을 인스턴스라 한다.  
즉, 스마트폰 설계도면이 Class 라면 설계도면대로 만들어진 스마트폰 하나하나가 인스턴스이다.  
각 스마트폰은 같은 설계도에 의해 만들어졌기에 모양, 기능은 완벽히 동일하지만  
시리얼 넘버등에 의해서 인스턴스로서의 각 스마트폰은 확실히 구별 가능함.  
      
```go
Class {  
	  속성: 눈, 코, 입  
      기능: 말하기, 먹기, 걷기  
      }  
```
      
이 정보는 컴퓨터의 메모리상에 할당된다.  
프로그래밍 상에서 객체란,  
메모리에 할당 되어진 순간의 Class를 의미함.  

이 Class를 기반으로 한 사람이 코드상에 새롭게 만들어질 때 이를 인스턴스라 함.  

- 프로그래밍 상에서의 클래스란?
  - 객체가 가져야 하는 속성과 기능을 정의한 내용을 담고 있는 설계도 역할
- 프로그래밍 상에서의 객체란?
  - 클래스가 정의된 후 메모리상에 할당되었을 때 이를 객체라고 함
- 프로그래밍 상에서의 인스턴스란?
  - 클래스의 속성과 기능을 똑같이 가지고 있고 프로그래밍 상에서 사용되는 대상

---

class 명은 항상 대문자로 시작한다.  
변수의 값은 추후에 필요시 지정하여도 된다.  
코드의 끝에는 항상 ; (세미콜론)을 해준다.  
데이터타입을 항상 주의해서 사용해주자. (var 키워드를 통해 타입추론이 가능하지만 직접 타입을 지정하는 것을 습관화 해주자!)  


객체를 정의할 때 기능이 항상 필요한 것은 아니다.  
가령,  
책을 정의한다면 기능이 필요없이 속성으로만,  
표지가 하드커버인지 소프트커버인지~  
작가가 누구고~  
가격은 얼마인지~  
만 정의해도 아무 문제가 없듯이!  

코드를 통해 한 번 훑어보자.  

```go
class Person{
  String name;
  int age;
  String sex;
}

void main() {
  
  Person p1 = new Person(); 
  p1.age = 30;
  print(p1.age);
  
}
```

이 코드를 뜯어보자면,  

```go
class Person{
  String name;
  int age;
  String sex;
} 
```

- 하나의 완벽한 클래스가 생성됨.  
- 이 시점에서 메모리에 할당된 class를 객체라 부름. 객체가 등록된 것임!

``void main() {}`` 
- 메인함수 선언
- void 타입은 아무것도 반환하지 않는 타입이다.

``Person p1 = new Person();`` 
- Person 클래스 타입으로 p1이라고 부르는 새로운 인스턴스 생성. 
- 클래스를 통해 무한정 인스턴스를 생성한다면 이 변수명을 통해 각각의 인스턴스를 구별할 수 있음
- 새롭게 생성되는 인스턴스이므로 뒤에 new라는 키워드를 입력하고 Person 클래스의 생성자라는 것을 붙여주면 됨.
- 이로써 p1은 Person 클래스가 가진 모든 속성을 그대로 가지게 되며 다양한 방법으로 사용될 수 있음.

``p1.age = 30;``

- 이 부분에서는 p1 다음에 dot을 찍음으로,  
아래 사진처럼 Person 클래스에서 지정했던 속성들을 그대로 쓸 수 있음.

<img width="425" alt="1" src="https://user-images.githubusercontent.com/55340876/74588914-15aed900-5044-11ea-9180-054f387b9ca1.png">



``print(p1.age);`` 값을 출력해보면?  

``30`` 이 출력되는 것을 확인할 수 있다.

<img width="545" alt="2" src="https://user-images.githubusercontent.com/55340876/74588916-18a9c980-5044-11ea-8df7-a6b1fa2892c8.png">



---

## class 개념 2



이 함수는  
두개의 정수를 더해주는 기능을 가진 함수이다.

```go
addNumber(int num1, int num2){
  return num1 + num2;
}
```

- 함수명은 소문자로 시작한다.  
- 단어가 2개 이상 조합되면 가독성을 위해 두번째 단어부터는 첫글자를 항상 대문자를 사용한다. (Camel Case)  
- 함수명 뒤에는 함수의 인자값이 들어오는 괄호 () 가 반드시 존재해야 함. 
(전달되는 인자값이 없더라도 함수인 이상 반드시 기재)  
- 각 인자값은 콤마 , 로 구분해준다.
- 여기서는 정수니까 int 타입의 인자값을 2개 넣어줌. (이런 방식으로 여러개의 인자를 넣을 수 있다)
- 함수의 body 부분을 위해 중괄호로 {} 를 기재.
- 함수의 body 부분으로는 함수가 실행 할 기능들을 정의해준다.
- 함수가 두 수를 더한 값을 반환해주길 원한다면 앞에 return 이란 키워드를 붙여준다.
- 이제 이 함수는 두개의 숫자를 전달 받아서 더한 후, 
그 값을 반환하는 기능을 가진 함수이다.

이제 main 함수에서 이 addNumber 함수를 사용해보자.

```go
addNumber(3, 4); 
```

함수를 불러와서 사용할 때는 이런식으로 함수명과 괄호를 붙여주면 됨.  
이 함수는 인자로 두개의 숫자를 받아야함으로 괄호 안에 3, 4 라는 두개의 숫자를 넣어준다.

최종 코드
```go
class Person{
  String name;
  int age;
  String sex;
}

addNumber(int num1, int num2){
  return num1 + num2;
}

void main() {
  
  Person p1 = new Person();
  
  print(p1.age);
  
  addNumber(3, 4); 
  print(addNumber(3, 4));
}
```

출력을 해보면?  

<img width="596" alt="3" src="https://user-images.githubusercontent.com/55340876/74588920-1b0c2380-5044-11ea-82e8-19ed9e642a95.png">



콘솔창에 7이 출력되는 것을 확인할 수 있다.

---

## class 개념 3

```go
class Person{
  String name;
  int age;
  String sex; //클래스에서 정의한 이 변수들을 멤버변수 라고 함
  
  Person(String name, int age, String sex){
    this.name = name;
    this.age = age;
    this.sex = sex; 
  }
}


void main() {
  
  Person p1 = new Person('JinJoo', 29, 'female');
  Person p2 = new Person('Tom', 30, 'male');
  
  print(p1.age);
  print(p2.age);
  
  
  
}

```

코드를 뜯어보자.

```go
class Person{
  String name;
  int age;
  String sex;
 
 ...
```
- 클래스에서 정의한 이 변수들을 멤버변수 라고 함

```go
  Person(String name, int age, String sex){
    this.name = name;
    this.age = age;
    this.sex = sex; 
  }
  
...
```
- 생성자 생성 (이 생성자는 인스턴스가 생성될 때 딱 한번만 호출됨)
- 생성자의 인자를 입력했다는 것은 인스턴스 생성시, 호출될 때 이 3개의 인자를 반드시 입력받아야 한다는 것이다.  
그렇지 않으면 인스턴스가 생성되지 않는다.
- 생성자는 인스턴스를 생성함과 동시에 클래스에서 정의한 변수값을 할당받도록 강제해서  
우리가 원하는 값을 가진 인스턴스를 착오없이 만들 수 있도록 도와주는 역할을 함.
- 이제 생성자의 body내에서 여기 인자로 입력받은 데이터가 멤버변수로 대입되는 로직을 만들어줌.
- 현재 멤버변수와 생성자 인자의 변수명들이 똑같으므로 구분을 위해 this. 을 붙여서 멤버변수를 표시해준다.  
``this.name = name;`` : name 이란 이름에 인자값으로 무언가를 입력 받게 되면 이 값을 멤버변수에 할당해주게 된다.


```go
void main() {
  
  Person p1 = new Person('JinJoo', 29, 'female');
  Person p2 = new Person('Tom', 30, 'male');
  
...
```

<img width="696" alt="4" src="https://user-images.githubusercontent.com/55340876/74588921-1c3d5080-5044-11ea-8d28-232aea4ab9c3.png">



하지만,  
현재 생성자는 인자가 몇개이건 반드시 그 순서 그대로 모든 값을 입력해야 하고,  
필요한 인자만 따로 골라서 입력받을 수도 없다.  
만약 이 순서와 갯수를 무시하면 에러가 발생한다.

이를 해결하기 위해 ``named argument`` 가 있다.

```go
  Person({String name, int age, String sex}){
  
...
```

- 중괄호 {} 로 묶어줌으로써 이제부터 인자들은 모두 선택사항으로 바뀜
- 인스턴스를 생성할 때, 생성자의 인자값을 아예 입력하지 않아도 됨
- 순서대로 입력하지 않아도 상관없음

최종코드로 확인해보자.

```go
class Person{
  String name;
  int age;
  String sex;
  
  Person({String name, int age, String sex}){
    this.name = name;
    this.age = age;
    this.sex = sex; 
  }
}


void main() {
  
  Person p1 = new Person(sex: 'male');
  Person p2 = new Person(age: 29);
  
  print(p1.sex);
  print(p2.age);
  
}

```


<img width="696" alt="5" src="https://user-images.githubusercontent.com/55340876/74588922-1d6e7d80-5044-11ea-8ff2-f0cf4d05cb6b.png">



요런식으로 사용할 수 있다!

잠깐!!  
여기서  
``age: 29`` 어디서 많이 본 것 같지 않나?!  

바로,  


<img width="634" alt="6" src="https://user-images.githubusercontent.com/55340876/74588923-1e9faa80-5044-11ea-9916-f1f8b27fec2e.png">



이는  
MaterialApp,  
Scaffold,  
AppBar ...  
위젯 등이 생성자의 많은 인자값들을 가지고 있고  
우리는 그 중 하나를 ``named argument``로 사용했던 것이다!

그래서 위젯명 앞에 new 라는 키워드를 사용해도 아무문제 없이 작동하는 것을 볼 수 있다.  
그렇다!    
지금까지 우리가 사용했던 모든 위젯들이 결국 클래스를 통해서 생성된 인스턴스였던 것이다.  

가령,  
텍스트 위젯은 텍스트 생성자를 통해서 문자열을 입력받은 인스턴스고,  
앱바 위젯은 앱바 생성자를 통해서 여러개의 인자값들을 ``named argument`` 형태로 필요한만큼 선별적으로 사용해서 만들어진 인스턴스였던 것이다.  

일반적으로 위젯을 클래스라고 자주 표현한다.  
하지만 좀 더 엄밀하게 위젯을 인스턴스라고 말하고싶다.  

어쨋든  
new 라는 키워드와 생성자를 통해서   
플러터 앱을 만들 때 끊임없이 위젯 인스턴스를 만들어내면서 코딩하는 것이 사실이기 때문이다.

하지만 광범위하게 본다면 위젯이 클래스라는 말이 틀린 것은 아니니 오해말자!

위젯의 본질이 무엇인지  
생성자와 ``named argument``에 대한 이해를 하고,  
어떤 형태로 dart 에서 활용되는지 이해하자!  






<br/>


---
---

# Reference  
- [코딩셰프 유튜브](https://www.youtube.com/channel/UC_2ge45JCuJH1z6VYt4iCgQ)

