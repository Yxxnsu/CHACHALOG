---
title: '๐ [Swift] Character Set'
date: 2021-01-10 11:00:00
category: 'Swift'
draft: false
showToc: true
---

**๋ฌธ์์งํฉ**

๋ฌธ์์ด ๊ฒ์์ด๋ ์๋ชป๋ ๋ฌธ์๋ฅผ ์ญ์ ํ  ๋ ์ฃผ๋ก ํ์ฉํจ.  
๊ฐ์ ์ด๋ฆ์ ๊ตฌ์กฐ์ฒด๋ก ๊ตฌ์ฑ๋์ด ์์.

 
```swift
let a = CharacterSet.uppercaseLetters

let b = a.inverted

// ๊ฒ์์ฝ๋ ๊ตฌํ
var str = "loRem Ipsum"
var charSet = CharacterSet.uppercaseLetters

// ๋๋ฌธ์ ๊ฒ์
if let range = str.rangeOfCharacter(from: charSet) {
    print(str.distance(from: str.startIndex, to: range.lowerBound))
} // 2

if let range = str.rangeOfCharacter(from: charSet, options: [.backwards]) {
    print(str.distance(from: str.startIndex, to: range.lowerBound))
} // 6

// ๋ฌธ์์ด ์์ชฝ ๋ ๊ณต๋ฐฑ ์ ๊ฑฐ
str = " A p p l e "
charSet = .whitespaces

let trimmed = str.trimmingCharacters(in: charSet)
print(trimmed) // A p p l e

// ๋ฌธ์ ์ถ๊ฐ
var editTarget = CharacterSet.uppercaseLetters

editTarget.insert("#")
editTarget.insert(charactersIn: "~!@")

// ๋ฌธ์ ์ญ์ 
editTarget.remove("A")
editTarget.remove(charactersIn: "BCD")

// ์ปค์คํ
let customCharSet = CharacterSet(charactersIn: "@.")
let email = "userId@example.com" // userId@example.com

let components = email.components(separatedBy: customCharSet) // ["userId", "example", "com"]
```