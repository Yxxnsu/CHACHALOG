---
title: '🕊 [Swift] 오버플로우 연산자'
date: 2021-01-06 04:00:00
category: 'Swift'
draft: false
showToc: true
---

메모리가 저장할 수 있는 범위를 넘어선 값을 저장할 때  
<span style="color: red;">**Overflow**</span>라는 문제가 발생함.



스위프트는 절대 용서모태!!!! 가만안둬!!!!!  
에러를 반환함

![1](https://user-images.githubusercontent.com/55340876/110204686-af4b6180-7eb7-11eb-9447-9540bf28a500.png)

상단 코드까지는 아주아주 조오아!  
num 상수에 127 값이 저장됨



Int8.max 는 가장 큰 멕시멈 값을 저장하는데 이게 127임  
근데 여기에 +1은 하면 어떻게 될까?

![2](https://user-images.githubusercontent.com/55340876/110204685-aeb2cb00-7eb7-11eb-983c-764a6e2ce7a7.png)

에러 뿜!  
Int8 타입인 상수 num에 멕시멈 1바이트 + 1 을 해주니까  
오버플로우라서 컴파일 에러가 뿜!





# 오버플로우 연산자(Overflow Operator)
스위프트는 오버플로우 연산자 3개를 제공  
- `+` (더하기)  
- `-` (빼기)  
- `*` (곱하기)

</br>

오버플로우 연산자는  
기존 연산자 앞에 & 문자가 공백없이 붙은 형태임



오버플로우 연산을 이용해 계산해봅세!

![3](https://user-images.githubusercontent.com/55340876/110204683-aeb2cb00-7eb7-11eb-89ce-88d28b8991f1.png)

롸??  
값이 왜 -128인고??



하... 이걸 설명하자면 좀 긴데 읽기 귀찮아도 한번 정독하면 왜 -128인지 이해갈거임



자,  
비트 저장 공간이 쭈--------------------욱 있다면

![스크린샷 2021-03-06 오후 8 07 08](https://user-images.githubusercontent.com/55340876/110204682-ae1a3480-7eb7-11eb-9036-5222bd13adde.png)

코드에서 `let a: Int8` 은

![스크린샷 2021-03-06 오후 8 07 08](https://user-images.githubusercontent.com/55340876/110204682-ae1a3480-7eb7-11eb-9036-5222bd13adde.png)


8비트를 저장할 수 있는 8개의 공간이 주어짐

여기에  
`let a: Int8 = Int8.max`  
저장할 수 있는 가장 큰 값을 저장한다면 우째될까?  

![스크린샷 2021-03-06 오후 8 07 28](https://user-images.githubusercontent.com/55340876/110204681-ae1a3480-7eb7-11eb-9f89-1281fae55fed.png)

요래 저장이 되지요.

Int8은 Signed 타입으로 양수, 음수, 0을 모두 저장할 수 있는데,  
첫번째 비트를 부호비트(Sign Bit)로 사용함  
이 부호비트에는 양수를 나타내는 0이 저장되고,  
나머지 7개의 데이터 비트(Data Bit)에는 127이 이진수 형태로 저장되는거임!

여기에 오버플로우 연산으로 1을 더해봅세.  
`a &+ 1`


1은 10진수와 2진수에서 모두 1인데,  
10진수 더하기에서 합이 10이 넘으면 한자리를 올려줌  
마찬가지로 2진수 계산에서도 합이 2가되면 한자리를 올려줌

그렇다면  
0 1 1 1 1 1 1 1  -> 1 0 0 0 0 0 0 0 가 되는거임!

![4](https://user-images.githubusercontent.com/55340876/110204679-ad819e00-7eb7-11eb-9d7f-e7cbebe7d29c.png)


최종결과에서는 부호비트가 1이 되고 나머지 7개 데이터 비트가 0이 되는거임  

부호비트가 1이면 음수,  
나머지 데이터 비트를 10진수로 바꿔보면 -128이 나옴.

간만보쟈. 간만.  
자료형에 저장할 수 있는 가장 큰 값에서 1을 더했음.  
그럼 자료형에 저장할 수 있는 가장 작은 값이 되고,  
자료형에 저장할 수 있는 가장 작은 값에서 1을 빼면 저장할 수 있는 가장 큰 값이 됨!

![스크린샷 2021-03-06 오후 8 07 35](https://user-images.githubusercontent.com/55340876/110204678-ace90780-7eb7-11eb-9c07-9a8b78f551b6.png)


값이 순환한다고 생각합세!!!

오버플로우 연산자는 메모리 공간의 크기를 늘리진 않고,  
한정된 메모리 공간에서 비트만 바뀔 뿐임.

![5](https://user-images.githubusercontent.com/55340876/110204675-abb7da80-7eb7-11eb-9a26-68f6d813cd09.png)

왜 -2가 출력되는걸까?

오버플로우 곱하기 아직은 잘 안쓰니께 천천히 해석해보셈.