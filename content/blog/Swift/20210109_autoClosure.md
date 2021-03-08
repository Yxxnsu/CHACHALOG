---
title: '🕊 [Swift] 오토 클로저'
date: 2021-01-09 23:50:00
category: 'Swift'
draft: false
showToc: true
---

```swift
func random() -> Int {
   return Int.random(in: 0...100)
}

func takeResult(param: Int) {
   print(param)
}

takeResult(param: random())
// 랜덤 정수를 리턴
```

상단 `random` 함수는 0 ~ 100 까지의 숫자중 하나를 랜덤으로 반환하는 함수임.  
`takeResult` 함수는 정수를 파라미터로 받아서 `print`로 출력해줌.

```swift
takeResult(param: random())
```

위 코드에서는 random 함수에서 반환한 정수를 파라미터로 받아서 출력해주고 있음!

여기까진 이해가 쉽다.  
다른 예시를 보쟈.

```swift
func random() -> Int {
   return Int.random(in: 0...100)
}

func takeClosure(param: () -> Int) {
   print(param())
}

takeClosure(param: { Int.random(in: 0...100) })
// 랜덤 정수를 리턴
```

`takeClosure` 함수는 파라미터가 없고 Int형을 리턴하는 함수임.  
다시 말해, 클로저를 전달함!  
함수 바디에서 클로저를 호출하고, 리턴 된 결과를 출력하고 있음.

```swift
takeClosure(param: { Int.random(in: 0...100) })
```

파라미터로 인라인 클로저를 전달하고 있음.  
클로저 자체를 인자에 직.접. 전달하는 것이니까 인라인 클로저임!

요 경우에는  
클로저 내부에 포함된 코드는 언제 실행될까??

함수를 호출시 실행되는게 아니라,  
함수 내부에서 클로저를 호출하는 시점에 실행됨.

인자로 전달하면 클로저는 실행되지 않고,  
클로저 자체가 그대로 전달됨.

함수 내부에서 `print(param())` 으로 클로저를 호출하지 않는다면??

```swift
func takeClosure(param: () -> Int) {
   print(#function)
//    print(param())
}

takeClosure(param: { Int.random(in: 0...100) })
// takeClosure(param:)
```

당연 클로저에 포함된 코드는 실행되지 않음!  
여기서는 랜덤 정수가 출력되지 않는다는 맬씀!

# 오토 클로저(Auto Closure)

**파라미터로 전달되는 표현식을 클로저로 래핑해주는 특성**

`@autoclosure` 를 이용해서 구현해보쟈.

![1](https://user-images.githubusercontent.com/55340876/110321683-5f0a0600-8055-11eb-8abf-7464b9f3db00.png)

읭??  
에러??

파라미터가 함수 타입이니까 함수 호출시 인자에 클로저를 전달해야함.  
근데 에러?? 예??

`() -> Int`  
파라미터가 분명 함수 타입으로 선언되었는데!!!  
동일 타입의 함수/메서드/클로저를 전달할 수 있짜나!!!  
근 데 왜 에 러 ? 외 않 되 ?

자자자자자 릴렉스  
<span style="color: red;">**파라미터가 `@autoclosure` 특성으로 선언되어 있어서  
클로저를 전달할 수 없던거임!!**</span>

```swift
func takeAutoClosure(param: @autoclosure () -> Int) {
   print(param())
}

takeAutoClosure(param: Int.random(in: 0...100))
// 랜덤 정수 반환
```

`{}` brace를 빼면 정상적으로 작동함. ㅎㅎ.  
특성을 이용하면 파라미터로 전달하는 표현식이 자동으로 오토 클로저로 래핑됨!

랜덤 메서드 결과가 인자로 쓰이는게 아니라,  
래핑된 클로저가 파라미터로 전달되는 것!

오토 클로저는 표현식을 클로저로 래핑하는 단순한 특성.  
`{}` 를 생략하고 코드를 단순히 작성하기 위해서 씀.

반드시 필요한 경우가 아니면 쓰지말자!!

## 대표적 사용 예시1

```swift
let rnd = random()
assert(rnd > 30)
```

`rnd` 상수에 저장된 값이 30 이하면 실행이 멈춤!

![1](https://user-images.githubusercontent.com/55340876/110322404-6e3d8380-8056-11eb-8b08-91fe52792bbc.png)

<span style="color: red;">**단, `assert` 는 디버그 모드에서만 동작함!  
릴리즈 모드에서는 동작 노노!!**</span>

![`](https://user-images.githubusercontent.com/55340876/110322844-14898900-8057-11eb-87a9-6ee45f9ec974.png)

**[(assert 참고)](https://github.com/apple/swift/blob/main/stdlib/public/core/Assert.swift)**

```swift
public func assert(
   _ condition: @autoclosure () -> Bool,
   _message: @autoclosure () -> String = String(),
   file: StaticString = #file, line: UInt = #line
) {
```

`assert` 메서드에 대해 클릭해서 보면,  
첫번째와 두번째 파라미터가 `autoclosure`로 선언되어 있음.

즉, 인자로 전달될 때 평가되는게 아니라  
클로저로 래핑되어서 함수 내부로 전달이 되고,  
디버그 환경인지 확인 후, `true`로 평가되는 경우에만!
자동으로 래핑된 클로저를 호출하고 있음.

바로 요 시점에 `rnd > 30` 여기서 전달한 코드가 실행되는 것!  
(요 패턴은 굳이 오토 클로저가 아니라도 구현이 가능하긴 함)

오토 클로저는 득보다 실이 많은 특성이라 신중히 써야함요!!

## 대표적 사용 예시2

다른 예시로 비동기를 써보쟈.

![1](https://user-images.githubusercontent.com/55340876/110323493-04be7480-8058-11eb-852d-75ebddc6f3b6.png)

비동기 블럭에서 호출하면  
escaping 클로저가 non-escaping 파라미터를 캡쳐하고 있다고 에러 뿜!  
오토 클로저 특성은 기본적으로 non-escaping 특성을 갖고 있음.

비동기로 호출하고 싶다면??

```swift
func takeAutoClosure(param: @autoclosure @escaping () -> Int) {
   print(#function)

   DispatchQueue.main.asyncAfter(deadline: .now() + 1) {
      print(param())
   }
}

takeAutoClosure(param: Int.random(in: 0...100))
// takeAutoClosure(param:)
// 1초 지연 후, 랜덤 정수 반환
```

`@autoclosure` 특성 뒤에 `@escaping` 특성을 추가해줌!  
그럼 1초 지연 후, 랜덤 정수가 반환 되지렁!

이번엔 클로저에 파라미터 타입을 추가해보쟈.

![1](https://user-images.githubusercontent.com/55340876/110324158-f6248d00-8058-11eb-86d3-3622bfd53b32.png)

에러;;

오토 클로저 특성을 추가하면,  
클로저에 파라미터를 추가할 수 없음!!!  
but 리턴타입은 자유롭게 선언 가-능!!!

`() -> Int`  
파라미터를 비어놓고서만 선언 가능하단 맬씀임.
