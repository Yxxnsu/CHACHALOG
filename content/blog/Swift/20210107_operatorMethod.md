---
title: '🕊 [Swift] 연산자 메서드 / 우선순위 그룹'
date: 2021-01-07 23:00:00
category: 'Swift'
draft: false
showToc: true
---

# 연산자 메서드(Operator Methods)

연산자 메서드는 새로운 연산자를 만드는 것이 아님.  
<span style="color: red;">**기존 연산자가 새로운 형식을 지원하도록 확장 하는 것!!!**</span>

```swift
static func 연산자(파라미터) -> 리턴타입 {
    실행구문
}
```

이미 존재하는 연산자가 새로운 피연산자를 처리할 수 있도록 확장해줌.  
그래서 연산자 부분에는 **반. 드. 시.** 이미 존재하는 연산자가 와야함!!!

<연산자 메서드 구현시 주의할 점!>

- 연산자 메서드는 연산자가 갖고있는 우선순위와 결합규칙을 바꾸지 않음
- 가능한 원래 기능과 동일하거나 유사한 형태로 구현함
- 이미 존재하는 연산자의 파라미터와 리턴형을 일치시켜야 함  
  ex) `==` 연산자는 Bool형을 리턴하는데 Int형이나 String형을 리턴하게 하면 안됨!

```swift
"a" == "a"
```

상단 코드는 두 문자열 a를 비교하는 코드임.  
얘네가 서로 비교할 수 있는 이유는??  
`==` 연산자가 문자열을 비교하도록 구현되어 있어서임!

예시를 봅세!

