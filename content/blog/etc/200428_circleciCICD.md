---
title: '๐ฅ [etc] CircleCI - CD ๋ถ์ด๊ธฐ'
date: 2020-04-28 00:20:00
category: 'etc'
draft: false
showToc: true
---



<img width="700" alt="แแณแแณแแตแซแแฃแบ 2020-07-03 แแฉแแฎ 2 51 52" src="https://user-images.githubusercontent.com/55340876/86436490-51211a00-bd3d-11ea-980a-9b0055a31eca.png">


์ด์ ์ ์ด์ด์ ์ค๋์ CD๋ฅผ ๋ถ์ฌ๋ณด์๋ค.

๋๋ ๋ชจ๋ฅด๋๊ฒ ์์ง ๋๋ฌด ๋ง...  
์ฃ์ก์ค๋ฝ๊ฒ๋ ๋๋ฌด*3 ๋ง์์ ๋ค์ผ๋ฉด์๋ ์ผ์? ์ค์? ์ญ?  
๐ฅบ๐ฅบ๐ฅบ๐ฅบ๐ฅบ๐ฅบ๐ฅบ๐ฅบ๐ฅบ๐ฅบ  

<img width="400" alt="แแณแแณแแตแซแแฃแบ 2020-07-03 แแฉแแฎ 2 51 52" src="https://user-images.githubusercontent.com/55340876/86436866-21264680-bd3e-11ea-8158-d991cc073f5d.png">



์ด์ฌํ ์ค๋ชํด์ฃผ์  ์๋๋ฅด๊ป ๊ฐ์ฌํ ๋ง์ ํ๊ณ  (๋ฆฌ์คํใ!!!!!!! ๐๐ป)  
๋ธ๋ก๊ทธ๋ฅผ ์ ๋ฆฌํ๋ฉด์ ๋ค์ ๋์๊ฒจ๋ณด์!!  

# CD ๋ฅผ ๋ถ์ฌ๋ณด์!

> **CircleCI๋ฅผ ์ฌ์ฉํ์ฌ Firebase ํธ์คํ์ ๋ฐฐํฌํ๋ ๋ฐฉ๋ฒ**  

(์ผ๋จ ํ์์  DEV ์ชฝ์ firebase ํธ์คํ์์ ์๋ ๋ฐฐํฌ๊น์ง ๋ง์น ์ํ + ์ด์  CI๋ก build ๋ถ์ด๋ ๊ฒ๊น์ง ํจ)  
์ฌ๊ธฐ์๋ถํฐ ์์ํ์๋ฉด!!

---

## firebase token ๊ฒํ๊ธฐ

์น์ฑ์ ๊ณ์ ์ ๋ฐฐํฌ ํ  ์ ์๋๋ก Firebase ํ ํฐ์ด ํ์ํ๋ค.   
CircleCI์ Firebase ํ๋ก์ ํธ์ ๋ํ ์ก์ธ์ค ๊ถํ์ ๋ถ์ฌํ์ง ์์๋ค.  
**Firebase ํ ํฐ**์ ์์ฑํ๊ณ  CircleCI ์ค์ ์ ์ถ๊ฐํด์ฃผ์!  

```
firebase login:ci
```

์๋ก์ฝ๋กฌ ํ๋ฉด firebase login ์ฐฝ์ด ๋จ๊ณ  ์ฐ๋๋ ๊ณ์ ์ผ๋ก ๋ก๊ธด์ ํด์ฃผ๋ฉด  
ํฐ๋ฏธ๋ ์ฐฝ์ token ๋ด์ฉ์ด ๋ฟ! ๋ฌ๋ค.


## CircleCI ํ๊ฒฝ๋ณ์์ ์ถ๊ฐํ๊ธฐ

CircleCI ์ ํด๋น ํ๋ก์ ํธ ์์์ ์ฐ์๋จ `Project Settings` ๋ฅผ ๋๋ฅด๋ฉด ์ ์ด๋ฏธ์ง์ ๋ณด์ด๋ ํ๋ฉด์ผ๋ก ๋ค์ด๊ฐ์ง๋ค.  
`Add Variabel` ์ ํด๋ฆญํ์ฌ ๋ฐ์ ํ ํฐ์ ๋ฑ๋กํด์ฃผ๋ฉด ๋๋ค.  
๋๋ **DEV deploy** ์ **PRD deploy** 2๊ฐ๊ฐ ์์ด์ ๊ฐ ํ ํฐ์ ๋ฐ์ **ํ๊ฒฝ๋ณ์ ์ถ๊ฐ**ํ์๋ค.


