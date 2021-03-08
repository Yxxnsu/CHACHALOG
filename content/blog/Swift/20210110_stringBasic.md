---
title: '🕊 [Swift] 문자열 기초'
date: 2021-01-10 06:00:00
category: 'Swift'
draft: false
showToc: true
---

```swift
// 문자열 생성
var str = "Hello, Swift"

// 빈 문자열 생성
// 반드시 공백 없이!!!
var emptyStr = ""

// 빈 문자열 생성 (생성자 사용)
emptyStr = String()

// Bool 값을 문자열로 변환
let a = String(true) // true

// 정수 값을 문자열로 변환
let b = String(12) // 12

// 실수 값을 문자열로 변환
let c = String(12.34) // 12.34

// 같은 값을 가진 새로운 문자열 만들기
let d = String(str) // Hello, Swift

// 숫자를 특정진법으로 변환하기
let hex = String(123, radix: 16) // 7b
let octal = String(123, radix: 8) // 173
let binary = String(123, radix: 2) // 1111011

// 특정 문자열을 원하는 갯수만큼 채워서 초기화
let repeatStr = String(repeating: "🤯", count: 4)
print(repeatStr) // 🤯🤯🤯🤯

// 문자열 보간법 String Interpolation
let e = "\(a) \(b)" // true 12
let f = a + b // true12
let g = a + " " + b // true 12
str += "!!" // Hello, Swift!!

// 문자열 길이 확인
str.count // 14

// 문자열이 비었는지 확인1
str.count == 0 // false

// 문자열이 비었는지 확인2
str.isEmpty // false

// 다른 문자열과 비교
str == "JINJOO" // false
"jinjoo" != "JINJOO" // true

// 문자열 크기 비교
"jinjoo" < "JINJOO" // 아스키코드로 비교해서 false 리턴

// 대소문자 변환
// ed나 ing로 끝나는 메서드는 원본은 그대로 두고 새로운 값을 리턴해준다.
str.lowercased() // hello, swift!!
str.uppercased() // HELLO, SWIFT!!
str // Hello, Swift!!

// 각 단어의 첫번째 문자를 대문자로 바꾼다.
var str2 = "hi, swift string"
str2.capitalized // Hi, Swift String
"this is name".capitalized // This Is Name

// 문자열에 포함 된 각 문자 열거해서 출력하기
for char in "Hello" {
    print(char)
}

// 해당 문자열에서 랜덤으로 뽑기
let num = "1234567890"
num.randomElement()

// 해당 문자열을 랜덤으로 섞어 배열로 리턴
num.shuffled()
```
