---
title: '🕊 [Swift] 할당 연산자'
date: 2021-01-07 05:00:00
category: 'Swift'
draft: false
showToc: true
---

```swift
let a = 11 // 11
var b = 22 // 22
b = a // 11
```

lvalue(왼쪽값, 메모리 공간을 나타내는 표현식, 할당 연산자 양쪽에 올 수 있음)  
rvalue(오른쪽값, 저장할 값을 나타내는 표현식, 항상 오른쪽에 와야함)  
lvalue는 rvalue로도 사용할 수 있음  

lvalue에 rvalue에 적는것은 허용하지 않음! 에러!

```swift
11 = a
```

할당 연산자로 저장할 공간이 없으니 이런 코드는 허용안함!

```swift
// a += b
// a = a + b

var a = 1
var b = 2

a = a + b // 3

// 다시 초기화
a = 1
b = 2
a += b // 3
```

이건 뭐..   
빼기 곱하기 나누기 등등 다 비슷비슷함