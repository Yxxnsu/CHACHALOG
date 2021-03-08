---
title: '🕊 [Swift] 문법 최적화'
date: 2021-01-09 23:45:00
category: 'Swift'
draft: false
showToc: true
---

정식 문법과 단축 문법은 많이 다름.  
스위프트는 문법 최적화를 아.주. 조와함!

저번에 클로저 포스팅에서 써먹은 코드를 재활용 해보쟈.

```swift
let products = [
   "MacBook Air", "MacBook Pro",
   "iMac", "iMac Pro", "Mac Pro", "Mac mini",
   "iPad Pro", "iPad", "iPad mini",
   "iPhone 12", "iPhone12 Pro",
   "AirPods", "AirPods Pro",
   "Apple Watch"
]
```

먼저 요로코롬 배열이 있었고,  
`Pro` 가 포함된 제품만 빼올거임.

# 필터링 문법 최적화

이 때, `filter` 메서드를 통해 필터링을 했었음.

```swift
// 필터링
var proModels = products.filter({ (name: String) -> Bool in
   return name.contains("Pro")
})

print(proModels)
// ["MacBook Pro", "iMac Pro", "Mac Pro", "iPad Pro", "iPhone12 Pro", "AirPods Pro"]
```

하지만 코드가 쫌 길어서 별루다;;  
상단 코드를 문법 최적화 해보자요!!

```swift
// 문법 최적화
var proModels = products.filter {
   $0.contains("Pro")
}

print(proModels)
// ["MacBook Pro", "iMac Pro", "Mac Pro", "iPad Pro", "iPhone12 Pro", "AirPods Pro"]
```

오호... 확 줄어듬.

</br>

**1. `(파라미터) -> 리턴타입` 생략 가능**  
**2. 위 경우에는 `in` 키워드 생략 가능**  
**3. `$` 이랑 숫자가 조합된 형태인 shorthand argument name으로 대체**

</br>

첫번째 파라미터는 `$0`  
두번째 파라미터는 `$1`  
이런식이 되는고임!

</br>

**4. 단일 표현식만 남았으니 `return` 키워드 생략 가능**  
**5. `({})` 였던 인라인 클로저를 `(){}` 인 trailing 클로저로 바꿈**  
**6. 현재는 파라미터가 존재하지 않으니까 `()` 생략 가능**

</br>

굿잡!!

# 오름차순 문법 최적화

```swift
var proModels = products.filter {
   $0.contains("Pro")
}

// 대소문자 관계없이 오름차순 정렬
proModels.sort(by: { (lhs: String, rhs: String) -> Bool in
   return lhs.caseInsensitiveCompare(rhs) == .orderedAscending
})

print(proModels)
// ["AirPods Pro", "iMac Pro", "iPad Pro", "iPhone12 Pro", "Mac Pro", "MacBook Pro"]
```

상단 코드를 최적화 하면?

```swift
var proModels = products.filter {
   $0.contains("Pro")
}

// 문법 최적화
proModels.sort{
   $0.caseInsensitiveCompare($1) == .orderedAscending
}

print(proModels)
// ["AirPods Pro", "iMac Pro", "iPad Pro", "iPhone12 Pro", "Mac Pro", "MacBook Pro"]
```

# 문자열 포함여부 문법 최적화

```swift
var proModels = products.filter {
   $0.contains("Pro")
}

// 문자열 포함여부
var test = proModels.contains(where: { (a: String) -> Bool in
   return a.hasPrefix("Air")
})

var test2 = proModels.contains(where: { (a: String) -> Bool in
   return a.hasPrefix("Swift")
})

print(test) // true
print(test2) // false
```

상단 코드를 최적화 하면??

```swift
var proModels = products.filter {
   $0.contains("Pro")
}

// 문법 최적화
var test = proModels.contains{
   $0.hasPrefix("Air")
}

var test2 = proModels.contains{
   $0.hasPrefix("Swift")
}

print(test) // true
print(test2) // false
```

사실 이정도의 문법 최적화는 코드를 첨부터 끝까지 안 본 사람은  
한번에 이해하기 힘들 수 있을 듯...

가독성이 있게끔 줄여주자!
