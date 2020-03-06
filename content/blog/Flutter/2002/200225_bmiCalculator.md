---
title: '💎 [Flutter] BMI Calculator App'
date: 2020-02-26 02:18:00
category: 'Flutter'
draft: false
showToc: true
---

# 테마 사용법

```dart
...

class BMICalculator extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false, //디버그 띠 감추기
      theme: ThemeData(
        primaryColor: Color(0xFF0A0E21), //앱바 부분 색상
        accentColor: Colors.purple, //플로팅액션버튼 색상
        scaffoldBackgroundColor: Color(0xFF0A0E21), //scaffold 배경 색상
        textTheme: TextTheme(body1: TextStyle(color: Colors.white)), //홈바디 부분 텍스트 색상
      ),
      home: InputPage(),
    );
  }
}

...
```



<img width="350" alt="스크린샷 2020-02-25 오후 7 31 10" src="https://user-images.githubusercontent.com/55340876/75239194-9d93a080-5805-11ea-8383-12f787652a5b.png">



이 방법 말고도  

```dart
...

class BMICalculator extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData.dark().copyWith( //다크테마.copyWith
        primaryColor: Color(0xFF0A0E21),
        scaffoldBackgroundColor: Color(0xFF0A0E21),
      ),
      home: InputPage(),
    );
  }
}

...
```

다크 테마를 지정 후,  
copyWith 메소드로 몇 부분만 업데이트 해줘도 결과는 같다. 

코드가 좀 더 간결해진다.

플로팅액션버튼 위젯을 테마 위젯으로 감싸서 좀 더 세밀하게 꾸며줄 수도 있다.

```dart
...

      floatingActionButton: Theme(
        data: ThemeData(accentColor: Colors.purple), //버튼부분 색상
        child: FloatingActionButton(
          child: Icon(Icons.add),
        ),

...
```

---

<br/>

---

일단 코드를 각 파일에 나누고 시작하자.  

lib/mail.dart

```dart
import 'package:flutter/material.dart';
import 'input_page.dart';

void main() => runApp(BMICalculator());

class BMICalculator extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData.dark().copyWith(
        primaryColor: Color(0xFF0A0E21),
        scaffoldBackgroundColor: Color(0xFF0A0E21),
      ),
      home: InputPage(),
    );
  }
}
```

lib/input_page.dart

```dart
import 'package:flutter/material.dart';

class InputPage extends StatefulWidget {
  @override
  _InputPageState createState() => _InputPageState();
}

class _InputPageState extends State<InputPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('BMI CALCULATOR'),
      ),
    );
  }
}
```

<br/>


# 위젯 리팩토링

일단 위젯의 카드 부분 - 각 부분들이 보여지는 뒷단 배경 부분을 만들거다.

lib/input_page.dart

```dart
...

    return Scaffold(
      appBar: AppBar(
        title: Text('BMI CALCULATOR'),
      ),
      body: Container(
        color: Color(0xFF1D1E33), //컨테이너 색상
        height: 200.0,
        width: 170.0,
        margin: EdgeInsets.all(15.0), //사방 여백
      ),
    );
  }
}

```

여기까지 따라오면 카드 배경 부분은 나타난다.  

<img width="371" alt="스크린샷 2020-02-25 오후 9 06 58" src="https://user-images.githubusercontent.com/55340876/75246263-c79f8f80-5812-11ea-89e6-a3a56e67ec5d.png">


하지만 컨테이너의 테두리가 너무 각졌으니 좀 둥글게 다듬어보자.

```dart
...

      body: Container(
        height: 200.0,
        width: 170.0,
        margin: EdgeInsets.all(15.0), //사방 여백
        decoration: BoxDecoration(
          color: Color(0xFF1D1E33), //컨테이너 색상
          borderRadius: BorderRadius.circular(10.0), //컨테이너 테두리
        ),
      ),
    );
  }
}
```

decoration 속성을 통해 BoxDecoration 위젯 내부에 테두리를 매겼다.  
더불어 컨테이너 위젯에 줬던 ``color: Color(0xFF1D1E33),`` 색상 부분도 같이 옮겨주었다.  
지정해줬던 색상도 해당 컨테이너 데코레이션의 한 부분이기 때문에,  
데코레이션 위젯이 있으면 안으로 다 옮겨줘야 한다.  
그렇지 않으면 에러가 뜬다!  

<img width="371" alt="스크린샷 2020-02-25 오후 9 12 37" src="https://user-images.githubusercontent.com/55340876/75246652-91164480-5813-11ea-9c03-25535d7f55d0.png">

자 이제 둥글둥글해졌다!  
레이아웃을 잡아보자.

```dart
...

      body: Column(
        children: <Widget>[
          Expanded(
            child: Row(
              children: <Widget>[
                Expanded(
                  child: Container(
                    margin: EdgeInsets.all(15.0), //사방 여백
                    decoration: BoxDecoration(
                      color: Color(0xFF1D1E33), //컨테이너 색상
                      borderRadius: BorderRadius.circular(10.0), //컨테이너 테두리
                    ),
                  ),
                ),
                Expanded(
                  child: Container(
                    margin: EdgeInsets.all(15.0), //사방 여백
                    decoration: BoxDecoration(
                      color: Color(0xFF1D1E33), //컨테이너 색상
                      borderRadius: BorderRadius.circular(10.0), //컨테이너 테두리
                    ),
                  ),
                ),
              ],
            ),
          ),
          Expanded(
            child: Container(
              margin: EdgeInsets.all(15.0), //사방 여백
              decoration: BoxDecoration(
                color: Color(0xFF1D1E33), //컨테이너 색상
                borderRadius: BorderRadius.circular(10.0), //컨테이너 테두리
              ),
            ),
          ),
          Expanded(
            child: Row(
              children: <Widget>[
                Expanded(
                  child: Container(
                    margin: EdgeInsets.all(15.0), //사방 여백
                    decoration: BoxDecoration(
                      color: Color(0xFF1D1E33), //컨테이너 색상
                      borderRadius: BorderRadius.circular(10.0), //컨테이너 테두리
                    ),
                  ),
                ),
                Expanded(
                  child: Container(
                    margin: EdgeInsets.all(15.0), //사방 여백
                    decoration: BoxDecoration(
                      color: Color(0xFF1D1E33), //컨테이너 색상
                      borderRadius: BorderRadius.circular(10.0), //컨테이너 테두리
                    ),

...
```

<img width="1455" alt="스크린샷 2020-02-25 오후 9 23 03" src="https://user-images.githubusercontent.com/55340876/75247333-06cee000-5815-11ea-8cad-42c97407aa75.png">

코드를 보면 복잡시럽지만  
레이아웃 짜는건 기본이기 때문에 분명히 이해하고 넘어가야 한다!  

현재 코드는 Container 부분이 반복되는게 너무 많다.  
코드를 **DRY** 하게 유지해보자.  
**DRY - Don't Repeat Yourself**  

해당 Container 하나에 커서를 두고 오른쪽에 Flutter Outline 클릭을 하면  
내가 커서를 둔 컨테이너를 가르킨다.  
그럼 오른쪽 마우스를 클릭하여 Extract Widget 을 뙇!!  
이름 지정을 뙇!! 생성하면,   




<img width="642" alt="스크린샷 2020-02-25 오후 11 48 29" src="https://user-images.githubusercontent.com/55340876/75258111-57e8cf00-5829-11ea-8bd2-7aac6d1181d9.png">



커서가 있던 컨테이너 위젯도 요롷게 바뀌고  
하단에 stl 클래스로 생성이 된걸 확인 할 수 있다.  

```dart
...

class ReusableCard extends StatelessWidget {
  const ReusableCard({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.all(15.0), //사방 여백
      decoration: BoxDecoration(
        color: Color(0xFF1D1E33), //컨테이너 색상
        borderRadius: BorderRadius.circular(10.0), //컨테이너 테두리
      ),
    );
  }
}
```

<br/>



