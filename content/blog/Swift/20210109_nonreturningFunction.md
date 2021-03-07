---
title: '🕊 [Swift] Nonreturning Function(Never)'
date: 2021-01-09 23:55:00
category: 'Swift'
draft: false
showToc: true
---

```swift
func returnSomething() -> Int {
   return 0
}

let result = returnSomething()
print(result) // 0
```

함수가 값을 리턴한다는 것은?

- 값을 리턴함
- 함수의 실행을 종료한 다음, 제어를 함수를 호출하는 코드 이후로 전달함

```swift
func returnNothing() {
   return
}

returnNothing()

print("이어서 실행!")

// 이어서 실행!
```

함수에서 리턴하면 해당 함수의 실행은 종료되고,  
나머지 코드는 계속해서 실행됨.

# Nonreturning Function

Nonreturning Function을 호출하면 결과는 2가지임.

- 프로그램이 종료됨
- 에러를 처리하는 코드로 제어가 전달됨

**Nonreturning**

- 제어를 전달하지 않는다는 뜻 (함수를 호출하는 코드 다음으로 제어를 전달하지 않음!)

```swift
func doSomethingAndTerminate() -> Never {

}
```

`Never`로 선언된 함수를 **Nonreturning Function** 이라 함.  
메서드에서 `Never`를 리턴형으로 선언하면 **Nonreturning Method** 라고 부름.

<span style="color: red;">**`Never`는 함수나 메서드가 리턴하지 않는다는 특별한 형식임!**</span>

![1](https://user-images.githubusercontent.com/55340876/110240995-e42be700-7f91-11eb-8717-43f1a3188509.png)

케이스가 선언되지 않은 빈 열거형으로 선언되어 있음.  
**함수가 리턴되어도 함수를 호출한 부분으로 제어가 전달되지 않음.**  
**인스턴스를 생성할 수 없는 형식!! (Uninhabited Type)**

즉,  
`let n = Never()`  
`Never` 인스턴스를 생성하는 코드는 컴파일 에러가 남!

```swift
// 프로그램이 종료되는 케이스
func doSomethingAndTerminate() -> Never {
   // 프로그램을 종료하는 함수, 주로 디버깅 용도
   fatalError("에러났어!")
}

doSomethingAndTerminate()
print("after terminate") // print 함수는 호출되지 않는다.
```

![1](https://user-images.githubusercontent.com/55340876/110241040-189fa300-7f92-11eb-999e-3d2a5e0d1226.png)

에러 메세지를 출력하고 프로그램을 종료함.  
Will never be executed 경고 보임??  
`Never`를 쓰면 `print` 함수는 어떤 경우에도 실행되지 않는거.

요 패턴은 주로 <u>디버깅</u>에서 사용함.  
코드에서 처리할 수 없는 에러가 발생했을 때,  
에러 메세지를 출력하고 프로그램을 종료하도록 구현하면 런타임 에러를 쉽게 발견할 수 있음.

근데 이런건 프로그램이 무조건 종료되니까  
앱 출시를 위한 릴리즈 빌드에서는  
불필요한 크래시로 인해 사용성이 떨어지니 관련된 코드는 모두 제거하삼!

프로그램 종료 말고 에러를 던지는 예시를 보자.  
(이놈은 쫌 어렵네? 별표땡땡 ⭐️⭐️⭐️⭐️⭐️)

```swift
// 에러 형식 선언
enum MyError: Error {
   case error
}

// Nonreturning Function 추가해서 에러 던지도록 구현
// Nonreturning Function 에서는 항상 에러를 던져야함
func dosomethingAndAlwaysThrow() throws -> Never {
   throw MyError.error
}

// do-catch문으로 함수 호출
do {
   try dosomethingAndAlwaysThrow()
   print("after try") // 위에서 항상 에러를 던지니 이건 호출되지 않는다.
} catch {
   print(error) // error 출력
}
```

![1](https://user-images.githubusercontent.com/55340876/110241093-56043080-7f92-11eb-8d41-29d81212056a.png)

예시 하나 더!!

![2](https://user-images.githubusercontent.com/55340876/110241089-53094000-7f92-11eb-8cfc-24e5855d7d75.png)
