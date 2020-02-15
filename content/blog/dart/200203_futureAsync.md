---
title: '📖 [Dart] future & async-await'
date: 2020-02-03 13:00:00
category: 'Dart'
draft: false 
showToc: true
---

<!-- Draft Post -->
<!-- Draft Post -->
<!-- Draft Post -->
<!-- Draft Post -->
<!-- Draft Post -->

# Async (비동기)  
인터넷이나 db에서 데이터를 가져올때(API)  
오래걸리니까 프로그램이 돌다 막히는걸 해결해주는 프로그래밍 방법  

>간단한 정의  
>줄임말 : sync(동기) / **Async(비동기)**  
>동기적 일처리 방식 : 순차적으로 일을 스스로 끝내 나가는 방식  
>**비동기적 일처리 방식 : 해야 할 일을 위임하고 기다리는 방식**  


Dart 언어는 프로그램 하나당 thread를 하나만 쓸 수 있음  
thread 를 일종의 파이프라고 생각하면 되는데,  
파이프 안에 작업이 한쪽으로 들어가서 다른 한쪽으로 나오는거야.  

문제는  
한쪽으로 들어가서 나올 때,   
작업시간이 있을 거 아냐?  
어떤 건 빨리 끝나고 어떤 건 오래 걸리고..  
오래 걸리는 작업이면 파이프 중간에서 막혀서 다른 일처리도 못하게 되니까  
그런걸 방지하기 위해서 Async 프로그램이 나온거야!  

Dart 언어에는 Async 프로그램을 사용하는 2가지 방법이 있어.  

- **future API 사용하는 방법**  
  - 예를 들어, 인터넷에 이미지를 다운로드 받는다고 해봐.   
 http 라이브러리를 사용해서 받을거야.  
 요청을 지금 했어!  
 요청을 하니까 그 라이브러리에서 나에게 future object를 줬는데 아직 열린 상태는 아니야.  
 완료가 되지 않은 상태인겨!!  
 그걸 일단 나는 한쪽에 두고 다른 작업을 일단 계속 처리를 해.  
 그러다 이미지 다운로드가 다 완료됬다고 신호가 와서 future object가 열려!  
 그럼 그 안에서 이미지 데이터가 딱 나오는데,  
 이 방법에는 경우의 수는 아래와 같지!  
 
 **1. 완료되지 않은 future object 상태**  
 **2. 완료 된 error나 data 상태**  
 
- **Async await 키워드를 사용하는 방법**  
  - 이게 나온 이유는,  
 나는 future object 작업이 완료될 때까지 기다렸다가 다음 작업을 하고싶은데?!!!  
 이거 먼저 하고 다음꺼 할거라고!!!  
 를 위해서 나온거야. 가릿??!  

>**여기서 중요한 점!!  
>비동기코드는 작업이 끝나기를 기다리는 동안 프로그램이 다른 작업을 완료하도록 한다.  
>Dart는 Future를 사용하여 비동기 작업의 결과를 나타낸다.  
>future로 작업하려면 async와 await 또는 Future API를 사용할 수 있다.**  
> - **다트 코드는 단일 thread 에서 실행**  
>- **thread를 차단하는 코드는 프로그램을 정지시킬 수 있음**  
 _(중간에 막히면 다른 작업도 못하고 프로그램이 멈추니까)_  
>- **future는 async코드의 결과를 나타냄. 처리 또는 입출력은 나중에 완료됨**  
 _(선물박스라고 생각해. 그 박스는 나중에 열려서 에러나 데이터가 나오니까)_  
>- **future가 완료될 때까지 실행을 일시 중단하려면 async 함수에서 await를 사용하면 됨**  
 _(future가 return 하는 함수가 있을때, 그 함수는 오래 걸리잖아? 근데 그 오랜 시간을 기다릴거냐,   아니면 다른 함수를 먼저 할거냐~ 이거지!)_  
>- **async 함수에서 try-catch를 사용해서 에러를 잡음**  

---  

# futures & async-await  
  
**아래 코드를 실행시 프로그램이 중간에 멈추는 것을 볼 수 있어!**  

```go
// Synchronous code
void printDailyNewsDigest() {
  var newsDigest = gatherNewsReports(); // Can take a while.
  print(newsDigest);
}

main() {
  printDailyNewsDigest();
  printWinningLotteryNumbers();
  printWeatherForecast();
  printBaseballScore();
}

...
```  

**이 프로그램은 오늘의 뉴스를 수집하고 보여준 다음, 여러가지 다른 항목들도 보여줘.**  

상단 코드를 한 번 쭉 보자.  
```var newsDigest = gatherNewsReports();```   
이 부분은 서버에서 뉴스 데이터를 가져오는 부분인데 이게 엄청 오래걸릴 수 있어!  
근데 지금 코드 상황은 특별히 async 프로그램을 쓰는 것도 아니고..  
그대로 기다렸다가 프린트 한다는 코드라고 보여지지?  
  
밑에 ```main(){}``` 부분 첫줄에는 ```printDailyNewsDigest();```가 있고,  
나머지 항목들도 쭉 나열되어 있는데  
여기서 문제점이 뭘까?!  
  
