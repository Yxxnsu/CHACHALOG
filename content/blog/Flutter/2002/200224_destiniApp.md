---
title: '๐ [Flutter] Challenge - Destini App'
date: 2020-02-24 03:28:00
category: 'Flutter'
draft: false
showToc: true
---



# main.dart

```dart
import 'package:flutter/material.dart';
import 'story_brain.dart';

//TODO: Step 15 - ์ฑ์ ์คํํ๊ณ  ์ฒซ ๋ฒ์งธ ์คํ ๋ฆฌ์์ ํ๋ฉด์ด ์๋ฐ์ดํธ๋๋์ง ํ์ธํ  ์ ์๋ค.

void main() => runApp(Destini());

class Destini extends StatelessWidget {
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData.dark(),
      home: StoryPage(),
    );
  }
}

//TODO: Step 9 - StoryBrain ํด๋์ค์์ ์ storyBrain ๊ฐ์ฒด๋ฅผ ๋ง๋ค๊ณ  story_brain.dart ํ์ผ import ํด๋ผ
StoryBrain storyBrain = new StoryBrain();

class StoryPage extends StatefulWidget {
  _StoryPageState createState() => _StoryPageState();
}

class _StoryPageState extends State<StoryPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        //TODO: Step 1 - ์ปจํ์ด๋ ์์ ฏ ์์ ๋ฐฑ๊ทธ๋ผ์ด๋ ์ด๋ฏธ์ง๋ฅผ ๋ฃ์ด๋ผ
        decoration: BoxDecoration(
          //์ปจํ์ด๋์ ๋ฐฐ๊ฒฝ์ ์ฑ์
          image: DecorationImage(
            image: AssetImage('images/background.png'), //์ด๋ฏธ์ง ๋ถ๋ฌ์ค๊ธฐ
            fit: BoxFit.cover, //์ด๋ฏธ์ง ๋น์จ์ ์ ์งํ๋ฉด์ ๋์คํ๋ ์ด ์ปค๋ฒ ์ ์ฒด๋ฅผ ์ฑ์
          ),
        ),
        padding: EdgeInsets.symmetric(vertical: 50.0, horizontal: 15.0),
        constraints: BoxConstraints.expand(),
        child: SafeArea(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: <Widget>[
              Expanded(
                flex: 12,
                child: Center(
                  child: Text(
                    //TODO: Step 10 - storyBrain์ ์ฌ์ฉํ์ฌ ์ฒซ ๋ฒ์งธ ์คํ ๋ฆฌ ์ ๋ชฉ์ ๊ฐ์ ธ์์ ์ด ํ์คํธ ์์ ฏ์ ํ์ํด๋ผ
                    storyBrain.getStory(),
                    style: TextStyle(
                      fontSize: 25.0,
                    ),
                  ),
                ),
              ),
              Expanded(
                flex: 2,
                child: FlatButton(
                  onPressed: () {
                    //Choice 1 made by user.
                    //TODO: Step 18 - storyBrain์์ nextStory () ๋ฉ์๋๋ฅผ ํธ์ถํ๊ณ  ์ฌ์ฉ์๊ฐ ์ ํํ๋๋ก 1์ ์ ๋ฌํ๋ผ
                    setState(() {
                      storyBrain.nextStory(1);
                    });
                  },
                  color: Colors.red,
                  child: Text(
                    //TODO: Step 13 - storyBrain์ ์ฌ์ฉํ์ฌ choice1์ ์ ํํ๋ผ
                    storyBrain.getChoice1(),
                    style: TextStyle(
                      fontSize: 20.0,
                    ),
                  ),
                ),
              ),
              SizedBox(
                height: 20.0,
              ),
              Expanded(
                flex: 2,
                //TODO: Step 26 - Flutter Visibility ์์ ฏ์ ์ฌ์ฉํ์ฌ์ด FlatButton์ ๋ํํ๋ผ
                //TODO: Step 28 - Visibility Widget์ "visible"ํน์ฑ์ storyBrain์ buttonShouldBeVisible () ๋ฉ์๋ ์ถ๋ ฅ๊ณผ ๋์ผํ๊ฒ ์ค์ ํ๋ผ
                child: Visibility(
                  //Visibility ์์ ฏ์ ํ์ ์์ ์์ ฏ์ ๋ณด์ฌ์ค๊ฑด์ง ์จ๊ธธ๊ฑด์ง ์ฌ๋ถ๋ฅผ ์ ์ดํจ
                  //์ด๊ฒ์ด true๋ก ์ค์ ๋๋ฉด, ๊ฐ์์ฑ ์์ ฏ์ ํ์๊ฐ ํ์๋๊ณ , ๊ฑฐ์ง์ด๋ฉด ํ๋ฉด์์ ํ์ ์์ ฏ์ด ์ ๊ฑฐ๋จ
                  visible: storyBrain
                      .buttonShouldBeVisible(), //์ด๋ก์จ ์ง๋ฌธ์ ๋์์ ๋๋ฒ์งธ ํ๋ ๋ฒํผ์ด ์ฌ๋ผ์ง
                  child: FlatButton(
                    onPressed: () {
                      //Choice 2 made by user.
                      //TODO: Step 19 - storyBrain์์ nextStory () ๋ฉ์๋๋ฅผ ํธ์ถํ๊ณ  ์ฌ์ฉ์๊ฐ ์ ํํ 2๋ฅผ ์ซ์๋ก ์ ๋ฌํ๋ผ
                      setState(() {
                        storyBrain.nextStory(2);
                      });
                    },
                    color: Colors.blue,
                    child: Text(
                      //TODO: Step 14 - storyBrain์ ์ฌ์ฉํ์ฌ choice2๋ฅผ ์ ํํ๋ผ
                      storyBrain.getChoice2(),
                      style: TextStyle(
                        fontSize: 20.0,
                      ),
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

//TODO: Step 24 - ์ฑ์ ์คํํ๊ณ  ์ ํ ๋ฒํผ์ ๋๋ ์ ๋ ์คํ ๋ฆฌ๋ฅผ ๋ณ๊ฒฝํ๊ธฐ ์ํด ์ด ํ์ผ์ ์ถ๊ฐํด์ผํ๋ ์ฝ๋๋ฅผ ์ฐพ์๋ณด๋ผ
//setState(() {}); ๋ฉ์๋ ์์ ๋ฃ์ด์ผ์ง!

//TODO: Step 29 - WOW! ์ฑ์ ์คํํ๊ณ  ์คํ ๋ฆฌ ์์ ๋ผ์ธ์ ๋ํด ํ์คํธํ์ฌ ๋ชจ๋  ๋จ๊ณ๋ฅผ ์๋ฃํ๋์ง ํ์ธํ๋ผ
```

