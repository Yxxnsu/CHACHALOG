---
title: 'π [Flutter] π₯Quiz App / λ¦¬μ€νΈ,μ‘°κ±΄λ¬Έ,OOPπ₯'
date: 2020-02-17 01:18:00
category: 'Flutter'
draft: false
showToc: true
---

# ν΄μ¦ μ± - 1. List μμ±
- μμ ― νμμ List μμ±νμ¬ μμ΄μ½ λμ΄ν΄μ£ΌκΈ°
- ``.add`` λ₯Ό μ΄μ©νμ¬ μ μ κ° ν΄λ¦­νμλ μμ΄μ½ μλ‘ μΆκ°

```dart
import 'package:flutter/material.dart';

void main() => runApp(Quizzler());

class Quizzler extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        backgroundColor: Colors.grey.shade900,
        body: SafeArea(
          child: Padding(
            padding: EdgeInsets.symmetric(horizontal: 10.0),
            child: QuizPage(),
          ),
        ),
      ),
    );
  }
}

class QuizPage extends StatefulWidget {
  @override
  _QuizPageState createState() => _QuizPageState();
}

class _QuizPageState extends State<QuizPage> {
  List<Icon> scoreKeeper = [
    //Icon μμ ―μ ν¬ν¨νλ―λ‘ List μ κΊ½μ  μμ λ°μ΄ν°νμμ κΌ­ λͺμν΄μ€μΌ ν¨
    //String μ΄λΌλμ§ int κ°μ μ ν λ€λ₯Έ μ νμ λ°μ΄ν°νμμ λͺμνλ©΄ μλ¬κ° λλ€.
    Icon(
      Icons.check,
      color: Colors.green,
    ),
    Icon(
      Icons.close,
      color: Colors.red,
    ),
    Icon(
      Icons.close,
      color: Colors.red,
    ),
    Icon(
      Icons.close,
      color: Colors.red,
    ),
    Icon(
      Icons.close,
      color: Colors.red,
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: <Widget>[
        Expanded(
          flex: 5,
          child: Padding(
            padding: EdgeInsets.all(10.0),
            child: Center(
              child: Text(
                'μ΄κ²μ ν΄μ¦ μ±μ΄λ€.',
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontSize: 25.0,
                  color: Colors.white,
                ),
              ),
            ),
          ),
        ),
        Expanded(
          child: Padding(
            padding: EdgeInsets.all(15.0),
            child: FlatButton(
              textColor: Colors.white,
              color: Colors.green,
              child: Text(
                'True',
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 20.0,
                ),
              ),
              onPressed: () {
                //μ μ κ° Trueλ₯Ό ν΄λ¦­νμ λ μλ‘μ΄ μμ΄μ½μ΄ μΆκ°λλ€.
                setState(() {
                  scoreKeeper.add(
                    Icon(
                      Icons.check,
                      color: Colors.green,
                    ),
                  );
                }); //ν¨μμ λμ ν­μ μΈλ―Έμ½λ‘  ; μ΄λ€.
              },
            ),
          ),
        ),
        Expanded(
          child: Padding(
            padding: EdgeInsets.all(15.0),
            child: FlatButton(
              color: Colors.red,
              child: Text(
                'False',
                style: TextStyle(
                  fontSize: 20.0,
                  color: Colors.white,
                ),
              ),
              onPressed: () {
                //The user picked false.
              },
            ),
          ),
        ),
        Row(
          children: scoreKeeper,
        ),
      ],
    );
  }
}

/*
question1: 'νκ΅­μ 4κ³μ μ΄λ€.', true,
question2: '1 + 1 μ 3μ΄λ€.', false,
question3: 'μΈκ°μ νΌλ μ΄λ‘μμ΄λ€.', false,
*/
```
<div align="center">

<img width="300" src="https://user-images.githubusercontent.com/55340876/75015968-37d5aa80-54cd-11ea-8ef2-7c1e095ccc32.gif">

</div>

# Dart - LIST

λ¦¬μ€νΈ = [] μ΄λ€.  
λ¦¬μ€νΈ μμ±μμλ ``List<dataType>`` κΊ½μ  μμ λ°μ΄ν° νμμ κΌ­ λͺμν΄μ£Όμ΄μΌ νλ€.

```dart
void main() {
  
  List<String> myList = [
    'μ§μ£Ό', //0λ²μ§Έ μλ¦¬
    'ν¬λΌ', //1λ²μ§Έ μλ¦¬
    'μμ°', //2λ²μ§Έ μλ¦¬
    'ν¨μ§', //3λ²μ§Έ μλ¦¬
  ];
  
  print(myList[3]);
  
}
```

λ¦¬μ€νΈ λ°°μ΄μ μ²«λ²μ§Έ = 0λ²μ§ΈλΌκ³  λ³΄λ©΄ λλκΉ 

μ΄ λ,  
``print(myList[3]);`` μμ μ½μμ μΆλ ₯λλ κ²μ  
3λ²μ§Έ μλ¦¬μ ``ν¨μ§`` μ΄λ€.  

<br/>

μμΈ λ°©μμΌλ‘ μ κ·Όμ μνλ€λ©΄ μ΄λ°μμΌλ‘λ κ°λ₯νλ€.  

```dart
void main() {
  
  List<String> myList = [
    'μ§μ£Ό', //0λ²μ§Έ μλ¦¬
    'ν¬λΌ', //1λ²μ§Έ μλ¦¬
    'μμ°', //2λ²μ§Έ μλ¦¬
    'ν¨μ§', //3λ²μ§Έ μλ¦¬
  ];
  
//   print(myList[3]);
  
  print(myList.indexOf('ν¬λΌ'));
  
}
```

``print(myList.indexOf('ν¬λΌ'));``  μΆλ ₯μ,   
μ½μμ μΆλ ₯λλ κ²°κ³Όλ ``1`` μ΄λ€.

<br/>

λ¦¬μ€νΈμ λ°μ΄ν°λ₯Ό λ μΆκ°νκ³  μΆμ κ²½μ°μ?  

```dart
void main() {
  
  List<String> myList = [
    'μ§μ£Ό', //0λ²μ§Έ μλ¦¬
    'ν¬λΌ', //1λ²μ§Έ μλ¦¬
    'μμ°', //2λ²μ§Έ μλ¦¬
    'ν¨μ§', //3λ²μ§Έ μλ¦¬
  ];
  
//   print(myList[3]);
  
//   print(myList.indexOf('ν¬λΌ'));
  
  myList.add('λ³΄λ°°');
  
  print(myList);
  
}
```

``.add`` λ₯Ό μ΄μ©ν΄μ μΆκ°νλ©΄ 

<img width="678" alt="αα³αα³αα΅α«αα£αΊ 2020-02-16 αα©αα? 6 02 18" src="https://user-images.githubusercontent.com/55340876/74601914-873f6380-50e6-11ea-8d33-4f2c59c36640.png">

μ΄λ°μμΌλ‘ λ°°μ΄μ λ§¨ λ€μ μΆκ° λλ€.  

'μ€, λλ ν­μ λμ λ§κ³  λ΄κ° μνλ κ³³μ μΆκ°νκ³  μΆμλ°?'  
λΌκ³  μκ°ν  μλ μλ€.  

```dart
void main() {
  
  List<String> myList = [
    'μ§μ£Ό', //0λ²μ§Έ μλ¦¬
    'ν¬λΌ', //1λ²μ§Έ μλ¦¬
    'μμ°', //2λ²μ§Έ μλ¦¬
    'ν¨μ§', //3λ²μ§Έ μλ¦¬
  ];
  
//   print(myList[3]);
  
//   print(myList.indexOf('ν¬λΌ'));
  
//   myList.add('λ³΄λ°°');
  
  myList.insert(2, 'λ³΄λ°°');
  
  print(myList);
  
}
```

``myList.insert(2, 'λ³΄λ°°');`` μ²λΌ,  

``.insert(μνλ μλ¦¬, μμ)`` λ₯Ό μ¨μ£Όλ©΄?

<img width="678" alt="αα³αα³αα΅α«αα£αΊ 2020-02-16 αα©αα? 6 07 05" src="https://user-images.githubusercontent.com/55340876/74601963-282e1e80-50e7-11ea-8d4e-a181acc0b4a0.png">

μνλ μλ¦¬μ μ§μ ν΄μ€ λ°μ΄ν°κ° μκ³   
λλ¨Έμ§λ μμ°¨μ μΌλ‘ λ€λ‘ λ°λ €λ κ²μ νμΈν  μ μλ€.  

ν­μ λ¦¬μ€νΈλ 0, 1, 2 ... λ‘ μμκ° μμλλ€λ κ±Έ κΈ°μ΅ν΄μ£Όμ!

.first λ‘ λ§¨ μ²«λ²μ§Έ μμλ₯Ό λΆλ¬μ€κ±°λ..  
.last λ‘ λ§¨ λ§μ§λ§ μμλ₯Ό λΆλ¬μ€κ±°λ..  
.sort λ©μλ λ±λ±...  

