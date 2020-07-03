---
title: '✅ [Vue.js] Vuex 로 TODO 앱 구현하기'
date: 2020-05-05 21:24:00
category: 'Vue.js'
draft: false 
showToc: true
---


==오늘은 어린이날~~~==🥳🙌🏻  
이지만 난 공부를 한다..코쓱..모쓱..ㅎ..ㅎ



<img src="https://user-images.githubusercontent.com/55340876/81068901-11e07380-8f1c-11ea-8f89-02a9517ddd92.jpg" alt="19136d706e9bc587da8ce19aa6ce72c1" style="zoom:70%;" />



항상 해왔던 생각이긴 한데,  
제주도 한달살기나 강원도 어디 시골가서 리틀포레스트처럼 한달살기 해보고 싶다.  
코로나 빨리 물러갔으면 좋겠다.. 집순이 그만하고싶다.. 칭구들 만나고싶다.. 돌아다니고싶다..  

한강가서 노트북키고 깐지나게 코딩하고싶다... 한강 편의점 라면 끓여먹고싶다..   
집순이지만 집에만 있으니까 넘모 답답해..... 물러까라코로나물러까라  

_(이렇게 버킷리스트가 또 늘고..)_



---



> [Vue.js 중급 강좌 - 웹앱 제작으로 배워보는 Vue.js, ES6, Vuex](https://www.inflearn.com/course/vue-pwa-vue-js-%EC%A4%91%EA%B8%89/)  강의를 토대로 학습한 내용을 정리하였습니다.



#  Vuex 로 구현해보는 TODO 앱

사실 구현한지는 꽤 됬지만 Vuex 부분이 너무 어려워서 계속 곱씹는 중이다.  

나란 머리....
고급 강의로 넘어가야하는데 일단 이해를 제대로 하고 넘어가쟈!! (는 다시 이 게시물로 돌아올듯..)



==**디테일한 Style 코드는 제외**==

<br/>

**src > Main.js**

```js
import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
```



**src > App.vue**

```html
<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  components: {
    // 컴포넌트 태그명 : 컴포넌트 내용
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
};
</script>
```

컴포넌트 태그명과 내용이 같다면 !  
Key: Value 가 같다면!  
`TodoHeader` 요로코롬 하나로 써주면 된다.   
ES6 문법이라능!!!



**src > components > TodoHeader.vue**

```html
<template>
  <header>
    <h1>TODO it!</h1>
  </header>
</template>
```

![스크린샷 2020-05-05 오후 10 21 26](https://user-images.githubusercontent.com/55340876/81070837-c7142b00-8f1e-11ea-903f-5235a0562536.png)

뜌잇뚜잇!!!



**src > components > TodoInput.vue**

```html
<template>
  <div class="inputBox shadow">
    <input
      type="text"
      v-model="newTodoItem"
      v-on:keyup.enter="addTodo"
      placeholder="Type what you have to do"
    />
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>

    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        경고!
        <i class="fas fa-times closeModalBtn" v-on:click="showModal = false"></i>
      </h3>
      <h3 slot="body">뭐라도 써 임마</h3>
    </Modal>
  </div>
</template>

<script>
// 모달모달 불러오기
import Modal from "./common/Modal.vue";

export default {
  data() {
    return {
      newTodoItem: "",
      showModal: false
    };
  },
  methods: {
    addTodo() {
      // console.log(this.newTodoItem);
      // 인풋 박스에 입력 값이 있을 때만 저장
      if (this.newTodoItem !== "") {
        this.$store.commit("addOneItem", this.newTodoItem);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = "";
    }
  },
  components: {
    Modal
  }
};
</script>
```



![스크린샷 2020-05-05 오후 10 22 29](https://user-images.githubusercontent.com/55340876/81070924-eb700780-8f1e-11ea-8564-544ba667bcba.png)



**src > components > TodoList.vue**

```html
<template>
  <div>
    <transition-group name="list" tag="ul">
      <li
        v-for="(todoItem, index) in this.$store.state.todoItems"
        v-bind:key="todoItem.item"
        class="shadow"
      >
        <i
          class="fas fa-check checkBtn"
          v-bind:class="{checkBtnCompleted: todoItem.completed}"
          v-on:click="toggleComplete(todoItem, index)"
        ></i>
        <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  methods: {
    removeTodo(todoItem, index) {
      // const obj = { todoItem: todoItem, index: index } 이런식으로 해서
      // 하단 commit 에 payload 인자값으로 던져줄 수 있지만 너무 번거롭기 때문에 하단 방식으로 정의
      this.$store.commit("removeOneItem", { todoItem, index });
    },
    toggleComplete(todoItem, index) {
      this.$store.commit("toggleOneItem", { todoItem, index });
    }
  }
};
</script>
```



 `this.$store.commit("removeOneItem", { todoItem, index });` 요 부분을 함 보자.

객체의 특정 값을 할당 해주기 위해서



```js
export default {
  methods: {
    removeTodo(todoItem, index) {
      const obj = { 
        todoItem: todoItem, 
        index: index 
      }
      this.$store.commit("removeOneItem", { todoItem, obj });
    },
...
```

요론식으로 하면   
store.js 의 removeOneItem 에서 `payload.todoItem` `payload.index` 요로코롬 불러와야한다.

번거롭지 않는가?!



**ES6 의 할당 구조 분해 (Destructuring assignment)**를 이용하여 쌈빡하게 쉽게 코딩을 하자.



그리고!!!!  
commit() 형식으로 state 를 변경하기 위해 mutations 를 동작시킬 때  
인자 (payload) 를 전달할 수 있는데,



`this.$store.commit("removeOneItem", { todoItem, obj });`  
**removeOneItem** 뮤테이션을 발동을 시키고 뮤테이션을 **{ todoItem, obj }** 인자를 보낸다.



store.js 의 mutations 부분에서

```js
        // 할일 삭제
        removeOneItem(state, payload) {
            localStorage.removeItem(payload.todoItem.item);
            state.todoItems.splice(payload.index, 1);
        },
```

요로코롬 `removeOneItem(state, payload)` 받아와서 구현을 한다.



![스크린샷 2020-05-05 오후 10 23 55](https://user-images.githubusercontent.com/55340876/81071051-1e1a0000-8f1f-11ea-95ad-9451ccb8d513.png)



**src > components > TodoFooter.vue**

```html
<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="clearTodo">Clear All</span>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo() {
      this.$store.commit("clearAllItems");
    }
  }
};
</script>
```

![스크린샷 2020-05-05 오후 10 24 26](https://user-images.githubusercontent.com/55340876/81071117-2ffba300-8f1f-11ea-9acd-c01c983a98ca.png)



**src > store > store.js**

```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 로컬 스토리지에 저장하는 로직
const storage = {
    fetch() {
      	//빈 배열 선언해주고
        const arr = [];
      			//로컬 스토리지의 데이터를 한번에 가져오는 API가 없기 때문에 원시적인 방법을 써준다.
      			//로컬 스토리지 길이가 0 이상이면 = 로컬 스토리지에 데이터가 있다면
            if (localStorage.length > 0) {
              // 로컬 스토리지의 길이만큼 for문이 도는데
                for (let i = 0; i < localStorage.length; i++) {
                  // 로컬 스토리지의 키가 "loglevel:webpack-dev-server" 가 아니라면 (긍까 요놈은 제외한다는 말!)
                    if (localStorage.key(i) !== "loglevel:webpack-dev-server") {
                      // 위에 선언해준 빈 배열인 arr 에 하나씩 저장이 된다.
                        arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                    }
                }
            }
            return arr;
    }
};

// 모듈 시스템을 사용하는 경우 Vue.use(Vuex)를 먼저 호출해야한다.
export const store = new Vuex.Store({
    // data, 여러 컴포넌트에 공유되는 데이터(상태)
    state: {
        todoItems: storage.fetch()
    },
    // methods, state 값을 변경하는 이벤트 로직이나 메서드
  	// commit() 으로 동작시킨다.
    mutations: {
        // 할일 추가
    	  // *한마디로 걍 인자로 텍스트 값을 받아서 오브젝트로 만들고 setItem 을 해서 todoItems 에 넣는 것!*
        addOneItem(state, todoItem) {
            // 텍스트값 + 그 텍스트가 체크 됬는지 안됬는지 boolean 값 (할일 체크를 위해 필요!!)
            const obj = { completed: false, item: todoItem };
            // JSON.stringify() = obj 라는 자바스크립트 객체를 string 으로 변환해주는 API
            // 그냥 (todoItem, obj) 로 넣어버리면 로컬스토리지 안에 value 값이 object 로만 나온다.
            localStorage.setItem(todoItem, JSON.stringify(obj));
          	// 문자열로 변환할 값을 todoItems 에 넣어준다.
            state.todoItems.push(obj);
        },
        // 할일 삭제
        removeOneItem(state, payload) {
            localStorage.removeItem(payload.todoItem.item);
            state.todoItems.splice(payload.index, 1);
        },
        // 할일 체크
        toggleOneItem(state, payload) {
          	// 체크하면 completed 값이 바뀜 (boolean)
            state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
            // 로컬 스토리지에 데이터를 갱신!
          	// 로컬 스토리지를 업데이트하는 API 가 없으니 원시적으로 삭제 -> 추가(바뀐 값으로)를 순차적으로 해주자.
            localStorage.removeItem(payload.todoItem.item);
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
        },
        // 모두 삭제
        clearAllItems(state) {
            localStorage.clear();
            state.todoItems = [];
        }
    }
})
```



`localStorage.setItem(todoItem, JSON.stringify(obj));` 요 부분을 보자.



스트링으로 변환하지 않고 그냥

`localStorage.setItem(todoItem, obj)` 요로코롬 해준다면

![스크린샷 2020-05-06 오전 12 09 15](https://user-images.githubusercontent.com/55340876/81082286-09913400-8f2e-11ea-9180-f51183657058.png)

로컬스토리지에 저장이 될 때 key 는 정확히 들어가지만 Value 값이 [object Object] 로 들어가게 된다.



스트링으로 변환을 해주면?

![스크린샷 2020-05-06 오전 12 10 19](https://user-images.githubusercontent.com/55340876/81082276-06964380-8f2e-11ea-8124-81100208d573.png)

값이 원하는 방향으로 제대로 들어가진다!



![2020-05-05 22-26-08 2020-05-05 22_26_26](https://user-images.githubusercontent.com/55340876/81071311-7d781000-8f1f-11ea-9724-b3156b77e567.gif)



**src > common > Modal.vue**

```html
<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          
          <!--모달모달 헤더-->
          <div class="modal-header">
            <slot name="header">default header</slot>
          </div>

          <!--모달모달 바디-->
          <div class="modal-body">
            <slot name="body">default body</slot>
          </div>

          <!--모달모달 푸터-->
          <!-- <div class="modal-footer">
            <slot name="footer">
              default footer
              <button class="modal-default-button" @click="$emit('close')">OK</button>
            </slot>
          </div>-->
          
        </div>
      </div>
    </div>
  </transition>
</template>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
```

**인풋에 아무런 값을 넣지 않고 추가를 발동하면 모달창으로 경고를 주기!!!**



기존에 이미 정의된 컴포넌트의 template 태그들은 바꾸기 힘든데,  
`slot` 을 통해서 특정 부분들을 다시 재정의 해줄 수 있다.  
(특정 컴포넌트의 일부 UI들을 재사용할 수 있는 기능이라고 생각하자!)



```html
          <!--모달모달 헤더-->
          <div class="modal-header">
            <slot name="header">default header</slot>
          </div>

          <!--모달모달 바디-->
          <div class="modal-body">
            <slot name="body">default body</slot>
          </div>
```

Modal.vue 에서 정의한  요놈들을



```html
    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        경고!
        <i class="fas fa-times closeModalBtn" v-on:click="showModal = false"></i>
      </h3>
      <h3 slot="body">뭐라도 써 임마</h3>
    </Modal>
```

TodoInput.vue 에서 요로코롬 재정의를 해주면 된다.



```js
// TodoInput.vue

<script>
// 모달모달 불러오기
import Modal from "./common/Modal.vue";

export default {
  data() {
    return {
      newTodoItem: "",
      showModal: false
    };
  },
  methods: {
    addTodo() {
      // console.log(this.newTodoItem);
      // 인풋 박스에 입력 값이 있을 때만 저장
      if (this.newTodoItem !== "") {
        this.$store.commit("addOneItem", this.newTodoItem);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
```

`<Modal v-if="showModal" @close="showModal = false">`

상단 투두인풋 코드와 같이 보면,

여기서 `showModal: false` 초기 쇼모달 값을 거짓으로 했으니까

당연히 모달이 안보이는 상태다.



그런데 true 가 되는 순간!

```js
      } else {
        this.showModal = !this.showModal;
      }
```

바로 인풋에 아무값도 안주고 추가를 누르는 순간 true 로 바꿔주면!!!

모달창이 뙇!!!!



`<i class="fas fa-times closeModalBtn" v-on:click="showModal = false"></i>`

요고슨 x 아이콘을 클릭하면 쇼모달이 false 값이 되면서 모달모달창이 사라진다!





![2020-05-05 22-30-06 2020-05-05 22_30_17](https://user-images.githubusercontent.com/55340876/81071683-068f4700-8f20-11ea-9a77-3f8003b36c8e.gif)





헬퍼함수로 리팩토링 하는 것은 찬찬히 정리하는 걸로... 핳 🙂





---
---

# Reference  
- [Vue.js 중급 강좌 - 웹앱 제작으로 배워보는 Vue.js, ES6, Vuex](https://www.inflearn.com/course/vue-pwa-vue-js-%EC%A4%91%EA%B8%89/) 
- [모달 컴포넌트 Example](https://kr.vuejs.org/v2/examples/modal.html)