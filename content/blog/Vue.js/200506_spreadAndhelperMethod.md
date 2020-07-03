---
title: '✅ [Vue.js] Spread 연산자 & 헬퍼함수'
date: 2020-05-06 21:24:00
category: 'Vue.js'
draft: false 
showToc: true
---


> [Vue.js 중급 강좌 - 웹앱 제작으로 배워보는 Vue.js, ES6, Vuex](https://www.inflearn.com/course/vue-pwa-vue-js-%EC%A4%91%EA%B8%89/)  강의를 토대로 학습한 내용을 정리하였습니다.

# Spread 연산자

예제로 보면 한번에 이해가 간다.



```js
let chacha = {
  field: 'WEB',
  language: 'JS'
};

let developer = {
  nation: 'KOREA',
  field: chacha.field,
  language: chacha.language
};

console.log(developer);
```

콘솔 결과는?

![스크린샷 2020-05-06 오전 2 53 29](https://user-images.githubusercontent.com/55340876/81098756-c68e8b00-8f44-11ea-9cff-1dba486ca6af.png)



요로코롬 나오는데 너무 귀찮다.  
그래서 나온것이 `...` 요놈!!

```js
let chacha = {
  field: 'WEB',
  language: 'JS'
};

let developer = {
  nation: 'KOREA',
  ...chacha
};

console.log(developer);
```

  `...chacha` 이걸로만 바꿔주고 콘솔을 찍어보면

![스크린샷 2020-05-06 오전 2 56 27](https://user-images.githubusercontent.com/55340876/81099019-30a73000-8f45-11ea-932f-13f357da5eae.png)

결과는 동일허다!!



---



# 헬퍼

- 헬퍼를 사용하고자 하는 vue 파일에서 해당 헬퍼를 로딩

```js
// App.vue
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'

export default {
  computed() {
    ...mapState(['num']),
    ...mapGatters(['countedNum']),
  },
  methods: {
    ...mapMutations(['clickBtn']),
    ...mapActions(['asyncClickBtn'])
  }
}
```

`...` 은 ES6 의 **Object Spread Operator** 이다.



---

## mapState

- Vuex 에 선언한 state 속성을 뷰 컴포넌트에 더 쉽게 연결해주는 헬퍼

```js
// App.vue
import { mapState } from 'vuex'

computed() {
  ...mapState(['num'])
  // num() { return this.$store.state.num; }
}

// store.js
state: {
  num: 10
}
```

```html
<!-- <p>{{ this.$store.state.num }}</p> -->
<p>{{ this.num }}</p>
```

**이때 스프레드 연산자를 쓰는 이유는**

**기존 컴포넌트의 computed 속성과 헬퍼함수를 함께 쓰기위해서 사용하는 것이라고 보면 된다.**



---

## mapGetters

- Vuex 에 선언한 getters 속성을 뷰 컴포넌트에 더 쉽게 연결해주는 헬퍼

```js
// App.vue
import { mapGetters } from 'vuex'

computed() {
  ...mapGetters(['reverseMessage'])
}

// store.js
getters: {
  reverseMessage(stete) {
    return state.msg.split('').reverse().join('');
  }
}
```

```html
<!-- <p>{{ this.$store.getters.reverseMessage }}</p> -->
<p>{{ this.reverseMessage }}</p>
```



---

## mapMutations

- Vuex 에 선언한 mutations 속성을 뷰 컴포넌트에 더 쉽게 연결해주는 헬퍼

```js
// App.vue
import { mapMutations } from 'vuex'

methods: {
  ...mapMutations(['clickBtn']),
  authLogin() {},
  displayTable() {}
}

// store.js
mutations: {
  clickBtn(stete) {
    aleart(state.msg);
  }
}
```

```html
<button v-on:click="clickBtn">팝업 메세지</button>
```



---

## mapActions

- Vuex 에 선언한 actions 속성을 뷰 컴포넌트에 더 쉽게 연결해주는 헬퍼

```js
// App.vue
import { mapActions } from 'vuex'

methods: {
  ...mapActions(['delayClickBtn']),
}

// store.js
actions: {
  delayClickBtn(context) {
    setTimeout(() => context.commit('clickBtn'), 2000);
  }
}
```

```html
<button v-on:click="delayClickBtn">딜레이 팝업 메세지</button>
```



---

## 헬퍼의 스뭇스한 문법

- Vuex 에 선언한 속성을 그대로 컴포넌트에 연결하는 문법

```js
// 배열 리터럴
...mapMutations([
  'clickBtn', // 'clickBtn': clickBtn
  'addNumber' // addNumber(인자)
])
```



- Vuex 에 선언한 속성을 컴포넌트의 특정 메서드에다가 연결하는 문법

```js
// 객체 리터럴
...mapMutations({
  popupMsg: 'clickBtn' // 컴포넌트 메서드 명 : Store의 뮤테이션 명
})
```



---

## 헬퍼의 간편함

```js
// store.js
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    price: 100
  },
  getters: {
    originalPrice(state) {
      return state.price;
    },
    doublePrice(state) {
      return state.price * 2;
    },
    triplePrice(state) {
      return state.price * 3;
    }
  }
});
```

```html
<!-- Test.vue -->

<template>
  <div id="root">
    <p>{{ originalPrice }}</p> <!-- 100 -->
    <p>{{ doublePrice }}</p> <!-- 200 -->
    <p>{{ triplePrice }}</p> <!-- 300 -->
  </div>
</template>

<script>
export default {
  computed: {
    originalPrice() {
      return this.$store.getters.originalPrice;
    },
    doublePrice() {
      return this.$store.getters.doublePrice;
    },
    triplePrice() {
      return this.$store.getters.triplePrice;
    },
  }
}
</script>
```

원래는 computed 속성을 쓰지않고  
템플릿 코드 내부에

```html
    <p>{{ this.$store.getters.originalPrice }}</p> <!-- 100 -->
    <p>{{ this.$store.getters.doublePrice }}</p> <!-- 200 -->
    <p>{{ this.$store.getters.triplePrice }}</p> <!-- 300 -->
```

요런식으로 해줘도 되지만!



직관적으로 알아보기 위해서 computed 속성에 정의해주었다.  
근데 이 작업들이 반복되면 타이핑의 노예가 되기 때문에 헬퍼함수로 쉽게 들고오게끔 해주자!

어떻게?

```js
<script>
export default {
  computed: {
    ...mapGetters(['originalPrice', 'doublePrice', 'triplePrice'])
    
   // originalPrice() {
   //   return this.$store.getters.originalPrice;
   // },
   // doublePrice() {
   //   return this.$store.getters.doublePrice;
   // },
   // triplePrice() {
   //   return this.$store.getters.triplePrice;
   // },
  }
}
</script>
```

요로케!!! 👍🏻




---
---

# Reference  
- [Vue.js 중급 강좌 - 웹앱 제작으로 배워보는 Vue.js, ES6, Vuex](https://www.inflearn.com/course/vue-pwa-vue-js-%EC%A4%91%EA%B8%89/) 