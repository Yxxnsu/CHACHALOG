---
title: '🕊 [Swift] 옵셔널 / 언래핑 / 강제추출'
date: 2021-01-08 01:00:00
category: 'Swift'
draft: false
showToc: true
---

# 옵셔널(Optional)

옵셔널은 어렵지 않음  
**값이 없다**는 개념만 이해하면 끝남!

![1](https://user-images.githubusercontent.com/55340876/110229929-48c65200-7f50-11eb-916b-8c9e83c21cbb.png)

변수와 상수는 값을 읽기 전에 반드시 초기화 해야됨.  
항상 형식의 맞는 값을 갖고 있어야 함.  
<span style="color: red;">**즉, 우리가 항상 쓰는 논옵셔널 타입들은 항상 값이 존재해야함!!!!**</span>

저장할 값이 없는 경우는 어떻게 해야함?!  
값이 없다는 것을 표현할 방법으로 옵셔널을 사용함.

```swift
let optionalNum: Int = nil
```

옵셔널은 값을 가지지 않아도 되는 형식임.  
논옵셔널 타입 뒤에 `?` 를 붙이면 **옵셔널 타입**이 됨!

여기서 `nil` 은 **"값이 없다, 아무것도 저장하지 않는다, 없다, 걍없다, 걍 값이 없다"** 라고 생각해주삼

![2](https://user-images.githubusercontent.com/55340876/110229928-48c65200-7f50-11eb-8e07-5a1b6117ff40.png)

위처럼 논옵셔널타입인 String형에는 항상 값이 저장되어야 하는데  
값이 없다는 nil을 넣어주니 당근 컴파일 에러남.

nil은 추론할 수 있는 형식이 없기 때문에 타입을 주지 않으면 당욘히 컴파일 에러가 뿜.  
<span style="color: red;">**옵셔널 타입을 nil로 초기화할 때는 반드시 타입을 지정해야 함!!!!!!!!!! 별표 땡땡!!**</span>

![3](https://user-images.githubusercontent.com/55340876/110229926-47952500-7f50-11eb-9b8d-cffb5865036e.png)

```swift
let str: String = "Swift"
let optionalStr: String? = nil  // 옵셔널 스트링이라고 읽음, nil 저장 삽파서블

let a: Int? = nil
let b = a // 요래하면 b의 자료형은 옵셔널Int? 가 된다!
b // nil (값이 저장되어 있지 않다는 의미)
```

표현식을 평가하면 위 코드의 결과는 **nil**임  
표현식을 평가한 결과가 옵셔널로 리턴이 되면 특별히 **옵셔널표현식** 이라고 함.

- 논옵셔널 타입은 항상 값을 가져야함.
- 옵셔널 타입은 값을 갖지 않아도 됨.
- 기존 타입뒤에 공백 없이 물음표를 붙이면 옵셔널 타입이 됨.

# 언래핑(Unwrapping)

옵셔널 타입은 특별한 방식으로 값을 저장함  
일단 지금은 걍 값이 랩으로 포장되어 있다 생각하삼.

실제로 저장된 값이 필요하다면 이 랩(포장지)을 벗겨야 하는데,  
이걸 <span style="color: blue;">**언래핑(Unwrapping), "값을 추출한다"**</span> 고 말함.

![4](https://user-images.githubusercontent.com/55340876/110229927-482dbb80-7f50-11eb-96fc-d5754be00a43.png)

# 강제 추출(Forced Unwrapping)

```swift
OptionalExpression!
```

문법은 핵단순!  
옵셔널 표현식 뒤에 `!` 를 붙이면 강제 추출임.

여기서 `!` 는 **강제추출 연산자**라고 함.

![5](https://user-images.githubusercontent.com/55340876/110229925-46fc8e80-7f50-11eb-9a50-75e628a68ebd.png)

만약 마지막 코드에서

```swift
num = nill
print(num!)
```

로 강제 언래핑을 하면?

![6](https://user-images.githubusercontent.com/55340876/110229924-45cb6180-7f50-11eb-8d33-0bce782459c6.png)

옵셔널 값을 언래핑하는 동안 예상치 못한 nil을 발견!! 심각한 에러!

값이 없는데 강제로 값을 꺼내서 에러남. (없던 값이 만들어지는 것도 아닌데!!!!)  
만약 앱에 포함된 코드라면 앱이 크래시가 나서 죽어버림..;

이처럼  
강제 추출(Forced Unwrapping) 시 주의할 점은?  
<span style="color: red;">**먼저 값이 저장되어 있는지 확인을 하고 강제 추출을 해줘야 함.**

```swift
if num != nil {
    print(num!)
}
```

이런식으로 if문을 이용해서 값 존재유무를 먼저 확인하고 강제추출하삼.

실제로 강제추출은 크래시 발생이 잦아지니까 자주 쓰지 마셈

- 옵셔널에 저장된 값을 사용하려면 반드시 값을 언래핑 해야함
- nil이 저장되어 있는 상태에서 강제추출하면 크래시가 발생함
- 옵셔널 표현식을 언래핑 하면 논옵셔널 타입으로 결과가 리턴됨
