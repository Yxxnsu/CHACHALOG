---
title: '🕊 [Swift] 암시적/자동 추출 옵셔널'
date: 2021-01-08 03:00:00
category: 'Swift'
draft: false
showToc: true
---

# 암시적/자동 추출 옵셔널

**Implicitly Unwrapped Optionals**

옵셔널에서는 자료형 뒤에 `?` 가 왔는데,  
IUO는 자료형 뒤에 `!` 가 옴.

```swift
타입!
```

이렇게 느낌표가 붙으면 아 이건 **IUO**구나~ **자동 추출**되겠구나~ 하면 됨.

```swift
let num: Int! = 12

let a = num
a //옵셔널 Int 타입
```

상단 코드에서 `a` 상수의 자료형은 **옵셔널타입**임.  
<span style="color: red;">**IUO는 형식 추론을 사용하는 경우 자동 추출이 안됨!!!**</span>

다시 상수를 선언해봅세.

Int로 직접 타입 지정을 해보면

```swift
let num: Int! = 12

let a = num
a //a는 Int? 옵셔널 타입

let b: Int = num // b는 Int 논옵셔널 타입
```

`num` 상수에 저장된 값을 Int에 저장하려면 값을 언래핑해야 됨.  
<span style="color: red;">**IUO는 논옵셔널 타입으로 처리되어야할 때 자동으로 언래핑 됨.**</span>

여기서 `Int!` 를 `?`로 바꾸면 그냥 옵셔널 타입이 되어 컴파일 에러가 뿜!!

```swift
let num: Int? = 12 // 옵셔널타입

let a = num
a //a는 Int? 옵셔널 타입

let b: Int = num! // 논옵셔널 타입으로 강제추출
```

이때는 상단 코드처럼  
`let b: Int = num!` 식으로  
값을 강제추출하거나 옵셔널 바인딩을 사용해야함.

```swift
let num: Int! = nil

let a = num
a //a는 Int? 옵셔널 타입

let b: Int = num // 컴파일 에러
```

IOU는 값을 자동추출, 강제 추출하기 때문에  
실제로 값이 있는지 확인하지 않아서 nil이 저장된 상태에서  
값을 추출하면 강제추출처럼 컴파일 에러가 발생함.

IUO는 자주 활용되는 코드는 아니고...  
처리할 자료형 즉, 논옵셔널 타입을 직접 지정하면 자동으로 언래핑!!

앱을 만들다보면 두가지 경우에 IOU를 만나게 됨.

- 아웃렛을 연결할 때
- API에서 IOU를 리턴할 때

</br>

두가지 경우 모두 옵셔널로 처리하되,  
크래시가 발생하지 않도록 옵셔널 바인딩이나 옵셔널 체이닝으로 처리만 잘해주면 됨.

나머지 경우에 직접 IOU를 선언, 활용하는 것은 권장하지 않음.  
걍 옵셔널, 옵셔널 바인딩을 사용해서 크래시와 서터레서를 줄이는 됴은 방법임!
