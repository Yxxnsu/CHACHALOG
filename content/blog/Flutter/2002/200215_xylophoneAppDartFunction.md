---
title: 'π [Flutter] μ€λ‘ν° μ± / Dart ν¨μ'
date: 2020-02-15 20:39:00
category: 'Flutter'
draft: false
showToc: true
---

# λ§ν λΆλΆ 1
- FlatButton μμ ―μ μ¬λ¬κ° λ§λ€μ΄μΌνλλ°    
 μ΄κΈ° μ½λλ Center μμ ―μ μμμΌλ‘ μλ μνλ€.    
 μ΄κ²μ μ΄λ€μμΌλ‘ λ°κΏμ FlatButton μμ ― 7κ°λ₯Ό μ«λΌλ½ μΈλ‘λ‘ λμμΌνλμ§...    
 λλ¬΄ κ°λ¨νκ±°μλλ° μ΄΄λ..    

ν΄λ΅μ?!

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

νλ©΄μ²λΌ μ€λ‘ν°μ΄ μΌμͺ½κ³Ό μΈλ‘λ‘ μ­ λΆμ΄μ λμ΄λμΌνλκΉ!    
Center μμ ―μ μ§μ°κ³ ,     
Column μμ ―μΌλ‘ λ°κΎΌ λ€ children μΌλ‘ FlatButton μμ ―μ μΈλ‘λ‘ λ³΅μμ λ ¬ μ«λ₯΄λ₯΄λ₯΄λ₯΅ νλ©΄ λλ€!    
(FlatButton μμ ―μ κΈ°λ³Έμ μΌλ‘ λλΉμ λμ΄κ° μ‘΄μ¬νλ€.)  

μλ μ λ°°μ΄κ±Έ κ·Έλκ·Έλ λ΅νΉμ λͺ»νλ.. ν½...    
λ³΅μ΅ μ’ μ λλ‘ νμ!!! μ μ μ°¨λ €!! π§   

---

κ·Έλ°λ° μλ¨ μ½λλ λ°λ³΅ μμμ΄ λλ¬΄ λ§λ€.       
μ½λκ° μ§μ λΆνμ§μλ?!      
Dicee μμ ν κ²μ²λΌ ν¨μλ₯Ό λ§λ€μ΄μ λΈκ°λ€ μμμ μ€μ¬λ³΄μ!  

```dart
import 'package:flutter/material.dart';
import 'package:audioplayers/audio_cache.dart';

void main() => runApp(XylophoneApp());

class XylophoneApp extends StatelessWidget {
  void playSound(int soundNumber) {
    //int νμμ μΈμλ₯Ό λ°λλ€
    final player = AudioCache();
    player.play('note$soundNumber.wav'); //λ¬λ¬ μ¬μΈκ³Ό ν¨κ» λ°μ μΈμκ° λμ
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
                  playSound(1); //μΈμ μ λ¬
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

μμΈν ν¨ λ³΄κΉ?!

```dart
...


  void playSound(int soundNumber) {
    //int νμμ μΈμλ₯Ό λ°λλ€
    final player = AudioCache();
    player.play('note$soundNumber.wav'); //λ¬λ¬ μ¬μΈκ³Ό ν¨κ» λ°μ μΈμκ° λμ
  }
  
  
...


              FlatButton(
                color: Colors.red,
                onPressed: () {
                  playSound(1); //μΈμ μ λ¬
                },
              ),
              
              
