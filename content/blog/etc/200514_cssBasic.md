---
title: '🚥 [etc] CSS 기초'
date: 2020-05-14 00:20:00
category: 'etc'
draft: false
showToc: true
---

<!-- 임시 저장 글 -->
<!-- Draft Post -->
<!-- Draft Post -->
<!-- Draft Post -->
<!-- Draft Post -->
<!-- Draft Post -->


# border-box

<img width="447" alt="스크린샷 2020-05-14 오전 1 43 07" src="https://user-images.githubusercontent.com/55340876/81840654-4390b480-9584-11ea-9bb5-aa8f30a8c8e5.png">  
<img width="720" alt="스크린샷 2020-05-14 오전 1 43 25" src="https://user-images.githubusercontent.com/55340876/81840692-4ee3e000-9584-11ea-85f0-3e50121d7beb.png">



```scss
box-sizing: content-box;
```

`content-box` 로 지정을 하면 기존 요소의  width: 100px 과 heigh: 100px 은 유지하면서  
padding 과 border 값들이 추가로 더해져서 적용이 된다.  
(padding 과 border 를 얼마를 넣던 지정한 컨텐츠 크기는 변하지 않는다 )  



여기서 `box3` 에 box-sizing 을 변경하면?  

<img width="877" alt="스크린샷 2020-05-14 오전 1 44 02" src="https://user-images.githubusercontent.com/55340876/81840750-64f1a080-9584-11ea-9a78-0a4bcb1cdb09.png">  



요로코롬 `border-box` 로 하면  
기존 요소의 width 와 heigh 값 내부의 그냥 덮어져서(합해서) 적용이 된다.  
(padding 과 border 를 넣은만큼 지정한 컨텐츠 크기가 작아진다 )  



통상적으로 padding 을 넣는다는 건 박스 안에 여백을 만드는 것이기 때문에 대부분 `border-box` 를 사용한다.  



---



`static` `relative` `sticky` 는 그안에 들어있는 박스 안에서 변경이 일어나게 되고,  

`absolute` 이면 들어있는 근접한 부모 박스들 중에 static 이 아닌 박스에 위치변경이 일어나고,  

`fixed` 면 들어있는 박스랑 상관없이 뷰포트 즉 브라우저에서 보여주는 뷰에서 포지션 변경이 일어난다.  



# Apsolute & Static

<img width="497" alt="스크린샷 2020-05-14 오전 1 44 32" src="https://user-images.githubusercontent.com/55340876/81840824-763aad00-9584-11ea-9360-f2438f62ca23.png">  
<img width="863" alt="스크린샷 2020-05-14 오전 1 44 44" src="https://user-images.githubusercontent.com/55340876/81840843-7d61bb00-9584-11ea-964b-c40093924e83.png">  
<img width="379" alt="스크린샷 2020-05-14 오전 1 44 56" src="https://user-images.githubusercontent.com/55340876/81840865-85b9f600-9584-11ea-9b0d-bc02481c5d33.png">  



기본 소스코드는 이렇다. 예제를 보면서 살펴보자.    



```scss
.box1 .inner1 {
  position: relative;
  top: 30px;
  left: 100px;
}
```

<img width="379" alt="스크린샷 2020-05-14 오전 1 45 25" src="https://user-images.githubusercontent.com/55340876/81840907-95d1d580-9584-11ea-92fe-e58eb9d573c8.png">  



`relative` 는 **원래 있던 자리를 유지하면서 그 자리에서 상대적으로 우리가 지정한 top 과 left 만큼 이동**을 한다.  



---

```scss
.box2 .inner2 {
	position: absolute;
	top: 30px;
	left: 100px;
}
```

<img width="440" alt="스크린샷 2020-05-14 오전 1 45 48" src="https://user-images.githubusercontent.com/55340876/81840944-a3875b00-9584-11ea-8050-ef5edd628230.png">  

`absolute` 는 원래 있던 자리에서 쏙 빠져나와서 주변에 함께 있던 아이템들이 재배치가 일어난다.  

