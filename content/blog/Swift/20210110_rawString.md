---
title: '🕊 [Swift] Raw String'
date: 2021-01-10 03:00:00
category: 'Swift'
draft: false
showToc: true
---

```swift
var str = "\"Hello\", Swift 5"
print(str) // "Hello", Swift 5


var rawStr = #""Hello", Swift 5"#
print(rawStr) // "Hello", Swift 5
```

```swift
// 줄바꿈
var str = "Lorem\nIpsum"
print(str)

var rawStr = #"Lorem\#nIpsum"#
print(rawStr)
```

```swift
let value = 123

var str = "The value is \(value)" // The value is 123

var rawStr = #"The value is \#(value)"# // The value is 123
```

```swift
var zipCodeRegex = "^\\d{3}-?\\d{3}$"

// raw stirng
zipCodeRegex = #"^\d{3}-?\d{3}$"#

let zipCode = "123-456"
if let _ = zipCode.range(of: zipCodeRegex, options: [.regularExpression]) {
    print("valid")
} // valid
```

**정규식 문자열을 직관적으로 작성할 수 있음**