...              
```

λΉ λ°€! 

---
# Dart ν¨μ κΈ°μ΄

μ¬κΈ°μ Dart μΈμ΄μ ν¨μλ₯Ό λμ§μ΄λ³΄μ.  

{} μ€κ΄νΈ μμ μ½λ μ μ²΄λ₯Ό ν¨κ» λ¬ΆκΈ° λλ¬Έμ λͺ¨λ  κ²μ μν  λ,      
μ΄ λͺλ Ή μ€ νλ²μ μ€νλ  λͺλ Ήμ μ΄λ¦μ μ§μ νμ¬ ν¨μλ₯Ό νΈμΆνλ©΄ λλ€.  

```dart
void getMilk() {
	μ€νλ  κΈ°λ₯λ€
}
```

μ΄κ²μ κ°μ₯ κΈ°λ³Έμ μΈ ν¨μμλ€.

() κ΄νΈ μμ ν¨μμ μΈμλ₯Ό μ§μ ν  μ μκ³ ,     
{} μ€κ΄νΈ λ΄λΆμ μ°λ¦¬κ° μ§μ μ μΌλ‘ κ°λ€μ°λ κΈ°λ₯μ λ΄λΉνλ κ²λ€μ λ£μ΄μ€λ€.



```dart
void playSound(String name) {
  final AudioCache player = AudioCache();
  player.play('$name.wav');
}
```

``(String name)`` = input
``('$name.wav')`` = used in the function


λ‘λ΄μκ² "λ§€μ₯μμ μ°μ λ₯Ό κ°μ Έλ€μ€." λΌκ³  μν¨λ€κ³  μκ°ν΄λ³΄μ.   

1λ³μ΄ μλ μλ μμ§ μλκ°?!  

λ΄κ° 2λ³μ μνλ©΄ μΈμκ°μΌλ‘ () κ΄νΈμμ 2λ₯Ό μΈ κ²μ΄κ³ ,   
4λ³μ μνλ©΄ 4λ₯Ό μΈ κ²μ΄λ€.  



μλ₯Ό λ€μ΄,  
Xλ³ μλ₯Ό μ»λ λΉμ©μ κ³μ°ν  μ μλ€.  

μΈμκ°μΌλ‘ 2λ³μ λ£μ΄μ£Όλ©΄    
{} μ€κ΄νΈ λ΄λΆμμ     
μ°μ  νλ³μ΄ 1.5 νμ΄λμΈ κ²½μ°,      
μΈμκ° 2λ³μ λμν΄ μ΄ λΉμ©μΈ 3 νμ΄λλ₯Ό κ³μ°ν΄μ λμ Έμ€ κ²μ΄λ€.

```dart
void getMilk (int bottles) {
    double cost = bottles * 1.5;
}
```

``(int bottles)`` = argument / input 


μ¬κΈ°μ μ€μν 2κ°μ§κ° μλ€.
- λ°μ΄ν° νμμ μ§μ ν΄μΌ ν¨
- μ΄λ¦μ μ§μ ν΄μΌ ν¨   
 ({} μ€κ΄νΈ μμ νμν  λ μ°Έμ‘°ν  μ μλλ‘ μ΄λ¦μ΄ νμν¨)
 


μ΄μ  μ΅μ’μ μΌλ‘ ν¨μνΈμΆν  λ,    
λλ 2λ³ μλ₯Ό μ»λ λΉμ©μ μνλκΉ    
``getMilk(2);`` λΌκ³  νΈμΆμ ν΄μ£Όλ©΄ λλ κ²μ΄λ€.





λ€νΈ ν¨λλ₯Ό ν΅ν΄ νμΈν΄λ³΄μ.

<img width="785" alt="2" src="https://user-images.githubusercontent.com/55340876/74589653-5873af80-504a-11ea-9fbd-0ef2ffcda578.png">


<img width="785" alt="3" src="https://user-images.githubusercontent.com/55340876/74589654-590c4600-504a-11ea-8408-2c82bda321a7.png">



μΈμλ₯Ό μ¬λ¬κ°λ₯Ό μ€ μλ μλλ° μ¬κΈ°μ λ¬Έμ μ μ μΈμμ μμκ° λ°λμμ λμ΄λ€.

<img width="785" alt="4" src="https://user-images.githubusercontent.com/55340876/74589655-59a4dc80-504a-11ea-9024-07d2e24b9b09.png">



Jane How do you do      
μ΄μνλ€... 

μΈμκ°μ΄ λ§κ³  μμ μκ΄μμ΄ λμν΄μ£ΌκΈ° μν΄    
μΈμκ°μ μ΄λ¦μ μ μν΄μ£Όκ³ , {} μ€κ΄νΈλ₯Ό μ μ©ν΄μ£Όμ!   

<img width="785" alt="5" src="https://user-images.githubusercontent.com/55340876/74589656-5ad60980-504a-11ea-9788-cd321919391c.png">




```dart
void getMilk ({int numBottles}) {
    double cost = bottles * 1.5;
}