<img width="800" alt="แแณแแณแแตแซแแฃแบ 2020-07-03 แแฉแแฎ 2 51 52" src="https://user-images.githubusercontent.com/55340876/86436905-43b85f80-bd3e-11ea-9b05-e7f381005f26.png">



---

## ๋น๋-๋ฐฐํฌ ๊ณผ์ ์์ ๋ฐ์ํ๋ Failed ์ก๊ธฐ

<img width="300" alt="แแณแแณแแตแซแแฃแบ 2020-07-03 แแฉแแฎ 2 51 52" src="https://user-images.githubusercontent.com/55340876/86437028-8b3eeb80-bd3e-11ea-9447-e9da06dc5791.gif">  
<img width="400" alt="แแณแแณแแตแซแแฃแบ 2020-07-03 แแฉแแฎ 2 51 52" src="https://user-images.githubusercontent.com/55340876/86437006-824e1a00-bd3e-11ea-827d-3b9f9f36a0cc.png">

~~Failed ์์ ์ธ์ ๐ญ~~  


โ CI system build๋ฅผ ์ํ firebase-tools ์์กด์ฑ ์ถ๊ฐ  

```
npm install -D firebase-tools
```

prd์ฉ json ํ์ผ ์ถ๊ฐํด์ฃผ๊ธฐ!!!  
(package.json ์ `firebase-tools` ์ถ๊ฐ ๋ฌ๋์ง ๋ฐ๋์ ํ์ธ!)  

**firebase-prd.json**

```json
{
  "hosting": {
    "site": "ํ๋ก์ ํธ๋ช",
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

**์ด์ธ์๋ ๋ชจ๋ config.yml ํ์ผ์ ์์ ํ์๋ค.**  


## config.yml ์์ 

DEV๊ณ deploy ์ PRD deploy ๋ฅผ ์ํด yml ํ์ผ์ ์์ ํ๋ค.  

์ค๋ณต๋๋ ๋ก์ง์ ์๋จ์ ๋นผ๊ณ  ๊ฐ๊ณ ์ค๋ ์์ผ๋ก ์์ ์ ํ๋ค.  
(๋ค์ฌ์ฐ๊ธฐ ๋๋ ํท๊ฐ๋ฆฌ..)


**config.yml**

```yml
aliases:
  - &attach_workspace # ์ง์ ํ workspace ๋ฅผ attach ํด์ค (CircleCI์ ์ฌ๋ ค์ค๋ค)
    at: ~/๋๋ ํ ๋ฆฌ๋ช

  - &update-npm # command ์ ์ง์ ๋ ๋ช๋ น์ด ์ํ. ์ฌ๊ธฐ์๋ npm ์๋ฐ์ดํธ๋ฅผ ํ๋ค.
    name: npm ์๋ฐ์ดํธ
    command: sudo npm install -g npm@6.1.0

  - &restore-npm-cache # keys ๋ก ์ง์ ๋ ํค๋ก ์บ์์ ์ ์ฅ๋ ๋ด์ฉ์ ๋ณต๊ตฌํ๋ค.
    # ์ค์น๋ ์์ด๋ค์ ๋ํ ์์กด์ฑ. ํ์ฌ ์ค์น๋ ๊ฒ์ ๋ํ ์ ์ฅ(์บ์ฑ)
    keys:
      - v1-dependencies-{{ .Branch }}-{{ checksum "package.json" }}
        # checksum "package.json" ์ด๋ ํด๋น ํ์ผ์ ํ ์ํ๋ฅผ ์ฒดํฌํ  ์ ์๋ ๋ช๋ น์ด
      - v1-dependencies-{{ .Branch }}-

  - &install-npm # npm ์ค์น
    name: npm ์ค์น
    command: npm install

  - &save-npm-cache # key ์ ์ง์ ๋ ํค๋ก paths ์ ๋ช์๋ ๊ฒฝ๋ก์ ๋ด์ฉ์ ์บ์์ ์ ์ฅํ๋ค.
    key: v1-dependencies-{{ .Branch }}-{{ checksum "package.json" }}
    paths:
      - node_modules

defaults: &defaults
    working_directory: ~/๋๋ ํ ๋ฆฌ๋ช # ์์์ด ์ํ๋  ๋๋ ํ ๋ฆฌ
    docker: # ํด๋น job์ ์ด๋์ ์ํํ  ๊ฒ์ธ์ง์ ๋ํ ๊ตฌ์ฑ.
      - image: circleci/node:13.7 # ๋ผ๋ ๋์ปค ์ด๋ฏธ์ง๋ฅผ ์ฌ์ฉํ์ฌ ๋์ปค ์ปจํ์ด๋์์ ๋น๋์์์ ์ํํ๋ค. (/node ๋ฒ์ )

