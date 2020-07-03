---
title: '🚥 [etc] 콜백 / 동기와 비동기'
date: 2020-05-10 00:20:00
category: 'etc'
draft: false
showToc: true
---



# 콜백 함수란?

함수 자체를 다른 함수의 파라미터로 전달해서,  
다른 함수 안에서 파라미터로 전달된 함수를 호출하는 것을 말한다. (즉, 나중에 실행하는 함수를 뜻함)



방식에 따라 동기적 콜백, 비동기적 콜백으로 나뉜다.  
다른 함수에 인자로 넘기거나 리턴값으로도 함수를 쓸수 있고 변수에 함수를 넣을 수도 있다.  
(JS에서는 함수는 1급 객체라고도 함)

<br/>

**비동기 콜백함수**

```js
// 1초 뒤에 '안녕' 이 출력된다.
setTimeout(() => {
  console.log('안녕');
}, 1000)
```

예제 코드에서 `setTimeout()` 은   
첫번째 인자로 함수를 넘기고,  
두번째 인자로 시간을 넘긴다.



즉,  
`console.log`가 포함되어 있는 함수를   
`setTimeout()` 이 시간을 보고 나중에 이 함수를 호출해! 라고 알려주고  
timeout 이 나중에 이 콜백함수를 실행하게 된다.

<br/>

**동기 콜백함수**

```js
function setTimeExtFunc(callback, time) {
  callback()
}

console.log(1);

setTimeExtFunc(function(){
  console.log('안녕');
}, 0);

console.log(2);
```

```js
// 결과
1
안녕
2
```

<br/>

**비동기 콜백함수 22**

```js
function setTimeExtFunc(callback, time) {
  callback()
}

console.log(1);

setTimeout(function(){
  console.log('안녕');
}, 500);

console.log(2);
```

```js
// 결과
1
2
안녕
```



---

# 동기와 비동기



<img src="https://user-images.githubusercontent.com/55340876/81500158-34eb9880-930b-11ea-8ed6-90c00a5b2bd3.png" alt="스크린샷 2020-05-10 오후 10 11 10" style="zoom: 120%;" />



**동기** : 현재 코드가 실행을 완료해야 다음 코드가 실행된다.  

**비동기** : 클라이언트에서 서버로 보낸 요청에 서버가 응답할때까지 통신이 연결된 상태에서 기다리지 않고,  
​			  서버가 처리하는 동안 다른 처리를 할 수 있다.  
​			  클라이언트에서 서버가 응답했을 때의 처리를 사전에 정의해두면,   
​              서버가 응답했을 때 정의한 코드가 자동으로 실행된다. (이러한 비동기 방식이 Promise 와 개념이 비슷함)



---

# Promise 이해하기

![스크린샷 2020-05-10 오후 11 02 38](https://user-images.githubusercontent.com/55340876/81501252-5ac86b80-9312-11ea-9f8f-172f8824f942.png)



## Promise 객체의 3가지 상태



- **대기중(Pending)** : 아직 결과가 없는 상태.  
  약속을 했지만 아직 약속에 대한 결과가 나오지 않은 상태이다.

```js
new Promise(); // 요 메서드를 호출하면 대기중(Pending) 상태가 된다.
```

요놈을 호출할때 콜백 함수를 선언할 수 있고, 콜백 함수의 인자는 `resolve`, `reject` 이다.

```js
new Promise((resolve, reject) => {
  ...
});
```



- **이행됨(Fulfilled)** : 비동기 처리가 성공적으로 완료되어 약속을 이행한 상태. (다르게 표현하자면 '완료')  
  이때 결과로 하나의 값이 전달된다.

```js
new Promise((resolve, reject) => {
  resolve(); // 콜백 함수의 인자 resolve 를 호출하면 이행(Fulfilled) 상태가 된다.
});
```

이행 상태가 되면 `then()` 을 이용하여 처리 결과 값을 받을 수 있다.

```js
function getData() {
  return new Promise((resolve, reject) => {
    var data = 100;
    resolve(data);
  });
}

// resolve()의 결과 값 data를 resolvedData로 받음
getData().then(resolvedData => console.log(resolvedData)); // 100
```



- **거부됨(Rejected)** : 비동기 처리가 실패한 상태.   
  약속이 거부되고 그 결과로 거절된 이유를 전달한다.

```js
new Promise((resolve, reject) => {
  reject(); // 콜백 함수의 인자 reject 를 호출하면 실패(Rejected) 상태가 된다.
});
```

그리고, 실패 상태가 되면 실패한 이유(실패 처리의 결과 값)를 `catch()` 로 받을 수 있다.

```js
function getData() {
  return new Promise((resolve, reject) => {
    reject(new Error('Request is failed!'));
  });
}

// reject()의 결과 값 Error를 err에 받음
getData().then().catch(err => console.log(err)); // Error: Request is failed
```



---

## Promise 객체의 2가지 메소드

- **then(onFulfilled, onReject)** : 약속이 완료됐을 때 호출될 함수들을 정의한다.   
  이때 첫번째 인자로 전달되는 함수는 약속이 성공적으로 이행됐을 때 호출되고,   
  두번째 인자로 전달된 함수는 거부됐을 때 호출된다.  
  두 전달 인자 함수들은 매개변수를 가지는데 각각의 결과가 매개변수를 통해 전달된다.  

- **catch(onReject)** : 약속이 거부됐을 때 호출될 함수(onReject)를 등록한다.

<br/>

**예제 1)**