요놈을 반복 부분에 재사용 해주면 된다는 소리!!  
(ReusableCard 이란 이름으로 추출해주었다)

```dart
...

      body: Column(
        children: <Widget>[
          Expanded(
            child: Row(
              children: <Widget>[
                Expanded(
                  child: ReusableCard(),
                ),
                Expanded(
                  child: ReusableCard(),
                ),
              ],
            ),
          ),
          Expanded(
            child: ReusableCard(),
          ),
          Expanded(
            child: Row(
              children: <Widget>[
                Expanded(
                  child: ReusableCard(),
                ),
                Expanded(
                  child: ReusableCard(),
                ),

...
```

줄줄이 소세지 같던 코드가 보기 좋아졌다. 귣결귣결  
재사용 가능한 카드에 문제가 있는 경우에는 생성 된 장소를 찾아서 수정만 해주면 고민타파!!


```dart
  const ReusableCard({Key key,}) : super(key: key);
```

부분을 잠깐 살펴보자면,  
``{Key key,}`` Key 위젯이 보인다.  
키 위젯은 위젯 트리에서 위젯이 움직일 때마다 현 상태를 보존하는 역할을 한다.  
사용자의 스크롤 위치나  
컬렉션을 수정하는 상태를 보존할 수 있다.  

즉,   
어떤 상태를 유지하고 있는 같은 종류의 위젯 컬렉션을 더하거나 제거하거나 새로 정렬해야 할 때 사용한다.    
(예를 들면 ToDo 앱의 할일 목록)   
_실제로 별로 안쓴다니까 일단 여기까지만 알아두자_

<br/>
<br/>

지금의 경우에는 필요가 없으니 일단 저부분은 삭제해주고  
ReusableCard에서 사용하는 속성 중에서 하나에 대한 값을 생성하려면 생성자가 필요하다.  
음..   
카드 레이아웃 부분을 클릭할때마다 컨테이너 색상이라는 속성이 바뀐다.    
요놈을 고치면 된다!  

<br/>

새로운 ReusableCard 위젯을 만들 때,  
전달할 수 있는 ReusableCard 의 속성으로  
``Color colour;`` 라고 색상 유형의 속성을 만들어주고  
``ReusableCard({this.colour});`` 요로코롬 생성자를 만든다.  
(속성의 이름을 참조하게끔 이름을 지정하려는 모든 속성을 {} 중괄호로 묶어준다)


<img width="651" alt="스크린샷 2020-02-26 오전 1 10 41" src="https://user-images.githubusercontent.com/55340876/75265851-d4cd7600-5834-11ea-8895-7fb46327ab0b.png">

``@required`` 는 꼭! 필수로 명시를 해줘야한다는 키워드.   
여기서는 ReusableCard의 매개 변수로 색상이 반드시 필요하다고 맥여줬는데,  
상단 캡쳐를 보면 확인할 수 있듯이 필요한 부분을 노란색 하이라이트로 알려준다.

```dart
...

          child: ReusableCard( //모든 ReusableCard 위젯 내부마다 동일한 색상 추가
            colour: Color(0xFF1D1E33),
          ),

...
...

class ReusableCard extends StatelessWidget {
  ReusableCard({@required this.colour});

  Color colour;

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.all(15.0), //사방 여백
      decoration: BoxDecoration(
        color: colour, //컨테이너 색상
        borderRadius: BorderRadius.circular(10.0), //컨테이너 테두리
      ),
    );
  }
}

```

코드는 이렇고,  
모든 ``ReusableCard()`` 안에는 ``colour: Color(0xFF1D1E33)`` 를 추가해줬다.  

이로써 위젯들 중에서 하나를 골라 컬러를 바꾸면?  

<img width="1456" alt="스크린샷 2020-02-26 오전 1 19 30" src="https://user-images.githubusercontent.com/55340876/75266719-1b6fa000-5836-11ea-9d16-40fc13278ef4.png">

재사용성 쩌는 놈을 만들어준겨!!


