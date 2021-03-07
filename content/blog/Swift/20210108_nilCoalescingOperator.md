---
title: '🕊 [Swift] Nil 병합 연산자'
date: 2021-01-08 04:00:00
category: 'Swift'
draft: false
showToc: true
---

```swift
var msg = ""
var input: String? = "Swift"

if let inputName = input {
    msg = "Hello, " + inputName
} else {
    msg = "Hello, Stranger"
}

print(msg) // Hello, Swift
```

상단 코드를 조건 연산자로 단순히 줄여보자.

```swift
var input: String? = "Swift"

var str = "Hello, " + (input != nil ? input! : "Stranger")

print(str) // Hello, Swift
```

삼항 연산자를 사용해서 이전보다는 코드가 간결해졌지만  
값을 저장했는지 확인하고, 값을 추출하는 코드를 저장해서 핵귀찮음...

**Nil 병합 연산자**를 이용하면
이 귀찮은 일을 안해도 되니까 함 알아보쟈!

# Nil 병합 연산자(Nil-Coalescing Operator)

```swift
a ?? b
옵셔널표현식 ?? 표현식
```

**Nil 병합 연산자는 2항 연산자임.  
피연산자가 2개라는 뜻!!!**

<span style="color: red;">**첫번째(왼쪽) 피연산자는 항상 옵셔널 표현식,  
두번째(오른쪽) 피연산자는 항상 논옵셔널 표현식임.  
옵셔널을 제외하고 형식은 동일해야함!! (a가 옵셔널 스트링이면 b는 논옵셔널 스트링이여야 함!)**</span>

```swift
var input: String? = "Swift"

var str = "Hello, " + (input ?? "Stranger")

print(str) // Hello, Swift
```

코드가 핵 단순해졌음!!!!!! 어예!!

먼저 왼쪽 피연산자에 값이 저장되어 있는지 확인함  
다르게 표현하자면 옵셔널 표현식이 값을 리턴하는지 확인한다는 말임.  
값을 리턴한다면 요 값을 언래핑 한 후, 연산의 결과로 리턴함.

값이 저장되어 있지 않다면?  
즉, 옵셔널 표현식이 값을 리턴하지 않는다면?

```swift
var input: String? = "Swift"
input = nil

var str = "Hello, " + (input ?? "Stranger")

print(str) // Hello, Stranger
```

오른쪽 피연산자를 평가해서 그 결과를 리턴함.  
여기서 오른쪽(두번째) 피연산자는 값이 없을 때 사용할 기본값을 전달함.

Nil 병합 연산자는 논리 연산자와 마찬가지로 **단락 평가**를 수행함.  
만약 왼쪽 피연산자에 값이 저장되어 있다면 오른쪽 피연산자를 평가하지 않음.

오른쪽 피연산자는 왼쪽 피연산자가 값을 리턴하지 않는 경우에만 평가됨.  
그래서 오른쪽 피연산자에는 **사이드 이펙트**가 발생하는 코드가 포함되지 않아야 함!!!
