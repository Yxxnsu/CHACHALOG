---
title: 'π₯ [etc] μ½λ°± / λκΈ°μ λΉλκΈ°'
date: 2020-05-10 00:20:00
category: 'etc'
draft: false
showToc: true
---



# μ½λ°± ν¨μλ?

ν¨μ μμ²΄λ₯Ό λ€λ₯Έ ν¨μμ νλΌλ―Έν°λ‘ μ λ¬ν΄μ,  
λ€λ₯Έ ν¨μ μμμ νλΌλ―Έν°λ‘ μ λ¬λ ν¨μλ₯Ό νΈμΆνλ κ²μ λ§νλ€. (μ¦, λμ€μ μ€ννλ ν¨μλ₯Ό λ»ν¨)



λ°©μμ λ°λΌ λκΈ°μ  μ½λ°±, λΉλκΈ°μ  μ½λ°±μΌλ‘ λλλ€.  
λ€λ₯Έ ν¨μμ μΈμλ‘ λκΈ°κ±°λ λ¦¬ν΄κ°μΌλ‘λ ν¨μλ₯Ό μΈμ μκ³  λ³μμ ν¨μλ₯Ό λ£μ μλ μλ€.  
(JSμμλ ν¨μλ 1κΈ κ°μ²΄λΌκ³ λ ν¨)

<br/>

**λΉλκΈ° μ½λ°±ν¨μ**

```js
// 1μ΄ λ€μ 'μλ' μ΄ μΆλ ₯λλ€.
setTimeout(() => {
  console.log('μλ');
}, 1000)
```

μμ  μ½λμμ `setTimeout()` μ   
μ²«λ²μ§Έ μΈμλ‘ ν¨μλ₯Ό λκΈ°κ³ ,  
λλ²μ§Έ μΈμλ‘ μκ°μ λκΈ΄λ€.



μ¦,  
`console.log`κ° ν¬ν¨λμ΄ μλ ν¨μλ₯Ό   
`setTimeout()` μ΄ μκ°μ λ³΄κ³  λμ€μ μ΄ ν¨μλ₯Ό νΈμΆν΄! λΌκ³  μλ €μ£Όκ³   
timeout μ΄ λμ€μ μ΄ μ½λ°±ν¨μλ₯Ό μ€ννκ² λλ€.

<br/>

**λκΈ° μ½λ°±ν¨μ**

```js
function setTimeExtFunc(callback, time) {
  callback()
}

console.log(1);

setTimeExtFunc(function(){
  console.log('μλ');
}, 0);

console.log(2);
```

```js
// κ²°κ³Ό
1
μλ
2
```

<br/>

**λΉλκΈ° μ½λ°±ν¨μ 22**

```js
function setTimeExtFunc(callback, time) {
  callback()
}

console.log(1);

setTimeout(function(){
  console.log('μλ');
}, 500);

console.log(2);
```

```js
// κ²°κ³Ό
1
2
μλ
```



---

# λκΈ°μ λΉλκΈ°



<img src="https://user-images.githubusercontent.com/55340876/81500158-34eb9880-930b-11ea-8ed6-90c00a5b2bd3.png" alt="μ€ν¬λ¦°μ· 2020-05-10 μ€ν 10 11 10" style="zoom: 120%;" />



**λκΈ°** : νμ¬ μ½λκ° μ€νμ μλ£ν΄μΌ λ€μ μ½λκ° μ€νλλ€.  

**λΉλκΈ°** : ν΄λΌμ΄μΈνΈμμ μλ²λ‘ λ³΄λΈ μμ²­μ μλ²κ° μλ΅ν λκΉμ§ ν΅μ μ΄ μ°κ²°λ μνμμ κΈ°λ€λ¦¬μ§ μκ³ ,  
β			  μλ²κ° μ²λ¦¬νλ λμ λ€λ₯Έ μ²λ¦¬λ₯Ό ν  μ μλ€.  
β			  ν΄λΌμ΄μΈνΈμμ μλ²κ° μλ΅νμ λμ μ²λ¦¬λ₯Ό μ¬μ μ μ μν΄λλ©΄,   
β              μλ²κ° μλ΅νμ λ μ μν μ½λκ° μλμΌλ‘ μ€νλλ€. (μ΄λ¬ν λΉλκΈ° λ°©μμ΄ Promise μ κ°λμ΄ λΉμ·ν¨)