그래!   
다른 항목이 보여질라면 
위에 ```printDailyNewsDigest();``` 이 작업이 완료되서 보여질 때까지는   
아무것도 작업을 못한다는거야... 왓더......🤯  

그걸 방지하지 위해 async 프로그래밍을 배워보자규!!  

```go
import 'dart:async';

Future<void> printDailyNewsDigest() async { //2️⃣
  var newsDigest = await gatherNewsReports(); //4️⃣
  print(newsDigest); //5️⃣
}

main() { //0️⃣
  printDailyNewsDigest(); //1️⃣
  printWinningLotteryNumbers();
  printWeatherForecast();
  printBaseballScore();
}

printWinningLotteryNumbers() { //로또넘버
  print('Winning lotto numbers: [23, 63, 87, 26, 2]');
}

printWeatherForecast() { //날씨
  print("Tomorrow's forecast: 70F, sunny.");
}

printBaseballScore() { //야구점수
  print('Baseball score: Red Sox 10, Yankees 0');
}

const news = '<gathered news goes here>'; //이건 한줄짜리 뉴스지만 엄청 방대하다고 상상해봐!
const oneSecond = Duration(seconds: 1);

//이 기능이 더 복잡하고 느리다고 상상해봐. :)
Future<String> gatherNewsReports() => //3️⃣
    Future.delayed(oneSecond, () => news); //future 라이브러리를 사용해서 딜레이를 하는 부분. 1초동안 기다렸다가 뉴스를 리턴을 해라~ 이말이야!

```  
  
```Future<String> gatherNewsReports() =>```  = Future<나중에 받을 데이터 타입>  
  
**0️⃣ ~ 5️⃣ 순서를 차례대로 확인해봐!**  

### async-await 사용시 결과  

**future가 완성될 때까지 await!! 기다린 후에 완료되면 프린트를 해주는거지!**  

![1](https://user-images.githubusercontent.com/55340876/74588414-a2a36380-503f-11ea-818b-c9b59e22d331.gif)
  

### async-await 사용안했을 때 결과 & 차이  

**선물박스가 열리지 않은채로 프린트 되는게 보이지?!**  


![2](https://user-images.githubusercontent.com/55340876/74588417-a800ae00-503f-11ea-9d90-ac7b11db7e1d.gif)

---  
  

# async 함수에서 try-catch를 사용해서 에러 잡기  
  
만약에 에러 발생 확률이 있다면?!  
try-catch 블럭을 사용해서 에러를 잡는거지.  
  
```go
import 'dart:async';

Future<void> printDailyNewsDigest() async {
  try{
  var newsDigest = await gatherNewsReports();
  print(newsDigest);
  }catch(e){ //error object 가 e 로 전달됨
    print(e.toString()); //그 e를 사용해서 프린트하여 에러 메세지 확인
  }
}

...
```  

# async-await 키워드 말고 future API 자체 사용하기  

async-await 를 사용했을 때,  
오른쪽 하단 Documentation 부분 보면 ```newsDigest``` 가 String 으로 확인.  

<img width="770" alt="3" src="https://user-images.githubusercontent.com/55340876/74588419-aa630800-503f-11ea-8d5d-387fdfb198c0.png">

사용하지 않았을 때,  
```newsDigest``` 가 Future<String> 으로 확인.  

<img width="838" alt="4" src="https://user-images.githubusercontent.com/55340876/74588421-aafb9e80-503f-11ea-9c93-85df408a0001.png">
  
  
<img width="838" alt="5" src="https://user-images.githubusercontent.com/55340876/74588422-ab943500-503f-11ea-8526-48db8b2f9a7e.png">

```go
import 'dart:async';

Future<void> printDailyNewsDigest() {
  var newsDigest = gatherNewsReports();
  newsDigest.then((value) => { //future가 결과를 받았을때 value로 결과를 받아서
    print(value) //그 결과를 프린트
  });
  
}
  
...
```
 
future API 자체를 사용해도 결과는 동일해!  
  

![6](https://user-images.githubusercontent.com/55340876/74588423-ac2ccb80-503f-11ea-86f6-ea5b1afb2326.gif)
  
에러 잡을 때는,  

<img width="805" alt="7" src="https://user-images.githubusercontent.com/55340876/74588425-ad5df880-503f-11ea-8f93-43e68df99c94.png">


  
```go
import 'dart:async';

Future<void> printDailyNewsDigest() {
  var newsDigest = gatherNewsReports();
  newsDigest.then((value) => {
    print(value)
  });
  newsDigest.catchError((e) => {
    print(e)
  });
  
}
  
...
```

  
요론식으로 확인할 수도 있고!!  

async-await 는 콜백없이 차례차례 기다렸다 가지만,  
**then은 코드안에 갇혀있어서 저 value를 밖에서 접근하지 못해!  
차이점을 분명히 알고 사용하자!**  

---
---  

# Reference  
- [더코딩파파 유튜브](http://bit.ly/TheCodingPapa)
- [getinthere님의 블로그 (설명 베리나이스! 👍🏻)](https://blog.naver.com/getinthere/221663923222)
- [Dart 공식문서](https://dart.dev/)



