---
title: '🕊 [Swift] 문자열 옵션'
date: 2021-01-10 10:00:00
category: 'Swift'
draft: false
showToc: true
---


9가지 문자열 옵션을 제공함.

```swift
// 단순한 비교
"A" == "a" // false

// 대소문자 구분없이 비교
// caseInsensitiveCompare는 Compare를 리턴하니까 .orderedSame로 비교해줘야함
"A".caseInsensitiveCompare("a") == .orderedSame // true

// 대소문자 구분없이 + 다른 옵션까지 함께 비교
"A".compare("a", options: [.caseInsensitive]) == .orderedSame // true



// 두 상수 비교
let a = "\u{D55C}" // 한
let b = "\u{1112}\u{1161}\u{11AB}" // 한

a == b // true
a.compare(b) == .orderedSame // true

// 지정된 코드 유닛 첫글자가 다르니 false 리턴
a.compare(b, options: [.literal]) == .orderedSame // false

// 문자열 검색 방향 지정
let korean = "행복하세요"
let english = "Be happy"

// Leading(왼쪽)에서 Trailing(오른쪽)으로 검색
if let range = english.range(of: "p") {
    english.distance(from: english.startIndex, to: range.lowerBound)
} // 5

// Trailing(오른쪽)에서 Leading(왼쪽)으로 검색
if let range = english.range(of: "p", options: [.backwards]) {
    english.distance(from: english.startIndex, to: range.lowerBound)
} // 6



// 검색 범위 제한
let str = "Swift Programming"

if let result = str.range(of: "Swift") {
    print(str.distance(from: str.startIndex, to: result.lowerBound))
} else {
    print("not found")
} // 0 (첫번째 문자열 인덱스 출력)

if let result = str.range(of: "Swift", options: [.backwards]) {
    print(str.distance(from: str.startIndex, to: result.lowerBound))
} else {
    print("not found")
} // 0 (첫번째 문자열 인덱스 출력)

if let result = str.range(of: "Swift", options: [.anchored]) {
    print(str.distance(from: str.startIndex, to: result.lowerBound))
} else {
    print("not found")
} // 0 (첫번째 문자열 인덱스 출력)

if let result = str.range(of: "Swift", options: [.anchored, .backwards]) {
    print(str.distance(from: str.startIndex, to: result.lowerBound))
} else {
    print("not found")
} // not found

str.hasPrefix("swift") // false
str.hasSuffix("swift") // false
str.lowercased().hasPrefix("swift") // true

// 접두어 비교
if let _ = str.range(of: "swift", options: [.anchored, .caseInsensitive]) {
    print("same prefix")
} // same prefix
```

```swift
// 문자열 순서 비교
// 아스키코드로 비교
"A" < "B" // true
"a" < "B" // false


let file9 = "file9.txt"
let file10 = "file10.txt"

// 9가 더 크니까 false
file9 < file10 // false

file9.compare(file10) == .orderedAscending // false

// 9가 10보다 작으니까 true
file9.compare(file10, options: [.numeric]) == .orderedAscending // true

// 발음 기호 처리
let a = "Cafe"
let b = "Cafè"

a == b // false
a.compare(b) == .orderedSame // false

// 발음 기호 무시하고 비교
a.compare(b, options: [.diacriticInsensitive]) == .orderedSame // true
 

정규식 표현 비교
let emailPattern = "([0-9a-zA-Z_-]+)@([0-9a-zA-Z_-]+)(\\.[0-9a-zA-Z_-]+){1,2}"
let emailAddress = "user@example.com"

// 문자열 자체를 비교하니까 옵셔널 바인딩 실패
if let _ = emailAddress.range(of: emailPattern) {
    print("found")
} else {
    print("not found")
} // not found

// 옵션 추가
// 첫번째 파라미터로 전달된 문자열을 정규식으로 처리한다.
// 대상 문자열에서 정규식과 일치하는 문자열이 포함되어 있다면 첫번째 결과를 리턴한다.
// 하지만 이 방법은 단순히 해당 패턴이 존재한다면 범위를 리턴하는 것이라 정확한 이메일 검증이 어렵다.
if let _ = emailAddress.range(of: emailPattern, options: [.regularExpression]) {
    print("found")
} else {
    print("not found")
} // found

// range(of:)가 리턴한 범위가 입력한 문자열의 전체 범위와 같은지 다시 한 번 확인해야 한다.
// 리턴하는 결과는 상수에 옵셔널 바인딩 해주고,
// 튜플로 lowerBound, upperBound를 저장.
// 튜플로 이메일 주소의 첫번째 문자와 마지막 문자 즉, 전체 범위가 입력된 문자열의 전체 범위와 같다면
// 컨디션은 true로 평가된다.
if let range = emailAddress.range(of: emailPattern, options: [.regularExpression]), (range.lowerBound, range.upperBound) == (emailAddress.startIndex, emailAddress.endIndex) {
    print("found")
} else {
    print("not found")
} // found
```