---

# Promise μ΄ν΄νκΈ°

![μ€ν¬λ¦°μ· 2020-05-10 μ€ν 11 02 38](https://user-images.githubusercontent.com/55340876/81501252-5ac86b80-9312-11ea-9f8f-172f8824f942.png)



## Promise κ°μ²΄μ 3κ°μ§ μν



- **λκΈ°μ€(Pending)** : μμ§ κ²°κ³Όκ° μλ μν.  
  μ½μμ νμ§λ§ μμ§ μ½μμ λν κ²°κ³Όκ° λμ€μ§ μμ μνμ΄λ€.

```js
new Promise(); // μ λ©μλλ₯Ό νΈμΆνλ©΄ λκΈ°μ€(Pending) μνκ° λλ€.
```

μλμ νΈμΆν λ μ½λ°± ν¨μλ₯Ό μ μΈν  μ μκ³ , μ½λ°± ν¨μμ μΈμλ `resolve`, `reject` μ΄λ€.

```js
new Promise((resolve, reject) => {
  ...
});
```



- **μ΄νλ¨(Fulfilled)** : λΉλκΈ° μ²λ¦¬κ° μ±κ³΅μ μΌλ‘ μλ£λμ΄ μ½μμ μ΄νν μν. (λ€λ₯΄κ² νννμλ©΄ 'μλ£')  
  μ΄λ κ²°κ³Όλ‘ νλμ κ°μ΄ μ λ¬λλ€.

```js
new Promise((resolve, reject) => {
  resolve(); // μ½λ°± ν¨μμ μΈμ resolve λ₯Ό νΈμΆνλ©΄ μ΄ν(Fulfilled) μνκ° λλ€.
});
```

μ΄ν μνκ° λλ©΄ `then()` μ μ΄μ©νμ¬ μ²λ¦¬ κ²°κ³Ό κ°μ λ°μ μ μλ€.

```js
function getData() {
  return new Promise((resolve, reject) => {
    var data = 100;
    resolve(data);
  });
}

// resolve()μ κ²°κ³Ό κ° dataλ₯Ό resolvedDataλ‘ λ°μ
getData().then(resolvedData => console.log(resolvedData)); // 100
```



- **κ±°λΆλ¨(Rejected)** : λΉλκΈ° μ²λ¦¬κ° μ€ν¨ν μν.   
  μ½μμ΄ κ±°λΆλκ³  κ·Έ κ²°κ³Όλ‘ κ±°μ λ μ΄μ λ₯Ό μ λ¬νλ€.

```js
new Promise((resolve, reject) => {
  reject(); // μ½λ°± ν¨μμ μΈμ reject λ₯Ό νΈμΆνλ©΄ μ€ν¨(Rejected) μνκ° λλ€.
});
```

κ·Έλ¦¬κ³ , μ€ν¨ μνκ° λλ©΄ μ€ν¨ν μ΄μ (μ€ν¨ μ²λ¦¬μ κ²°κ³Ό κ°)λ₯Ό `catch()` λ‘ λ°μ μ μλ€.

```js
function getData() {
  return new Promise((resolve, reject) => {
    reject(new Error('Request is failed!'));
  });
}

// reject()μ κ²°κ³Ό κ° Errorλ₯Ό errμ λ°μ
getData().then().catch(err => console.log(err)); // Error: Request is failed
```



---

## Promise κ°μ²΄μ 2κ°μ§ λ©μλ

- **then(onFulfilled, onReject)** : μ½μμ΄ μλ£λμ λ νΈμΆλ  ν¨μλ€μ μ μνλ€.   
  μ΄λ μ²«λ²μ§Έ μΈμλ‘ μ λ¬λλ ν¨μλ μ½μμ΄ μ±κ³΅μ μΌλ‘ μ΄νλμ λ νΈμΆλκ³ ,   
  λλ²μ§Έ μΈμλ‘ μ λ¬λ ν¨μλ κ±°λΆλμ λ νΈμΆλλ€.  
  λ μ λ¬ μΈμ ν¨μλ€μ λ§€κ°λ³μλ₯Ό κ°μ§λλ° κ°κ°μ κ²°κ³Όκ° λ§€κ°λ³μλ₯Ό ν΅ν΄ μ λ¬λλ€.  

- **catch(onReject)** : μ½μμ΄ κ±°λΆλμ λ νΈμΆλ  ν¨μ(onReject)λ₯Ό λ±λ‘νλ€.

<br/>

**μμ  1)**

