---
title: '🕊 [Swift] 옵셔널 체이닝'
date: 2021-01-08 05:00:00
category: 'Swift'
draft: false
showToc: true
---

# 옵셔널 체이닝(Optional Chaining)

**옵셔널을 연달아 호출하기!!**

2가지만 기억하삼.

1. 옵셔널 체이닝의 결과는 항상 옵셔널임
2. 옵셔널 체이닝에 포함된 표현식 중에서 하나라도 nil을 리턴한다면,  
   이어지는 표현식을 평가하지 않고 nil을 리턴함

![1](https://user-images.githubusercontent.com/55340876/110230771-8d54ec00-7f56-11eb-94fd-be974d05a5e3.png)

여기까지는 제대로 실행됨.

인스턴스2를 만들어서 옵셔널 체이닝을 구현해봅세.

```swift
let b = optionalP.contacts.address
```

이런식으로 코드를 작성하면 아래처럼 에러남.

`contacts` 속성에 접근하려면 반드시 `optionalP` 인스턴스를 **언래핑** 해야함.

에러 팝업을 보자.

첫번째 방법으로 `?` 를 사용해서 체인으로 연결하거나,  
두번째 방법으로 `!` 를 사용해서 강제 추출해야 하는데..

이전에도 말했듯이 `!`로 강제 추출을 하는 경우에는 값이 nil인 경우 크래시가 발생할 수 있으니  
첫번째 `?`를 이용한 방법을 추천함.

에러 팝업에 첫번째를 사용할거니까 해당 줄의 `Fix`를 눌러주삼.  
자동으로 코드에 적용되고 에러는 사라짐

![1](https://user-images.githubusercontent.com/55340876/110230786-c8efb600-7f56-11eb-9fc5-4b520cd00133.gif)

`optionalP`에 인스턴스가 저장되어 있다면 이어지는 `contacts` 속성에 접근하고,  
반대로 nil이 저장되어 있다면 nil을 리턴하고 코드를 종료함

nil을 저장해보자!

![2](https://user-images.githubusercontent.com/55340876/110230787-c9884c80-7f56-11eb-9ba6-817b20cb78ab.png)

상단 코드에서 `a` 는 Stirng 타입,  
`b` 와 `c` 는 **옵셔널 체이닝**을 통해 접근했기 때문에 **옵셔널 Stirng 타입**임.

```swift
optionalP?.contacts.address
```

`optionalP?` 인 **옵셔널 표현식**과 조합되었기 때문!  
**옵셔널과 논옵셔널 표현식은 자유롭게 조합될 수 있음.**

<span style="color: red;">**옵셔널 체이닝으로 리턴되는 형식은 항상 옵셔널로 리턴됨.**</span>

## 논옵셔널의 경우

속성이나 메서드에 접근할 때 모두 논옵셔널 타입을 리턴하고 최종적으로 문자열을 리턴한다고 가정할 때,  
전체 표현식의 결과는 String임.

## 옵셔널의 경우

전체 표현식의 옵셔널 표현식이 하나라도 포함되어 있다면 옵셔널 체이닝이 됨!

이 경우에도 마찬가지로 가장 마지막에 있는 표현식에 따라 리턴되는 값의 형식이 결정되는데,  
옵셔널 체이닝이니까 옵셔널 Stirng임  
마지막 형식이 Int라도 옵셔널 Int로 리턴됨.

마지막 표현식이 옵셔널 String이면 어처피 이미 옵셔널이라 옵셔널로 리턴됨.

## nil의 경우

옵셔널 표현식에서 nil이 리턴된다면?  
세번째 표현식까지만 평가되고 nil이 리턴되고 바로 종료됨 (나머지 네번째, 다섯번째 표현식은 평가되지 않음)

세번째까지만 평가되었으니 리턴형도 세번째 따라 결정되냐고?  
ㄴㄴ  
이 경우에도 마지막 표현식에 따라 결정됨.

## 구조체2 Contacts를 옵셔널로 바꿔보자

![1](https://user-images.githubusercontent.com/55340876/110230912-972b1f00-7f57-11eb-8965-16a9d1f315ef.png)

오메메메ㅔ메 에러보소?!

옵셔널 표현식을 통해서 속성에 접근하거나 메서드를 호출할때는  
`?` , `!` 를 붙여줘야함.  
강조했듯이 `!` 는 크래시 위험이 있으니 **`?` 를 사용하도록 하삼!**

```swift
let a = p.contacts?.address

let b = optionalP?.contacts?.address

let c = optionalP?.contacts?.address
```

이러면 `a` 는 **옵셔널 Stirng**으로 자료형이 바뀜.  
왜??  
이전에는 표현식에 옵셔널 표현식이 없었지만 지금은 있잖수!!

이렇게되믄 옵셔널 체이닝이 되니까,  
옵셔널 체이닝이 리턴하는 결과는 항상 옵셔널이니까  
`a`도 옵셔널 Stirng으로 바뀐 것!!

여기서 궁금증!

```swift
let b = optionalP?.contacts?.address
```

`?`가 2갠데 중첩이냐고?  
중첩되진 않음.  
**옵셔널 체이닝 결과가 이미 옵셔널이라면 물음표를 추가해도 걍 옵셔널인거!**

## 구조체1 address를 옵셔널로 바꿔보자

![2](https://user-images.githubusercontent.com/55340876/110230910-96928880-7f57-11eb-9b4e-c5795210cad4.png)

컴파일 에러가 발생하지는 않음.

현재 `address` 속성은 가장 마지막에 접근하고 있지?  
이 속성을 통해 다른 속성에 접근하고 있지 않기 때문에 에러가 안나는거!!

만약 `address` 속성을 통해 `?` 안붙이고 다른 것에 접근한다면?

![3](https://user-images.githubusercontent.com/55340876/110230908-96928880-7f57-11eb-8fbe-90dbf9a05c35.png)

당욘히 컴파일 에러가 뿜!!

![4](https://user-images.githubusercontent.com/55340876/110230907-95f9f200-7f57-11eb-98ee-9f3a884986f1.png)

`address` 는 이제 **옵셔널 String**이니까 옵셔널 형식으로 선언되어 있는 값을 통해서  
속성이나 메서드를 호출할 때는 반드시 `?`를 붙여야함. 잊지맬재!!!

## 구조체2에 메서드를 추가해보자

![5](https://user-images.githubusercontent.com/55340876/110230906-95f9f200-7f57-11eb-91e8-fc96b51b5da7.png)

메서드를 통해 address 속성에 접근해보자.

![6](https://user-images.githubusercontent.com/55340876/110230905-95615b80-7f57-11eb-8c6e-92777bd8c0ce.png)

그냥 접근하면 당연히 컴파일 에러가 뿜!!

![7](https://user-images.githubusercontent.com/55340876/110230904-95615b80-7f57-11eb-8ecb-c9522dfbc159.png)

메서드가 옵셔널 타입을 리턴하고 이 타입을 통해 다른 멤버에 접근할 때는

```swift
p.getContacts()?.address
```

**항상 () 괄호 뒤에 ? 를 붙임  
항상 () 괄호 뒤에 ? 를 붙임  
항상 () 괄호 뒤에 ? 를 붙임**

괄호 앞에도 붙일 수 있지만 드문 경우임.

![8](https://user-images.githubusercontent.com/55340876/110230903-94c8c500-7f57-11eb-8fe7-69207bb8c07a.png)

만약 `f()?.address` 만 했다면 컴파일 에러가 뿜!  
함수 자체가 옵셔널이라서 괄호 뒤에만 `?` 붙이면 넘나 부족한 것..  
**양쪽으로 붙여줘야 코드가 정상적으로 작동함.**

## 구조체1에 메서드를 추가해보자

![9](https://user-images.githubusercontent.com/55340876/110230902-94302e80-7f57-11eb-919a-a4f5d8cbc5e4.png)

`address` 속성에 값이 저장되어 있다면 추출해서 print함수로 출력하고,  
저장되어 있지 않다면 문자열을 출력함.  
`(address ?? "주소 없음")`  
이거 낯익지? 어디서 배웠나 기억해보삼

**Nil 병합 연산자임!!!**

```swift
a ?? b
옵셔널표현식 ?? 표현식
```

기억이 안난다면 다시 보고오삼..;

![10](https://user-images.githubusercontent.com/55340876/110230901-91353e00-7f57-11eb-997c-1362d39da12f.png)

이 때, `d` 상수의 자료형은 `()?` **옵셔널 void**임.  
`void`는 **값을 리턴하지 않는다는 특별한 키워드**임!

실제로 메서드가 호출되었는지 확인해보자.

```swift
// nil이 아닌지 비교
// printAddress() 메서드가 호출되면 nil이 아니다. void니까
// 컨디션이 true가 되고 if 블럭이 실행된다.
if p.getContacts()?.printAddress() != nil {

}

// 옵셔널 바인딩 + 와일드 카드 패턴으로 구현
// 세련된 코드!
// printAddress() 메서드가 호출된 경우에만 바인딩 성공
// 그런데 void는 리턴 값이 없어서 바인딩할 값도 없다.
// 그래서 와일드 카드 패턴으로 생략하고 바인딩 성공 여부만 판단한다. 성공하면 if 블럭 실행
if let _ = p.getContacts()?.printAddress() {

}
```

자, 이제

```swift
// 구조체 선언1
// 이메일과 주소를 저장
struct Contacts {
    var email: [String: String]
    var address: String?

    func printAddress() {
        return print(address ?? "주소 없음")
    }
}
```

상단 구조체1에서 옵셔널이 아닌 email에 접근해보자,

```swift
let e = p.contacts?.email["home"] // chajanee@gmail.com
```

요놈을 옵셔널로 다시 바꾸고 접근해보자!

```swift
// 구조체 선언1
// 이메일과 주소를 저장
struct Contacts {
    var email: [String: String]?
    var address: String?

    func printAddress() {
        return print(address ?? "주소 없음")
    }
}
```

```swift
let e = p.contacts?.email?["home"] // chajanee@gmail.com
```

여기서 `e` 상수의 자료형은 뭘까?

옵셔널 체이닝에서는 마지막 표현식이 리턴되는 값의 형식을 결정하는데,  
지금은 딕셔너리임.

딕셔너리는 키와 값을 따로 저장하고,  
값에 따라서 형식이 결정됨!

지금은 문자열이니 `e` 상수의 자료형은 **옵셔널 String**임.

```swift
p.contacts?.email?["home"]?.count // 18
```

딕셔너리가 옵셔널로 선언되어 있고  
키를 통해서 값을 얻을 때는 `[ ]` 앞에 `?`를 붙이고  
뒤에 붙일 때는 서브 스크립트가 리턴하는 값을 통해 속성에 접근하거나 메서드를 호출할 때임!

꼭 기억하삼!!

```swift
// 값 바꾸기
p.contacts?.address = "Busan"
p.contacts?.address // "Busan"

optionalP?.contacts?.address = "Busan"
optionalP?.contacts?.address // nil
```

옵셔널 체이닝을 통해 최종 속성에 접근했다면 값을 저장하고,  
접근하지 못하고 중간에 종료됐다면 당연히 아무 변화가 없음.

물음표는 대체 어디에 사용하냐?!  
익숙해져야한다..  
아니면 fix it을 사용해주삼ㅋㅋㅋ

- <span style="color: red;">**옵셔널 체이닝의 결과는 항상 옵셔널임**</span>
- <span style="color: red;">**옵셔널 체이닝에 포함된 표현식 중 하나가 nil을 리턴한다면 전체 표현식을 중단하고 nil을 리턴함**</span>

요것만 일단 기억하자.
