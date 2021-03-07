---
title: '🕊 [Swift] 내장 함수'
date: 2021-01-09 23:40:00
category: 'Swift'
draft: false
showToc: true
---

```swift
func outer() {
   print("outer")
}

func inner() {
   print("inner")
}

outer() // outer
inner() // inner
```

상단 함수는 그냥 글로벌 함수 2개다.

# 내장 함수(Nested Function)

**다른 함수 내부에 포함되면 그게 그냥 내장 함수임!**

```swift
func outer() {
   func inner() {
      print("inner")
   }

   print("outer")
}

outer() // outer
```

이 때, `inner()`를 호출하면 당근 에러겠됴?!!!

![1](https://user-images.githubusercontent.com/55340876/110240388-07a16280-7f8f-11eb-8643-8b1b90098b83.png)

왜??  
호출하는 범위가 달라졌으니까!

내장 함수가 되면 스코프가 선언된 함수 내부로 축소됨.  
그래서 `inner` 함수를 글로벌 스코프에서 직접 호출할 수 없음.

그럼 어카냐고여??

```swift
func outer() {
   func inner() {
      print("inner")
   }

   inner()

   print("outer")
}

outer()
// inner
// outer
```

상단 코드처럼 함수에서 내장 함수를 리턴하면  
내장 함수의 스코프가 함수를 호출한 범위로 확장됨.

```swift
func outer() -> () -> () {
   // outer 함수의 로컬 스코프
   func inner() {
      print("inner")
   }

   return inner
}

// 글로벌 스코프
let a = outer()
a() // inner
```

`outer` 함수에서 `inner` 함수를 리턴하고 있는데,  
여기서 `a` 상수에 저장한 다음, `a` 상수를 호출하는 코드임.

`inner` 함수를 정상적으로 호출하도록  
`outer` 함수를 호출한 스코프로 확장된 것임!

**스코프가 확장된다고 직접 호출할 수 있는 것은 아니고,  
리턴 된 함수를 통해 간접적으로 호출하도록 스코프를 확장시킨 것!!**
