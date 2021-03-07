---
title: '🕊 [Swift] 파라미터(Parameter)'
date: 2021-01-09 11:00:00
category: 'Swift'
draft: false
showToc: true
---

# 파라미터(Parameter)

<span style="color: red;">**함수로 전달하는 값**</span>

```swift
func 함수명(파라미터) -> 리턴타입 {
   실행구문
}
```

```swift
(파라미터명: 타입, 파라미터명: 타입)
```

예시를 함 보쟈.

```swift
func add(a: Int, b: Int) -> Int {
   return a + b
}

add(a: 1, b: 2) // 3
```

함수 바디에서 파라미터 값을 바꿀 수 있을까??

![1](https://user-images.githubusercontent.com/55340876/110236310-6b6c6100-7f78-11eb-881b-7c8e1727c429.png)

응 안돼~

<span style="color: red;">**파라미터는 함수 바디에서 사용할 수 있는 <u>임시 상수</u> !!!**</span>  
<span style="color: red;">**파라미터는 함수 바디에서 사용할 수 있는 <u>임시 상수</u> !!!**</span>  
<span style="color: red;">**파라미터는 함수 바디에서 사용할 수 있는 <u>임시 상수</u> !!!**</span>

함수를 호출할 때 전달한 인자 1과 2는  
함수 선언에 있는 파라미터 a와 b에 복사되어서 계산에 사용됨.

이번엔 파라미터의 기본값을 선언해보쟈.

```swift
(파라미터명: 타입 = 값)
```

기본값을 선언하면 함수 호출시, 파라미터를 생략할 수 있음.

```swift
func sayHello(to: String = "Stranger") {
   print("Hello, \(to)")
}

sayHello(to: "Swift") // Hello, Swift
```

지금은 함수를 호출할 때 파라미터를 직접 전달하고 있으니,  
파라미터에 설정된 기본값은 사용되지 않음!

기본값을 써보쟈.

```swift
func sayHello(to: String = "Stranger") {
   print("Hello, \(to)")
}

sayHello() // Hello, Stranger
```

직접 파라미터로 값을 전달하지 않으면 상단 코드처럼 기본값이 사용됨!

<span style="color: red;">**파라미터의 스코프는 함수 바디로 제함됨!!**</span>  
<span style="color: red;">**파라미터의 스코프는 함수 바디로 제함됨!!**</span>  
<span style="color: red;">**파라미터의 스코프는 함수 바디로 제함됨!!**</span>

즉, `{}` brace 사이로 제한된다는 맬씀!!

상단 코드를 예시로 들자면,  
`to` 파라미터는 함수 바디 안에서만 사용이 가능함.  
만약 글로벌 스코프에서 사용하면 `to`를 인식할 수 없으니까 컴파일 에러가 뿜!

최상단 코드에서 a와 b도 함수 바깥쪽에서는 사용할 수 없다!

파라미터는 언제 생성되고 언제 삭제될까?  
**함수를 호출하면 함수 바디가 실행이 되는데 이 시점에서 파라미터가 생성됨.  
그런 후, 함수 실행이 완료되면 자동으로 삭제됨!**
