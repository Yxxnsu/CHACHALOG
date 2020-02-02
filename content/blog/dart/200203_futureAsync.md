---
title: '📝 [Dart] future & async-await'
date: 2020-02-03 13:00:00
category: 'Dart'
draft: false 
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

---
## 비동기 처리란?

여러분이 요리사라고 가정하자. 요리사는 지금 라면을 끓여야 하고 샐러드를 만들어야 한다.  

![스크린샷 2020-02-03 오전 3.27.51.png](https://images.velog.io/post-images/chajanee/c81ef530-45e9-11ea-865c-6f8c9ded9131/-2020-02-03-3.27.51.png)

(1) 요리사는 냄비에 물을 붙는다.

(2) 냄비를 가스렌지에 올린다.

(3) 가스렌지에 불을 켠다.

(4) 물이 끓을 때 까지 기다린다.     **- wait**

(5) 물이 끓으면 라면과 스프를 넣는다.

(6) 라면이 익을때까지 기다린다.   **- wait**

(7) 라면이 익으면 그릇에 담는다.

(8) 샐러드를 칼로 썬다.

(9) 드레싱을 만든다.

(10) 샐러드에 드레싱을 뿌린다. 

​

위에 음식 만드는 알고리즘을 보면 wait time이 두 번있다.   
첫 번째는 물이 끓을 때까지 기다리는 것이고, 두 번째는 라면이 익을 때까지 기다리는 것이다.   
두번의 기다림은 요리사가 멍때리는 시간을 만들어준다.   
하지만 요리사는 지금 빨리 요리를 하고 집에 가서 아이들과 놀아줘야 한다.   
그렇다면 요리사는 어떻게 해야 할까?  


(1) 요리사는 냄비에 물을 붙는다.

(2) 냄비를 가스렌지에 올린다.

(3) 가스렌지에 불을 켠다.

(4) 물이 끓을 때 까지 샐러드를 칼로 썬다. 

(5) 물이 끓으면 라면과 스프를 넣는다.

(6) 라면이 익을때까지 드레싱을 만든다.

(7) 라면이 익으면 그릇에 담는다.

(8) 샐러드에 드레싱을 뿌린다. 

​

위와 같이 알고리즘을 변경하면 wait time이 사라진다.   
이렇게 wait time을 사라지게 하려면 물이 다 끓었다는 것을 알아챌 수 있는 알람,   
라면이 다 익었다는 것을 알아챌 수 있는 알람이 필요하다. 

이 알람을 만드는 방법이 바로 리스너를 만드는 것이다.   
프로그래밍에서 **리스너**는 어떤 이벤트가 발생하는 것을 지켜보는 녀석이다.   
그리고 리스너는 이벤트가 발생하면 이벤트 핸들러를 호출한다.   
**이벤트 핸들러**는 이벤트 발생시에 어떤 일을 할지를 정해두는 메소드이다.  

​

일에는 순서가 있다. 순서대로 처리하는 것을 **동기화**라고 한다.   
하지만 위와 같이 요리사가 일의 효율을 위해 순서대로 일을 하지 않는 행위를 비동기라고 한다.

​

그렇다면 비동기는 일을 순서대로 하지 않는다는 뜻이다. 일을 순서대로 하지 않으면 일이 꼬일 수 가 있다.   
가령 샐러드를 만들고 있는데 물이 다 끓었다는 알람이 왔는데도 라면을 넣지 않아서 물이 쫄아 버릴수가 있다.   
이렇게 일을 순서대로 하지 않으면서도 일이 꼬이지 않게 잘 처리하게 하면 이것을 **비동기 처리**라고 한다.



---

## Future API

Flutter에는 Future API가 있다. Future API란 미래의 완료된 데이터를 위한 API이다.

예를 들어 보자.   
홍길동과 임꺽정이 있다. 홍길동은 임꺽정에게 아이스크림 10개를 선물하려고 한다.   
임꺽정은 아이스크림을 받기 위해 냉장고를 구입했다.   
홍길동은 임꺽정에게 초능력을 써서 아이스크림을 10개를 냉장고로 바로 보낼테니 확인해보라고 한다.

![스크린샷 2020-02-03 오전 3.36.38.png](https://images.velog.io/post-images/chajanee/073a8c10-45eb-11ea-bb5d-d514de8756b9/-2020-02-03-3.36.38.png)
​

임꺽정은 냉장고를 열었는데 아직 아이스크림이 하나도 없었다. 그래서 아이스크림을 먹지 못했다.   
10분을 냉장고만 바라보면서 계속 기다리면서 아이스크림이 언제오나 확인한다. 그런데 계속 오지 않았다.   
1시간을 그냥 멍때리면서 기다리게 되었다. 내일 학교 시험이 있는데도 말이다.

​

통신을 통해 들어오는 데이터는 여러가지 상황을 고려해야 하는데,   
하드디스크가 꽉찼다거나 통신이 지연된다거나 하는 여러가지 일 때문에   
데이터를 지금 받는다고 해도 그 데이터가 지연되어 들어올 수 있다. 마치 아이스크림처럼!!

​

그래서 임꺽정은 아이스크림이 도착하는 것을 지켜보지 않고 냉장고를 Future 데이터로 지정한다.   
Future API는 지금은 데이터가 없을지라도 나중에는 데이터가 들어오겠지라고 가정하게 해주는 API이다.   
그래서 기다리지 않고 다음 동작을 수행할 수 있다.

​

이렇게 되면 Future API는 아이스크림이 10개가 도착하면 나중에 나에게 아이스크림이 10개 도착했어요 라고   
알려주는 로직만 구현하면(Promise) 임꺽정은 그 시간동안 시험공부를 할 수 있다.

​

아이스크림이 10개가 도착하지 않았지만 대기하지 않고 시험공부를 할 수 있게 해주는 것이 Future API이다.

​

아이스크림이 도착하면 아이스크림을 먹어야 해요라고 정해주는 것은 async의 await 키워드이다.   
await 키워드를 사용하지 않으면 냉장고에 아이스크림이 도착하지 않았는데도 아이스크림을 먹으려는 맹구 같은 짓을 하게 된다.  
이때 await 키워드를 이용하면 맹구짓을 하지 않게 된다.

---

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

## futures & async-await  
  
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

![2020-02-01 18-29-29.2020-02-01 18_30_43.gif](https://images.velog.io/post-images/chajanee/2e744290-44d7-11ea-bd20-ddf309fe25c2/2020-02-01-18-29-29.2020-02-01-183043.gif)
  

### async-await 사용안했을 때 결과 & 차이  

**선물박스가 열리지 않은채로 프린트 되는게 보이지?!**  


![2020-02-01 18-31-19.2020-02-01 18_32_44.gif](https://images.velog.io/post-images/chajanee/67abc830-44d7-11ea-9d92-fbf2d8966dbd/2020-02-01-18-31-19.2020-02-01-183244.gif)

---  
  

## async 함수에서 try-catch를 사용해서 에러 잡기  
  
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

## async-await 키워드 말고 future API 자체 사용하기  

async-await 를 사용했을 때,  
오른쪽 하단 Documentation 부분 보면 ```newsDigest``` 가 String 으로 확인.  

![스크린샷 2020-02-01 오후 6.57.00.png](https://images.velog.io/post-images/chajanee/5948b2b0-44d9-11ea-9761-557166a452d3/-2020-02-01-6.57.00.png)

사용하지 않았을 때,  
```newsDigest``` 가 Future<String> 으로 확인.  

![스크린샷 2020-02-01 오후 6.57.16.png](https://images.velog.io/post-images/chajanee/7d6b7dd0-44d9-11ea-bd20-ddf309fe25c2/-2020-02-01-6.57.16.png)
  
  

![스크린샷 2020-02-01 오후 7.00.28.png](https://images.velog.io/post-images/chajanee/40cf2ce0-44da-11ea-bb25-dbd7bb4c3554/-2020-02-01-7.00.28.png)

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
  

![2020-02-01 19-05-35.2020-02-01 19_06_27.gif](https://images.velog.io/post-images/chajanee/8847fd40-44da-11ea-a3e0-6744aa038817/2020-02-01-19-05-35.2020-02-01-190627.gif)
  
에러 잡을 때는,  

![스크린샷 2020-02-01 오후 7.08.54.png](https://images.velog.io/post-images/chajanee/f2da1800-44da-11ea-bb25-dbd7bb4c3554/-2020-02-01-7.08.54.png)
  
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

## Reference  
- [더코딩파파 유튜브](http://bit.ly/TheCodingPapa)
- [getinthere님의블로그](https://blog.naver.com/getinthere)



