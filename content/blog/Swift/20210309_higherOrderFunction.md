---
title: 'π [Swift] κ³ μ°¨ ν¨μ'
date: 2021-03-09 01:00:00
category: 'Swift'
draft: false
showToc: true
---

# κ³ μ°¨ ν¨μ

Higher-order function

- <span style="color: red;">**ν¨μλ₯Ό νλΌλ―Έν°λ‘ λ°κ±°λ ν¨μ μ€ν κ²°κ³Όλ₯Ό ν¨μλ‘ λ°ννλ ν¨μ**</span>
- <span style="color: red;">**μ€μννΈλ 1κΈ κ°μ²΄(1κΈ μλ―Ό)**</span>
  - ν¨μμ νλΌλ―Έν°λ‘ μ λ¬ κ°λ₯
  - ν¨μμ λ¦¬ν΄κ°μΌλ‘ λ°ν κ°λ₯
  - λ³μ/μμμ μ μ₯ κ°λ₯

## map

μ»¨νμ΄λ λ΄λΆμ κΈ°μ‘΄ λ°μ΄ν°λ₯Ό λ³ννμ¬ μλ‘μ΄ μ»¨νμ΄λλ₯Ό μμ±ν¨.  
μ¦, **μ»¨νμ΄λκ° λ΄κ³  μλ κ°κ°μ κ°μ νλΌλ―Έν°λ₯Ό ν΅ν΄ λ°μ ν¨μμ μ μ© ν,  
μλ‘μ΄ μ»¨νμ΄λλ₯Ό μμ±νμ¬ λ°νν¨.**

μ΄ λ, κΈ°μ‘΄ μ»¨νμ΄λμ κ°μ λ³κ²½λμ§ μμ!

for-inλ¬Έκ³Ό λΉμ·νλ μ½λλ λ κ°κ²°νκ³ ,  
Sequence, Collection νλ‘ν μ½μ λ°λ₯΄λ νμκ³Ό μ΅μλμ `map`μ μ¬μ©ν  μ μμ.

- **Array, Dictionary, Set, Optional**

```swift
let numbers: [Int] = [0, 1, 2, 3, 4, 5]
var doubleNumbers = [Int]()
var stringNumbers = [String]()

doubleNumbers = numbers.map({ (number: Int) -> Int in
    return number * 2
})
print(doubleNumbers) // [0, 2, 4, 6, 8, 10]

// λ¬Έλ² μ΅μ ν
doubleNumbers = numbers.map { $0 * 2 }
print(doubleNumbers) // [0, 2, 4, 6, 8, 10]

stringNumbers = numbers.map({ (number: Int) -> String in
    return "\(number)"
})
print(stringNumbers) // ["0", "1", "2", "3", "4", "5"]

// λ¬Έλ² μ΅μ ν
stringNumbers = numbers.map { "\($0)" }
print(stringNumbers) // ["0", "1", "2", "3", "4", "5"]
```

## compactMap

mapκ³Ό μ¬μ©λ²μ΄ λμΌν¨.  
**μλμ 1μ°¨μ λ°°μ΄μμ `nil`μ μ κ±°νκ³  μ΅μλ λ°μΈλ©μ ν΄μ€.**

```swift
let x: [Int?] = [0, 1, 2, nil, 4]

let map = x.map { $0 }
print(map) // [Optional(0), Optional(1), Optional(2), nil, Optional(4)]

let cMap = x.compactMap { $0 }
print(cMap) // [0, 1, 2, 4]
```

## flatMap

**2μ°¨μ λ°°μ΄μ 1μ°¨μ λ°°μ΄λ‘ λ§λ€λ μ¬μ©ν¨.**

```swift
let a: [[Int?]] = [[0, 1, nil], [3, 4, 5]]

let fMap = a.flatMap { $0 }
print(fMap) // [Optional(0), Optional(1), nil, Optional(3), Optional(4), Optional(5)]

let compactfMap = fMap.compactMap { $0 }
print(compactfMap) // [0, 1, 3, 4, 5]
```

## filter

μ»¨νμ΄λ λ΄λΆμ κ°μ κ±Έλ¬μ μλ‘μ΄ μ»¨νμ΄λλ‘ μΆμΆν¨.  
μ¦, **μ»¨νμ΄λκ° λ΄κ³  μλ κ°κ°μ κ°μ μ‘°κ±΄μ λ§λ μλ‘μ΄ κ°λ§ μΆμΆνμ¬ λ°νν¨.**

```swift
let numbers: [Int] = [0, 1, 2, 3, 4, 5]

var evenNumbers: [Int] = numbers.filter { (number: Int) -> Bool in
    return number % 2 == 0
}
print(evenNumbers) // [0, 2, 4]

// λ¬Έλ² μ΅μ ν
evenNumbers = numbers.filter { $0 % 2 == 0}
print(evenNumbers) // [0, 2, 4]

// λ¬Έλ² μ΅μ ν
let oddNumbers: [Int] = numbers.filter { $0 % 2 != 0 }
print(oddNumbers) // [1, 3, 5]
```

## reduce

μ»¨νμ΄λ λ΄λΆμ μ½νμΈ λ₯Ό νλλ‘ ν΅ν©ν¨.  
μ¦, **μ»¨νμ΄λ λ΄λΆμ κ°μ νλλ‘ ν΅ν©(μ°μ°)νμ¬ λ¦¬ν΄ν¨.**

```swift
let numbers: [Int] = [0, 1, 2, 3, 4, 5]

var sum: Int = numbers.reduce(0) { (first: Int, second: Int) -> Int in
    return first + second
}
print(sum) // 15

// λ¬Έλ² μ΅μ ν
sum = numbers.reduce(0) { $0 + $1 }
print(sum) // 15

// λ¬Έλ² μ΅μ ν
let subtract: Int = numbers.reduce(0) { $0 - $1 }
print(subtract) // -15

var sumFromTwo: Int = numbers.reduce(2) { (first: Int, second: Int) -> Int in
    return first + second
}
print(sumFromTwo) // 17

//λ¬Έλ² μ΅μ ν
sumFromTwo = numbers.reduce(2) { $0 + $1 }
print(sumFromTwo) // 17

```

μλ¨ μ½λμμ `numbers.reduce(0)` λ **μ΄κΉκ°** `0`μ λ§ν¨.

ν .. λ¬Έλ² μ΅μ νλ λ°©λ²μ΄ μ¬λ¬κ°κ΅°!! π€  
μ΄λ ΅μ§λ§ μ¬λ°κ΅°!!
