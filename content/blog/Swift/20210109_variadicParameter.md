---
title: '🕊 [Swift] 가변 파라미터(...)'
date: 2021-01-09 15:00:00
category: 'Swift'
draft: false
showToc: true
---

# 가변 파라미터(Variadic Parameter)

가변 파라미터에 대해 이해하기 위해선 배열에 대해 알아야함.

```swift
(이름: 타입...)
```

**가변 파라미터에는 하나 이상의 인자를 전달할 수 있음.**  
<span style="color: red;">**전달 가능한 인자 수가 고정되어 있지않고 가변적이라 '가변 파라미터' 라고 부름!**</span>

공백없이 `...` 이 따라옴.  
요래 하면 가변 파라미터로 선언됨.

**가변 파라미터는 인자를 함수 내부로 전달할 때 배열 형태로 전달함.**

```swift
func printSum(of nums: Int...) {
   var sum = 0
   for num in nums {
      sum += num
   }

   print(sum)
}

printSum(of: 1, 2, 3) // 6
printSum(of: 1, 2, 3, 4, 5) // 15
```

상단 코드를 보면 `nums`는 `nums: [Int]` 로 배열 형태가 확인됨.

![1](https://user-images.githubusercontent.com/55340876/110238582-b6d93c00-7f85-11eb-95a3-0a43d1665c31.png)

하나의 파라미터로 2개 이상의 인자를 전달할 수 있음!  
이 때, 인자는 배열 형태로 전달되는고!!

![2](https://user-images.githubusercontent.com/55340876/110238579-b5a80f00-7f85-11eb-90a2-a59ed06ccfd1.png)

<span style="color: red;">**상단 사진처럼 가변 파라미터는 개별 함수마다 딱 하나씩만 선언 가능함!**</span>  
`func printSum(of nums: Int..., b: Double)`  
요로케만 가능! (요래 하는 경우는 거의 없음)

가변 파라미터의 선언 순서는 상관없음.

![3](https://user-images.githubusercontent.com/55340876/110238575-b345b500-7f85-11eb-9472-773d45259245.png)

<span style="color: red;">**가변 파라미터는 기본값을 가질 수 없음!!**</span>  
일반 파라미터와 달리 기본값 선언 노노해!!
