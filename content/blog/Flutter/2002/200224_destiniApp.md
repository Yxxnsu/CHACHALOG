---
title: '💎 [Flutter] Challenge - Destini App'
date: 2020-02-24 03:28:00
category: 'Flutter'
draft: false
showToc: true
---



# main.dart

```dart
import 'package:flutter/material.dart';
import 'story_brain.dart';

//TODO: Step 15 - 앱을 실행하고 첫 번째 스토리에서 화면이 업데이트되는지 확인할 수 있다.

void main() => runApp(Destini());

class Destini extends StatelessWidget {
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData.dark(),
      home: StoryPage(),
    );
  }
}

//TODO: Step 9 - StoryBrain 클래스에서 새 storyBrain 객체를 만들고 story_brain.dart 파일 import 해라
StoryBrain storyBrain = new StoryBrain();

class StoryPage extends StatefulWidget {
  _StoryPageState createState() => _StoryPageState();
}

class _StoryPageState extends State<StoryPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        //TODO: Step 1 - 컨테이너 위젯 안에 백그라운드 이미지를 넣어라
        decoration: BoxDecoration(
          //컨테이너의 배경을 채움
          image: DecorationImage(
            image: AssetImage('images/background.png'), //이미지 불러오기
            fit: BoxFit.cover, //이미지 비율은 유지하면서 디스플레이 커버 전체를 채움
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
                    //TODO: Step 10 - storyBrain을 사용하여 첫 번째 스토리 제목을 가져와서 이 텍스트 위젯에 표시해라
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
                    //TODO: Step 18 - storyBrain에서 nextStory () 메소드를 호출하고 사용자가 선택한대로 1을 전달하라
                    setState(() {
                      storyBrain.nextStory(1);
                    });
                  },
                  color: Colors.red,
                  child: Text(
                    //TODO: Step 13 - storyBrain을 사용하여 choice1을 선택하라
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
                //TODO: Step 26 - Flutter Visibility 위젯을 사용하여이 FlatButton을 래핑하라
                //TODO: Step 28 - Visibility Widget의 "visible"특성을 storyBrain의 buttonShouldBeVisible () 메소드 출력과 동일하게 설정하라
                child: Visibility(
                  //Visibility 위젯은 하위 자식 위젯을 보여줄건지 숨길건지 여부를 제어함
                  //이것이 true로 설정되면, 가시성 위젯의 하위가 표시되고, 거짓이면 화면에서 하위 위젯이 제거됨
                  visible: storyBrain
                      .buttonShouldBeVisible(), //이로써 질문의 끝에서 두번째 파랑 버튼이 사라짐
                  child: FlatButton(
                    onPressed: () {
                      //Choice 2 made by user.
                      //TODO: Step 19 - storyBrain에서 nextStory () 메소드를 호출하고 사용자가 선택한 2를 숫자로 전달하라
                      setState(() {
                        storyBrain.nextStory(2);
                      });
                    },
                    color: Colors.blue,
                    child: Text(
                      //TODO: Step 14 - storyBrain을 사용하여 choice2를 선택하라
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

//TODO: Step 24 - 앱을 실행하고 선택 버튼을 눌렀을 때 스토리를 변경하기 위해 이 파일에 추가해야하는 코드를 찾아보라
//setState(() {}); 메서드 안에 넣어야지!

//TODO: Step 29 - WOW! 앱을 실행하고 스토리 아웃 라인에 대해 테스트하여 모든 단계를 완료했는지 확인하라
```

# story.dart

```dart
//TODO: Step 2 - Story 라는 클래스를 만들어라
//TODO: Step 3 - 클래스 내부에 텍스트를 저장할 기본 속성 3개를 만들어라 A. storyTitle, B. choice1, C. choice2.
//TODO: Step 4 - 생성자를 작성해 속성을 초기화해라
class Story {
  String storyTitle;
  String choice1;
  String choice2;

  Story({this.storyTitle, this.choice1, this.choice2});
}
```

# story_brain.dart

