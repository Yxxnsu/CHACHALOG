---
title: '💎 [Flutter] 실로폰 앱 / Dart 함수'
date: 2020-02-15 20:39:00
category: 'Flutter'
draft: false
showToc: true
---

# 막힌 부분 1
- FlatButton 위젯을 여러개 만들어야하는데    
 초기 코드는 Center 위젯의 자식으로 있는 상태다.    
 이것을 어떤식으로 바꿔서 FlatButton 위젯 7개를 쫘라락 세로로 놓아야하는지...    
 너무 간단한거였는데 촴놔..    

해답은?!

```go
import 'package:flutter/material.dart';
import 'package:audioplayers/audio_cache.dart';

void main() => runApp(XylophoneApp());

class XylophoneApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        body: SafeArea(
          child: Column(
            children: <Widget>[
              FlatButton(
                color: Colors.red,
                onPressed: () {
                  final player = AudioCache();
                  player.play('note1.wav');
                },
              ),
              FlatButton(
                color: Colors.orange,
                onPressed: () {
                  final player = AudioCache();
                  player.play('note2.wav');
                },
              ),
              FlatButton(
                color: Colors.yellow,
                onPressed: () {
                  final player = AudioCache();
                  player.play('note3.wav');
                },
              ),
              FlatButton(
                color: Colors.green,
                onPressed: () {
                  final player = AudioCache();
                  player.play('note4.wav');
                },
              ),
              FlatButton(
                color: Colors.teal,
                onPressed: () {
                  final player = AudioCache();
                  player.play('note5.wav');
                },
              ),
              FlatButton(
                color: Colors.blue,
                onPressed: () {
                  final player = AudioCache();
                  player.play('note6.wav');
                },
              ),
              FlatButton(
                color: Colors.purple,
                onPressed: () {
                  final player = AudioCache();
                  player.play('note7.wav');
                },
              ),
            ],
          ),
        ),
      ),
    );
  }
}

```

