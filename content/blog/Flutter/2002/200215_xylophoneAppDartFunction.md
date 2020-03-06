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

```dart
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

<img width="1018" alt="1" src="https://user-images.githubusercontent.com/55340876/74589648-53aefb80-504a-11ea-8cf5-e14352f74ae8.png">

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

```dart
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

```dart
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

```dart
void getMilk() {
	실행될 기능들
}
```

이것은 가장 기본적인 함수였다.

() 괄호 안에 함수의 인자를 지정할 수 있고,     
{} 중괄호 내부에 우리가 직접적으로 갖다쓰는 기능을 담당하는 것들을 넣어준다.



```dart
void playSound(String name) {
  final AudioCache player = AudioCache();
  player.play('$name.wav');
}
```

``(String name)`` = input
``('$name.wav')`` = used in the function


로봇에게 "매장에서 우유를 가져다줘." 라고 시킨다고 생각해보자.   

1병이 아닐 수도 있지 않는가?!  

내가 2병을 원하면 인자값으로 () 괄호안에 2를 쓸 것이고,   
4병을 원하면 4를 쓸 것이다.  



예를 들어,  
X병 수를 얻는 비용을 계산할 수 있다.  

인자값으로 2병을 넣어주면    
{} 중괄호 내부에서     
우유 한병이 1.5 파운드인 경우,      
인자값 2병을 대입해 총 비용인 3 파운드를 계산해서 던져줄 것이다.

```dart
void getMilk (int bottles) {
    double cost = bottles * 1.5;
}
```

``(int bottles)`` = argument / input 


여기서 중요한 2가지가 있다.
- 데이터 타입을 지정해야 함
- 이름을 지정해야 함   
 ({} 중괄호 안에 필요할 때 참조할 수 있도록 이름이 필요함)
 


이제 최종적으로 함수호출할 때,    
나는 2병 수를 얻는 비용을 원하니까    
``getMilk(2);`` 라고 호출을 해주면 되는 것이다.





다트 패드를 통해 확인해보자.

<img width="785" alt="2" src="https://user-images.githubusercontent.com/55340876/74589653-5873af80-504a-11ea-9fbd-0ef2ffcda578.png">


<img width="785" alt="3" src="https://user-images.githubusercontent.com/55340876/74589654-590c4600-504a-11ea-8408-2c82bda321a7.png">



인자를 여러개를 줄 수도 있는데 여기서 문제점은 인자의 순서가 바뀌었을 때이다.

<img width="785" alt="4" src="https://user-images.githubusercontent.com/55340876/74589655-59a4dc80-504a-11ea-9024-07d2e24b9b09.png">



Jane How do you do      
이상하다... 

인자값이 많고 순서 상관없이 대입해주기 위해    
인자값의 이름을 정의해주고, {} 중괄호를 애용해주자!   

<img width="785" alt="5" src="https://user-images.githubusercontent.com/55340876/74589656-5ad60980-504a-11ea-9788-cd321919391c.png">




```dart
void getMilk ({int numBottles}) {
    double cost = bottles * 1.5;
}

getMilk(numBottles: 2);
```

### 꼭꼭꼭!! 이해하고 넘어가자!!
**이 부분이 이해가 잘 안갔는데,  
미리 최종코드랑 한 번 보자!!**

<img width="1102" alt="스크린샷 2020-02-16 오전 12 50 27" src="https://user-images.githubusercontent.com/55340876/74590914-6fb89a00-5056-11ea-8d05-bc32ce70e6aa.png">

이런식으로!!

# 막힌 부분 2
- 실로폰을 화면에 꽉차게 비율을 맞춰서 정렬을 해줘야하는데,   
 가로 자동으로 꽉 채워지게끔 
 
 ```dart
 ...
 
 
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
 
 
 ...
 ```
 
 했지만!! 세로는 대체 어케해야하는겨...    
 FlatButton은 높이가 자동으로 있어서 실로폰 사이에 간격도 띄어지고... 하..    
 
 해답은?!
 
 
```dart
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

