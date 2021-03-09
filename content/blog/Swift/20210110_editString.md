---
title: '🕊 [Swift] 문자열 편집'
date: 2021-01-10 07:00:00
category: 'Swift'
draft: false
showToc: true
---

# 문자열 뒤에 새로운 문자열 추가하기

`append` 메서드는 대상 문자열을 직접 변경함.  

`appending` 메서드는 대상 문자열은 변경하지 않고,  
인자로 전달한 문자열을 연결한 후, 새로운 문자열을 리턴함.  

 
```swift
// 새로운 문자열 연결하기
var str = "Hello"
str.append(", ") // Hello,

let s = str.appending("Swift")
str // Hello,
s // Hello, Swift

//s.append("D") // 상수를 변경하려니까 당연히 에러
```

이름 뒤에 `ing`나 `ed`가 붙은 메서드는 원본을 변경하지 않음.  
그렇기 때문에 값이 상수인지 변수인지는 상관없음!!

`s.appending("D")`는 가능하다는 말!

```swift
"File size is".appendingFormat("%.1f", 12.3456) // File size is12.3
```

첫번째 파라미터에는 포멧 문자열을 전달,  
두번째 파라미터에는 포멧 지정자를 대체할 값을 전달함.

`appendingFormat` 메서드는 원하는 포멧으로 구성된 문자열을 연결할 때 사용함.  
이 경우에도 원본을 변경하지 않고 새로운 문자열을 리턴함.

# 문자열 중간에 새로운 문자열 추가하기
`insert` 메서드는 특정 위치에 하나의 문자를 추가할 때 사용함.

첫번째 파라미터에는 추가할 문자를 전달,  
두번째 파라미터에는 문자를 추가할 인덱스를 전달함.

 
```swift
var str = "Hello Swift"

str.insert(",", at: str.index(str.startIndex, offsetBy: 5)) // Hello, Swift

if let sIndex = str.firstIndex(of: "S") {
    str.insert(contentsOf: "Awesome", at: sIndex)
}

str // Hello, AwesomeSwift
```

`firstIndex` 메서드는 파라미터로 전달한 문자열을 검색 후,  
첫번째로 검색된 문자의 인덱스를 리턴해줌.  
검색되지 않으면 **nil**을 리턴!!

리턴형은 옵셔널 타입이기 때문에 주로 옵셔널 바인딩과 함께 사용함.(타입은 추론되니 생략)

인덱스가 검색 되었다면 `S` 문자열 앞에 `Awesome`을 추가함.

 
# 문자열의 일부를 교체(변경) / 삭제하기
`replaceSubrange` 메서드는  
첫번째 파라미터로 전달한 범위를 두번째 파라미터로 전달한 문자열로 바꿔줌.  
여기서는 `Python` 문자열을 `Swift` 문자열로 바꿀고임!

이 때, 범위를 생성해야 하는데  
범위 연산자는 너무 복잡시럽다.  
바뀔 타겟을 정확히 아는 경우엔, `range(of: )` 메서드를 사용합세!

`range(of: ` 메서드는 문자열의 범위를 검색할 때 주로 사용함.  
이 놈은 **범위를 옵셔널로 리턴하니까 옵셔널 바인딩과 함께 사용**함.

```swift
var str = "Hello, Python"

// 옵셔널 바인딩 사용
if let range = str.range(of: "Python") {
    str.replaceSubrange(range, with: "Swift")
}
str // Hello, Swift
```

`replacingCharacters` 메서드를 사용해보자.

```swift
if let range = str.range(of: "Hello") {
    let s = str.replacingCharacters(in: range, with: "Hi")
    
    s // Hi, Swift
    str // Hello, Swift
}
```

요 놈은 새로운 값으로 리턴하니까 리턴된 결과를 상수에 전달함.

첫번째 파라미터로 범위를 전달,  
두번째 파라미터로 바꿀 문자열을 전달함.

원본인 `str` 은 당연히 변경되지 않음!!

`ed`, `ing` 메서드들은 원본을 변경하지 않고,  
원본을 기반으로 작업을 실행한 뒤 결과를 새로운 값으로 리턴해줌.

 
범위를 검색하고 다른 문자열로 구현하는 것은 하나의 메서드로 써보자.

