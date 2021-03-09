---
title: '🕊 [Swift] 문자열 비교'
date: 2021-01-10 08:00:00
category: 'Swift'
draft: false
showToc: true
---

```swift
let largeA = "Apple"
let smallA = "apple"
let b = "Banana"

largeA == smallA
largeA != smallA

// 그냥 비교
largeA.compare(smallA) == .orderedSame // false

// 대소문자 구분없이 비교
largeA.caseInsensitiveCompare(smallA) == .orderedSame //true

// compare 메서드는 문자열 옵션을 지정할 때 주로 사용
// 첫번째 파라미터를 제외한 나머지 3개는 기본값을 갖고있어서 생략 가능
// 위에 caseInsensitiveCompare 메서드와 동일
largeA.compare(smallA, options: [.caseInsensitive]) == .orderedSame // true
```

```swift
let str = "Hello, Swift Programming!"
let prefix = "Hello"
let suffix = "Programming"

// 접두어 비교 (대소문자 구분함)
str.hasPrefix(prefix) // true

// 대소문자 구분없이 걍 하고 싶으면 따로 이런식으로 써줘야함
str.lowercased().hasPrefix(prefix.lowercased()) // true

// 접미어 비교 (대소문자 구분함)
str.hasSuffix(suffix) // false
```