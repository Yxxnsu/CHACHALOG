---
title: '🕊 [Swift] 함수 타입(Function Type)'
date: 2021-01-09 22:30:00
category: 'Swift'
draft: false
showToc: true
---

스위프트 함수는 1급 객체(First-class Citizen)

- 변수나 상수에 저장할 수 있음
- 파라미터로 전달할 수 있음
- 함수에서 리턴할 수 있음

# 함수 타입(Function Type)

```swift
()
void
```

**함수 타입에서 빈 괄호는 비어있는 튜플임.**  
없다, 파라미터가 없다, 리턴타입이 없다.  
없다는 뜻!!

**`void`는 리턴타입이 없다**는 것을 나타내는 특별한 키워드임.

그리고 `void`는 빈 괄호와 같은데,  
**대부분 `void` 말고 빈 괄호 `( )` 를 사용함.**

```swift
(파라미터타입) -> 리턴타입
```

함수 선언 문법과 구조는 동일함.  
함수 선언시 리턴타입이 없다면 리턴 화살표와 리턴타입을 생략하지만,  
여기서는 명시적으로 다 표현해줘야 함!

파라미터가 없는 함수를 만들어보쟈!

```swift
func sayHello() {
    print("Hello, Swift")
}

let f1 = sayHello
f1() // Hello, Swift
```

`let f1 = sayHello()` 는 함수 호출이니까 컴파일 에러 뿜!  
`let f1 = sayHello` 처럼 괄호를 빼주고 할당해줘야함.  
여기선 일단 타입 추론으로 해줌.  
`f1()` 괄호만 붙이면 함수 호출이제!

요래하면 함수 자체가 `f1` 상수에 저장되는 것!!  
어려우면 걍 **함수는 1급 객체이고, 변수나 상수에 저장할 수 있다.** 라고만 외우삼!!

<img width="625" alt="1" src="https://user-images.githubusercontent.com/55340876/110239158-f48b9400-7f88-11eb-803d-bc5eef49269f.png">

`f1`의 자료형은 파라미터랑 리턴형이 없는 함수 타입임.  
파라미터를 가진 새로운 함수를 구현해봅세.

```swift
func printHello(with name: String) {
    print("Hello, \(name)")
}

let a: (String) -> () = printHello(with:)

let b = printHello(with: )
b("Swift") // Hello, Swift
```

`let a: (String) -> () = printHello(with: )`  
위에서 `f1`은 타입 추론으로 해줬는데,  
이번꺼는 직접 타입을 선언해보쟈.

`(String) -> () = printHello(with: )`  
**직접 파라미터의 자료형을 선언 -> 리턴타입이 없으니까 빈 괄호 () 선언 = 함수 저장**

위 코드에서 인자 레이블 with: 에 실제로 인자를 전달하면,  
저 코드는 함수를 호출하게 되니까 에러가 나겠지?

함수 표기법 배운거 안까뭇지?!

<span style="color: blue;">**인자 레이블에 인자를 함께 전달하면 그건 함수를 지칭한 것이 아니라, 함수 호출임!**</span>

`let b = printHello(with: )` 함수 표기법
`b("Swift")` 함수 호출

<span style="color: red;">**상수에 저장된 함수를 호출할 때는 인자 레이블을 쓰지 않음!  
상수에 저장된 함수를 호출할 때는 인자 레이블을 쓰지 않음!  
상수에 저장된 함수를 호출할 때는 인자 레이블을 쓰지 않음!**</span>

<span style="color: blue;">**함수 타입에는 파라미터타입과 리턴타입만 포함되고,  
인자 레이블의 정보는 포함되지 않음!**</span>

여기서 인자 레이블을  
`b(with: "Swift")`  
이런식으로 쓴다면 컴파일 에러!!!!

# 파라미터가 2개인 함수 선언

```swift
func add(a: Int, b: Int) -> Int {
    return a + b
}

var c: (Int, Int) -> Int = add(a: b:)
c(1, 2) // 3
```

# 인자 레이블 생략

```swift
func add(_ a: Int, with b: Int) -> Int {
    return a + b
}

var c = add(_: with:)
```

# 입출력 파라미터 활용

```swift
func swapNumber(_ a: inout Int, _ b: inout Int) {

}

let c = swapNumber(_: _:)
c
```

# 가변 파라미터 활용

```swift
func sum(of numbers: Int...) {

}

let c = sum(of: )
c
```

# 사칙연산 구현

```swift
// 사칙연산 함수들 구현
func add(_ a: Int, _ b: Int) -> Int {
    return a + b
}

func substract(_ a: Int, _ b: Int) -> Int {
    return a - b
}

func multiply(_ a: Int, _ b: Int) -> Int {
    return a * b
}

func divide(_ a: Int, _ b: Int) -> Int {
    return a / b
}

// 함수를 리턴하는 함수를 구현해보자!
// 첫번째 화살표는 selectFunction 함수의 리턴 화살표,
// 두번째 화살표는 함수 타입의 포함된 화살표, 나머지는 모두 형식에 포함된 리턴 화살표
//func selectFunction(from op: String) -> (Int, Int) -> Int {
//
//}

// typealias 을 이용해서 함수 타입의 이름을 붙여주면 상단 코드보다 가독성이 높아진다.
typealias ArithmeticFuncion = (Int, Int) -> Int

// 마지막 default에서 nil을 리턴하려면 ArithmeticFuncion 을 옵셔널로 바꿔야해서 ? 를 붙인다.
func selectFunction(from op: String) -> ArithmeticFuncion? {
    // 파라미터로 전달된 연산자 문자를 확인 후, 적절한 함수를 리턴하자.
    switch op {
    case "+":
        return add(_:_:)
    case "*":
        return multiply(_:_:)
    case "-":
        return substract(_:_:)
    case "/":
        return divide(_:_:)
    default:
        return nil
    }
}

let af = selectFunction(from: "+")
// 함수 자체가 옵셔널 형식을 포함하고 있기 때문에 괄호 앞에 ? 를 추가해서 호출한다.
af?(1, 2) // 3

// 함수 호출시 옵셔널 체이닝으로 case "*"에 접근하고 인자로 12, 34를 전달해 multiply을 리턴한다.
selectFunction(from: "*")?(12, 34) // 408
```
