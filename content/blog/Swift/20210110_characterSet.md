---
title: '🕊 [Swift] Character Set'
date: 2021-01-10 11:00:00
category: 'Swift'
draft: false
showToc: true
---

**문자집합**

문자열 검색이나 잘못된 문자를 삭제할 때 주로 활용함.  
같은 이름의 구조체로 구성되어 있음.

 
```swift
let a = CharacterSet.uppercaseLetters

let b = a.inverted

// 검색코드 구현
var str = "loRem Ipsum"
var charSet = CharacterSet.uppercaseLetters

// 대문자 검색
if let range = str.rangeOfCharacter(from: charSet) {
    print(str.distance(from: str.startIndex, to: range.lowerBound))
} // 2

if let range = str.rangeOfCharacter(from: charSet, options: [.backwards]) {
    print(str.distance(from: str.startIndex, to: range.lowerBound))
} // 6

// 문자열 양쪽 끝 공백 제거
str = " A p p l e "
charSet = .whitespaces

let trimmed = str.trimmingCharacters(in: charSet)
print(trimmed) // A p p l e

// 문자 추가
var editTarget = CharacterSet.uppercaseLetters

editTarget.insert("#")
editTarget.insert(charactersIn: "~!@")

// 문자 삭제
editTarget.remove("A")
editTarget.remove(charactersIn: "BCD")

// 커스텀
let customCharSet = CharacterSet(charactersIn: "@.")
let email = "userId@example.com" // userId@example.com

let components = email.components(separatedBy: customCharSet) // ["userId", "example", "com"]
```