![2020-02-26 11-36-00 2020-02-26 11_36_42](https://user-images.githubusercontent.com/55340876/75306403-47b60b80-588c-11ea-87bd-e5022bb0482b.gif)  

구불구불한 에러같은 현상은  

```dart
...

class ReusableCard extends StatelessWidget {
  ReusableCard({@required this.colour});

  final Color colour;

  @override

...
```
요로케 final 을 앞에 써주면 프로퍼티가 불변으로 변해서 꾸부리가 사라진다!  

하단 핑끄핑끄 바텀도 만들어보자.

```dart
import 'package:flutter/material.dart';

const bottomContainerHeight = 80.0; //상수선언
const activeCardColour = Color(0xFF1D1E33); //상수선언
const bottomContainerColour = Color(0xFFEB1555); //상수선언

class InputPage extends StatefulWidget {
  @override
  _InputPageState createState() => _InputPageState();
}

class _InputPageState extends State<InputPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('BMI CALCULATOR'),
      ),
      body: Column(
        children: <Widget>[
          Expanded(
            child: Row(
              children: <Widget>[
                Expanded(
                  child: ReusableCard(
                    colour: activeCardColour,
                  ),
                ),
                Expanded(
                  child: ReusableCard(
                    colour: activeCardColour,
                  ),
                ),
              ],
            ),
          ),
          Expanded(
            child: ReusableCard(
              colour: activeCardColour,
            ),
          ),
          Expanded(
            child: Row(
              children: <Widget>[
                Expanded(
                  child: ReusableCard(
                    colour: activeCardColour,
                  ),
                ),
                Expanded(
                  child: ReusableCard(
                    colour: activeCardColour,
                  ),
                ),
              ],
            ),
          ),
          Container(
            color: bottomContainerColour,
            margin: EdgeInsets.only(top: 10.0),
            width: double.infinity, //어느 디바이스에서 구동되던 가로 전체 차지
            height: bottomContainerHeight,
          ),
        ],
      ),
    );
  }
}

...
```

상단에 중복되는 것들을 상수로 선언해주고 각 색상 위치에 놓아주면?!

<img width="350" alt="스크린샷 2020-02-26 오후 3 29 51" src="https://user-images.githubusercontent.com/55340876/75318102-d9357580-58ac-11ea-87fd-e8e56fc5424b.png">

빼앰!

# 사용자 정의 위젯

```dart
...

class ReusableCard extends StatelessWidget {
  ReusableCard({@required this.colour, this.cardChild});

  final Color colour;
  final Widget cardChild;

  @override
  Widget build(BuildContext context) {
    return Container(
      child: cardChild,

...
```

``cardChild`` 를 추가해주고,  
기능을 넣기 전에 먼저, 스타일링을 위해  
[font_ awesome_flutter 8.7.0](https://pub.dev/packages/font_awesome_flutter) 패키지를 pubspec.yaml 에 추가해준다.  

```dart
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
```

import도 잊지말고!  
이제 첫번째 ReusableCard 위젯에 스타일링을 줘보자.

```dart
...

      child: ReusableCard(
        colour: activeCardColour,
        cardChild: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Icon(
              FontAwesomeIcons.mars,
              size: 80.0,
            ),
            SizedBox(
              height: 15.0,
            ),
            Text(
              'MALE',
              style: TextStyle(
                fontSize: 18.0,
                color: Color(
                  0xFF8D8E98,
                ),
              ),
            ),

...
```

시뮬레이터를 재실행하면 

<img width="376" alt="스크린샷 2020-02-26 오후 3 54 39" src="https://user-images.githubusercontent.com/55340876/75319586-50203d80-58b0-11ea-953d-bac8abfc97a5.png">

요로코롬 나타난다.  
이제 오른쪽도 동일한 아이콘 컨텐츠 위젯으로 만들어줘야하니,  
상단에서 배웠듯 위젯을 추출해서 재사용 하도록 만들자.

추출할 때 나오는 기본 생성자를 제거해주고  
재사용할 아이콘과 텍스트 부분을 final 키워드를 이용해 속성으로 넣어준다.  
``final 데이터타입 속성명;``  
요론식으로 2가지 속성을 정의해주고,  
요 속성들은 생성자를 통해 초기화를 시켜준다.  

```dart
...

class IconContent extends StatelessWidget { //추출한 위젯
  IconContent({this.icon, this.label}); //생성자 초기화

  final IconData icon; //속성 정의
  final String label; //속성 정의
  
...
```

이 후엔  
메인 빌드 메소드에서 정의한 속성들(아이콘, 텍스트)이 어디로 갈지 지정해준다.  

```dart
...

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        Icon(
          icon, //요놈
          size: 80.0,
        ),
        SizedBox(
          height: 15.0,
        ),
        Text(
          label, //요놈
          style: TextStyle(
            fontSize: 18.0,
            color: Color(
              0xFF8D8E98,
            ),
          ),
        ),
      ],
    );
  }
}

...
```

여기서 끝이냐고?  

<img width="376" alt="스크린샷 2020-02-26 오후 4 12 04" src="https://user-images.githubusercontent.com/55340876/75320758-bf972c80-58b2-11ea-9df7-d7107ff1abdf.png">

현재는 사용하는 곳에서 넘겨줄 인자값이 없으니 에러가 뜬다.  

```dart
...

      Expanded(
        child: ReusableCard(
          colour: activeCardColour,
          cardChild: IconContent( //인자값을 줘야지?!
            icon: FontAwesomeIcons.mars,
            label: 'MALE',
          ),
        ),
      ),
      Expanded(
        child: ReusableCard(
          colour: activeCardColour,
          cardChild: IconContent( //인자값을 줘야지?!
            icon: FontAwesomeIcons.venus,
            label: 'FEMALE',
          ),

...
```


<img width="376" alt="스크린샷 2020-02-26 오후 4 15 50" src="https://user-images.githubusercontent.com/55340876/75321022-451adc80-58b3-11ea-857e-9523c22c00df.png">

baaaaaam!!


추출된 위젯 메소드덕에 코드가 엄청 길어졌다.  
기능별로 코드를 각 파일에 분리해주자


reusable_card.dart

```dart
import 'package:flutter/material.dart';

class ReusableCard extends StatelessWidget {
  ReusableCard({@required this.colour, this.cardChild});

  final Color colour;
  final Widget cardChild;

  @override
  Widget build(BuildContext context) {
    return Container(
      child: cardChild,
      margin: EdgeInsets.all(15.0), //사방 여백
      decoration: BoxDecoration(
        color: colour, //컨테이너 색상
        borderRadius: BorderRadius.circular(10.0), //컨테이너 테두리
      ),
    );
  }
}
```

icon_content.dart

```dart
import 'package:flutter/material.dart';

class IconContent extends StatelessWidget {
  IconContent({this.icon, this.label});

  final IconData icon;
  final String label;

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        Icon(
          icon,
          size: 80.0,
        ),
        SizedBox(
          height: 15.0,
        ),
        Text(
          label,
          style: TextStyle(
            fontSize: 18.0,
            color: Color(
              0xFF8D8E98,
            ),
          ),
        ),
      ],
    );
  }
}
```

최상단에는 항상 ``import 'package:flutter/material.dart';``  
머티리얼 패키지를 부르는걸 잊지말자.  

icon_content.dart 에 코드를 보면  
하드코딩한 것이 많다.  
아이콘 크기, sizedBox 텍스트 스타일 등..  
이제는 이런 부품들을 꺼내서 상단의 상수로 만드는 것이 합리적이다.  

텍스트스타일 부분을 상수로 끄내자.  

```dart
...

const labelTextStyle = TextStyle( //상수로~
  fontSize: 18.0,
  color: Color(
    0xFF8D8E98,
  ),
);

...

        Text(label, style: labelTextStyle), //요놈

...
```

마지막으로 input_page.dart 에서  
분리한 코드 파일들을 import 해주면 된다.

input_page.dart

```dart
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'icon_content.dart';
import 'reusable_card.dart';

...
```

이제 모든 것을 별도의 파일로 리팩토링하는 것을 습관화하고,   
이걸 통해 각 작업을 훨씬 쉽게 수행 할 수 있다.  

내가 만든 위젯 (사용자 정의 위젯) 으로 프로젝트 전체에서 재사용할 수 있는 것이다!

# GestureDetector 위젯

이제 아이콘 카드를 클릭하면 색상이 변하는 것을 해보자.

상단에 있는 첫번째 ReusableCard 위젯에 커서를 두고   
요놈을 감싸는 FlatButton 위젯을 만들어준다.  


```dart
...

    Expanded(
      child: FlatButton( //ReusableCard를 감싸는 새로운 버튼위젯
        onPressed: () {}, //뀨
        child: ReusableCard(

...
```

가장 기본적인 ``onPressed: () {},`` 를 주면  

<img width="376" alt="스크린샷 2020-02-26 오후 4 42 44" src="https://user-images.githubusercontent.com/55340876/75322877-05ee8a80-58b7-11ea-9ec2-8a8c3a8ad0b4.png">


모양이 이런식으로 맴대로 바뀐다.  
플랫 버튼은 머티리얼 플랫 버튼의 스타일을 구현하려하는 속성들이 있다.  
다양한 색상, 다양한 테마, 모양들이 있는데   
나는 지금 내 카드의 모양을 유지하고 싶다.  
그렇다면 뭘 써야할까?

플랫 버튼 대신  
``GestureDetector 위젯`` 을 사용한다!  
말 그대로 제스처를 감지하는 위젯.  
이 위젯은 자식 위젯에 어떤 스타일이나 모양, 애니메이션을 강요하려 시도하지 않는다.  
사용자가 위젯과 상호작용할 때 이를 감지하는 베리쏘퓨어한 방법이다.  

따라서 FlatButton 위젯 말고,  
GestureDetector 위젯이 ReusableCard 위젯의 부모가 되면  

```dart
...

      child: GestureDetector( //부모
        onTap: () {}, //플랫버튼의 onPressed 와 동일한 역할
        child: ReusableCard(

...
```

<img width="376" alt="스크린샷 2020-02-26 오후 4 59 18" src="https://user-images.githubusercontent.com/55340876/75323990-5666e780-58b9-11ea-81da-12dabc502363.png">

스타일은 그대로다!  
이때, GestureDetector 위젯은 onPressed 속성을 주지 못하니  
동일한 역할을 하는 onTap과 익명 콜백을 추가로 맥여준다.  
``print('남자 카드를 눌렀습니다');`` 를 추가해 콘솔에 찍히는지 확인해준다.

이젠 클릭 했을 때 배경색이 변하는 효과를 주자.

일단 카드의 기존 배경색보다 어두운 색상을 상수로 선언해주고 

```dart
...

const inactiveCardColour = Color(0xFF111328); //상수선언
const bottomContainerColour = Color(0xFFEB1555);

...
```

State 위젯으로 이동해 속성을 변경해보자.  

이 경우에는 색상이 변경될 일이 있으니(변경될 수 있는 변수), final을 선언하지 않아도 된다.  

```dart
...

class _InputPageState extends State<InputPage> {
  Color maleCardColor = inactiveCardColour; //초기 컬러값
  Color femaleCardColor = inactiveCardColour; //초기 컬러값

...
```

이것들은 남여 카드의 초기 컬러값이 된다.  

<img width="376" alt="스크린샷 2020-02-26 오후 6 22 52" src="https://user-images.githubusercontent.com/55340876/75330817-02620000-58c5-11ea-9c27-4a9fd867aaed.png">

이제 눌렀을 때 경우를 if문으로 구현해준다.

```dart
...

  Color femaleCardColor = inactiveCardColour;

  //1 = male, 2 = female
  void updateColour(int gender) {
    //남자 카드를 눌렀을 때,
    if (gender == 1) {
      if (maleCardColor == inactiveCardColour) {
        maleCardColor = activeCardColour;
      } else {
        maleCardColor = inactiveCardColour;
      }
    }
  }

...
```

어떤 성별을 클릭했는지 알려주는 입력을 받고 ``(int gender)``  
남자 카드를 눌렀을때 그 컬러가 기초 컬러인 비활성화 컬러면 활성화 컬러로 바꾸고,  
그게 아니면 다시 기초 컬러값으로 바꾸라.  

그리고 onTap 에서 상태 업데이트를 위해 setState 안에 넣어준다. 

```dart
...

      child: GestureDetector(
        onTap: () {
          setState(() {
            updateColour(1);
          });
        },

...
```

<img width="376" alt="" src="https://user-images.githubusercontent.com/55340876/75332268-72718580-58c7-11ea-8dd7-586d768dc087.gif">

초기 세팅은 어두운 배경색이고 터치를 감지하면 색상이 업데이트 된다.  
남자 카드를 클릭했을때 활성화 컬러, 다시 클릭하면 비활성화 컬러로 바뀌는걸 볼 수 있다.  

동일 방법으로 여자 카드도 업데이트 해주자.  

```dart
...

  //1 = male, 2 = female
  void updateColour(int gender) {
    //남자 카드를 눌렀을 때,
    if (gender == 1) {
      if (maleCardColor == inactiveCardColour) {
        maleCardColor = activeCardColour;
      } else {
        maleCardColor = inactiveCardColour;
      }
    }
    //여자 카드를 눌렀을 때,
    if (gender == 2) {
      if (femaleCardColor == inactiveCardColour) {
        femaleCardColor = activeCardColour;
      } else {
        femaleCardColor = inactiveCardColour;
      }
    }
  }

...

        child: GestureDetector(
          onTap: () {
            setState(() {
              updateColour(2);
            });
          },
          child: ReusableCard(
            colour: femaleCardColor,

...
```

여기서 문제점은 남자를 클릭하면 여자가 비활성화,  
여자를 클릭하면 남자가 비활성화 되야하는데 지금은 그런 제어가 없는 상황이다.  

이건 아주 쉽다!  
남자 카드를 클릭했을 때  
활성화 색을 킴과 동시에 여자 카드를 비활성화 시키는 조건도 걸어주면 된다.  
여자 카드를 클릭한 경우엔 그 반대겠지?  

```dart
...

  //1 = male, 2 = female
  void updateColour(int gender) {
    //남자 카드를 눌렀을 때,
    if (gender == 1) {
      if (maleCardColor == inactiveCardColour) {
        maleCardColor = activeCardColour;
        femaleCardColor = inactiveCardColour;
      } else {
        maleCardColor = inactiveCardColour;
        femaleCardColor = activeCardColour;
      }
    }
    //여자 카드를 눌렀을 때,
    if (gender == 2) {
      if (femaleCardColor == inactiveCardColour) {
        femaleCardColor = activeCardColour;
        maleCardColor = inactiveCardColour;
      } else {
        femaleCardColor = inactiveCardColour;
        maleCardColor = activeCardColour;
      }
    }
  }
...
```

<img width="376" alt="" src="https://user-images.githubusercontent.com/55340876/75333248-2293be00-58c9-11ea-8470-d3692d8464b6.gif"> 

훠우!  
그치만 코드가 너무 가독성이 떨어진다.  
남자는 1 여자는 2.. 직관적이지 못하다. 

# Dart - Enums 

```dart
enum EnumName {typeA, typeB, typeC}

EnumName.typeA
```

```dart
void main() {

  //new BMW
  Cart myCar = Car(carStyle: CarType.BMW);

}

class Car {
  //1 = hatchback, 2 = BMW...
  CarType carStyle;
  
  Car({this.carStyle});
}

enum CarType {
  cooper,
  BMW,
  SUV,
  hatchback,
  coupe,
  
}
```

프로젝트에 대입해보자.  
(클래스 내부에는 만들 수 없음)

```dart
...

const bottomContainerColour = Color(0xFFEB1555);

enum Gender { //enum
  male,
  female,
}

...

  //1 = male, 2 = female
  void updateColour(Gender selectedGender) {
    //남자 카드를 눌렀을 때,
    if (selectedGender == Gender.male) {

...

    //여자 카드를 눌렀을 때,
    if (selectedGender == Gender.female) {

...

              setState(() {
                updateColour(Gender.male);
              });
            },

...

              setState(() {
                updateColour(Gender.female);
              });
            },

...
```


enum 은 속성에 대해 2개 이상의 옵션이 있을때 유용하다.  
updateColour 메소드를 사용해 성별이 남자인지 여자인지 확인한다.

# Dart - 3항 연산자

```dart
if (Condition is ture) { DoThisIfTrue } 
        else { DoThisIfFalse }
```

```dart
void main() {
  
  bool JinJooIsAwesome = true;
  
  if (JinJooIsAwesome == true) {
    print('맞아!');
  } else {
    print('아닌데?!');
  }
}
```

```dart
//console 결과는??
맞아!
```

if 문은 괄호가 많고 키워드가 많다.  

```dart
Condition ? DoThisIfTrue : DoThisIfFalse
```



```dart
void main() {
  
  bool JinJooIsAwesome = true;

  JinJooIsAwesome == true ? print('맞아!') : print('아닌데?!');

}
```

```dart
//console 결과는??
맞아!
```

3항 연산자는 그것을 한줄로 단순화 해준다.

```dart
void main() {
  
  int myAge = 29;
  
  bool canBuyAlcohol = myAge > 21 ? true : false;
  print(canBuyAlcohol);

}
```

```dart
//console 결과는??
true
```

다시 코드를 수정하자!  

여지껏 작성했던 if 문 부분과 남여 Color 2개를 다 주석처리나 삭제를 해주고,  

```dart
...

class _InputPageState extends State<InputPage> {
  Gender selectedGender; //변수선언

...

        setState(() {
          selectedGender = Gender.male; //뭘 클릭했는지 변수 선언
        });
      },
      child: ReusableCard(
        colour: selectedGender == Gender.male
            ? activeCardColour
            : inactiveCardColour,

  ...

        setState(() {
          selectedGender = Gender.female; //뭘 클릭했는지 변수 선언
        });
      },
      child: ReusableCard(
        colour: selectedGender == Gender.female
            ? activeCardColour
            : inactiveCardColour,

...
```

상단에 내가 선택할 성별을 변수로 하나 선언해주고  
setState 내부에 내가 어떤 성별 카드를 클릭했는지를 가르키는 변수를 선언한다.  
colour 에는 selectedGender 가 Gender.성별과 같은지 확인하고  
true 면 ReusableCard 는 활성화 컬러로 바뀌어야하며,  
false 라면 비활성화 컬러여야한다. 

앱을 처음 시작하면 당연히 선택 된 것이 아무것도 없기에  
``Gender selectedGender;`` 는 null이 되고  
조건은 자연스레 false 가 되어 비활성화 컬러에서부터 시작한다.  
그리고 우리가 성별 카드 중 하나를 선택하면,  
3항 연산자에 따라서 컬러가 활성화 되는 것이다.
반대 카드를 선택하면 당연히 해당 카드는 비활성화 된다.


```dart
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'icon_content.dart';
import 'reusable_card.dart';

const bottomContainerHeight = 80.0;
const activeCardColour = Color(0xFF1D1E33);
const inactiveCardColour = Color(0xFF111328); 
const bottomContainerColour = Color(0xFFEB1555);

enum Gender {
  male,
  female,
}

class InputPage extends StatefulWidget {
  @override
  _InputPageState createState() => _InputPageState();
}

class _InputPageState extends State<InputPage> {
  Gender selectedGender; //변수선언

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('BMI CALCULATOR'),
      ),
      body: Column(
        children: <Widget>[
          Expanded(
            child: Row(
              children: <Widget>[
                Expanded(
                  child: GestureDetector(
                    onTap: () {
                      setState(() {
                        selectedGender = Gender.male; 
                      });
                    },
                    child: ReusableCard(
                      colour: selectedGender == Gender.male
                          ? activeCardColour
                          : inactiveCardColour, //3항 연산자
                      cardChild: IconContent(
                        icon: FontAwesomeIcons.mars,
                        label: 'MALE',
                      ),
                    ),
                  ),
                ),
                Expanded(
                  child: GestureDetector(
                    onTap: () {
                      setState(() {
                        selectedGender = Gender.female; 
                      });
                    },
                    child: ReusableCard(
                      colour: selectedGender == Gender.female
                          ? activeCardColour
                          : inactiveCardColour, //3항 연산자
                      cardChild: IconContent(
                        icon: FontAwesomeIcons.venus,
                        label: 'FEMALE',
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
          Expanded(
            child: ReusableCard(
              colour: activeCardColour,
            ),
          ),
          Expanded(
            child: Row(
              children: <Widget>[
                Expanded(
                  child: ReusableCard(
                    colour: activeCardColour,
                  ),
                ),
                Expanded(
                  child: ReusableCard(
                    colour: activeCardColour,
                  ),
                ),
              ],
            ),
          ),
          Container(
            color: bottomContainerColour,
            margin: EdgeInsets.only(top: 10.0),
            width: double.infinity,
            height: bottomContainerHeight,
          ),
        ],
      ),
    );
  }
}
```

코드가 보기좋아졌다!





# Dart - 1급 객체

Dart에서 함수는 일급 클래스 객체로, 함수를 다른 함수의 파라미터로 전달할 수 있다.  

```dart
void main() {
  
  int result = add(3, 5);
  print(result);

}

int add(int n1, int n2) {
  return n1 + n2;
}

int multiply(int n1, int n2) {
  return n1 * n2;
}
```

```dart
//console 결과는??
8
```

두개의 정수를 인자로 받고,  
더하기와 곱셈을 해주는 함수를 만들었다.  
호출 할때는 저런식으로 add, multiply 따로따로 해줘야 값이 나오는데  
만약 계산기처럼 버튼을 누르면 값이 나오는 것처럼 만들고 싶다면?  

```dart
void main() {
  
  int result = calculator(5, 8, add);
  print(result);

}

int calculator(int n1, int n2, Function calculation) {
  return calculation(n1, n2);
}

int add(int n1, int n2) {
  return n1 + n2;
}

int multiply(int n1, int n2) {
  return n1 * n2;
}
```

```dart
//console 결과는??
13
```

``int result = calculator(5, 8, add);`` 이 부분을,  
``int result = calculator(5, 8, multiply);`` 요로코롬  

**multiply** 로 바꿔주기만 하면 결과는 ``40``이 나온다.

함수는 다른 정수 2개인 인자값과 마찬가지로 똑같이 전달된다.  

함수로 할 수 있는 다른 것은  
함수를 변수의 값으로 할당할 수도 있다는 것이다.  

```dart
void main() {
  
  int result = calculator(5, 8, multiply);
  print(result);

}

Function calculator = (int n1, int n2, Function calculation) { //변수에 할당
  return calculation(n1, n2);
}; //세미콜론 필수

int add(int n1, int n2) {
  return n1 + n2;
}

int multiply(int n1, int n2) {
  return n1 * n2;
}
```

이런식으로 해도 값은 동일하게 **40** 이 찍힌다.  
``final Function calculator = (int n1, int n2, Function calculation) {``  
원한다면 앞에 final을 붙여줘도 된다.  
이 경우에는 더이상 할당 값을 변경할 수 없게 되고  

<img width="1167" alt="스크린샷 2020-02-27 오전 2 02 53" src="https://user-images.githubusercontent.com/55340876/75368534-44ab3180-5905-11ea-92a5-055ef1e4e6e5.png">

변경을 하려하면 당근 에러가 뜬다.  

```dart
void main() {
  
  Car myCar = Car(drive: slowDrive); //slowDrive를 데꼬올때 () 괄호가 없는것을 주목해라.
  
  print(myCar.drive);
  
  myCar.drive();
  
  myCar.drive = fastDrive; //myCar 속성의 값을 변경할거라 fastDrive 뒤에 () 괄호는 없다.
  
  myCar.drive(); //메소드명() 를 같이 호출해서 기능을 트리거 한다.
}

class Car {
  Function drive;
  
  Car({this.drive});
  
}

void slowDrive() {
  print('느리게 운전');
}

void fastDrive() {
  print('빠르게 운전');
}
```

```dart
//console 결과는??
Closure 'slowDrive'
느리게 운전
빠르게 운전
```

배운 내용을 코드에 적용해보자!  

추가했던 2개의 GestureDetector 위젯에 커서를 두고  
옵션+엔터(mac 기준) 로 Remove this widget 을 해서 지워주자.

reusable_card.dart
```dart
...

class ReusableCard extends StatelessWidget {
  ReusableCard({@required this.colour, this.cardChild, this.onPress}); //추가

  final Color colour;
  final Widget cardChild;
  final Function onPress; //함수 타입으로 추가

  @override
  Widget build(BuildContext context) {
    return GestureDetector( //컨테이너 위젯 감싸기
      onTap: onPress, //추가
      child: Container(

...
```

익명 함수를 추가하고 익명 함수 안에 setState를 주고  
그 내부에서 Gender.male 을 selectedGender 로 할당해준다.  

input_page.dart

```dart
...

        Expanded(
          child: ReusableCard(
            onPress: () { //뿅
              setState(() {
                selectedGender = Gender.male;
              });
            },
            colour: selectedGender == Gender.male
                ? activeCardColour
                : inactiveCardColour,
            cardChild: IconContent(
              icon: FontAwesomeIcons.mars,
              label: 'MALE',
            ),
          ),
        ),
        Expanded(
          child: ReusableCard(
            onPress: () { //뿅
              setState(() {
                selectedGender = Gender.female;
              });
            },
            colour: selectedGender == Gender.female
                ? activeCardColour
                : inactiveCardColour,

...
```

앱 실행 결과는 동일하다!  

# Slider 위젯

일단 모든 상수들을 한곳에 모아주자.

contants.dart

```dart
import 'package:flutter/material.dart';

const KBottomContainerHeight = 80.0;
const KActiveCardColour = Color(0xFF1D1E33);
const KInactiveCardColour = Color(0xFF111328);
const KBottomContainerColour = Color(0xFFEB1555);

const KLabelTextStyle = TextStyle(
  fontSize: 18.0,
  color: Color(
    0xFF8D8E98,
  ),
);
```
그리고 모든 상수명을 명명 규칙을 사용해서 동일하게 rename 해준다. 
(오른마우스 클릭 refactor -> rename)  
이 과정에서 상수를 사용하는 모든 곳에 이름이 바뀐다.  
앞에 k 를 붙임으로 모든 상수를 한번에 쉽게 검색할 수 있다.

이 때 당연히 잘라온 파일들에서는 얘네를 사용할 수 있게

``import 'constants.dart';`` import 구문을 잊지말자!  

input_page.dart

```dart
...

      title: Text('BMI CALCULATOR'),
    ),
    body: Column(
      crossAxisAlignment: CrossAxisAlignment.stretch, //가로 길이 확장

  ...

        Expanded(
          child: ReusableCard(
            colour: KActiveCardColour,
            cardChild: Column(
              children: <Widget>[
                Text(
                  'HEIGHT',
                  style: KLabelTextStyle, //상수 맥인거 가져옴
                )

...
```

<img width="371" alt="스크린샷 2020-02-27 오전 2 45 12" src="https://user-images.githubusercontent.com/55340876/75372046-2fd19c80-590b-11ea-8367-30433cd43fee.png">

세번째 카드 위젯도 얼른 구성해보자!! 
우리가 만들 카드들의 동일한 부분들은 const 를 통해서 상수 선언을 해주고,  
constants 라는 파일에 하나로 묶어줘서 갖다 쓴다고 했다.  

<img width="371" alt="스크린샷 2020-02-27 오전 2 54 25" src="https://user-images.githubusercontent.com/55340876/75372844-783d8a00-590c-11ea-9059-5d49e3e58a7f.png">

(예제 이미지를 보면 숫자 텍스트 부분이 다 동일한 스타일을 유지하는걸 볼 수 있음)

여기서도 숫자가 들어가는 텍스트들은 모든 카드 위젯 부분에 동일한 스타일을 요구한다.  
상수로 선언해서 그것들을 재사용 쩔게 갖다써주자! 

constants.dart
```dart
...

const KNumberTextStyle = TextStyle(
  fontSize: 50.0,
  fontWeight: FontWeight.w900,
);
```

input_page.dart
```dart
...

  Gender selectedGender;
  int height = 180; //변수 선언

...

    Text(
      'HEIGHT',
      style: KLabelTextStyle,
    ),
    Row(
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.baseline,
      textBaseline: TextBaseline.alphabetic,
      children: <Widget>[
        Text(
          height.toString(),
        //선언해준 height 변수는 값으로 int 180을 가지기에 텍스트 위젯에서는 문자열로 변환해줘야함.
          style: KNumberTextStyle,
        ),
        Text(
          'cm',
          style: KLabelTextStyle,
        ),

...
```


<img width="371" alt="스크린샷 2020-02-27 오전 3 06 07" src="https://user-images.githubusercontent.com/55340876/75373689-1a11a680-590e-11ea-9aba-212c435b6c89.png">



``crossAxisAlignment: CrossAxisAlignment.baseline,``

baseline을 쓰려면 null 값은 에러가 뜨니, 기준선인 baseline 을 필수로 지정해줘야 한다.  
저 경우``textBaseline: TextBaseline.alphabetic,`` 부분이 없다면 에러가 난다.

```dart
...

            'cm',
            style: KLabelTextStyle,
          ),
        ],
      ),
      Slider(
        value: height.toDouble(), //형변환
        min: 120.0,
        max: 220.0,
        activeColor: Color(0xFFEB1555),
        inactiveColor: Color(0xFF8D8E98),
        onChanged: (double newValue) {
          setState(() {
            height = newValue
                .round(); //정수로 반올림하여 가장 가까운 정수로 바꿔줌 (더블 타입이었으니까)
          });
        },
      )

...
```

슬라이더 위젯은 기본적으로 double 타입을 갖고있다.  
height 는 현재 상단에서 int 타입 180으로 선언되어있다.  
value 값에 실수 타입으로 형변환을 해주고  
최소값, 최대값, 색상, 필수값인 onChanged 지정을 해주면!   

![2020-02-27 03-31-29 2020-02-27 03_32_04](https://user-images.githubusercontent.com/55340876/75375603-c2753a00-5911-11ea-8328-be1398d74b3c.gif)


슬라이더가 새 값을 콜백에 전달하고  
따라서 토글을 움직이면 입력을 통해 새로운 값을 콜백에 전달한다.  
``(double newValue)``  
그리고 setState 내부에서 상태를 업데이트 해준다.  
``height = newValue.round();``

2% 부족한 스타일을 정의해보자.

```dart
...

    SliderTheme(
      data: SliderTheme.of(context).copyWith(
        //기본앱의 테마 정보 그대로 가져오기
        inactiveTrackColor: Color(0xFF8D8E98),
        activeTrackColor: Colors.white,
        thumbColor: Color(0xFFEB1555), //동그라미 색상
        overlayColor: Color(0x29EB1555), //오버레이 색상 (16%불투명)
        thumbShape: RoundSliderThumbShape(
            enabledThumbRadius: 15.0), //슬라이더 동그라미 크기
        overlayShape: RoundSliderOverlayShape(
            overlayRadius: 30.0), //오버레이 크기
      ),
      child: Slider(
        value: height.toDouble(), //형변환
        min: 120.0,
        max: 220.0,
        onChanged: (double newValue) {
          setState(() {
            height = newValue
                .round(); //정수로 반올림하여 가장 가까운 정수로 바꿔줌 (더블 타입이었으니까)
          });
        },
      ),

...
```

SliderTheme 위젯으로 Slider를 감싸주고,  
슬라이더에게 주었던 컬러 2가지를 트랙컬러로 가져오고 나머지 스타일을 다시 커스텀해준다.  

<img width="350" alt="" src="https://user-images.githubusercontent.com/55340876/75644202-d5c33500-5c84-11ea-9088-34c4b1377719.gif">

# 체중, 나이 카드

```dart
...

class _InputPageState extends State<InputPage> {
  Gender selectedGender;
  int height = 180;
  int weight = 60; //체중 변수 선언

...

        child: ReusableCard(
          colour: KActiveCardColour,
          cardChild: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              Text(
                'WEIGHT',
                style: KLabelTextStyle,
              ),
              Text(
                weight.toString(),
                style: KNumberTextStyle,
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  FloatingActionButton(
                    backgroundColor: Color(0xFF4C4F5E),
                    child: Icon(
                      Icons.add,
                      color: Colors.white,
                    ),
                  ),
                  SizedBox(
                    width: 10.0,
                  ),
                  FloatingActionButton(
                    backgroundColor: Color(0xFF4C4F5E),
                    child: Icon(
                      Icons.add,
                      color: Colors.white,
                    ),
                  ),

...
```

``FloatingActionButton`` 부분은  
저런식으로 코드를 해도 되지만 버튼 위젯을 직접 만들어보자.

맨 하단에 stl 하나를 만들어주고, 

```dart
...

class RoundIconButton extends StatelessWidget {
  final IconData icon; //속성 지정

  RoundIconButton({this.icon}); //생성자로 초기화

  @override
  Widget build(BuildContext context) {
    return RawMaterialButton(
      child: Icon(icon), // - 버튼과 +버튼 2개가 있으니 이건 속성을 따로 뺴줘야함
      onPressed: () {},
      elevation: 6.0, //그림자
      constraints: BoxConstraints.tightFor(
        //버튼크기
        width: 56.0,
        height: 56.0,
      ),
      shape: CircleBorder(), //버튼 모양
      fillColor: Color(0xFF4C4F5E), //버튼 색상
    );
  }
}
```

이런식으로 스타일을 내가 직접 정의해준뒤  
상단에 FAB 위젯을 지우고 변경해준다.

```dart
...

      Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          RoundIconButton(
            icon: FontAwesomeIcons.minus,
            //하단에서 아이콘 속성으로 뺐으니 아이콘부분만 바꿔주면됨
          ),
          SizedBox(
            width: 10.0,
          ),
          RoundIconButton(
            icon: FontAwesomeIcons.plus,
            //하단에서 아이콘 속성으로 뺐으니 아이콘부분만 바꿔주면됨
          ),
        ],

...
```

<img width="362" alt="스크린샷 2020-03-02 오후 6 45 04" src="https://user-images.githubusercontent.com/55340876/75664629-1d15e980-5cb6-11ea-93cb-3d52bb0d2dd4.png">

icon 속성 부분은 - 버튼과 + 버튼 2번 사용하니 속성을 따로 빼서  
직접 쓸 때 정의해주면 된다!

만약 ``shape:`` 부분을 수정하여 버튼 모양을 다르게 해주고싶다면?  

```dart
//      shape: CircleBorder(), //버튼 모양
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(10.0)),
      fillColor: Color(0xFF4C4F5E), //버튼 색상
```

<img width="362" alt="스크린샷 2020-03-02 오후 6 45 50" src="https://user-images.githubusercontent.com/55340876/75664636-1f784380-5cb6-11ea-85e6-fabe22c4dca7.png">

요로코롬 커스터마이징이 가능하다!

이제 버튼을 클릭했을때 숫자가 내려가고 올라가는 것을 구현하자.


```dart
...

class RoundIconButton extends StatelessWidget {
  final IconData icon; 
  final Function onPressed; //속성 지정

  RoundIconButton({@required this.icon, @required this.onPressed}); //둘다 필수 항목으로!!

  @override
  Widget build(BuildContext context) {
    return RawMaterialButton(
      child: Icon(icon), 
      onPressed: onPressed, //선언

...
```

내가 만든 위젯이므로 onPressed 속성이 없으니 저렇게 만들어준다.   
속성을 지정하고~  
생성자로 초기화하면서 icon, onPressed 는 필수 인자로 정해준다.  
그리고 onPressed 속성에 정의를 다시 해주고! (이 경우 이름을 그냥 똑같이 해줬다)

```dart
...

      Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          RoundIconButton(
            icon: FontAwesomeIcons.minus,
            onPressed: () { //값 넣어주기
              setState(() {
                weight--;
              });
            },
          ),
          SizedBox(
            width: 10.0,
          ),
          RoundIconButton(
            icon: FontAwesomeIcons.plus,
            onPressed: () { //값 넣어주기
              setState(() {
                weight++;
              });
            },
          ),
        ],

...
```

인자값으로 아까 정의한 onPressed 속성을 넣어주고,  
클릭시마다 바뀌어야 하니까 setState 안에 값을 정의해주면?  


<img width="350" alt="" src="https://user-images.githubusercontent.com/55340876/75665687-e7720000-5cb7-11ea-8e29-3781b657167a.gif">

좌자자자자ㅏㄴ!!  
옆에 나이 카드도 같은 방식으로 해주면 된다!

```dart
...

  int weight = 60;
  int age = 20; //기본값

...

      child: ReusableCard(
        colour: KActiveCardColour,
        cardChild: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              'AGE',
              style: KLabelTextStyle,
            ),
            Text(
              age.toString(),
              style: KNumberTextStyle,
            ),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: <Widget>[
                RoundIconButton(
                  icon: FontAwesomeIcons.minus,
                  onPressed: () {
                    setState(() {
                      age--;
                    });
                  },
                ),
                SizedBox(
                  width: 10.0,
                ),
                RoundIconButton(
                  icon: FontAwesomeIcons.plus,
                  onPressed: () {
                    setState(() {
                      age++;
                    });
                  },

...
```


<img width="362" alt="스크린샷 2020-03-02 오후 7 06 34" src="https://user-images.githubusercontent.com/55340876/75666329-f2796000-5cb8-11ea-92f5-ddd7df469f79.png">

얄루!

# Navigation (경로와 탐색)

context 는 특정 위젯이 어디에 있는지 알아내는 방법으로,  
어디에 있고 어디로 가야하는지 파악할 때 도움이 된다.


페이지들은 **stack** 구조로 쌓이는데  
**push()** 는 쌓고, **pop()** 은 제거한다.  

다음페이지로 가길 원하면,  
onpressed: () {} 내부에
``Navigator.push(context, route)``    

이전페이지를 원하면,  
``Navigator.pop(context);``  

나의 현재 위치와 가야할 경로(위치) 라고 생각하면 편하다.  

```dart
Navigator.push(context), MaterialPageRoute(builder: (context) => [이동페이지]);
//다음 페이지

Navigator.pop(context);
//이전 페이지
```

복잡한 여러 경로로 가야할 때는?  

```dart
initialRoute: '/',
routes: {
  '/': (context) => FirstScreen(),
  '/second': (context) => SecondScreen(),
}
```
이런식으로 정의를 해주는데 자세히 파보자면  


main.dart

```dart
import 'package:flutter/material.dart';
import 'screen1.dart';
import 'screen0.dart';
import 'screen2.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
//      home: Screen0(),
      //초기 경로인 initialRoute 와 중복이니 충돌난다. 이경우 home 속성은 지워주자.
      initialRoute: '/',
      routes: {
        '/': (context) => Screen0(),
        '/first': (context) => Screen1(),
        '/second': (context) => Screen2(),
      },
    );
  }
}
```

Screen0.dart

```dart
import 'package:flutter/material.dart';

class Screen0 extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.purple,
        title: Text('Screen 0'),
      ),
      body: Center(
        child: Column(
          children: <Widget>[
            RaisedButton(
              color: Colors.red,
              child: Text('Go To Screen 1'),
              onPressed: () {
                Navigator.pushNamed(context, '/first');
                //Navigate to Screen 1
              },
            ),
            RaisedButton(
              color: Colors.blue,
              child: Text('Go To Screen 2'),
              onPressed: () {
                Navigator.pushNamed(context, '/second');
                //Navigate to Screen 2
              },
            ),
          ],
        ),
      ),
    );
  }
}
```




Screen1.dart


```dart
import 'package:flutter/material.dart';
import 'screen2.dart';

class Screen1 extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.red,
        title: Text('Screen 1'),
      ),
      body: Center(
        child: RaisedButton(
          color: Colors.red,
          child: Text('Go Forwards To Screen 2'),
          onPressed: () {
            Navigator.push(
              context,
              MaterialPageRoute(
                builder: (context) => Screen2(),
              ),
            );
          },
        ),
      ),
    );
  }
}
```




Screen2.dart

```dart
import 'package:flutter/material.dart';

class Screen2 extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.blue,
        title: Text('Screen 2'),
      ),
      body: Center(
        child: RaisedButton(
          color: Colors.blue,
          child: Text('Go Back To Screen 1'),
          onPressed: () {
            Navigator.pop(context);
          },
        ),
      ),
    );
  }
}

```



<img width="340" alt="" src="https://user-images.githubusercontent.com/55340876/75685579-1dc27600-5cde-11ea-82d1-c8d30648f5ca.gif">

<br/>

---
---

<br/>
<br/>

프로젝트에 대입해보자.  
첫 페이지에서 성별, 키, 몸무게, 나이를 설정하면 값은 두번째 페이지에서 출력이 된다.  

results_page.dart 페이지를 하나 생성해주고,

```dart
import 'package:flutter/material.dart';

class ResultsPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('BMI CALCULATOR'),
      ),
      body: Text('HELLO'),
    );
  }
}
```

input_page.dart

```dart
...

import 'results_page.dart';

...

      GestureDetector(
        onTap: () {
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (context) => ResultsPage(),
            ),
          );
        },
        child: Container(
          child: Text('CALCULATOR'),
          color: KBottomContainerColour,
          margin: EdgeInsets.only(top: 10.0),
          width: double.infinity,
          height: KBottomContainerHeight,
        ),
      ),

...
```


pop() 을 따로 줄 필요없이 페이지가 2개 뿐이라  
기존에 있는 앱바에 뒤로가기 기능을 써먹고  
push() 만 주었다.

<img width="340" alt="" src="https://user-images.githubusercontent.com/55340876/75694208-7ea47b00-5ceb-11ea-9ad0-f6f155a6c09b.gif">

나머지 스타일도 주자.

constants.dart

```dart
...

const KLargeButtonTextStyle = TextStyle(
  fontSize: 25.0,
  fontWeight: FontWeight.bold,
);
```
상수로 재활욜 해줄 스타일 정의 해주고,

input_page.dart

```dart
...

    child: Container(
      child: Center( //가운데로 뿅!
        child: Text(
          'CALCULATOR',
          style: KLargeButtonTextStyle, //호잇
        ),
      ),
      color: KBottomContainerColour,
      margin: EdgeInsets.only(top: 10.0),
      padding: EdgeInsets.only(bottom: 20.0), //호잇 (바닥과의 간격이 넘모 좁아서!)

...
```

<img width="373" alt="스크린샷 2020-03-03 오전 1 15 28" src="https://user-images.githubusercontent.com/55340876/75694812-7a2c9200-5cec-11ea-8be5-3aad139bf550.png">


요로코롬 하면 첫 페이지는 끝이다!



# Map

```dart
Map<KeyType, ValueType> mapName {
  Key: Value
}

//
mapName[Key]
```

친구들의 이름과 전화번호가 있는  
전화번호부 라고 생각해보자.

```dart

Map<String, int> phoneBook = {
  '진주': 1234567,
  '희라': 4325556,
  '성주': 1345566,
  '상혁': 8547885,
};

main() {
  
  print(phoneBook['성주']);

  phoneBook['효섭'] = 87539947;
  print(phoneBook['효섭']);

  print(phoneBook);

  print(phoneBook.keys);
  print(phoneBook.values);
    
}
```

```dart
//console 결과는??
1345566
87539947
{진주: 1234567, 희라: 4325556, 성주: 1345566, 상혁: 8547885, 효섭: 87539947}
(진주, 희라, 성주, 상혁, 효섭)
(1234567, 4325556, 1345566, 8547885, 87539947)
```

여기서 ``'성주':`` 가 ``Key`` 고,   
``1345566`` 가 ``Value`` 가 된다.  
존재하지 않는 Key 를 꺼내려하면 ``null`` 이 출력된다.

# 결과 페이지

일단 기능별로 쪼개서 디렉토리 파일 안에 분류해주자.  
리액트 컴포넌트 쪼개느라 머리 쪼개질뻔했던 때가 생각나네...

<img width="221" alt="스크린샷 2020-03-03 오전 1 54 51" src="https://user-images.githubusercontent.com/55340876/75698375-faa1c180-5cf1-11ea-8740-a973a7aebd1b.png">

input_page.dart
```dart
...

      BottomButton( //위젯추출
        onTap: () {
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (context) => ResultsPage(),
            ),
          );
        },
        buttonTitle: 'CALCULATOR',
      ),
    ],

...
```

하단 바컴 컨테이너 부분 위젯은 추출해서 분리했다.  
(2페이지 푸터에도 쓸거기 때문에!!)

bottom_button.dart
```dart
import 'package:flutter/material.dart';
import '../constants.dart';

class BottomButton extends StatelessWidget {
  //위젯 추출해주고
  final Function onTap;
  //onTap과 buttonTitle 속성은 두페이지의 푸터마다 다르게 값을 줘야하니까 따로 정의한다
  final String buttonTitle;

  BottomButton({@required this.onTap, @required this.buttonTitle});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        child: Center(
          child: Text(
            buttonTitle,
            style: KLargeButtonTextStyle,
          ),
        ),
        color: KBottomContainerColour,
        margin: EdgeInsets.only(top: 10.0),
        padding: EdgeInsets.only(bottom: 20.0),
        width: double.infinity,
        height: KBottomContainerHeight,
      ),
    );
  }
}
```

constantes.dart

```dart
...

const KLargeButtonTextStyle = TextStyle(
  fontSize: 25.0,
  fontWeight: FontWeight.bold,
);

const KTitleTextStyle = TextStyle(
  fontSize: 50.0,
  fontWeight: FontWeight.bold,
);

const KResultTextStyle = TextStyle(
  color: Color(0xFF24D876),
  fontSize: 22.0,
  fontWeight: FontWeight.bold,
);

const KBMITextStyle = TextStyle(
  fontSize: 100.0,
  fontWeight: FontWeight.bold,
);

const KBodyTextStyle = TextStyle(
  fontSize: 22.0,
);
```

results_page.dart

```dart
import 'package:flutter/material.dart';
import '../constants.dart';
import '../components/reusable_card.dart';
import '../components/bottom_button.dart';

class ResultsPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('BMI CALCULATOR'),
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        crossAxisAlignment: CrossAxisAlignment.stretch, //화면을 가로질러 늘어남
        children: <Widget>[
          Expanded(
            child: Container(
              padding: EdgeInsets.all(15.0),
              alignment: Alignment.bottomLeft,
              child: Text(
                'Your Result',
                style: KTitleTextStyle,
              ),
            ),
          ),
          Expanded(
            flex: 5, //플랙스를 주지 않는 모든 Expanded 위젯은 처음에 1의 비율을 유지한다.
            child: ReusableCard(
              colour: KActiveCardColour,
              cardChild: Column(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                crossAxisAlignment: CrossAxisAlignment.center,
                children: <Widget>[
                  Text(
                    'Normal',
                    style: KResultTextStyle,
                  ),
                  Text(
                    '18.3',
                    style: KBMITextStyle,
                  ),
                  Text(
                    'Your BMI result is quite low, you should eat more!',
                    textAlign: TextAlign.center, //텍스트 내에서의 가운데 정렬
                    style: KBodyTextStyle,
                  ),
                ],
              ),
            ),
          ),
          BottomButton(
            buttonTitle: 'RE-CALCULATE',
            onTap: () {
              Navigator.pop(context);
            },
          ),
        ],
      ),
    );
  }
}
```


<img width="345" alt="스크린샷 2020-03-03 오전 2 00 59" src="https://user-images.githubusercontent.com/55340876/75698890-d7c3dd00-5cf2-11ea-86f2-06b5c84fcbb7.png">


# 계산 기능 추가

calculator_brain.dart 파일 추가
```dart
import 'dart:math';

class CalculatorBrain {
  final int height;
  final int weight;

  CalculatorBrain({this.height, this.weight});

  double _bmi;

  String calculateBMI() {
    //BMI 계산 공식. BMI 결과를 문자열 타입으로 반환한다
    _bmi = weight / pow(height / 100, 2); //pow(x, 제곱)
    return _bmi.toStringAsFixed(1);
    //위에 공식으로는 겁나 긴 실수가 나오니까 10수로 반환시킨다. (괄호 안에 1을 씀으로 소수점 이하 한자리만 반환해줌)
  }
  //상단 할당 변수명이 그냥 double bmi 였다면 {} 중괄호 안에 해당 로컬에서만 값을 볼수 있어서
  //getResult bmi로 접근을 못한다. 그렇기 때문에 프라이빗 변수로 선언을 해주고 모든 명을 똑같이 바꿔주면 접근 가능하다.

  String getResult() {
    //결과가 될 문자열을 반환하는 메소드
    if (_bmi >= 25) {
      return '과체중';
    } else if (_bmi > 18.5) {
      return '정상';
    } else {
      return '저체중';
    }
  }

  String getInterpretation() {
    //BMI 해석 메소드
    if (_bmi >= 25) {
      return '당신은 정상 체중보다 높습니다.\n운동을 좀 더 해주세요.';
    } else if (_bmi > 18.5) {
      return '당신은 정상 체중입니다.\n잘하고 있어요!';
    } else {
      return '당신은 정상 체중보다 낮습니다.\n음식을 좀 더 섭취 해주세요.';
    }
  }
}
```

사용자가 모든 조건을 설정하고 푸터에 결과보기를 클릭 했을 때 값페이지가 호출되야 한다.

input_page.dart

```dart
...

    BottomButton(
      onTap: () {
        CalculatorBrain calc = CalculatorBrain(
          //객체생성
          height: height,
          weight: weight,
        );

        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => ResultsPage(
              bmiResult: calc.calculateBMI(),
              resultText: calc.getResult(),
              interpretation: calc.getInterpretation(),
            ),

...
```

results_page.dart

```dart
...

class ResultsPage extends StatelessWidget {
  final String bmiResult;
  final String resultText;
  final String interpretation;

  ResultsPage(
      {@required this.bmiResult,
      @required this.resultText,
      @required this.interpretation});

...

      child: ReusableCard(
        colour: KActiveCardColour,
        cardChild: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: <Widget>[
            Text(
              resultText, //소문자 영어였으면 .toUpperCase() 붙여서 바꾸면됨
              style: KResultTextStyle,
            ),
            Text(
              bmiResult,
              style: KBMITextStyle,
            ),
            Text(
              interpretation,
              textAlign: TextAlign.center, //텍스트 내에서의 가운데 정렬
              style: KBodyTextStyle,
            ),

...
```

<img width="360" alt="" src="https://user-images.githubusercontent.com/55340876/75704261-5ec98300-5cfc-11ea-9092-de3d5b8e4e31.gif">

끄읕!!





<br/>


---
---

# Reference  
- [Angela Yu 강의(유료)](https://www.udemy.com/course/flutter-bootcamp-with-dart/)