**근접한 부모중에 기본값인 static 이 아닌 부모의 기준에서 움직인다.**  

현 코드는 부모가 .box 인데 포지션을 따로 정의한게 아니라 기본값이 static 이 된다.  
그래서 위로 올라가면서 .outer 로 가고 걔도 기본값인 static 이니까   
최종 부모인 body 의 기준에 맞춰서 포지션이 변경된다.  



---



# Sticky & Fixed

<img width="472" alt="스크린샷 2020-05-14 오전 1 46 13" src="https://user-images.githubusercontent.com/55340876/81840983-b26e0d80-9584-11ea-92fd-5c4d25c443ac.png">
<img width="806" alt="스크린샷 2020-05-14 오전 1 46 27" src="https://user-images.githubusercontent.com/55340876/81841004-bb5edf00-9584-11ea-8fde-43e1a1eaaa1f.png">



sticky 는 있던 그 자리에 유지하면서 스크롤링이 될때 고정이 되고,  



<img width="806" alt="스크린샷 2020-05-14 오전 1 46 43" src="https://user-images.githubusercontent.com/55340876/81841021-c44fb080-9584-11ea-84ed-c207f18995b6.png">  



fixed 는 부모와는 상관없이 쏙 나와서 뷰포트 내에서 포지션이 변경된다.  



---



# 중간 정렬 팁!  

Flex 를 쓰면 중심축은 저스티파이 / 반대축 정렬은 얼라인-아이템을 쓰면 되지만!!!   
다른 방법도 알아보쟈.  



<img width="806" alt="스크린샷 2020-05-14 오전 1 47 11" src="https://user-images.githubusercontent.com/55340876/81841074-d598bd00-9584-11ea-8239-5cb3f9f7f1f8.png">  
<img width="806" alt="스크린샷 2020-05-14 오전 1 47 22" src="https://user-images.githubusercontent.com/55340876/81841088-db8e9e00-9584-11ea-862f-973963213a5d.png">  



기본 소스코드는 이렇다. 예제를 보면서 살펴보자.  



## margin: auto  

<img width="642" alt="스크린샷 2020-05-14 오전 1 47 57" src="https://user-images.githubusercontent.com/55340876/81841138-f06b3180-9584-11ea-9e25-1372acfd99cc.png">  

`div` 는 <u>블럭 레벨이라서 한줄에 하나씩만</u> 들어올 수 있다.     

**블럭 레벨의 경우는 자동적으로 margin 이 들어가 있다.**  

자동적으로 들어간 margin 은 보통 오른쪽에 들어가 있기 때문에 `margin: auto;` 를 넣어주면  
브라우저에서 자동적으로 수평으로 가운데 정렬을 해준다. (수직 가운데 정렬은 불가!!)  



## text-align: center  

<img width="648" alt="스크린샷 2020-05-14 오전 1 48 54" src="https://user-images.githubusercontent.com/55340876/81841213-1264b400-9585-11ea-9b67-4b30766c579d.png">  

텍스트가 아니더라도 다른 요소들을 가운데 정렬 해줄수 있지만  
블럭 레벨에는 한줄 하나 법칙이라 정상 적용이 안된다.  
대신 **블럭 레벨이 아닌 button 같은 인라인 블럭은 가운데 정렬이 먹혀진다.**  



## transform

이놈도 수직 가운데 정렬 불가!! 하다.  
그래서 `transform` 을 쓰기도 하는데 휴.... 쉬운게 없네!  

<img width="648" alt="스크린샷 2020-05-14 오전 1 49 04" src="https://user-images.githubusercontent.com/55340876/81841231-18f32b80-9585-11ea-8566-3aee3e017c6a.png">



## text-align

텍스트 가운데 정렬은 레알 그냥 text-align: center; 먹이면 됨!  
근데 여기서 텍스트 센터링 보면 정 가운데 정렬 안되지 않음?!  
이때는 꼼수를 쓰자.  
부모 heigh 가 100px 이었으니까 그만큼 line-heigh 를 똑같이 주면 정가운데 수직 정렬이 같이 된다!  

