---
title: '✅ [Vue.js] 컴포넌트끼리의 데이터 전달'
date: 2020-04-14 21:24:00
category: 'Vue.js'
draft: false 
showToc: true
---



# 컴포넌트란?

![스크린샷 2020-07-03 오후 5 37 50](https://user-images.githubusercontent.com/55340876/86450033-ecbd8500-bd53-11ea-8bad-8ecc98b9feec.png)

>화면의 구조를 모듈별로 나눈 것


헤더, 섹션, 사이드바 등 각각의 작은 모듈들로 쪼개는 것이다.  
쪼개는 모듈들을 우측 이미지처럼 트리 형태로 묶을 수 있는데,  
맨 상위가 전체 페이지. 그 밑에가 각각 헤더, 본문, 사이드바 등을 의미하고  
그 아래 있는 것들이 본문 아래 있는 또 다른 element들을 의미한다.  
각각 하나를 컴포넌트라고 한다.

vue.js에서 제공하는 컴포넌트 구조는 크게 3가지로 이루어진다.
- HTML : 템플릿. 화면에 출력되는 부분.
- JS : 컴포넌트의 로직이 들어가는 부분.
- CSS : 스타일이 어떻게 표현될지 (색상, 수치 정보 등)

vue.js 에서는 **vue** 라는 확장자를 제공하고,  
이 확장자를 가진 파일을 컴포넌트 파일이라고 한다.

# 부모-자식 컴포넌트의 관계

![스크린샷 2020-07-03 오후 5 38 01](https://user-images.githubusercontent.com/55340876/86450047-f2b36600-bd53-11ea-9c49-6df2c5518a5c.png)

뷰에서의 컴포넌트는 각각 유효 범위를 갖고 있기 때문에 직접 다른 컴포넌트의 값을 참조할 수 없다.  
데이터 전달 방식을 알아보자.

- 상위(부모) 컴포넌트에서 하위(자식) 컴포넌트로는 **props** 라는 속성을 전달한다.
- 하위(자식) 컴포넌트에서 상위(부모) 컴포넌트로는 **이벤트**만! 전달할 수 있다.

## 상위 -> 하위 컴포넌트로 데이터 전달하기

>**props는 상위 -> 하위 컴포넌트로 데이터를 전달할 때 사용하는 속성이다.**  

props 속성을 사용하려면 하위 컴포넌트의 속성을 정의해야 하고,

```js
Vue.component('child-component', {
	props: ['props 속성 이름'],
});
```

상위 컴포넌트의 HTML 코드에 등록된 child-component 태그에 **v-bind** 속성을 추가한다.  

```html
<child-component v-bind:props 속성 이름="상위 컴포넌트의 data 속성"></child-component>
```

1. v-bind 속성 왼쪽 값으로 하위 컴포넌트에서 정의한 props 속성을 넣는다.  
2. 오른쪽 값으로 하위 컴포넌트에 전달할 상위 컴포넌트의 data 속성을 지정한다.  

감이 안오면 예제를 살펴보자.

```html
    <div id="app">
        <child-component v-bind:propsdata="message"></child-component>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.2/dist/vue.js"></script>
    <script>
        
        Vue.component('child-component', {
            props: ['propsdata'],
            template: '<p>{{propsdata}}</p>'
        });

        new Vue({ 
            el: '#app',
            data: {
                message: '잘할수있다'
            }
        });

    </script>
```

![스크린샷 2020-07-03 오후 5 38 16](https://user-images.githubusercontent.com/55340876/86450076-fb0ba100-bd53-11ea-85a0-2c033518af9f.png)

상단 코드에서는 딱히 부모 컴포넌트를 지정하지 않고 자식만 전역 컴포넌트로 등록했다.  
하지만 props 전달이 된다?!  
그것은 컴포넌트를 등록함과 동시에 뷰 인스턴스 자체가 상위 컴포넌트가 되었기 때문이다.

인스턴스에 새로운 컴포넌트를 등록하면 기존 컴포넌트는 상위(부모) 컴포넌트가 되고,  
새로 등록된 컴포넌트는 하위(자식) 컴포넌트가 된다.  
(새 컴포넌트를 등록한 인스턴스를 **최상위 컴포넌트** 라고도 부른다.  

## 하위 -> 상위 컴포넌트로 이벤트 전달하기

> 이벤트를 발생시켜(event emit) 발생시켜 상위 컴포넌트에 신호를 보낸다.  
부모는 자식의 특정 이벤트가 발생하기를 기다리고 있다가 자식에게서 이벤트가 발생하면  
부모 컴포넌트에서 해당 이벤트를 수신하여 컴포넌트의 메서드를 호출한다.  

_뷰의 단방향 데이터 흐름에 어긋나기 때문에 하위 -> 상위 컴포넌트의 데이터 전달은 다루지 않는다_  
_혹시라도 그럴 일이 있다면 이벤트 버스(event bus) 를 이용하는데 그건 나중에 담아보자...큽..  

```js
//이벤트 발생
this.$emit('이벤트명'); 
```

```html
<!--이벤트 수신-->
<child-component v-on:이벤트명="상위 컴포넌트의 메서드명"></child-component>
```

`$emit()` 을 호출하면 괄호 안에 정의된 이벤트가 발생한다.  
일반적으로 `$emit()`을 호출하는 위치는 자식 컴포넌트의 특정 메서드 내부이다.  
따라서 여기서 `this` 는 자식 컴포넌트를 가리킨다.

호출한 이벤트는 자식 컴포넌트를 등록하는 태그(부모 컴포넌트의 template 속성에 위치)에서 **v-on:** 으로 받는다.  
자식에서 발생한 이벤트명은 v-on: 속성에 지정하고,  
속성의 값에 이벤트가 발생했을 때 호출될 부모 컴포넌트의 메서드를 지정한다.

```html
    <div id="app">
      <child-component v-on:show-log="printText"></child-component>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.2/dist/vue.js"></script>
    <script>
      Vue.component('child-component', {
        template: '<button v-on:click="showLog">show</button>',
        methods: {
          showLog: function() {
            this.$emit('show-log');
          }
        }
      });

      new Vue({
        el: '#app',
        data: {
          message: 'Hello Vue! passed from Parent Component'
        },
        methods: {
          printText: function() {
            console.log("received an event");
          }
        }
      });
    </script>
```

[show] 버튼을 클릭하면 클릭 이벤트를 발생시키고,  
발생한 이벤트로 부모의 printText() 메서드를 실행시킨다.

![2020-07-03 17-38-37 2020-07-03 17_38_47](https://user-images.githubusercontent.com/55340876/86450162-12e32500-bd54-11ea-99ff-a1f71466de9b.gif)

이와 같은 방식으로 자식에서 부모로 신호를 올려보내면  
부모의 메소드를 실행할 수도 있고, 자식 컴포넌트로 내려보내는 props 값을 조정할 수도 있다.


## 같은 레벨 컴포넌트끼리의 전달 (이벤트 버스)



부모 자식 관계의 컴포넌트가 아니라 같은 레벨 컴포넌트끼리의 통신은  
기본적인 고유 유효 범위 때문에  
하위에서 공통 상위 컴포넌트로 이벤트 전달 -> 공통 상위 컴포넌트에서 2개의 하위 컴포넌트에 props로 전달  
해야한다.

하지만 이런 방식은 상위 컴포넌트가 필요 없음에도  
같은 레벨 컴포넌트끼리의 통신을 위해 강제로 상위 컴포넌트를 생성해야할 수 있다.  

이것을 해결하기 위해 나온 것이 **이벤트 버스**이다.

![스크린샷 2020-07-03 오후 5 39 12](https://user-images.githubusercontent.com/55340876/86450195-1ecee700-bd54-11ea-92d9-fde13d40429c.png)

> **이벤트 버스 (event bus) 란?**  
같은 레벨 2개의 컴포넌트 간에 데이터를 주고받을 수 있는 방법.  
상위 - 하위 관계를 유지하고 있지 않아도 데이터를 한 컴포넌트에서 다른 컴포넌트로 전달 가능.  

이벤트 버스를 구현하려면,  
애플리케이션 로직을 담는 인스턴스완 별개로  
1. 새로운 인스턴스 1개 생성  
2. 새 인스턴스를 이용하여 이벤트를 보내고 받기  
3. 보내는 컴포넌트에서는 `.$emit()`  
  받는 컴포넌트에서는 `.$on()` 구현.  


```js
//이벤트 버스를 위한 추가 인스턴스 1개 생성
let eventBus = new Vue();
```

```js
//이벤트를 보내는 컴포넌트
methods: {
  메서드명: function() {
    eventBus.$emit('이벤트명', 데이터);
  }
}
```

```js
//이벤트를 받는 컴포넌트
methods: {
  created: function() {
    eventBus.$on('이벤트명', function(데이터) {
      ...
    });
  }
}
```

예제를 살펴보자.

```html
    <div id="app">
        <child-component></child-component>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.2/dist/vue.js"></script>
    <!--구현-->
    <script>
        let eventBus = new Vue();

        Vue.component('child-component', {
            template: '<div>하위 컴포넌트 영역.<br><button v-on:click="showLog">클릭꾸</button></div>',
            methods: {
                showLog: function () {
                    eventBus.$emit('triggerEventBus', 100);
                }
            }
        });

        let app = new Vue({
            el: '#app',
            created: function () {
                eventBus.$on('triggerEventBus', function (value) {
                    console.log('이벤트 전달받음. 전달받은 값 : ', value);
                });
            }
        });
    </script>
```

![2020-07-03 17-39-30 2020-07-03 17_39_41](https://user-images.githubusercontent.com/55340876/86450254-3312e400-bd54-11ea-8f64-526a726cd953.gif)


이벤트 버스를 활용하면 props 속성을 이용하지 않아도  
원하는 컴포넌트 간에 직접적으로 데이터 전달이 가능해서 편리하다.

하지만 컴포넌트가 많아지면 어디서 어디로 보냈는지 관리가 안되는 문제가 생긴다.  

요 문제 해결을 위해서는 **뷰엑스(Vuex)** 라는 **상태관리 도구**가 필요한데  
이것에 대해서는 나중에 찬찬히 공부해보자!

---
---

**Reference**
- (도서) Do it! Vue.js 입문 - 장기효 지음
- [인프런 - 실습 UI 개발로 배워보는 순수 javascript 와 VueJS 개발](https://www.inflearn.com/course/%EC%88%9C%EC%88%98js-vuejs-%EA%B0%9C%EB%B0%9C-%EA%B0%95%EC%A2%8C/dashboard)
