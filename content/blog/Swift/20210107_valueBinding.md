---
title: '🕊 [Swift] 값 바인딩(Value Binding)'
date: 2021-01-07 14:00:00
category: 'Swift'
draft: false
showToc: true
---

# 값 바인딩(Value Binding)

**변수 또는 상수의 이름에 매치된 값 을 할당하는 것.  
(크게는 식별자 바인딩과 옵셔널 바인딩을 들 수 있음)**

```swift
case let 상수명:
case var 변수명:
```

Value Binding은  
매칭시킬 대상을 상수나, 변수로 바인딩한 후,  
case 블럭에서 활용하는 패턴임

```swift
let a = 1

switch a {
case let x:
    print(x)
}
```

상단 코드는  
switch문으로 매칭시킬 대상을 a 상수로 지정했음

a 상수를 x라는 이름으로 바인딩을 하면  
a 상수에 저장된 값이 x에 복사됨.  
print(x)는 1을 출력!

let, var 키워드가 오고 바인딩할 이름이 따라옴  
바인딩한 상수, 변수는 case 블럭 내부에서만 사용 가능!!

만약 switch문 다음 줄에서 사용한다??  
컴파일 에러가 뿜!!

Value Binding은 단독 사용보단 주로 where와 사용하는데,

```swift
let a = 1

switch a {
case var x where x > 100:
    x = 200
    print(x)
default:
    break
}
```

switch문으로 매칭시킬 대상을 a 상수로 지정함.  
a 상수를 x라는 이름으로 바인딩.  
그럼 a 상수 값이 x에 복사되겠지?!

그리고 where 을 추가해서 한번 더 확인하게끔 조건을 줌.  
이 부분에서 where로 경우의 수를 더 작성해줘야 컴파일 에러가 안남!!!  
x 값이 100을 초과하는지!!

이 경우는 a. 즉, x가 1이니까 100을 초과하지 않잖슴?!  
그래서 default에 매칭되고 break를 통해 종료됨.