`replacingOccurrences` 메서드를 사용하자.

첫번째 파라미터는 검색할 문자열을 전달,  
두번째 파라미터는 바꿀 문자열을 전달함.

```swift
var s = str.replacingOccurrences(of: "Swift", with: "Awesome Swift")
s // Hello, Awesome Swift
```

이 메서드는 문자열에 `Swift` 가 포함되어 있다면 두번째에 전달한 `Awesome Swift` 로 바꿔줌.  
그리고 최종 결과를 새로운 문자열로 리턴함.(메서드 이름에 ing가 있으니까!)

 
```swift
s = str.replacingOccurrences(of: "swift", with: "Awesome Swift")
s // Hello, Swift
```

상단 코드에서 `of: "swift"` 부분을 소문자 `s` 로 바꿔서 하면 `Hello, Swift` 가 됨.  
대부분 문자열 메서드는 옵션을 따로 지정해주지 않으면 대소문자를 구분함.  

지금은 원본 문자열에 스위프트가 대문자 S로 시작하기 때문에 소문자 s를 검색하지 못한 것!  
이런 경우에는 원본 문자열을 그대로 리턴함.

대소문자를 구분하지 않도록 옵션을 추가해주자!

```swift
s = str.replacingOccurrences(of: "swift", with: "Awesome Swift", options: [.caseInsensitive])
s // Hello, Swift
```

`options: [.caseInsensitive]`

 

# 특정 문자나 범위를 삭제하기

문자나 범위를 삭제할 때에는 `remove`로 시작하는 메서드를 사용함.

```swift
var str = "Hello, Awesome Swift!!!"

let lastCharIndex = str.index(before: str.endIndex)

var removed = str.remove(at: lastCharIndex)

removed // !
str // Hello, Awesome Swift!!
```

`remove(at: )` 메서드를 사용해보자.

이놈은 파라미터로 전달된 인덱스에 있는 문자를 삭제하고,  
삭제된 문자를 리턴함.(이 메서드는 Character 을 리턴해줌)

 
```swift
// 첫번째 문자열 삭제
removed =  str.removeFirst()
removed // H
str // ello, Awesome Swift!!

// 처음에 있는 2개의 문자를 삭제
str.removeFirst(2)
str // lo, Awesome Swift!!
```

상단 코드의 `removeFirst` 메서드는 삭제는 해주나,  
삭제된 문자열을 리턴해주지는 않음.

 
```swift
// 마지막 문자열 삭제
str.removeLast() // ! (삭제된 문자열 리턴)
str // lo, Awesome Swift!

// 마지막에 있는 2개의 문자를 삭제
str.removeLast(2)
str // lo, Awesome Swif
```

```swift
// 특정 문자열 삭제
if let range = str.range(of: "Awesome") {
    str.removeSubrange(range) // lo,  Swif
    str // lo,  Swif
}

// 모든 문자열 삭제 (메모리도 삭제)
str.removeAll()
str

// 모든 문자열 삭제 (메모리 공간은 삭제되지 않음)
str.removeAll(keepingCapacity: true)
```
 

`dropLast` 메서드는 원본 문자열에서  
마지막 문자열을 제외한 모든 문자열을 새로운 값으로 리턴함.

```swift
var str = "Hello, Awesome Swift"
var substr = str.dropLast() // Hello, Awesome Swif
```

새롭게 리턴된 문자열은 메모리 공간이 없으니 원본 문자열을 공유함.   
마지막 `t` 를 제외한 나머지 공간을 공유하는 것!

 
`dropLast(4)` 를 하면  
마지막 4개의 문자열을 삭제하고 새로운 문자열을 리턴함.  
이 때도 삭제된 wift 만 제외하고 나머지 공간만 공유하는 것!!

`dropFirst` 메서드도 동일하다.

클로저를 이용한 것도 알아보자.

```swift
var substr = str.drop(while: { (ch) -> Bool in
   return ch != ","
} )
substr // , Awesome Swift
```