# story.dart

```dart
//TODO: Step 2 - Story ๋ผ๋ ํด๋์ค๋ฅผ ๋ง๋ค์ด๋ผ
//TODO: Step 3 - ํด๋์ค ๋ด๋ถ์ ํ์คํธ๋ฅผ ์ ์ฅํ  ๊ธฐ๋ณธ ์์ฑ 3๊ฐ๋ฅผ ๋ง๋ค์ด๋ผ A. storyTitle, B. choice1, C. choice2.
//TODO: Step 4 - ์์ฑ์๋ฅผ ์์ฑํด ์์ฑ์ ์ด๊ธฐํํด๋ผ
class Story {
  String storyTitle;
  String choice1;
  String choice2;

  Story({this.storyTitle, this.choice1, this.choice2});
}
```

# story_brain.dart

```dart
//TODO: Step 6 - story.dart ํ์ผ์ import ํด๋ผ
import 'story.dart';
//TODO: Step 5 - StoryBrain ํด๋์ค๋ฅผ ๋ง๋ค์ด๋ผ

class StoryBrain {
  //TODO: Step 7 - StoryBrain์์ storyData๋ฅผ ๊ฐ์ธ ์์ฑ์ผ๋ก ํฌํจํ๋๋ก ์๋ ํ์ ์ฃผ์์ ์์ ๋ผ
  //TODO: Step 7-1 - ์ด๋, storyData๋ ์ด๋ฆ์ด ์ ์๋์ด ์์ผ๋ story.dart์ ์๋ Story ํด๋์ค์ ์์ฑ์๋ ๋ช๋ช ๋งค๊ฐ๋ณ์๋ก {} ์ค๊ดํธ๋ฅผ ์ธ์๊ฐ์ ์์์ค์ผํ๋ค
  List<Story> _storyData = [
    Story(
        storyTitle:
            'Your car has blown a tire on a winding road in the middle of nowhere with no cell phone reception. You decide to hitchhike. A rusty pickup truck rumbles to a stop next to you. A man with a wide brimmed hat with soulless eyes opens the passenger door for you and asks: "Need a ride, boy?".',
        choice1: 'I\'ll hop in. Thanks for the help!',
        choice2: 'Better ask him if he\'s a murderer first.'),
    Story(
        storyTitle: 'He nods slowly, unphased by the question.',
        choice1: 'At least he\'s honest. I\'ll climb in.',
        choice2: 'Wait, I know how to change a tire.'),
    Story(
        storyTitle:
            'As you begin to drive, the stranger starts talking about his relationship with his mother. He gets angrier and angrier by the minute. He asks you to open the glovebox. Inside you find a bloody knife, two severed fingers, and a cassette tape of Elton John. He reaches for the glove box.',
        choice1: 'I love Elton John! Hand him the cassette tape.',
        choice2: 'It\'s him or me! You take the knife and stab him.'),
    Story(
        storyTitle:
            'What? Such a cop out! Did you know traffic accidents are the second leading cause of accidental death for most adult age groups?',
        choice1: 'Restart',
        choice2: ''),
    Story(
        storyTitle:
            'As you smash through the guardrail and careen towards the jagged rocks below you reflect on the dubious wisdom of stabbing someone while they are driving a car you are in.',
        choice1: 'Restart',
        choice2: ''),
    Story(
        storyTitle:
            'You bond with the murderer while crooning verses of "Can you feel the love tonight". He drops you off at the next town. Before you go he asks you if you know any good places to dump bodies. You reply: "Try the pier".',
        choice1: 'Restart',
        choice2: '')
  ];

  //TODO: Step 8 - _storyData์์ ์ฒซ ๋ฒ์งธ storyTitle์ ๋ฆฌํดํ๋ getStory () ๋ฉ์๋๋ฅผ ์์ฑํ๋ผ
  String getStory() {
    return _storyData[_storyNumber].storyTitle;
  }

  //TODO: Step 11 - _storyData์์ ์ฒซ ๋ฒ์งธ choice1์ ๋ํ ํ์คํธ๋ฅผ ๋ฆฌํดํ๋ getChoice1 () ๋ฉ์๋๋ฅผ ์์ฑํ๋ผ
  String getChoice1() {
    return _storyData[_storyNumber].choice1;
  }

  //TODO: Step 12 - _storyData์์ ์ฒซ ๋ฒ์งธ choice2์ ๋ํ ํ์คํธ๋ฅผ ๋ฆฌํดํ๋ getChoice2 () ๋ฉ์๋๋ฅผ ์์ฑํ๋ผ
  String getChoice2() {
    return _storyData[_storyNumber].choice2;
  }

  //TODO: Step 16 - ๊ฐ 0์ผ๋ก ์์ํ๋ storyNumber๋ผ๋ ํน์ฑ์ ์์ฑํ๋ผ. ์ฌ์ฉ์๊ฐ ํ์ฌ๋ณด๊ณ ์๋ ์คํ ๋ฆฌ๋ฅผ ์ถ์ ํ๋ ๋ฐ ์ฌ์ฉ๋๋ค
  int _storyNumber = 0;

//TODO: Step 23 - getStory (), getChoice1 () ๋ฐ getChoice2 () ๋ด๋ถ์์ storyNumber ํน์ฑ์ ์ฌ์ฉํ์ฌ ํญ์ ์ฒซ ๋ฒ์งธ (0) ํญ๋ชฉ์ด ์๋ ์๋ฐ์ดํธ ๋ ์คํ ๋ฆฌ ๋ฐ ์ ํ ์ฌํญ์ ๊ฐ์ ธ์๋ผ
//_storyData[storyNumber].storyTitle; ์๋ก ์์ผ๋ก ๋ถ๋ฌ์ฃผ๋ฉด ๋จ

//TODO: Step 25 - story_brain.dart ๋ง ์ก์ธ์ค ํ  ์ ์๋๋ก storyNumber ํน์ฑ์ ๊ฐ์ธ ํน์ฑ์ผ๋ก ๋ณ๊ฒฝํ๋ผ. ์ด๋ฆ (storyNumber)์ ๋ง์ฐ์ค ์ค๋ฅธ์ชฝ ๋จ์ถ๋ก ํด๋ฆญํ๊ณ  ๋ฆฌ ํฉํฐ-> ์ด๋ฆ ๋ฐ๊พธ๊ธฐ๋ฅผ ์ ํํ์ฌ ์ฌ์ฉ ๋ ๋ชจ๋  ์์น์์ ๋ณ๊ฒฝํ๋ผ

  //TODO: Step 17 - nextStory()๋ผ๋ ๋ฉ์๋๋ฅผ ์์ฑํ๋ผ. ์ถ๋ ฅ์ด ์์ด์ผํ์ง๋ง ์ฌ์ฉ์๊ฐ ์ ํํ ๋ฒํธ๊ฐ(int) ๋๋ 1๊ฐ์ ์๋ ฅ์ด ์์ด์ผ ํ๋ค.
  //TODO: Step 20 - ์คํ ๋ฆฌ ๊ณํ์ ์ฌ๊ธฐ์ ๋ค์ด๋ก๋ํด๋ผ : https://drive.google.com/uc?export=download&id=1KU6EghkO9Hf2hRM0756xFHgNaZyGCou3
  //TODO: Step 21 - ์คํ ๋ฆฌ ๊ณํ์ ์ฌ์ฉํ์ฌ nextStory()๋ฅผ ์๋ฐ์ดํธํ์ฌ ์ฌ์ฉ์๊ฐ ์ ํํ ๋ด์ฉ์ ๋ฐ๋ผ storyNumber๋ฅผ ๋ณ๊ฒฝํ๋ผ. ์ : storyNumber๊ฐ 0 ์ธ ๊ฒฝ์ฐ ์ฌ์ฉ์๊ฐ choiceNumber1์ ์ ํํ ๊ฒฝ์ฐ storyNumber๋ 2๊ฐ ๋์ด์ผํ๋ค
  void nextStory(int choiceNumber) {
    if (choiceNumber == 1 && _storyNumber == 0) {
      _storyNumber = 2;
    } else if (choiceNumber == 2 && _storyNumber == 0) {
      _storyNumber = 1;
    } else if (choiceNumber == 1 && _storyNumber == 1) {
      _storyNumber = 2;
    } else if (choiceNumber == 2 && _storyNumber == 1) {
      _storyNumber = 3;
    } else if (choiceNumber == 1 && _storyNumber == 2) {
      _storyNumber = 5;
    } else if (choiceNumber == 2 && _storyNumber == 2) {
      _storyNumber = 4;
    }
    //TODO: Step 22 - nextStory()์์ storyNumber๊ฐ 3 ๋๋ 4 ๋๋ 5์ ๊ฐ์ผ๋ฉด ๊ฒ์์ด ๋๋ฌ์์ ์๋ฏธํ๋ฉฐ storyNumber๋ฅผ 0์ผ๋ก ์ฌ์ค์ ํ๋ restart() ๋ผ๋ ๋ฉ์๋๋ฅผ ํธ์ถํด์ผํ๋ค
    else if (_storyNumber == 3 || _storyNumber == 4 || _storyNumber == 5) {
      restart();
    }
  }

  void restart() {
    _storyNumber = 0;
  }

//TODO: Step 27 - storyNumber๊ฐ 0 ๋๋ 1 ๋๋ 2์ธ์ง (๋ ๋ฒํผ ๋ชจ๋ ์ ํ ์ฌํญ์ ํ์ํด์ผํ๋ ๊ฒฝ์ฐ) ํ์ธํ๋ buttonShouldBeVisible ()์ด๋ผ๋ ๋ฉ์๋๋ฅผ ์์ฑํ๊ณ ,์ด ๊ฒฝ์ฐ true๋ฅผ ๋ฆฌํดํ๋ฉด ๊ทธ๋ ์ง ์์ผ๋ฉด false๋ฅผ ๋ฆฌํดํด์ผํ๋ค. ์คํ ๋ฆฌ๊ฐ ๋๋๋ฉด ๋ถํ์ํ ๋๋ฒ์งธ ํ๋ ๋ฒํผ์ ์์ ์ผํ๋๊น
  bool buttonShouldBeVisible() {
    //You could also just check if (_storyNumber < 3)
    if (_storyNumber == 0 || _storyNumber == 1 || _storyNumber == 2) {
      return true;
    } else {
      return false;
    }
  }
}
```


