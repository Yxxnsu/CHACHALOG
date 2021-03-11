---
title: '🕊 [Swift] 컬렉션 열거(for-in/forEach)'
date: 2021-01-11 14:00:00
category: 'Swift'
draft: false
showToc: true
---

<span style="color: red;">**컬렉션에 저장된 모든 요소를 대상으로 반복적인 작업을 실행함.**</span>

가장 쉬우면서 자주 사용되는 `for-in` 반복문!  

```swift
for 요소 in 컬렉션 {
    실행구문
}
```
컬렉션에 저장된 요소의 수만큼 반복함.  
저장된 요소는 루프 상수로 하나씩 전달됨.

# 배열 열거

배열은 정렬된 컬렉션이기 때문에  
1 ~ 3 까지의 배열의 요소들이 루프 상수로 순서대로 전달됨.

```swift
let nums = [1, 2, 3]

for num in nums {
    print(num)
}
// 1
// 2
// 3
```

# Set 열거

set은 정렬되지 않은 컬렉션이라 실제로 출력되는 순서는 실행 때마다 다름.

```swift
let set: Set = [1, 2, 3]

for num in set {
    print(num)
}
// 매번 다르게 출력
// 1
// 3
// 2
```

# 딕셔너리 열거

딕셔너리는 키: 값이 하나의 요소로 저장됨.  
루프 상수로 전달되는 요소는 튜플 형태로 저장됨.  
set처럼 정렬되지 않은 컬렉션이라 실행 때마다 열거 순서는 달라질 수 있음.

```swift
let dict: [String: Int] = ["A": 1, "B": 2, "C": 3]

for (key, value) in dict {
    print(key, value)
}
// 매번 다르게 출력
// B 2
// C 3
// A 1
```

# forEach

주로 함수형 패러다임으로 코드를 작성할 때 사용함.  
반복적으로 실행하는 코드를 **클로저 파라미터**로 받음.  
**이 클로저는 하나의 파라미터를 갖고있고 값을 리턴하지 않음!**

for-in 반복문에서는 컬렉션에 저장된 요소가 루프 상수로 전달되었는데,  
**<u>forEach 메서드에서는 클로저의 파라미터로 전달됨.</u>**

## forEach 배열 열거

```swift
let nums = [1, 2, 3]

nums.forEach { (num) in
    print(num)
}
// 1
// 2
// 3
```

## forEach Set 열거

```swift
let set: Set = [1, 2, 3]

set.forEach { (num) in
    print(num)
}
// 3
// 2
// 1
```

## forEach Dictionary 열거

forEach는 반복문이 아님.  
코드 내부에서 `break` `continue`는 사용 불가능!  

`return`문이 외부와 반복 횟수에 영향을 주지 않고,  
지금 실행하고 있는 클로저 코드를 중지할 뿐임.

```swift
func withForIn() {
    print(#function)
    let arr = [1, 2, 3]
    for num in arr {
        //break // 사용가능
        //continue // 사용가능
        print(num)
        return // 반복문이 포함되어 있는 코드 블럭이 바로 종료된다.
    }
}
// withForIn()
// 1


func withForeach() {
    print(#function)
    let arr = [1, 2, 3]
    arr.forEach { (num) in
        //break // 에러 (반복문 내부에서만 사용가능 이건 반복문이 아니니까 실행노노해)
        //continue // 에러 (반복문 내부에서만 사용가능 이건 반복문이 아니니까 실행노노해)
        print(num)
        return // 외부와 반복 횟수에 영향을 주지 않는다. 지금 실행하고 있는 클로저 코드를 중지할 뿐.
    }
}
// withForeach()
// 1
// 2
// 3

withForIn()
withForeach()
```