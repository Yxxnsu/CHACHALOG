---
title: '🕊 [Swift] 딕셔너리(Dictionary)'
date: 2021-01-11 11:00:00
category: 'Swift'
draft: false
showToc: true
---

# Dictionary

**하나의 요소에 키, 값이 함께 저장됨.**

<span style="color: red;">**키는 유일한 값을 갖고,  
값은 중복되어도 상관없음.**</span>

**저장된 요소는 정렬되지 않아서 <u>인덱스가 사용되지 않음!</u>**

<span style="color: blue;">**저장된 요소의 자료형은 모두 같아야 함.  
키와 값의 자료형은 모두 같아야 함!!**</span>

 
```swift
[키: 값, 키: 값, 키: 값, ...]
```

키와 값을 함께 표현하기 때문에 요소를 잘 구분해야 함!  
키와 값은 `:` 하나의 요소마다 `,`

**배열과 헷갈리지 않게 주의하자!**

 

# 딕셔너리 생성

```swift
var dict = ["A": "Apple", "B": "Banana"]

// 빈 딕셔너리 생성
dict = [:]
```
 
```swift
Dictionary<키타입, 값타입>
```

```swift
[키타입: 값타입]
```

```swift
// 정식 문법으로 생성
let dict1: Dictionary<String, Int>

// 단축 문법으로 생성
let dict2: [String: Int]
```

# 새로운 딕셔너리 생성

```swift
var dict = ["A": "Apple", "B": "Banana", "C": "City"]

// 빈 딕셔너리 생성
let emptyDict: [String: String] = [:]

// 생성자 사용해서 빈 딕셔너리 생성
let emptyDict2 = [String: String]()

// 정식 문법으로 빈 딕셔너리 생성
let emptyDict3 = Dictionary<String, String>()
```

# 저장된 요소 검사

```swift
// 저장된 요소의 수 확인
dict.count // 3

// 비어있는지 확인
dict.isEmpty // false
```

# 요소 접근

```swift
// 서브스크립트 문법 사용
dict["A"] // Apple
dict["Apple"] // nil

let a = dict["E"] // nil (옵셔널 String으로 a 상수에 저장)

// 전달 키가 없다면 기본값 리턴하게끔 구현
let b = dict["E", default: "Empty"] // Empty (논옵셔널 String으로 저장)

// 키 열거
for k in dict.keys {
    print(k)
}

// 값 열거
for v in dict.values {
    print(v)
}

// 키 오름차순으로 정렬
for k in dict.keys.sorted() {
    print(k)
}

// 두 속성의 리턴 값을 배열로 바꾸고 싶다면?
let keys = Array(dict.keys) // ["A", "B", "C"]
let values = Array(dict.values) // ["Apple", "Banana", "City"]
```

# 요소 추가

**키를 기준으로 추가**

```swift
var words = [String: String]()

// 서브스크립트 문법으로 요소 추가
words["A"] = "Apple"
words["B"] = "Banana"

words.count // 2
words // ["A": "Apple", "B": "Banana"]

// 기존 B의 값이 교체됨
words["B"] = "Ball"
words // ["B": "Ball", "A": "Apple"]

// 메서드로 추가
words.updateValue("City", forKey: "C") // nil (새로운 요소가 추가되면 nil 리턴)
words // ["A": "Apple", "B": "Ball", "C": "City"]

words.updateValue("Circle", forKey: "C") // City (키는 그대로니 값만 업데이트)
words // ["B": "Ball", "A": "Apple", "C": "Circle"]
```

**Insert + Update = Upsert**

 

# 요소 제거

```swift
var dict = ["B": "Ball", "A": "Apple", "C": "Circle"]

// 서브스크립트로 삭제
dict["B"] = nil
dict // ["C": "Circle", "A": "Apple"]

// 존재하지 않는 키 삭제
// 아무런 동작 없이 다음 코드 실행
dict["Z"] = nil

// 메서드로 삭제
dict.removeValue(forKey: "A") // Apple (삭제한 값을 리턴)
dict // ["C": "Circle"]

dict.removeValue(forKey: "A") // nil (이미 삭제된 값이라)

// 전체 삭제
dict.removeAll() // [:]
```

# 요소 비교

```swift
let a = ["A": "Apple", "B": "Banana", "C": "City"]
let b = ["A": "Apple", "C": "City", "B": "banana"]

// 대소문자가 다르니
a == b // false
a != b // true

// 대소문자 무시하고 비교
a.elementsEqual(b) { (lhs, rhs) -> Bool in
    print(lhs.key, rhs.key) // 딕셔너리는 정렬되어 있지 않기 때문에, 서로 다른 키를 비교하는 경우도 있다.
    return lhs.key.caseInsensitiveCompare(rhs.key) == .orderedSame && lhs.value.caseInsensitiveCompare(rhs.value) == .orderedSame
} // true와 false 가 그때그때 다르게 나옴

// 정렬된 키를 기준으로 비교
// 오름차순으로 일단 정렬
let aKeys = a.keys.sorted()
let bKeys = b.keys.sorted()

// 위의 키를 기준으로 딕셔너리를 비교하자
aKeys.elementsEqual(bKeys) { (lhs, rhs) -> Bool in
    // 키를 비교
    guard lhs.caseInsensitiveCompare(rhs) == .orderedSame else {
        return false
    }
    
    // 값을 비교 (키를 비교했으니 값도 비교)
    guard let lv = a[lhs], let rv = b[rhs], lv.caseInsensitiveCompare(rv) == .orderedSame else {
        return false
    }
    
    // 키와 값이 같다면 true 리턴
    return true
} // true
```

# 요소 검색

**딕셔너리 검색은 클로저가 필요함.**

키와 값이 저장되어 있는 튜플을 파라미터로 받고 true or false 를 리턴함.

```swift
var words = ["A": "Apple", "B": "Banana", "C": "City"]

// 클로저를 별도의 상수에 저장
let c: ((String, String)) -> Bool = {
    // 키에 대문자 B가 포함되거나 값에 소문자 i가 포함되었다면 true 리턴
    $0.0 == "B" || $0.1.contains("i")
}

words.contains(where: c) // true

// 딕셔너리를 정렬되지 않은 컬렉션이라 검색시마다 값이 바뀐다. (실행시마다 저장된 요소 순서가 바뀌니까!)
let r = words.first(where: c)
r?.key
r?.value

// 조건을 만족시키는 모든 요소가 새로운 딕셔너리로 리턴됨
words.filter(c)
```