다음 그림에서 객체는 비동기 코드를 가지며 대기 중인 상태로 만들어지고  
이후 비동기 코드에서 resolve 나 reject 를 호출하면 Promise 객체에 등록한 어떠한 함수들이 호출되는지를 보여준다.



![스크린샷 2020-05-10 오후 10 50 11](https://user-images.githubusercontent.com/55340876/81500974-9cf0ad80-9310-11ea-951c-8c9588678216.png)

```js
// 숙제에 대한 Promise 객체를 생성하는 함수를 정의한다.
function promiseForHomework(mustDo) {
// Promise 객체는 Promise 생성자 함수에 new 키워드를 통해 생성할 수 있다.
// 이때 계산될 코드를 담은 함수를 인자로 전달하는데 이 함수에는 resolve 와 reject 매개변수를 가진다.
// Resolve 는 약속을 성공시킬 수 있는 함수로 호출 시 결과를 인자로 전달한다.
// 반면, reject는 실패 처리를 위한 함수로 호출 시 실패 이유를 함께 전달한다.
// 즉, Promise 생성자 함수에 전달되는 함수의 본문에는 나중에 계산이 완료되는 일을 작성하게 된다.
  return new Promise((resolve, reject) => {
    // setTimeout 함수를 통해 3초 후에 실행될 코드를 정의한다.
    // 콘솔에 'doing homework' 을 출력하는 코드는 3초 후에 실행되고,
    // promiseForHomework 에 전달받은 인자 값의 유무에 따라 resolve 함수 또는 reject 함수가 호출된다.
    // resolve 함수가 호출되면 이후에 then 메소드에 전달된 첫번째 인자의 함수가 호출되고,
    // 이때 resolve 에 전달한 전달 인자가 then 메소드의 전달된 함수의 매개변수로 전달된다.
    setTimeout(() => {
      console.log('doing homework');
      if(mustDo) {
        resolve({
          result: 'homework-result'
        });
      } else {
        reject(new Error('Too lazy!'));
      }
    }, 3000);
  });
};

// 새로운 숙제 Promise 객체를 생성한다. 이때 true 를 인자로 전달하여 3초 후에 약속이 꼭 이행되게 한다.
// 그리고 콘솔에 'promiseA created' 를 출력한다. 상단 코드들보다 나중에 작성하였어도 
// 상단 코드는 3초 후에 실행되는 비동기 코드기 때문에 콘솔에 'promiseA created' 가 먼저 출력된다.
const promiseA = promiseForHomework(true);
console.log('promiseA created');

// 또다른 숙제 Promise 객체를 생성한다. 마찬가지로 상단 코드인 'doing homework' 보다 먼저 
// 'promiseB created' 가 콘솔에 찍히지만 
// 이전의 숙제 Promise 와는 다르게 전달 인자가 없이 생성하여 3초 후에 reject가 호출된다.
const promiseB = promiseForHomework();
console.log('promiseB created');

// **각 Promise 객체에 resolve 와 reject 가 되었을 경우 호출될 함수들을 정의한다.**
// promiseA 객체는 resolve 가 되어 "{result: 'homework-result'}" 가 콘솔에 찍히고,
promiseA.then(v => console.log(v));
// promiseB 객체는 reject 가 되어 then 에 전달한 함수는 호출이 안되고 
// catch 메소드에 전달한 함수가 호출되어 거절된 이유인 에러 객체가 콘솔에 에러로 출력된다.
promiseB
  .then(v => console.log(v))
  .catch(e => console.error(e));
```

```js
// 결과
promiseA created
promiseB created
doing homework
{result: "homework-result"}
doing homework
Error: Too lazy!
```

![스크린샷 2020-05-10 오후 11 10 55](https://user-images.githubusercontent.com/55340876/81501466-81d36d00-9313-11ea-801a-8e699652ecd0.png)



---

## 막간 설명! 콜백지옥

하나의 비동기 계산이 다른 비동기 계산의 결과에 의해 처리되어야 하는 경우가 많았다.  
Promise 가 나오기 이전에는 콜백 패턴을 통해 비동기 처리를 하였고,  
중첩된 비동기 코드들을 처리하다 보면 콜백 피라미드 형태의 코드들이 쉽게 나왔다.



![스크린샷 2020-05-11 오전 12 03 09](https://user-images.githubusercontent.com/55340876/81502753-ce6e7680-931a-11ea-9393-943a4efd9b14.png)



우리가 많이 들었던 ==콜 백 지 옥== !!!  



이런 비동기 코드들의 조합을 Promise 기반으로 작성하면 간단명료해진다.  
Promise 의 then 메소드에서 새로운 비동기 코드를 실행하는 Promise 를 반환할 수 있는데,  
다음 then 메소드는 새롭게 만들어진 Promise 코드가 이행되기 전까지 호출되지 않는다.

---



**예제 2)**

다음 예제는 1초 후에 주어진 이름의 일을 수행하여 이행 시 스테미나를 차감할 값을 반환한다.  
1초 후에 일을 수행하는 약속(Promise) 를 연속적으로 처리하게 된다.



![스크린샷 2020-05-10 오후 11 56 59](https://user-images.githubusercontent.com/55340876/81502618-f4474b80-9319-11ea-82f4-f5e77b444ee8.png)

```js
// 주어진 이름에 일을 수행하는 약속을 생성하는 함수를 정의한다.
function doJob(name, person) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 스테미나를 속성으로 갖는 객체를 매개변수로 전달받아
    	// 스테미나가 50보다 많으면 약속이 이행된다.
      // 이행 결과로는 스테미나를 차감할 값을 포함하는 객체를 전달한다.
      // 50 이하면 약속은 거부된다.
      if(person.stamina > 50) {
        resolve({
          result: `${name} success`,
          loss: 30
        });
      } else {
        reject(new Error(`${name} failed!`));
      }
    }, 1000);
  });
};

// 스테미나 값 100을 가지는 객체를 정의한다.
const chacha = {stamina: 100};

// 'work' 이름의 일을 수행하는 약속을 생성한다.
// 전달된 인자가 스테미나 100이기 때문에 성공적으로 이행되고, 
// then 메소드 전달한 콜백 함수에 차감될 스테미나와 결과값이 전달된다.
// 그리고 then 메소드에 전달한 콜백 함수에서 study 이름의 일을 수행하는 약속을 반환한다.
// 이렇게 반환된 약속이 이행되면 다음에 연결된 then 메소드의 콜백 함수에서 앞서 반환한 약속의 이행 결과가 전달된다.
doJob('work', chacha)
  .then(v => {
    console.log(v.result);
    chacha.stamina -= v.loss;
    return doJob('study', chacha);
  })
// 공부하는 약속에 이행된 결과를 콘솔에 출력하고 스테미나를 차감한다.
// 그리고 다시 'work' 이름의 일을 수행하는 약속을 생성하여 반환한다.
  .then(v => {
    console.log(v.result);
    chacha.stamina -= v.loss;
    return doJob('work', chacha);
  })
// 이전 then 메소드 콜백 함수에서 반환된 'work' 이름의 일을 수행하는 약속의 이행 결과를 인자로 전달 받는다.
// 하지만 이전까지의 수행된 일들 때문에 스테미나가 50 이하까지 차감되어 이 콜백 함수는 호출되지 않는다.
// 왜냐면 이전 약속이 거부되었기 때문이다!
  .then(v => {
    console.log(v.result);
    chacha.stamina -= v.loss;
    return doJob('study', chacha);
  })
// 앞에 이어지는 약속들의 연결에서 에러가 발생하게 되면 catch 메소드의 콜백 함수가 호출된다.
// 37번 라인의 then 메소드의 전달된 콜백 함수에서 반환한 약속이 거부되면서 해당 catch 메소드의 콜백 함수가 호출된다.
  .catch(e => console.error(e));
```

```js
// 결과
work success
study success
Error: work failed!
```

![스크린샷 2020-05-11 오전 12 16 24](https://user-images.githubusercontent.com/55340876/81503082-a7b13f80-931c-11ea-9c3d-ef6834815378.png)



이처럼 Promise 의 또 다른 특징은 여러 개의 Promise 를 연결하여 사용할 수 있다. (Promise Chaining)  
앞 에제는 then() 메소드를 호출하고 나면 새로운 프로미스 객체가 반환된다. 

```js
function getData() {
  return new Promise({
    // ...
  });
}

// then() 으로 여러 개의 프로미스를 연결한 형식
getData()
  .then(function(data) {
    // ...
  })
  .then(function() {
    // ...
  })
  .then(function() {
    // ...
  });
```

<br/>


**예제 3)**

프로미스 객체를 하나 생성하고 `setTimeout()` 을 이용해 2초 후에 `resolve()` 를 호출하는 예제이다.

```js
new Promise(function(resolve, reject){
  setTimeout(function() {
    resolve(1);
  }, 2000);
})
.then(function(result) {
  console.log(result); // 1
  return result + 10;
})
.then(function(result) {
  console.log(result); // 11
  return result + 20;
})
.then(function(result) {
  console.log(result); // 31
});
```

`resolve()`가 호출되면 프로미스가 대기 상태에서 이행 상태로 넘어가기 때문에 첫 번째 `.then()`의 로직으로 넘어간다.   
첫 번째 `.then()`에서는 이행된 결과 값 1을 받아서 10을 더한 후 그다음 `.then()` 으로 넘겨준다.   
두 번째 `.then()`에서도 마찬가지로 바로 이전 프로미스의 결과 값 11을 받아서 20을 더하고 다음 `.then()`으로 넘겨준다.   
마지막 `.then()`에서 최종 결과 값 31을 출력한다.



---

# Async 이해하기

ES8 에 소개된 async 함수를 살펴보자.  
async 함수는 함수 안의 awit 구문과 함께 비동기 작업을 제어한다.  
await 키워드는 반드시 async 함수 내부에서만 유효하다.



## async 함수의 동작 방식

처음 async 함수가 호출되어  await 키워드가 있는 비동기 작업(Promise 객체)이 실행되면,  
해당 비동기 함수는 이벤트 루프를 통해 비동기로 작업을 처리한다.  

그동안 async 함수는 이러한 비동기 작업이 완료될 때까지 일시 중지 상태로 비동기 작업(Promise 객체)의 해결(resolve)을 기다린다.  
이 작업이 완료되면 async 함수가 다시 실행되고 함수 결과를 반환한다.



async 함수를 선언하는 방법에는 async 함수 선언문과 표현식이 있다.

```js
async function 함수명() {
  await 비동기_처리_메서드명();
}
```

함수 앞에 `async` 예약어를 붙인다.  
함수 내부 로직중 HTTP 통신을 하는 비동기 처리 코드 앞에  `await` 키워드를 붙인다.

**주의!!! 비동기 처리 메서드가 꼭 Promise 객체를 반환해야 await 가 의도한 대로 동작한다.**

(일반적으로 await 대상이 되는 비동기 처리 코드는 Axios 등 Promise 를 반환하는 API 호출 함수이다.)

<br/>


다음은 **예제 2)** 를 Async 함수로 바꿔 작성해 보겠다.



**예제 4)**

```js
// job 이름과 스테미나를 속성으로 갖는 객체를 매개변수로 전달 받는다.
function doJob(name, person) {
// Promise 객체를 생성하는 함수를 정의한다.
return new Promise((resolve, reject) => {
  // 이 Promise 객체는 setTimeout 을 사용하여 함수 호출로부터 1초 뒤에 로직을 처리하도록 약속한다.
  setTimeout(() => {
    // 이때 스테미나가 50보다 크면 30을 차감하고, Promise 를 성공으로 처리하지만
    if(person.stamina > 50) {
      person.stamina -= 30;
      resolve({
        result: `${name} success`
      });
      // 만일, 스테미나가 50 이하면 약속은 거부된다.
    } else {
      reject(new Error(`${name} failed!`));
    }
  }, 1000);
});
};

// 스테미나 값을 100을 갖는 객체를 정의한다.
const chacha = {stamina: 100};

// async 함수를 표현식으로 정의한다.
// 표현식 익명함수 function 앞에 async 를 추가하여, execute 함수 내부에 비동기 작업을 제어한다.
const execute = async function() {
  // 비동기로 처리되는 doJob 함수를 연달아 호출한다.
  // 비동기 로직 앞에 await 키워드를 추가하면, 비동기 작업이 끝날 때까지 기다렸다가 다음 문장 코드를 처리한다.
  // 따라서 하위 코드들이 순서대로 실행된다.
  try {
    let v = await doJob('work', chacha); // 스테미나 값이 50 이상이라 1초 간격 순차적으러 에러 없이 처리된다.
    console.log(v.result);
    v = await doJob('study', chacha);
    console.log(v.result);
    v = await doJob('work', chacha); // 스테미나 값이 50 이하가 되어 에러를 반환한다.
    console.log(v.result);
    v = await doJob('study', chacha);
  } catch(e) { // 에러 발생 시 try-catch 메소드를 통해 전달한 함수가 호출되어 에러 객체가 콘솔에 출력된다.
    console.log(e);
  }
}

	execute();
```

```js
// 결과
work success
study success
Error: work failed!
```

![스크린샷 2020-05-11 오전 12 49 10](https://user-images.githubusercontent.com/55340876/81503916-3aec7400-9321-11ea-8cc1-142a1a89872f.png)



**async / await 에 대한 것은 실습을 하면서 더 딥하게 파야될 것 같다!! 😤**





---
---

# Reference  

- [Javascript 동기와 비동기]([https://medium.com/@www.hohee/javascript-%EB%8F%99%EA%B8%B0%EC%99%80-%EB%B9%84%EB%8F%99%EA%B8%B0-e0e44a9749f4](https://medium.com/@www.hohee/javascript-동기와-비동기-e0e44a9749f4))
- [[Async, 비동기와 동기] Promise에서 Await까지]([https://velog.io/@rohkorea86/Promiseis-%EB%B9%84%EB%8F%99%EA%B8%B0%EB%8F%99%EA%B8%B0%EC%97%90%EC%84%9C-Promise%EA%B9%8C%EC%A7%80](https://velog.io/@rohkorea86/Promiseis-비동기동기에서-Promise까지))
- [자바스크립트 비동기 처리와 콜백 함수](https://joshua1988.github.io/web-development/javascript/javascript-asynchronous-operation/)
- [자바스크립트 Promise 쉽게 이해하기](https://joshua1988.github.io/web-development/javascript/promise-for-beginners/)
- [자바스크립트 async와 await](https://joshua1988.github.io/web-development/javascript/js-async-await/)
- [CallBack지옥에 Promise 적용하기]([https://medium.com/@preiner/callback%EC%A7%80%EC%98%A5%EC%97%90-promise-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0-d02272ecbabe](https://medium.com/@preiner/callback지옥에-promise-적용하기-d02272ecbabe))
- [도서] 초보자를 위한 JavaScript 200제

