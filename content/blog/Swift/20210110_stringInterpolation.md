---
title: '๐ [Swift] ๋ฌธ์์ด ๋ณด๊ฐ๋ฒ/ํฌ๋ฉง ์ง์ ์/์ด์ค์ผ์ดํ ์ํ์ค'
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

// Doubleํ
let size = 12.34
// size String์ผ๋ก ๋ฐ๊พธ๊ธฐ
str = String(size) + "KB" // 12.34KB

// String Interpolation
str = "\(size)KB" // 12.34KB
```

# Format Specifier

```swift
%char
```

ํฌ๋ฉง ๋ฌธ์์ด  
ํฌ๋ฉง ์ง์ ์

```swift
let size = 12.34
var str = String(size) + "KB"

// %.1f ์ค์๋ฅผ ์์์  1์๋ฆฌ๊น์ง๋ง ์ถ๋ ฅ
str = String(format: "%.1fKB", size) // "12.3KB"

// %@ ๋ฌธ์์ด ๋์ฒด
String(format: "Hello, %@", "Swift") // Hello, Swift

// %d ์ ์๋ง ๋์ฒด
String(format: "%d", 12) // 12
String(format: "%d", 12.34) // 0

// %f ์ค์ ๋์ฒด
String(format: "%f", 12.34) // 12.340000
String(format: "%.3f", 12.34) // 12.340
String(format: "%10.3f", 12.34) //    12.340 (์ ์ฒด ๋ฌธ์ ์ด์๋ฆฌ ์์์  3์๋ฆฌ ๊น์ง๋ง)
String(format: "%010.3f", 12.34) // 000012.340 (๋น ๋ฌธ์๋ฅผ 0์ผ๋ก ์ฑ์ฐ๊ณ  ์ ์๋ถ๋ถ์ 6์๋ฆฌ, ์์์ ์ 3์๋ฆฌ๋ก ์ถ๋ ฅ. ๋ค๋ํ๋ฉด ๋ชจ๋ 10์๋ฆฌ)

String(format: "[%d]", 123) // [123]
String(format: "[%10d]", 123) // [       123]
String(format: "[%-10d]", 123) // [123       ]

let firstName = "Jin-joo"
let lastName = "Cha"

var korFormat = "๋ด ์ด๋ฆ์ %@ %@ ์ด๋ค."
String(format: korFormat, firstName, lastName) // ๋ด ์ด๋ฆ์ Jin-joo Cha ์ด๋ค.

// ํฌ๋ฉง ์ง์ ์ ์์ ์ ํด์ฃผ๊ธฐ
korFormat = "๋ด ์ด๋ฆ์ %2$@ %1$@ ์ด๋ค."
String(format: korFormat, firstName, lastName) // ๋ด ์ด๋ฆ์ Cha Jin-joo ์ด๋ค.
```

# Escape Sequence

์ด์ค์ผ์ดํ ์ํ์ค  
ํ์ถ ๋ฌธ์

```swift
// ๋ฐฑ ์ฌ๋์
let str = "\\"
print(str) // \

// ํญ ์ถ๊ฐ
print("A\tB") // A    B

// ์ค๋ฐ๊ฟ
print("A\nB")

// ํฐ๋ฐ์ดํ ์ถ๊ฐ (์์ ๋ฐ์ดํ๋ ๋ง์ฐฌ๊ฐ์ง)
print("\"Hello He said\"") // "Hello He said"
```