<br/>


## ์กฐ๊ฑด๋ฌธ ๋ถ๋ถ ์๋ฃจ์

ํ ..


```dart
...

  void nextStory(int choiceNumber) {
    if (choiceNumber == 1 && _storyNumber == 0) {
      _storyNumber = 2;
    } else if (choiceNumber == 2 && _storyNumber == 0) {
      _storyNumber = 1;
    } else if (choiceNumber == 1 && _storyNumber == 1) {
      _storyNumber = 2;
    } else if (choiceNumber == 2 && _storyNumber == 1) {
      _storyNumber = 3;
    } else if (choiceNumber == 1 && _storyNumber == 2) {
      _storyNumber = 5;
    } else if (choiceNumber == 2 && _storyNumber == 2) {
      _storyNumber = 4;
    } else if (_storyNumber == 3 || _storyNumber == 4 || _storyNumber == 5) {
      restart();
    }
  }

...
```


์ ์กฐ๊ฑด๋ฌธ ๋๋ฌด ๋ธ๊ฐ๋ค ๋๋์ด๋ค.  
์ด ๋ถ๋ถ์ ์ฌ๋ฌ ์๋ฃจ์์ด ์๋ค.

**์๋ฃจ์1**

์ผํญ ์ฐ์ฐ์์ ํจ๊ป ์ค์์น ์ผ์ด์ค๋ฅผ ์ฐ๋ ๊ฒ

