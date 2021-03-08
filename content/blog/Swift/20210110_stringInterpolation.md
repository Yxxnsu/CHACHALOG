---
title: '🕊 [Swift] 문자열 보간법/포멧 지정자/이스케이프 시퀀스'
date: 2021-01-10 04:00:00
category: 'Swift'
draft: false
showToc: true
---

# String Interpolation

```swift
\(expr)
```

```swift
var str = "12.34KB"

// Double형
let size = 12.34
// size String으로 바꾸기
str = String(size) + "KB" // 12.34KB

// String Interpolation
str = "\(size)KB" // 12.34KB
```

# Format Specifier

```swift
%char
```

포멧 문자열  
포멧 지정자

```swift
let size = 12.34
var str = String(size) + "KB"

// %.1f 실수를 소수점 1자리까지만 출력
str = String(format: "%.1fKB", size) // "12.3KB"

// %@ 문자열 대체
String(format: "Hello, %@", "Swift") // Hello, Swift

// %d 정수만 대체
String(format: "%d", 12) // 12
String(format: "%d", 12.34) // 0

// %f 실수 대체
String(format: "%f", 12.34) // 12.340000
String(format: "%.3f", 12.34) // 12.340
String(format: "%10.3f", 12.34) //    12.340 (전체 문자 열자리 소수점 3자리 까지만)
String(format: "%010.3f", 12.34) // 000012.340 (빈 문자를 0으로 채우고 정수부분은 6자리, 소수점은 3자리로 출력. 다더하면 모두 10자리)

String(format: "[%d]", 123) // [123]
String(format: "[%10d]", 123) // [       123]
String(format: "[%-10d]", 123) // [123       ]

let firstName = "Jin-joo"
let lastName = "Cha"

var korFormat = "내 이름은 %@ %@ 이다."
String(format: korFormat, firstName, lastName) // 내 이름은 Jin-joo Cha 이다.

// 포멧 지정자 순서 정해주기
korFormat = "내 이름은 %2$@ %1$@ 이다."
String(format: korFormat, firstName, lastName) // 내 이름은 Cha Jin-joo 이다.
```

# Escape Sequence

이스케이프 시퀀스  
탈출 문자

```swift
// 백 슬래시
let str = "\\"
print(str) // \

// 탭 추가
print("A\tB") // A    B

// 줄바꿈
print("A\nB")

// 큰따옴표 추가 (작은 따옴표도 마찬가지)
print("\"Hello He said\"") // "Hello He said"
```