λ€μ κ·Έλ¦Όμμ κ°μ²΄λ λΉλκΈ° μ½λλ₯Ό κ°μ§λ©° λκΈ° μ€μΈ μνλ‘ λ§λ€μ΄μ§κ³   
μ΄ν λΉλκΈ° μ½λμμ resolve λ reject λ₯Ό νΈμΆνλ©΄ Promise κ°μ²΄μ λ±λ‘ν μ΄λ ν ν¨μλ€μ΄ νΈμΆλλμ§λ₯Ό λ³΄μ¬μ€λ€.



![μ€ν¬λ¦°μ· 2020-05-10 μ€ν 10 50 11](https://user-images.githubusercontent.com/55340876/81500974-9cf0ad80-9310-11ea-951c-8c9588678216.png)

```js
// μμ μ λν Promise κ°μ²΄λ₯Ό μμ±νλ ν¨μλ₯Ό μ μνλ€.
function promiseForHomework(mustDo) {
// Promise κ°μ²΄λ Promise μμ±μ ν¨μμ new ν€μλλ₯Ό ν΅ν΄ μμ±ν  μ μλ€.
// μ΄λ κ³μ°λ  μ½λλ₯Ό λ΄μ ν¨μλ₯Ό μΈμλ‘ μ λ¬νλλ° μ΄ ν¨μμλ resolve μ reject λ§€κ°λ³μλ₯Ό κ°μ§λ€.
// Resolve λ μ½μμ μ±κ³΅μν¬ μ μλ ν¨μλ‘ νΈμΆ μ κ²°κ³Όλ₯Ό μΈμλ‘ μ λ¬νλ€.
// λ°λ©΄, rejectλ μ€ν¨ μ²λ¦¬λ₯Ό μν ν¨μλ‘ νΈμΆ μ μ€ν¨ μ΄μ λ₯Ό ν¨κ» μ λ¬νλ€.
// μ¦, Promise μμ±μ ν¨μμ μ λ¬λλ ν¨μμ λ³Έλ¬Έμλ λμ€μ κ³μ°μ΄ μλ£λλ μΌμ μμ±νκ² λλ€.
  return new Promise((resolve, reject) => {
    // setTimeout ν¨μλ₯Ό ν΅ν΄ 3μ΄ νμ μ€νλ  μ½λλ₯Ό μ μνλ€.
    // μ½μμ 'doing homework' μ μΆλ ₯νλ μ½λλ 3μ΄ νμ μ€νλκ³ ,
    // promiseForHomework μ μ λ¬λ°μ μΈμ κ°μ μ λ¬΄μ λ°λΌ resolve ν¨μ λλ reject ν¨μκ° νΈμΆλλ€.
    // resolve ν¨μκ° νΈμΆλλ©΄ μ΄νμ then λ©μλμ μ λ¬λ μ²«λ²μ§Έ μΈμμ ν¨μκ° νΈμΆλκ³ ,
    // μ΄λ resolve μ μ λ¬ν μ λ¬ μΈμκ° then λ©μλμ μ λ¬λ ν¨μμ λ§€κ°λ³μλ‘ μ λ¬λλ€.
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

// μλ‘μ΄ μμ  Promise κ°μ²΄λ₯Ό μμ±νλ€. μ΄λ true λ₯Ό μΈμλ‘ μ λ¬νμ¬ 3μ΄ νμ μ½μμ΄ κΌ­ μ΄νλκ² νλ€.
// κ·Έλ¦¬κ³  μ½μμ 'promiseA created' λ₯Ό μΆλ ₯νλ€. μλ¨ μ½λλ€λ³΄λ€ λμ€μ μμ±νμμ΄λ 
// μλ¨ μ½λλ 3μ΄ νμ μ€νλλ λΉλκΈ° μ½λκΈ° λλ¬Έμ μ½μμ 'promiseA created' κ° λ¨Όμ  μΆλ ₯λλ€.
const promiseA = promiseForHomework(true);
console.log('promiseA created');

// λλ€λ₯Έ μμ  Promise κ°μ²΄λ₯Ό μμ±νλ€. λ§μ°¬κ°μ§λ‘ μλ¨ μ½λμΈ 'doing homework' λ³΄λ€ λ¨Όμ  
// 'promiseB created' κ° μ½μμ μ°νμ§λ§ 
// μ΄μ μ μμ  Promise μλ λ€λ₯΄κ² μ λ¬ μΈμκ° μμ΄ μμ±νμ¬ 3μ΄ νμ rejectκ° νΈμΆλλ€.
const promiseB = promiseForHomework();
console.log('promiseB created');

// **κ° Promise κ°μ²΄μ resolve μ reject κ° λμμ κ²½μ° νΈμΆλ  ν¨μλ€μ μ μνλ€.**
// promiseA κ°μ²΄λ resolve κ° λμ΄ "{result: 'homework-result'}" κ° μ½μμ μ°νκ³ ,
promiseA.then(v => console.log(v));
// promiseB κ°μ²΄λ reject κ° λμ΄ then μ μ λ¬ν ν¨μλ νΈμΆμ΄ μλκ³  
// catch λ©μλμ μ λ¬ν ν¨μκ° νΈμΆλμ΄ κ±°μ λ μ΄μ μΈ μλ¬ κ°μ²΄κ° μ½μμ μλ¬λ‘ μΆλ ₯λλ€.
promiseB
  .then(v => console.log(v))
  .catch(e => console.error(e));
```

```js
// κ²°κ³Ό
promiseA created
promiseB created
doing homework
{result: "homework-result"}
doing homework
Error: Too lazy!
```

![μ€ν¬λ¦°μ· 2020-05-10 μ€ν 11 10 55](https://user-images.githubusercontent.com/55340876/81501466-81d36d00-9313-11ea-801a-8e699652ecd0.png)



---

## λ§κ° μ€λͺ! μ½λ°±μ§μ₯

νλμ λΉλκΈ° κ³μ°μ΄ λ€λ₯Έ λΉλκΈ° κ³μ°μ κ²°κ³Όμ μν΄ μ²λ¦¬λμ΄μΌ νλ κ²½μ°κ° λ§μλ€.  
Promise κ° λμ€κΈ° μ΄μ μλ μ½λ°± ν¨ν΄μ ν΅ν΄ λΉλκΈ° μ²λ¦¬λ₯Ό νμκ³ ,  
μ€μ²©λ λΉλκΈ° μ½λλ€μ μ²λ¦¬νλ€ λ³΄λ©΄ μ½λ°± νΌλΌλ―Έλ ννμ μ½λλ€μ΄ μ½κ² λμλ€.



![μ€ν¬λ¦°μ· 2020-05-11 μ€μ  12 03 09](https://user-images.githubusercontent.com/55340876/81502753-ce6e7680-931a-11ea-9393-943a4efd9b14.png)



μ°λ¦¬κ° λ§μ΄ λ€μλ ==μ½ λ°± μ§ μ₯== !!!  



μ΄λ° λΉλκΈ° μ½λλ€μ μ‘°ν©μ Promise κΈ°λ°μΌλ‘ μμ±νλ©΄ κ°λ¨λͺλ£ν΄μ§λ€.  
Promise μ then λ©μλμμ μλ‘μ΄ λΉλκΈ° μ½λλ₯Ό μ€ννλ Promise λ₯Ό λ°νν  μ μλλ°,  
λ€μ then λ©μλλ μλ‘­κ² λ§λ€μ΄μ§ Promise μ½λκ° μ΄νλκΈ° μ κΉμ§ νΈμΆλμ§ μλλ€.

---



**μμ  2)**

λ€μ μμ λ 1μ΄ νμ μ£Όμ΄μ§ μ΄λ¦μ μΌμ μννμ¬ μ΄ν μ μ€νλ―Έλλ₯Ό μ°¨κ°ν  κ°μ λ°ννλ€.  
1μ΄ νμ μΌμ μννλ μ½μ(Promise) λ₯Ό μ°μμ μΌλ‘ μ²λ¦¬νκ² λλ€.



![μ€ν¬λ¦°μ· 2020-05-10 μ€ν 11 56 59](https://user-images.githubusercontent.com/55340876/81502618-f4474b80-9319-11ea-82f4-f5e77b444ee8.png)

```js
// μ£Όμ΄μ§ μ΄λ¦μ μΌμ μννλ μ½μμ μμ±νλ ν¨μλ₯Ό μ μνλ€.
function doJob(name, person) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // μ€νλ―Έλλ₯Ό μμ±μΌλ‘ κ°λ κ°μ²΄λ₯Ό λ§€κ°λ³μλ‘ μ λ¬λ°μ
    	// μ€νλ―Έλκ° 50λ³΄λ€ λ§μΌλ©΄ μ½μμ΄ μ΄νλλ€.
      // μ΄ν κ²°κ³Όλ‘λ μ€νλ―Έλλ₯Ό μ°¨κ°ν  κ°μ ν¬ν¨νλ κ°μ²΄λ₯Ό μ λ¬νλ€.
      // 50 μ΄νλ©΄ μ½μμ κ±°λΆλλ€.
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

// μ€νλ―Έλ κ° 100μ κ°μ§λ κ°μ²΄λ₯Ό μ μνλ€.
const chacha = {stamina: 100};

// 'work' μ΄λ¦μ μΌμ μννλ μ½μμ μμ±νλ€.
// μ λ¬λ μΈμκ° μ€νλ―Έλ 100μ΄κΈ° λλ¬Έμ μ±κ³΅μ μΌλ‘ μ΄νλκ³ , 
// then λ©μλ μ λ¬ν μ½λ°± ν¨μμ μ°¨κ°λ  μ€νλ―Έλμ κ²°κ³Όκ°μ΄ μ λ¬λλ€.
// κ·Έλ¦¬κ³  then λ©μλμ μ λ¬ν μ½λ°± ν¨μμμ study μ΄λ¦μ μΌμ μννλ μ½μμ λ°ννλ€.
// μ΄λ κ² λ°νλ μ½μμ΄ μ΄νλλ©΄ λ€μμ μ°κ²°λ then λ©μλμ μ½λ°± ν¨μμμ μμ λ°νν μ½μμ μ΄ν κ²°κ³Όκ° μ λ¬λλ€.
doJob('work', chacha)
  .then(v => {
    console.log(v.result);
    chacha.stamina -= v.loss;
    return doJob('study', chacha);
  })
// κ³΅λΆνλ μ½μμ μ΄νλ κ²°κ³Όλ₯Ό μ½μμ μΆλ ₯νκ³  μ€νλ―Έλλ₯Ό μ°¨κ°νλ€.
// κ·Έλ¦¬κ³  λ€μ 'work' μ΄λ¦μ μΌμ μννλ μ½μμ μμ±νμ¬ λ°ννλ€.
  .then(v => {
    console.log(v.result);
    chacha.stamina -= v.loss;
    return doJob('work', chacha);
  })
// μ΄μ  then λ©μλ μ½λ°± ν¨μμμ λ°νλ 'work' μ΄λ¦μ μΌμ μννλ μ½μμ μ΄ν κ²°κ³Όλ₯Ό μΈμλ‘ μ λ¬ λ°λλ€.
// νμ§λ§ μ΄μ κΉμ§μ μνλ μΌλ€ λλ¬Έμ μ€νλ―Έλκ° 50 μ΄νκΉμ§ μ°¨κ°λμ΄ μ΄ μ½λ°± ν¨μλ νΈμΆλμ§ μλλ€.
// μλλ©΄ μ΄μ  μ½μμ΄ κ±°λΆλμκΈ° λλ¬Έμ΄λ€!
  .then(v => {
    console.log(v.result);
    chacha.stamina -= v.loss;
    return doJob('study', chacha);
  })
// μμ μ΄μ΄μ§λ μ½μλ€μ μ°κ²°μμ μλ¬κ° λ°μνκ² λλ©΄ catch λ©μλμ μ½λ°± ν¨μκ° νΈμΆλλ€.
// 37λ² λΌμΈμ then λ©μλμ μ λ¬λ μ½λ°± ν¨μμμ λ°νν μ½μμ΄ κ±°λΆλλ©΄μ ν΄λΉ catch λ©μλμ μ½λ°± ν¨μκ° νΈμΆλλ€.
  .catch(e => console.error(e));
```

```js
// κ²°κ³Ό
work success
study success
Error: work failed!
```

![μ€ν¬λ¦°μ· 2020-05-11 μ€μ  12 16 24](https://user-images.githubusercontent.com/55340876/81503082-a7b13f80-931c-11ea-9c3d-ef6834815378.png)



μ΄μ²λΌ Promise μ λ λ€λ₯Έ νΉμ§μ μ¬λ¬ κ°μ Promise λ₯Ό μ°κ²°νμ¬ μ¬μ©ν  μ μλ€. (Promise Chaining)  
μ μμ λ then() λ©μλλ₯Ό νΈμΆνκ³  λλ©΄ μλ‘μ΄ νλ‘λ―Έμ€ κ°μ²΄κ° λ°νλλ€. 

```js
function getData() {
  return new Promise({
    // ...
  });
}

// then() μΌλ‘ μ¬λ¬ κ°μ νλ‘λ―Έμ€λ₯Ό μ°κ²°ν νμ
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


**μμ  3)**

νλ‘λ―Έμ€ κ°μ²΄λ₯Ό νλ μμ±νκ³  `setTimeout()` μ μ΄μ©ν΄ 2μ΄ νμ `resolve()` λ₯Ό νΈμΆνλ μμ μ΄λ€.

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

`resolve()`κ° νΈμΆλλ©΄ νλ‘λ―Έμ€κ° λκΈ° μνμμ μ΄ν μνλ‘ λμ΄κ°κΈ° λλ¬Έμ μ²« λ²μ§Έ `.then()`μ λ‘μ§μΌλ‘ λμ΄κ°λ€.   
μ²« λ²μ§Έ `.then()`μμλ μ΄νλ κ²°κ³Ό κ° 1μ λ°μμ 10μ λν ν κ·Έλ€μ `.then()` μΌλ‘ λκ²¨μ€λ€.   
λ λ²μ§Έ `.then()`μμλ λ§μ°¬κ°μ§λ‘ λ°λ‘ μ΄μ  νλ‘λ―Έμ€μ κ²°κ³Ό κ° 11μ λ°μμ 20μ λνκ³  λ€μ `.then()`μΌλ‘ λκ²¨μ€λ€.   
λ§μ§λ§ `.then()`μμ μ΅μ’ κ²°κ³Ό κ° 31μ μΆλ ₯νλ€.



---

# Async μ΄ν΄νκΈ°

ES8 μ μκ°λ async ν¨μλ₯Ό μ΄ν΄λ³΄μ.  
async ν¨μλ ν¨μ μμ awit κ΅¬λ¬Έκ³Ό ν¨κ» λΉλκΈ° μμμ μ μ΄νλ€.  
await ν€μλλ λ°λμ async ν¨μ λ΄λΆμμλ§ μ ν¨νλ€.



## async ν¨μμ λμ λ°©μ

μ²μ async ν¨μκ° νΈμΆλμ΄  await ν€μλκ° μλ λΉλκΈ° μμ(Promise κ°μ²΄)μ΄ μ€νλλ©΄,  
ν΄λΉ λΉλκΈ° ν¨μλ μ΄λ²€νΈ λ£¨νλ₯Ό ν΅ν΄ λΉλκΈ°λ‘ μμμ μ²λ¦¬νλ€.  

κ·Έλμ async ν¨μλ μ΄λ¬ν λΉλκΈ° μμμ΄ μλ£λ  λκΉμ§ μΌμ μ€μ§ μνλ‘ λΉλκΈ° μμ(Promise κ°μ²΄)μ ν΄κ²°(resolve)μ κΈ°λ€λ¦°λ€.  
μ΄ μμμ΄ μλ£λλ©΄ async ν¨μκ° λ€μ μ€νλκ³  ν¨μ κ²°κ³Όλ₯Ό λ°ννλ€.



async ν¨μλ₯Ό μ μΈνλ λ°©λ²μλ async ν¨μ μ μΈλ¬Έκ³Ό ννμμ΄ μλ€.

```js
async function ν¨μλͺ() {
  await λΉλκΈ°_μ²λ¦¬_λ©μλλͺ();
}
```

ν¨μ μμ `async` μμ½μ΄λ₯Ό λΆμΈλ€.  
ν¨μ λ΄λΆ λ‘μ§μ€ HTTP ν΅μ μ νλ λΉλκΈ° μ²λ¦¬ μ½λ μμ  `await` ν€μλλ₯Ό λΆμΈλ€.

**μ£Όμ!!! λΉλκΈ° μ²λ¦¬ λ©μλκ° κΌ­ Promise κ°μ²΄λ₯Ό λ°νν΄μΌ await κ° μλν λλ‘ λμνλ€.**

(μΌλ°μ μΌλ‘ await λμμ΄ λλ λΉλκΈ° μ²λ¦¬ μ½λλ Axios λ± Promise λ₯Ό λ°ννλ API νΈμΆ ν¨μμ΄λ€.)

<br/>


λ€μμ **μμ  2)** λ₯Ό Async ν¨μλ‘ λ°κΏ μμ±ν΄ λ³΄κ² λ€.



**μμ  4)**

```js
// job μ΄λ¦κ³Ό μ€νλ―Έλλ₯Ό μμ±μΌλ‘ κ°λ κ°μ²΄λ₯Ό λ§€κ°λ³μλ‘ μ λ¬ λ°λλ€.
function doJob(name, person) {
// Promise κ°μ²΄λ₯Ό μμ±νλ ν¨μλ₯Ό μ μνλ€.
return new Promise((resolve, reject) => {
  // μ΄ Promise κ°μ²΄λ setTimeout μ μ¬μ©νμ¬ ν¨μ νΈμΆλ‘λΆν° 1μ΄ λ€μ λ‘μ§μ μ²λ¦¬νλλ‘ μ½μνλ€.
  setTimeout(() => {
    // μ΄λ μ€νλ―Έλκ° 50λ³΄λ€ ν¬λ©΄ 30μ μ°¨κ°νκ³ , Promise λ₯Ό μ±κ³΅μΌλ‘ μ²λ¦¬νμ§λ§
    if(person.stamina > 50) {
      person.stamina -= 30;
      resolve({
        result: `${name} success`
      });
      // λ§μΌ, μ€νλ―Έλκ° 50 μ΄νλ©΄ μ½μμ κ±°λΆλλ€.
    } else {
      reject(new Error(`${name} failed!`));
    }
  }, 1000);
});
};

// μ€νλ―Έλ κ°μ 100μ κ°λ κ°μ²΄λ₯Ό μ μνλ€.
const chacha = {stamina: 100};

// async ν¨μλ₯Ό ννμμΌλ‘ μ μνλ€.
// ννμ μ΅λͺν¨μ function μμ async λ₯Ό μΆκ°νμ¬, execute ν¨μ λ΄λΆμ λΉλκΈ° μμμ μ μ΄νλ€.
const execute = async function() {
  // λΉλκΈ°λ‘ μ²λ¦¬λλ doJob ν¨μλ₯Ό μ°λ¬μ νΈμΆνλ€.
  // λΉλκΈ° λ‘μ§ μμ await ν€μλλ₯Ό μΆκ°νλ©΄, λΉλκΈ° μμμ΄ λλ  λκΉμ§ κΈ°λ€λ Έλ€κ° λ€μ λ¬Έμ₯ μ½λλ₯Ό μ²λ¦¬νλ€.
  // λ°λΌμ νμ μ½λλ€μ΄ μμλλ‘ μ€νλλ€.
  try {
    let v = await doJob('work', chacha); // μ€νλ―Έλ κ°μ΄ 50 μ΄μμ΄λΌ 1μ΄ κ°κ²© μμ°¨μ μΌλ¬ μλ¬ μμ΄ μ²λ¦¬λλ€.
    console.log(v.result);
    v = await doJob('study', chacha);
    console.log(v.result);
    v = await doJob('work', chacha); // μ€νλ―Έλ κ°μ΄ 50 μ΄νκ° λμ΄ μλ¬λ₯Ό λ°ννλ€.
    console.log(v.result);
    v = await doJob('study', chacha);
  } catch(e) { // μλ¬ λ°μ μ try-catch λ©μλλ₯Ό ν΅ν΄ μ λ¬ν ν¨μκ° νΈμΆλμ΄ μλ¬ κ°μ²΄κ° μ½μμ μΆλ ₯λλ€.
    console.log(e);
  }
}

	execute();
```

```js
// κ²°κ³Ό
work success
study success
Error: work failed!
```

![μ€ν¬λ¦°μ· 2020-05-11 μ€μ  12 49 10](https://user-images.githubusercontent.com/55340876/81503916-3aec7400-9321-11ea-8cc1-142a1a89872f.png)



**async / await μ λν κ²μ μ€μ΅μ νλ©΄μ λ λ₯νκ² νμΌλ  κ² κ°λ€!! π€**





---
---

# Reference  

- [Javascript λκΈ°μ λΉλκΈ°]([https://medium.com/@www.hohee/javascript-%EB%8F%99%EA%B8%B0%EC%99%80-%EB%B9%84%EB%8F%99%EA%B8%B0-e0e44a9749f4](https://medium.com/@www.hohee/javascript-λκΈ°μ-λΉλκΈ°-e0e44a9749f4))
- [[Async, λΉλκΈ°μ λκΈ°] Promiseμμ AwaitκΉμ§]([https://velog.io/@rohkorea86/Promiseis-%EB%B9%84%EB%8F%99%EA%B8%B0%EB%8F%99%EA%B8%B0%EC%97%90%EC%84%9C-Promise%EA%B9%8C%EC%A7%80](https://velog.io/@rohkorea86/Promiseis-λΉλκΈ°λκΈ°μμ-PromiseκΉμ§))
- [μλ°μ€ν¬λ¦½νΈ λΉλκΈ° μ²λ¦¬μ μ½λ°± ν¨μ](https://joshua1988.github.io/web-development/javascript/javascript-asynchronous-operation/)
- [μλ°μ€ν¬λ¦½νΈ Promise μ½κ² μ΄ν΄νκΈ°](https://joshua1988.github.io/web-development/javascript/promise-for-beginners/)
- [μλ°μ€ν¬λ¦½νΈ asyncμ await](https://joshua1988.github.io/web-development/javascript/js-async-await/)
- [CallBackμ§μ₯μ Promise μ μ©νκΈ°]([https://medium.com/@preiner/callback%EC%A7%80%EC%98%A5%EC%97%90-promise-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0-d02272ecbabe](https://medium.com/@preiner/callbackμ§μ₯μ-promise-μ μ©νκΈ°-d02272ecbabe))
- [λμ] μ΄λ³΄μλ₯Ό μν JavaScript 200μ 

