---
title: '🕊 [Swift] 논리 연산자'
date: 2021-01-07 01:00:00
category: 'Swift'
draft: false
showToc: true
---

<span style="color: red;">**참, 거짓을 구분하는 연산자**</span>

모든 피연산자가 항상 불리언 표현식이고,  
연산의 결과도 항상 불리언임

```swift
let a = 1
let b = 2

// !a
!false
a < b
!(a < b)

// a && b
// 모든 피연산자의 결과가 true면 true, 나머지 경우는 false
a > 10 && b % 2 == 0
true && true
false && true
false && false

// a || b
// 피연산자의 결과 어느 하나라도 true면 true
a > 10 || b % 2 == 0
true || true
true || false
false || false
```