version: 2 # CircleCI์ ์ธ์ด ๋ฒ์ 
jobs: # ์์ ๋ชฉ๋ก
  test:
    <<: *defaults
    steps: # ๋ฐฐํฌํ  ๋ ์ฌ์ฉํ  ์คํฌ๋ฆฝํธ๋ฅผ step ๋ณ๋ก ์คํํ๊ฒ ๋๋ค. (์์์ ์์)
      - checkout # workflow ์์ ํธ๋ฆฌ๊ฑฐ๋ git branch ๋ฅผ checkout ํ๋ค.
      - attach_workspace: *attach_workspace
      - run: *update-npm
      - restore_cache: *restore-npm-cache
      - run: *install-npm
      - save_cache: *save-npm-cache
      - run: # npm ํ์คํธ
          name: npm ํ์คํธ
          command: npm test

  build:
    <<: *defaults
    steps:
      - checkout
      - attach_workspace: *attach_workspace
      - run: *update-npm
      - restore_cache: *restore-npm-cache
      - run: *install-npm
      - run:
          name: sass rebuild
          command: npm rebuild node-sass
      - save_cache: *save-npm-cache
      - run:
          name: Build in Development Mode
          command: npm run build
      # workflow ๋ฅผ ์ด์ฉํด์ job ์ ๋๋๊ฒ ๋๋ฉด ๊ฐ๊ฐ์ job ์ ๊ฒฉ๋ฆฌ๋ ์ํ์ด๋ฏ๋ก ๋ค๋ฅธ job ์์ ์์ฑํ ํ์ผ์ ๋ณด์ด์ง ์๋๋ค. (์๋ก ๊ณต์ ์๋จ)
      # ๊ฐ job ๋ง๋ค ๋งค๋ฒ checkout ์ ์ ์ํ๋ ๊ฒ์ ๋นํจ์จ์ ์ด๋ฏ๋ก persist_to_workspace ๋ผ๋ ์ต์์ ์ด์ฉํ์ฌ job ๊ฐ์ ํ์ผ์ ๊ณต์ ํ  ์ ์๊ฒ ํด์ค๋ค.
      # ๋ค์ job ์์ docker ์ด๋ฏธ์ง๋ฅผ ์ฌ์ฉ ํ  ์ ์๋๋ก workspace ์ ์ ์ฅํด๋๋ค.
      - persist_to_workspace:
          root: .
          paths: dist # ๊ณต์ ํ  ํจ์ค๋ฅผ ๋ช์
      - run: # ํด๋น ๋๋ ํ ๋ฆฌ ํ์ผ์ ํ์ธ
          name: check dist directory
          command: pwd; ls; ls dist

  dev-deploy:
    <<: *defaults
    steps:
      - checkout
      - attach_workspace: *attach_workspace
      - run: *update-npm
      - restore_cache: *restore-npm-cache
      - run: *install-npm
      - save_cache: *save-npm-cache
      - run:
          name: Dev Firebase Deploy # firebase ๊ฒฝ๋ก ์ง์ 
          command:  ./node_modules/.bin/firebase deploy --project dev --only hosting:ํ๋ก์ ํธ๋ช --token "$DEV_FIREBASE_TOKEN" # ์ฝ๋๋ฅผ Firebase ํธ์คํ์ ๋ฐฐํฌ ํ๋ ๋ช๋ น์ ์คํ. ์ด ๋ช๋ น์ ํด๋น firebase token ํ๊ฒฝ ๋ณ์ ์์ ํ ํฐ์ ๊ฐ์ ธ ์ค๋๋ก ์ง์  ํ๋ค.

  prd-deploy:
    <<: *defaults
    steps:
      - checkout
      - attach_workspace: *attach_workspace
      - run: *update-npm
      - restore_cache: *restore-npm-cache
      - run: *install-npm
      - save_cache: *save-npm-cache
      - run:
          name: firebase.json prd์ฉ์ผ๋ก ๋์ฒด
          command: mv firebase-prd.json firebase.json
      - run:
          name: Prd Firebase Deploy
          command:  ./node_modules/.bin/firebase deploy --project prd --only hosting:ํ๋ก์ ํธ๋ช --token "$FIREBASE_TOKEN"

