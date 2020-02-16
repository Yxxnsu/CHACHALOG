---
title: '💎 [Flutter] 퀴즈 / Dart 리스트, 조건부, 클래스'
date: 2020-02-16 17:47:00
category: 'Flutter'
draft: false
showToc: true
---

# Dart - List

리스트 = [] 이다.  
리스트 생성시에는 ``List<dataType>`` 꺽쇠 안에 데이터 타입을 꼭 명시해주어야 한다.

```go
void main() {
  
  List<String> myList = [
    '진주', //0번째 자리
    '희라', //1번째 자리
    '소연', //2번째 자리
    '효진', //3번째 자리
  ];
  
  print(myList[3]);
  
}
```

리스트 배열은 첫번째 = 0번째라고 보면 되니까 

이 때,  
``print(myList[3]);`` 에서 콘솔에 출력되는 것은  
3번째 자리의 ``효진`` 이다.  

<br/>

색인 방식으로 접근을 원한다면 이런식으로도 가능하다.  

```go
void main() {
  
  List<String> myList = [
    '진주', //0번째 자리
    '희라', //1번째 자리
    '소연', //2번째 자리
    '효진', //3번째 자리
  ];
  
//   print(myList[3]);
  
  print(myList.indexOf('희라'));
  
}
```

``print(myList.indexOf('희라'));``  출력시,   
콘솔에 출력되는 결과는 ``1`` 이다.

<br/>

리스트에 데이터를 또 추가하고 싶을 경우엔?  

```go
void main() {
  
  List<String> myList = [
    '진주', //0번째 자리
    '희라', //1번째 자리
    '소연', //2번째 자리
    '효진', //3번째 자리
  ];
  
//   print(myList[3]);
  
//   print(myList.indexOf('희라'));
  
  myList.add('보배');
  
  print(myList);
  
}
```

``.add`` 를 이용해서 추가하면 

<img width="678" alt="스크린샷 2020-02-16 오후 6 02 18" src="https://user-images.githubusercontent.com/55340876/74601914-873f6380-50e6-11ea-8d33-4f2c59c36640.png">

이런식으로 배열의 맨 뒤에 추가 된다.  

'오, 나는 항상 끝에 말고 내가 원하는 곳에 추가하고 싶은데?'  
라고 생각할 수도 있다.  

```go
void main() {
  
  List<String> myList = [
    '진주', //0번째 자리
    '희라', //1번째 자리
    '소연', //2번째 자리
    '효진', //3번째 자리
  ];
  
//   print(myList[3]);
  
//   print(myList.indexOf('희라'));
  
//   myList.add('보배');
  
  myList.insert(2, '보배');
  
  print(myList);
  
}
```

``myList.insert(2, '보배');`` 처럼,  

``.insert(원하는 자리, 요소)`` 를 써주면?

<img width="678" alt="스크린샷 2020-02-16 오후 6 07 05" src="https://user-images.githubusercontent.com/55340876/74601963-282e1e80-50e7-11ea-8d4e-a181acc0b4a0.png">

원하는 자리에 지정해준 데이터가 있고  
나머지는 순차적으로 뒤로 밀려난 것을 확인할 수 있다.  

항상 리스트는 0, 1, 2 ... 로 순서가 시작된다는 걸 기억해주자!

.first 로 맨 첫번째 요소를 불러오거나..  
.last 로 맨 마지막 요소를 불러오거나..  
.sort 메소드 등등...  

**[List (공식문서)](https://dart.dev/guides/libraries/library-tour#collections)** 통해서 더 많은 것을 알아볼 수 있다!  

<br/>

항상 공부를 할 때,   
공식문서를 통째로 외울 생각보다는 한 번 간단한 가이드나 요약본 같은 것을 훑고,  
나중에 내가 기능 구현시 필요로 할 때!  
그 때! 찾아보는 것이 더 머릿속에 잘 남는다.  
_(케바케겠지만?!)_  

![dog](https://user-images.githubusercontent.com/55340876/74602175-688e9c00-50e9-11ea-8f20-4604e279fe6e.gif)

확실히 나의 경우에는  
언어 문법만 딥하게 주구장창 파는 것보다는  
직접 기능구현하면서 코드칠 때  
오호라하.. 이건 이런 경우에 쓰이는 거였구나  
웜마? 이걸 이 때 쓰는거야?  
이렇게 머리에 들어오는 타입이라 이 말에 백배 공감한다.

<br/>
<br/>

---

<br/>

# 시간여행 ⏱ 

(코드짜다 실수했을때?! 시점변경하기)

과거의 코드로 돌아가고 싶거나,  
다시 돌아갔는데 또 열심히 쳤었던 그 코드로 가고싶다?!

![2020-02-16 18-31-12 2020-02-16 18_35_44](https://user-images.githubusercontent.com/55340876/74602380-2b2b0e00-50eb-11ea-8ce0-570738be20f9.gif)

VCS -> Local History -> Show History  
를 통해 시점 변경을 하고 진행을 하자!


<br/>
<br/>

---

<br/>

# 오타지적 👾

쭈글쭈글 밑줄이 가면서 오타지적을 할 때가 있다.  
안드로이드 스튜디오가 오타라고 생각하기 때문에!  
그럴 떄는 사전에 강제저장 해주자.

![2020-02-16 18-42-26 2020-02-16 18_42_55](https://user-images.githubusercontent.com/55340876/74602476-2ca90600-50ec-11ea-8574-2cc148be8bed.gif)



<br/>


---
---

# Reference  
- [Angela Yu 강의(유료)](https://www.udemy.com/course/flutter-bootcamp-with-dart/)

