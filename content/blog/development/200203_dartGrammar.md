---
title: '📝 [Dart] 기초 문법'
date: 2020-02-03 18:00:00
category: 'Dart'
draft: false 
---

<!-- Draft Post -->
<!-- Draft Post -->
<!-- Draft Post -->
<!-- Draft Post -->
<!-- Draft Post -->

![Dart이미지.png](https://images.velog.io/post-images/chajanee/85565de0-45d2-11ea-93aa-0d388aa42bd9/Dart.png)

# Dart 언어

**1. 유지보수가 쉬워.**  
 - 다른 언어에 비해 쉬움  
   
**2. 배우기가 쉬워.**  
 - loose and strong type  
 - syntax가 간결, 심플  
   
**3. 생산력을 증가시킬 수 있어.**  
  - 외쳐 갓구글!!!  
  - 방대한 라이브러리  
  - 쉽고 빨리 만들 수 있음  
    
**4. Reactive Programming (추후 설명)**  
  
---
# Hello World

**https://dartpad.dartlang.org/**  
**링크를 통해 심플 어플리케이션을 만들어 보자!**  
  

```go
void main() {
  print('Hello World');
}
```  


~~_지긋지긋한 'hello world' ...😫_~~
  
**상단 코드 블럭에 저거 자체를 메서드 라고 해.**  
그냥 일단 box라고 생각하자!  
  
    

>box가 빵을 만드는 기계라고 생각해봐.  
기계 입구에 밀가루를 넣으면 안에서 프로세스가 일어나고, 그걸 처리하고 나서  
바깥 출구로 나올 때는 빵으로 나오는겨!  
그걸 통틀어서 하나의 메서드라고 보면 됨.  
  

**```void``` = 출구  
```()``` = 입구  
```{}``` = 중괄호 안에 있는 바디는 처리하는 과정  
```main``` = 메서드의 이름 / 빵 기계 이름  
```print``` = 메서드**  
  
    
  

**main 이라는 메서드에서 print 라는 메서드를 사용한거야.**  
  


저 메서드는 받는 것도 없고 주는 것도 없이, 단지 처리만 하는겨.   
뭔 소린가 싶지?  
그냥 "화면에 헬로 월드만 보여줘" 이거야.  
  
    

![스크린샷 2020-01-31 오후 3.17.34.png](https://images.velog.io/post-images/chajanee/7c483df0-43f1-11ea-b36c-cbc9a8866a8e/-2020-01-31-3.17.34.png)  
  


우린 헬로 월드를 print 하는 어플리케이션을 만든 거야.   
축하해!!! 박수짝짝!!! 🙌🏻  
  
---  
  

# Variable / Type  
  


```go
void main() {
//   var name = 'jane'; //string
//   var year = 1992; //int
//   var sosujum = 1.8; //double
//   var arr = ['dohee', 'heela', 'soyeon', 'hyojin']; //List<String>
//   var arr3 = ['dohee', 1988, 'heela', 'soyeon', 'hyojin']; //List<Object>
//   var arr4 = [1, 2, 3, 4]; //List<int>
  
//상단 내용처럼 var을 써도 되지만 나중을 위해 하단처럼 직접 타입을 지정하면서 코드를 짜는게 좋아!
//var image = arr[1]; 😦이게 대체 뭔 타입으로 구성되 있는겨?
//int image = arr[1]; 😀이건 int 타입으로 구성되 있구만!
//요로코롬 힘들게 해당 arr[1] 코드를 직접 타고 올라가지 않아도 유추할 수 있는거지.
  String name = 'jane';
  int year = 1992;
  double sosujum = 1.8;
  List<String> arr = ['dohee', 'heela', 'soyeon', 'hyojin'];
  List<Object> arr3 = ['dohee', 1988, 'heela', 'soyeon', 'hyojin'];
  List<int> arr4 = [1, 2, 3, 4];
  
  
  List<String> arr2 = ['dohee', 'heela', 'soyeon', 'hyojin']; //타입을 int로 하면 당연히 오류나!
  
  var image = { //Map<String, Object>
    'tags': ['BTS'], //Key: Value
    'url': '//path/to/BTS.jpg'
  };
  
  print(image['tags']);
  print(image['url']);
  print(arr3[1]);
  
}

```  
  



Dart 에서는 타입을 추론해줘서 var 로 변수 선언을 해줘도 되지만,  
왠만하면 나중을 위해 직접 타입을 붙여서 선언해주는게 좋아.  
공식 문서에서도 그걸 권하고 있고!!!  

  


![스크린샷 2020-01-31 오후 4.02.35.png](https://images.velog.io/post-images/chajanee/b09c2e30-43f7-11ea-b36c-cbc9a8866a8e/-2020-01-31-4.02.35.png)  

  


---  
  
  
# if문  
  
```go
void main() {
  
  int age = -1;
  
  if (age >= 20){ //20세보다 크거나 같으면
    print('할맥가서 진로 고고?!');
  }else if (age <20 && age >=0){ //&& = 그리고 , 0세 ~ 19세 까지는 좀 더 크고 와라!
    print('좀 더 크고 와라.');
  }else{ //위의 2개 조건에 충족하지 않았다면
    print('태어나지도 않았잖아 임마!');
  }
  
}

```  
  




![2020-01-31 16-26-58.2020-01-31 16_28_02.gif](https://images.velog.io/post-images/chajanee/d4f1cc50-43fb-11ea-b810-2911e7b2d205/2020-01-31-16-26-58.2020-01-31-162802.gif)  
  



---  
  



# for문 / while문  
  



```go
void main() {
  
  List<String> boyfriends = ['김태형', '남주혁', '안효섭', '강하늘'];
  
  for (String boy in boyfriends){ //for = ~동안 , 리스트 안에 있는 값들을 하나씩 다 거칠동안 한번씩 실행을 해. '김태형' 을 boy 에 넣어서 실행.. '남주혁' 을 boy 에 넣어서 실행...
    print(boy);
  }
  
  for (int i=0; i<4; i++){ //i가 4보다 작으면 한번 프린트 실행후 (처음 i=0이야! 김태형이 실행되겠지?), i에 1을 더해줘. 그럼 i가 1이 되고 4보다 작으면 실행후(남주혁이 실행되겠지?), i에 또 1을 더해줘. 그럼 i가 2가 되고.... 조건이 false가 될때까지 실행하지!
    print(boyfriends[i]);
  }
  
  for (int i=0; i<boyfriends.length; i++){ //리스트 안에 요소가 수천개면 일일이 숫자 쓸거야?! i<boyfriends.length 쓰면 그 길이보다 작을 때까지 도는거지!
    print(boyfriends[i]);
  }
  
  print('---------밑에서부터는 while문---------');
  
  int index = 0;
  
  while (index<boyfriends.length){
    print(boyfriends[index]);
    index++; //이걸 안걸어주면 index 값은 항상 0이라서 조건이 항상 true가 되고 무한루프 돌고 프로그램 렉먹는거지 뭐!
  }
  
}

```  
  




![스크린샷 2020-01-31 오후 4.50.50.png](https://images.velog.io/post-images/chajanee/93753e30-43fe-11ea-bf48-132c597e805c/-2020-01-31-4.50.50.png)  

  



**▽ NO주석 깨르꼼 버전 캡쳐**  

![스크린샷 2020-01-31 오후 4.53.19.png](https://images.velog.io/post-images/chajanee/d2688200-43fe-11ea-8474-035c8def1488/-2020-01-31-4.53.19.png)  
  



**while 문에서 주의 할 점은**  
조건이 true.  
그니까 **조건이 충족되면 계속 무한루프 도니까 브레이크를 꼭 걸어줘야해.**  
어떻게 보면 for문에 비해 컨트롤 해줄게 많은거라 항상 책임감을 갖고 코드를 짜야해!  
_무한루프 돌다 다운되면 내 잘못이니까..._ 🥺  
  


---  
  


 
# 함수  
  


```go
void main() {
  
  List<String> boyfriends = ['김태형', '남주혁', '안효섭', '강하늘'];

  int index = 0;
  
  while (index<boyfriends.length){
    print(makeStory(boyfriends[index])); //1️⃣index에 맞는 스트링(김태형)을 가져와서 makeStory로 가져가. //5️⃣여기로! 리턴후 프린트!
    index++;
  }
  
//위에가 복잡하다면 하단처럼 해도 결과는 똑같아! 나는 뭔가 상단 방법이 심플한듯..  
//   while (index<boyfriends.length){
//     String finalStory = makeStory(boyfriends[index]);
//     print(finalStory);
//     index++;
//   }
  
}

String makeStory(String name){ //2️⃣갖고온 스트링(김태형)을 name 변수에 넘겨주고
  String result = 'I have eat dinner with $name'; //3️⃣그 name을 문장과 합쳐주고, result 변수에 대입해!
  return result; //4️⃣그 후, return!! 되돌려주는거야. 어디로?
}

```   
  



![스크린샷 2020-01-31 오후 5.22.59.png](https://images.velog.io/post-images/chajanee/f9ba4920-4402-11ea-b16d-e5da2b453a11/-2020-01-31-5.22.59.png)  
  



**▽ NO주석 깨르꼼 버전 캡쳐**  


![스크린샷 2020-01-31 오후 5.25.16.png](https://images.velog.io/post-images/chajanee/3f1b5d10-4403-11ea-b16d-e5da2b453a11/-2020-01-31-5.25.16.png)  

  



## arrow function (화살표 함수)  
  


그런데 여기서 만약 return 값을 한줄로 바꿔준다면?!  
  

```go
String makeStory(String name){
  return 'I have eat dinner with $name';
}

```  

이런식으로 한 줄로 표현할 수도 있는데~  
한 줄일 경우,  

  


```go
String makeStoryShort(String name) => 'I have eat dinner with $name';
```  
  


이렇게 화살표 함수를 이용해서 줄여줄 수도 있어!  
(*makeStoryShort 로 함수명을 좀 바꿔줄게!*)  

결과는 똑같아!  

  


```go
void main() {
  
  List<String> boyfriends = ['김태형', '남주혁', '안효섭', '강하늘'];

  int index = 0;
  
  while (index<boyfriends.length){
    print(makeStoryShort(boyfriends[index]));
    index++;
  }

  
}

String makeStory(String name){
  return 'I have eat dinner with $name';
}

String makeStoryShort(String name) => 'I have eat dinner with $name';

```  

  


![스크린샷 2020-01-31 오후 5.31.33.png](https://images.velog.io/post-images/chajanee/1bc49f10-4404-11ea-84ce-477f267258e7/-2020-01-31-5.31.33.png)  

  

---  
---  
## Reference  
 - [더코딩파파 유튜브](http://bit.ly/TheCodingPapa)  

