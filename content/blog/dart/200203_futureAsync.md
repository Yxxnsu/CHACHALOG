---
title: '๐ [Dart] future & async-await'
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

# Async (๋น๋๊ธฐ)  
์ธํฐ๋ท์ด๋ db์์ ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ์ฌ๋(API)  
์ค๋๊ฑธ๋ฆฌ๋๊น ํ๋ก๊ทธ๋จ์ด ๋๋ค ๋งํ๋๊ฑธ ํด๊ฒฐํด์ฃผ๋ ํ๋ก๊ทธ๋๋ฐ ๋ฐฉ๋ฒ  

>๊ฐ๋จํ ์ ์  
>์ค์๋ง : sync(๋๊ธฐ) / **Async(๋น๋๊ธฐ)**  
>๋๊ธฐ์  ์ผ์ฒ๋ฆฌ ๋ฐฉ์ : ์์ฐจ์ ์ผ๋ก ์ผ์ ์ค์ค๋ก ๋๋ด ๋๊ฐ๋ ๋ฐฉ์  
>**๋น๋๊ธฐ์  ์ผ์ฒ๋ฆฌ ๋ฐฉ์ : ํด์ผ ํ  ์ผ์ ์์ํ๊ณ  ๊ธฐ๋ค๋ฆฌ๋ ๋ฐฉ์**  


Dart ์ธ์ด๋ ํ๋ก๊ทธ๋จ ํ๋๋น thread๋ฅผ ํ๋๋ง ์ธ ์ ์์  
thread ๋ฅผ ์ผ์ข์ ํ์ดํ๋ผ๊ณ  ์๊ฐํ๋ฉด ๋๋๋ฐ,  
ํ์ดํ ์์ ์์์ด ํ์ชฝ์ผ๋ก ๋ค์ด๊ฐ์ ๋ค๋ฅธ ํ์ชฝ์ผ๋ก ๋์ค๋๊ฑฐ์ผ.  

๋ฌธ์ ๋  
ํ์ชฝ์ผ๋ก ๋ค์ด๊ฐ์ ๋์ฌ ๋,   
์์์๊ฐ์ด ์์ ๊ฑฐ ์๋?  
์ด๋ค ๊ฑด ๋นจ๋ฆฌ ๋๋๊ณ  ์ด๋ค ๊ฑด ์ค๋ ๊ฑธ๋ฆฌ๊ณ ..  
์ค๋ ๊ฑธ๋ฆฌ๋ ์์์ด๋ฉด ํ์ดํ ์ค๊ฐ์์ ๋งํ์ ๋ค๋ฅธ ์ผ์ฒ๋ฆฌ๋ ๋ชปํ๊ฒ ๋๋๊น  
๊ทธ๋ฐ๊ฑธ ๋ฐฉ์งํ๊ธฐ ์ํด์ Async ํ๋ก๊ทธ๋จ์ด ๋์จ๊ฑฐ์ผ!  

Dart ์ธ์ด์๋ Async ํ๋ก๊ทธ๋จ์ ์ฌ์ฉํ๋ 2๊ฐ์ง ๋ฐฉ๋ฒ์ด ์์ด.  

- **future API ์ฌ์ฉํ๋ ๋ฐฉ๋ฒ**  
  - ์๋ฅผ ๋ค์ด, ์ธํฐ๋ท์ ์ด๋ฏธ์ง๋ฅผ ๋ค์ด๋ก๋ ๋ฐ๋๋ค๊ณ  ํด๋ด.   
 http ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ์ฌ์ฉํด์ ๋ฐ์๊ฑฐ์ผ.  
 ์์ฒญ์ ์ง๊ธ ํ์ด!  
 ์์ฒญ์ ํ๋๊น ๊ทธ ๋ผ์ด๋ธ๋ฌ๋ฆฌ์์ ๋์๊ฒ future object๋ฅผ ์คฌ๋๋ฐ ์์ง ์ด๋ฆฐ ์ํ๋ ์๋์ผ.  
 ์๋ฃ๊ฐ ๋์ง ์์ ์ํ์ธ๊ฒจ!!  
 ๊ทธ๊ฑธ ์ผ๋จ ๋๋ ํ์ชฝ์ ๋๊ณ  ๋ค๋ฅธ ์์์ ์ผ๋จ ๊ณ์ ์ฒ๋ฆฌ๋ฅผ ํด.  
 ๊ทธ๋ฌ๋ค ์ด๋ฏธ์ง ๋ค์ด๋ก๋๊ฐ ๋ค ์๋ฃ๋ฌ๋ค๊ณ  ์ ํธ๊ฐ ์์ future object๊ฐ ์ด๋ ค!  
 ๊ทธ๋ผ ๊ทธ ์์์ ์ด๋ฏธ์ง ๋ฐ์ดํฐ๊ฐ ๋ฑ ๋์ค๋๋ฐ,  
 ์ด ๋ฐฉ๋ฒ์๋ ๊ฒฝ์ฐ์ ์๋ ์๋์ ๊ฐ์ง!  
 
 **1. ์๋ฃ๋์ง ์์ future object ์ํ**  
 **2. ์๋ฃ ๋ error๋ data ์ํ**  
 
