---
title: '🕊 [Swift] 삼항 연산자'
date: 2021-01-07 02:00:00
category: 'Swift'
draft: false
showToc: true
---

```swift
조건 ? 표현식1 : 표현식2
```

<span style="color: red;">**주의할 점 2가지**</span>
1. 처음에는 불리언 표현식이 와야함
2. 두번째 피연산자와 세번째 피연산자의 자료형은 같아야 함

```swift
let age = 18

// 불리언 표현식을 따져서 true면 왼쪽 값을, false면 오른쪽 값을 반환
age < 20 ? "어리네" : "어른이네" // 어리네

// if문의 경우
if age < 20 {
    "어리네"
} else {
    "어른이네"
}
```

선택지가 3개 이상이라면 코드가 지저분해질 수 있으니까  
if문이나 switch문을 사용함!  