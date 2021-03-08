---
title: '🕊 [Swift] 서브 스트링(Substring)'
date: 2021-01-10 07:00:00
category: 'Swift'
draft: false
showToc: true
---

```swift
let str = "Hello, Swift"

let l = str.lowercased()
print(l) // hello, swift
```

![1](https://user-images.githubusercontent.com/55340876/110339629-b61ad580-806b-11eb-8986-b478bba42f67.png)

상단 코드에서 `lowercased` 메서드를 활용,  
해당 문자열을 소문자로 바꾼 새로운 값을 리턴해서 `l` 상수에 저장함.  
`l` 상수는 String형으로 되어있음.

`prefix()` 메서드를 이용해서 첫번째 문자열을 추출해보자.

![2](https://user-images.githubusercontent.com/55340876/110339625-b5823f00-806b-11eb-80c7-227e8ca1a366.png)

자동완성을 살펴보면 `Substring`을 리턴함!!

<span style="color: red;">**서브 스트링은 하나의 문자열에서 특정 범위에 있는 문자열을 뜻함.  
문자열을 처리할 때 메모리를 절약하기 위해서 사용함.**</span>

```swift
let str = "Hello, Swift"

let l = str.lowercased()

var first = str.prefix(1)
print(first) // H
```

파라미터로 `1`을 전달하면 첫번째 문자 `H`가 출력됨.

여기서 first 자료형은 뭘까?

![3](https://user-images.githubusercontent.com/55340876/110339622-b4e9a880-806b-11eb-9f84-dc90e63672c3.png)

<span style="color: red;">**String.SubSequence**</span>임.

이게 뭔디??  
**control + cmd** 로 확인해봅세!

![4](https://user-images.githubusercontent.com/55340876/110339620-b4511200-806b-11eb-9521-592b2d1cf4c2.png)

아하 타입 별명은 준거군!!  
즉, **<u>서브 스트링이 서브 시퀀스임!!</u>**  
같은 말이라 둘 중 암꺼나 써먹어도 괜찮음.

<span style="color: red;">**서브 스트링은 원본 문자열의 메모리를 공유함!!  
서브 스트링은 원본 문자열의 메모리를 공유함!!  
서브 스트링은 원본 문자열의 메모리를 공유함!!**</span>

![5](https://user-images.githubusercontent.com/55340876/110339618-b3b87b80-806b-11eb-93ba-b0ba8e7bc9ec.png)

![6](https://user-images.githubusercontent.com/55340876/110339608-b1562180-806b-11eb-8a79-38a874810d85.png)

`prefix` 메서드는 서브 스트링을 리턴함.  
이전에는 새로운 메모리 공간을 생성하고 `H`를 저장했지만  
이번엔 새로운 메모리 공간을 생성하지 않음!

**즉, 원본 메모리를 공유함!**

걍 쉽게 생각하삼.  
<span style="color: blue;">**서브 스트링은 값을 읽기만 할 때는 원본 메모리를 공유하고,  
값을 변경하는 시점에만 새로운 메모리 공간이 생성됨.**</span>

실행 결과를 보자.

```swift
let str = "Hello, Swift"

let l = str.lowercased()

var first = str.prefix(1)

first.insert("!", at: first.endIndex)
print(first) // H!
print(str) // Hello, Swift
```

서브 스트링을 바꾸면 그 때, 새로운 메모리로 복사됨.

메모리를 공유하고 있는 `first` 변수를 바꿔도  
원본인 `str` 상수에는 영향이 가지 않음!

스위프트는 이것을 **Copy-on-Write Optimization**이라고 함.

Copy-on-Write 최적화는  
불필요한 복사와 메모리 생성을 최대한 줄여서 코드의 실행 성능을 높여줌.

Copy-on-Write를 사용하지 않고  
서브 스트링을 새로운 메모리로 바로 복사하고 싶다면??

문자열 생성자로 새로운 문자열을 생성해보자.

```swift
let newStr = String(str.prefix(1))
print(newStr) // H
```

문자열 생성자에 `prefix` 가 리턴하는 값인 서브 스트링을 바로 전달하기만 하면 됨!  
이러면 새로운 메모리 공간이 생성되고 거기에 문자열이 저장됨.

문자열에서 특정 범위를 추출해봅세!  
처음 2개의 문자만 추출해보쟈.

```swift
let s = str[str.startIndex ..< str.index(str.startIndex, offsetBy: 2)]
print(s) // He
```

**서브 스트링 요약**

- 원본 메모리를 공유함
- 변수에 저장된 문자열을 바꾸지 않는다면 새로운 문자열은 생성되지 않음
- 변수에 저장된 문자열을 바꾸면 그 시점에 새로운 문자열이 생성됨
- 직접 새로운 문자열을 생성하고 싶다면 String 생성자를 사용함
