---
title: '๐ [Swift] ๋ฌธ์์ด ๊ธฐ์ด'
date: 2021-01-10 06:00:00
category: 'Swift'
draft: false
showToc: true
---

```swift
// ๋ฌธ์์ด ์์ฑ
var str = "Hello, Swift"

// ๋น ๋ฌธ์์ด ์์ฑ
// ๋ฐ๋์ ๊ณต๋ฐฑ ์์ด!!!
var emptyStr = ""

// ๋น ๋ฌธ์์ด ์์ฑ (์์ฑ์ ์ฌ์ฉ)
emptyStr = String()

// Bool ๊ฐ์ ๋ฌธ์์ด๋ก ๋ณํ
let a = String(true) // true

// ์ ์ ๊ฐ์ ๋ฌธ์์ด๋ก ๋ณํ
let b = String(12) // 12

// ์ค์ ๊ฐ์ ๋ฌธ์์ด๋ก ๋ณํ
let c = String(12.34) // 12.34

// ๊ฐ์ ๊ฐ์ ๊ฐ์ง ์๋ก์ด ๋ฌธ์์ด ๋ง๋ค๊ธฐ
let d = String(str) // Hello, Swift

// ์ซ์๋ฅผ ํน์ ์ง๋ฒ์ผ๋ก ๋ณํํ๊ธฐ
let hex = String(123, radix: 16) // 7b
let octal = String(123, radix: 8) // 173
let binary = String(123, radix: 2) // 1111011

// ํน์  ๋ฌธ์์ด์ ์ํ๋ ๊ฐฏ์๋งํผ ์ฑ์์ ์ด๊ธฐํ
let repeatStr = String(repeating: "๐คฏ", count: 4)
print(repeatStr) // ๐คฏ๐คฏ๐คฏ๐คฏ

// ๋ฌธ์์ด ๋ณด๊ฐ๋ฒ String Interpolation
let e = "\(a) \(b)" // true 12
let f = a + b // true12
let g = a + " " + b // true 12
str += "!!" // Hello, Swift!!

// ๋ฌธ์์ด ๊ธธ์ด ํ์ธ
str.count // 14

// ๋ฌธ์์ด์ด ๋น์๋์ง ํ์ธ1
str.count == 0 // false

// ๋ฌธ์์ด์ด ๋น์๋์ง ํ์ธ2
str.isEmpty // false

// ๋ค๋ฅธ ๋ฌธ์์ด๊ณผ ๋น๊ต
str == "JINJOO" // false
"jinjoo" != "JINJOO" // true

// ๋ฌธ์์ด ํฌ๊ธฐ ๋น๊ต
"jinjoo" < "JINJOO" // ์์คํค์ฝ๋๋ก ๋น๊ตํด์ false ๋ฆฌํด

// ๋์๋ฌธ์ ๋ณํ
// ed๋ ing๋ก ๋๋๋ ๋ฉ์๋๋ ์๋ณธ์ ๊ทธ๋๋ก ๋๊ณ  ์๋ก์ด ๊ฐ์ ๋ฆฌํดํด์ค๋ค.
str.lowercased() // hello, swift!!
str.uppercased() // HELLO, SWIFT!!
str // Hello, Swift!!

// ๊ฐ ๋จ์ด์ ์ฒซ๋ฒ์งธ ๋ฌธ์๋ฅผ ๋๋ฌธ์๋ก ๋ฐ๊พผ๋ค.
var str2 = "hi, swift string"
str2.capitalized // Hi, Swift String
"this is name".capitalized // This Is Name

// ๋ฌธ์์ด์ ํฌํจ ๋ ๊ฐ ๋ฌธ์ ์ด๊ฑฐํด์ ์ถ๋ ฅํ๊ธฐ
for char in "Hello" {
    print(char)
}

// ํด๋น ๋ฌธ์์ด์์ ๋๋ค์ผ๋ก ๋ฝ๊ธฐ
let num = "1234567890"
num.randomElement()

// ํด๋น ๋ฌธ์์ด์ ๋๋ค์ผ๋ก ์์ด ๋ฐฐ์ด๋ก ๋ฆฌํด
num.shuffled()
```
