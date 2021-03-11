---
title: '🕊 [Swift] Enumeration Case Pattern'
date: 2021-01-11 19:00:00
category: 'Swift'
draft: false
showToc: true
---

연관값을 가진 열거형 케이스를 매칭시킬 때 사용함.  
if, switch, for-in, while, guard 문에서 사용됨.

```swift
case Enum.case(let name):
case Enum.case(var name):

case let Enum.case(name):
case var Enum.case(name):
```

**교통 수단을 나타내는 열거형 선언해보기**

```swift
enum Transportation {
    case bus(number: Int)
    case taxi(company: String, number: String)
    case subway(lineNumber: Int, express: Bool)
}

var tpt = Transportation.bus(number: 5524)

switch tpt {
// bus 케이스를 매칭시키고, 연관값을 n 상수에 바인딩
case .bus(let n):
    print(n)
// taxi 케이스를 매칭시키고, 연관값을 c 상수에 n 변수에 바인딩
case .taxi(let c, var n):
    print(c, n)
// subway 케이스를 매칭시키고, 연관값을 l, e 상수에 바인딩
case let .subway(l, e):
    print(l, e)
}

tpt = Transportation.subway(lineNumber: 2, express: false)

// 2호선 지하철인지 확인하고 급행 여부에 따라 코드를 분기
if case let .subway(2, express) = tpt {
    if express {
        
    } else {
        
    }
}

// 급행 지하철만 확인하기
// 값을 바인딩하지 않으니 case 키워드 다음에 let, var 키워드는 안쓴다.
if case .subway(_, true) = tpt {
    print("express")
}

let list = [
    Transportation.subway(lineNumber: 2, express: false),
    Transportation.bus(number: 5530),
    Transportation.subway(lineNumber: 7, express: true),
    Transportation.taxi(company: "SeoulTaxi", number: "1234")
]

for case let .subway(n, _) in list {
    print("subway \(n)")
}
// subway 2
// subway 7

for case let .subway(n, true) in list where n == 2 {
    print("subway \(n)")
}
```