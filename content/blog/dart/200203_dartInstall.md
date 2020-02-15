---
title: '📖 [Dart] 설치 with MAC'
date: 2020-02-03 11:00:00
category: 'Dart'
draft: false 
showToc: true
---

<!-- Draft Post -->
<!-- Draft Post -->
<!-- Draft Post -->
<!-- Draft Post -->
<!-- Draft Post -->

# Mac 기준 👩🏻‍💻  

https://dart.dev/get-dart  

### 1. 터미널 열어서 해당 순서대로 명령어 실행  
 - Homebrew가 없으면 먼저 설치 후, 저 명령어를 실행해야해! _(homebrew -v 명령어로 확인)_  


<img width="908" alt="1" src="https://user-images.githubusercontent.com/55340876/74588027-7cc88f80-503c-11ea-9bab-1387dcc6e69c.png">
  

  
### 2. 명령어 실행  
 - 마찬가지로 pub -v 로 확인 후, 없다면 먼저 설치해주고 실행해야해!  
  
```
$ pub global activate stagehand
```

### 3. 원하는 위치에 새폴더 생성
 - 나는 문서 폴더에 classyo 라는 새폴더를 만들어줬어.
 
```
$ cd Documents
$ mkdir classyo
```  
  

### 4. 해당 폴더에 들어가서 명령어 실행  
  

```
$ stagehand console-full
```

 - 이 때!!! **(오류가 없다면 요 단계는 무시하고 폴더안에 뭔가 생성된거 확인후, 다음단계 진행!)**  
 **zsh: command not found: stagehand**  
 라는 문구가 뜨면서 폴더에 아무것도 생성이 안되는 경우도 있을거야!   
 그럴 경우에는 
 **바깥 최상위 위치로 다시 나간 다음에!!!**  
 

 ```
 $ ls -a
 ```


 숨겨진 폴더까지 다 보여주는 명령어야.  
 ```.bash_profile``` 이 폴더가 있어야해.  
 없으면 ```$ touch .bash_profile``` 생성해주고,  
 있다면 ```$ open .bash_profile``` 접근해주자!  
 나의 경우는 있으니까 바로 들어가줄거야.  
 
 ```
 $ open .bash_profile
 $ sudo vi .bash_profile
 ```
   
 ```sudo``` 명령어를 통해 vi 열어주면,  
 
<img width="812" alt="2" src="https://user-images.githubusercontent.com/55340876/74588025-7afecc00-503c-11ea-8d5b-dc9d51851449.png">


 이런식으로 뜨는데,   
 esc 한 번 눌러주고 -> i 를 누르면 수정을 할 수 있게끔 활성화가 될거야.  
그럼 맨 상단에  
```
export PATH=${PATH}:/Users/내가 지정한 사용자이름/.pub-cache/bin
```

입력 후, ```:wq``` 를 이용해서 저장후 나가기를 해주자!  

```
$ source .bash_profile
$ pub global activate stagehand
```
해주고!!   

 **해당 폴더 다시 들어가서 명령어 실행해줘!!**  
 
 여기까지 실행을 해주고 나면...  
**짠! 요로코롬 폴더 안에 뭔가 만들어졌지?!**  
 
<img width="303" alt="3" src="https://user-images.githubusercontent.com/55340876/74588020-7803db80-503c-11ea-8236-5910129fd46e.png">
  

### 5. vscode 통해서 프로젝트 실행 (없으면 설치해야지 뭐..)  
- 해당 폴더 위치에서 아래 명령어 실행 or vscode 내에서 폴더열기  

```
$ code .
```
  

### 6. vscode 에서 터미널 열고 명령어 실행  

```
$ pub get
$ dart bin/main.dart
```

> **Hello world: 42!**  
  

**라고 뜨면 완료!  
박수짝짝!!! 👏🏻**  
  

---
---

# Reference  
- [더코딩파파 유튜브](http://bit.ly/TheCodingPapa)
- [Dart 공식문서](https://dart.dev/)

