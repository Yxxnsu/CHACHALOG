---
title: '๐ [Swift] ์ผํญ ์ฐ์ฐ์'
date: 2021-01-07 02:00:00
category: 'Swift'
draft: false
showToc: true
---

```swift
์กฐ๊ฑด ? ํํ์1 : ํํ์2
```

<span style="color: red;">**์ฃผ์ํ  ์  2๊ฐ์ง**</span>
1. ์ฒ์์๋ ๋ถ๋ฆฌ์ธ ํํ์์ด ์์ผํจ
2. ๋๋ฒ์งธ ํผ์ฐ์ฐ์์ ์ธ๋ฒ์งธ ํผ์ฐ์ฐ์์ ์๋ฃํ์ ๊ฐ์์ผ ํจ

```swift
let age = 18

// ๋ถ๋ฆฌ์ธ ํํ์์ ๋ฐ์ ธ์ true๋ฉด ์ผ์ชฝ ๊ฐ์, false๋ฉด ์ค๋ฅธ์ชฝ ๊ฐ์ ๋ฐํ
age < 20 ? "์ด๋ฆฌ๋ค" : "์ด๋ฅธ์ด๋ค" // ์ด๋ฆฌ๋ค

// if๋ฌธ์ ๊ฒฝ์ฐ
if age < 20 {
    "์ด๋ฆฌ๋ค"
} else {
    "์ด๋ฅธ์ด๋ค"
}
```

์ ํ์ง๊ฐ 3๊ฐ ์ด์์ด๋ผ๋ฉด ์ฝ๋๊ฐ ์ง์ ๋ถํด์ง ์ ์์ผ๋๊น  
if๋ฌธ์ด๋ switch๋ฌธ์ ์ฌ์ฉํจ!  