---
title: '🕊 [Swift] 고차 함수'
date: 2021-03-09 01:00:00
category: 'Swift'
draft: false
showToc: true
---

# 고차 함수

Higher-order function

- <span style="color: red;">**함수를 파라미터로 받거나 함수 실행 결과를 함수로 반환하는 함수**</span>
- <span style="color: red;">**스위프트는 1급 객체(1급 시민)**</span>
  - 함수의 파라미터로 전달 가능
  - 함수의 리턴값으로 반환 가능
  - 변수/상수에 저장 가능

## map

컨테이너 내부의 기존 데이터를 변형하여 새로운 컨테이너를 생성함.  
즉, **컨테이너가 담고 있던 각각의 값을 파라미터를 통해 받은 함수에 적용 후,  
새로운 컨테이너를 생성하여 반환함.**

이 때, 기존 컨테이너의 값은 변경되지 않음!

for-in문과 비슷하나 코드는 더 간결하고,  
Sequence, Collection 프로토콜을 따르는 타입과 옵셔널은 `map`을 사용할 수 있음.

- **Array, Dictionary, Set, Optional**

```swift
let numbers: [Int] = [0, 1, 2, 3, 4, 5]
var doubleNumbers = [Int]()
var stringNumbers = [String]()

doubleNumbers = numbers.map({ (number: Int) -> Int in
    return number * 2
})
print(doubleNumbers) // [0, 2, 4, 6, 8, 10]

// 문법 최적화
doubleNumbers = numbers.map { $0 * 2 }
print(doubleNumbers) // [0, 2, 4, 6, 8, 10]

stringNumbers = numbers.map({ (number: Int) -> String in
    return "\(number)"
})
print(stringNumbers) // ["0", "1", "2", "3", "4", "5"]

// 문법 최적화
stringNumbers = numbers.map { "\($0)" }
print(stringNumbers) // ["0", "1", "2", "3", "4", "5"]
```

## compactMap

map과 사용법이 동일함.  
**요놈은 1차원 배열에서 `nil`을 제거하고 옵셔널 바인딩을 해줌.**

```swift
let x: [Int?] = [0, 1, 2, nil, 4]

let map = x.map { $0 }
print(map) // [Optional(0), Optional(1), Optional(2), nil, Optional(4)]

let cMap = x.compactMap { $0 }
print(cMap) // [0, 1, 2, 4]
```

## flatMap

**2차월 배열을 1차원 배열로 만들때 사용함.**

```swift
let a: [[Int?]] = [[0, 1, nil], [3, 4, 5]]

let fMap = a.flatMap { $0 }
print(fMap) // [Optional(0), Optional(1), nil, Optional(3), Optional(4), Optional(5)]

let compactfMap = fMap.compactMap { $0 }
print(compactfMap) // [0, 1, 3, 4, 5]
```

## filter

컨테이너 내부의 값을 걸러서 새로운 컨테이너로 추출함.  
즉, **컨테이너가 담고 있던 각각의 값을 조건에 맞는 새로운 값만 추출하여 반환함.**

```swift
let numbers: [Int] = [0, 1, 2, 3, 4, 5]

var evenNumbers: [Int] = numbers.filter { (number: Int) -> Bool in
    return number % 2 == 0
}
print(evenNumbers) // [0, 2, 4]

// 문법 최적화
evenNumbers = numbers.filter { $0 % 2 == 0}
print(evenNumbers) // [0, 2, 4]

// 문법 최적화
let oddNumbers: [Int] = numbers.filter { $0 % 2 != 0 }
print(oddNumbers) // [1, 3, 5]
```

## reduce

컨테이너 내부의 콘텐츠를 하나로 통합함.  
즉, **컨테이너 내부의 값을 하나로 통합(연산)하여 리턴함.**

```swift
let numbers: [Int] = [0, 1, 2, 3, 4, 5]

var sum: Int = numbers.reduce(0) { (first: Int, second: Int) -> Int in
    return first + second
}
print(sum) // 15

// 문법 최적화
sum = numbers.reduce(0) { $0 + $1 }
print(sum) // 15

// 문법 최적화
let subtract: Int = numbers.reduce(0) { $0 - $1 }
print(subtract) // -15

var sumFromTwo: Int = numbers.reduce(2) { (first: Int, second: Int) -> Int in
    return first + second
}
print(sumFromTwo) // 17

//문법 최적화
sumFromTwo = numbers.reduce(2) { $0 + $1 }
print(sumFromTwo) // 17

```

상단 코드에서 `numbers.reduce(0)` 는 **초깃값** `0`을 말함.

흠.. 문법 최적화는 방법이 여러개군!! 🤔  
어렵지만 재밌군!!
