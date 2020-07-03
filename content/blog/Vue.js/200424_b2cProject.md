---
title: '✅ [Vue.js] B2C 랜딩페이지 프로젝트'
date: 2020-04-24 21:40:00
category: 'Vue.js'
draft: false 
showToc: true
---



>- **cli 로 진행!!!**  
>
>- **포스팅에서는 컨텐츠의 내용들이 담긴 디테일한 코드들은 생략!!!**  

---

# vue-slick-carousel 적용

>**[vue-slick-carousel](https://github.com/gs-shop/vue-slick-carousel)**  
>
>사이트를 참고하여 설치를 진행한다.  

```
npm install vue-slick-carousel
```

적용할 vue 파일 script 밑에 import를 추가해주고,  
(`vue-slick-carousel-theme.css` 부분을 꼭 넣어줘야 dots 커스텀된 css 스타일 사용 가능!   
이걸 해주지 않으면 구식 스타일이 적용되어 나타난다.)  
components 부분에 `components: {VueSlickCarousel}` 꼭 넣어줘야 사용이 가능하다.  

**Home.vue**

```html
<script>
   import VueSlickCarousel from 'vue-slick-carousel'
   import 'vue-slick-carousel/dist/vue-slick-carousel.css'
   import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

   export default {
      components: {VueSlickCarousel},
      data() {
         return {
            carouselSettings: {
               dots: true,
               arrows: false,
               touchMove: true,
               dotsClass: 'slick-dots',
               autoplay: true,
               autoplaySpeed: 3000,
            },
         }
      }
   }
</script>
```

settings 관련한 Property 가 많지만 프로젝트에 적용된 내용만 설명을 하자면!

```js
  carouselSettings: {
      dots: true, //dots 슬라이드 이미지 밑에 쩜쩜쩜들 보여주냐
      arrows: false, //앞뒤로 슬라이드 지정가능한 화살표(> <) 보여주냐
      touchMove: true, //모바일 버전시 터치해서 움직이게 해주냐
      dotsClass: 'slick-dots', //슬라이드 도트표시 컨테이너의 클래스
      autoplay: true, //자동재생 할거냐
      autoplaySpeed: 3000, //자동재생 스피드 몇으로 할거냐
  },
```

이것저것 다른 Property 들을 적용해보면 쓸만한 것이 많다!  
요래 정의해준 놈들을

```html
<template>
  <div>
	<VueSlickCarousel class="carouselContainer" v-bind="carouselSettings">
            <div>각 이미지 내용들</div>
            <div>각 이미지 내용들</div>
            <div>각 이미지 내용들</div>
	</VueSlickCarousel>
  </div>
</template>
```

`<VueSlickCarousel>` 태그 안에 넣어준다.   
(나는 settings 내용을 별도 데이터로 밑에 빼주고 `v-bind` 디렉티브를 이용하여 내용들을 적용해주었다)

![2020-07-03 16-27-51 2020-07-03 16_27_58](https://user-images.githubusercontent.com/55340876/86444241-6e5ce500-bd4b-11ea-8be2-b610fd082ffb.gif)

---

# vue-typed-js 적용

>**[vue-typed-js](https://www.npmjs.com/package/vue-typed-js)**  
>  
>사이트를 참고하여 설치를 진행한다.

```
npm install vue-typed-js
```

캐러셀 라이브러리와 마찬가지로 진행을 하는데,  
요놈은 `main.js` 파일에 추가를 해주었다. (쓰는 것은 Home.vue)

**main.js**

```js
import Vue from 'vue'
import App from './App.vue'
import VueTypedJs from 'vue-typed-js'


Vue.use(VueTypedJs)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
```

main.js 에서 import를 해주었으니 전역에서 사용이 가능해진다.  
고로 Home.vue 에서는 따로 import 해줄게 없다는 것!!

적용한 Property 를 살펴보자.


**Home.vue**

```js
<script>
   export default {
      data() {
         return {
            fomesSubSettings: {
               smartBackspace: true,
               typeSpeed: 90, //타이핑 속도가 뭐냐
               startDelay: 1000, //처음 시작할때 딜레이 몇이냐
               backSpeed: 250, //뒤로 갈때 속도가 뭐냐
               backDelay: 900, //뒤로 갈때 딜레이 몇이냐
               loop: true, //반복하냐
               strings: ['포메스'], //타이핑할 문구
            },
         }
      }
   }
</script>
```

이제 요놈을 끌어다 적용해주자!!

```html
<template>
  <div>
    <vue-typed-js class="fomesSub" v-bind="fomesSubSettings">
      <span class="fomesSub">신작게임 놀이터, <span class="typing"></span></span>
    </vue-typed-js>
  </div>
</template>
```

요로코롬 해주면 결과는?


![2020-07-03 16-28-09 2020-07-03 16_28_19](https://user-images.githubusercontent.com/55340876/86444258-73219900-bd4b-11ea-977a-4d47f719c4ad.gif)

아주 신박하고 유용한 라이브러리다!! 호옹.... 👍🏻

---

# div 나열 순서 변경

브라우저 창을 줄이면 width 768 이하면 순서대로 배치된   
div 태그들의 순서가 바뀌어야한다.

>**[A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)**  
>
>갓FLEX 에 대해 설명을 참 잘해준 사이트이다. 참고해주자!  
>  
>![스크린샷 2020-07-03 오후 4 29 01](https://user-images.githubusercontent.com/55340876/86444259-73ba2f80-bd4b-11ea-8d77-c4732f6ff259.png)

일단 부모 태그에 `display: flex;` 를 주고,  
자식 태그에 `order: 배열순서에 해당하는 숫자;` 를 주면 된다.

내 머리는 기억력이 약하니까...태그는 크게 4개지만.. 🥺  
일단 어떻게 변경을 해야하는지 순서를 짜보고 들어갔다.


<img width="500" alt="스크린샷 2020-07-03 오후 2 51 52" src="https://user-images.githubusercontent.com/55340876/86444261-7452c600-bd4b-11ea-8075-2ad321f37886.png">


합!!

저런식으로 배치가 되야한다. 코드로 살펴보자!  
기존 순서가 이렇게 되어있는데~

**Home.vue**

```html
<template>
     <div class="content">
          <div class="contactBox"></div>
          <div class="carouselContainer"></div>
          <div class="cardContainer"></div>
          <div class="logoContainer"></div>
       	  <div class="copyright"></div>
     </div>
</template>
```


**Home.scss**

```scss
@media screen and (max-width: 768px) {

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0;

    .cardContainer {
      display: none;
    }

    .logoContainer {
      order: 1;
    }

    .carouselContainer {
      order: 2;
    }

    .contactBox {
      order: 3;
    }
    
    .copyright {
    order: 4;
  }
  
 }
}
```

자세한 css 코드는 넘나 방대한 양이기 때문에 배치 부분만 간추려서 쓴다.

![2020-07-03 16-29-25 2020-07-03 16_29_39](https://user-images.githubusercontent.com/55340876/86444266-74eb5c80-bd4b-11ea-8796-0a8596bf1e28.gif)


반응형은 할 때마다 느끼는 것이지만 역시 할 때마다 넘모 어렵다...

뭔가 좀 더 단계적으로 차츰차츰 줄이는 효과를 넣어줄 수 있었을텐데  
웹 브라우저 화면과 모바일 화면에서 뙇 보는 것에 포커스를 두었기 때문에  
디테일한 작업은 필요시 보수할 예정이다. 🤔  

css 부분에서 시간이 오래 소모되는 편이라  
미디어쿼리랑 배치 관련한 부분은 계속 반복 학습을 해야겠다!

---

# 반응형 웹 조건 분기

반응형 반응형 반응형!!!  
으쟈쟈쟈쟈쟞쟈쟈쟈쟈쟈쟈쟈쟈쟈ㅑ쨔쟈쟈쟈쟈!!

브라우저 창 width 768 이하면 모바일에서 볼 수 있도록 미디어쿼리 적용된 화면이 뙇!  
하고 떠야하면서 기존 가로 정렬만 되었던 3개의 카드가 캐러셀로 뽷! 변해야한다.

위 scss 파일에서 봤듯이,  

```scss
    .cardContainer {
      display: none;
    }
```

가로 정렬이던 카드들은 width 768 이하가 되면 화면에서 사라진다.  
내가 해결해야 할 부분은?!  
width 768 이상이었을때 같이 나오던 캐러셀 컨테이너를 아예 통으로 숨겨야하는 것!

`조건부 렌더링`을 해줘야한다!


**Home.vue**

```html
<template>
  <div>
	<VueSlickCarousel class="carouselContainer" v-bind="carouselSettings" v-if=>
            <div>각 이미지 내용들</div>
            <div>각 이미지 내용들</div>
            <div>각 이미지 내용들</div>
	</VueSlickCarousel>
  </div>
</template>
```

>**[MDN 'resize' 이벤트](https://developer.mozilla.org/ko/docs/Web/API/Window/resize_event)**  
>
>갓MDN 사이트에 설명을 참고하자.  
>  
>![스크린샷 2020-07-03 오후 4 30 10](https://user-images.githubusercontent.com/55340876/86445008-9ef14e80-bd4c-11ea-844f-9011d18f1f3d.png)

자스에 resize 라는 이벤트가 존재하는지도 몰랐다.  
역시 갓구글링... 🙏🏻

Vue의 watch 를 써서 브라우저 창을 줄였을 때   
widow 의 변화하는 width 값을 지켜보는 함수를 만들어야하나... 생각했었는데  
요 방법도 나중에 시도해보자!

일단 resize 이벤트를 적용하기로 했다.

**Home.vue**

```js
<script>
   export default {
      created() {
         this.windowSize = window.innerWidth
         window.addEventListener('resize', () => {
            this.windowSize = window.innerWidth
         })
      },
      data() {
         return {
            windowSize: '',
      },
      // methods: {
      //    windowWidth() {
      //       this.windowSize = window.innerWidth
      //    }
      // }
   }
</script>
```

(`this.windowSize = window.innerWidth` 이 부분을 따로 `methods` 로 빼서 하려다가   
괜히 코드가 길어지는 것 같아 `created` 에 한번에 넣어주었다.)

`windowSize: ''` 일단 값을 저장해줄 빈 저장소를 하나 만들어주고!!  
`this.windowSize = window.innerWidth` 로 저장소에 현재 width 값을 할당해준다.  
(`window.innerWidth` 는 현재 브라우저 내부의 width 값을 가르킨다.)  

`콘솔찍기1` 을 확인하면 새로고침시 현재 width 값이 찍히는 것을 볼 수 있다.

자,   
이제 `addEventListener` 를 통해 `resize` 이벤트를 이용하여   
브라우저 창의 width 값을 계속 바라보게 하고 그 변화되는 값을 다시 저장소에 할당을 해주면 된다.  
(고로 창 크기가 변화할때마다 그 width 값을 windowSize 저장소에 할당!)  

`콘솔찍기2` 로 확인을 해주면 창이 줄어들때마다 width 값을 찍히는 것을 볼 수 있다.


![스크린샷 2020-07-03 오후 4 45 14](https://user-images.githubusercontent.com/55340876/86445003-9d278b00-bd4c-11ea-9b8d-cd80a2bec853.png)


![2020-07-03 16-30-29 2020-07-03 16_30_44](https://user-images.githubusercontent.com/55340876/86445014-a0227b80-bd4c-11ea-89c4-c28e8631a5c7.gif)


이제 조건문을 이용하여 적용해주기만 하면 된다!  
`v-if` 디렉티브를 이용하면 간단하다.

**Home.vue**

```html
<template>
  <div>
	<VueSlickCarousel class="carouselContainer" v-bind="carouselSettings"
                      v-if="this.windowSize <= 768">
            <div>각 이미지 내용들</div>
            <div>각 이미지 내용들</div>
            <div>각 이미지 내용들</div>
	</VueSlickCarousel>
  </div>
</template>
```

`v-if="this.windowSize <= 768"`  
windowSize 저장소에 있는 브라우저의 width 값이   
768 보다 적거나 같을 때는(참) VueSlickCarousel 이 보이고,  
768보다 크면(거짓) VueSlickCarousel 은 화면에 안보이는 것.

>v-if 와 v-show 의 차이를 명확히 알고 어느 조건에서 쓰이면 적절한지를 생각해보자.  
>
>**-  `v-if` 는 조건에 따라서 컴포넌트가 실제로 제거되고 생성된다.**  
>**- `v-show` 는 css 속성이라고 생각하면 되는데 `display: none;` 효과를 준다.**  

개발자 도구로 확인하면 이해가 더 뙇!!! 된다.

![2020-07-03 16-31-10 2020-07-03 16_31_37](https://user-images.githubusercontent.com/55340876/86445018-a1ec3f00-bd4c-11ea-9fbb-f3778c1c6eed.gif)

(cardContainer 는 768 밑으로 내려갔을때 그냥 css 로 display: none 을 줌)

---

# og 태그

카카오톡이나 슬랙에서 외부 공유시 보이는 미리보기를 위해서 `og 태그` 를 설정해준다.  
(이번에 처음 접해본...🤭)

**index.html**

```html
  <link rel="icon" href="./fomes_web_favicon.ico">  <!--favicon-->
  <link rel="stylesheet" href="../src/assets/commons/reset.scss">  <!--scss-->
  
  <!--og 태그-->
  <meta property="og:title" content="포메스 - 신작게임 놀이터">
  <meta property="og:url" content="https://fomes-landing-dev.web.app/">
  <meta property="og:description" content="사전예약 필요없는 신작게임 플레이!">
  <meta property="og:image" content="https://i.imgur.com/NOkz33p.png">

<!--  <meta property="og:image:type" content="image/png">-->
<!--  <meta property="og:image:width" content="400">-->
<!--  <meta property="og:image:height" content="300">-->
```

---

# 폰트 적용

~~(별?눈? 효과는 제외)~~  

요고슨 뭐 기본 아입니까?!  
공통 scss 파일에 집어넣고 `font-family` 를 통해 불러오면 된다.

**scss 파일**

```scss
@font-face {
  font-family: 'NotoSansKR-Regular';
  font-display: auto;
  font-style: normal;
  font-weight: 400;
  src: url("../fonts/NotoSansKR-Regular.woff2") format('woff2'),
  url("../fonts/NotoSansKR-Regular.woff") format('woff'),
  url("../fonts/NotoSansKR-Regular.otf") format('opentype');
}

@font-face {
  font-family: 'NotoSansKR-Medium';
  font-display: auto;
  font-style: normal;
  font-weight: 500;
  src: url("../fonts/NotoSansKR-Medium.woff2") format('woff2'),
  url("../fonts/NotoSansKR-Medium.woff") format('woff'),
  url("../fonts/NotoSansKR-Medium.otf") format('opentype');
}

@font-face {
  font-family: 'NotoSansKR-Bold';
  font-display: auto;
  font-style: normal;
  font-weight: 700;
  src: url("../fonts/NotoSansKR-Bold.woff2") format('woff2'),
  url("../fonts/NotoSansKR-Bold.woff") format('woff'),
  url("../fonts/NotoSansKR-Bold.otf") format('opentype');
}
```

---

# 고생고생했던 모바일 스크롤시 문제

하... 이건 정말 초짜 중에 초짜 티를 낸...  
스크롤시 흰색 부분이 빼꼼하고 보이는..!  
html 태그 자체에 background 로 배경 이미지를 심어주었는데  
솔직히 아직도 정확한 원인 파악잌ㅋㅋㅋㅋㅋㅋㅋ

일단 고친 것은  
최상단 div 태그에 해당 스타일을 적용해주었다.

**Home.scss**

```scss
body {
  background-color: #00ABA7; //애교로 훼이크
}

.home {
  font-family: NotoSansKR-Regular, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-image: url("../assets/images/bg.png");
  background-repeat: no-repeat;
  background-position: center center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
```

이게 참... 아이폰이나 맥북 크롬 같은 경우에는 이중 스크롤이라던지,  
스크롤시 발생하는 잠깐의 흰 화면이라던지 그런게 안보이는데

안드로이드폰이나 윈도우 노트북상에 IE 에서는 이런 문제들이 보이더라.  
IE 뿌셔... 쓸데없이 디테일해.. 세로 이중스크롤 무엇...😡

---

# 후기 👩🏻‍💻

웹앱 랜딩페이지를 만들면서 라이브러리 사용을 처음 해보았다.  
부트캠프 팀프 때에는 라이브러리 없이 순수 css 로 구현을 하였는데 정말 힘들었던게 기억난다.   
메인 페이지 퍼블리싱만 하는데도 일주일이 걸렸었다.. (물론 그때는 지금보다 css 스킬이 넘모 초짜..)  
이번에 쓰게 되면서 와.. 아주 편한 신세계를 경험하였다.  
이래서 라이브러리를 만들고 사람들이 이용하는구나!!!

그냥 순수 css로 구현하였으면 시간이 많이 소모됬을텐데  
라이브러리로 요로코롬 빠른 시간안에 구현이 되다니... 😮 언벌리버블...

여러 시도를 해보려고 다른 효과도 줘보면서 팀원분들께 실시간 피드백도 받고!  
내가 만든 것을 스스로 보는 것과 다른 사람들이 바라보는 것에는 당연히 받아들이는 차이가 생긴다!  
작은 부분이라도 디테일하게 의견을 주셔서 '아 이렇게 생각할 수도 있겠구나' 싶으면서  
수정하는 과정 자체가 재밌었다.  
(내가 구현한 부분들은 아주 소소하고 작은 부분들이었지만... 핳)

B2C 랜딩페이지는 기능적인 부분보다는 퍼블리싱 부분이 많았지만,   
프론트엔드라면 당연히 디자인 부분도 간과할 수는 없다! (랜딩페이지인만큼 더더더더더더욱!!!)  
디자인 시안이 주어져있었고 이미지 부분들도 쉽게 다운받을 수 있었기 때문에  
이번 1차 프로젝트는 빠르게 진행할 수 있었다! 후하후하!! 

스스로 과할 수도 있고 그렇지 않을 수도 있지만  
일단 아이디어가 나오면 직접 구현을 해보고 여러 의견을 들어보자!  
여러가지 케이스를 시도해보고 더할 부분은 더하고 뺄 부분은 빼주고!!

**소듕한 피드백들은 나를 성장시킨다!!! 💪🏻🙏🏻**

1차 프로젝트를 무사히 마치고 팀원분들 앞에서 발표한 나으 첫 개발기 PPT!  
프젝과 함께 슬며시 올려본다. 핳

#### 👇🏻 포메이커스 B2C 랜딩페이지 PROJECT (Click!) 👇🏻
[![포메이커스 B2C 랜딩페이지](https://user-images.githubusercontent.com/55340876/84401366-26f8a280-ac3e-11ea-9e68-f55f288d10b3.gif)](https://fomes-playground.web.app/)

![2020-07-03 16-32-11 2020-07-03 16_32_46](https://user-images.githubusercontent.com/55340876/86445024-a3b60280-bd4c-11ea-9cf8-dfd80cb32125.gif)

