---
title: '🕊 [Swift] 암시적 리턴(return 생략)'
date: 2021-01-09 23:50:00
category: 'Swift'
draft: false
showToc: true
---

# Explicit Return

```swift
func 함수명(파라미터) -> 리턴타입 {
   실행구문
   return 표현식
}
```

# 암시적 리턴(Implicit Return)

```swift
func 함수명(파라미터) -> 리턴타입 {
   단일표현식
}
```

<span style="color: red;">**함수 바디 사이에 리턴 표현식만 포함되어 있다면 `return` 키워드를 생략할 수 있음!**</span>  
이 때는 리턴 타입과 표현식을 통해 컴파일러가 값을 리턴한다는 것을 추론함.  
이것을 <span style="color: red;">**암시적 리턴(Implicit Return)**</span> 이라고 함.

```swift
func add(a: Int, b: Int) -> Int {
   return a + b
}

add(a: 1, b: 2) // 3
```

상단 코드를 봅세.  
함수 바디를 보면 리턴 표현실이 한줄 있지예??  
이 때는 `return` 키워드를 생략할 수 있음!!

```swift
func add(a: Int, b: Int) -> Int {
   a + b
}

add(a: 1, b: 2) // 3
```

결과는 동일하지예
**단일 표현식으로 구현된 함수 바디에서 return 키워드를 생략하는 것이 Implicit Return!!**

여기서 단일 표현식은 중요함!

![1](https://user-images.githubusercontent.com/55340876/110240757-bdb97c00-7f90-11eb-9135-f58b06ab1789.png)

왜냐?  
단일 표현식이 아니면 컴파일 에러가 나거던!!!

```swift
func add(a: Int, b: Int) -> Int {
   print(a + b)
   return a + b
}

add(a: 1, b: 2) // 3
```

**단일 표현식이 아닐 경우,  
명시적으로 return 키워드를 반드시반드시반드시 써줘야함!**
