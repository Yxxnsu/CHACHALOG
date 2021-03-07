---
title: '🕊 [Swift] 입출력 파라미터(In-Out Parameter)'
date: 2021-01-09 18:00:00
category: 'Swift'
draft: false
showToc: true
---

# 입출력 파라미터(In-Out Parameter)

<span style="color: red;">**인자로 전달된 변수의 값을 직접 바꿀 수 없음**</span>

![1](https://user-images.githubusercontent.com/55340876/110238739-9362c100-7f86-11eb-8224-207b6d7458dd.png)

**파라미터는 <span style="color: blue;">임시 상수</span>이기 때문에  
값을 바꾸기 전에 임시로 복사해서 값을 변경하는 행위는 불가능!**

```swift
(이름: inout 타입)

함수명(인자레이블: &인자값)
```

```swift
var num1 = 12
var num2 = 34

func swapNumber(_ a: inout Int, with b: inout Int) {
    let c = a
    a = b
    b = c
}

num1 // 12
num2 // 34

swapNumber(&num1, with: &num2)

num1 // 34
num2 // 12
```

<span style="color: red;">**입출력 파라미터는 카피인, 카피아웃 메모리 모드를 사용함**</span>

```swift
swapNumber(&num1, with: &num2)
```

여기서 함수를 호출하면서 입출력 파라미터로 변수를 전달하고 있음  
그럼 변수에 저장된 값을 복사해서 전달함 (요 부분은 일반 파라미터와 동일)  
이 과정을 <span style="color: red;">**카피인**</span> 이라 함.  
**함수 바디 내부로 복사되는 것!**

차이점은 함수가 종료될 때 발생하는데,  
함수가 모두 실행되고 종료되면  
함수에서 변경한 값이 인자로 전달한 변수에 복사됨.  
이 과정은 <span style="color: red;">**카피아웃**<span>.  
**함수 바디 내부에서 외부로 복사되는 것!**

`num1`을 전달하면 `num1`에 값이 `a`로 복사됨.  
함수 바디에서는 `a`를 임시 상수 `c`에 저장해두고,  
`a` 를 `b` 로 바꾸고,  
`b` 를 임시 상수 `c`에 저장된 값으로 바꿈.  
결과적으로 두 값이 교체되고 함수가 종료됨!

그럼 이 때,  
변경한 값들이 `num1`과 `num2`로 복사됨!

이런식으로 동작하기 때문에 마치 변수 값을 직접 수정하는 것처럼 보임.  
컴파일러가 다 알아서 해주니까 내부 동작을 다 이해할 필요는 없고~~  
걍 입출력 파라미터로 전달하면 함수 내부에서 값을 변경할 수 있다고 이해하삼.

입출력 파라미터에서 자주하는 실수는?

![2](https://user-images.githubusercontent.com/55340876/110238737-9362c100-7f86-11eb-9e4e-821d757bbf9d.png)

<span style="color: red;">**동일 변수를 두번 이상 전달할 수 없음.**</span>  
**반드시 별도의 변수를 하나씩 전달해야 함!**

이번에는 상수를 선언하고 인자로 전달해봅세.

![3](https://user-images.githubusercontent.com/55340876/110238736-92ca2a80-7f86-11eb-80ae-bd9c97cfc542.png)

불변값을 인아웃 인자로 전달할 수 없음.  
함수가 종료되면 카피아웃을 통해 최종값을 복사해야하는데  
`let` 상수는 값을 변경할 수 없으니 카피아웃은 불가능한게 당연!

![4](https://user-images.githubusercontent.com/55340876/110238733-9198fd80-7f86-11eb-80f5-00c7f648b4c7.png)

리터럴을 직접 전달해도 컴파일 에러가 발생!  
리터럴은 값을 바꿀 수 없고,  
값을 저장할 수 있는 메모리 공간조차 없음.  
이런 코드는 삽불가능!

항상 메모리 공간을 가진 변수를 전달해야 카피아웃이 가능함  
입출력 파라미터는 다른 파라미터에 비해 제약이 많음.  
<span style="color: red;">**상수, 리터럴은 인자로 전달할 수 없음!!  
기본값 선언도 삽불가!!**</span>

가변 파라미터를 입출력 파라미터로 선언해보자.

![5](https://user-images.githubusercontent.com/55340876/110238731-8fcf3a00-7f86-11eb-9b5b-ef9b06b65d6f.png)

inout 키워드는 가변 파라미터에서 사용할 수 없지렁
