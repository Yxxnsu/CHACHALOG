---
title: '🕊 [Swift] CaseIterable'
date: 2021-01-11 20:00:00
category: 'Swift'
draft: false
showToc: true
---

열거형의 기능 확장

```swift
enum Weekday: Int, CaseIterable {
    case sunday
    case monday
    case tuesday
    case wednesday
    case thursday
    case friday
    case saturday
}

// 요일 랜덤뽑기
let rnd = Int.random(in: 0...Weekday.allCases.count)
Weekday(rawValue: rnd)

Weekday.allCases.randomElement()

// allCases가 배열을 리턴하니 반복문으로 열거 가능
for w in Weekday.allCases {
    print(w)
}
// sunday
// monday
// tuesday
// wednesday
// thursday
// friday
// saturday
```