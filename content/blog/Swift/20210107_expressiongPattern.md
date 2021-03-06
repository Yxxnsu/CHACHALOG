---
title: '🕊 [Swift] 표현 패턴 / 패턴매칭 연산자'
date: 2021-01-07 15:00:00
category: 'Swift'
draft: false
showToc: true
---

# 표현 패턴(Expression Pattern)

인터벌 매칭(범위 연산자를 사용해서 범위를 매칭시키는 것)을 사용하는 코드 예시

```swift
let a = 1

switch a {
case 0...10:
    print("0~10")
default:
    break
}
```

# 패턴매칭 연산자(Pattern Matching Operator)

```swift
a ~= b
```

![1](https://user-images.githubusercontent.com/55340876/110213886-4bd82880-7ee5-11eb-9ee0-f8a0956935cb.png)

상단 코드는 주석을 제거하고 실행하면 컴파일 에러임  
Size 구조체를 패턴매칭에 사용할 수 없음!

switch문은 s 인스턴스와 case에 범위를 어찌 매칭시키는지 몰라서 에러남.  
그래서 직접 패턴매칭 연산자를 오버로딩해서 매칭시켜줘야함

<span style="color: red;">**패턴매칭 연산자를 오버로딩할 때는 파라미터 자료형과 순서가 핵중요!!!!**</span>

![2](https://user-images.githubusercontent.com/55340876/110213885-4b3f9200-7ee5-11eb-9271-9580b90aa598.png)

첫번째 파라미터의 자료형은 케이스 키워드 다음에 오는 패턴의 자료형으로 지정해야함  
여기서 케이스 키워드 다음에 오는 패턴의 자료형은 에러메세지를 보면 나오는데,

![3](https://user-images.githubusercontent.com/55340876/110213882-4844a180-7ee5-11eb-8801-09cfc54bbf68.png)

바로 Range<Int> !!  
그래서 left: Range<Int> 가 됨.

두번째 파라미터는 switch 키워드 다음에 오는 값으로 지정해야함  
즉, Size 구조체를 말함!  
`right: Size`

그런 다음 리턴형을 bool로 선언하고,  
width 속성의 값이 포함되어 있다면 true를 리턴하게끔 코드를 짜줌.

값은 10 ~ 99 가 출력!!
