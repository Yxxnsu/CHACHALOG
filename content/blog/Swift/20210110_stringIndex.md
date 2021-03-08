---
title: '🕊 [Swift] 문자열 인덱스'
date: 2021-01-10 05:00:00
category: 'Swift'
draft: false
showToc: true
---

첫번째 문자에 접근하는 것을 구현해보자.

```swift
let name = "JANE"

let firstCh = name[name.startIndex]
print(firstCh) // J
```

```swift
let firstCh = name[name.startIndex]
```

특정 문자에 접근할 때는 **서브 스크립트** 문법을 사용함.

마찬가지로 마지막 문자에 접근해보면?

```swift
let name = "JANE"

let lastCh = name[name.endIndex]
print(lastCh) // error
```

<img width="881" alt="스크린샷 2021-03-08 오후 11 48 56" src="https://user-images.githubusercontent.com/55340876/110337072-dac17e00-8068-11eb-9e60-f5a23d33ff1f.png">

왜 에러??  
<span style="color: red;">**`endIndex`는 마지막 문자 다음의 문자를 출력하기 때문!(Past the end)**</span>

마지막 문자에 접근하려면 항상 **`endIndex` 이전의 인덱스**가 필요함.  
`string.index`는 정수가 아니기 때문에 단순히 `-1`을 하는 것은 불가능함.

```swift
let name = "JANE"

let lastCharIndex = name.index(before: name.endIndex)
let lastCh = name[lastCharIndex]
print(lastCh) // E
```

상단 코드처럼 `index(before: )` 메서드를 이용하삼.  
요놈을 통해 마지막 문자 이전의 인덱스에 접근하고,  
서브 스크립트로 `lastCharIndex`를 전달해서 마지막 문자에 접근할 수 있음!!!

이번엔 `index(after: )` 메서드를 이용하여 두번째와 세번째 문자로 출력해보쟈.

```swift
let name = "JANE"

let secondCharIndex = name.index(after: name.startIndex)
let secondChar = name[secondCharIndex]
print(secondChar) // A

let thirdCharIndex = name.index(after: secondCharIndex)
let thirdChar = name[thirdCharIndex]
print(thirdChar) // N
```

만약 세번째 문자를 출력하고 싶은데,  
두번째 문자를 저장한 `secondCharIndex` 가 없다면 우째 찾누??

이 때는 `index(_: offsetBy: )`를 사용함!!

```swift
let name = "JANE"

let thirdCharIndex = name.index(name.startIndex, offsetBy: 2)
let thirdChar = name[thirdCharIndex]
print(thirdChar) // N
```

오....🤭
상단 코드는 맨 첫번째 문자를 기준으로 검색했기 때문에  
첫번째 파라미터는 `startIndex`  
두번째 파라미터는 `startIndex`에서 2개의 인덱스만큼 이동한..  
즉, 세번째 문자의 인덱스를 가리키는 정수 2를 전달함!

이와 반대로 마지막 문자를 기준으로 검색한다면??

```swift
let name = "JANE"

let thirdCharIndex = name.index(name.endIndex, offsetBy: -2)
let thirdChar = name[thirdCharIndex]
print(thirdChar) // N
```

첫번째 파라미터는 `endIndex`  
두번째 파라미터는 `endIndex`에서 다음 인덱스는 없으니까 **음수**를 전달해줌!  
(뒤로 돌아가야 하니까 0 인덱스를 기준으로 -2를 가야 세번째 문자가 나옴)

올바른 범위 안에 있는 인덱스를 사용하지 않으면 단순한 컴파일 에러가 아닌,  
앱에서 크래시가 발생하니 주의하삼!!

인덱스의 유효성을 확신할 수 없다면 if문을 통해 확인을 먼저 해주는 것도 됴음.  
정수는 아니지만 비교 연산자로 크기를 비교하는 것은 가능.

```swift
// 예시
if thirdCharIndex < name.endIndex && thirdCharIndex >= name.startIndex {

}
```
