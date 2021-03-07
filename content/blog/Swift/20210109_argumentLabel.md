---
title: '🕊 [Swift] 인자 레이블'
date: 2021-01-09 12:00:00
category: 'Swift'
draft: false
showToc: true
---

# 인자 레이블(Argument Label)

코드를 예로 들어보자.

![1](https://user-images.githubusercontent.com/55340876/110236525-9dca8e00-7f79-11eb-8f10-fec9183c4b8a.png)

레이블은 쉽게 말해서 이름인데,

![2](https://user-images.githubusercontent.com/55340876/110236524-9d31f780-7f79-11eb-892c-08597fc62dde.png)

상단 코드에서 인자 레이블은 `to`임.

![3](https://user-images.githubusercontent.com/55340876/110236523-9d31f780-7f79-11eb-840c-76cb43e66985.png)

인자 레이블을 사용하는 가장 큰 목적은,  
함수 이름의 가독성을 높이기 위해서임.

```swift
func sayHello(to: String = "Stranger") {
   print("Hello, \(to)")
}

sayHello(to: "Swift") // Hello, Swift
```

`sayHello(to: "Swift")`에서  
`to`는 파라미터명임과 동시에 인자 레이블임.

**함수를 호출할 때는 인자 레이블을 써야함!!**

![4](https://user-images.githubusercontent.com/55340876/110236522-9c996100-7f79-11eb-9a88-37edbd73f9ba.png)

첫번째 함수는 `sayHello name`  
두번째 함수는 `sayHello2 to` 라고 읽어야함.

두 함수는 서로 다름!!!  
컴파일러는 두 함수를 같은 함수라고 보지않아서 컴파일 에러가 뿜!

![5](https://user-images.githubusercontent.com/55340876/110236521-9c996100-7f79-11eb-8045-2f71ff4f410b.png)

인자 레이블은 함수 호출시 사용하는 이름임.  
함수 바디에서 파라미터에 접근하기 위해 사용하는 이름이 아니라서 위 코드처럼 에러 뿜!

파라미터명은 함수 호출에서 사용할 수 없음! 에러 뿜!  
함수 호출시 필요하다면 반드시 인자 레이블을 사용함!!

<span style="color: red;">**파라미터 이름은 함수 바디에서 함수로 전달된 값에 접근할 때 사용하고,  
인자 레이블은 함수를 호출하면서 인자를 전달할 때 사용함.**</span>

```swift
func sayHello(_ name: String = "Stranger") {
   print("Hello, \(name)")
}

sayHello("Swift") // Hello, Swift
```

요로코롬 <span style="color: blue;">**와일드카드 패턴**</span>도 가능함.  
함수 선언시 인자 레이블을 생략했다면,  
함수 호출시에도 인자 레이블을 반드시 생략해줘야 함!

함수 이름을 지을 때 주의!!

- 함수 이름은 주로 동사가 포함됨.
- 인자 레이블은 to, in, with와 같은 전치사를 씀.
- 파라미터에는 주로 명사가 옴.

</br>

**세가지를 합쳤을 때 간단한 문장으로 읽을 수 있도록 짓는 것이 좋음!!!**

앞으로 공부할 때 함수 부분에  
`control + cmd` 키를 이용해서 규칙을 가끔 봐주자!

![6](https://user-images.githubusercontent.com/55340876/110236520-9c00ca80-7f79-11eb-8d23-f275875da84c.png)

![7](https://user-images.githubusercontent.com/55340876/110236518-97d4ad00-7f79-11eb-9b64-421e782b1335.png)