```dart
//TODO: Step 6 - story.dart 파일을 import 해라
import 'story.dart';
//TODO: Step 5 - StoryBrain 클래스를 만들어라

class StoryBrain {
  //TODO: Step 7 - StoryBrain에서 storyData를 개인 속성으로 포함하도록 아래 행의 주석을 없애라
  //TODO: Step 7-1 - 이때, storyData는 이름이 정의되어 있으니 story.dart에 있는 Story 클래스의 생성자는 명명 매개변수로 {} 중괄호를 인자값에 씌워줘야한다
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

  //TODO: Step 8 - _storyData에서 첫 번째 storyTitle을 리턴하는 getStory () 메소드를 작성하라
  String getStory() {
    return _storyData[_storyNumber].storyTitle;
  }

  //TODO: Step 11 - _storyData에서 첫 번째 choice1에 대한 텍스트를 리턴하는 getChoice1 () 메소드를 작성하라
  String getChoice1() {
    return _storyData[_storyNumber].choice1;
  }

  //TODO: Step 12 - _storyData에서 첫 번째 choice2에 대한 텍스트를 리턴하는 getChoice2 () 메소드를 작성하라
  String getChoice2() {
    return _storyData[_storyNumber].choice2;
  }

  //TODO: Step 16 - 값 0으로 시작하는 storyNumber라는 특성을 작성하라. 사용자가 현재보고있는 스토리를 추적하는 데 사용된다
  int _storyNumber = 0;

//TODO: Step 23 - getStory (), getChoice1 () 및 getChoice2 () 내부에서 storyNumber 특성을 사용하여 항상 첫 번째 (0) 항목이 아닌 업데이트 된 스토리 및 선택 사항을 가져와라
//_storyData[storyNumber].storyTitle; 요론식으로 불러주면 됨

//TODO: Step 25 - story_brain.dart 만 액세스 할 수 있도록 storyNumber 특성을 개인 특성으로 변경하라. 이름 (storyNumber)을 마우스 오른쪽 단추로 클릭하고 리 팩터-> 이름 바꾸기를 선택하여 사용 된 모든 위치에서 변경하라

  //TODO: Step 17 - nextStory()라는 메소드를 작성하라. 출력이 없어야하지만 사용자가 선택한 번호가(int) 되는 1개의 입력이 있어야 한다.
  //TODO: Step 20 - 스토리 계획을 여기서 다운로드해라 : https://drive.google.com/uc?export=download&id=1KU6EghkO9Hf2hRM0756xFHgNaZyGCou3
  //TODO: Step 21 - 스토리 계획을 사용하여 nextStory()를 업데이트하여 사용자가 선택한 내용에 따라 storyNumber를 변경하라. 예 : storyNumber가 0 인 경우 사용자가 choiceNumber1을 선택한 경우 storyNumber는 2가 되어야한다
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
    //TODO: Step 22 - nextStory()에서 storyNumber가 3 또는 4 또는 5와 같으면 게임이 끝났음을 의미하며 storyNumber를 0으로 재설정하는 restart() 라는 메서드를 호출해야한다
    else if (_storyNumber == 3 || _storyNumber == 4 || _storyNumber == 5) {
      restart();
    }
  }

  void restart() {
    _storyNumber = 0;
  }

//TODO: Step 27 - storyNumber가 0 또는 1 또는 2인지 (두 버튼 모두 선택 사항을 표시해야하는 경우) 확인하는 buttonShouldBeVisible ()이라는 메소드를 작성하고,이 경우 true를 리턴하면 그렇지 않으면 false를 리턴해야한다. 스토리가 끝나면 불필요한 두번째 파란 버튼은 없애야하니까
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


## 조건문 부분 솔루션

흠..


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


요 조건문 너무 노가다 느낌이다.  
이 부분은 여러 솔루션이 있다.

**솔루션1**

삼항 연산자와 함께 스위치 케이스를 쓰는 것

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



**솔루션2**
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



**솔루션3**

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


**솔루션4**

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
- [Angela Yu 강의(유료)](https://www.udemy.com/course/flutter-bootcamp-with-dart/)