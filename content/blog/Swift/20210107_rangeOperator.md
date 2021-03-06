---
title: '🕊 [Swift] 범위 연산자'
date: 2021-01-07 06:00:00
category: 'Swift'
draft: false
showToc: true
---

# Range Operator

1 ~ 10  
5 ~ 8  
보통은 이렇지만 스위프트는 요래 안하쥐!

# 닫힌 범위(Closed Range Operator)

```swift
시작범위 ... 종료범위

// 단항은 공백없이 붙임
시작범위...
...종료범위
```

명심하삼!  
<span style="color: red;">**단항은 공백없이 붙이는 거임!!**</span>

**lowerBound : 시작범위  
upperBound : 종료범위 (Colsed Range Operator에서는 upperBound가 포함됨!)**

![1](https://user-images.githubusercontent.com/55340876/110207335-1cfe8a00-7ec6-11eb-8518-cb1db28d92fc.png)

<span style="color: red;">**종료범위(upperBound)가 당연히 시작범위(lowerBound)보다 작을 수는 없음**</span>

거꾸로 10 ~ 1까지의 범위는 어떻게 표현할까?  
10 ... 1 하면 되는거 아니냐고?

</br>

<center>
<img width="400" alt="" src="https://user-images.githubusercontent.com/55340876/110207333-1c65f380-7ec6-11eb-8524-641144e93473.jpeg">
</center>

그럼 에러 뿜뿜!

위에서 말했듯이,  
종료범위(upperBound)가 당연히 시작범위(lowerBound)보다 작을 수는 없음!!  
없다고!! 그냥 없어!!!

`reversed()` 메서드를 통해서 구현해주자.

![3](https://user-images.githubusercontent.com/55340876/110207332-1c65f380-7ec6-11eb-96ac-ccbb4db01375.png)

물논 10 ... 1 이 가능하니까 실수도 가-능!!!!

```swift
10.44 ... 58.33 // {lowerBound 10.44, upperBound 58.33}
```

1 ~ 10까지 더하는 예시도 함 봐주자!

![4](https://user-images.githubusercontent.com/55340876/110207331-1bcd5d00-7ec6-11eb-918e-bb200ca3f977.png)

이번에는 배열을 추출해볼까?

![5](https://user-images.githubusercontent.com/55340876/110207330-1bcd5d00-7ec6-11eb-957c-1b95b007dfa4.png)

아직까지는 할만함...;

이거 쓸 때 주의할 점은,  
<span style="color: red;">**upperBound 생략하고 사용할 때에는 무한루프가 도니까  
반드시 고정된 범위내에서 사용해야함!**</span>

# 반 닫힌 범위(Half-Opern Range Operator)

<span style="color: red;">**종료범위(upperBound)는 선언한 범위내에 포함되지 않음**</span>

```swift
시작범위 ..< 종료범위
..<종료범위
```

상단 코드를 표현해보자.

![6](https://user-images.githubusercontent.com/55340876/110207329-1b34c680-7ec6-11eb-8c99-0835ba3a0862.png)

![7](https://user-images.githubusercontent.com/55340876/110207328-1b34c680-7ec6-11eb-9d10-16dc159ebbd6.png)

위에서 ..<2는 lowerBound가 0으로 고정된 상태임.

특정 값이 해당 범위에 포함하는지도 확인해보자.

![8](https://user-images.githubusercontent.com/55340876/110207327-1a039980-7ec6-11eb-85fd-d190620db22f.png)

range는 0 ~ 5까지의 범위(종료범위 5를 포함)라서  
9는 범위에 포함되지 않으니까 당연히 false를 리턴하고,  
3은 포함되니까 true를 리턴함.

range2는 배열이 아니고 고정 범위가 없으니까 시작 범위(lowerBound)는 무한대임;  
-10이건 -1이건 고정범위가 없으니 음수들은 모두 true를 리턴함.  
4를 넣는다면 그건 당연히 종료 범위(upperBound)를 초과하니까 false를 리턴함.

<span style="color: red;">**Half-Opern Range를 for-in 반복문에서  
2항 연산자로 사용하는 것은 가능한데,  
단항으로 사용하는 것은 불가능!!!**</span>

<u>배열일 경우 lowerBound 가 0으로 고정이 되지만,  
배열이 아닐 경우엔 lowerBound가 무한이라고 생각하면 됨.</u>

<u>고정된 범위는 lowerBound와 upperBound가 자동으로 지정되지만  
자동으로 사용시에는 무한대가 되니 주의합세!!</u>
