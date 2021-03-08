---
title: '🕊 [Swift] 탈출 클로저'
date: 2021-01-09 23:48:00
category: 'Swift'
draft: false
showToc: true
---

```swift
func nonEscaping(closure: () -> ()) {
   print("시작")

   closure()

   print("끝")
}

nonEscaping {
   print("클로저")
}
// 시작
// 클로저
// 끝
```

상단 코드를 보쟈.  
함수 바디에서 호출하고 있는 `closure()`는 항상 함수 실행이 종료되기 전에 실행이 완료됨.  
이거슬 <span style="color: red;">**NonEscaping Closure**</span>라고 함.  
**"탈출하지 않음"**

![1](https://user-images.githubusercontent.com/55340876/110317880-17cd4680-8050-11eb-8c03-967a5eb3c606.png)

예시를 함 더 보까??

![1](https://user-images.githubusercontent.com/55340876/110318003-4b0fd580-8050-11eb-9cd4-b69b8a48842c.png)

에러 빼앰!

클로저는 항상 함수 실행이 종료되기 전, 실행이 완료되어야 함.  
상단 코드는 3초 지연 후, 클로저를 호출하기 때문에 에러임.

이 때는 파라미터 형식 앞에 `@escaping` 키워드를 추가함.

```swift
func nonEscaping(closure: @escaping () -> ()) {
   print("시작")

   DispatchQueue.main.asyncAfter(deadline: .now() + 3) {
      closure()
   }

   print("끝")
}

nonEscaping {
   print("클로저")
}

```

클로저 파라미터는 Non-escaping 클로저인데,  
요래 키워드를 추가해주면 escaping 클로저로 선언됨!

함수의 실행과 관계없이 클로저를 실행할 수 있게 된다는 맬씀.

실행을 하면 에러는 없다!!

`@escaping`가 왜 필요함??  
파라미터는 함수가 실행되면 생성되었다가~  
실행이 종료되면 자동으로 삭제됨~  
클로저에 실행이 완료될 때까지 클로저를 제거하지 않는다는 말!

3초 뒤에 클로저를 실행 후, 자동으로 제거함!
