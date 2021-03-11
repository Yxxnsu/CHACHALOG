---
title: '🕊 [Swift] 저장 속성 / 지연 저장 속성'
date: 2021-01-12 06:00:00
category: 'Swift'
draft: false
showToc: true
---

# 저장 속성(Stored Property)

```swift
var 속성명: 타입 = 기본값
let 속성명: 타입 = 기본값
```

저장속성은 클래스와 구조체에서 선언할 수 있고,  
인스턴스에 속한 속성으로 인스턴스가 생성될 때마다 새로운 메모리 공간이 생성됨.

속성에 저장되는 값은 인스턴스마다 달라짐.

선언과 동시에 기본값을 지정하는 경우,  
형식 추론을 통해 자료형 생략이 가능!

기본값을 생략한다면 자료형은 무. 조. 건. 선언해줘야 함!!!!!

```swift
class Person {
    let name: String = "JINJOO"
    var age: Int = 30
}
```

```swift
인스턴스명.속성명

인스턴스명.속성명 = 새로운값
```

새로운 인스턴스를 만들고,  
속성에 저장된 값을 확인해보자.

```swift
let p = Person()
p.name // JINJOO
p.age // 30
```

점을 찍어서 속성에 접근함.  
점문법(Dot Syntax) or 명시적 멤버 표현식(Explicit Member Expression)  

속성에 저장된 값을 바꾼다면?

```swift
p.age = 20
```

`age` 속성은 `var`로 선언했기 때문에 당연히 바꿀 수 있음.

 

클래스를 구조체로 바꿔보자.

![1](https://user-images.githubusercontent.com/55340876/110790891-ed2ff780-82b4-11eb-810b-2c032293c2bb.png)

캡쳐를 보면 `let p = Person()` 구조체 인스턴스를 상수에 저장을 했음.  
이러면 구조체에 포함된 모든 속성도 상수가 됨!

![2](https://user-images.githubusercontent.com/55340876/110790886-ebfeca80-82b4-11eb-930a-e82cc76de5b3.png)

`var` 로 선언해주면 에러가 사라짐!!!

구조체에 가변성은 속성에 가변성에도 영향을 주고,  
저장 속성을 바꿔야 한다면 구조체의 인스턴스를 변수에 저장해서 사용하자!

# 구조체와 클래스의 저장 속성
구조체는 저장 속성을 모두 포함하는 이니셜라이저를 자동으로 생성함.

클래스는 저장 속성이 옵셔널이 아니라면  
(값이 있어도 없어도 상관없는 옵셔널이면 굳이 초깃값 설정 노노해)    
속성에 기본값을 지정해주거나,  
사용자 정의 이니셜라이저를 통해 반드시 초기화 해야함.

클래스 인스턴스의 상수 속성은 인스턴스가 초기화(이니셜라이즈)될 때,  
한 번만 값을 할당할 수 있고, 자식 클래스에서 이 초기화를 변경할 수 없음.

즉, 구조체는 속성에 맞는 이니셜라이저를 자동 제공하지만,  
클래스는 그렇지 않으니까 좀 번거로움!  

클래스의 저장 속성에 초깃값을 지정하면 따로 사용자 정의 이니셜라이저를 구현해줄 필요 없음!

# 지연 저장 속성(Lazy Stored Property)

```swift
lazy var name: 타입 = 기본값
```

저장 속성이 초기화 되는 시점은 인스턴스 초기화 시점과 동일함.  
지연 저장 속성은 초기화를 지연 시킴.  
속성에 처음 접근하는 시점에 초기화 됨.

저장 속성 문법 앞에 `lazy` 키워드만 붙이면 끝!!

지연 저장 속성은  
인스턴스가 초기화된 이후에 개별적으로 초기화 됨.(항상 var로 선언하자!)  
생성자에서 초기화하지 않기때문에 선언 시점에 기본값을 저장해줘야 함.

 
```swift
struct Image {
    init() {
        print("new image")
    }
}

struct BlogPost {
    let title: String = "Title"
    let content: String = "Content"
    let attachment: Image = Image()
}

let post = BlogPost() // new image
```

속성으로 제목(String), 내용(String), 첨부파일(Image)을 저장하고 있음.

제목, 내용은 비교적 작은 크기의 메모리 공간에 저장할 수 있어서 별다른 오버헤드가 없음.  
반면 Image는 대부분 바이너리 형태로 저장되어 있고,  
나머지 두 속성과는 크기가 수십, 수백배 차이가 남.

`attachment` 속성을 저장 속성으로 선언하면  
인스턴스가 초기화되는 시점에 새로운 Image가 저장이 됨.  
이 방식은 매번 인스턴스 생성시마다 Image를 가져온 후 메모리 공간에 복사해서 **오버헤드가 발생**함.  
`attachment` 속성을 항상 사용하는 것이 아니라면 불필요한 메모리 사용을 줄여야 함!!!

속성 선언 앞에 `lazy var` 를 선언해서 지연 저장 속성으로 바꿔주자.

```swift
struct BlogPost {
    let title: String = "Title"
    let content: String = "Content"
    lazy var attachment: Image = Image()
}

let post = BlogPost()
```

코드를 재실행하면 이번엔 로그 new image 가 출력되지 않음.


`BlogPost` 인스턴스가 생성되고,  
`title`, `content` 속성은 초기화 되었지만  
`attachment` 속성은 아직 초기화 되지 않은 것!!

![3](https://user-images.githubusercontent.com/55340876/110790882-ea350700-82b4-11eb-8527-4e8cd4d59206.png)

구조체 인스턴스를 상수에 저장하고 있기 때문에 모든 속성이 상수가 됨.  
다시 말해 인스턴스가 초기화 된 다음에는 값 변경이 불가함.

구조체에서 지연 저장 속성을 사용하려면 인스턴스를 변수에 저장해야 함!!!


인스턴스를 변수에 저장하면?

```swift
var post = BlogPost()
post.attachment // new image
```

로그가 제대로 실행됨.

더 응용해보쟈.

```swift
struct BlogPost {
    let title: String = "Title"
    let content: String = "Content"
    lazy var attachment: Image = Image()
    
    // 새로운 속성 추가
    let data: Date = Date()
    
    // 날짜를 문자로 바꾸는 코드를 클로저를 활용해서 초기화
    lazy var formattedDate: String = {
        let f = DateFormatter()
        f.dateStyle = .long
        f.timeStyle = .medium
        return f.string(from: data)
    }() // 괄호를 붙이면 클로저가 초기화 시점에 호출된다.
}
```