# Workflow ๋ CircleCI ์์ ์ํ๋๋ ๋ชจ๋  ์์์ ์กฐ์จํ๋ ์ค์ ํค์๋์ด๋ค.
# ๊ฐ workflow ๋ ์ค์ ํ์ผ ๋ด์ ๊ณ ์ ํ ์ด๋ฆ์ผ๋ก ๊ตฌ์ฑ๋์ด์ผ ํ๋ฉฐ,
# ํด๋น workflow ์ ์ด๋ฆ์ ํค๋ก, ์ํํ  ๋ด์ฉ์ ํด๋น workflow ์ ๊ฐ์ผ๋ก ๊ตฌ์ฑ๋๋ค.
workflows:
  version: 2
  build-deploy: # Workflow ์ด๋ฆ
    jobs:
#      - test
      - build
      - dev-deploy: # deploy job์ build๊ฐ ๋๋๋ค์ ์คํํ๋ค.
          requires:
            - build
          filters:
            branches:
              only: # master ๋ธ๋์น์ push ํ์๋๋ง ์คํ
                - master
      - prd-deploy:
          requires:
            - build
          filters:
            branches:
              only:
                - release

```

>์ฌ๊ธฐ์ ํคํฌ์ธํธ๋!!  
>
>DEV ์ PRD ๊ฐ ๋๋์ด์ง๋๊น  
>`project` `hosting` `token` ์ด ๋ฌ๋ฆฌ์ง๊ณ ,  
>`firebase.json` ํ์ผ์ด ๋์ฒด๋์ด์ผ ํ๋ค.  
>
>PRD ๋ ๋น์ฐํ `release` ๋ธ๋์น๋ฅผ ๋ฐ์ master ์ฝ๋๋ฅผ ๋จธ์งํ ํ, ํธ์ฌํด์ฃผ๋ ๊ฒ์ด๊ณ !  
>์ผ๋ฐ์ผ์ง๋ง master ์ฝ๋ ๋จธ์ง์์๋ ํด๋น ํ๋ก์ ํธ ๋ฒ์ ์ ์ฌ๋ฆฌ๊ณ  release์ ํธ์ฌ๋ฅผ ํด์ค๋ค.

---

## ๋์ Workflow

<img width="600" alt="แแณแแณแแตแซแแฃแบ 2020-07-03 แแฉแแฎ 2 51 52" src="https://user-images.githubusercontent.com/55340876/86437156-dbb64900-bd3e-11ea-87ff-f5a29040ba2c.png">


์๋ก์ฝ๋กฌ ๊ฐ๊ฐ master ์ release ์ ํธ์ฌํ๋ ๊ฒฝ์ฐ  
ํด๋นํ๋ DEV๊ณ / PRD๊ณ๋ก build -> deploy ์ ๊ฐ์ด ์์ฐจ์งํ๋๋ค.  

ํธ์ฌ ํ๋ฉด ๋น๋-๋ฐฐํฌ๊น์ง ๋ฌ๋ฌ ์งํํด์ฃผ๊ณ  ์ค์๊ฐ ๋์๊ฐ๋ ์ํฉ์ circleCI ๋ฅผ ํตํด ํ์ธ ๊ฐ๋ฅํ๋ค!  
๋ฐฐํฌ๊ฐ ์๋ฒฝํ ๋๋ฉด firebase hosting ์์๋ 

<img width="200" alt="แแณแแณแแตแซแแฃแบ 2020-07-03 แแฉแแฎ 2 51 52" src="https://user-images.githubusercontent.com/55340876/86437222-00aabc00-bd3f-11ea-9872-96e62fb85cf7.png">

์ซ๋!!! ๋ฐฐํฌ์๋ฃ์ผ ๐๐ป

---

## ํ์คํธ๋ฅผ ์ํ hidden text ๋ฒ์  ์ถ๋ ฅ

์๋ฒฝํ ๋น๋ - ๋ฐฐํฌ๊น์ง ๋์๋์ง ํ์ธ์ ์ํด  
package.json ์ ์๋ ํด๋น ํ๋ก์ ํธ ๋ฒ์ ์ ์ถ๋ ฅํด๋ณด์.

template ํ๊ทธ ์์  
`<div style="display: none">Version : {{version}}</div>` ๋ฅผ ์ถ๊ฐํด์ฃผ๊ณ ,

```js
<script>
   import packageJson from "../../package.json";

   export default {
      data() {
         return {
            version: packageJson.version.toString(),
         }
      },
   }
