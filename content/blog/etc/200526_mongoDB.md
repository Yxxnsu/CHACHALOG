---
title: '๐ฅ [etc] MongoDB ์ฐ๊ฒฐํ๊ธฐ'
date: 2020-05-26 00:20:00
category: 'etc'
draft: false
showToc: true
---



# MongoDB ์ฐ๊ฒฐํ๊ธฐ

[MongoDB Cloud Database Solutions | MongoDB](https://www.mongodb.com/cloud)

ํ์ด์ง์์ ํ์๊ฐ์ ํ, ์ฒซ ํ์ด์ง๋ ์๋ก์ฝ๋กฌ ๋์จ๋ค!



![์คํฌ๋ฆฐ์ท 2020-05-26 ์คํ 4 54 55](https://user-images.githubusercontent.com/55340876/82875373-44f1b200-9f72-11ea-8f72-5b414d05a6c6.png)

์์ ์ด์  **Build a Cluster** ๋ฅผ ํด๋ฆญํด์ฃผ๊ณ ,



![์คํฌ๋ฆฐ์ท 2020-05-26 ์คํ 4 55 16](https://user-images.githubusercontent.com/55340876/82875368-43c08500-9f72-11ea-8b76-91a9ef791f37.png)



๋ฌด์กฐ๊ฑด **`FREE`** ์ด์ด์ฐ !!!!!!  
ํ๋ฆฌ๋ก **Create a cluster** ๋๋ฌ์ฃผ์.



![์คํฌ๋ฆฐ์ท 2020-05-26 ์คํ 4 55 48](https://user-images.githubusercontent.com/55340876/82875353-402cfe00-9f72-11ea-9153-99d8ad5f03e8.png)



์ ํ๋ฉด์์๋ **FREE** ์ธ์ง ํ์ธ ๊ผญ๊ผฎใฒ๊ผฌ๊ผฌ๊ณ ๊ผฎ๊ผญ!! ํด์ฃผ๊ณ  **Create Cluster** ํด๋ฆญํด์ฃผ์.



![2020-05-26 17-05-44 2020-05-26 17_05_57](https://user-images.githubusercontent.com/55340876/82876085-2fc95300-9f73-11ea-94a6-e2e8ccb45395.gif)

์๋ก์ฝ๋กฌ ์์ฑ์ด ๋๊ณ ์ด๋ฐ! ์๊ฐ์ด ์ซ ๊ฑธ๋ฆผ์ฃผ์.



**SECURITY > Network Access**

![์คํฌ๋ฆฐ์ท 2020-05-26 ์คํ 5 13 35](https://user-images.githubusercontent.com/55340876/82876762-4328ee00-9f74-11ea-86fa-7a25de444d7c.png)



**Add IP Address** ํด๋ฆญ!  

์ด๊ฑด ๋๋น ํด๋ผ์ฐ๋์์ ๋ด IP๋ฅผ ์ ๊ทผํด์ ๋ฐ์ดํฐ๋ฅผ ์๋ ฅํ๊ธฐ๋ ํ๊ณ  ๊ทธ๋ฐ์์ ํต์ ์ด ๋  ์ ์๊ฒ  
๋คํธ์ํฌ ์ฐํ ์ ๋ณด๋ฅผ ๋ฑ๋กํด์ค๋ค๊ณ  ์๊ฐํ๋ฉด ๋๋ค!  
์ด์ฒํผ ๋ฌด๋ฃ๊ธฐ๋ ํ๊ณ  ๊ทธ๋ฅ `ALLOW ACCESS FROM ANYWHERE` ๋๋ฌ์ ์ถ๊ฐํด์ฃผ์!



![2020-05-26 17-16-19 2020-05-26 17_17_44](https://user-images.githubusercontent.com/55340876/82877170-d530f680-9f74-11ea-99c0-833e98c8a69d.gif)





**SECURITY > Database Access**

๋ชฝ๊ณ ๋๋น์ ์ ์ํ  ์ ์๋ ๊ณ์ ์ ์์ฑํ๋ ํ์ด์ง!

![2020-05-26 17-22-21 2020-05-26 17_23_06](https://user-images.githubusercontent.com/55340876/82877765-951e4380-9f75-11ea-8ddd-e42baa12fdf0.gif)



`Read and write to any database` ๋ฅผ ์ ํํด์ฃผ๊ณ  ์์ด๋๋ ๋น๋ฒ์ ์๋ ฅํ ์์ฑํด์ค๋ค.  
๊ทธ๋ผ ์ฝ๊ธฐ ์ฐ๊ธฐ๊ฐ ๊ฐ๋ฅํ ๊ถํ์ด ์ฃผ์ด์ง ๊ณ์ ์ด ๋ฟ!!!



์ด์  ์๊น ์ด์ฌํ ์์ฑ์ค์ด์๋ Clusters ํญ์ผ๋ก ๋ค์ ๊ฐ์!



![2020-05-26 17-27-53 2020-05-26 17_28_46](https://user-images.githubusercontent.com/55340876/82878385-605ebc00-9f76-11ea-8f37-b8ea60348493.gif)



**CONNECT ํด๋ฆญ -> Connect your application ํด๋ฆญ > ์ฝ๋ ์นดํผ**!



์ด๊ฑฐ์ฌ ์นดํผํด์ ๋ฃ์ด์ฃผ๋ฉด ๋๋น๊ฐ ์ฐ๊ฒฐ๋๋ ๊ฒ!!



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

์ฌ๊ธฐ์

`'mongodb+srv://test:<password>@cluster0-xxxxx.mongodb.net/test?retryWrites=true&w=majority'`

`<password>` ๋ถ๋ถ์ ๋ด๊ฐ ์ค์ ํ ๋น๋ฐ๋ฒํธ๋ฅผ ๋ฃ์ด์ฃผ๋ฉด ๋๋ค!   
1234๋ฉด `test:1234` ์๋ก์ฝ๋กฌ!!



ํน์ ๋ชจ๋ฅด๋ ์ ์ฅํด์ฃผ๊ณ  ์๋ฒ ๊ป๋ค๊ฐ ๋ค์ ์คํํด์ ํ์ธํด์ฃผ์!  
๋๋ ์ ๊ณต๋ API ์๋ฒ(Swagger)๋ฅผ ์ด์ฉํด์ ํ์ธ์ ํด์ฃผ์๋ค.



<img width="464" alt="์คํฌ๋ฆฐ์ท 2020-05-26 ์คํ 5 40 34" src="https://user-images.githubusercontent.com/55340876/82879518-0232d880-9f78-11ea-8039-eb6fb6e29499.png">



ํฐ๋ฏธ๋์๋ ์ ์ฐํ๋๊ณ ๋ง!! ๊ทฃ๊ทฃ




---
---

# Reference  
- [Vue.js ๋์ฅ๋ด๊ธฐ - ์ค๋ฌด์ ํ์ํ ๋ชจ๋  ๊ฒ]([https://www.inflearn.com/course/vue-js-%EB%81%9D%EB%82%B4%EA%B8%B0-%EC%BA%A1%ED%8B%B4%ED%8C%90%EA%B5%90/](https://www.inflearn.com/course/vue-js-๋๋ด๊ธฐ-์บกํดํ๊ต/))