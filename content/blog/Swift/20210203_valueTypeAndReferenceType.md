---
title: '🕊 [Swift] 값형식/참조형식의 메모리 저장방식'
date: 2021-02-03 01:00:00
category: 'Swift'
draft: false
showToc: true
---

![1](https://user-images.githubusercontent.com/55340876/110953286-82e98680-838a-11eb-8571-0a068ab65796.png)


# 값 형식

```swift
struct StructValue {
    var width = 0.0
    var height = 0.0
}

var value = StructValue()

var value2 = value
value2.width = 1.0
value2.height = 2.0

value
value2
```

`struct`로 구조체를 만들고,  
속성값을 초기화한 후, `value` 변수에 인스턴스를 생성했음.

![2](https://user-images.githubusercontent.com/55340876/110953283-8250f000-838a-11eb-96c1-851fc4ebfcb4.png)


인스턴스를 생성하면 **Stack**에 메모리 공간이 생성되고,  
초기화 된 값이 저장됨.  
여기서 `value` 변수와 메모리 공간이 연결됨!  

그리고 `value2` 변수를 선언하고 초기값을 `value`로 저장함.  
이 경우엔 값 형식에서는 값이 복사됨.  
즉, `value` 인스턴스의 복사본이 **Stack**의 새로운 메모리 공간에 저장이 되고,  
`value2` 변수와 이 메모리 공간이 연결됨!

**`value` 인스턴스와 `value2` 인스턴스의 속성 값은 동일하나,  
메모리 공간은 서로 다른 개별 인스턴스임.**

상단 이미지를 보면 알 수 있듯이,  
`value2` 인스턴스의 속성 값을 변경해도 `value` 인스턴스의 값은 변하지 않음.

값 형식은 항상 **Stack**에 저장되고,  
값을 전달할 때마다 새로운 복사본이 생성됨.

**메모리를 공유하고 있는 `value2` 인스턴스의 속성 값을 바꿔도  
`value` 인스턴스의 속성 값에는 영향이 가지 않는다.**  
스위프트는 이것을 **Copy-on-Write Optimizetion** 이라고 한다.

**Copy-on-Write 최적화(값을 변경할 때만 실제로 복사되도록 허용)는  
불필요한 복사와 메모리 생성을 최대한 줄여서, 코드의 실행 성능을 최대한 높여준다.**





# 참조 형식
클래스로 인스턴스를 생성하면,  
**Stack**과 **Heap**에 새로운 메모리 공간이 생성됨.


<span style="color: red;">**Heap : 인스턴스 저장**</span>   
<span style="color: red;">**Stack : 힙 메모리 주소 저장**</span>


![3](https://user-images.githubusercontent.com/55340876/110953281-81b85980-838a-11eb-822e-2791d14f4dcb.png)


여기서 `value`는 **Stack**에 생성된 메모리 공간과 연결됨.  
값 형식과는 다름!!!  
<span style="color: red;">**값 형식에서는 인스턴스에 바로 접근 가능했지만,  
참조 형식에서는 항시 **Stack**을 거쳐서 인스턴스에 접근함!!!**</span>

![4](https://user-images.githubusercontent.com/55340876/110953280-81b85980-838a-11eb-8664-1216495907f7.png)

마찬가지로 `value2` 변수를 선언하고 초기값을 `value`로 저장하면,  
**Stack**에 새로운 메모리 공간이 생성되고,  
이전에 저장했던 메모리 주소가 고대로 복사됨.

`value2` 인스턴스의 속성 값을 바꾸면?  
값을 전달할 때마다 인스턴스 복사본이 생성되는게 아니라,  
**Stack**에 저장된 힙 메모리 주소가 복사됨.


>"참조"를 전달한다.  
"참조"를 복사한다.  
이 때, 참조는 **Stack**에 저장되어 있는 메모리 주소를 뜻함.  

속성을 바꾸더라도 항상 동일 인스턴스의 속성을 바꾸게 되는 것!


# 주의할 점!
값 형식의 인스턴스를 생성시, `let` 키워드를 통해 상수에 저장한다면?

![5](https://user-images.githubusercontent.com/55340876/110953275-80872c80-838a-11eb-808f-adb0762a8ada.png)

`StructValue` 구조체의 속성값들은 현재 `var` 키워드로 선언된 변수지만,  
인스턴스를 `let` 키워드로 생성해버리면 상수로 인스턴스를 생성한거니까  
내부의 속성 값들도 상수가 되어버림.  
그래서 당연히당연히당연히!! 속성 값을 바꿀 수 없다고 에러가 뿜!

`let` 키워드는 상수가 가리키는 **Stack**을 값을 바꾸지못하는 공간으로 만듬.  
메모리에 저장된 값을 바꿀 수 없으니까 속성의 값을 바꾸는 것은 불가함.


참조 형식도 해볼까용?

![6](https://user-images.githubusercontent.com/55340876/110953268-7ebd6900-838a-11eb-8789-b82ee935fa39.png)


참조 형식에서도 마찬가지로  
`let` 키워드는 상수가 가리키는 **Stack**을 값을 바꾸지못하는 공간으로 만듬.

참조 형식에서 **Stack**에는 메모리 주소가 저장되어 있고,  
`let` 키워드로 선언하면 메모리 주소를 바꾸지 못하게 되는 것임.  
(상수가 가리키는 인스턴스는 변경 불가!!)

하지만 인스턴스가 저장되어 있는 **Heap**에는 제약이 없으니까  
인스턴스의 속성 값을 변경할 수 있음!

![7](https://user-images.githubusercontent.com/55340876/110953261-7cf3a580-838a-11eb-8dea-0978f36853ad.png)
