---
title: '๐ [Swift] ๋ฌธ๋ฒ ์ต์ ํ'
date: 2021-01-09 23:45:00
category: 'Swift'
draft: false
showToc: true
---

์ ์ ๋ฌธ๋ฒ๊ณผ ๋จ์ถ ๋ฌธ๋ฒ์ ๋ง์ด ๋ค๋ฆ.  
์ค์ํํธ๋ ๋ฌธ๋ฒ ์ต์ ํ๋ฅผ ์.์ฃผ. ์กฐ์ํจ!

์ ๋ฒ์ ํด๋ก์  ํฌ์คํ์์ ์จ๋จน์ ์ฝ๋๋ฅผ ์ฌํ์ฉ ํด๋ณด์.

```swift
let products = [
   "MacBook Air", "MacBook Pro",
   "iMac", "iMac Pro", "Mac Pro", "Mac mini",
   "iPad Pro", "iPad", "iPad mini",
   "iPhone 12", "iPhone12 Pro",
   "AirPods", "AirPods Pro",
   "Apple Watch"
]
```

๋จผ์  ์๋ก์ฝ๋กฌ ๋ฐฐ์ด์ด ์์๊ณ ,  
`Pro` ๊ฐ ํฌํจ๋ ์ ํ๋ง ๋นผ์ฌ๊ฑฐ์.

# ํํฐ๋ง ๋ฌธ๋ฒ ์ต์ ํ

์ด ๋, `filter` ๋ฉ์๋๋ฅผ ํตํด ํํฐ๋ง์ ํ์์.

```swift
// ํํฐ๋ง
var proModels = products.filter({ (name: String) -> Bool in
   return name.contains("Pro")
})

print(proModels)
// ["MacBook Pro", "iMac Pro", "Mac Pro", "iPad Pro", "iPhone12 Pro", "AirPods Pro"]
```

ํ์ง๋ง ์ฝ๋๊ฐ ์ซ ๊ธธ์ด์ ๋ณ๋ฃจ๋ค;;  
์๋จ ์ฝ๋๋ฅผ ๋ฌธ๋ฒ ์ต์ ํ ํด๋ณด์์!!

```swift
// ๋ฌธ๋ฒ ์ต์ ํ
var proModels = products.filter {
   $0.contains("Pro")
}

print(proModels)
// ["MacBook Pro", "iMac Pro", "Mac Pro", "iPad Pro", "iPhone12 Pro", "AirPods Pro"]
```

์คํธ... ํ ์ค์ด๋ฌ.

</br>

**1. `(ํ๋ผ๋ฏธํฐ) -> ๋ฆฌํดํ์` ์๋ต ๊ฐ๋ฅ**  
**2. ์ ๊ฒฝ์ฐ์๋ `in` ํค์๋ ์๋ต ๊ฐ๋ฅ**  
**3. `$` ์ด๋ ์ซ์๊ฐ ์กฐํฉ๋ ํํ์ธ shorthand argument name์ผ๋ก ๋์ฒด**

</br>

์ฒซ๋ฒ์งธ ํ๋ผ๋ฏธํฐ๋ `$0`  
๋๋ฒ์งธ ํ๋ผ๋ฏธํฐ๋ `$1`  
์ด๋ฐ์์ด ๋๋๊ณ ์!

</br>

**4. ๋จ์ผ ํํ์๋ง ๋จ์์ผ๋ `return` ํค์๋ ์๋ต ๊ฐ๋ฅ**  
**5. `({})` ์๋ ์ธ๋ผ์ธ ํด๋ก์ ๋ฅผ `(){}` ์ธ trailing ํด๋ก์ ๋ก ๋ฐ๊ฟ**  
**6. ํ์ฌ๋ ํ๋ผ๋ฏธํฐ๊ฐ ์กด์ฌํ์ง ์์ผ๋๊น `()` ์๋ต ๊ฐ๋ฅ**

</br>

๊ตฟ์ก!!

# ์ค๋ฆ์ฐจ์ ๋ฌธ๋ฒ ์ต์ ํ

```swift
var proModels = products.filter {
   $0.contains("Pro")
}

// ๋์๋ฌธ์ ๊ด๊ณ์์ด ์ค๋ฆ์ฐจ์ ์ ๋ ฌ
proModels.sort(by: { (lhs: String, rhs: String) -> Bool in
   return lhs.caseInsensitiveCompare(rhs) == .orderedAscending
})

print(proModels)
// ["AirPods Pro", "iMac Pro", "iPad Pro", "iPhone12 Pro", "Mac Pro", "MacBook Pro"]
```

์๋จ ์ฝ๋๋ฅผ ์ต์ ํ ํ๋ฉด?

```swift
var proModels = products.filter {
   $0.contains("Pro")
}

// ๋ฌธ๋ฒ ์ต์ ํ
proModels.sort{
   $0.caseInsensitiveCompare($1) == .orderedAscending
}

print(proModels)
// ["AirPods Pro", "iMac Pro", "iPad Pro", "iPhone12 Pro", "Mac Pro", "MacBook Pro"]
```

# ๋ฌธ์์ด ํฌํจ์ฌ๋ถ ๋ฌธ๋ฒ ์ต์ ํ

```swift
var proModels = products.filter {
   $0.contains("Pro")
}

// ๋ฌธ์์ด ํฌํจ์ฌ๋ถ
var test = proModels.contains(where: { (a: String) -> Bool in
   return a.hasPrefix("Air")
})

var test2 = proModels.contains(where: { (a: String) -> Bool in
   return a.hasPrefix("Swift")
})

print(test) // true
print(test2) // false
```

์๋จ ์ฝ๋๋ฅผ ์ต์ ํ ํ๋ฉด??

```swift
var proModels = products.filter {
   $0.contains("Pro")
}

// ๋ฌธ๋ฒ ์ต์ ํ
var test = proModels.contains{
   $0.hasPrefix("Air")
}

var test2 = proModels.contains{
   $0.hasPrefix("Swift")
}

print(test) // true
print(test2) // false
```

์ฌ์ค ์ด์ ๋์ ๋ฌธ๋ฒ ์ต์ ํ๋ ์ฝ๋๋ฅผ ์ฒจ๋ถํฐ ๋๊น์ง ์ ๋ณธ ์ฌ๋์  
ํ๋ฒ์ ์ดํดํ๊ธฐ ํ๋ค ์ ์์ ๋ฏ...

๊ฐ๋์ฑ์ด ์๊ฒ๋ ์ค์ฌ์ฃผ์!
