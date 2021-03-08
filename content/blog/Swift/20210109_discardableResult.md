---
title: '🕊 [Swift] @discardableResult'
date: 2021-01-09 23:43:00
category: 'Swift'
draft: false
showToc: true
---

# @discardableResult

함수 선언과 메서드 선언에 추가할 수 있는 속성.  
<span style="color: red;">**버릴 수 있는 결과**</span>

**`@discardableResult` 에서 Result 는 함수가 리턴하는 결과임.**

```swift
func doSomething() {
   print("Something secret")
}

func saySomething() -> String {
   return "Hello"
}

class ViewController: UIViewController {

   override func viewDidLoad() {
      super.viewDidLoad()

      doSomething()

      saySomething() // ⚠️Result of call to 'saySomething()' is unused
   }
}
```

상단 코드를 실행하면  
`saySomething()` 부분에서 경고가 나옴.

`doSomething`은 값을 리턴하지 않는 함수.  
`saySomething`은 값을 리턴하는 함수.

스위프트는 함수가 리턴한 결과를 코드 내부에서 사용하지 않으면 경고를 줌!  
뭐 이건 걍 무시해도 잘 돌아가는 경우가 있지만.. 거슬리지 않슴?!

**경고를 숨기고 싶을 때, `@discardableResult` 를 사용함!!  
함수가 리턴할 결과를 사용하지 않고 버린다는 것!!**

정확히는 무시한다고 생각하삼.

요 특성은 함수 선언 앞부분에 추가함.

```swift
@discardableResult
func saySomething() -> String {
   return "Hello"
}
```

요래 해주면 경고가 사라짐.

요 특성은 `doSomething` 함수에 사용한다면??  
경고를 준다!

왜??  
애초에 `doSomething` 함수는 값을 리턴하지 않으니까  
버릴 결과도 없으니 당연히 경고!!  
이 함수에는 필요가 없는 특성임!!

함수를 직접 만들었거나  
함수 선언을 수정할 수 있다면  
지금처럼 `@discardableResult` 속성을 추가해주면 되는데,

만약 선언을 수정할 수 없다면??  
함수 호출 앞에 `_` 와일드카드 패턴을 사용해줌.

```swift
func doSomething() {
   print("Something secret")
}

//@discardableResult
func saySomething() -> String {
   return "Hello"
}

class ViewController: UIViewController {

   override func viewDidLoad() {
      super.viewDidLoad()

      doSomething()
      _ = saySomething()
   }
}
```

함수가 사용하지 않는다는 것을  
와일드카드 패턴으로 명시적으로 표현해줬기 때문에 경고는 나오지 않음!