getMilk(numBottles: 2);
```

### κΌ­κΌ­κΌ­!! μ΄ν΄νκ³  λμ΄κ°μ!!
**μ΄ λΆλΆμ΄ μ΄ν΄κ° μ μκ°λλ°,  
λ―Έλ¦¬ μ΅μ’μ½λλ ν λ² λ³΄μ!!**

<img width="1102" alt="αα³αα³αα΅α«αα£αΊ 2020-02-16 αα©αα₯α« 12 50 27" src="https://user-images.githubusercontent.com/55340876/74590914-6fb89a00-5056-11ea-8d05-bc32ce70e6aa.png">

μ΄λ°μμΌλ‘!!

# λ§ν λΆλΆ 2
- μ€λ‘ν°μ νλ©΄μ κ½μ°¨κ² λΉμ¨μ λ§μΆ°μ μ λ ¬μ ν΄μ€μΌνλλ°,   
 κ°λ‘ μλμΌλ‘ κ½ μ±μμ§κ²λ 
 
 ```dart
 ...
 
 
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
 
 
 ...
 ```
 
 νμ§λ§!! μΈλ‘λ λμ²΄ μ΄μΌν΄μΌνλκ²¨...    
 FlatButtonμ λμ΄κ° μλμΌλ‘ μμ΄μ μ€λ‘ν° μ¬μ΄μ κ°κ²©λ λμ΄μ§κ³ ... ν..    
 
 ν΄λ΅μ?!
 
 
```dart
import 'package:flutter/material.dart';
import 'package:audioplayers/audio_cache.dart';

void main() => runApp(XylophoneApp());