![](https://images.velog.io/images/chajanee/post/632b61e4-b2c1-4b49-abd1-d181b35ac75c/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%204.08.30.png)

화면처럼 실로폰이 왼쪽과 세로로 쭉 붙어서 나열되야하니까!    
Center 위젯을 지우고,     
Column 위젯으로 바꾼 뒤 children 으로 FlatButton 위젯을 세로로 복수정렬 쫘르르르륵 하면 된다!    
(FlatButton 위젯은 기본적으로 너비와 높이가 존재한다.)  

아니 왜 배운걸 그때그때 띵킹을 못하니.. 큽...    
복습 좀 제대로 하자!!! 정신차려!! 🧠  

---

그런데 상단 코드는 반복 작업이 너무 많다.       
코드가 지저분하지않나?!      
Dicee 에서 한 것처럼 함수를 만들어서 노가다 작업을 줄여보자!  

```go
import 'package:flutter/material.dart';
import 'package:audioplayers/audio_cache.dart';

void main() => runApp(XylophoneApp());

class XylophoneApp extends StatelessWidget {
  void playSound(int soundNumber) {
    //int 타입의 인자를 받는다
    final player = AudioCache();
    player.play('note$soundNumber.wav'); //달러 사인과 함께 받을 인자값 대입
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        body: SafeArea(
          child: Column(
            children: <Widget>[
              FlatButton(
                color: Colors.red,
                onPressed: () {
                  playSound(1); //인자 전달
                },
              ),
              FlatButton(
                color: Colors.orange,
                onPressed: () {
                  playSound(2);
                },
              ),
              FlatButton(
                color: Colors.yellow,
                onPressed: () {
                  playSound(3);
                },
              ),
              FlatButton(
                color: Colors.green,
                onPressed: () {
                  playSound(4);
                },
              ),
              FlatButton(
                color: Colors.teal,
                onPressed: () {
                  playSound(5);
                },
              ),
              FlatButton(
                color: Colors.blue,
                onPressed: () {
                  playSound(6);
                },
              ),
              FlatButton(
                color: Colors.purple,
                onPressed: () {
                  playSound(7);
                },
              ),
            ],
          ),
        ),
      ),
    );
  }
}

```

자세히 함 보까?!

```go
...


  void playSound(int soundNumber) {
    //int 타입의 인자를 받는다
    final player = AudioCache();
    player.play('note$soundNumber.wav'); //달러 사인과 함께 받을 인자값 대입
  }
  
  
...


              FlatButton(
                color: Colors.red,
                onPressed: () {
                  playSound(1); //인자 전달
                },
              ),
              
              
...              
```

빠밤! 

---
# Dart 함수 기초

여기서 Dart 언어의 함수를 되짚어보자.  

{} 중괄호 안에 코드 전체를 함께 묶기 때문에 모든 것을 원할 때,      
이 명령 중 한번에 실행될 명령의 이름을 지정하여 함수를 호출하면 된다.  

```go
void getMilk() {
	실행될 기능들
}
```

이것은 가장 기본적인 함수였다.

![](https://images.velog.io/images/chajanee/post/26dba59b-e0bf-46ac-994c-9536e873a71a/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%204.30.36.png)

() 괄호 안에 함수의 인자를 지정할 수 있고,     
{} 중괄호 내부에 우리가 직접적으로 갖다쓰는 기능을 담당하는 것들을 넣어준다.

![](https://images.velog.io/images/chajanee/post/bb95f672-6fdd-41e6-acdc-9f1792648a70/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%204.30.53.png)

로봇에게 "매장에서 우유를 가져다줘." 라고 시킨다고 생각해보자.   

1병이 아닐 수도 있지 않는가?!  

내가 2병을 원하면 인자값으로 () 괄호안에 2를 쓸 것이고,   
4병을 원하면 4를 쓸 것이다.  


![](https://images.velog.io/images/chajanee/post/2dcb6880-f29b-4756-b0e4-e68d879a55e7/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%204.32.36.png)

예를 들어,  
X병 수를 얻는 비용을 계산할 수 있다.  

인자값으로 2병을 넣어주면    
{} 중괄호 내부에서     
우유 한병이 1.5 파운드인 경우,      
인자값 2병을 대입해 총 비용인 3 파운드를 계산해서 던져줄 것이다.

![](https://images.velog.io/images/chajanee/post/5ce5a337-8031-461f-b14c-1c7c5a503555/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%204.33.40.png)

여기서 중요한 2가지가 있다.
- 데이터 타입을 지정해야 함
- 이름을 지정해야 함   
 ({} 중괄호 안에 필요할 때 참조할 수 있도록 이름이 필요함)
 
![](https://images.velog.io/images/chajanee/post/77844eae-c8a5-4efa-9f4b-648e70cb03a5/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%204.47.57.png)

이제 최종적으로 함수호출할 때,    
나는 2병 수를 얻는 비용을 원하니까    
``getMilk(2);`` 라고 호출을 해주면 되는 것이다.

![](https://images.velog.io/images/chajanee/post/433fbca2-831c-47b6-870b-d740e72449d4/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%204.33.52.png)

![](https://images.velog.io/images/chajanee/post/f6797486-abc9-4b5b-a409-2b4356affad2/2020-02-15%2016-52-22.2020-02-15%2016_54_43.gif)

다트 패드를 통해 확인해보자.

![](https://images.velog.io/images/chajanee/post/1cc71ba7-3c24-418d-a3cc-1e2a2c4c601b/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%205.03.10.png)

![](https://images.velog.io/images/chajanee/post/98184094-049b-492f-81a2-242370c2751a/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%205.04.06.png)

인자를 여러개를 줄 수도 있는데 여기서 문제점은 인자의 순서가 바뀌었을 때이다.

![](https://images.velog.io/images/chajanee/post/f8875f61-ad35-486d-97af-506dfbd21c5a/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%205.19.08.png)

Jane How do you do      
이상하다... 

인자값이 많고 순서 상관없이 대입해주기 위해    
인자값의 이름을 정의해주고, {} 중괄호를 애용해주자!   

![](https://images.velog.io/images/chajanee/post/3bb27dd4-2e9f-4a36-8481-d7f7156670f4/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%205.22.01.png)


![](https://images.velog.io/images/chajanee/post/008f0acc-fa62-4149-a2e8-4fbea308778c/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%205.22.50.png)

이런식으로!!

# 막힌 부분 2
- 실로폰을 화면에 꽉차게 비율을 맞춰서 정렬을 해줘야하는데,   
 가로 자동으로 꽉 채워지게끔 
 
 ```go
 ...
 
 
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
 
 
 ...
 ```
 
 했지만!! 세로는 대체 어케해야하는겨...    
 FlatButton은 높이가 자동으로 있어서 실로폰 사이에 간격도 띄어지고... 하..    
 
 해답은?!
 
 
```go
import 'package:flutter/material.dart';
import 'package:audioplayers/audio_cache.dart';

void main() => runApp(XylophoneApp());

class XylophoneApp extends StatelessWidget {
  void playSound(int soundNumber) {
    //int 타입의 인자를 받는다
    final player = AudioCache();
    player.play('note$soundNumber.wav'); //달러 사인과 함께 받을 인자값 대입
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        backgroundColor: Colors.black,
        body: SafeArea(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: <Widget>[
              Expanded(
                child: FlatButton(
                  color: Colors.red,
                  onPressed: () {
                    playSound(1); //인자 전달
                  },
                ),
              ),
              Expanded(
                child: FlatButton(
                  color: Colors.orange,
                  onPressed: () {
                    playSound(2);
                  },
                ),
              ),
              Expanded(
                child: FlatButton(
                  color: Colors.yellow,
                  onPressed: () {
                    playSound(3);
                  },
                ),
              ),
              Expanded(
                child: FlatButton(
                  color: Colors.green,
                  onPressed: () {
                    playSound(4);
                  },
                ),
              ),
              Expanded(
                child: FlatButton(
                  color: Colors.teal,
                  onPressed: () {
                    playSound(5);
                  },
                ),
              ),
              Expanded(
                child: FlatButton(
                  color: Colors.blue,
                  onPressed: () {
                    playSound(6);
                  },
                ),
              ),
              Expanded(
                child: FlatButton(
                  color: Colors.purple,
                  onPressed: () {
                    playSound(7);
                  },
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

```

![](https://images.velog.io/images/chajanee/post/10931f67-e2ae-47ea-bd62-77a8f8f6016d/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%205.49.35.png)

``Expanded`` 위젯을 FlatButton 의 부모로 해주면 된다!

## [Expanded Widget](https://api.flutter.dev/flutter/widgets/Expanded-class.html)
- 사용가능한 공간들을 채워주는 확장 위젯.  



# Dart 함수 기능

함수 호출.    
이건 함수를 호출만 한 것이지 함수를 출력한 것이 아니다.    
실질적으로 뒷단에서 계산은 되있지만 우리 눈에는 안보이는 것.

![](https://images.velog.io/images/chajanee/post/8d188df4-ae4e-4955-9c7c-4541949bbd83/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.44.34.png)



기능이 있는 함수를호출해서 출력할 때,    
void 타입은 불가하다.  

![](https://images.velog.io/images/chajanee/post/abd2abf2-d763-4a6c-804d-f79cc02f754c/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.45.44.png)

그럼 우째해야하나~!

함수의 타입을 바꿔주고 return 을 붙여서 출력해주면 된다.
![](https://images.velog.io/images/chajanee/post/26169456-4f2d-4a08-b8e1-3d598a927797/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.48.37.png)


![](https://images.velog.io/images/chajanee/post/f51778da-e6dd-49c5-8137-45fc250601a7/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.53.19.png)

로봇이 우유를 사오는 함수이다.  
인자로 돈을 가지고 있고,  
우유 한병에 동전 2개라고 해보자.  

이 때, 함수의 데이터 타입은  
출력이 없음을  표시하는 void 타입이 아니라  
실제 해당하는 데이터 타입으로 명시해주어야 한다!  
또한 return 키워드를 사용하여 함수에서 무엇이 출력되는지 지정해주어야 한다.  

만약 로봇에게 동전 5개를 주고 우유를 사오라고 시킨다면?  
getMilk(5);  
우유 한병에 동전 2개니까  
로봇은 나에게 동전 3개를 돌려준다.  

![](https://images.velog.io/images/chajanee/post/e19faff6-1235-4bcd-9301-44f31166fe21/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%207.09.43.png)

![](https://images.velog.io/images/chajanee/post/c3737993-3065-4277-b171-107092d5d1f9/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%207.09.54.png)

![](https://images.velog.io/images/chajanee/post/6922118b-d758-4ca2-b10a-2dc72b30abc5/2020-02-15%2019-23-10.2020-02-15%2019_25_49.gif)

# 함수의 3가지 기능 (요약)

## 1. 바닐라맛 
  - 일부 계산을 수행하여 처리하지만 본질적으로 입력과 출력이 없다.

![](https://images.velog.io/images/chajanee/post/5b2164c6-3416-41dd-8e4f-01990ad697c9/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%207.29.42.png)
![](https://images.velog.io/images/chajanee/post/cca96353-d119-45d1-9958-2c7e99cceceb/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%207.28.11.png)

## 2. 초콜렛맛 
  - 입자값을 입력 할 수 있으며 괄호 안에 있는 입력을 받는다.  
  함수호출할 때, 인자값에 데이터 형식을 지정해줘야 한다.  
  해당 데이터 유형과 일치하는 데이터 및 해당 숫자 또는 해당 입력 값(인자값) 이 함수 내에서 사용된다.
  
![](https://images.velog.io/images/chajanee/post/73cd365d-e513-4855-abfe-f7bffbde0cc5/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%207.25.20.png)
![](https://images.velog.io/images/chajanee/post/331d0de5-5cb3-4df2-a942-27eac7f1fff2/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%207.33.28.png)

## 3. 딸기맛 
  - 괄호 안에 인자값을 줄 수 있고,  
  처음에 함수의 데이터 타입을 지정해주고,  
  함수 내부에 지정해야할 내용(실행 할 기능)들을 준다.  
  인자값을 줘서 입력을 제공받고 다음을 수행 할 수 있는 기능을 출력으로 얻게 된다.  
  
![](https://images.velog.io/images/chajanee/post/8b0d24df-1ce5-4550-938e-8cf6aeb1869f/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%207.27.01.png)
  
![](https://images.velog.io/images/chajanee/post/f597f3b3-9b39-4607-868a-5584f6f4f933/2020-02-15%2019-37-06.2020-02-15%2019_37_33.gif)


![](https://images.velog.io/images/chajanee/post/2e4d1df5-b17e-4950-92a9-76421a4b61f8/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%207.59.03.png)

# 실로폰 최종코드

```go
import 'package:flutter/material.dart';
import 'package:audioplayers/audio_cache.dart';

void main() => runApp(XylophoneApp());

class XylophoneApp extends StatelessWidget {
  void playSound(int soundNumber) {
    //int 타입의 인자를 받는다
    final player = AudioCache();
    player.play('note$soundNumber.wav'); //달러 사인과 함께 받을 인자값 대입
  }

  Expanded bulidKey({Color color, int soundNumber}) {
    return Expanded(
      child: FlatButton(
        color: color,
        onPressed: () {
          playSound(soundNumber); //인자 전달
        },
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        backgroundColor: Colors.black,
        body: SafeArea(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: <Widget>[
              bulidKey(color: Colors.red, soundNumber: 1),
              bulidKey(color: Colors.orange, soundNumber: 2),
              bulidKey(color: Colors.yellow, soundNumber: 3),
              bulidKey(color: Colors.green, soundNumber: 4),
              bulidKey(color: Colors.teal, soundNumber: 5),
              bulidKey(color: Colors.blue, soundNumber: 6),
              bulidKey(color: Colors.purple, soundNumber: 7),
            ],
          ),
        ),
      ),
    );
  }
}

```

![](https://images.velog.io/images/chajanee/post/79664d79-bd6d-485d-9aa9-dea73c572e5c/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%208.17.07.png)

# 화살표 함수
- 화살표 함수는 한줄의 명령 코드 경우에만 작동한다.

![](https://images.velog.io/images/chajanee/post/e658a91f-823a-4261-9f28-b0da50149605/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%208.28.20.png)

두줄 코드를 화살표 함수로 구현하려 하면 불가하다.

![](https://images.velog.io/images/chajanee/post/85397a6f-f069-4980-8c41-dd49b8cda52e/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%208.30.55.png)

온리 한줄만 가능하다! 
![](https://images.velog.io/images/chajanee/post/a1ea31b5-b8b0-4a2a-a620-e4358d413db9/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-02-15%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%208.33.39.png)


# [무료 사운드 모음 사이트](https://freesound.org/)


<br/>


---
---

# Reference  
- [Angela Yu 강의(유료)](https://www.udemy.com/course/flutter-bootcamp-with-dart/)
