---
title: '๐ [Swift] ๋ฌธ์ / ๋ฌธ์์ด'
date: 2021-01-10 02:00:00
category: 'Swift'
draft: false
showToc: true
---

# ๋ฌธ์ / ๋ฌธ์์ด

```swift
let s = "String"

let c = "C"
```

Stringํ์ ๋ฌธ์์ด์ ๊ฐฏ์์๋ ์๊ด์์ด ๋ค Stringํ์ผ๋ก ์ ์ฅ๋จ.

์ฌ๊ธฐ์ `c` ์์๋ฅผ Characterํ์ผ๋ก ์ ์ฅํ๊ณ  ์ถ๋ค๋ฉด??

```swift
let c: Character = "C"
```

๋ช์์ ์ผ๋ก ์๋ ํ์์ ์ง์ ํด์ฃผ๋ฉด ๋จ!  
์ฌ๊ธฐ์ Characterํ์ **๋จ ํ๋์ ๋ฌธ์๋ง ์ทจ๊ธํจ**

Characterํ์์ ๋น ๋ฌธ์๋ฅผ ์ ์ฅํ๊ณ  ์ถ๋ค๋ฉด?

![1](https://user-images.githubusercontent.com/55340876/110332658-f7a78280-8063-11eb-83b7-91fdad6e1ae0.png)

<span style="color: red;">**Characterํ์ ๊ณต๋ฐฑ์์ด `""`๋ง ํด์ฃผ๋ฉด ํญ์ ๋ฌธ์์ด๋ก ์ถ๋ก ๋จ!**</span>  
๊ณต๋ฐฑ์ ์ค์ ์ง์ ํด์ค์ผ ์๋ฌ๊ฐ ์๋จ!

<span style="color: red;">**Stringํ์ `""` ๊ณต๋ฐฑ์์ด ํด์ค์ผ ๋น ๋ฌธ์์ด ์์ฑ!**</span>

```swift
// Characterํ ๋น ๋ฌธ์์ด ์์ฑ
let emptyC: Character = " "

var emptyS: String = " "
print(emptyS.count) // 1

// Stringํ ๋น ๋ฌธ์์ด ์์ฑ
emptyS = ""
print(emptyS.count) // 0

// String ์์ฑ์๋ก ๋น ๋ฌธ์์ด ์์ฑ
emptyS = String()
print(emptyS.count) // 0
```

# ๋ฌธ์์ด ํ์

**String => Swift String**  
**NSString => Foundation String**

์๋จ ์๋ก ํธํ๋จ(๋ธ๋ฆฟ์ง์ด ๊ฐ๋ฅํ ํ์ Toll-Free Bridged)

ํ์ง๋ง ์๋ก ํธํ๋๋ค์บ์ ๋ฐ๋ก ์ ์ฅ๋๋ ๊ฒ์ ์๋.

<img width="979" alt="แแณแแณแแตแซแแฃแบ 2021-03-08 แแฉแแฎ 11 26 32" src="https://user-images.githubusercontent.com/55340876/110334095-badc8b00-8065-11eb-93d4-ea2e0800165e.png">

`as` ํค์๋๋ฅผ ํตํด ํ์ ์บ์คํ์ ํ๊ณ  ์ ์ฅํด์ค์ผ ํจ.

```swift
var nsStr: NSString = "str"

let swiftStr: String = nsStr as String

nsStr = swiftStr as NSString
```

# ๋ฌธ์์ด์ ๊ฐ๋ณ์ฑ

`let` ๊ณผ `var` ํค์๋๋ก ๊ฒฐ์ ๋จ.

```swift
let immutableStr = "Swift"

var mutableStr = "Swift"
mutableStr = "Python"

print(mutableStr) // Python
```

# Unicode

์ค์ํํธ๋ ๋ฌธ์์ด์ ์ ์ฅ์, ์ ๋์ฝ๋์ ๋๋ฆฝ์ ์ธ ๋ฌธ์๋ก ์ ์ฅํจ.

```swift
let str = "Swift String"

str.utf8
str.utf16

var thumbUp = "๐"
thumbUp = "\u{1F44D}"

print(thumbUp) // ๐
```