class XylophoneApp extends StatelessWidget {
  void playSound(int soundNumber) {
    //int νμμ μΈμλ₯Ό λ°λλ€
    final player = AudioCache();
    player.play('note$soundNumber.wav'); //λ¬λ¬ μ¬μΈκ³Ό ν¨κ» λ°μ μΈμκ° λμ
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
                    playSound(1); //μΈμ μ λ¬
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



``Expanded`` μμ ―μ FlatButton μ λΆλͺ¨λ‘ ν΄μ£Όλ©΄ λλ€!

## [Expanded Widget](https://api.flutter.dev/flutter/widgets/Expanded-class.html)
- μ¬μ©κ°λ₯ν κ³΅κ°λ€μ μ±μμ£Όλ νμ₯ μμ ―.  



# Dart ν¨μ κΈ°λ₯

ν¨μ νΈμΆ.    
μ΄κ±΄ ν¨μλ₯Ό νΈμΆλ§ ν κ²μ΄μ§ ν¨μλ₯Ό μΆλ ₯ν κ²μ΄ μλλ€.    
μ€μ§μ μΌλ‘ λ·λ¨μμ κ³μ°μ λμμ§λ§ μ°λ¦¬ λμλ μλ³΄μ΄λ κ².

<img width="679" alt="7" src="https://user-images.githubusercontent.com/55340876/74589659-5e699080-504a-11ea-958f-4e5acd5669e2.png">





κΈ°λ₯μ΄ μλ ν¨μλ₯ΌνΈμΆν΄μ μΆλ ₯ν  λ,    
void νμμ λΆκ°νλ€.  

<img width="1008" alt="8" src="https://user-images.githubusercontent.com/55340876/74589661-5f022700-504a-11ea-8584-3ace381691fe.png">



κ·ΈλΌ μ°μ§Έν΄μΌνλ~!

ν¨μμ νμμ λ°κΏμ£Όκ³  return μ λΆμ¬μ μΆλ ₯ν΄μ£Όλ©΄ λλ€.


<img width="1008" alt="9" src="https://user-images.githubusercontent.com/55340876/74589663-5f9abd80-504a-11ea-9f29-321bb900d36c.png">



λ‘λ΄μ΄ μ°μ λ₯Ό μ¬μ€λ ν¨μκ° μλ€κ³  μκ°νμ.  
μΈμλ‘ λμ κ°μ§κ³  μκ³ ,  
μ°μ  νλ³μ λμ  2κ°λΌκ³  ν΄λ³΄μ.  

μ΄ λ, ν¨μμ λ°μ΄ν° νμμ  
μΆλ ₯μ΄ μμμ  νμνλ void νμμ΄ μλλΌ  
μ€μ  ν΄λΉνλ λ°μ΄ν° νμμΌλ‘ λͺμν΄μ£Όμ΄μΌ νλ€!  
λν return ν€μλλ₯Ό μ¬μ©νμ¬ ν¨μμμ λ¬΄μμ΄ μΆλ ₯λλμ§ μ§μ ν΄μ£Όμ΄μΌ νλ€.  

λ§μ½ λ‘λ΄μκ² λμ  5κ°λ₯Ό μ£Όκ³  μ°μ λ₯Ό μ¬μ€λΌκ³  μν¨λ€λ©΄?  
getMilk(5);  
μ°μ  νλ³μ λμ  2κ°λκΉ  
λ‘λ΄μ λμκ² λμ  3κ°λ₯Ό λλ €μ€λ€.  

```dart
int getMilk (int money) {
  return money - 2;
}

int change = getMilk(5);
```


# ν¨μμ 3κ°μ§ κΈ°λ₯ (μμ½)

## 1. λ°λλΌλ§ 
  - μΌλΆ κ³μ°μ μννμ¬ μ²λ¦¬νμ§λ§ λ³Έμ§μ μΌλ‘ μλ ₯κ³Ό μΆλ ₯μ΄ μλ€.

```dart
void getMilk() { κΈ°λ₯ λͺλ Ήμ΄λ€ ...  }

getMilk();
```

## 2. μ΄μ½λ λ§ 
  - μΈμκ°μ μλ ₯ ν  μ μμΌλ©° κ΄νΈ μμ μλ μλ ₯μ λ°λλ€.  
  ν¨μνΈμΆν  λ, μΈμκ°μ λ°μ΄ν° νμμ μ§μ ν΄μ€μΌ νλ€.  
  ν΄λΉ λ°μ΄ν° μ νκ³Ό μΌμΉνλ λ°μ΄ν° λ° ν΄λΉ μ«μ λλ ν΄λΉ μλ ₯ κ°(μΈμκ°) μ΄ ν¨μ λ΄μμ μ¬μ©λλ€.
  
```dart
void getMilk(int bottles) {
    double cost = bottles * 1.5;
}

getMilk(2);
```

## 3. λΈκΈ°λ§ 
  - κ΄νΈ μμ μΈμκ°μ μ€ μ μκ³ ,  
  μ²μμ ν¨μμ λ°μ΄ν° νμμ μ§μ ν΄μ£Όκ³ ,  
  ν¨μ λ΄λΆμ μ§μ ν΄μΌν  λ΄μ©(μ€ν ν  κΈ°λ₯)λ€μ μ€λ€.  
  μΈμκ°μ μ€μ μλ ₯μ μ κ³΅λ°κ³  λ€μμ μν ν  μ μλ κΈ°λ₯μ μΆλ ₯μΌλ‘ μ»κ² λλ€.  
  
```dart
int getMilk(int money) {
    return cost = money * 2;
}

int change = getMilk(5);
```

<img width="1131" alt="10" src="https://user-images.githubusercontent.com/55340876/74589640-4b56c080-504a-11ea-8e27-da8ee48974a7.png">



# μ€λ‘ν° μ΅μ’μ½λ

```dart
import 'package:flutter/material.dart';
import 'package:audioplayers/audio_cache.dart';

void main() => runApp(XylophoneApp());

class XylophoneApp extends StatelessWidget {
  void playSound(int soundNumber) {
    //int νμμ μΈμλ₯Ό λ°λλ€
    final player = AudioCache();
    player.play('note$soundNumber.wav'); //λ¬λ¬ μ¬μΈκ³Ό ν¨κ» λ°μ μΈμκ° λμ
  }

  Expanded bulidKey({Color color, int soundNumber}) {
    return Expanded(
      child: FlatButton(
        color: color,
        onPressed: () {
          playSound(soundNumber); //μΈμ μ λ¬
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



# νμ΄ν ν¨μ
- νμ΄ν ν¨μλ νμ€μ λͺλ Ή μ½λ κ²½μ°μλ§ μλνλ€.

<img width="522" alt="12" src="https://user-images.githubusercontent.com/55340876/74589644-51e53800-504a-11ea-80b2-3f8bbd3b0b1b.png">



λμ€ μ½λλ₯Ό νμ΄ν ν¨μλ‘ κ΅¬ννλ € νλ©΄ λΆκ°νλ€.

<img width="951" alt="13" src="https://user-images.githubusercontent.com/55340876/74589646-527dce80-504a-11ea-830b-53525c74f707.png">



μ¨λ¦¬ νμ€λ§ κ°λ₯νλ€! 


<img width="951" alt="14" src="https://user-images.githubusercontent.com/55340876/74589657-5c073680-504a-11ea-91ee-061462acbab9.png">




# [λ¬΄λ£ μ¬μ΄λ λͺ¨μ μ¬μ΄νΈ](https://freesound.org/)


<br/>


---
---

# Reference  
- [Angela Yu κ°μ(μ λ£)](https://www.udemy.com/course/flutter-bootcamp-with-dart/)