- **Async await ํค์๋๋ฅผ ์ฌ์ฉํ๋ ๋ฐฉ๋ฒ**  
  - ์ด๊ฒ ๋์จ ์ด์ ๋,  
 ๋๋ future object ์์์ด ์๋ฃ๋  ๋๊น์ง ๊ธฐ๋ค๋ ธ๋ค๊ฐ ๋ค์ ์์์ ํ๊ณ ์ถ์๋ฐ?!!!  
 ์ด๊ฑฐ ๋จผ์  ํ๊ณ  ๋ค์๊บผ ํ ๊ฑฐ๋ผ๊ณ !!!  
 ๋ฅผ ์ํด์ ๋์จ๊ฑฐ์ผ. ๊ฐ๋ฆฟ??!  

>**์ฌ๊ธฐ์ ์ค์ํ ์ !!  
>๋น๋๊ธฐ์ฝ๋๋ ์์์ด ๋๋๊ธฐ๋ฅผ ๊ธฐ๋ค๋ฆฌ๋ ๋์ ํ๋ก๊ทธ๋จ์ด ๋ค๋ฅธ ์์์ ์๋ฃํ๋๋ก ํ๋ค.  
>Dart๋ Future๋ฅผ ์ฌ์ฉํ์ฌ ๋น๋๊ธฐ ์์์ ๊ฒฐ๊ณผ๋ฅผ ๋ํ๋ธ๋ค.  
>future๋ก ์์ํ๋ ค๋ฉด async์ await ๋๋ Future API๋ฅผ ์ฌ์ฉํ  ์ ์๋ค.**  
> - **๋คํธ ์ฝ๋๋ ๋จ์ผ thread ์์ ์คํ**  
>- **thread๋ฅผ ์ฐจ๋จํ๋ ์ฝ๋๋ ํ๋ก๊ทธ๋จ์ ์ ์ง์ํฌ ์ ์์**  
 _(์ค๊ฐ์ ๋งํ๋ฉด ๋ค๋ฅธ ์์๋ ๋ชปํ๊ณ  ํ๋ก๊ทธ๋จ์ด ๋ฉ์ถ๋๊น)_  
>- **future๋ async์ฝ๋์ ๊ฒฐ๊ณผ๋ฅผ ๋ํ๋. ์ฒ๋ฆฌ ๋๋ ์์ถ๋ ฅ์ ๋์ค์ ์๋ฃ๋จ**  
 _(์ ๋ฌผ๋ฐ์ค๋ผ๊ณ  ์๊ฐํด. ๊ทธ ๋ฐ์ค๋ ๋์ค์ ์ด๋ ค์ ์๋ฌ๋ ๋ฐ์ดํฐ๊ฐ ๋์ค๋๊น)_  
>- **future๊ฐ ์๋ฃ๋  ๋๊น์ง ์คํ์ ์ผ์ ์ค๋จํ๋ ค๋ฉด async ํจ์์์ await๋ฅผ ์ฌ์ฉํ๋ฉด ๋จ**  
 _(future๊ฐ return ํ๋ ํจ์๊ฐ ์์๋, ๊ทธ ํจ์๋ ์ค๋ ๊ฑธ๋ฆฌ์์? ๊ทผ๋ฐ ๊ทธ ์ค๋ ์๊ฐ์ ๊ธฐ๋ค๋ฆด๊ฑฐ๋,   ์๋๋ฉด ๋ค๋ฅธ ํจ์๋ฅผ ๋จผ์  ํ ๊ฑฐ๋~ ์ด๊ฑฐ์ง!)_  
>- **async ํจ์์์ try-catch๋ฅผ ์ฌ์ฉํด์ ์๋ฌ๋ฅผ ์ก์**  

---  

# futures & async-await  
  
**์๋ ์ฝ๋๋ฅผ ์คํ์ ํ๋ก๊ทธ๋จ์ด ์ค๊ฐ์ ๋ฉ์ถ๋ ๊ฒ์ ๋ณผ ์ ์์ด!**  

