---
title: '🕊 [Swift] KeyValuePair'
date: 2021-01-11 15:00:00
category: 'Swift'
draft: false
showToc: true
---

**딕셔너리처럼 키, 값을 하나의 쌍으로 저장하는 컬렉션.**  
딕셔너리와 배열과 유사한 형태임.

```swift
// KeyValuePair 리터럴 
[키: 값, 키: 값, ...]
```

```swift
// KeyValuePair 타입
KeyValuePairs<키타입, 값타입>
```

딕셔너리는 동일한 키를 한번만 저장할 수 있고,  
정렬되어 있지 않은 컬렉임.

```swift
// KeyValuePairs 선언 (타입 생략 가능)
let words: KeyValuePairs<String, String> = ["A": "Apple", "B": "Banana", "C": "City"]

words.count // 3
words.isEmpty // false

// A 키의 저장된 값에 접근하기
words[0] // (key "A", value "Apple")
words[0].key // A
words[0].value // Apple

// 순서대로 열거하기
for elem in words {
    print(elem)
}
// (key: "A", value: "Apple")
// (key: "B", value: "Banana")
// (key: "C", value: "City")
```

반면 `KeyValuePairs` 는 동일한 키를 두번 이상 저장이 가능하고,  
저장 순서를 유지한다는 특징이 있음.(요소를 순서대로 저장)  
정렬된 컬렉션!!!!!!!!

딕셔너리 모습을 한 배열?! 
하지만 `append`, `insert`, 업데이트나 삭제 메서드를 제공하지 않음.  

검색을 제외한 나머지 멤버가 빈약해서  
파라미터로 전달하거나 리턴값 같은 임시데이터를 저장하는 용도 외에는 자주 활용하지 않음. (딕셔너리 쓰면 되니까)

그럼 이놈은 언제써??
데이터를 키,값에 쌍으로 저장해야하고,    
동일한 키를 여러번 저장해야하고,  
저장된 순서가 중요하고,  
동일한 순서로 반복 처리해야한다면 딕셔너리 대신`KeyValuePairs`를 사용함.

딕셔너리에 비해 상대적으로 느리지만  
대량의 데이터를 처리하는게 아니라면 큰 차이를 느끼기 어려움!