```dart
  void nextStory(int choiceNumber) {
    switch (_storyNumber) {
      case 0:
        _storyNumber = choiceNumber == 1 ? 2 : 1;
        break;
      case 1:
        _storyNumber = choiceNumber == 1 ? 2 : 3;
        break;
      case 2:
        _storyNumber = choiceNumber == 1 ? 5 : 4;
        break;
      case 3: //End of story
      case 4: //End of story
      case 5: //End of story
        restart();
        break;
      default:
        _storyNumber = 0;
    }
  }
```


---



**์๋ฃจ์2**
```dart
  void nextStory(int userNumber) {
    switch (userNumber) {
      case 1:
        if (_storyNumber == 0 || _storyNumber == 1) {
          _storyNumber = 2;
        } else if (_storyNumber == 2) {
          _storyNumber = 5;
        }
        else{
          restart();
        }
        break;
      case 2:
        if (_storyNumber == 0) {
          _storyNumber = 1;
        } else if (_storyNumber == 1) {
          _storyNumber = 3;
        } else {
          _storyNumber = 4;
        }
        break;
    }
  }
```


---



**์๋ฃจ์3**

```dart
  void  nextStory ( int userChoice) {
    _storyNumber = {
       0 : { 1 :  2 , 2 :  1 }
       1 : { 1 :  2 , 2 :  3 }
       2 : { 1 :  5 , 2 :  4 }
       3 : { 1 :  0 , 2 :  0 } ,
       4 : { 1 :  0 , 2 : 0 },
       5 : { 1 :  0 , 2 :  0 },
    } [_ storyNumber] [userChoice];
  }
```



---


**์๋ฃจ์4**

```dart
Map<int, Map<int, int>> choices = {
    0: {1: 2, 2: 1},
    2: {1: 5, 2: 4},
    1: {1: 2, 2: 3},
  };
  List<int> endStoriesBranch = [3, 4, 5];
  void nextStory(int choiceNumber) {
    if (endStoriesBranch.contains(_storyNumber)) {
      reset();
      print('end of the story');
    } else {
      _storyNumber = this.choices[_storyNumber][choiceNumber];
    }
    print('User choosen $choiceNumber redirecting to story $_storyNumber');
  }
```



<br/>


---
---

# Reference  
- [Angela Yu ๊ฐ์(์ ๋ฃ)](https://www.udemy.com/course/flutter-bootcamp-with-dart/)