<img width="648" alt="스크린샷 2020-05-14 오전 1 49 39" src="https://user-images.githubusercontent.com/55340876/81841290-2d372880-9585-11ea-98be-fd4d7f4eef84.png">

요로코롬 높이에 따라 알아서 수직 가운데 정렬 해줌!  
이때 문제점은 `<br/>` 태그를 먹일 경우다.  

<img width="648" alt="스크린샷 2020-05-14 오전 1 49 47" src="https://user-images.githubusercontent.com/55340876/81841302-31fbdc80-9585-11ea-9b05-2d2c7e98e5bb.png">

요로코롬... 이건 뭐... 걍 한줄짜리에만 적용해주자 때잉쯧.  



---

# 백그라운드

![스크린샷 2020-05-14 오전 1 50 56](https://user-images.githubusercontent.com/55340876/81841409-5bb50380-9585-11ea-85cc-aedbefc476dd.png)



이렇게만 url 에서 이미지 불러오면 이미지가 옆으로 계속 반복된다.  
속성을 지정해주자.  



![2020-05-14 01-52-58 2020-05-14 01_53_29](https://user-images.githubusercontent.com/55340876/81841659-bd756d80-9585-11ea-9eb0-7b4391c59a65.gif)



너무 줄줄이 쓰니까 한줄 요약 해볼까?  



![스크린샷 2020-05-14 오전 1 55 03](https://user-images.githubusercontent.com/55340876/81841800-f01f6600-9585-11ea-93cd-21d867b90761.png)



빼앰!



---

# Transformation

무언가를 움직이고 원래 있던 모양을 변화시키기!!!



![스크린샷 2020-05-14 오전 2 01 25](https://user-images.githubusercontent.com/55340876/81842341-d2063580-9586-11ea-9e83-0561d62239b5.png)  

![스크린샷 2020-05-14 오전 2 00 48](https://user-images.githubusercontent.com/55340876/81842290-bc910b80-9586-11ea-8b19-f7fbd35c11c6.png)



```scss
transform: translateX(100px); // x축 오른쪽 방향으로 100px 이동

transform: translate(50px, -20px); // x축 오른쪽 방향으로 50px, y축 위 방향으로 -20px 이동

transform: scale(1.2); // 1.2배 커짐

transform: rotate(45deg); // 돌아감
```

뭐... 한줄 작성도 가능허다!  



![스크린샷 2020-05-14 오전 2 04 39](https://user-images.githubusercontent.com/55340876/81842624-45a84280-9587-11ea-9e50-139e8aa59eaa.png)



---



# 애니메이션

![스크린샷 2020-05-14 오전 2 05 24](https://user-images.githubusercontent.com/55340876/81842681-607ab700-9587-11ea-90ab-e0cfc1a7838c.png)



호버는 뭐.. 워낙 기본이라 핳!!!  
트랜지션으로 스무디하게 만드는 법이나 배워보자.  



![2020-05-14 02-07-57 2020-05-14 02_08_10](https://user-images.githubusercontent.com/55340876/81842908-c7986b80-9587-11ea-88e9-21032ac03425.gif)



```scss
transition: background-color 300ms linear;
```

요래 한죽 요약해줘도 됨.



![2020-05-14 02-10-11 2020-05-14 02_10_27](https://user-images.githubusercontent.com/55340876/81843109-19d98c80-9588-11ea-8cee-dfc698c665b1.gif)



`linear` : 일정한 속도로 

`ease-in-out` : 드어갈때 스무스 -> 끝에서 부드럽

`ease-in` : 들어갈때만 스무스

`step` : 스텝 밟는것처럼 뚠뚠둔 딴다나닫나

`cubic-bezier` : 사용자 정의 (웹사이트 통해서 보자)



![2020-05-14 02-15-19 2020-05-14 02_15_38](https://user-images.githubusercontent.com/55340876/81843619-d2073500-9588-11ea-839b-127103ae7a5f.gif)

<br/>


---
---

# Reference  
- [드림코딩(유료)](https://academy.dream-coding.com/courses/portfolio)