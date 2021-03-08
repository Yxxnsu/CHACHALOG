---
title: '🕊 [Swift] 클로저 값 캡쳐'
date: 2021-01-09 23:46:00
category: 'Swift'
draft: false
showToc: true
---

![1](https://user-images.githubusercontent.com/55340876/110316435-13a02980-804e-11eb-9b2a-5ee3099d0383.png)

- `함수`는 값을 캡쳐하지 않음
- `내장 함수`는 자신을 포함하고 있는 함수 바디에 있는 값에 접근할 때 값을 캡쳐함
- `클로저`는 클로저 외부의 값에 접근할 때 값을 캡쳐함

```swift
var num = 0
print("테스트1: \(num)") // 테스트1: 0

num += 1
print("테스트2: \(num)") // 테스트2: 1
```

# 값 캡쳐

```swift
var num = 0

let c = { print("테스트1: \(num)") }
c() // 테스트1: 0

num += 1
print("테스트2: \(num)") // 테스트2: 1
```

상단 코드에서

```swift
let c = { print("테스트1: \(num)") }
```

이 부분에서 클로저가 `num` 값을 캡쳐함.

<span style="color: red;">**클로저 내부에서 외부에 있는 값에 접근하면,  
클로저는 해당 값을 캡쳐함!!!**</span>

캡쳐라는 표현이 와닿지 않는다면 걍 **값을 가져와서 쓴다**고 생각하삼.

<span style="color: blue;">**스위프트에서 값을 캡쳐하는 방법은 참조를 캡쳐하는 것.  
걍 원본을 그대로 가져온다고 생각하면 됨!**</span>

```swift
var num = 0

let c = {
   num += 1
   print("테스트1: \(num)")
}

c() // 테스트1: 1

print("테스트2: \(num)") // 테스트2: 1
```

<span style="color: red;">**클로저 내부에서 캡쳐한 값을 바꾸면 원본 값도 바뀜.  
(클로저 내부에서 외부에 있는 값에 접근하면 값에 대한 참조를 획득함)**</span>
