---
title: '๐ [Swift] Enumeration Case Pattern'
date: 2021-01-11 19:00:00
category: 'Swift'
draft: false
showToc: true
---

์ฐ๊ด๊ฐ์ ๊ฐ์ง ์ด๊ฑฐํ ์ผ์ด์ค๋ฅผ ๋งค์นญ์ํฌ ๋ ์ฌ์ฉํจ.  
if, switch, for-in, while, guard ๋ฌธ์์ ์ฌ์ฉ๋จ.

```swift
case Enum.case(let name):
case Enum.case(var name):

case let Enum.case(name):
case var Enum.case(name):
```

**๊ตํต ์๋จ์ ๋ํ๋ด๋ ์ด๊ฑฐํ ์ ์ธํด๋ณด๊ธฐ**

```swift
enum Transportation {
    case bus(number: Int)
    case taxi(company: String, number: String)
    case subway(lineNumber: Int, express: Bool)
}

var tpt = Transportation.bus(number: 5524)

switch tpt {
// bus ์ผ์ด์ค๋ฅผ ๋งค์นญ์ํค๊ณ , ์ฐ๊ด๊ฐ์ n ์์์ ๋ฐ์ธ๋ฉ
case .bus(let n):
    print(n)
// taxi ์ผ์ด์ค๋ฅผ ๋งค์นญ์ํค๊ณ , ์ฐ๊ด๊ฐ์ c ์์์ n ๋ณ์์ ๋ฐ์ธ๋ฉ
case .taxi(let c, var n):
    print(c, n)
// subway ์ผ์ด์ค๋ฅผ ๋งค์นญ์ํค๊ณ , ์ฐ๊ด๊ฐ์ l, e ์์์ ๋ฐ์ธ๋ฉ
case let .subway(l, e):
    print(l, e)
}

tpt = Transportation.subway(lineNumber: 2, express: false)

// 2ํธ์  ์งํ์ฒ ์ธ์ง ํ์ธํ๊ณ  ๊ธํ ์ฌ๋ถ์ ๋ฐ๋ผ ์ฝ๋๋ฅผ ๋ถ๊ธฐ
if case let .subway(2, express) = tpt {
    if express {
        
    } else {
        
    }
}

// ๊ธํ ์งํ์ฒ ๋ง ํ์ธํ๊ธฐ
// ๊ฐ์ ๋ฐ์ธ๋ฉํ์ง ์์ผ๋ case ํค์๋ ๋ค์์ let, var ํค์๋๋ ์์ด๋ค.
if case .subway(_, true) = tpt {
    print("express")
}

let list = [
    Transportation.subway(lineNumber: 2, express: false),
    Transportation.bus(number: 5530),
    Transportation.subway(lineNumber: 7, express: true),
    Transportation.taxi(company: "SeoulTaxi", number: "1234")
]

for case let .subway(n, _) in list {
    print("subway \(n)")
}
// subway 2
// subway 7

for case let .subway(n, true) in list where n == 2 {
    print("subway \(n)")
}
```