<img width="1286" alt="6" src="https://user-images.githubusercontent.com/55340876/74589658-5c9fcd00-504a-11ea-87f3-ff99edf37509.png">



``Expanded`` 위젯을 FlatButton 의 부모로 해주면 된다!

## [Expanded Widget](https://api.flutter.dev/flutter/widgets/Expanded-class.html)
- 사용가능한 공간들을 채워주는 확장 위젯.  



# Dart 함수 기능

함수 호출.    
이건 함수를 호출만 한 것이지 함수를 출력한 것이 아니다.    
실질적으로 뒷단에서 계산은 되있지만 우리 눈에는 안보이는 것.

<img width="679" alt="7" src="https://user-images.githubusercontent.com/55340876/74589659-5e699080-504a-11ea-958f-4e5acd5669e2.png">





기능이 있는 함수를호출해서 출력할 때,    
void 타입은 불가하다.  

<img width="1008" alt="8" src="https://user-images.githubusercontent.com/55340876/74589661-5f022700-504a-11ea-8584-3ace381691fe.png">



그럼 우째해야하나~!

함수의 타입을 바꿔주고 return 을 붙여서 출력해주면 된다.


<img width="1008" alt="9" src="https://user-images.githubusercontent.com/55340876/74589663-5f9abd80-504a-11ea-9f29-321bb900d36c.png">



로봇이 우유를 사오는 함수가 있다고 생각하자.  
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

```dart
int getMilk (int money) {
  return money - 2;
}

int change = getMilk(5);
```


# 함수의 3가지 기능 (요약)

## 1. 바닐라맛 
  - 일부 계산을 수행하여 처리하지만 본질적으로 입력과 출력이 없다.

```dart
void getMilk() { 기능 명령어들 ...  }

getMilk();
```

## 2. 초콜렛맛 
  - 인자값을 입력 할 수 있으며 괄호 안에 있는 입력을 받는다.  
  함수호출할 때, 인자값에 데이터 형식을 지정해줘야 한다.  
  해당 데이터 유형과 일치하는 데이터 및 해당 숫자 또는 해당 입력 값(인자값) 이 함수 내에서 사용된다.
  
```dart
void getMilk(int bottles) {
    double cost = bottles * 1.5;
}

getMilk(2);
```

## 3. 딸기맛 
  - 괄호 안에 인자값을 줄 수 있고,  
  처음에 함수의 데이터 타입을 지정해주고,  
  함수 내부에 지정해야할 내용(실행 할 기능)들을 준다.  
  인자값을 줘서 입력을 제공받고 다음을 수행 할 수 있는 기능을 출력으로 얻게 된다.  
  
```dart
int getMilk(int money) {
    return cost = money * 2;
}

int change = getMilk(5);
```

<img width="1131" alt="10" src="https://user-images.githubusercontent.com/55340876/74589640-4b56c080-504a-11ea-8e27-da8ee48974a7.png">



# 실로폰 최종코드

```dart
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

<img width="1649" alt="11" src="https://user-images.githubusercontent.com/55340876/74589642-501b7480-504a-11ea-831a-bd905b606959.png">



# 화살표 함수
- 화살표 함수는 한줄의 명령 코드 경우에만 작동한다.

<img width="522" alt="12" src="https://user-images.githubusercontent.com/55340876/74589644-51e53800-504a-11ea-80b2-3f8bbd3b0b1b.png">



두줄 코드를 화살표 함수로 구현하려 하면 불가하다.

<img width="951" alt="13" src="https://user-images.githubusercontent.com/55340876/74589646-527dce80-504a-11ea-830b-53525c74f707.png">



온리 한줄만 가능하다! 


<img width="951" alt="14" src="https://user-images.githubusercontent.com/55340876/74589657-5c073680-504a-11ea-91ee-061462acbab9.png">




# [무료 사운드 모음 사이트](https://freesound.org/)


<br/>


---
---

# Reference  
- [Angela Yu 강의(유료)](https://www.udemy.com/course/flutter-bootcamp-with-dart/)
