---
title: 'π [Swift] λ¬Έμμ΄ κ²μ'
date: 2021-01-10 09:00:00
category: 'Swift'
draft: false
showToc: true
---

```swift
let str = "Hello, Swift"

// λ¬Έμμ΄μ΄ ν¬ν¨λμ΄ μλμ§ κ²μ (λμλ¬Έμλ₯Ό κ΅¬λΆ)
str.contains("Swift") // true
str.contains("swift") // false
// λμλ¬Έμ λ¬΄μνκ³  κ²μ
str.lowercased().contains("swift") // true

// λ²μ κ²μ (μ΅μλ νμμΌλ‘ λ¦¬ν΄)
str.range(of: "Swift")
str.range(of: "Swift", options: [.caseInsensitive])


let str2 = "Hello, Programming"
let str3 = str2.lowercased()

// κ³΅ν΅ μ λμ΄ κ²μ
var common = str.commonPrefix(with: str2) // Hello

// str3 λ¬Έμμ΄κ³Ό λΉκ΅
// λμλ¬Έμ κ΅¬λΆνκΈ° λλ¬Έμ λΉ λ¬Έμμ΄ λ¦¬ν΄
common = str.commonPrefix(with: str3) // λΉ λ¬Έμμ΄
// λμλ¬Έμ λ¬΄μ
// λ¦¬ν΄μμλ νΈμΆλ λμ(str)μ λ¦¬ν΄νλ€! (λ©μλμ μΈμλ§κ³ ! κ·Έλλ° helloκ° μλ Hello!)
str.commonPrefix(with: str3, options: [.caseInsensitive]) // Hello
```