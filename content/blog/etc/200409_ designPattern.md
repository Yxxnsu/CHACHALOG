---
title: '🚥 [etc] MVVM 패턴과 MVC 패턴'
date: 2020-04-11 00:20:00
category: 'etc'
draft: false
showToc: true
---



# MVVM 패턴

<img width="700" alt="스크린샷 2020-07-03 오후 2 51 52" src="https://user-images.githubusercontent.com/55340876/86436341-0a332480-bd3d-11ea-85e8-8e830f7dfe76.png">

View-Model은 Model 과 비슷하지만 조금 다른 역할을 하고 있다.  

구조상으로 보면 Model 과 View 사이에 위치하며,  
Model 로부터 어떤 데이터를 가져오는데 그 데이터는 View 에 적합한 형태의 데이터로 가공된다.  
View-Model 이 변경될 때마다 자동으로 그것과 연결되어 있는 View 화면에 즉시 반영이 된다.  

그렇기 때문에 Model 보다는 좀 더 적극적으로 View 에 적합한 Model 이라고 보면 된다.  
그래서 **View-Model** !!!  

하나의 View 에는 하나의 View-Model 이 1:1로 매칭되어 있다.  
View 가 많을 경우에는 여러개의 View-Model 이 구성되는 것!  

---




# MVC 패턴

<img width="700" alt="스크린샷 2020-07-03 오후 2 51 52" src="https://user-images.githubusercontent.com/55340876/86436406-2767f300-bd3d-11ea-869d-cef9df3e6786.png">

Model - View - Controller 의 약자  

## Model 

데이터를 관리하는 역할  

- 데이터 베이스에 있는 데이터를 또다른 객체에게 전달  
- 외부 객체로부터 입력 데이터를 받아 그 데이터를 데이터 베이스에 전달  

<br/>

**웹 프론트에서 model의 역할은?**  

데이터 베이스에 직접 접근하지 않고,   
API 형태로 접근한다.  

- API 를 통해 데이터를 가져와 그 데이터를 다른 객체에게 전달  
- 외부 객체로부터 데이터를 입력 받으면 그 데이터를 백엔드 API 를 통해서 호출하는 역할을 한다  

## View

Model 의 데이터를 화면에 그리는 역할 (보통은 html, css, js 로 구현)  
사용자가 입력한 데이터를 처리하는 역할  

- 사용자가 화면을 통해서 입력을 하면 View 는 입력 이벤트를 받아 입력된 값을 다른 객체에게 전달하는 역할을 한다.  
  (화면을 관리하는 역할)  

## Controller

Model 과 View 를 연결해주는 역할  

- Model로부터 데이터를 가져오고 가져온 데이터를 가지고 View 에게 전달  
- View 로부터 사용자 입력 데이터를 얻고 그 데이터를 Model 에게 전달  



---
---

# Reference  
- [인프런 - 실습 UI 개발로 배워보는 순수 javascript 와 VueJS 개발](https://www.inflearn.com/course/%EC%88%9C%EC%88%98js-vuejs-%EA%B0%9C%EB%B0%9C-%EA%B0%95%EC%A2%8C/dashboard)
