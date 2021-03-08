---
title: '🕊 [Swift] Multiple Trailing Closure'
date: 2021-01-09 23:55:00
category: 'Swift'
draft: false
showToc: true
---

```swift
func multi(first: () -> (), second: () -> (), third: () -> ()) {

}
```

`multi` 함수의 모든 파라미터 타입은 함수 타입으로 선언된 상태임.
이 함수를 호출하고 클로저를 파라미터로 전달해보쟈.

```swift
multi {
   코드
} second: {
   코드
} third: {
   코드
}
```

첫번째 trailing 클로저를 작성하는 규칙은,  
클로저를 괄호 뒤로 빼고 인자 레이블을 생략함.  
그 뒤에 괄호가 비어있다면 괄호를 생략함.

나머지 이어지는 클로저는 인자 레이블과 함께 작성함.  
(함께 작성하지 않으면 컴파일 에러 뿜!)

만약 두번째 파라미터의 인자 레이블을 생략한다면??

```swift
func multi(first: () -> (), _ second: () -> (), third: () -> ()) {

}
```

파라미터가 함수 타입으로 선언됐고,  
인자 레이블이 생략 되었다면  
Multiple Trailing Closure는 사용할 수 없음!

```swift
multi(first: {}, {

}) {

}
```

상단 코드처럼 인라인 클로저를 해줘야 함.  
가급적이면 인자 레이블을 생략하지 말자!!!
