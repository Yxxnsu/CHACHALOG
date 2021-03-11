---
title: '🕊 [Swift] 열거형(Enumeration)'
date: 2021-01-11 16:00:00
category: 'Swift'
draft: false
showToc: true
---

<span style="color: red;">**연관된 상수들을 하나의 이름으로 묶은 자료형 = 열거형**</span>

**열거형에 포함된 상수들은 상수라 하지않고,  
Enumeration Case 라고 하는데 줄여서 케이스 라고 부르기도 함.**

열거형은 독립적인 자료형임.   
자료형이니 당근 이름을 갖고있고,  
열거형에 포함된 케이스도 독립적인 이름을 갖고있음.

**사용이유는??**
- **코드의 가독성**
- **코드의 안전성**

</br>

우선 열거형을 사용하지 않았을 때 어떤 문제가 발생할까?  
예를 들어 워드프로세스 여러 기능중 문단 정렬방식을 구현한다고 가정하쟈.

왼쪽 정렬은 0  
가운데 정렬은 1  
오른쪽 정렬은 2

```swift
let left = 0
let center = 1
let right = 2

var alignment = center
```

이 값을 모른다면 어떻게 될까?  
left에 0이 아니라 123을 저장해도 에러는 발생하지 않음.  

가독성과 안전성이 없다면?  
운 나쁘면 크래시 뿜!! 앱이 죽겠지?!

코드를 개선시켜 보자.  
값만으로 어떤 역할을 하는지 파악할 수 있도록!!

```swift
let left = "left"
let center = "center"
let right = "right"

var alignment = center
```

이 코드는 어디에 사용할지는 일단 알 수 있다 가독성은 증가했으나 문제가 있음.  
오타 발생 여지,  
대소문자 구분하니까 어찌 표기할지 정해야함!

안전성에는 많은 문제가 있는데,  
열거형을 사용하면 문제가 모두 해결!!

 
```swift
enum TypeName {
    case caseName
    case caseName, caseName
}
```

구조체와 클래스처럼 독립적인 형식이라 `{}` 로 선언함.

앞으로 앱을 만들면서 다양한 프레임워크, 라이브러리를 사용하게 되는데  
수백개의 열거형을 사용하게 됨.  
대부분 직관적인 이름으로 선언되어 있어서  
어디에 사용하는지, 어떤 값을 쓰는지 알 수 있으니까 딱히 암기할 필요는 없음;;

```swift
let left = "left"
let center = "center"
let right = "right"

var alignment = center

enum Alignment {
    case left
    case center
    case right
}

// 열거형으로 정렬 표현
Alignment.center
Alignment.left
Alignment.right

// 열거형 Alignment.center은 숫자 1 리터럴처럼 엄연히 독립적인 값이다. (코드에서 의미가 변하지 않음)
var textAlignment = Alignment.center

// .left 같은 코드를 보면 이제 '이건 열거형이라 이름이 생략됐네?' 라고 생각해주자.
textAlignment = .left // 컴파일러가 열거형인걸 알아서 열거형 타입이름은 생략해도 됨. 반드시 . 은 써주자!

//textAlignment = .justify // case로 선언하지 않은 값을 저장하면 당근 컴파일 에러! 오타도 에러!

// 열거형 비교1
if textAlignment == .center {
    
}

// 열거형 비교2
// 열거형의 모든 케이스를 매칭시켰으니 default 코드는 생략!
switch textAlignment {
case .left:
    print("left")
case .center:
    print("center")
case .right:
    print("right")
}
```