---
title: '✅ [Vue.js] B2B 랜딩페이지 프로젝트'
date: 2020-06-19 21:40:00
category: 'Vue.js'
draft: false 
showToc: true
---


# 이메일 유효성 검증

==**SignIn.vue**==

```html
<template>
  <div class="background">
    <div class="loginTitle">
      <span>로그인</span>
    </div>

    <form v-on:submit.prevent="onSubmit">
      <div class="inputContainer">
        <div class="emailInput">
          <label for="email">이메일</label>
          <input
            v-model="email"
            id="email"
            type="text"
            placeholder="이메일을 입력해주세요."
            autofocus
          />
        </div>
        <div class="passwordInput">
          <label for="password">비밀번호</label>
          <input
            v-model="password"
            id="password"
            type="password"
            placeholder="비밀번호를 입력해주세요."
          />
        </div>
      </div>

      <div class="infoBox">
        <span>비밀번호 찾기</span>
        <span>비회원 주문 조회하기</span>
      </div>

      <div class="signInBtn">
        <button v-bind:disabled="!isEmailValid" type="submit" class="button is-medium is-warning">
          로그인하기
        </button>
      </div>
    </form>

  </div>
</template>

<script>
import { validateEmail } from "../utills/validation";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  computed: {
    isEmailValid() {
      return validateEmail(this.email);
    }
  },
    // submit 이벤트
    onSubmit() {
      console.log(`email : ${this.email}`);
      console.log(`password : ${this.password}`);
    },
  }
};
</script>
```

이 때,  s
이메일 유효성 검사를 해주는 함수에 대해서는 재사용 성이 높으니 별도 파일로 분리를 해주었다.



==**src > utills > validation.js**==

```js
// 유효성 검증
function validateEmail(email) {
  const re = /^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/;
  return re.test(String(email).toLowerCase());
}

export { validateEmail };
```

[이메일 유효성 검증 관련 JS 스택오버플로우](https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript)



요로코롬 빼주고 사용하는 vue 파일에서 import 해준 뒤, 

`computed` 에 뿅!!!

```js
  computed: {
    isEmailValid() {
      return validateEmail(this.email);
    }
  },
```

로그인 화면에서 이메일 인풋에 아무것도 쓰지 않은 초기 상태면 하단 캡쳐처럼 `false` 값이 뜬다. 👇🏻



