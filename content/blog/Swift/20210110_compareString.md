---
title: '๐ [Swift] ๋ฌธ์์ด ๋น๊ต'
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

// ๊ทธ๋ฅ ๋น๊ต
largeA.compare(smallA) == .orderedSame // false

// ๋์๋ฌธ์ ๊ตฌ๋ถ์์ด ๋น๊ต
largeA.caseInsensitiveCompare(smallA) == .orderedSame //true

// compare ๋ฉ์๋๋ ๋ฌธ์์ด ์ต์์ ์ง์ ํ  ๋ ์ฃผ๋ก ์ฌ์ฉ
// ์ฒซ๋ฒ์งธ ํ๋ผ๋ฏธํฐ๋ฅผ ์ ์ธํ ๋๋จธ์ง 3๊ฐ๋ ๊ธฐ๋ณธ๊ฐ์ ๊ฐ๊ณ ์์ด์ ์๋ต ๊ฐ๋ฅ
// ์์ caseInsensitiveCompare ๋ฉ์๋์ ๋์ผ
largeA.compare(smallA, options: [.caseInsensitive]) == .orderedSame // true
```

```swift
let str = "Hello, Swift Programming!"
let prefix = "Hello"
let suffix = "Programming"

// ์ ๋์ด ๋น๊ต (๋์๋ฌธ์ ๊ตฌ๋ถํจ)
str.hasPrefix(prefix) // true

// ๋์๋ฌธ์ ๊ตฌ๋ถ์์ด ๊ฑ ํ๊ณ  ์ถ์ผ๋ฉด ๋ฐ๋ก ์ด๋ฐ์์ผ๋ก ์จ์ค์ผํจ
str.lowercased().hasPrefix(prefix.lowercased()) // true

// ์ ๋ฏธ์ด ๋น๊ต (๋์๋ฌธ์ ๊ตฌ๋ถํจ)
str.hasSuffix(suffix) // false
```