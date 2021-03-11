---
title: '🕊 [Swift] 계산 속성'
date: 2021-01-12 10:00:00
category: 'Swift'
draft: false
showToc: true
---

Computed Property
 
다른 속성을 기반으로 속성 값이 결정됨.

저장 속성은 값을 저장할 메모리 공간을 갖지만  
계산 속성은 메모리 공간을 갖지 않음!!

다른 속성에 저장된 값을 읽어서 필요한 계산을 실행 후 리턴하거나  
속성으로 전달된 값을 다른 속성에 전달함.  
이런 특징 때문에 속성에 접근할 때마다 다른 값이 리턴될 수 있으니  
즉, 항상 var로만 선언해야 함!

저장 속성은 클래스, 구조체에 추가할 수 있지만,  
계산 속성은 클래스, 구조체, 열거형에 추가할 수 있음.

저장 속성과 달리,  
선언 시점에 기본값을 저장할 수 없고,  
타입 추론이 불가해서 반드시 자료형을 명시적으로 사용해야 함.

```swift
var name: 타입 {
    get {
        실행구문
        return 표현식
    }
    set(name) {
        실행구문
    }
}
```

`get` 블럭(getter)은 속성값을 읽을 때 실행되고,  
반드시 `return` 키워드를 통해 다른 속성 값을 리턴하거나 자료형과 동일한 값을 리턴해야 함.

`set` 블럭(setter)은 값을 저장할 때 실행되고,  
속성에 저장한 값은 파라미터로 전달됨.
`set` 블럭에서는 `()`괄호와 파라미터 이름을 생략할 수 있는데  
이 경우에는 `newValue` 라는 이름을 가진 기본 파라미터를 사용함.

```swift
class Person {
    var name: String
    var yearOfBirth: Int
    
    init(name: String, year: Int) {
        self.name = name
        self.yearOfBirth = year
    }
    
    var age: Int {
        get {
            let calendar = Calendar.current
            let now = Date()
            let year = calendar.component(.year, from: now)
            return year - yearOfBirth
        }
        set {
            let calendar = Calendar.current
            let now = Date()
            let year = calendar.component(.year, from: now)
            // 파라미터 이름 생략했으니 newValue 라는 기본값을 사용
            // age 속성으로 전달되는 값은 다시 newValue란 이름으로 set블럭으로 전달됨
            yearOfBirth = year - newValue
        }
    }
}

let p = Person(name: "JINJOO", year: 1992)
// 값을 읽을 때는 get 블럭 실행
p.age // 29

// 값을 변경할 때는 set 블럭 실행
p.age = 20
p.yearOfBirth // 2001
```

`set` 블럭을 삭제하면 읽기 전용 계산 속성이 됨.


읽기 전용 계산 속성은 주로 아래쪽 문법으로 작성한다.

```swift
var name: 타입 {
    get {
        실행구문
        return 표현식
    }
}

var name: 타입 {
    실행구문
    return 표현식
}
```

```swift
class Person {
    var name: String
    var yearOfBirth: Int
    
    init(name: String, year: Int) {
        self.name = name
        self.yearOfBirth = year
    }
    
    var age: Int {
    	// get 키워드와 brace { } 생략가능
            let calendar = Calendar.current
            let now = Date()
            let year = calendar.component(.year, from: now)
            return year - yearOfBirth
    }
}

let p = Person(name: "JINJOO", year: 1992)
p.age // 29
p.yearOfBirth // 1992
```

쓰기 전용 계산속성은 없음. (`set` 블럭만 쓸 수는 없다!!!)


계산 속성인지 클로저인지 헷갈릴때는?  
`var age: Int {` 부분 코드를 보자.  
`Int` 다음에 할당 연산자가 없다면,  
읽기 전용 계산 속성임.  
`Int` 다음에 할당 연산자를 써서 `var age: Int =` 라면,  
클로저를 저장하는 코드가 됨.