**[List (κ³΅μλ¬Έμ)](https://dart.dev/guides/libraries/library-tour#collections)** ν΅ν΄μ λ λ§μ κ²μ μμλ³Ό μ μλ€!  

<br/>

ν­μ κ³΅λΆλ₯Ό ν  λ,   
κ³΅μλ¬Έμλ₯Ό ν΅μ§Έλ‘ μΈμΈ μκ°λ³΄λ€λ ν λ² κ°λ¨ν κ°μ΄λλ μμ½λ³Έ κ°μ κ²μ νκ³ ,  
λμ€μ λ΄κ° κΈ°λ₯ κ΅¬νμ νμλ‘ ν  λ!  
κ·Έ λ! μ°Ύμλ³΄λ κ²μ΄ λ λ¨Έλ¦Ώμμ μ λ¨λλ€.  
_(μΌλ°μΌκ² μ§λ§?!)_  

![dog](https://user-images.githubusercontent.com/55340876/74602175-688e9c00-50e9-11ea-8f20-4604e279fe6e.gif)

νμ€ν λμ κ²½μ°μλ  
μΈμ΄ λ¬Έλ²λ§ λ₯νκ² μ£Όκ΅¬μ₯μ°½ νλ κ²λ³΄λ€λ  
μ§μ  κΈ°λ₯κ΅¬ννλ©΄μ μ½λμΉ  λ  
μ€νΈλΌν.. μ΄κ±΄ μ΄λ° κ²½μ°μ μ°μ΄λ κ±°μκ΅¬λ  
μλ§? μ΄κ±Έ μ΄ λ μ°λκ±°μΌ?  
μ΄λ κ² λ¨Έλ¦¬μ λ€μ΄μ€λ νμμ΄λΌ μ΄ λ§μ λ°±λ°° κ³΅κ°νλ€.



<br/>
<br/>

---

<br/>

# μκ°μ¬ν β± 

(μ½λμ§λ€ μ€μνμλ?! μμ λ³κ²½νκΈ°)

κ³Όκ±°μ μ½λλ‘ λμκ°κ³  μΆκ±°λ,  
λ€μ λμκ°λλ° λ μ΄μ¬ν μ³€μλ κ·Έ μ½λλ‘ κ°κ³ μΆλ€?!

![2020-02-16 18-31-12 2020-02-16 18_35_44](https://user-images.githubusercontent.com/55340876/74602380-2b2b0e00-50eb-11ea-8ce0-570738be20f9.gif)

VCS -> Local History -> Show History  
λ₯Ό ν΅ν΄ μμ  λ³κ²½μ νκ³  μ§νμ νμ!



<br/>
<br/>

---

<br/>




# μ€νμ§μ  πΎ

μ­κΈμ­κΈ λ°μ€μ΄ κ°λ©΄μ μ€νμ§μ μ ν  λκ° μλ€.  
μλλ‘μ΄λ μ€νλμ€κ° μ€νλΌκ³  μκ°νκΈ° λλ¬Έμ!  
κ·Έλ΄ λλ μ¬μ μ κ°μ μ μ₯ ν΄μ£Όμ.

![2020-02-16 18-42-26 2020-02-16 18_42_55](https://user-images.githubusercontent.com/55340876/74602476-2ca90600-50ec-11ea-8574-2cc148be8bed.gif)



<br/>
<br/>

---

<br/>



# ν΄μ¦ μ± - 2. μ§λ¬Έ μμ±

μ§κΈκΉμ§λ Listμ νλμ½λ©μ ν κ²μ΄κ³ ,  
μ μ κ° μ€μ λ‘ λλ΅ν κ²μ λ°λΌ μ§λ¬Έμ΄ λ°λλ κ²μ κ΅¬νν΄μΌ νλ€!

questionNumberμ μ΄κΈ° μΈνκ°μ 0μ΄κ³ ,   
μ μ κ° true λ₯Ό ν΄λ¦­νμ λ, λ€μ μ§λ¬ΈμΌλ‘ λμ΄κ°μΌ νλ€.  
μ¦,  
questions[questionNumber] μ **questionNumberκ° +1 μ© μ¦κ°ν΄μΌνλ€.**


```dart
...


      onPressed: () {
        questionNumber++;
      },


...
```

``questionNumber++;`` μ λΆλΆμ,  

``questionNumber = questionNumber + 1;`` μ κ°μ λ§μ΄λ€.

![2020-02-21 17-55-43 2020-02-21 17_56_10](https://user-images.githubusercontent.com/55340876/75019038-8423e900-54d3-11ea-97c8-3b236502cb68.gif)

printλ₯Ό μ°μ΄λ³΄λ©΄ μ€μ λ‘ +1μ© μ¦κ°νλκ² μ½μμ°½μ νμΈλλ€.

μ.  
μ΄μ  onPressed λ΄μ ``setState((){});`` λ₯Ό μ΄μ©ν΄μ **μν μλ°μ΄νΈ**λ₯Ό νλ€.  

μ½λλ μ΄λ λ€.

```dart
import 'package:flutter/material.dart';

void main() => runApp(Quizzler());

class Quizzler extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        backgroundColor: Colors.grey.shade900,
        body: SafeArea(
          child: Padding(
            padding: EdgeInsets.symmetric(horizontal: 10.0),
            child: QuizPage(),
          ),
        ),
      ),
    );
  }
}

class QuizPage extends StatefulWidget {
  @override
  _QuizPageState createState() => _QuizPageState();
}

class _QuizPageState extends State<QuizPage> {
  List<Icon> scoreKeeper = [];

  List<String> questions = [
    //μ§λ¬Έ λ¦¬μ€νΈ μμ±
    'νκ΅­μ 4κ³μ μ΄λ€.',
    '1 + 1 μ 3μ΄λ€.',
    'μΈκ°μ νΌλ μ΄λ‘μμ΄λ€.',
  ];

  int questionNumber = 0; //μ§λ¬Έ λλ² μμ±

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: <Widget>[
        Expanded(
          flex: 5,
          child: Padding(
            padding: EdgeInsets.all(10.0),
            child: Center(
              child: Text(
                questions[questionNumber], //0λ²μ§Έ μ§λ¬Έμ λΆλ¬μ¨λ€.
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontSize: 25.0,
                  color: Colors.white,
                ),
              ),
            ),
          ),
        ),
        Expanded(
          child: Padding(
            padding: EdgeInsets.all(15.0),
            child: FlatButton(
              textColor: Colors.white,
              color: Colors.green,
              child: Text(
                'True',
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 20.0,
                ),
              ),
              onPressed: () {
                setState(() {
                  //μν μλ°μ΄νΈ
                  questionNumber++; //+1μ© μ¦κ°
                  print(questionNumber);
                });
              },
            ),
          ),
        ),
        Expanded(
          child: Padding(
            padding: EdgeInsets.all(15.0),
            child: FlatButton(
              color: Colors.red,
              child: Text(
                'False',
                style: TextStyle(
                  fontSize: 20.0,
                  color: Colors.white,
                ),
              ),
              onPressed: () {
                setState(() {
                  //μν μλ°μ΄νΈ
                  questionNumber++; //+1μ© μ¦κ°
                  print(questionNumber);
                });
              },
            ),
          ),
        ),
        Row(
          children: scoreKeeper,
        ),
      ],
    );
  }
}

/*
question1: 'νκ΅­μ 4κ³μ μ΄λ€.', true,
question2: '1 + 1 μ 3μ΄λ€.', false,
question3: 'μΈκ°μ νΌλ μ΄λ‘μμ΄λ€.', false,
*/
```

![2020-02-21 18-10-29 2020-02-21 18_11_16](https://user-images.githubusercontent.com/55340876/75020226-a1f24d80-54d5-11ea-8545-1b44d6e2303c.gif)

<img width="385" alt="αα³αα³αα΅α«αα£αΊ 2020-02-21 αα©αα? 6 11 39" src="https://user-images.githubusercontent.com/55340876/75020260-b6cee100-54d5-11ea-86c1-be9dbb8af7cc.png">

λ§λ€μ΄λμ μ§λ¬Έμ μ΄ 3κ°μ§λ‘(0, 1, 2) μΈλ±μ€ 2κΉμ§μκΈ° λλ¬Έμ μλ¬κ° λ¬λ€.  
3λ²μ§Έ μ§λ¬Έμ μμΌλ λΉμν μλ¬μ΄μ΄μ΄μ΄!!!

<br/>
<br/>

---

<br/>




# \ λ°± μ¬λ¬μ 

```dart
'A slug\'s blood is green'
```

λ¬Έμμ΄μ νμνλ λ°μ΄ν μμ ν κ°μ λ°μ΄νκ° λ μ‘΄μ¬νλ€.  
κ·Έλ λ¬Έμμ΄μ΄ λλλ κ³³μ νλ‘κ·Έλ¨μ΄ ν·κ°λ €μ μλ¬λ₯Ό λΌ μ μμΌλ  
``\'`` λ°± μ¬λ¬μμ ν¨κ» νμλ₯Ό ν΄μ€λ€.



<br/>
<br/>

---

<br/>




# ν΄μ¦ μ± - 3. μ λ΅ νλ³

μ λ΅ λ¦¬μ€νΈλ₯Ό λ§λ€κ³ ,  
μ μ κ° μ νν λ΅κ³Ό ν¨κ» μ‘°κ±΄λ¬Έμ μΆκ°ν΄μ€λ€.

```dart
import 'package:flutter/material.dart';

void main() => runApp(Quizzler());

class Quizzler extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        backgroundColor: Colors.grey.shade900,
        body: SafeArea(
          child: Padding(
            padding: EdgeInsets.symmetric(horizontal: 10.0),
            child: QuizPage(),
          ),
        ),
      ),
    );
  }
}

class QuizPage extends StatefulWidget {
  @override
  _QuizPageState createState() => _QuizPageState();
}

class _QuizPageState extends State<QuizPage> {
  List<Icon> scoreKeeper = [];

  List<String> questions = [
    'νκ΅­μ 4κ³μ μ΄λ€.',
    '1 + 1 μ 3μ΄λ€.',
    'μΈκ°μ νΌλ μ΄λ‘μμ΄λ€.',
  ];

  List<bool> answers = [
    //μ λ΅ λ¦¬μ€νΈ μμ±
    true,
    false,
    false,
  ];

  int questionNumber = 0;

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: <Widget>[
        Expanded(
          flex: 5,
          child: Padding(
            padding: EdgeInsets.all(10.0),
            child: Center(
              child: Text(
                questions[questionNumber],
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontSize: 25.0,
                  color: Colors.white,
                ),
              ),
            ),
          ),
        ),
        Expanded(
          child: Padding(
            padding: EdgeInsets.all(15.0),
            child: FlatButton(
              textColor: Colors.white,
              color: Colors.green,
              child: Text(
                'True',
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 20.0,
                ),
              ),
              onPressed: () {
                bool correctAnswer = answers[questionNumber]; //μ ννμλ,

                if (correctAnswer == true) {
                  //μ‘°κ±΄λ¬Έ μΆκ°
                  print('μ λ΅μ΄μΌ!');
                } else {
                  print('νλ Έμ΄!');
                }

                setState(() {
                  questionNumber++;
                  print(questionNumber);
                });
              },
            ),
          ),
        ),
        Expanded(
          child: Padding(
            padding: EdgeInsets.all(15.0),
            child: FlatButton(
              color: Colors.red,
              child: Text(
                'False',
                style: TextStyle(
                  fontSize: 20.0,
                  color: Colors.white,
                ),
              ),
              onPressed: () {
                bool correctAnswer = answers[questionNumber]; //μ ννμλ,

                if (correctAnswer == false) {
                  //μ‘°κ±΄λ¬Έ μΆκ°
                  print('μ λ΅μ΄μΌ!');
                } else {
                  print('νλ Έμ΄!');
                }

                setState(() {
                  questionNumber++;
                  print(questionNumber);
                });
              },
            ),
          ),
        ),
        Row(
          children: scoreKeeper,
        ),
      ],
    );
  }
}

/*
question1: 'νκ΅­μ 4κ³μ μ΄λ€.', true,
question2: '1 + 1 μ 3μ΄λ€.', false,
question3: 'μΈκ°μ νΌλ μ΄λ‘μμ΄λ€.', false,
*/
```


![2020-02-21 19-34-39 2020-02-21 19_35_37](https://user-images.githubusercontent.com/55340876/75027113-5e9ddc00-54e1-11ea-8865-472030bda9e7.gif)

νλ³μ ν΄μ£Όλ μμ§ λͺ©λ‘μ΄ 3κ°μ§ λΏμ΄λ μλ¬λ λμΌν μ΄μ λ‘ λ°μνλ€.



<br/>
<br/>

---

<br/>


# Dart - IF / ELSE

IFλ¬Έμ κΈ°λ³Έμ μΌλ‘ μ‘°κ±΄μ΄ μλμ§ νμΈνλ€.

```dart
if (track == 'clear') {go();}
```

``λ§μ½ κΈ°μ°»κΈΈμ νΈλμ΄ κΉ¨λνλ€λ©΄ κ°λΌ;``  
λΌλ λ»μΌλ‘ ν΄μνλ©΄ λλ€.  

νμ§λ§ νΈλ μμ μ»€λ€λ λ°μκ° μλ€λ©΄?  
μ‘°κ±΄μ΄ μΆ©μ‘±νμ§ λͺ»νκ±°λ μ§λκ° μ μλ€.  
(μ€κ΄νΈ{} μμ μ§μΉ¨μ μννμ§ μλλ€.)  

μ‘°κ±΄ λΆμΆ©μ‘±μΌ λ μ½λλ μ΄λ λ€.  

```dart
if (track == 'clear') {goStraight();}
else {turnRight();}
```

νΈλμ΄ κΉ¨λνλ©΄ μ­ κ°κ³ ,  
μλλ©΄ μ°νμ ν΄λΌ!

μμΈνλ λ€μκ³Ό κ°μ΄ κ΅¬μ‘°ν λμ΄μλ€.

```dart
if (track == 'clear') {
    goStraight();
} else {
    turnRight();
}
```

λ€νΈ ν¨λλ‘ μ’ λ μμλ³΄μ.

```dart
import 'dart:math';

void main() {
  
  loveCalculator();
  
}

void loveCalculator() {
  
  int loveScore = Random().nextInt(100) + 1; //1~100κ°μ§μ λλ€ μ
  
  print(loveScore);
  
  if (loveScore > 70) {
    print('μ΄μ©λ©΄ λΉμ λ€μ μλ‘ μ¬λνκ³  μλ€μ.');
  } else {
    print('ν€μ΄μ§λκ² λμμ§λ..?');
  }
  
}
```

μΆλ ₯νλ©΄,

![2020-02-17 00-05-20 2020-02-17 00_06_15](https://user-images.githubusercontent.com/55340876/74607130-617f8200-5119-11ea-9026-3f69e7e49076.gif)

μ‘°κ±΄μ ν΄λΉνλ κ²°κ³Όλ¬Όμ λ±μ΄λΈλ€.

<br/>

μ‘°κ±΄λ¬Έμ μ¬μ©λλ κΈ°νΈλ μ¬λ¬κ°μ§κ° μλ€.  

```dart
== //κ°λ€λ©΄
!= //κ°μ§μλ€λ©΄
> //ν¬λ€λ©΄
< //μλ€λ©΄
>= //ν¬κ±°λ κ°λ€λ©΄
<= //μκ±°λ κ°λ€λ©΄

&& //AND κ·Έλ¦¬κ³ 
|| //OR λλ
! //NOT μλλΌλ©΄
```

``else if`` λ‘ μ‘°κ±΄μ μΆκ°ν΄μ€ μλ μλ€.

```dart
if (loveScore > 70) { 
    //do A   
} else if (loveScore > 30) {    
    //do B
} else {
    //do C
}
```


```dart
import 'dart:math';

void main() {
  
  loveCalculator();
  
}

void loveCalculator() {
  
  int loveScore = Random().nextInt(100) + 1; //1~100κ°μ§μ λλ€ μ
  
  print(loveScore);
  
  if (loveScore > 70) {
    print('μ΄μ©λ©΄ λΉμ λ€μ μλ‘ μ¬λνκ³  μλ€μ.');
  } else if (loveScore > 50 && loveScore < 70) {
    print('μ λ§€νλ€μ. μΌλ¨ μ°μ  μν΄λ΄μ!');
  } else if (loveScore < 50 && loveScore > 30) {
    print('ν€μ΄μ§λκ² λμμ§λ..?');
  } else {
    print('κΉ¨μ Έκ·Έλ₯');
  }
  
}
```

![2020-02-17 00-17-40 2020-02-17 00_18_39](https://user-images.githubusercontent.com/55340876/74607291-17979b80-511b-11ea-8bbf-341bcbba14f1.gif)



<br/>
<br/>

---

<br/>


# ν΄μ¦ μ± - 4. μ§λ¬Έ class λ§λ€κΈ°

libμ ``question.dart`` λΌλ μλ‘μ΄ λ€νΈ νμΌμ μμ±νμ.

μ¬κΈ°μλ ``Question`` μ΄λ ν΄λμ€λ₯Ό μμ±ν΄μ£Όμ.

**_question.dart_**
```dart
class Question { //ν΄λμ€ μμ±
  String questionText;
  bool questionAnswer;

  Question({String q, bool a}) {
    //μμ±μ Constructor μμ±

    questionText = q;
    questionAnswer = a;
  }
}
```

μ΄μ  μ΄κ±Έ main.dart μ κ°μ Έμμ μ¨μΌνλλ°  
κ·Έλ¬κΈ° μν΄μ  λ©μΈ νμΌ μλ¨μ μν¬νΈ ν΄μ£Όμ΄μΌ νλ€.

κ·Έλ¦¬κ³  Question λ°μ΄ν° νμμ Q&A λ¦¬μ€νΈ κ°μ²΄(object)λ₯Ό λ§λ€μ.

**_main.dart_**
```dart
import 'package:flutter/material.dart';
import 'package:quizzler/question.dart'; //κ°μ Έλ€ μΈ νμΌ


...


  List<Question> questionBank = [
    //Question λ°μ΄ν° νμμ Q&A λ¦¬μ€νΈ μμ±
    Question(q: 'νκ΅­μ 4κ³μ μ΄λ€.', a: true),
    Question(q: '1 + 1 μ 3μ΄λ€.', a: false),
    Question(q: 'μΈκ°μ νΌλ μ΄λ‘μμ΄λ€.', a: false),
  ];


...
```


μ΄λ‘μ¨ μ΄μ μ μμ±νλ questions λ¦¬μ€νΈ, answers λ¦¬μ€νΈ, q1 μΈμ€ν΄μ€λ νμκ° μμΌλ μ­μ ν΄μ€λ€.  
μ΄μ  Question ν΄λμ€μ μμ±μλ₯Ό ν΅ν΄ λ§λ  μ λ³μ ν λλ§ κ΄λ¦¬ν΄μ£Όλ©΄ λλ€.  

μ€λ₯λ μμ νμ.

**_main.dart_**
```dart
import 'package:flutter/material.dart';
import 'package:quizzler/question.dart'; //κ°μ Έλ€ μΈ νμΌ

void main() => runApp(Quizzler());

class Quizzler extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        backgroundColor: Colors.grey.shade900,
        body: SafeArea(
          child: Padding(
            padding: EdgeInsets.symmetric(horizontal: 10.0),
            child: QuizPage(),
          ),
        ),
      ),
    );
  }
}

class QuizPage extends StatefulWidget {
  @override
  _QuizPageState createState() => _QuizPageState();
}

class _QuizPageState extends State<QuizPage> {
  List<Icon> scoreKeeper = [];

  List<Question> questionBank = [
    //Question λ°μ΄ν° νμμ Q&A λ¦¬μ€νΈ μμ±
    Question(q: 'νκ΅­μ 4κ³μ μ΄λ€.', a: true),
    Question(q: '1 + 1 μ 3μ΄λ€.', a: false),
    Question(q: 'μΈκ°μ νΌλ μ΄λ‘μμ΄λ€.', a: false),
  ];

  int questionNumber = 0;

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: <Widget>[
        Expanded(
          flex: 5,
          child: Padding(
            padding: EdgeInsets.all(10.0),
            child: Center(
              child: Text(
                //questions[questionNumber],
                questionBank[questionNumber].questionText, //Question μμ±μμ λΉλ‘―λ¨
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontSize: 25.0,
                  color: Colors.white,
                ),
              ),
            ),
          ),
        ),
        Expanded(
          child: Padding(
            padding: EdgeInsets.all(15.0),
            child: FlatButton(
              textColor: Colors.white,
              color: Colors.green,
              child: Text(
                'True',
                style: TextStyle(
                  color: Colors.white,
                  fontSize: 20.0,
                ),
              ),
              onPressed: () {
                //bool correctAnswer = answers[questionNumber];
                bool correctAnswer = questionBank[questionNumber]
                    .questionAnswer; //Question μμ±μμ λΉλ‘―λ¨

                if (correctAnswer == true) {
                  print('μ λ΅μ΄μΌ!');
                } else {
                  print('νλ Έμ΄!');
                }

                setState(() {
                  questionNumber++;
                  print(questionNumber);
                });
              },
            ),
          ),
        ),
        Expanded(
          child: Padding(
            padding: EdgeInsets.all(15.0),
            child: FlatButton(
              color: Colors.red,
              child: Text(
                'False',
                style: TextStyle(
                  fontSize: 20.0,
                  color: Colors.white,
                ),
              ),
              onPressed: () {
                //bool correctAnswer = answers[questionNumber];
                bool correctAnswer = questionBank[questionNumber]
                    .questionAnswer; //Question μμ±μμ λΉλ‘―λ¨

                if (correctAnswer == false) {
                  print('μ λ΅μ΄μΌ!');
                } else {
                  print('νλ Έμ΄!');
                }

                setState(() {
                  questionNumber++;
                  print(questionNumber);
                });
              },
            ),
          ),
        ),
        Row(
          children: scoreKeeper,
        ),
      ],
    );
  }
}
```

μλμ λμΌνκ² λλ€.  
μ΄λ κ² classλ₯Ό μμ±νκ³  κ·Έκ²μ μ΄μ©νμ¬ Question λ°μ΄ν° νμμ Q&A λ¦¬μ€νΈ κ°μ²΄(object)λ₯Ό λ§λ€ μ μλ€.



<br/>
<br/>

---

<br/>


# Dart - CLASS

μ μ λ§ λ΄κ° μλΉν μ΄λ €μνλ λΆλΆ....

<img width="400" alt="νΌμ€" src="https://user-images.githubusercontent.com/55340876/75034912-9876de80-54f1-11ea-883a-9c0c417f1dc8.jpg">

μ λ§ ~~μ£½κ² λ~~ λΆλΆμ΄λ€.... x999999999  
ν.. μμν΄λ³΄μ.

<br/>

## ν΄λμ€

**class**  λΌλ **λΈλ£¨νλ¦°νΈ** λ₯Ό μ¬μ©νμ¬ μ±μ λ§λ€κ±°λ€.  

**Class λ  
κ°μ²΄κ° κ°μ ΈμΌ νλ μμ±κ³Ό κΈ°λ₯μ μ μν λ΄μ©μ λ΄κ³  μλ μ€κ³λ μ­ν μ νλ€.  
λ³μμ λ©μλμ μ§ν©μ²΄λΌκ³  λ³΄λ©΄ λλ€.**

λΉμ λ₯Ό λ€μ΄λ³΄μλ©΄..  
μλμ°¨λ₯Ό λΉλμ΄λ³΄λ©΄ 2κ°μ§ μ€μμ μ΄ μλ€.

``Properties``
- color;
- numberOfSeats;

``Methods``
- drive();
- break();

<br/>

**μλμ°¨μ μμ±κ³Ό, κΈ°λ₯μ λ΄λΉνλ λ©μλμ΄λ€.**

```dart
class Car {
  int numberOfDoors = 5;

   void drive() {
     print('wheels start turning');
   }
}
```

- ν΄λμ€ ν€μλλ₯Ό μ¬μ©ν΄μ ν΄λμ€ μ΄λ¦μ λλ¬Έμλ‘ νκ³  λ³μλ₯Ό μ μνλ€.  
- μ μ λ λ³μλ ν΄λΉ ν΄λμ€μ μμ±μ΄λ€.
- ν΄λμ€μ μ€κ΄νΈ {} μμ μ μ λ ν¨μλ λ©μλλΌκ³  νλ€.  
  (ν΄λμ€κ° ν  μ μλ κΈ°λ₯μ λ΄λΉνλ λ©μλκ° λλ ν¨μ μ κ³΅)


μ΄ ν΄λμ€μμ κ°μ²΄λ₯Ό λ§λ€λ©΄ μ΄λ λ€.

```dart
Car myCar = Car(); //Object
```

"μΈκ°" μ΄λΌλ ν΄λμ€λ₯Ό λ§λ€μ΄λ³΄μ.

```dart
void main() {
  Human jane = new Human(); //κ°μ²΄(Human ν΄λμ€μ μΈμ€ν΄μ€)
  print(jane.height); //κ°μ²΄.κ°μ²΄λ³μ
  
  jane.height = 20; //κ°μ²΄.κ°μ²΄λ³μ = κ°
  print(jane.height); //κ°μ²΄: jane, κ°μ²΄λ³μ: height
  
}

class Human { // ν΄λμ€ 
  
  //μμ±(λ©€λ²λ³μ, νλλΌκ³ λ ν¨. κ°μ±μ κ³ μ  λ°μ΄ν°κ° μ μ₯λλ κ³³)
  double height = 15;
  int age = 0;
  
}
```

```dart
//console κ²°κ³Όλ??
15
20
```

ν΄λμ€ μμ μμ± κ°μ΄ μ ν΄μ§μ§ μμΌλ©΄,  
μΆλ ₯μ ``null`` κ°μ΄ λμ¨λ€.

``Human jane = new Human();``   
Human ν΄λμ€μ μΈμ€ν΄μ€μΈ,  
Human μ κ°μ²΄κ° λ§λ€μ΄μ§ κ²μ΄λ€.  
**new** λ κ°μ²΄λ₯Ό μμ±ν΄μ£Όλ ν€μλ μ΄λ€. (dart μΈμ΄λ μ΅μμ΄λΌ μμ¨λ λ¨)    
new ν€μλλ‘ κ°μ²΄κ° λ§λ€μ΄μ§(κ°μ²΄ μμ±)


>β» κ°μ²΄μ μΈμ€ν΄μ€ (μ ν ν¬ μλ° μ°Έκ³ )  
ν΄λμ€μ μν΄μ λ§λ€μ΄μ§ κ°μ²΄λ₯Ό μΈμ€ν΄μ€λΌκ³ λ νλ€.   
κ·Έλ λ€λ©΄ κ°μ²΄μ μΈμ€ν΄μ€μ μ°¨μ΄λ λ¬΄μμΌκΉ? μ΄λ κ² μκ° ν΄ λ³΄μ.   
Animal cat = new Animal() μ΄λ κ² λ§λ€μ΄μ§ catμ κ°μ²΄μ΄λ€.   
κ·Έλ¦¬κ³  catμ΄λΌλ κ°μ²΄λ Animalμ μΈμ€ν΄μ€(instance)μ΄λ€.   
μ¦ μΈμ€ν΄μ€λΌλ λ§μ νΉμ  κ°μ²΄(cat)κ° μ΄λ€ ν΄λμ€(Animal)μ κ°μ²΄μΈμ§λ₯Ό   
κ΄κ³μμ£Όλ‘ μ€λͺν  λ  μ¬μ©λλ€.   
μ¦, "catμ μΈμ€ν΄μ€" λ³΄λ€λ "catμ κ°μ²΄"λΌλ ννμ΄   
"catμ Animalμ κ°μ²΄" λ³΄λ€λ "catμ Animalμ μΈμ€ν΄μ€" λΌλ ννμ΄ ν¨μ¬ μ μ΄μΈλ¦°λ€.  

```dart
Human jane = new Human();
Human jinjoo = new Human();
Human dohee = new Human();
Human bobea = new Human();
...
```

μ΄λ κ² μλ§μ μΈκ° κ°μ²΄λ₯Ό Human ν΄λμ€λ‘ λ§λ€ μ μλ€.


## μμ±μ


νμ§λ§ λ΄κ° λ§λ  μ½λμμλ μΈκ°μ ν€κ° λ€ 15μΌμΉλ‘ νμ΄λλ€.  
μ΄μ²λΌ ν΄λμ€λ₯Ό ν΅ν΄ μμ±λλ κ°μ²΄λ  
ν΄λμ€μ νλλ₯Ό κΈ°λ³Έ μ΄κΈ°κ°μΌλ‘ κ°κ³ μλ€.  

κ° κ°μ²΄λ₯Ό λ€λ₯Έ κ°μΌλ‘ μ΄κΈ°ν νλ λ°©λ² 2κ°μ§
- νλ μ μΈμ μ΄κΈ°κ°μ λ§₯μ΄λ λ°©λ²
- μμ±μμ μ΄κΈ°κ°μ λ§₯μ΄λ λ°©λ²

μμ±μ(Constructor) λ₯Ό μ΄μ©ν΄ μ΄κΈ°κ°μ μ£Όλ λ°©λ²μ μ΄ν΄λ³΄μ.  
**μμ±μλ λ©μλμ λΉμ·νμ§λ§ ν΄λμ€μ μ΄λ¦μ΄ λμΌνκ³  return νμμ΄ μλ€.**  

```dart
void main() {
  Human jane = new Human(15);
  print(jane.height);
  
  Human james = new Human(20); //new ν΄λμ€λͺ(μλ ₯ν­λͺ©, ...)
  print(james.height); //κ°μ²΄: jane, κ°μ²΄λ³μ: height
}

class Human {
  
  double height;
  int age = 0;
  
  Human(double startingHeight) { //μμ±μ
    height = startingHeight;
  }
  
}
```

μμ±μ μ­μ new ν€μλλ‘ κ°μ²΄κ° μμ±λ  λ νΈμΆλλ€.

``Human(double startingHeight)``  
μ μμ±μ λμ ``double startingHeight`` μ κ°μ νμλ‘ νκΈ° λλ¬Έμ  
κ°μ²΄ μμ±μ(μμ±μ¬ νΈμΆμ) λ°λμ κ°μ μ λ¬ν΄μ€μΌ νλ€.

```dart
Human james = new Human();
```

μ΄λ°μμΌλ‘ μ½λ©νλ©΄ κ°μ²΄ μμ± λ°©λ²μ΄ μμ±μ κ·μΉκ³Ό λ§μ§ μμμ μ½λ©νλ©΄ μ€λ₯κ° λ¬λ€.  
μμ±μκ° μ μΈλ κ²½μ°,  
μμ±μ κ·μΉλλ‘λ§ κ°μ²΄λ₯Ό μμ±ν  μ μλ€.


```dart
void main() {
  Human jane = new Human(); //κ°μ²΄(Human ν΄λμ€μ μΈμ€ν΄μ€)
  print('-----jane-----');
  print(jane.height);
  print(jane.age);
  
  Human james = new Human(age: 2, height: 20);
  print('-----james-----');
  print(james.age);
  print(james.height);
  
  Human yammy = new Human(age: 5);
  print('-----yammy-----');
  print(yammy.age);
}

class Human { // ν΄λμ€
  
  //μμ±(λ©€λ²λ³μ, νλλΌκ³ λ ν¨. κ°μ±μ κ³ μ  λ°μ΄ν°κ° μ μ₯λλ κ³³)
  double height;
  int age;
  
  Human({this.height, this.age=3}) { //μμ±μ(λͺλͺλ λ§€κ°λ³μ)
  }
  
}
```

```dart
//console κ²°κ³Όλ??
-----jane-----
null //μ§μ λ height κ°μ΄ μ΄λμλ μμΌλ nullμ΄ λμ¨λ€.
3
-----james-----
2
20
-----yammy-----
5
```

``Human({this.height, this.age=3})``   
μ¬κΈ°μ ``this``λ ν΄λΉ ν΄λμ€μ μμ±μ κ°λ₯΄ν¨λ€.
**μμ±μ(λͺλͺλ λ§€κ°λ³μ)** λ,  
{} μ€κ΄νΈλ‘ μ΄μ©ν΄μ λ§€κ°λ³μλ₯Ό λ¬Άμ΄μ£Όλ©΄ μ΅μμ΄ λμ΄μ κ°μ²΄ μμ±μ, μ νν΄μ μ¬μ©ν΄μ£Όλ©΄λλ€.  

μ΄ λ μ£Όμν μ μ!  
{} μ€κ΄νΈλ₯Ό μ¬μ©ν΄μ λ¬Άμ¬μ§ λͺλͺλ λ§€κ°λ³μλ₯Ό μ¬μ©ν  λλ!!!  
ν¨μ νΈμΆμ.. κ·Έλ¬λκΉ κ°μ²΄κ° μμ±λ  λ λ°λμ λ§€κ°λ³μμ μ΄λ¦μ μ§μ ν΄μ£Όμ΄μΌ νλ€λ κ²μ΄λ€.  
μ΄λ¦μ μ£Όμ§ μμΌλ©΄ μλ¬κ° λ¬λ€.

``Human james = new Human(age: 2, height: 20);``

μ΄λ°μμΌλ‘ μ°κ² λλλ°  
λͺλͺ λ§€κ°λ³μλ μ΅μμ΄λΌκ³  λ§νλ―,  

``Human jane = new Human();``  
μλ¨ μ½λμ²λΌ μμ μμ£Όκ³  νΈμΆν΄λ λκ³  (μ΄ κ²½μ°μλ μ§μ λ μ΅μκ°μΌλ‘ μΆλ ₯λλ€) 

``Human james = new Human(age: 2, height: 20);``  
``Human yammy = new Human(age: 5);``  
μ νν΄μ μ€λ λλ€.  
(μ΄λ¦μ μ μν΄μ λΆλ¬μ€κΈ° λλ¬Έμ μμ±μ λ§€κ°λ³μ μλ¦¬μ λκ°μ΄ κΈ°μ μνκ³ !  
 μμκ° λ°λμ΄λ μκ΄μλ€)


## λ©μλ

λ©μλλ λ¨μν ν΄λμ€ λ΄λΆμ μ μ λ ν¨μμ΄λ€.  

μ΄μ  μΈκ°μκ² ν€λ λμ΄ κΈ°λ³Έμ μΌλ‘ κ°μ ΈμΌνλ μμ±λ μ€¬κ² λ€..  
λ§νλ κΈ°λ₯μ κ°μ§ λ©μλλ₯Ό λ§λ€μ΄λ³΄μ.

>β» λ©μλ (μ ν ν¬ μλ° μ°Έκ³ )  
λ©μλλ₯Ό μ€λͺνκΈ° μ μ λ―ΉμκΈ°λ₯Ό μκ°ν΄λ³΄μ.  
μ°λ¦¬λ λ―ΉμκΈ°μ κ³ΌμΌμ λ£λλ€.   
κ·Έλ¦¬κ³  λ―Ήμλ₯Ό μ΄μ©ν΄μ κ³ΌμΌμ κ°μμ κ³ΌμΌ μ₯¬μ€λ₯Ό λ§λ€μ΄ λΈλ€.   
μ°λ¦¬κ° λ―ΉμκΈ°μ λ£λ κ³ΌμΌμ μλ ₯μ΄ λκ³  κ³ΌμΌ μ₯¬μ€λ κ·Έ μΆλ ₯(λ¦¬ν΄κ°)μ΄ λλ€.   
μ¬κΈ°μ λ―ΉμκΈ°λ λ©μλμ΄λ€. μλ ₯μ κ°μ§κ³  μ΄λ€ μΌμ μνν λ€μμ κ²°κ³Όλ¬Όμ λ΄μ΄λλ κ²,   
μ΄κ²μ΄ λ©μλκ° νλ μΌμ΄λ€.

**βμ΄λ€ μλ ₯κ°μ μ£Όμμ λ μ΄λ€ λ¦¬ν΄κ°μ λλ €μ€λ€β**

```dart
void main() {
  Human jane = new Human(height: 15); //κ°μ²΄(Human ν΄λμ€μ μΈμ€ν΄μ€)
  print('-----jane-----');
  print(jane.height);
  print(jane.age);
  
  jane.talk('λ°°κ³ νμ£½κ²λ€');
  

}

class Human { // ν΄λμ€
  
  //μμ±(λ©€λ²λ³μ, νλλΌκ³ λ ν¨. κ°μ±μ κ³ μ  λ°μ΄ν°κ° μ μ₯λλ κ³³)
  double height;
  int age;
  
  Human({this.height, this.age=3}) { //μμ±μ(λͺλͺλ λ§€κ°λ³μ)
  }
  
  void talk(String whatToSay) { //λ©μλ
    print(whatToSay);
  }
  
}
```

```dart
//console κ²°κ³Όλ??
-----jane-----
15
3
λ°°κ³ νμ£½κ²λ€
```

λ©μλ μ­μ,  
``jane.talk('λ°°κ³ νμ£½κ²λ€');``  
μλ‘μ½λ‘¬ ν΄λμ€ νλμ μ κ·Όν λμ²λΌ ``.`` λ°©μμ μ΄μ©ν΄μ μ κ·Όνλ€.
κ°μ²΄λ ``.`` μ ν΅ν΄ κ·Έκ²μ μννκ±°λ μμ±μ μ»λλ€.

## [(μ°Έκ³ )μ€λ‘ν° μ± / Dart ν¨μ](https://chajinjoo.netlify.app/Flutter/2002/200215_xylophoneAppDartFunction/)

μ κ²μλ¬Όμ ν¨μ λ΄μ©λ μ°Έκ³ νμ!!!

<br/>
<br/>

---

<br/>

# κ°μ²΄μ§ν₯ νλ‘κ·Έλλ° (OOP)

<img width="400" alt="ν λμ" src="https://user-images.githubusercontent.com/55340876/75091111-38de0900-55ad-11ea-87dc-588f9407ee16.jpg">


κ°μ²΄μ§ν₯ λλ¬΄ μ΄λ €μμ ν λμ¨λ€ π€’  
μ§μ¦μ κ³΅λΆ μ’ ν κ±Έ.. OOP ν.. λ°λͺ©μ μ‘λκ΅¬λ..  
μ μ§μμ₯λ²½μ΄ λλ€λμ§ μκ² λ€ λλλμ.. ν¬λΈ‘γ΄λν«γ±νν¬ν‘γ±  

_~~νΌλ₯μΈκ²~~_  **μ΄μ¬ν ν΄λ³΄μ!**


**κ°μ²΄μ§ν₯ νλ‘κ·Έλλ°(Object-Oriented Programming)**  
μ½λκ° κΈΈμ΄μ§μλ‘ λ³΅μ‘μ±μ μ°λ¦¬μκ² μ μ΄ λλ€.  
λ³΅μ‘ν μλ‘ μΆ©λ κ°λ₯μ±μ΄ λμμ§κ³  λ¬Έμ λ₯Ό μΌκΈ°μν€λ©° μ±λ₯μ΄ μ νλλ€.  
λ°λΌμ μ΄λ° λ¬Έμ  λλ¬Έμ κ°μ²΄μ§ν₯ νλ‘κ·Έλλ°μ΄λΌλ κ°λμ΄ λνλ κ²μ΄λ€.  
- νλ‘κ·Έλ¨μ μ΄λ»κ² μ€κ³ν΄μΌ νλμ§μ λν μΌμ’μ κ°λ, λ°©λ²
- νλ‘κ·Έλ¨μ μλ§μ 'κ°μ²΄'λΌλ κΈ°λ³Έ λ¨μλ‘ λλκ³  μ΄ κ°μ²΄λ€μ μνΈμμ©μΌλ‘ μμ νλ λ°©μ

<br/>

---



## κ°μ²΄μ§ν₯ νλ‘κ·Έλλ° μΈμ΄μ νΉμ±

ν¬κ²λ **4κ°μ§**λ‘ λλ μ μλ€.

<div align="center">

<img width="400" alt="oopκΈ°λ₯" src="https://user-images.githubusercontent.com/55340876/75092559-477fec80-55bc-11ea-85b0-bd04abed2bf0.png">

</div>

### - **μΆμν (Abstraction)**
  - κ° ν΄λμ€κ° λ³λμ μ­ν κ³Ό λ³λμ μ§λ¬΄λ₯Ό κ°λλ€.  
    (λ€λ₯Έ μ§μμ λ€λ₯Έ μ­ν κ³Ό λ€λ₯Έ ν΄λμ€λ‘ λΆλ¦¬)
  - **ν΄λμ€ (class) = μΆμ (abstract)**
      - κ³΅ν΅ νΉμ§, μμ 
  - **μ€λΈμ νΈ (object) = μ€μ²΄ (instance)**
      - μ€λΈμ νΈλ ν΄λμ€μ μΈμ€ν΄μ€μ΄λ€. (ν΄λμ€κ° μ€μ²΄λ‘ λ§λ€μ΄μ§ κ²) 
      - κ΅¬μ²΄, μ€μ  μ‘΄μ¬, κ³ μ μ±
  - **λ©μλ (method)**


```dart
void main() {
  Human andreas = Human(startingHeight: 15);
  print(andreas.height);
  andreas.talk('Why is the sky so clear today');
}

class Human{
  
  double height = 15;
  int age = 0;

    Human({double startingHeight}){
    height = startingHeight;
  }
  void talk(String whatToSay){
    print(whatToSay);
  } 
}
```

---

### - **μΊ‘μν (Encapsulation)**
  - λ°μ΄ν° + λ°μ΄ν° μ‘°μλ² μ λ¬Άμ
  - μ λ³΄ μλ **(dartμμλ private νμμΌλ‘ ``_`` μΈλμ€μ½μ΄λ₯Ό λ³μλͺ μμ λΆμΈλ€)**
      - κ° κ°μ²΄μ μμ μ΄ λ€λ₯Έ κ°μ²΄μκ² μ£Όλ μν₯μ μ΅μν
      - μΈλΆ κ°μ²΄κ° μ κ·Όνκ±°λ μ¬μ©νμ§ λͺ»νλ―λ‘ μ μ§λ³΄μμ μννΈμ¨μ΄ νμ₯ μ μ€λ₯λ₯Ό μ΅μν  
        (λ€λ₯Έ μ¬λμ΄ νΉμ μμμ λ°©ν΄νμ§ μλλ‘ private κ³Ό κ°μ μ‘μΈμ€ μμ μλ₯Ό μ€μ  νμ¬ κ° ν΄λμ€ λλ λ°μ΄ν°μ κ²½κ³ λ₯Ό λ§λλ κ²)
  
---

### - **μμμ± (Inheritance)**
  - νλμ ν΄λμ€κ° κ°κ³ μλ νΉμ§(λ°μ΄ν°+λ°μ΄ν° μ‘°μλ²)λ€μ κ·Έλλ‘ λ€λ₯Έ ν΄λμ€κ° λ¬Όλ € λ°λ κ²
  - IS-A κ΄κ³
  - μ¬μ¬μ©
  - μ μ°μ±
  - μμ κ³μΈ΅μ λ°λΌ νΉμ±μ κ³΅μ 
  - μμ λ°μ μμ±μ΄λ λ©μλ μΈμ μλ‘μ΄ μμ±κ³Ό λ©μλ μΆκ° κ°λ₯  
    (μ°λ¦¬ ν΄λμ€κ° μ°λ¦¬κ° νμ₯νλ λ€λ₯Έ ν΄λμ€λ‘λΆν° μ΄λ€ μμ±μ΄λ λ©μλλ₯Ό μ»μ μ μκ² ν¨)

```dart
void main(){
  Car car = Car();
  print(car.numberOfSeat);
  
  ElectricCar myTesla = ElectricCar();

  myTesla.drive();
  myTesla.recharge();
}

class Car{
  int numberOfSeat = 5;
  
  void drive(){
    print('wheels turn.');
  }
}

class ElectricCar extends Car {
  int batteryLevel = 100;
  
  void recharge(){
    batteryLevel = 100;
    print(batteryLevel);
  }
}
```

---

### - **λ€νμ± (Polymorphism)**
  - μμμ±μ κ³μΈ΅μ λ°λΌ κ° ν΄λμ€μ νλμ μ΄λ¦μ λΆμ¬ν¨
  - κ° ν΄λμ€μ λμΌ μ΄λ¦μ λ©μλλ₯Ό μ¬μ©ν  μ μμ  
    (λ€μν ννμ λμΌν λͺλ Ήμ μ¬μ© : κ°μ λͺλ Ήμ κ°κΈ° λ€λ₯Έ μ€λΈμ νΈμ μ€ μ μλ€λ κ²)
  - ν΄λμ€κ° @overrideλ₯Ό μΆκ°νμ¬ νμ₯νλ λΆλͺ¨μ λμΌν μμ± λλ Method λ₯Ό μ¬μ©μ μ μ ν  μ μκ²νκ³ ,  
    Superλ₯Ό μ¬μ©νλ©΄ ν΄λΉ λ©μλλ₯Ό μ»κ³  λ λ§μ μΌμ μΆκ°νκ³  λ€λ₯Έ κ²°κ³Όλ₯Ό μμ  ν  μ μμ

```dart

void main(){
  
  SelfDrivingCar futureCar = SelfDrivingCar('Jakarta');
  futureCar.drive();
}

class Car{
  int numberOfSeat = 5;
  
  void drive(){
    print('wheels turn.');
  }
}

class SelfDrivingCar extends Car {
  String destination;
  SelfDrivingCar(String userSetDestination){
    destination = userSetDestination;
  }
  

  @override
  void drive(){

    super.drive();

    print('setting towards $destination');
  }
}
```

--- 

- μΆκ°μ μΌλ‘ **λ©μΈμ§ μ λ¬ (Message passing)**   
  -  μ€μ  κ΅¬μ²΄μ  λμκ³Ό κ΄κ³μμ΄ "κ°μ²΄" μ κ°μ²΄μ λν μνΈμμ© κ΄μ μ μ κ³΅  
     (κ°μ²΄κ°μ λ©μΈμ§λ₯Ό μ£Όκ³ λ°μ μ€ν)

<br/>

---

**κ°μ²΄μ§ν₯ λΆμ/μ€κ³**
1. λ¬Έμ  μμ­μμ λ°°μ°(actor) λ₯Ό μ°Ύμλ΄κ³ 
2. κ° λ°°μ°λ€μ μ±μκ³Ό μ­ν μ μ μνκ³ 
3. λ°°μ°λ€κ°μ κ΄κ³λ₯Ό μ§μ νκ³ 
4. κ° λ°°μ°λ€μ λν λλ³Έ(script)λ₯Ό μ΄λ€.
   
<br/>

- μ¦,
  μλ³νκ³  μΌλ°ννκ³ (object, class)   
  λμλ€ κ°μ κ΄κ³(inheritance, embedded) λ₯Ό μ€μ νκ³ ,   
  μνΈμμ© νλλ‘(behavior) νλ€.

<br/>


**μΊ‘μν(μΆμν λ₯λ ₯), μμμ±(λΆλ₯νλ λ₯λ ₯), λ€νμ±(κ°μ λ°©λ²μΌλ‘ λ€λ£¨κΈ°),  
λ©μΈμ§ μ λ¬(μ€μ‘΄νλ κ°μ²΄λ€μ΄ μνΈμμ©)  
κ°μ²΄μ§ν₯μ μ¬λμ μΆμλ₯λ ₯, μΈμλ°©λ²μ κ°κΉμ΄ κ°λ° λ°©λ²λ‘ .**

<br/>

<img width="500" alt="λͺμ" src="https://user-images.githubusercontent.com/55340876/75091945-25836b80-55b6-11ea-8c99-0d1fe6c8a118.jpeg">

λ­μ©λΌκ³  μ§μ§ λ­μ©κ³ μ μ©κ³  λ­μλ¦¬μ¬μ¬μ¬λ¨ΈλΌγγλνγ£γγλνλλγ  
ν... λ¨Έλ¦¬μ λ£μ λ¨Έλ¦¬μ λ£μ..  
μ§μ£ΌμΌ μ΄ν΄ν΄μΌ μ΄λ€..  
μ΄ν΄ν΄μΌ μ¨λ¨Ήλλ€..  

``μ€λ ₯ = μ°λ΄`` μ΄λ€..  

**λλ λλ¨Έλ¦¬κ° μλλ€ ν μμλ€ μμ΄μΊλμ!**  
**λλ λλ¨Έλ¦¬κ° μλλ€ ν μμλ€ μμ΄μΊλμ!**  
**λλ λλ¨Έλ¦¬κ° μλλ€ ν μμλ€ μμ΄μΊλμ!**  

## π€―κ²λκ² ν·κ°λ¦° λΆλΆ μ¬μ λ¦¬

```dart
void main() {
  
  Human jin = new Human(height: 180);
  
  print('λλ μμ§ μ±μ₯κΈ°λΌ ν€κ° ${jin.height}cm μΌ!');
  jin.eat();
  
  print('-------------------------------');
  
  Human joo = new Human();
  
  print('λλ ν€κ° ${joo.height}cm μμ λ©μ·μ΄..');
  joo.eat();
  
  print('-------------------------------');
  
  Human2 won = new Human2();
  
  print('λλ μ±μ₯κΈ° λ©μΆ°μ ${won.height}cm μ΄μΌ γ γ  λμ΄λ ${won.age}μ΄ μ΄μΌ.');
  won.eat();
  
}

class Human {
  double height;
  
  Human({this.height = 160});
  
  void eat() {
    print('λ§λΌν λ¨Ήμ μΈκ° μ¬κΈ°μ¬κΈ° λΆμ΄λΌ!');
  }
  
}

class Human2 extends Human {
  int age;  
  
  Human2({this.age=20}) : super();
  
  @override  
  void eat() {
//     super.eat();
    print('μ€λ ν λ¨Ήμ μΈκ° μ¬κΈ°μ¬κΈ° λΆμ΄λΌ!');
  }
}
```

```dart
//console κ²°κ³Όλ??
λλ μμ§ μ±μ₯κΈ°λΌ ν€κ° 180cm μΌ!
λ§λΌν λ¨Ήμ μΈκ° μ¬κΈ°μ¬κΈ° λΆμ΄λΌ!
-------------------------------
λλ ν€κ° 160cm μμ λ©μ·μ΄..
λ§λΌν λ¨Ήμ μΈκ° μ¬κΈ°μ¬κΈ° λΆμ΄λΌ!
-------------------------------
λλ μ±μ₯κΈ° λ©μΆ°μ 160cm μ΄μΌ γ γ  λμ΄λ 20μ΄ μ΄μΌ.
μ€λ ν λ¨Ήμ μΈκ° μ¬κΈ°μ¬κΈ° λΆμ΄λΌ!
```

<img width="1269" alt="αα³αα³αα΅α«αα£αΊ 2020-02-23 αα©αα? 5 02 22" src="https://user-images.githubusercontent.com/55340876/75106296-46070080-565e-11ea-8b67-94250fe4c83f.png">

**μλΈ ν΄λμ€λ μνΌ ν΄λμ€μμ μμ±μλ₯Ό μμλ°μ§ μλλ€!!!!**  
**extendsλ₯Ό μ¬μ©νμ¬ μμ ν΄λμ€λ₯Ό λ§λ€κ³  superλ₯Ό μ¬μ©νμ¬ λΆλͺ¨ ν΄λμ€(μμ)λ₯Ό μ°Έμ‘°λ§!!! νλ€.**


<br/>
<br/>

---

<br/>

# ν΄μ¦ μ± - 5. μΆμν

μ½λκ° μ μ²΄μ μΌλ‘ λλ¬΄ κΈΈμ΄μ‘λ€.  
νμΌμ λλ μ λͺ¨λνλ₯Ό μμΌλ³΄μ.  

**question.dart**
```dart
class Question {
  String questionText;
  bool questionAnswer;

  Question(String q, bool a) {
    //μμ±μ Constructor μμ±

    questionText = q;
    questionAnswer = a;
  }
}
```

**quiz_brain.dart**

```dart
import 'question.dart';

class QuizBrain {
  //ν΄μ¦κ° ν΄μΌνκ³  ν  μ μλ λͺ¨λ  κ²μ μ μ

  List<Question> questionBank = [
    Question('νκ΅­μ 4κ³μ μ΄λ€.', true),
    Question('1 + 1 μ 3μ΄λ€.', false),
    Question('μΈκ°μ νΌλ μ΄λ‘μμ΄λ€.', false),
    Question('μμ΄λ νμΆ©λ₯μ΄λ€.', true),
    Question('μΈμ΄κ³΅μ£Όμ μλ©μ λ¬Όκ±°νμ΄ λμ΄ μ¬λΌμ§λ κ²μ΄λ€.', true),
    Question('λ©λμ¬μ λμ μ³λ€λ³΄λ©΄ λλ‘ λ³νλ€.', true),
    Question('νλ£¨λ 12μκ°μ΄λ€.', false),
    Question('νκ°μ κ²¨μΈμ΄ λλ©΄ μ€μΌμ΄νΈμ₯μΌλ‘ λ°λλ€.', false),
    Question('κ°μμ§μ κ³ μμ΄λ μΉνλ€.', false),
    Question('νμμ λ΄λ°°λ₯Ό λ§μ΄ νμ λ λ°λ³λ  κ°λ₯μ±μ΄ λλ€.', true),
    Question('Dart λ κ΅¬κΈμ΄ κ°λ°ν νλ‘κ·Έλλ° μΈμ΄μ΄λ€.', true),
    Question('μ΄μ½λ¦Ώμ κ°μμ§μ μ¬μ₯κ³Ό μ κ²½κ³μ μν₯μ λ―ΈμΉλ€. κ°μμ§μκ² λ¨Ήμ΄λ©΄ μ£½μ μλ μλ€.', true),
    Question('λλ‘κ΅ν΅λ² : μ€μΏ¨μ‘΄μ μ νμλλ 30km μ΄λ΄λ‘ μ νλλ€.', true),
  ];
}
```

**main.dart**

```dart
import 'package:flutter/material.dart';
import 'quiz_brain.dart';

QuizBrain quizBrain = new QuizBrain(); //μ§λ¬Έ κ°μ²΄ μμ±


...


              child: Text(
                quizBrain.questionBank[questionNumber].questionText,


...


                bool correctAnswer =
                    quizBrain.questionBank[questionNumber].questionAnswer;
...


                bool correctAnswer =
                    quizBrain.questionBank[questionNumber].questionAnswer;


...
```

ν΄μ¦λ₯Ό μν μ§λ¬Έ λ¦¬μ€νΈλ₯Ό λ³λμ κ°μ²΄λ‘ λ§λ€μλ€.

λ§μ½   
sport_brain, music_brain, picture_brain λ±  
μ¬λ¬ νμΌμ λ€λ₯Έ μ₯λ₯΄μ ν΄μ¦ λ¦¬μ€νΈλ€μ΄ μλ€κ³  μΉμ.

μ₯λ₯΄λ§λ€ λ€λ₯Έ ν΄μ¦λ₯Ό λΆλ¬μ€κ³  μΆμ λμλ  
``QuizBrain quizBrain = new QuizBrain();``  
μ λΆλΆμ κ°μ²΄λ₯Ό μλ§κ² λ³κ²½ν΄μ£Όλ©΄ λλ€. (import μμ§λ§κ³ !)



<br/>
<br/>

---

<br/>

# ν΄μ¦ μ± - 6. μΊ‘μν

```dart
...


    bool correctAnswer =
        quizBrain.questionBank[questionNumber].questionAnswer;


...
```

main.dart μ μλ¨ μ½λλ₯Ό ν λ² λ³΄μ.  
μ΄ μ½λλ ν΄μ¦ λ¦¬μ€νΈμ λ΅κ³Ό μΌμΉνλ©΄ μ λ΅, μλλ©΄ λ‘μ΄λΌκ³  λ§ν΄μ€λ€.


```dart
...


  List<Question> questionBank = [
    Question('νκ΅­μ 4κ³μ μ΄λ€.', true),


...
```

μ΄ μ§λ¬Έμ μ€μ  λ΅μ true μ΄λ€.  
νμ§λ§ λ΄κ° κ°μ λ‘ λ΅μ μ€λ€λ©΄?  

![2020-02-22 22-26-26 2020-02-22 22_27_13](https://user-images.githubusercontent.com/55340876/75093144-9761b200-55c2-11ea-9c39-235a4bc8ff37.gif)

```dart
...


    onPressed: () {
      quizBrain.questionBank[questionNumber].questionAnswer = false;

      bool correctAnswer =
          quizBrain.questionBank[questionNumber].questionAnswer;


...
```

λ³΄λΌ.  
νκ΅­μ 4κ³μ μ΄λλ μ§λ¬Έμ falseλ₯Ό μ€λ κ°μ λ‘ λ΅μ λ§₯μ¬μ μ λ΅μ΄λΌκ³  λ¨λ κ²μ!!  

μ΄λ κ² main.dart νμΌμμ quiz_brain νμΌμ μμ±μ κ°μ λ‘ μ κ·Όνμ¬ νλ¦° μ λ³΄λ‘ μμ ν  μ μκ³ ,    
μ΄λ° κ²½μ°κ° μκΈ°λ©΄ μ±μ΄ μμμΉ μμ λ°©μμΌλ‘ λμνκ² λλ€.

μ΄λ΄ λ νμν κ²μ΄ **μΊ‘μν**μ **μ λ³΄ μλμ±**μ΄λ€.

> λ μ€ν λμΌλ‘ λ§νλ©΄  
> 
μ¨μ΄ν° ν΄λμ€κ° μκ³  μ°ν ν΄λμ€κ° μλ€.   
μ¨μ΄ν°κ° μ°νλ₯Ό λ°©ν΄νλ κ²μ μν κΉ?  
μ¨μ΄ν°κ° κ°μκΈ° μλ¦¬ μ€μΈ μ°ννν κ°μ "λ μλ¦¬ μ’ μ λλ‘ ν΄!" λΌκ³  νλ€λ©΄?  
μ΄μ²κ΅¬λ μλ μν©μ΄μ§ μλ?  
λΉμ°ν λκ΅¬λ μκΈ° μλ¬΄λ₯Ό λ°©ν΄λ°λ κ²μ μμΉ μλλ€.  
μ¨μ΄ν° ν΄λμ€λ 'μλ¦¬μ¬ μ°Έκ²¬νκΈ°' λΌλ μ½λκΉμ§ μμ΄λ©° μ½λλ λ κΈΈμ΄μ§λ€.  
>
**μλ‘ ν°μΉνμ§ μκ²λ κ΅¬μ­μ μ² μ ν λΆλ¦¬νκ³  μμ μ μΌλ§ νκ²νμ!**

λͺ¨λ  ν΄λμ€λ λ³λμ λͺ¨λλ‘ κ΅¬μ±λλ€.

**quiz_brain.dart**
```dart
...


  List<Question> _questionBank = [


...
```

<img width="769" alt="αα³αα³αα΅α«αα£αΊ 2020-02-22 αα©αα? 10 49 45" src="https://user-images.githubusercontent.com/55340876/75093502-a6962f00-55c5-11ea-9e01-b3aa80901a07.png">


``_questionBank``  

μ§λ¬Έ λ¦¬μ€νΈ λ³μλͺ μμ ``_`` μ μΆκ°νλ©΄ ``private νμ`` μΌλ‘ μΈμνλ©° μΈλΆμμ μ κ·Όμ λͺ»νκ² λλ€.  

μ΄λ‘μ¨ μΈλΆμμλ λμ΄μ  ``_questionBank`` μ κ·Όλ, μμ λ λΆκ°νλ€.

κ·ΈλΌ μ΄λ»κ² μ§λ¬Έ λ¦¬μ€νΈλ₯Ό λ©μΈ νμΌλ‘ κ°μ Έμ€λκ³ ??  
μ§λ¬Έ λ¦¬μ€νΈ λ΄λΉμμ μ κ·Όμ λͺ»νλ μ°λ¦¬λ λ΄λΉμ λ§κ³  μμλ°μ μ λ₯Ό λ°λ¦¬κ³  μ€λ©΄ λλ€.  

class μμ λ©μλλ₯Ό λ§λ€μ΄μ λΆλ¬μ€μ!
**(κ°μ ν΄λμ€ μμ μλ κ²μ private νμμ΄λΌλ λΆλ¬μ¬ μ μλ€!)**

**quiz_brain.dart**

```dart
...


    Question('λλ‘κ΅ν΅λ² : μ€μΏ¨μ‘΄μ μ νμλλ 30km μ΄λ΄λ‘ μ νλλ€.', true),
  ];

  String getQuestionText(int questionNumber) { //μ§λ¬Έ λ©μλ
    return _questionBank[questionNumber].questionText;
    //_questionBank μ questionNumber(μΈλ±μ€λ₯Ό μλ―Έ)μ μ§λ¬Έμ λ§νλ€.
  }

    bool getCorrectAnswer(int questionNumber) { //λ΅λ³ λ©μλ
    return _questionBank[questionNumber].questionAnswer;
  }
}
```

**main.dart**

```dart
...

          child: Text(
          //quizBrain.questionBank[questionNumber].questionText,
          quizBrain.getQuestionText(questionNumber),
        
...

          onPressed: () {
            bool correctAnswer = quizBrain.getCorrectAnswer(questionNumber);

...

          onPressed: () {
            bool correctAnswer = quizBrain.getCorrectAnswer(questionNumber);

...
```
questionNumber λ μ²μμ 0μΌλ‘ μΈνλμ΄ μμΌλκΉ  
ν΄μ¦ λλ‘ κ°μ ν΄λΉνλ μ²«λ²μ§Έ μ§λ¬Έμ λ°κ²λλ€. 

λ΅λ³λ κ°μ λ°©μμΌλ‘ λ§λ€μ΄μ€λ€!

μΊ‘μνλ₯Ό ν΅ν΄ μ΄μ  μΈλΆμ λ°©ν΄λ₯Ό λ°μ§ μλλ€.

μ μ΄μ  λ§μ§λ§ μ§λ¬Έλ§ κ°λ©΄ ν°μ§λ μλ¬λ₯Ό μμ ν΄λ³΄μ.   
(λ€μ μ§λ¬Έμ΄ μμΌλ μλ¬κ° λλ μν©)

**quiz_brain.dart**

```dart
...

class QuizBrain {
  //ν΄μ¦κ° ν΄μΌνκ³  ν  μ μλ λͺ¨λ  κ²μ μ μ

  int _questionNumber = 0; //main.dart μμ μλΌμ΄

...

  void nextQuestion() {
    if (_questionNumber < _questionBank.length - 1) {
      //_questionNumberκ° _questionBankμ κΈΈμ΄λ₯Ό -1ν 12κ° λλ μκ° μ‘°κ±΄μ΄ falseκ° λλκΉ ++νμ§ μμ
      _questionNumber++;
    }
    print(_questionNumber);
    print(_questionBank.length);
  }

  String getQuestionText() {
    //λ©μλ
    return _questionBank[_questionNumber].questionText;
    //_questionBank μ questionNumber(μΈλ±μ€λ₯Ό μλ―Έ)μ μ§λ¬Έμ λ§νλ€.
  }

  bool getCorrectAnswer() {
    return _questionBank[_questionNumber].questionAnswer;
  }
}
```

**main.dart**

```dart
...

      child: Text(
        quizBrain.getQuestionText(),

...

      onPressed: () {
        bool correctAnswer = quizBrain.getCorrectAnswer();

...

        setState(() {
          quizBrain.nextQuestion();
        });

...

      onPressed: () {
        bool correctAnswer = quizBrain.getCorrectAnswer();

...

        setState(() {
          quizBrain.nextQuestion();
        });

...
```







<br/>
<br/>

---

<br/>

# ν΄μ¦ μ± - 7. μμμ±

μ°λ¦¬λ λ§κ³  λ€λ₯Έ μ½λλ‘ μΆμνλ₯Ό ν  λ   
κΈ°λ₯λ€μ΄ μλ‘ μ€λ³΅λμ§ μλλ‘ ν΄λμ€μ λ³λμ λͺ¨λμ μ¬μ©νλ―λ‘   
κ°μ²΄λ₯Ό λ§λ€ λ **μμ**μ΄ μ λ§ μ€μνλ€.

```dart
void main() {
  
  Car myNormalCar = new Car();
  print(myNormalCar.numberOfSeat);
  myNormalCar.drive();
}

class Car {
  int numberOfSeat = 5;
  
  void drive() {
    print('λ°ν΄κ° κ΅΄λ¬κ°λ€.');
  }
}
```

```dart
//console κ²°κ³Όλ??
5
λ°ν΄κ° κ΅΄λ¬κ°λ€.
```

Car ν΄λμ€λ₯Ό λ§λ€κ³ ,  
κΈ°λ³Έκ°μΌλ‘ μΉ΄μνΈλ 5κ°κ° μ£Όμ΄μ§λ€.  
κ·Έλ¦¬κ³  λͺ¨λ  μ°¨μ μ£Όν λ°©λ²μ΄ μλ―μ΄,  
κΈ°λ₯μΌλ‘ drive λ©μλλ₯Ό νΈμΆν΄μ λ¨μν λ°ν΄λ§ λλ €λ³΄μ.  

μ€κ³λ₯Ό νμΌλ λλ§μ μ°¨ κ°μ²΄λ₯Ό μμ±ν΄λ³΄μ.  
``Car myNormalCar = Car();``  
λ°λ‘ μ€μ λ μΉ΄μνΈκ° μμΌλ κΈ°λ³Έκ° 5κ° λμ¬ κ²μ΄κ³ ,  
.drive() λ₯Ό νΈμΆνλ©΄ λ°ν΄κ° λ κ²μ΄λ€.  

μ°λ¦¬λ μ΄λ―Έ μμ μ λ°°μ κΈ°μ ν΄λμ€ κ°μ²΄κ° μ΄λ°μμΌλ‘ μλνλ λ°©μμ΄ μ΅μνλ€.  
κ·Έλ¬λ λ€λ₯Έ μ νμ μλμ°¨λ₯Ό λ§λ€κ³  μΆλ€λ©΄?  
μ κΈ° μλμ°¨?    
κ°μλ¦° μλμ°¨?  
νμμ΄ μλμ°¨?  
**μμ±μ κ°μ§λ§ κΈ°λ₯μ΄ λ€λ₯Έ μλμ°¨λ₯Ό λ§λ€μ΄λ³΄μ.**

```dart
class Car {
  int numberOfSeat = 5;
  
  void drive() {
    print('λ°ν΄κ° κ΅΄λ¬κ°λ€.');
  }
}
```

μ ν΄λμ€λ₯Ό μμ±νλ©΄μ κΈ°μ‘΄μ Car ν΄λμ€μ μ΄ μμ±κ³Ό κΈ°λ₯λ€μ μ΄λ μΈμμ λ€μ μ°λ..  
λΉμ°ν λ°ν΄ λ€κ°, μνΈ λ€μ―μ, λ¬Έμ§ λ€κ° λ±λ±..  
μΌλ° μλμ°¨λ κ°μ μ λ€μ λ μ¨μ€μΌνλ..  
μκ°λ­λΉλ€!  

λλ κ²μΌλ₯Έ κ°λ°μλκΉ λ¨Έλ¦¬λ₯Ό κ΅΄λ¦¬κ² λ€.   
μ, Car ν΄λμ€μ κ²λ€μ μμλ°μμ°λ©΄ λκ² μ§!  

```dart
class ElectricCar extends Car {
  
}
```

``ElectricCar`` ν΄λμ€λ extends κ΅¬λ¬Έμ ν΅ν΄ ``Car`` ν΄λμ€μ λͺ¨λ  κ²μ κ°κ² λλ€.  
μ΄λ‘μ¨ Car ν΄λμ€κ° λΆλͺ¨κ° λκ³ ,  
κ·Έ λΆλͺ¨μ μ¬μ°μ μμμΈ ElectricCar ν΄λμ€κ° μμλ°λ κ²μ΄λ€.

```dart
void main() {
  
//   Car myNormalCar = new Car();
//   print(myNormalCar.numberOfSeat);
//   myNormalCar.drive();
  
  ElectricCar myTesla = new ElectricCar();
  myTesla.drive();
}

class Car { //λΆλͺ¨ ν΄λμ€
  int numberOfSeat = 5;
  
  void drive() {
    print('λ°ν΄κ° κ΅΄λ¬κ°λ€.');
  }
}

class ElectricCar extends Car { //μμλ°μ ν΄λμ€
  
}
```
μ½λλ₯Ό μΆκ°ν΄μ μ½μμ μ°μΌλ©΄?  

```dart
//console κ²°κ³Όλ??
λ°ν΄κ° κ΅΄λ¬κ°λ€.
```

**WOW!!!**  

ElectricCar ν΄λμ€λ κΈ°μ‘΄ Car ν΄λμ€μλ λΉμ°ν μλ!!  
**μ κΈ°μλμ°¨λ§μ μμ±κ³Ό κΈ°λ₯λ€μ μΆκ°ν΄μ€μ μ¬μ©ν  μλ μλ€.**  
κ°λ Ή,  
λ°°ν°λ¦¬λ 100% λ‘ μμνκ³ ,  
κ³ μ₯λλ©΄ 100% λ‘ μ¬μΆ©μ ν  μ μκ² μ¬μΆ©μ  κΈ°λ₯μ μ κ³΅ν΄μ£Όμ.

```dart
...

class ElectricCar extends Car {
  int batteryLevel = 100;
  
  void recharge() {
    batteryLevel = 100;
  }
}
```

μλ‘μ½λ‘¬ λΆλͺ¨ ν΄λμ€λ‘λΆν° μμμ λ°κ³ λμ   
λΆλͺ¨μ λ€λ₯Έ μνλ λͺ¨λ  κ²(λΆλͺ¨μκ² μλ μμ±, κΈ°λ₯λ€)μ μΆκ°ν΄μ£Όλ©΄ λλ€.


<br/>
<br/>

---

<br/>

# ν΄μ¦ μ± - 8. λ€νμ±

ν μ±ν°λ§λ€ λλ  κ² κ°μΌλ©΄μλ λλμ§ μλ μμ €λΌμ  μ°μ΅λμ κ°μ...  

![1539617118_8424_zzal](https://user-images.githubusercontent.com/55340876/75097105-19b19c80-55ea-11ea-8333-e11c210fd262.png)

bmiκ³μ°κΈ°λ.. climaλ.. λΉνΈμ½μΈ.. μ±ν.. μνκ΄λ¦¬..  
ν κ² κ²λ κΆ€λ§μλ° λ²μ¨ λλ¬΄λ¦¬..
λ΄ λ³Όμ νλ₯΄λκ±° λ­ν..  
λ΄κ° νμ°½μμ μ μ΄λ κ²κΉμ§ κ³΅λΆλ₯Ό ν μ μ΄ μλκ°  
μ§λ λ μΌ λλ λ°μ±νΌ.. μthλμ£! π

ν.. λλμ΄ OOP λ§μ§λ§ κΈ°λ₯ **λ€νμ±**μ κΉλ³΄μ!  

νλ‘κ·Έλ¨μ μΆμννκ³  λ³λμ μ­ν μ μν λ³λμ λͺ¨λμ λ§λ€μλ€.  
κ·Έλ¦¬κ³  λΆλͺ¨ ν΄λμ€λ‘λΆν° λ§μ νλμ μμ λ°μλ€.  
μ΄ λ κΈ°λ³Έμ μΌλ‘ λΆλͺ¨ ν΄λμ€μ μ¬λ³Έμ μ»λλ€. 

μ΄λ° μκ°μ΄ λ€ μ μλ€.

>λ΄κ° CarλΌλ λΆλͺ¨ ν΄λμ€λ‘λΆν° μμλ°μμ κ³΅μ€λΆμμλμ°¨λ₯Ό λ§λ€μλλ°  
μ.. μμλ°μ κΈ°λ₯μ΄λ μμ± λͺκ°κ° κ±°μ¬λ €!   
μ« λ°κΏμΌ λ  κ² κ°μλ°.. 
μλκ° μλμ΄λλ§νΌ κ³΅μ€λΆμμΈλ° μ΄?!  
λ°ν΄ νμμμμ!  
μλ νλμ λλλ° λ°ν΄ κ΅΄λ¬κ°λ κΈ°λ₯μ μμλκ²¨?  
μμλ°μ λΆλΆ λͺκ°λ§ μ« λ°κΎΈλ©΄ κΉμ§λκ² λλ°?  
μ¬λνκ±΄ κ°λ€λ²λ¦¬μκΌ¬!!

```dart
void main() {
  
//   Car myNormalCar = new Car();
//   print(myNormalCar.numberOfSeat);
//   myNormalCar.drive();
  
//   ElectricCar myTesla = new ElectricCar();
//   myTesla.drive();
  
  LevitatingCar myMagLev = new LevitatingCar();
  myMagLev.drive();
  
}

class Car {
  int numberOfSeat = 5;
  
  void drive() {
    print('λ°ν΄κ° κ΅΄λ¬κ°λ€.');
  }
}

class ElectricCar extends Car {
  int batteryLevel = 100;
  
  void recharge() {
    batteryLevel = 100;
  }
}

class LevitatingCar extends Car {
  
  @override
  void drive() {
    print('κ³΅μ€μ λ¬λ€');
  }
}
```

```dart
//console κ²°κ³Όλ??
κ³΅μ€μ λ¬λ€
```

<br/>

- ``@override`` : drive()λ₯Ό μ¬μ μν  μ μλλ‘ μ΄μ  λ²μ κ³Ό λκ°μ΄ λ³΄μ΄λ μμ²΄ λ²μ μ drive()λ₯Ό λ§λ¦

<br/>


μν  
λΆλͺ¨ ν΄λμ€λ‘λΆν° μμλ°μ λ©μλλ₯Ό λ΄ μλ§λλ‘ λ€μ μ¬μ μ ν΄μ μ°λ€λ!  
μλ°νλ€.  

μμ¨μ£Όνμλμ°¨λ νλ λ§λ€μ΄λ³΄μ!

```dart
void main() {
  
  SelfDrivingCar myWaymo = new SelfDrivingCar('μ μ£Όλ');
  
  myWaymo.drive();
  
}

class Car {
  int numberOfSeat = 5;
  
  void drive() {
    print('λ°ν΄κ° κ΅΄λ¬κ°λ€.');
  }
}

class ElectricCar extends Car {
  int batteryLevel = 100;
  
  void recharge() {
    batteryLevel = 100;
  }
}

class LevitatingCar extends Car {
  
  @override //μ¬μ μ ν€μλ
  void drive() {
    print('κ³΅μ€μ λ¬λ€');
  }
}

class SelfDrivingCar extends Car { //μ»€μ€ν μμ±μ μΆκ°
  
  String destination;
  
  SelfDrivingCar(String userSetDestination) {
    destination = userSetDestination;
  }
  
  @override
  void drive() {
    super.drive();
    
    print('$destinationλ‘ μμμ μ΄μ ν΄λΌ.');
  }
}
```


```dart
//console κ²°κ³Όλ??
λ°ν΄κ° κ΅΄λ¬κ°λ€.
μ μ£Όλλ‘ μμμ μ΄μ ν΄λΌ.
```

``@override`` λ₯Ό ν΅ν΄ ``drive()`` λ©μλλ₯Ό μ¬μ μνλ©΄μ  
``super.drive();`` λ₯Ό μ΄μ©νμ¬ 
λΆλͺ¨ λ©μλμ ``λ°ν΄κ° κ΅΄λ¬κ°λ€.`` λ₯Ό λν΄ λ΄κ° ν₯μμν¨ κΈ°λ₯λ ν¨κ» μΆλ ₯νλ€.  

μ΄μ²λΌ λΆλͺ¨λ‘λΆν° λ¬Όλ €λ°μ μ μμκ³Ό λμμ κ·Έκ±Έ ν₯μμν¬ μλ μλ€.  
λ©μλλ₯Ό μ¬μ μ νμ¬ μ‘°κΈ λ³κ²½ν  μ μλ κ²μ΄λ€.


<br/>
<br/>

---

<br/>

# ν΄μ¦ μ± - 9. scoreKeeper, alert μΆκ°

**main.dart**
```dart
...

class _QuizPageState extends State<QuizPage> {
  List<Icon> scoreKeeper = [];

  void checkAnswer(bool userPickedAnswer) {
    bool correctAnswer = quizBrain.getCorrectAnswer();

    setState(() {
      if (userPickedAnswer == correctAnswer) {
        scoreKeeper.add(Icon(
          Icons.check,
          color: Colors.green,
        ));
      } else {
        scoreKeeper.add(Icon(
          Icons.close,
          color: Colors.red,
        ));
      }

      quizBrain.nextQuestion();
    });
  }

...
```

μ΄μ  κ²½κ³ μ°½μ λμλ³΄μ!

1. **[rflutter_alert 1.0.3](https://pub.dev/packages/rflutter_alert#-readme-tab-)** μμ λνλμ λ³΅μ¬
2. pubspec.yaml λνλμ λΆλΆμ λΆμ¬λ£κΈ° (λ€μ¬μ°κΈ° μ£Όμ!)
3. main.dartμ import μΆκ°
   ```dart
   ...

   import 'package:rflutter_alert/rflutter_alert.dart';

   ...
   ```
4. quiz_brain.dartμ λ§μ§λ§ μ§λ¬Έμ νμΈνλ λ©μλ μΆκ°
  (ν΄μ¦κ° λλ λμ μμν΄μΌν  λ printλ¬ΈμΌλ‘ trueλ₯Ό λ°ννλμ§ νμΈν!)
  ```dart
  ...

      bool isFinished() {
      if (_questionNumber >= _questionBank.length - 1) {
        //_questionNumberκ° _questionBankμ κΈΈμ΄λ₯Ό -1ν 12λ³΄λ€ ν¬κ±°λκ°μΌλ©΄ printλ¬Έ μ€ν
        print('Now returning true');
        return true;
      } else {
        return false;
      }
     }
  }
  ```
5. quiz_brain.dartμ _questionNumberλ₯Ό λ€μ 0μΌλ‘ μ€μ νλ reset () λ©μλ μΆκ°
   ```dart
   ...

        void reset() {
        _questionNumber = 0;
      }
    }
   ```

6. main.dart λ μμ  
      ```dart
      ...

          setState(() {
            if (quizBrain.isFinished() == true) {
              //ν΄μ¦ λμ λλ¬νλμ§ νμΈ
              Alert(
                //rFlutter_alertλ₯Ό μ¬μ©νμ¬ κ²½κ³  νμ
                //κΈ°λ³Έ μ½λ νμμ μ¬μ΄νΈλ₯Ό μ°Έκ³ νμ
                context: context,
                title: "Finished!",
                desc: "ν΄μ¦κ° λλ¬μ΅λλ€!",
              ).show();

              quizBrain.reset(); //questionNumberλ₯Ό μ¬μ€μ νκ³ 

              scoreKeeper = []; //μ μλ₯Ό μ΄κΈ°νν¨
            } else {
              //λμ λλ¬νμ§ λͺ»ν κ²½μ° ELSEλ μλ λ΅λ³ νμΈ λ¨κ³λ₯Ό μννλ€ π
              if (userPickedAnswer == correctAnswer) {

      ...
      ```

<div align="center">

<img width="350" alt="ν΄μ¦μ±μμ±λ³Έ" src="https://user-images.githubusercontent.com/55340876/75098412-3bfee680-55f9-11ea-83be-89e7d18aa086.gif">


**λλμ΄ μμ±!!!!! νννννν**

</div>


<br/>


---
---

# Reference  
- [Angela Yu κ°μ(μ λ£)](https://www.udemy.com/course/flutter-bootcamp-with-dart/)
- [ν΄λμ€, κ°μ²΄, μΈμ€ν΄μ€μ μ°¨μ΄](https://gmlwjd9405.github.io/2018/09/17/class-object-instance.html)
- [μ ν ν¬ μλ° - κ°μ²΄μ§ν₯ νλ‘κ·Έλλ°](https://wikidocs.net/218)
- [ν΄λμ€](https://gbs1995.tistory.com/10?category=797664)
- [λͺλͺ μμ±μ](https://beomseok95.tistory.com/306)
- [λ³μμ ν¨μμ κΈ°λ³Έ](https://sysocoder.com/flutter-%EB%B3%80%EC%88%98%EC%99%80-%ED%95%A8%EC%88%98%EC%9D%98-%EA%B8%B0%EB%B3%B8/)
- [ν΄λμ€, μ λλ¦­](https://sysocoder.com/flutter-%ed%81%b4%eb%9e%98%ec%8a%a4class-%ec%a0%9c%eb%84%88%eb%a6%adgenerics/)
- [κ°μ²΄μ§ν₯](https://www.slideshare.net/plusjune/ss-46109239)
- [](https://steemit.com/dart/@wonsama/flutter-dart-3-a-tour-of-the-dart-language)