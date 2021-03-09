---
title: '🕊 [Swift] 문자열 검색'
date: 2021-01-10 09:00:00
category: 'Swift'
draft: false
showToc: true
---

```swift
let str = "Hello, Swift"

// 문자열이 포함되어 있는지 검색 (대소문자를 구분)
str.contains("Swift") // true
str.contains("swift") // false
// 대소문자 무시하고 검색
str.lowercased().contains("swift") // true

// 범위 검색 (옵셔널 타입으로 리턴)
str.range(of: "Swift")
str.range(of: "Swift", options: [.caseInsensitive])


let str2 = "Hello, Programming"
let str3 = str2.lowercased()

// 공통 접두어 검색
var common = str.commonPrefix(with: str2) // Hello

// str3 문자열과 비교
// 대소문자 구분하기 때문에 빈 문자열 리턴
common = str.commonPrefix(with: str3) // 빈 문자열
// 대소문자 무시
// 리턴시에는 호출된 대상(str)을 리턴한다! (메서드의 인자말고! 그니따 hello가 아닌 Hello!)
str.commonPrefix(with: str3, options: [.caseInsensitive]) // Hello
```