---
title: '🕊 [Swift] 연관값(Associated Value)'
date: 2021-01-11 18:00:00
category: 'Swift'
draft: false
showToc: true
---

연관값은 Enumeration case  
즉, 케이스에 연관된 값을 함께 저장함.

원시값(Raw Value)도 케이스에 값을 저장함.  
차이를 함 보쟈.

비디오 인터페이스를 처리하는 열거형을 선언해봅세!

```swift
enum VideoInterface {
    case dvi
    case hdmi
    case displayPort
}
```

상단 코드에서 케이스에 화면 해상도를 함께 저장해야 한다고 가정해보삼.  

해상도는 가로, 세로 2개의 값으로 표현함.  
원시값으로 저장할 수 있는 값은 1개 뿐이고,  
자료형도 String, Int, Character 로 제한됨.

일단 해상도니까 String, Int형은 선택지에서 제외됨!!

```swift
enum VideoInterface: String {
    case dvi = "1028x768"
    case hdmi = "2048x1536"
    case displayPort = "3840x2160"
}
```

에러는 발생하지 않지만 해상도는 보통 숫자로 처리함.  
원시값을 사용하려면 문자열에서 숫자를 추출하는 과정이 필요함.  
여기서 문제는 동일한 케이스가 하나의 값을 공유한다는 것!!

hdmi로 연결하더라도 모니터에따라 사용가능한 해상도는 차이가 있는데  
이렇게 원시값으로 해상도를 저장하면 해상도를 하나밖에 표현하지 못하고,  
모든 케이스가 동일한 형식을 공유함. (즉 케이스별로 다른 케이스를 저장하지 못함!)

다른 케이스를 만들면 문자열로 또 저장해야하고,  
또 추출해야 해서 좋은 방법이 아님.

연관값은 이런 문제를 해결함!!!
저장할 값의 형식을 개별 케이스마다 따로 선언함.  

```swift
enum 타입명 {
    case 케이스명(타입)
    case 케이스명(타입, 타입, ...)
}
```

**연관값은 튜플로 선언함.**  
저장할 값을 선언하는 위치가 다름.  

원시값은 열거형 이름 뒤에 선언하고,  
연관값은 케이스 이름 뒤에 선언함.

```swift
// 원시값 타입 = String, Character, Number
enum 타입명: 원시값명 {
    case 케이스명 = 값
}
```

원시값은 위 캡쳐처럼 형식의 제한이 있지만,  
연관값은 제한이 없음!

하나의 케이스에는 서로 다른 연관값을 저장할 수 있음.  
연관값은 선언 시점이 아니라, 새로운 열거형 값을 생성할 때 저장함.

원시값과 연관값은 차이점이 큼.  
자료형을 선언하는 문법이 다름.  
값을 저장하는 시점이 다름.

케이스에 값을 저장한다는 것을 빼면 공통점이 없이 서로 배타적임.  
그래서 하나의 열거형에서 함께 사용할 수 없음!

비디오 인터페이스를 처리하는 열거형을 연관값으로 선언해보자.

```swift
enum VideoInterface {
    // 해상도를 2개의 정수로 저장
    // 언네임드 튜플로 선언가능 네임드 튜플로도 선언 가능 (네임드가 가독성이 높다)
    case dvi(width: Int, height: Int)
    // 해상도를 나타내는 2개의 정수, 인터페이스 버전, 오디오출력플래그 저장 (언네임드 튜플로 선언)
    case hdmi(Int, Int, Double, Bool)
    // 가로, 세로 해상도를 CGSize 구조체로 저장
    case displayPort(CGSize)
}

var input = VideoInterface.dvi(width: 2048, height: 1536)

// 연관값을 확인후, 코드를 실행할 때는 주로 switch문을 사용한다.
switch input {
case .dvi(2048, 1536):
    print("dvi 2048 x 1536")
case .dvi(2048, _): // 너비만 매칭 (와일드카드 패턴으로 높이 생략)
    print("dvi 2048 x Any")
case .dvi: // 연관값을 무시하고 케이스만 매칭 (연관값 생략)
    print("dvi")
case .hdmi(let width, let height, let version, var audioEnabled):
    print("hdmi \(width)x\(height)")
case let .displayPort(size): // 모든 연관값을 동일한 형태로 바인딩한다면 let 키워드를 열거형 케이스 앞에 표기가 가능하다 (Enumeration Case Pattern)
    print("dp")
}

input = .hdmi(3840, 2160, 2.1, true)
```

