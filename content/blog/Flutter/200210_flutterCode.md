
# 프로젝트 폴더의 구성

![스크린샷 2020-02-09 오후 9.58.52.png](https://images.velog.io/post-images/chajanee/a6e7aa70-4b3d-11ea-93c4-55cae6beeb65/-2020-02-09-9.58.52.png)

#### pubspec.yaml
- 프로젝트의 meta data 를 정의하고 관리
 - 프로젝트의 버전, 사용환경, dart의 버전, 각종 디펜더시, 라이브러리 등을 이곳에서 정의
 
#### android 폴더 , ios 폴더
- 각 플랫폼에 맞게 앱을 배포하기 위한 정보들을 갖고 있음
 
#### test 폴더
- 개발하길 원하는 각종 dart 관련 코드를 테스트할 수 있음

#### lib 폴더
- 앞으로 앱을 만들 때 거의 99%를 이곳에서 작업함

--- 
# 클래스명과 함수명
- 함수의 이름은 보통 소문자로 시작 
 - main()
 - runApp()
- 클래스명은 대문자로 시작
 - MyApp() (대문자로 시작 / 위젯이 클래스와 관련이 있다는 의미)
 - 두단어 이상의 조합으로 이름을 만들 때, 가독성을 위해 단어의 첫글자는 대부분 대문자로 시작 (Camel Case)
 
---

# [Flutter Widget Tree 복습하기](https://jinjoo.netlify.com/Flutter/200207_flutterAndWidget/)

---
# 앱페이지 기본 코드 1

플러터 앱을 만들 때 제일 먼저 할 일은,  
flutter material 라이브러리를 import 하는 것.  
이걸 가져와야만 SDK(플러터 프레임워크) 에 포함된 모든 기본 위젯과 material design 테마 요소들을 사용할 수 있기 때문!  

여기서 material design 이란,  
모바일, 데스크탑, 그 외의 다양한 디바이스를 아우르는 일관된 디자인을 위해 구글이 제공한 가이드라인.


vscode 를 통해 import 부터 작성해보자.

![2020-02-09 22-10-06.2020-02-09 22_10_33.gif](https://images.velog.io/post-images/chajanee/aaa85bf0-4b3d-11ea-92b5-8367a11cd064/2020-02-09-22-10-06.2020-02-09-221033.gif)

```go
import 'package:flutter/material.dart';

void main() => runApp(MyApp());
```

``void main()``
- void : 텅빈공간을 의미.
- main 함수의 실행이 다 끝났을 때 아무런 값도 반환하지 않는다를 정의하기 위해 앞에 void를 붙여줌. 
- 이 함수는 앱의 시작점으로 가장 먼저 실행된다.
- 즉, 컴파일러가 우리가 작성한 코딩을 컴퓨터가 이해할 수 있는 언어로 바꾸는 작업을 할 때
가장 먼저 이 main 함수를 참조함.

```=>``` : fat arrow
- 코딩을 좀 더 간결하기 위한 기호
- 이 코드에서는 main 함수가 다른 함수를 호출한다는 의미로 사용되서 화살표 뒤에서 함수가 등장함

``runApp(MyApp())``
- 최상위 함수 (한번만 호출)
- 이 함수는 반드시 위젯을 argument로 가져야함
- 괄호안에는 위젯이라는 요소가 반드시 들어와야함

``MyApp()``
- 플러터 프레임워크에서 제공하는 기본 위젯이 아니라 custom 위젯으로 우리가 직접 만들어야 하는 위젯임.
- 원하는 이름으로 지정해도 됨
- 최상위 위젯
- 스크린 레이아웃을 최초로 빌드함

``;``
- 마침표의 의미로 세미콜론을 반드시 붙여줘야 함


---

#### 커스텀 위젯을 만들 때에는 항상 stateless 위젯인지 stateful 위젯인지 고민한 후 만들어야한다.

---

# 앱페이지 기본 코드 2

```go
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp();
    
  }
}
```


![2020-02-09 22-51-50.2020-02-09 22_52_50.gif](https://images.velog.io/post-images/chajanee/8b6f2330-4b43-11ea-8b77-df09647a644e/2020-02-09-22-51-50.2020-02-09-225250.gif)

#### ``stl`` : 클래스 생성 단축키

최초로 앱의 레이아웃을 빌드
즉, 뼈대를 만드는 역할을 해서 어떤 변화나 움직임이 없는 정적인 위젯
stateless 위젯으로 지정해야 함


```go
  Widget build(BuildContext context) {
    return MaterialApp();
    
  }
```
- 모든 커스텀 위젯은 또다른 위젯을 리턴하는 build 라는 함수를 갖고있음.
- MaterialApp 이라는 위젯을 리턴하고 있음
- ```MaterialApp``` 위젯은 플러터 프레임워크가 제공하는 모든 기본 위젯과 디자인 테마를 사용가능하게 해줌
 - MyApp 위젯에 이어서 위젯트리 2번째 자리에 위치
 - 실질적으로 모든 위젯을 감싸고 있음
- 플러터의 모든 위젯들은 argument 를 가진다고 생각하자

```go
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'First app',
      theme: ThemeData(primarySwatch: Colors.blue),
    );
  }
}
```

![2020-02-09 23-02-36.2020-02-09 23_04_15.gif](https://images.velog.io/post-images/chajanee/26163e40-4b45-11ea-a2f3-09ae56241815/2020-02-09-23-02-36.2020-02-09-230415.gif)

- MaterialApp 위젯은 기본적으로 title 문자열을 argument로 갖고있음
 - 앱을 총칭하는 이름 (스마트폰 상에서 최근 사용한 앱의 리스트를 보여질때 이 타이틀이 보여짐)
- 문자열은 항상 ``''`` 로 감싸주자
- ``ThemeData`` : 앱의 기본적인 디자인 테마를 지정하는 곳으로 이것 역시 argument를 가짐
 - ``primarySwatch`` : 기본적으로 사용할 색상 견본을 의미 
 (특정 색의 음영들을 기본 색상으로 지정해서 사용하겠다 를 의미 / Colors.색상명
 
 
```go
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'First app',
      theme: ThemeData(primarySwatch: Colors.blue),
      home: MyHomePage(),
    );
  }
}

```
- ``home: MyHomePage()`` : 반드시 필요한 위젯
 - home은 앱이 정상적으로 실행되었을때 가장 먼저 화면에 보여주는 경로.
앱 실행시, MyHomePage 내용들을 제일 먼저 보게됨. 

---
# 코드작성 빠르게 복습하기!
(갑자기 분위기 안드로이드 스튜디오..헿)

![2020-02-10 00-10-17.2020-02-10 00_13_34.gif](https://images.velog.io/post-images/chajanee/c717cee0-4b4e-11ea-9257-e53d51104339/2020-02-10-00-10-17.2020-02-10-001334.gif)


---
# 앱페이지 기본 코드 3

```go
class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('First app'),
      ),
      body: Center(
        child: Column(
          children: <Widget>[
            Text('차차차'), 
            Text('차차차'), 
            Text('차차차')
          ],
        ),
      ),
    );
  }
}

```

- ``Scaffold()`` 위젯 : 무언가를 혼자 해낼 수 있도록 발판을 만들어주다 라는 의미.
 - 앱 화면의 다양한 요소들을 배치하고 그릴수 있도록 도와주는 빈 도화지 역할을 한다.
 - 요 위젯이 없으면 그 어떠한 요소들도 앱 화면에 배치불가.
- ``AppBar()`` 위젯
 - ``title: Text('First app'),`` : 앱 화면 앱바의 출력되는 타이틀
- ``body`` : 앱 화면을 만드는 시작점.
- ``Center()`` : 화면 중앙에 위치
- ``Column()`` : 요소들을 세로로 배치
- ``[]`` 배열을 의미 / 세로로 정렬된 위젯들을 나열하라.
 -  한 위젯이 끝나면 무조건 ``,`` 쉼표로 구분해서 코드를 작성해줘야 함

---

# 최종 코드

```go
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'First app',
      theme: ThemeData(primarySwatch: Colors.blue),
      home: MyHomePage(),
    );
  }
}

class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('First app'),
      ),
      body: Center(
        child: Column(
          children: <Widget>[
            Text('차차차'), 
            Text('차차차'), 
            Text('차차차')
          ],
        ),
      ),
    );
  }
}

```

![최종코드.gif](../../assets/code11.gif)

