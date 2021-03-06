---
title: '๐ [Swift] ์๋ธ ์คํธ๋ง(Substring)'
date: 2021-01-10 06:30:00
category: 'Swift'
draft: false
showToc: true
---

```swift
let str = "Hello, Swift"

let l = str.lowercased()
print(l) // hello, swift
```

![1](https://user-images.githubusercontent.com/55340876/110339629-b61ad580-806b-11eb-8986-b478bba42f67.png)

์๋จ ์ฝ๋์์ `lowercased` ๋ฉ์๋๋ฅผ ํ์ฉ,  
ํด๋น ๋ฌธ์์ด์ ์๋ฌธ์๋ก ๋ฐ๊พผ ์๋ก์ด ๊ฐ์ ๋ฆฌํดํด์ `l` ์์์ ์ ์ฅํจ.  
`l` ์์๋ Stringํ์ผ๋ก ๋์ด์์.

`prefix()` ๋ฉ์๋๋ฅผ ์ด์ฉํด์ ์ฒซ๋ฒ์งธ ๋ฌธ์์ด์ ์ถ์ถํด๋ณด์.

![2](https://user-images.githubusercontent.com/55340876/110339625-b5823f00-806b-11eb-80c7-227e8ca1a366.png)

์๋์์ฑ์ ์ดํด๋ณด๋ฉด `Substring`์ ๋ฆฌํดํจ!!

<span style="color: red;">**์๋ธ ์คํธ๋ง์ ํ๋์ ๋ฌธ์์ด์์ ํน์  ๋ฒ์์ ์๋ ๋ฌธ์์ด์ ๋ปํจ.  
๋ฌธ์์ด์ ์ฒ๋ฆฌํ  ๋ ๋ฉ๋ชจ๋ฆฌ๋ฅผ ์ ์ฝํ๊ธฐ ์ํด์ ์ฌ์ฉํจ.**</span>

```swift
let str = "Hello, Swift"

let l = str.lowercased()

var first = str.prefix(1)
print(first) // H
```

ํ๋ผ๋ฏธํฐ๋ก `1`์ ์ ๋ฌํ๋ฉด ์ฒซ๋ฒ์งธ ๋ฌธ์ `H`๊ฐ ์ถ๋ ฅ๋จ.

์ฌ๊ธฐ์ first ์๋ฃํ์ ๋ญ๊น?

![3](https://user-images.githubusercontent.com/55340876/110339622-b4e9a880-806b-11eb-9f84-dc90e63672c3.png)

<span style="color: red;">**String.SubSequence**</span>์.

์ด๊ฒ ๋ญ๋??  
**control + cmd** ๋ก ํ์ธํด๋ด์ธ!

![4](https://user-images.githubusercontent.com/55340876/110339620-b4511200-806b-11eb-9521-592b2d1cf4c2.png)

์ํ ํ์ ๋ณ๋ช์ ์ค๊ฑฐ๊ตฐ!!  
์ฆ, **<u>์๋ธ ์คํธ๋ง์ด ์๋ธ ์ํ์ค์!!</u>**  
๊ฐ์ ๋ง์ด๋ผ ๋ ์ค ์๊บผ๋ ์จ๋จน์ด๋ ๊ด์ฐฎ์.

<span style="color: red;">**์๋ธ ์คํธ๋ง์ ์๋ณธ ๋ฌธ์์ด์ ๋ฉ๋ชจ๋ฆฌ๋ฅผ ๊ณต์ ํจ!!  
์๋ธ ์คํธ๋ง์ ์๋ณธ ๋ฌธ์์ด์ ๋ฉ๋ชจ๋ฆฌ๋ฅผ ๊ณต์ ํจ!!  
์๋ธ ์คํธ๋ง์ ์๋ณธ ๋ฌธ์์ด์ ๋ฉ๋ชจ๋ฆฌ๋ฅผ ๊ณต์ ํจ!!**</span>

![5](https://user-images.githubusercontent.com/55340876/110339618-b3b87b80-806b-11eb-93ba-b0ba8e7bc9ec.png)

![6](https://user-images.githubusercontent.com/55340876/110339608-b1562180-806b-11eb-8a79-38a874810d85.png)

`prefix` ๋ฉ์๋๋ ์๋ธ ์คํธ๋ง์ ๋ฆฌํดํจ.  
์ด์ ์๋ ์๋ก์ด ๋ฉ๋ชจ๋ฆฌ ๊ณต๊ฐ์ ์์ฑํ๊ณ  `H`๋ฅผ ์ ์ฅํ์ง๋ง  
์ด๋ฒ์ ์๋ก์ด ๋ฉ๋ชจ๋ฆฌ ๊ณต๊ฐ์ ์์ฑํ์ง ์์!

**์ฆ, ์๋ณธ ๋ฉ๋ชจ๋ฆฌ๋ฅผ ๊ณต์ ํจ!**

๊ฑ ์ฝ๊ฒ ์๊ฐํ์ผ.  
<span style="color: blue;">**์๋ธ ์คํธ๋ง์ ๊ฐ์ ์ฝ๊ธฐ๋ง ํ  ๋๋ ์๋ณธ ๋ฉ๋ชจ๋ฆฌ๋ฅผ ๊ณต์ ํ๊ณ ,  
๊ฐ์ ๋ณ๊ฒฝํ๋ ์์ ์๋ง ์๋ก์ด ๋ฉ๋ชจ๋ฆฌ ๊ณต๊ฐ์ด ์์ฑ๋จ.**</span>

์คํ ๊ฒฐ๊ณผ๋ฅผ ๋ณด์.

```swift
let str = "Hello, Swift"

let l = str.lowercased()

var first = str.prefix(1)

first.insert("!", at: first.endIndex)
print(first) // H!
print(str) // Hello, Swift
```

์๋ธ ์คํธ๋ง์ ๋ฐ๊พธ๋ฉด ๊ทธ ๋, ์๋ก์ด ๋ฉ๋ชจ๋ฆฌ๋ก ๋ณต์ฌ๋จ.

๋ฉ๋ชจ๋ฆฌ๋ฅผ ๊ณต์ ํ๊ณ  ์๋ `first` ๋ณ์๋ฅผ ๋ฐ๊ฟ๋  
์๋ณธ์ธ `str` ์์์๋ ์ํฅ์ด ๊ฐ์ง ์์!

์ค์ํํธ๋ ์ด๊ฒ์ **Copy-on-Write Optimization**์ด๋ผ๊ณ  ํจ.

Copy-on-Write ์ต์ ํ๋  
๋ถํ์ํ ๋ณต์ฌ์ ๋ฉ๋ชจ๋ฆฌ ์์ฑ์ ์ต๋ํ ์ค์ฌ์ ์ฝ๋์ ์คํ ์ฑ๋ฅ์ ๋์ฌ์ค.

Copy-on-Write๋ฅผ ์ฌ์ฉํ์ง ์๊ณ   
์๋ธ ์คํธ๋ง์ ์๋ก์ด ๋ฉ๋ชจ๋ฆฌ๋ก ๋ฐ๋ก ๋ณต์ฌํ๊ณ  ์ถ๋ค๋ฉด??

๋ฌธ์์ด ์์ฑ์๋ก ์๋ก์ด ๋ฌธ์์ด์ ์์ฑํด๋ณด์.

```swift
let newStr = String(str.prefix(1))
print(newStr) // H
```

๋ฌธ์์ด ์์ฑ์์ `prefix` ๊ฐ ๋ฆฌํดํ๋ ๊ฐ์ธ ์๋ธ ์คํธ๋ง์ ๋ฐ๋ก ์ ๋ฌํ๊ธฐ๋ง ํ๋ฉด ๋จ!  
์ด๋ฌ๋ฉด ์๋ก์ด ๋ฉ๋ชจ๋ฆฌ ๊ณต๊ฐ์ด ์์ฑ๋๊ณ  ๊ฑฐ๊ธฐ์ ๋ฌธ์์ด์ด ์ ์ฅ๋จ.

๋ฌธ์์ด์์ ํน์  ๋ฒ์๋ฅผ ์ถ์ถํด๋ด์ธ!  
์ฒ์ 2๊ฐ์ ๋ฌธ์๋ง ์ถ์ถํด๋ณด์.

```swift
let s = str[str.startIndex ..< str.index(str.startIndex, offsetBy: 2)]
print(s) // He
```

**์๋ธ ์คํธ๋ง ์์ฝ**

- ์๋ณธ ๋ฉ๋ชจ๋ฆฌ๋ฅผ ๊ณต์ ํจ
- ๋ณ์์ ์ ์ฅ๋ ๋ฌธ์์ด์ ๋ฐ๊พธ์ง ์๋๋ค๋ฉด ์๋ก์ด ๋ฌธ์์ด์ ์์ฑ๋์ง ์์
- ๋ณ์์ ์ ์ฅ๋ ๋ฌธ์์ด์ ๋ฐ๊พธ๋ฉด ๊ทธ ์์ ์ ์๋ก์ด ๋ฌธ์์ด์ด ์์ฑ๋จ
- ์ง์  ์๋ก์ด ๋ฌธ์์ด์ ์์ฑํ๊ณ  ์ถ๋ค๋ฉด String ์์ฑ์๋ฅผ ์ฌ์ฉํจ
