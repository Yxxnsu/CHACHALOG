---
title: '✅ [Vue.js] actions???!'
date: 2020-05-06 21:28:00
category: 'Vue.js'
draft: false 
showToc: true
---



> [Vue.js 중급 강좌 - 웹앱 제작으로 배워보는 Vue.js, ES6, Vuex](https://www.inflearn.com/course/vue-pwa-vue-js-%EC%A4%91%EA%B8%89/)  강의를 토대로 학습한 내용을 정리하였습니다.

# actions ???!



![1064304-20190717150944798-1903750765](https://user-images.githubusercontent.com/55340876/81095034-5e897600-8f3f-11ea-9f80-7aca41d3758f.png)



- 비동기 처리 로직을 선언하는 메서드. 비동기 로직을 담당하는 mutations (mutations 속성에는 동기 처리 로직만 넣는다!)
- 데이터 요청, Promise, ES6 async 와 같은 비동기 처리는 모두 actions 에 선언한다.

<br/>

> mutations 속성에서는 state 값의 변화를 추적하기 어렵기 때문에 동기 처리 로직만 선언해주고,
>
> state 를 호출, 변경 확인이 쉬운 actions 에는 비동기 처리 로직을 선언해준다.



```js
// store.js
state: {
  count: 0
},
mutations: {
  addCount(state) {
    state.count++
  }
},
 actions: {
   delayAddCount(context) { // context 로 store 의 메서드와 속성 접근
     setTimeout(() => context.commit('addCount'), 2000);
   }
 }

// App.vue
methods: {
  incrementCount() {
    this.$store.dispatch('delayAddCount');
  }
}
```

**incrementCount() 를 실행하면 2초정도 기다렸다가 카운트를 증가시키는 코드이다.**



여기서 키포인트!
`mutations` 은 ==commit()== 이라는 API 를 발동해서 **mutations 을 호출**시키고,   
`actions` 은 ==dispatch()== 라는 API 를 발동해서 **actions 을 호출**시킨다.



찐데이터를 받아오는 예제를 살펴보자.

```js
// store.js
mutations: {
  setData(state, fetchedDate) {
    state.product = fetchedData;
  }
},
 actions: {
   fetcheProductData(context) {
     // 겟 요청 보내서 받아온 다음에 응답값을 mutations 에 넘겨주는 로직
     return axios.get('https://domain.com/products/1')
								 .then(response => context.commit('setData', response));
   }
 }

// App.vue
methods: {
  getProduct() {
    this.$store.dispatch('fetcheProductData');
  }
}
```

특정 도메인 주소의 1번 상품을 가져오라카고 받아오는 시점에서 .then 이라는 promise 콜백 API로 응답을 받아서  
그 응답을 setData 라는 mutations 을 호출하고 받은 데이터 인자를 넘기고  
고놈을 해당 프로덕트에 할당(?) 해준다.



한마디로

**`getProduct()` 를 실행하면 `actions` 에서 해당 로직이 수행되면서**  
**서버에서 받아온 값을 가지고 mutations 을 호출하고,**  
**따라서 `mutations` 에서는 state 를 접근할수 있기 때문에 서버에서 받아온 값을 `state.product` 에 밀어넣어준다.**





---
---

# Reference  
- [Vue.js 중급 강좌 - 웹앱 제작으로 배워보는 Vue.js, ES6, Vuex](https://www.inflearn.com/course/vue-pwa-vue-js-%EC%A4%91%EA%B8%89/) 