![1](https://user-images.githubusercontent.com/55340876/110229203-f7679400-7f4a-11eb-8f5a-872bfd5c38a7.png)

구조체를 선언하고,  
새로운 인스턴스 p1과 p2를 생성했음.

얘네 둘을 비교해볼까?

![2](https://user-images.githubusercontent.com/55340876/110229202-f6cefd80-7f4a-11eb-900e-ba25c6b0299c.png)

에러 뿜ㅁㅁㅁ!!!

왜??  
컴파일러는 인스턴스 p1과 p2를 비교할 줄 모름;;  
그니까 내가 직접 비교 기능을 구현해줘야 함.

<span style="color: red;">**스위프트가 제공하는 대부분의 연산자는 연산자 메서드로 구현할 수 있지만,  
삼항 연산자와 할당 연산자는 불가능한 점을 알아두자!!**</span>

**연산자 메서드는 Point 구조체에서 구현해도 되지만,  
보통은 `extension`으로 구현함**

상단에 연산자 메서드 문법을 참고해서  
`==` 연산자가 Point 구조체를 비교하게끔 구현해보자.

![3](https://user-images.githubusercontent.com/55340876/110229201-f6366700-7f4a-11eb-9cd5-ceb7967410dd.png)

비교 기능을 구현할 때는 **`Equatable` 프로토콜을 채용**해서

`==` 연산자로 같음을 비교하거나~  
`!=` 연산자로 같지않음을 비교함.

> lhs 와 rhs 는 뭐야?  
> L과 R은 각각 왼쪽 방향(Left-hand Side)과 오른쪽 방향(Right-hand Side)을 뜻한다.  
> LHS검색은 변수가 대입 연산자의 왼쪽에 있을 때 수행하고,  
> RHS검색은 변수가 대입 연산자의 오른쪽에 있을 때 수행한다.

자, 이제 다시 인스턴스를 비교해보자.

![4](https://user-images.githubusercontent.com/55340876/110229200-f6366700-7f4a-11eb-9302-7b7244696bae.png)

정상적으로 비교하지?! 🤭  
사실 `Equatable` 내부에 연산자 메서드를 주석처리해도 정상적으로 비교가 되긴함.

![5](https://user-images.githubusercontent.com/55340876/110229199-f59dd080-7f4a-11eb-89cc-26d7ed5e1cc9.png)

Equatable 프로토콜을 채용해서  
컴파일러가 알아서 연산자 메서드를 구현해서 비교를 해준거임

단항 마이너스 `-` 연산자도 구현해봅세!  
단항 연산자를 구현할 때는 키워드로 연산자 위치를 선언해줘야함.  
연산자 기초에서 슥 봤지?

<center>
<img width="298" alt="6" src="https://user-images.githubusercontent.com/55340876/110229198-f59dd080-7f4a-11eb-9a38-713ca4166d7b.png">
</center>

`prefix` 키워드로 피연산자 앞에 붙게끔 **전치연산자**로 선언해주셈  
모든 속성에 부호를 바꾼 후,  
새로운 인스턴스를 리턴하게끔 구현함.

![7](https://user-images.githubusercontent.com/55340876/110229197-f5053a00-7f4a-11eb-9593-aab70b0e32c2.png)

새로운 인스턴스를 생성하고 확인해봅세.

![8](https://user-images.githubusercontent.com/55340876/110229195-f5053a00-7f4a-11eb-9a8a-f6f8951cd58a.png)

Baaaaaaam!

이번에는 증가 연산자를 구현해볼까?

![9](https://user-images.githubusercontent.com/55340876/110229194-f46ca380-7f4a-11eb-892b-09f76ef9edcb.png)

`postfix`는 위로 올라가서 안봐도 알겠음?!  
피연산자 뒤에 오는 **후치연산자**!!!  
현재 값을 리턴한 다음, 현재 값을 1씩 증가시키게끔!  
<span style="color: red;">**얘는 연산 도중에 현재 값을 덮어야해서 파라미터를 <u>입출력 파라미터</u>로 선언해야함!**</span>

예?? 입출력 파라미터 아직 안배웠는데여? Inout이 뭔데여??  
앞에 가서 배울거니까 이거는 걍 코드보고 '아~~~ ㅇㅋㅇㅋ 뭔말인줄 대충 아가릿' 정도로만 알아두삼!

리턴 값을 상수에 저장하고,  
속성에 저장된 값을 1씩 증가시키는 코드를 씀  
마지막으로 상수에 저장된 값을 리턴!

확인해봅세.

![10](https://user-images.githubusercontent.com/55340876/110229192-f46ca380-7f4a-11eb-8abd-1480489e13f4.png)

`p5` 값은 증가되지 않은 값임  
`p4`랑 동일하지예?

근데 `p4`는 1씩 증가된 값이 저장됐음.  
왜그런지 설명해볼 새럼~~~🙋🏻‍♀️

# 사용자 정의 연산자(Custom Operators)

기존에 없던 새로운 연산자를 구현하는 것이라서 가장 먼저! 연산자를 선언해야함  
연산자 선언은 모든 스코프에서 인식할 수 있도록 항상! 글로벌 스코프에서 선언함

```swift
prefix operator 연산자
postfix operator 연산자
infix operator 연산자
```

가장 먼저 위치를 선언하고,  
`operator` 키워드를 선언 후에 연산자를 씀

이 때 연산자에는 모든 특수문자를 쓸 수는 없고,

```swift
// 예약된 토큰(Reserved Tokens)
(, ), {, }, [, ], ., ,, :, ;, =, @, #, &(전치 연산자), ->, `, ?, !(후치 연산자)

// 첫번째 문자(First Character)
아스키 문자, /, =, -, +, !, *, %, <, >, &, |, ^, ?, ~
```

**First Character**에 나열된 것만 사용하자요!

두가지 규칙

1. 연산자를 가능한 단순한 형태로 선언하자!
2. 기존에 있는 연산자와 함께 사용했을 때 주의하자!

```swift
static prefix func 연산자(파라미터) -> 리턴타입 {
  실행구문
}

static postfix func 연산자(파라미터) -> 리턴타입 {
  실행구문
}

static func 연산자(파라미터) -> 리턴타입 {
  실행구문
}
```

새로운 단항 연산자를 만들어 봅세  
Int형의 연산자 메서드를 추가하고,  
현재 값을 2씩 증가시키도록 구현하자.

![11](https://user-images.githubusercontent.com/55340876/110229191-f3d40d00-7f4a-11eb-832c-c9087c6ed7d5.png)

연산자 위치에는 위에서 선언한 `+++` 연산자가 동일하게 와야함  
변수에 1을 저장하고 연산자를 써보자!

![12](https://user-images.githubusercontent.com/55340876/110229190-f3d40d00-7f4a-11eb-97c2-9af9946c9266.png)

a에 저장된 1값이 증가해서 3이 되는걸 볼 수 있음

이번엔 새로운 2항 연산자를 만들어 봅세..  
2항 연산자는 `infix` 키워드로 선언함

![13](https://user-images.githubusercontent.com/55340876/110229189-f33b7680-7f4a-11eb-9dcb-99fda7fd48f3.png)

연산자 메서드에서는 피연산자를 한번씩 곱한 후,  
두 결과를 더해서 리턴해줌

결과를 볼까?

![14](https://user-images.githubusercontent.com/55340876/110229188-f33b7680-7f4a-11eb-91c4-d8ed09ea811d.png)

`1 *+* 2` 는 정상적으로 4가 나오는데,  
`1 *+* 2 + 3` 은 컴파일 에러가 남

인접한 연산자 중에 하나가 정렬되지 않은 우선 순위 그룹에 추가되어 있다는 에러임.  
구현한 연산자는 우선순위 그룹을 따로 지정하지 않았는데 이 때는 기본 그룹에 추가됨!  
`+` 연산자는 **AdditionPrecedence** 그룹에 추가되어 있음

# 우선순위 그룹(Precedence Groups)

계산식에서 결과를 얻기 위해선  
어떤 연산자를 먼저 계산할지 순서를 정해줘야함

이 때 우선순위 그룹을 사용해서  
순위가 높은 연산자 먼저 사용하는거임!

![15](https://user-images.githubusercontent.com/55340876/110229187-f2a2e000-7f4a-11eb-8062-d193750c47c2.png)

**_`*` 연산자가 먼저 실행되는 이유는 `+` 연산자보다 우선순위 그룹이 높아서임._**

```swift
infix operator 연산자: 그룹이름

precedencegroup 그룹이름 {
  higherThan: 낮은그룹명
  lowerThan: 높은그룹명
  associativity: 결합규칙
}
```

우선순위 그룹은 2항 연산자 선언시 함께 선언함  
연산자 선언 뒤에 `:` 을 쓰고 우선순위 그룹을 지정하는데  
이미 선언되어 있는 우선순위 그룹을 사용하거나 새로운 그룹을 선언할 수 있음

우선순위 그룹을 생략하면 **DefaultPrecedence** 라는 기본그룹에 추가됨!  
계산식에서 단독 사용하는 경우엔 문제가 없지만,  
다른 연산자와 함께 사용할 경우에는 에러가 나니까 대부분 우선순위를 지정하자.

![16](https://user-images.githubusercontent.com/55340876/110229186-f2a2e000-7f4a-11eb-8fbf-af873a37b66e.png)

상단 코드는 연산자 메서드에서 피연산자를 한번씩 곱한 후, 두 결과를 더해서 리턴해줌  
`1 *+* 2 + 3`  
부분은 이제 에러가 뜨지 않는걸 볼 수 있지예?!

이번엔 새로운 우선순위 그룹을 만들어 봅세

```swift
infix operator 연산자: 그룹이름

precedencegroup 그룹이름 {
  higherThan: 낮은그룹명
  lowerThan: 높은그룹명
  associativity: 결합규칙 // left, right, none
}
```

![17](https://user-images.githubusercontent.com/55340876/110229185-f20a4980-7f4a-11eb-9481-e0250136f278.png)

우선순위 그룹은 `precedencegroup` 키워드로 선언함  
그룹이름은 **UpperCamelCase** 로 짓고,  
`higherThan` 필드에는 **현재 그룹보다 우선순위가 <u>낮은</u> 그룹을 지정**하고  
`lowerThan` 필드에는 **현재 그룹보다 우선순위가 <u>높은</u> 그룹을 지정**함.

여기에는 다른 모듈에 선언되어 있는 그룹을 지정해야함  
마지막 `associativity` 필드에는 연산자의 결합 규칙을 지정함  
`left`, `right`, `none` 중에서 하나를 지정할 수 있고, **생략할 경우 none이 기본값**으로 사용됨~~

3가지 필드는 모두 생략할 수 있지만 `higherThan` 필드와 `lowerThan` 필드 **둘 중 하나는 반드시 사용**해야 함!!!

</br>

<center>
<img width="350" alt="18" src="https://user-images.githubusercontent.com/55340876/110229178-ed459580-7f4a-11eb-8b6c-4cafe1cfec07.png">
</center>
