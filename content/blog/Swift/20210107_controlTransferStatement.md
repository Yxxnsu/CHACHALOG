---
title: '🕊 [Swift] 흐름제어문 / 제어전달문'
date: 2021-01-07 22:00:00
category: 'Swift'
draft: false
showToc: true
---

# Control Transfer Statements

**제어 전달문은 조건문과 반복문에서  
일반적인 코드의 흐름을 바꾸기 위해서 사용.**

예를 들어 특정 조건에 따라서  
반복문을 종료해야한다면 제어 전달문을 사용할 수 있음!

스위프트는 5가지 제어 전달문을 제공함

- break
- continue
- fallthrough
- return
- throw

> 제어를 전달한다는 것은?  
> 현재 실행 중인 스코프에서 코드를 중지하고,  
> 다음에 실행할 코드를 바로 실행함.

for-in 반복문을 통해 1 ~ 100까지 반복하는 코드를 예시로 보자.

![1](https://user-images.githubusercontent.com/55340876/110215165-affdeb00-7eeb-11eb-8fcc-c180cfbf3b11.png)

매번 반복을 시작할때 start를 출력.

이어서 if문이 오는데 여기선 반복상수가 5보다 작은지 확인하고,  
작으면 continue가 호출~

컨티뉴는 제어를 다음 회차로 전달!  
그래서 아래에 if문과 print함수는 호출되지 않음

그리고 나서 for-in 반복문이 종료되는게 아니라 두번째 반복을 실행.  
이번에도 반복상수가 5보다 작으니 또 컨티뉴 호출~

계속 반복하다가 반복상수가 5가 되면 첫번째 if문이 false로 평가되고,  
아래쪽 if문으로 가고 10보다 작으니까 false로 평가되서 이 블럭이 실행되지 않고  
print함수를 호출하고, 다음 회차의 반복이 시작됨.

계속 반복하다가 반복상수가 11이 되면 두번째 if문이 true가 되고  
break가 호출!  
얘는 호출되는 즉시 문장을 종료함 (for-in 반복문 종료)  
그래서 제어가 반복문 다음으로 전달됨.

**`continue` : 다음 회차 다음으로 제어를 전달  
`break` : 문장 다음으로 제어를 전달**

제어 전달문은 종류에 따라 제어가 전달되는 곳이 다른데,  
이건 뭐.. 코드를 자주 쓰고 자주 보면 몸이 외워짐....

## break문

- **`break`는 문장을 중지**
- **`break`는 문장이 중첩되어있을 때 가장 인접한 문장을 중지**

### 예시1)

![2](https://user-images.githubusercontent.com/55340876/110215164-affdeb00-7eeb-11eb-9235-a45ee14bf428.png)

num 값이 지금 1이니까 case에 매칭이 되겠지?!

begin block을 출력하고,  
if을 통해서 홀수인지 확인함.

1은 홀수니까 조건이 true잖아?  
그니께 if문의 실행구문인 break를 실행하고,  
문장 다음으로 제어를 전달함.

즉, switch문을 종효한 다음에, 제어를 이어지는 코드로 전달함  
다음 코드인 done을 출력하는겨!

### 예시2)

![3](https://user-images.githubusercontent.com/55340876/110215162-af655480-7eeb-11eb-85c4-6445da7e9db1.png)

이건 뭐... 코드만 봐도 이해가제?!

for문을 통해 1~10까지 반복을 하고, 반복상수를 출력함.

근데 중간에 if문으로 반복상수가 1보다 크면 break를 줘서 제어를 이어지는 코드로 전달함.

일단 1을 출력하고 if문은 false니까 다시 반복을 진행하겠지?  
2는 일단 출력하고 이놈은 1보다 크니까 if문에서는 true잖아?  
그니께 break 발동!!

### 예시2)

![4](https://user-images.githubusercontent.com/55340876/110215161-aeccbe00-7eeb-11eb-91c1-c8ab29b8d9ae.png)

## Continue문

**무엇을 종료하고 무엇을 계속하는지만 구분하면 쉬움!!!  
이놈은 반복문에서만 사용함!!!**

- **continue는 현재 실행중인 반복을 중지하고 다음 반복을 실행함**
- **continue는 가장 인접한 문장에 영향을 줌**

### 예시1)

![5](https://user-images.githubusercontent.com/55340876/110215158-ad9b9100-7eeb-11eb-8712-d250626fb333.png)

`continue`는 어려운게 전혀 없어.  
**"현재 반복을 종료하고 다음 반복을 실행한다!!"**

### 예시2)

```swift
// 반복문 중첩
for i in 1...10 {
    print("OUTER LOOP", i)

    for j in 1...10 {
        if j % 2 == 0 {
            continue
        }

        print(" inner loop", j)
    }
}
```

```console
OUTER LOOP 1
    inner loop 1
    inner loop 3
    inner loop 5
    inner loop 7
    inner loop 9
OUTER LOOP 2
    inner loop 1
    inner loop 3
    inner loop 5
    inner loop 7
    inner loop 9
OUTER LOOP 3
    inner loop 1
    inner loop 3
    inner loop 5
    inner loop 7
    inner loop 9
OUTER LOOP 4
    inner loop 1
    inner loop 3
    inner loop 5
    inner loop 7
    inner loop 9
OUTER LOOP 5
    inner loop 1
    inner loop 3
    inner loop 5
    inner loop 7
    inner loop 9
OUTER LOOP 6
    inner loop 1
    inner loop 3
    inner loop 5
    inner loop 7
    inner loop 9
OUTER LOOP 7
    inner loop 1
    inner loop 3
    inner loop 5
    inner loop 7
    inner loop 9
OUTER LOOP 8
    inner loop 1
    inner loop 3
    inner loop 5
    inner loop 7
    inner loop 9
OUTER LOOP 9
    inner loop 1
    inner loop 3
    inner loop 5
    inner loop 7
    inner loop 9
OUTER LOOP 10
    inner loop 1
    inner loop 3
    inner loop 5
    inner loop 7
    inner loop 9
```

## Labeled문

**문장에 이름을 붙이는 것.**

break, continue와 함께 사용하는데,  
반복문, if문, switch문에서 주로 사용

- **주로 제어문과 반복문이 중첩된 코드에서 가장 인접한 문장이 아니라, 원하는 문장을 직접 종료할 때 활용함**

```swift
레이블: 반복구문

break 레이블

continue 레이블
```

**레이블을 전달하면 가장 인접한 문장을 제어하는게 아니라,  
동일한 레이블을 가진 문장을 제어.**

```swift
for i in 1...3 {
    print("OUTER LOOP", i)

    for j in 1...3 {
        print(" inner loop", j)

        // 안쪽에 있는 for-in 반복문만 종료(바깥쪽의 for-in은 영향을 안줌!)
        break
    }
}
```

![6](https://user-images.githubusercontent.com/55340876/110215156-ab393700-7eeb-11eb-82a4-30e46aa8450f.png)

상단 코드에서  
만약에 바깥쪽 for-in 반복문을 종료하고 싶다면??

레이블을 사용해서 쉽게 구현할 수 있음

```swift
outer: for i in 1...3 {
print("OUTER LOOP", i)

    for j in 1...3 {
        print(" inner loop", j)

        // 레이블을 통해 내부가 아닌 외부의 for-in 반복문을 종료시킴
        break outer
    }
}
```