</script>
```

ํ๋ฉด?!

<img width="800" alt="แแณแแณแแตแซแแฃแบ 2020-07-03 แแฉแแฎ 2 51 52" src="https://user-images.githubusercontent.com/55340876/86437278-2041e480-bd3f-11ea-9de6-d75d08cc8512.png">

์ซ๋กผ!! ํด๋น ๋ฒ์ ์ด ์๋ก์ฝ๋กฌ ์ถ๋ ฅ๋๋ ๊ฒ์ ๋ณผ ์ ์๋ค.

<img width="400" alt="แแณแแณแแตแซแแฃแบ 2020-07-03 แแฉแแฎ 2 51 52" src="https://user-images.githubusercontent.com/55340876/86437291-2df76a00-bd3f-11ea-96e6-2e07815f9ff2.png">

์ ๋ฆฌ๋ฅผ ๋๋ฆ ํ๋ค๊ณ  ํ๋๋ฐ ์ ๋ฆฌํ๋ฉด์๋ ๋๋ฌด ์ด๋ ต๋ค. ํฝ (๋๋ฌด ๋ฌ์ฑ๋ฌ์ฑ ์ด๊ฒ ๊ฐ...)  
ํ๋ฒ ์ธํํ๊ณ  ๋๋ฉด ๋์ค์ ์๋ก์ด ํ๋ก์ ํธ ๋ค์ด๊ฐ ๋์๋ ๊ฐ์ ๋ก์ง ๊ฐ์ ธ๋ค ์ฐ๋ฉด ๋  ๊ฒ ๊ฐ์๋ฐ  
yml ๋ฌธ๋ฒ์ด๋ผ๋์ง ci/cd ์งํํ๋ ์์๋ผ๋์ง   
์ด๊ฒ ์ ํํ ์ด๋์ ์ฐ์ด๋ ๊ฒ์ด๊ณ  ์ด๋ป๊ฒ ์งํ์ด ๋๋ ๊ฒ์ธ์ง  
๋ชํํ ์ ํ์๊ฐ ์๋ค. ๐คฏ

์ ๋๋ก ์ดํดํด์ผ ์ ๋๋ก ์ฌ์ฉํ๋๊น!!   

ํฉ! ์ด๋ก์จ 1์ฐจ B2C ๋๋ฉํ์ด์ง๋ ๋ง๋ฌด๋ฆฌ ๋์๋ค.. ํํํํ  
(์ถ๊ฐ์ ์ผ๋ก ์ ์ง๋ณด์๊ฐ ์๊ธธ ๊ฒฝ์ฐ๊ฐ ์์ง๋ง!)  

๋ค์ ๋ทฐ ๊ฐ์์ ํจ๊ป ๋ด์ฃผ ์์๋  2์ฐจ ํ์ ์ ์ํด ๋ฌ๋ฆฌ์ฆ์!!  
๐๐ปโโ๏ธ๐๐ปโโ๏ธ๐๐ปโโ๏ธ๐๐ปโโ๏ธ๐๐ปโโ๏ธ๐๐ปโโ๏ธ๐๐ปโโ๏ธ๐๐ปโโ๏ธ๐๐ปโโ๏ธ๐๐ปโโ๏ธ๐๐ปโโ๏ธ๐๐ปโโ๏ธ๐๐ปโโ๏ธ๐๐ปโโ๏ธ๐๐ปโโ๏ธ๐๐ปโโ๏ธ๐๐ปโโ๏ธ๐๐ปโโ๏ธ๐๐ปโโ๏ธ




---
---

# Reference  
- [CircleCI ๊ตฌ์ฑ](https://circleci.com/docs/2.0/configuration-reference/)
- [์ํ 2.0 config.yml ํ์ผ](https://circleci.com/docs/2.0/sample-config/)
- [Firebase CLI ์ฐธ์กฐ](https://firebase.google.com/docs/cli?hl=ko)
- [CircleCI๋ฅผ ์ฌ์ฉํ์ฌ Firebase ํธ์คํ์ ๋ฐฐํฌํ๋ ๋ฐฉ๋ฒ](https://codeburst.io/how-to-deploy-on-firebase-hosting-with-circleci-f5fa58bce01d)
- [Gatsby ์ฌ์ดํธ๋ฅผ Firebase ํธ์คํ์ ์๋ ๋ฐฐํฌ](https://circleci.com/blog/automatically-deploy-a-gatsby-site-to-firebase-hosting/)
- [CircleCI + Fastlane + Firebase Test Lab์ผ๋ก ์ฑ ํ์คํธ ๋ฐ ๊ฒ์](https://proandroiddev.com/test-and-publish-your-apps-with-circleci-fastlane-firebase-test-lab-e716c075b99b)
- [Github + Heroku + Circle CI ๋ฅผ ์ด์ฉํ Django Application ๋ฐฐํฌ ์๋ํ](https://www.slideshare.net/JaeyeolLee4/github-heroku-circle-ci-django-application)