```dart
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

**์ด ํ๋ก๊ทธ๋จ์ ์ค๋์ ๋ด์ค๋ฅผ ์์งํ๊ณ  ๋ณด์ฌ์ค ๋ค์, ์ฌ๋ฌ๊ฐ์ง ๋ค๋ฅธ ํญ๋ชฉ๋ค๋ ๋ณด์ฌ์ค.**  

์๋จ ์ฝ๋๋ฅผ ํ ๋ฒ ์ญ ๋ณด์.  
```var newsDigest = gatherNewsReports();```   
์ด ๋ถ๋ถ์ ์๋ฒ์์ ๋ด์ค ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ์ค๋ ๋ถ๋ถ์ธ๋ฐ ์ด๊ฒ ์์ฒญ ์ค๋๊ฑธ๋ฆด ์ ์์ด!  
๊ทผ๋ฐ ์ง๊ธ ์ฝ๋ ์ํฉ์ ํน๋ณํ async ํ๋ก๊ทธ๋จ์ ์ฐ๋ ๊ฒ๋ ์๋๊ณ ..  
๊ทธ๋๋ก ๊ธฐ๋ค๋ ธ๋ค๊ฐ ํ๋ฆฐํธ ํ๋ค๋ ์ฝ๋๋ผ๊ณ  ๋ณด์ฌ์ง์ง?  
  
๋ฐ์ ```main(){}``` ๋ถ๋ถ ์ฒซ์ค์๋ ```printDailyNewsDigest();```๊ฐ ์๊ณ ,  
๋๋จธ์ง ํญ๋ชฉ๋ค๋ ์ญ ๋์ด๋์ด ์๋๋ฐ  
์ฌ๊ธฐ์ ๋ฌธ์ ์ ์ด ๋ญ๊น?!  
  
๊ทธ๋!   
๋ค๋ฅธ ํญ๋ชฉ์ด ๋ณด์ฌ์ง๋ผ๋ฉด 
์์ ```printDailyNewsDigest();``` ์ด ์์์ด ์๋ฃ๋์ ๋ณด์ฌ์ง ๋๊น์ง๋   
์๋ฌด๊ฒ๋ ์์์ ๋ชปํ๋ค๋๊ฑฐ์ผ... ์๋......๐คฏ  

๊ทธ๊ฑธ ๋ฐฉ์งํ์ง ์ํด async ํ๋ก๊ทธ๋๋ฐ์ ๋ฐฐ์๋ณด์๊ท!!  

```dart
import 'dart:async';

Future<void> printDailyNewsDigest() async { //2๏ธโฃ
  var newsDigest = await gatherNewsReports(); //4๏ธโฃ
  print(newsDigest); //5๏ธโฃ
}

main() { //0๏ธโฃ
  printDailyNewsDigest(); //1๏ธโฃ
  printWinningLotteryNumbers();
  printWeatherForecast();
  printBaseballScore();
}

printWinningLotteryNumbers() { //๋ก๋๋๋ฒ
  print('Winning lotto numbers: [23, 63, 87, 26, 2]');
}

printWeatherForecast() { //๋ ์จ
  print("Tomorrow's forecast: 70F, sunny.");
}

printBaseballScore() { //์ผ๊ตฌ์ ์
  print('Baseball score: Red Sox 10, Yankees 0');
}

const news = '<gathered news goes here>'; //์ด๊ฑด ํ์ค์ง๋ฆฌ ๋ด์ค์ง๋ง ์์ฒญ ๋ฐฉ๋ํ๋ค๊ณ  ์์ํด๋ด!
const oneSecond = Duration(seconds: 1);

//์ด ๊ธฐ๋ฅ์ด ๋ ๋ณต์กํ๊ณ  ๋๋ฆฌ๋ค๊ณ  ์์ํด๋ด. :)
Future<String> gatherNewsReports() => //3๏ธโฃ
    Future.delayed(oneSecond, () => news); //future ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ์ฌ์ฉํด์ ๋๋ ์ด๋ฅผ ํ๋ ๋ถ๋ถ. 1์ด๋์ ๊ธฐ๋ค๋ ธ๋ค๊ฐ ๋ด์ค๋ฅผ ๋ฆฌํด์ ํด๋ผ~ ์ด๋ง์ด์ผ!

```  
  
```Future<String> gatherNewsReports() =>```  = Future<๋์ค์ ๋ฐ์ ๋ฐ์ดํฐ ํ์>  
  
**0๏ธโฃ ~ 5๏ธโฃ ์์๋ฅผ ์ฐจ๋ก๋๋ก ํ์ธํด๋ด!**  

### async-await ์ฌ์ฉ์ ๊ฒฐ๊ณผ  

**future๊ฐ ์์ฑ๋  ๋๊น์ง await!! ๊ธฐ๋ค๋ฆฐ ํ์ ์๋ฃ๋๋ฉด ํ๋ฆฐํธ๋ฅผ ํด์ฃผ๋๊ฑฐ์ง!**  

![1](https://user-images.githubusercontent.com/55340876/74588414-a2a36380-503f-11ea-818b-c9b59e22d331.gif)
  

### async-await ์ฌ์ฉ์ํ์ ๋ ๊ฒฐ๊ณผ & ์ฐจ์ด  

**์ ๋ฌผ๋ฐ์ค๊ฐ ์ด๋ฆฌ์ง ์์์ฑ๋ก ํ๋ฆฐํธ ๋๋๊ฒ ๋ณด์ด์ง?!**  


![2](https://user-images.githubusercontent.com/55340876/74588417-a800ae00-503f-11ea-9d90-ac7b11db7e1d.gif)

---  
  

# async ํจ์์์ try-catch๋ฅผ ์ฌ์ฉํด์ ์๋ฌ ์ก๊ธฐ  
  
๋ง์ฝ์ ์๋ฌ ๋ฐ์ ํ๋ฅ ์ด ์๋ค๋ฉด?!  
try-catch ๋ธ๋ญ์ ์ฌ์ฉํด์ ์๋ฌ๋ฅผ ์ก๋๊ฑฐ์ง.  
  
```dart
import 'dart:async';

