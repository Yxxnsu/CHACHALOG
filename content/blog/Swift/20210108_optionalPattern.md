---
title: '🕊 [Swift] 옵셔널 패턴'
date: 2021-01-08 08:00:00
category: 'Swift'
draft: false
showToc: true
---

옵셔널 패턴(Optional Pattern)

```swift
if a == nil {

}

if a == .none {

}

if a == 0 {

}

if a == .some(0) {

}
```

```swift
let a: Int? = 0 // 옵셔널Int 타입

let b: Optional<Int> = 0

// 옵셔널 바인딩
if let x = a {
   print(x) // 0
}

// 나열(enumeration) case 패턴
if case .some(let x) = a {
   print(x) // 0
}

// 옵셔널 패턴
// 나열(enumeration) case 패턴의 옵셔널 버전
// 나열(enumeration) case 패턴을 사용할 수 있다면 옵셔널 패턴도 사용할 수 있음!
// a 상수에 값이 저장되어 있다면 x 상수로 바인딩 되고 if 블럭이 실행되고,
// 값이 저장되어 있지 않다면 바인딩할 값이 없으니 if 블럭은 실행되지 않는다.
if case let x? = a {
   print(x) // 0
}


// 옵셔널 패턴 써도 되지만 옵셔널 패턴은 좀 더 코드가 간결해지는 장점이 있다.
let list: [Int?] = [0, nil, nil, 3, nil, 5]

// 옵셔널 바인딩
for item in list {
    // 0이 전달되면 바인딩 된 값이 있기 때문에 x에 바인딩 되고 출력
    // nil이 전달되면 바인딩할 값이 없고 else 블럭 실행 continue가 호출되면서 다음 회차 실행
   guard let x = item else { continue }
   print(x) // 0 3 5
}


// 옵셔널 패턴
// 리스트 배열에 저장된 값을 차례대로 바인딩 하는데
// 정상적으로 바인딩 되면 x를 반복상수로 전달해서 반복코드를 실행
// 반대로 바인딩 되지않으면 반복코드를 실행하지 않고, 이어지는 다음 값을 바로 바인딩 한다.
for case let x? in list {
   print(x) // 0 3 5
}
```