![스크린샷 2020-05-18 오전 12 43 04](https://user-images.githubusercontent.com/55340876/82153140-a776ee00-98a0-11ea-8739-ebf2148a4cab.png)



그렇다면 이제 로그인 버튼에다가  
button 태그의 disabled 속성을 맥여주고 조건을 걸어준다.

이 속성은 html에서 button 태그에 기본적으로 제공해주는 속성인데,  
해당 버튼이 비활성화됨을 명시한다!  
고로 사용자가 클릭할 수 없다는 말씀!!!  

일단 비활성활를 맥이고 특정 조건이 충족되면 다시 클릭이 되게끔 활성화를 시켜준다.



```html
      <div class="signInBtn">
        <button v-bind:disabled="!isEmailValid" type="submit" class="button is-medium is-warning">
          로그인하기
        </button>
      </div>
```

disabled 속성은 불리언(boolean) 속성을 갖는데  
불리언 속성은 해당 속성을 명시하지 않으면 자동으로 false 값을 갖고,  
명시를 해주면 자동으로 true 값을 가지게 된다.



`v-bind:disabled="!isEmailValid"`   
**유저 이메일 유효성이 true 가 되는 순간 버튼이 활성화가 된다.**



![2020-05-18 00-53-23 2020-05-18 00_53_54](https://user-images.githubusercontent.com/55340876/82153383-14d74e80-98a2-11ea-808a-4db552573498.gif)



추가를 쫌 해서  
`v-bind:disabled="!isEmailValid || !password"` 이런식으로 해주면  
이메일 유효성도 맞아야 하고 비밀번호도 입력이 되야 버튼이 활성화 된다.





---



# 유효성 검증에 따른 에러 및 style 변경



사실 손쉽게 유효성검증을 하기 위해 [VeeValidate](https://logaretm.github.io/vee-validate/) 라이브러리를 사용해보려고 했지만  
나는 아직 초보인데 너무 라이브러리에만 의지하는 것은 별로인 것 같아서 직접 구현해보려고 한다.



```html
        <div class="emailInput">
          <label for="email">이메일</label>
          <input
            v-model="email"
            id="email"
            type="text"
            placeholder="이메일을 입력해주세요."
            autofocus
            ref="emailInputStyle"
          />
          <span v-if="msg.email">{{ msg.email }}</span>
        </div>

        <div class="passwordInput">
          <label for="password">비밀번호</label>
          <input
            v-model="password"
            id="password"
            type="password"
            placeholder="비밀번호를 입력해주세요."
            ref="passwordInputStyle"
          />
          <span v-if="msg.password">{{ msg.password }}</span>
        </div>
```

 

`<span v-if="msg.email">{{ msg.email }}</span>`  
`<span v-if="msg.password">{{ msg.password }}</span>`  
**에러 메세지**가 나올 span 태그 부분과



`ref="emailInputStyle"`  
`ref="passwordInputStyle"`  

각 input 태그에는 조건에 따른 스타일 변경을 위해  
**DOM 접근을 위한** **ref** 를 맥여준다.



```js
<script>

export default {
  data() {
    return {
      email: "",
      password: "",
      msg: [],
    };
  },
  watch: {
    email(value) {
      this.email = value;
      this.validateEmail(value);
    },
    password(value) {
      this.password = value;
      this.validatePassword(value);
    }
  },
  methods: {
    // 유효성 검증
    validateEmail(value) {
      if (/^[\w-]+(\.[\w-]+)*@([a-z0-9-]+(\.[a-z0-9-]+)*?\.[a-z]{2,6}|(\d{1,3}\.){3}\d{1,3})(:\d{4})?$/.test(value)) {
        this.msg["email"] = "";
        this.$refs.emailInputStyle.style.border = '2px solid #41bfb9';
      } else {
        this.msg["email"] = "이메일을 정확히 입력해주세요";
        this.$refs.emailInputStyle.style.border = '2px solid indianred';
      }
    },
    validatePassword(value) {
      let difference = 8 - value.length;
      if (value.length < 8) {
        this.msg['password'] = `8자 이상 입력해주세요. (현재 ${difference}자 이상 입력 필수)`;
        this.$refs.passwordInputStyle.style.border = '2px solid indianred';
      } else {
        this.msg['password'] = '';
        this.$refs.passwordInputStyle.style.border = '2px solid #41bfb9';
      }
    }
  }
};
</script>
```

일단 에러 메시지를 위해  
data 에는 `msg: [],` 빈 배열로 세팅을 해준다.



실시간 변경되는 인풋 값을 지켜보는 감시자 역할인 `watch`  를 통해  
해당 데이터에 바인드하고,  
데이터에서 변경이 일어날 때마다 메소드 내부에 작성된 유효성 검증 기능을 실행하게끔 한다.



![2020-05-18 20-55-14 2020-05-18 20_55_49](https://user-images.githubusercontent.com/55340876/82210393-faf14680-9949-11ea-9d26-ef0f7d5ecfc3.gif)



**사실 코드를 너무 지저분하게 주먹구구식으로 작성한 것 같은데... (외몰롸?)**  
회원가입 페이지 유효성 검증 역시도 요 방식과 비슷하다!!





**Reference**
- [Vue.js에서 감시자를 사용하여 양식 입력 유효성 검사](https://blog.logrocket.com/form-input-validation-in-vue-js-using-watchers/)

---

# 전화번호 Input 숫자만 입력하기

```html
        <div class="phoneInput">
          <label for="phone1">휴대폰 번호 *</label>
          <div>
            <input v-model="phone1" id="phone1" type="text" v-on:keypress="checkNum" maxlength="3"/>
            <div class="element">-</div>
            <label for="phone2"></label>
            <input v-model="phone2" id="phone2" type="text" v-on:keypress="checkNum" maxlength="4"/>
            <div class="element">-</div>
            <label for="phone3"></label>
            <input v-model="phone3" id="phone3" type="text" v-on:keypress="checkNum" maxlength="4"/>
          </div>
        </div>
```

```js
  methods: {
        checkNum(e) {
      if(e.keyCode<48 || e.keyCode>57) {
        e.returnValue=false;
      }
    }
  }
```

![스크린샷 2020-05-20 오전 1 04 18](https://user-images.githubusercontent.com/55340876/82350073-d96d8900-9a35-11ea-9d28-fd8f8376ec4a.png)

이 때,  
`e.keyCode<48 || e.keyCode>57` 가 의미하는 것은  
키코드가 숫자 0보다 작거나 또는 키코드가 숫자 9보다 크다면,  
당연히 숫자 이외의 다른 키코드를 뜻하는 거니까 keypress 이벤트 조작을 비활성화 시킨다.

고로 숫자가 아니면 다른 키가 안먹힌다는 뜻!



`e.returnValue=false;` 은   
**웹페이지에서 일어난 이벤트(주로 사용자의 마우스, 키보드 사용정보)의 대한 정보를 갖고 있는 객체**로  
==**false 로 명시해줌으로써 그 기본 조작을 비활성화**== 시킨다.



---

# Input 한글 입력방지

**한글은 왜 입력됨?! ㅡㅡ**  

**한글은 왜 입력됨?! ㅡㅡ**  

**한글은 왜 입력됨?! ㅡㅡ**  

**한글은 왜 입력됨?! ㅡㅡ**  

**한글은 왜 입력됨?! ㅡㅡ**  

**한글은 왜 입력됨?! ㅡㅡ**  

**한글은 왜 입력됨?! ㅡㅡ**  

**한글은 왜 입력됨?! ㅡㅡ**  

**한글은 왜 입력됨?! ㅡㅡ**  



- [Vue - watch를 이용한 정규식 사용](https://kdinner.tistory.com/56)

한글 한자리가 계속 나오긴 하는데 다른데 클릭하면 사라지니까...   
일단 100% 만족스럽진 않지만 일단 이렇게 패쓰!   
추후 수정하자!!



```html
        <div class="phoneInput">
          <label for="phone1">휴대폰 번호 *</label>
          <div>
            <input
              v-model="phone1"
              id="phone1"
              type="text"
              v-on:keypress="checkNum"
              maxlength="3"
            />
            <div class="element">-</div>
            <label for="phone2"></label>
            <inputs
              v-model="phone2"
              id="phone2"
              type="text"
              v-on:keypress="checkNum"
              maxlength="4"
            />
            <div class="element">-</div>
            <label for="phone3"></label>
            <input
              v-model="phone3"
              id="phone3"
              type="text"
              v-on:keypress="checkNum"
              maxlength="4"
            />
          </div>
          <span v-if="msg.phone1 || msg.phone2 || msg.phone3">{{ msg.phone1 || msg.phone2 || msg.phone3 }}</span>
        </div>
```

```js
export default {
  data() {
    return {
      email: "",
      name: "",
      password: "",
      passwordConfirm: "",
      phone1: "",
      phone2: "",
      phone3: "",
      msg: [],
      checked1: false,
      checked2: false,
    };
  },
  
...
 
  watch: {

    ...
    
    phone1(value) {
      const reg = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
      if (reg.exec(value) !== null) {
        return (this.phone1 = this.phone1.slice(0, -1));
      }
    },
    phone2(value) {
      const reg = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
      if (reg.exec(value) !== null) {
        return (this.phone2 = this.phone2.slice(0, -1));
      }
    },
    phone3(value) {
      const reg = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
      if (reg.exec(value) !== null) {
        return (this.phone3 = this.phone3.slice(0, -1));
      }
    }
  },
```



---



# `<router-link>` 새 탭에서 열기



공식 문서에는  `<router-link>` a 태그 속성인 target="_blank" 안된다고 했는데...

![스크린샷 2020-05-20 오후 3 31 23](https://user-images.githubusercontent.com/55340876/82412656-fa25f500-9aae-11ea-84e9-dc3ea278a73a.png)



요 문서에서는 안된다카는데...되는디...?



<img width="671" alt="스크린샷 2020-05-20 오후 3 32 15" src="https://user-images.githubusercontent.com/55340876/82412712-16299680-9aaf-11ea-8ae6-1a176a149cb6.png">



외되? ㅋㅋㅋㅋㅋㅋㅋ... 기분탓으로 되는건가 했는데 되는디...? 머지...? 👀



**Reference**
- [`<router-link>` API 레퍼런스](https://router.vuejs.org/kr/api/#router-link)

---



# 이미지 품질 변경

실 서버에 사이트를 배포한 뒤 첫 로딩시에  
이미지 품질이 높을수록 로딩이 엄청 걸린다.  
때문에 이미지 파일의 품질을 낮춰줄 필요성이 있다!



[tinypng](https://tinypng.com/)

해당 사이트를 통해 파일을 몽땅구리 드래그 해준뒤 바뀐 품질로 다운로드 해서 사용해주자!!!



![스크린샷 2020-05-20 오후 5 17 37](https://user-images.githubusercontent.com/55340876/82422753-d1f1c280-9abd-11ea-80d0-e371d49d617d.png)



---



# Firebase Auth 연동

일단 파이어베이스 프로젝트를 새로 추가했으면,   
해당 프로젝트 터미널에서 설치를 먼저 진행해준다.

```
 npm install --save firebase
```



package.json 에서 제대로 설치 됬는가 확인!

<img width="426" alt="스크린샷 2020-05-21 오후 1 35 26" src="https://user-images.githubusercontent.com/55340876/82523698-ef7b6680-9b67-11ea-8b99-f224a86d81d7.png">



( 참고로 내 파이어베이스 프젝 권한은 현재 ==개발 관리자, Firebase 뷰어== 이다.)

![2020-05-21 14-04-17 2020-05-21 14_04_29](https://user-images.githubusercontent.com/55340876/82525326-0ae87080-9b6c-11ea-89b9-05736fa33c92.gif)



해당 프젝의 파베 Settings 로 넘어오면  
맨 하단에 `내 앱` 에서 `Firebase SDK snippet` 을 확인할 수 있다.

원하는 방법을 골라서 사용해주면 된다!



![스크린샷 2020-05-21 오후 2 10 10](https://user-images.githubusercontent.com/55340876/82525871-7d0d8500-9b6d-11ea-8ae5-c718db0b702c.png)



나는 CDN 을 택했고,

**public > index.htm**l `<body>` 태그 하단에 

```js
  <!-- The core Firebase JS SDK is always required and must be listed first -->
  <script src="https://www.gstatic.com/firebasejs/7.14.4/firebase-app.js"></script>
```

요 내용을 복붙한 후, 꼬물이 표시가 된 라이브러리는 클릭해서 추가적으로 다운로드를 해주었다.  

==예시==

```js
/*
 * FireBase의 설정 부분
 */
import firebase from 'firebase'

require("firebase/firestore");

const firebaseConfig = {
  apiKey: "여기에 api키가 자동 생성되있음",
  authDomain: "여기에 firebase domain이 자동 생성 되있음",
  databaseURL: "여기에 DB URL이 자동 생성 되있음",
  projectId: "여기에 프로젝트ID가 자동 생성 되있음",
  storageBucket: "여기에 storageBucket이 자동 생성 되있음",
  messagingSenderId: "여기에 messagingSenderId가 자동 생성 되있음",
  appId: "여기에 appID가 자동 생성 되있음"
};

//파이어베이스 초기 환경 설정
firebase.initializeApp(firebaseConfig)

//파이어베이스의 cloud firestore를 사용
const db = firebase.firestore();
```



**src > main.js** 

```js
import Vue from "vue";
import App from "./App.vue";
import { router } from "./router/index";
import store from "./store";
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import firebase from 'firebase'

Vue.use(Buefy);

Vue.config.productionTip = false;

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "API KEY",
  authDomain: "프로젝트ID.firebaseapp.com",
  databaseURL: "https://프로젝트ID.firebaseio.com",
  projectId: "프로젝트ID",
  storageBucket: "프로젝트ID.appspot.com",
  messagingSenderId: "messagingSenderId",
  appId: "appID"
};
// Initialize Firebase
// 파베 초기 환경 설정
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
```

import 구문 및 config 내용을 추가해준다!



---

# 이메일로 회원가입 하기

==이메일 회원가입 예시==

```js
firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(()=>{
	/*
	 * email과 비밀번호만을 user로 만들어 주는 것을 확장하는 파트,
     * 여기서는 user의 이름을 update하는 형식
     */
    var user = firebase.auth().currentUser;
    user.updateProfile({
		displayName: this.userName
	});
    this.$router.push('/');
}).catch(function(error) {
	// Handle Errors here.
	var errorCode = error.code;
	var errorMessage = error.message;
	// ...
	alert(errorMessage);
});
```



**src > views > SignUp.vue**

```js
<script>
import * as firebase from "firebase";
  
  ...
  
  methods: {
    // submit 이벤트
    onSubmit() {
     
    ...
    
      } else {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(() => {
            alert(`${this.name} 로 가입이 완료되었습니다!`);
            this.$router.push("/signin");
          })
          .catch(function(error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage + errorCode);
          });
      }
    },
      
   ...

</script>
```

근데 요로코롬만 하면 displayName 에 가입시 설정해준 이름이 들어가지 않는다.

**유저 정보를 업데이트 해주자! (미완)**

외않써?



---

# 로그인하기

==로그인 예시==

```js
firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(()=>{
	this.$router.push('/');
}).catch(function(error) {
	// Handle Errors here.
	var errorCode = error.code;
	var errorMessage = error.message;
	// ...
	alert(errorMessage);
});
```

==인증 상태 지속 유형 변경하기==

```js
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  .then(function() {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return firebase.auth().signInWithEmailAndPassword(email, password);
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  });
```



## 사용자 정보를 언제까지 유지할 것인가~~

기본적으로 파메 Auth 는 유저가 브라우저를 닫은 후에도 세션을 유지한다.  
뭐 이게 재방문 하거나 그럴때 간편하지만 경우의 수를 따져보자.



**세션 유지의 대한 불편함**  

- 민감 데이터 (로그아웃 까먹으면 우째?!)
- 공유 기기 (공동시설 : 도서관 등등)
- 익명이 아닌 계정
- 여러 탭에서의 다른 유저들의 로그인 허용



**인증 상태 지속 유형 3가지**   
(파베 인증 웹 세션은 단일 호스트 출처이며 단일 도메인 경우에만 유지된다.)

| 열거형                                   | 값        | 설명                                                         |
| :--------------------------------------- | --------- | ------------------------------------------------------------ |
| `firebase.auth.Auth.Persistence.LOCAL`   | `local`   | 브라우저 창을 닫혀도 상태가 유지됨. 삭제할라면 로그아웃 하거나 직접 삭제해줘야함. |
| `firebase.auth.Auth.Persistence.SESSION` | `session` | 현재 세션이나 탭에서만 유지됨. 유저가 탭이나 창을 닫으면 날라감. 웹 앱에만 적용. |
| `firebase.auth.Auth.Persistence.NONE`    | `none`    | 상태가 메모리에만 저장되고 창이나 활동을 새로고침하면 날라감. |



**src > views > SignIn.vue**

```js
<script>
import firebase from 'firebase'

  ...
  
  methods: {
    // submit 이벤트
    login() {
     
    ...
    
      } else {
        firebase
          .auth()
          .setPersistence(firebase.auth.Auth.Persistence.SESSION)
          .then(() => {
            console.log("####", this);
            return firebase
              .auth()
              .signInWithEmailAndPassword(this.email, this.password);
          })
          .then(() => {
            const user = firebase.auth().currentUser;
            console.log(user);
            alert(`로그인 완료 ${user.email}`);
            this.$router.push("/");
          })
          .catch(function(error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage + errorCode);
          });
      }
    
   ...

</script>
```



![스크린샷 2020-05-28 오후 1 35 00](https://user-images.githubusercontent.com/55340876/83099338-0a118a80-a0e8-11ea-81fc-b46b57e3fb5e.png)



로그인을 하면 요로코롬 세션에 저장이 뙇!  
회원가입에서 삽질을 많이 했더니... 코드는 비슷해서 로그인은 수월해뙇...  
다 처음 접해보는거라 어렵지만 요로코롬 하나하나씩 해결해나가니까 재밌닼ㅋㅋㅋㅋㅋ



**소셜로그인**도 나중에 추가적으로 구현해보자!  



---



# 인증 상태에 따른 버튼 조건분기 처리 & 로그아웃

하....  
이건 정말 하고나면 제일 쉬웠던건데 왜케 무한삽질을 했던건지...   
공식문서를 나중에 보면 이해가 가는데 처음 볼때는 너무 어렵다 ㅠㅠ 흑흑



## 사용자 확인하는 2가지 방법

1. Auth 에 리스너 설정하기 (강추)

   ```js
   firebase.auth().onAuthStateChanged(function(user) {
     if (user) {
       // User is signed in.
     } else {
       // No user is signed in.
     }
   });
   ```

2. currentUser 속성 이용

   ```js
   let user = firebase.auth().currentUser;
   
   if (user) {
     // User is signed in.
   } else {
     // No user is signed in.
   }
   ```



**src > components > NavBar.vue**

```html
<template>
...
					<a class="button is-light" v-if="isLogin" v-on:click="logout">
            LOG OUT
          </a>
          <a class="button is-light" v-else>
            <router-link to="signin">
              LOG IN
            </router-link>
          </a>
...
</template>

<script>
import * as firebase from "firebase/app";

export default {
  data() {
    return {
      isLogin: false
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(user => {
          alert("로그아웃 성공");
          this.$router.replace("/signin");
          return user;
        })
        .catch(function(error) {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage + errorCode);
        });
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    });
  }
};
</script>
```

![2020-05-28 14-17-05 2020-05-28 14_17_47](https://user-images.githubusercontent.com/55340876/83101759-07b22f00-a0ee-11ea-8aac-e19d8b74a518.gif)



### mounted

- el 속성에서 지정한 화면 요소에 인스턴스가 부착되고 나면 호출되는 단계
- template 속성에 정의한 화면 요소(DOM)에 접근할 수 있어 화면 요소를 제어하는 로직을 수행하기 좋은 단계



isLogin 기본 값을  false 로!  
**mounted** 에 유저 정보가 있다면 isLogin 을 true 로 하고,  
없다면 false 로 한다.  
true 라면 로그아웃 버튼을 / false 라면 로그인 버튼을 보여준다!!



로그아웃은  `firebase.auth().signOut()` 요거면 끝!



**근데 왜 새로고침하면 로그인 버튼이 잠깐 보였다가 로그아웃 버튼으로 돌아갈까...?!** 🤔 (미완)

일단 킵해두고 해결하는 걸로.....



# vuex 로 한곳에서 관리해보자! (미완)

이것도 일단 정리는 킵해두고 찬찬히 쓰는걸로... 흑흑  
(vuex 넘나 어려운것 흑흐극ㅎ그흐극흫그긓)





---

# 파이어베이스 모듈 에러 수정

개발을 하다가 보니 페이지를 새로고침 할때마다 정상 동작은 하지만

![스크린샷 2020-05-28 오후 1 51 56](https://user-images.githubusercontent.com/55340876/83100255-6675a980-a0ea-11ea-9876-6e626c3e0ade.png)



콘솔에 이놈이 자꾸 뜬다.  
내가 파베 모듈을 통으로 가져다 써서 생기는 거라고한다.  
각 컴포넌트에 필요한 모듈만 import 해서 써주도록 하자!



**src > main.js**



❌

```js
import firebase from "firebase";
```

⭕️

```js
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
```



안좋은 케이스로 쓰여진 import 구문들을 모두 바꾸어주자!!  
에러 안녀엉~👋🏻

---



# ‼️ `git pull -r` 습관화 & 에러 잘보자 & 포스푸쉬 조심 ‼️



![스크린샷 2020-05-28 오후 6 25 37](https://user-images.githubusercontent.com/55340876/83124043-a2bc0080-a110-11ea-901e-359444f2f30d.png)



혼자 일한다고 생각하면 절대절대 안된다!!  
협업에서 제일 중요한 것!!!!!

항상  `git pull -r` 부터 해서 풀 땡겨주고 > 커밋 > 푸쉬를 하도록!!!!

에러가 나면 잘 읽어보고 원인 파악을 한 후 해결방안을 모색하자!!!

포스 푸쉬 함부로 남용하지 말자!!!! 조심조심 손가락 조심좀 하자 나란새럼아... 흑흑



---

# Filters

필터는 콧수염 괄호를 이용해서 데이터를 표현하고 파이프를 이용해서  
필터 함수 이름만 넣어주게 되면  
데이터에 필터 함수를 돌려서 나온 결과를 화면에 뿌려주게 된다!



데이터 양식을 연결해줄때 유용하게 쓸 수 있다.



기본적인 필터 함수 예제를 살펴보자.

>  **.toFixed(num)**  : 소수점 아래 표기 자릿수(num)  

> **.replace()** : 문자열을 다른 문자열로 치환한 새로운 결과를 리턴  

> ```html
> <!-- 마지막에 “파이프”심볼(|)과 함께 추가되어야 합니다. -->
> 
> <!-- 중괄호 보간법 -->
> {{ message | capitalize }}
> 
> <!-- v-bind 표현 -->
> <div v-bind:id="rawId | formatId"></div>
> ```



# 통화 단위당 쉼표 표기



**Product.vue**

```html
          <p class="productPrice">{{data.price | currency}}원</p>
...

<script>
export default {
  filters: {
    currency: value => {
      if (!value) return "";
      return value.toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,")
    }
  },
  
 ...
  
</script>
```



이렇게 지역으로 따로 관리해도 되지만  
전역으로 관리하는 방법도 살펴보자.



**src > utils > filters.js**

```js
export function currency(value) {
  if (!value) return "";
  return value.toFixed(0).replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,");
}
```



**src > main.js**

```js
import Vue from "vue";
import App from "./App.vue";
import { router } from "./router/index";
import store from "./store";
import { currency } from './utils/filters' //import 추가

Vue.filter('currency', currency); // 추가

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

```



![스크린샷 2020-06-07 오후 9 53 31](https://user-images.githubusercontent.com/55340876/83969170-55f2d980-a909-11ea-98ef-e8fa487492e7.png)

결과는 동일하다!



---

**Reference**
- [필터 (공식문서)](https://kr.vuejs.org/v2/guide/filters.html)
- [뷰 필터]([https://joshua1988.github.io/vue-camp/syntax/filters.html#%ED%95%84%ED%84%B0-%EC%82%AC%EC%9A%A9-%EB%B0%A9%EB%B2%95](https://joshua1988.github.io/vue-camp/syntax/filters.html#필터-사용-방법))

---



# 목데이터를 가져와보자

일단 목데이터를 만들어서 저장을 해준다.

**src > api > data.json**

```json
json data 보따리
```



이제 vuex 를 통해 데이터를 가져와보자!

**store > index,js**

```js
import Vue from "vue";
import Vuex from "vuex";
// 1: 데이터 읽어오기
import ProductList from "../api/standardData.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productList: [] // 2: 저장소
  },
  mutations: {
    setDB(state, data) {
      // 3: state에 저장된 데이터 상태 변경시에 사용한다. data 변수를 db에 할당한다.
      state.productList = data;
    }
  },
  actions: {
    // 3.5 : actions 에서는 비동기 로직을 다룬다.
    getData({ commit }) {
      // 4: 컴포넌트의 methods 처럼 불러온다. mutation에 대한 commit 을 한다.
      const res = ProductList;
      commit("setDB", res); // ㄴcommit 할때, data.json의 데이터를 담은 변수를 전달한다.
    }
  },
  modules: {}
});

```



이제 해당 컴포넌트에서 헬퍼함수를 이용해서 불러오기!!!!

**src > components > Product.vue**

```js
<script>
import { mapActions, mapState } from "vuex";

export default {

  ...
  
  mounted() {
    this.testText = this.$route.params.title;
    this.getProductData();
  },
  computed: {
    ...mapState({
      // 1: getter 함수를 생성하는 mapState 헬퍼
      data: "productList" // ㄴ this.data 를 store.state.productList 에 매핑
    }),

  },
  methods: {
    ...mapActions({
      // 2: 컴포넌트 method를 store.dispatch 호출에 매핑하는 mapActions 헬퍼
      getProductData: "getData" // ㄴ this.getProductData() 을 $store.dispatch('getData') 에 매핑
    }),
  }
};
</script>
```



`<h1>{{ data }}</h1>` 바인딩을 해서 화면에 출력하면?  
json 형식의 데이터가 쪼로로로로로로로로롤ㅇ 뜬다..!



**Refrence**
- [[Vue.js|json] vuex 사용하기 & json파일 불러오기](https://jordino.tistory.com/23)
- [JSON으로 작업하기](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/JSON)

---



# json 데이터 접근시..
**"TypeError: Cannot read property '2' of undefined"**



json 데이터에서 배열안에 있는 객체중 title 에 접근하고 싶었다!!!



```json
// data 라는 변수에 저장된 json 데이터!

{
...
options : [
		{
			title : "타이틀1",
			inputType : "select",
		},
		{
			title : "타이틀2",
			inputType : "select",
		},
		{
			title : "타이틀3",
			inputType : "date",
		}
	],
}
```

예를 들면 이렇다 치자.  
`타이틀3` 에 접근하려고 `{{data.options[2].title}}` 을 해줬는데  
화면에는 잘 나타난다. 하지만?!

![스크린샷 2020-06-04 오후 2 54 46](https://user-images.githubusercontent.com/55340876/83720110-5f631400-a673-11ea-86da-9077b51c251c.png)



응~ 콘솔 타입에러~~  
상단에서 json 데이터를 비동기로 불러왔는데   
데이터가 존재하기 전에 랜더링 하려고 하니 타입에러가 떴지!



혼자 삽질을 하다가,  
하단처럼 데이터가 참이라는 조건을 걸어주니 에러가 말꼼히 사라졌다.  
목데이터를 import 해준거랑 상관없이 내가 직접 비동기 로직 처리를 해줬으면서 왜 나는 동기라고 생각하고  
에러가 나는지 의문을 품었는가?! 밥오밥오바오밥나무...  
(왜긴왜야 너가 잘 이해도 안하고 주먹구구식으로 짰으니 그렇지...쒹 )



```html
<label for="testDate" class="selectInput" v-if="data.options">
  {{data.options[2].title}}
</label>
```



혼자 해결본게 확신이 안서서 cto님께 여쭤보고 이해할 수 있었다..!  
라이프사이클이랑 비동기 계속 연습을 하자 ㅠㅠ



![스크린샷 2020-06-04 오후 2 57 04](https://user-images.githubusercontent.com/55340876/83720247-a9e49080-a673-11ea-9e63-4e2f880ccc63.png)

---

<br/>

**두번째 프젝 & PPT!!!**

![2020-07-03 12-58-43 2020-07-03 12_59_38](https://user-images.githubusercontent.com/55340876/86430385-144d2700-bd2d-11ea-8690-674f0fee0327.gif)

![2020-07-03 17-12-55 2020-07-03 17_14_19](https://user-images.githubusercontent.com/55340876/86447681-aadf0f80-bd50-11ea-9035-2b434e9c2a89.gif)