Future<void> printDailyNewsDigest() async {
  try{
  var newsDigest = await gatherNewsReports();
  print(newsDigest);
  }catch(e){ //error object ๊ฐ e ๋ก ์ ๋ฌ๋จ
    print(e.toString()); //๊ทธ e๋ฅผ ์ฌ์ฉํด์ ํ๋ฆฐํธํ์ฌ ์๋ฌ ๋ฉ์ธ์ง ํ์ธ
  }
}

...
```  

# async-await ํค์๋ ๋ง๊ณ  future API ์์ฒด ์ฌ์ฉํ๊ธฐ  

async-await ๋ฅผ ์ฌ์ฉํ์ ๋,  
์ค๋ฅธ์ชฝ ํ๋จ Documentation ๋ถ๋ถ ๋ณด๋ฉด ```newsDigest``` ๊ฐ String ์ผ๋ก ํ์ธ.  

<img width="770" alt="3" src="https://user-images.githubusercontent.com/55340876/74588419-aa630800-503f-11ea-8d5d-387fdfb198c0.png">

์ฌ์ฉํ์ง ์์์ ๋,  
```newsDigest``` ๊ฐ Future<String> ์ผ๋ก ํ์ธ.  

<img width="838" alt="4" src="https://user-images.githubusercontent.com/55340876/74588421-aafb9e80-503f-11ea-9c93-85df408a0001.png">
  
  
<img width="838" alt="5" src="https://user-images.githubusercontent.com/55340876/74588422-ab943500-503f-11ea-8526-48db8b2f9a7e.png">

```dart
import 'dart:async';

Future<void> printDailyNewsDigest() {
  var newsDigest = gatherNewsReports();
  newsDigest.then((value) => { //future๊ฐ ๊ฒฐ๊ณผ๋ฅผ ๋ฐ์์๋ value๋ก ๊ฒฐ๊ณผ๋ฅผ ๋ฐ์์
    print(value) //๊ทธ ๊ฒฐ๊ณผ๋ฅผ ํ๋ฆฐํธ
  });
  
}
  
...
```
 
future API ์์ฒด๋ฅผ ์ฌ์ฉํด๋ ๊ฒฐ๊ณผ๋ ๋์ผํด!  
  

![6](https://user-images.githubusercontent.com/55340876/74588423-ac2ccb80-503f-11ea-86f6-ea5b1afb2326.gif)
  
์๋ฌ ์ก์ ๋๋,  

<img width="805" alt="7" src="https://user-images.githubusercontent.com/55340876/74588425-ad5df880-503f-11ea-8f93-43e68df99c94.png">


  
```dart
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

  
์๋ก ์์ผ๋ก ํ์ธํ  ์๋ ์๊ณ !!  

async-await ๋ ์ฝ๋ฐฑ์์ด ์ฐจ๋ก์ฐจ๋ก ๊ธฐ๋ค๋ ธ๋ค ๊ฐ์ง๋ง,  
**then์ ์ฝ๋์์ ๊ฐํ์์ด์ ์  value๋ฅผ ๋ฐ์์ ์ ๊ทผํ์ง ๋ชปํด!  
์ฐจ์ด์ ์ ๋ถ๋ชํ ์๊ณ  ์ฌ์ฉํ์!**  

---
---  

# Reference  
- [๋์ฝ๋ฉํํ ์ ํ๋ธ](http://bit.ly/TheCodingPapa)
- [getinthere๋์ ๋ธ๋ก๊ทธ (์ค๋ช ๋ฒ ๋ฆฌ๋์ด์ค! ๐๐ป)](https://blog.naver.com/getinthere/221663923222)
- [Dart ๊ณต์๋ฌธ์](https://dart.dev/)
- [Futures (๊ณต์์ ํ๋ธ)](https://www.youtube.com/watch?v=OTS-ap9_aXc)
- [Async/Await (๊ณต์์ ํ๋ธ)](https://www.youtube.com/watch?v=SmTCmDMi4BY)


