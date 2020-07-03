---
title: '🚥 [etc] MongoDB 연결하기'
date: 2020-05-26 00:20:00
category: 'etc'
draft: false
showToc: true
---



# MongoDB 연결하기

[MongoDB Cloud Database Solutions | MongoDB](https://www.mongodb.com/cloud)

페이지에서 회원가입 후, 첫 페이지는 요로코롬 나온다!



![스크린샷 2020-05-26 오후 4 54 55](https://user-images.githubusercontent.com/55340876/82875373-44f1b200-9f72-11ea-8f72-5b414d05a6c6.png)

자자 이제 **Build a Cluster** 를 클릭해주고,



![스크린샷 2020-05-26 오후 4 55 16](https://user-images.githubusercontent.com/55340876/82875368-43c08500-9f72-11ea-8b76-91a9ef791f37.png)



무조건 **`FREE`** 초이쓰 !!!!!!  
프리로 **Create a cluster** 눌러주자.



![스크린샷 2020-05-26 오후 4 55 48](https://user-images.githubusercontent.com/55340876/82875353-402cfe00-9f72-11ea-9153-99d8ad5f03e8.png)



요 화면에서도 **FREE** 인지 확인 꼭꼮ㄲ꼬꼬고꼮꼭!! 해주고 **Create Cluster** 클릭해주자.



![2020-05-26 17-05-44 2020-05-26 17_05_57](https://user-images.githubusercontent.com/55340876/82876085-2fc95300-9f73-11ea-94a6-e2e8ccb45395.gif)

요로코롬 생성이 되고이따! 시간이 쫌 걸림주의.



**SECURITY > Network Access**

![스크린샷 2020-05-26 오후 5 13 35](https://user-images.githubusercontent.com/55340876/82876762-4328ee00-9f74-11ea-86fa-7a25de444d7c.png)



**Add IP Address** 클릭!  

이건 디비 클라우드에서 내 IP를 접근해서 데이터를 입력하기도 하고 그런식의 통신이 될 수 있게  
네트워크 우회 정보를 등록해준다고 생각하면 된다!  
어처피 무료기도 하고 그냥 `ALLOW ACCESS FROM ANYWHERE` 눌러서 추가해주자!



![2020-05-26 17-16-19 2020-05-26 17_17_44](https://user-images.githubusercontent.com/55340876/82877170-d530f680-9f74-11ea-99c0-833e98c8a69d.gif)





**SECURITY > Database Access**

몽고디비에 접속할 수 있는 계정을 생성하는 페이지!

![2020-05-26 17-22-21 2020-05-26 17_23_06](https://user-images.githubusercontent.com/55340876/82877765-951e4380-9f75-11ea-8ddd-e42baa12fdf0.gif)



`Read and write to any database` 를 선택해주고 아이디랑 비번을 입력후 생성해준다.  
그럼 읽기 쓰기가 가능한 권한이 주어진 계정이 뿜!!!



이제 아까 열심히 생성중이었던 Clusters 탭으로 다시 가자!



![2020-05-26 17-27-53 2020-05-26 17_28_46](https://user-images.githubusercontent.com/55340876/82878385-605ebc00-9f76-11ea-8f37-b8ea60348493.gif)



**CONNECT 클릭 -> Connect your application 클릭 > 코드 카피**!



이거슬 카피해서 넣어주면 디비가 연결되는 것!!



**app.js**

```js
// mongo db
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongoose.connect(
  'mongodb+srv://test:<password>@cluster0-xxxxx.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
  },
);
mongoose.Promise = global.Promise;
```

여기서

`'mongodb+srv://test:<password>@cluster0-xxxxx.mongodb.net/test?retryWrites=true&w=majority'`

`<password>` 부분에 내가 설정한 비밀번호를 넣어주면 된다!   
1234면 `test:1234` 요로코롬!!



혹시 모르니 저장해주고 서버 껐다가 다시 실행해서 확인해주자!  
나는 제공된 API 서버(Swagger)를 이용해서 확인을 해주었다.



<img width="464" alt="스크린샷 2020-05-26 오후 5 40 34" src="https://user-images.githubusercontent.com/55340876/82879518-0232d880-9f78-11ea-8039-eb6fb6e29499.png">



터미널에도 잘 찍히는고만!! 귣귣




---
---

# Reference  
- [Vue.js 끝장내기 - 실무에 필요한 모든 것]([https://www.inflearn.com/course/vue-js-%EB%81%9D%EB%82%B4%EA%B8%B0-%EC%BA%A1%ED%8B%B4%ED%8C%90%EA%B5%90/](https://www.inflearn.com/course/vue-js-끝내기-캡틴판교/))