---
title: '🕊 [Swift] 문자 / 문자열'
date: 2021-01-10 02:00:00
category: 'Swift'
draft: false
showToc: true
---

# 문자 / 문자열

```swift
let s = "String"

let c = "C"
```

String형은 문자열의 갯수와는 상관없이 다 String형으로 저장됨.

여기서 `c` 상수를 Character형으로 저장하고 싶다면??

```swift
let c: Character = "C"
```

명시적으로 요래 타입을 지정해주면 됨!  
여기서 Character형은 **단 하나의 문자만 취급함**

Character형에서 빈 문자를 저장하고 싶다면?

![1](https://user-images.githubusercontent.com/55340876/110332658-f7a78280-8063-11eb-83b7-91fdad6e1ae0.png)

<span style="color: red;">**Character형은 공백없이 `""`만 해주면 항상 문자열로 추론됨!**</span>  
공백을 줘서 지정해줘야 에러가 안남!

<span style="color: red;">**String형은 `""` 공백없이 해줘야 빈 문자열 생성!**</span>

```swift
// Character형 빈 문자열 생성
let emptyC: Character = " "

var emptyS: String = " "
print(emptyS.count) // 1

// String형 빈 문자열 생성
emptyS = ""
print(emptyS.count) // 0

// String 생성자로 빈 문자열 생성
emptyS = String()
print(emptyS.count) // 0
```

# 문자열 타입

**String => Swift String**  
**NSString => Foundation String**

얘넨 서로 호환됨(브릿징이 가능한 타입 Toll-Free Bridged)

하지만 서로 호환된다캐서 바로 저장되는 것은 아님.

<img width="979" alt="스크린샷 2021-03-08 오후 11 26 32" src="https://user-images.githubusercontent.com/55340876/110334095-badc8b00-8065-11eb-93d4-ea2e0800165e.png">

`as` 키워드를 통해 타입 캐스팅을 하고 저장해줘야 함.

```swift
var nsStr: NSString = "str"

let swiftStr: String = nsStr as String

nsStr = swiftStr as NSString
```

# 문자열의 가변성

`let` 과 `var` 키워드로 결정됨.

```swift
let immutableStr = "Swift"

var mutableStr = "Swift"
mutableStr = "Python"

print(mutableStr) // Python
```

# Unicode

스위프트는 문자열을 저장시, 유니코드의 독립적인 문자로 저장함.

```swift
let str = "Swift String"

str.utf8
str.utf16

var thumbUp = "👍"
thumbUp = "\u{1F44D}"

print(thumbUp) // 👍
```
