---
title: '💎 [Flutter] Planets App (미완)'
date: 2020-02-25 01:34:00
category: 'Flutter'
draft: false
showToc: true
---

2년도 훨씬 지난 블로그를 참고해서 만드는거라 구방식이 남아있을 수 있다.

- 플러터 프로젝트 생성
- assets 폴더 생성
- 다운받은 폰트와 이미지를 pubspec.yaml 에 추가 (들여쓰기 주의!)
  
```dart
...

  assets:
    - assets/img/

  fonts:
    - family: Poppins
      fonts:
        - asset: assets/fonts/Poppins-SemiBold.ttf
          weight: 600
        - asset: assets/fonts/Poppins-Regular.ttf
          weight: 400

...
```

# 앱바 꾸미기

**lib/main.dart**

```dart
import 'package:flutter/material.dart';
import 'package:planets_flutter_app/ui/home_page.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Planets',
      home: HomePage(),
    );
  }
}
```

**lib/ui/home_page.dart**

```dart
class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        title: Text(
          'treva',
          style: TextStyle(
              color: Colors.white,
              fontFamily: 'Poppins',
              fontWeight: FontWeight.w600,
              fontSize: 36.0),
        ),
        flexibleSpace: Container( 
        //flexibleSpace : 최대높이
          decoration: BoxDecoration(
              //컨테이너 배경 꾸미기
              gradient: LinearGradient(
                  //라인 색상 전환. 2가지의 색상을 받는다
                  begin: Alignment.topLeft, //컬러 시작점
                  end: Alignment.topRight, //컬러 끝나는점
                  colors: <Color>[
                //입맛대로 Colors.색상 해도 상관없음
                Color(0xFF3366FF),
                Color(0xFF00CCFF)
              ])),
        ),
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          HomePageBody(),
        ],
      ),
    );
  }
}
```


<img width="500" alt="스크린샷 2020-02-24 오후 6 00 30" src="https://user-images.githubusercontent.com/55340876/75139338-b7fb4a80-572f-11ea-87c3-ae5bd6b7a4f1.png">

**뾰로롱**


# 카드 만들기

**lib/ui/home_ page_body.dart**

```dart
import 'package:flutter/material.dart';
import 'package:planets_flutter_app/ui/planet_row.dart';

class HomePageBody extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return PlanetRow();
  }
}
```



**lib/ui/planet_row.dart**

```dart
import 'package:flutter/material.dart';

class PlanetRow extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container();
  }
}
```

<img width="690" alt="planets-card-measure" src="https://user-images.githubusercontent.com/55340876/75146645-dfa5df00-573e-11ea-8894-5a871c81d146.png">

예제를 보자면,  
요로코롬 상단 이미지처럼 카드를 구현해줘야 한다!


## EdgeInsets
- 여백을 생성하는 클래스
- ``EdgeInsets.only(left, top, right, bottom)``
   - 면마다 다른 여백을 정의 
   - 모두 선택 사항이므로 예를 들어 왼쪽과 위쪽 만 지정 가능
- ``EdgeInsets.fromLTRB(left, top, right, bottom)``
   - 이전과 유사하지만 위치 매개 변수를 사용하여 네 개의 여백을 지정
   - LTRB 규칙 (왼쪽, 위, 오른쪽, 아래)
- ``EdgeInsets.all(value)``
   - 네면 모두에 대해 동일한 여백을 설정
- ``EdgeInsets.symmetric(vertical, horizontal)``
   - 단일 값으로 위 / 아래 및 / 또는 왼쪽 / 오른쪽을 지정 가능 (대칭)
  
<br/>

``Widget build(BuildContext context)`` 인,  
빌드 위젯 밑에다 기재를 해야하는데,  
오버라이드 윗줄에 기재해서 삽질 좀 했다.. ㅠㅠ

**lib/ui/planet_row.dart**

```dart
import 'package:flutter/material.dart';

class PlanetRow extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    final planetThumbnail = Container(
        margin: EdgeInsets.symmetric(vertical: 16.0),
        alignment: FractionalOffset.centerLeft,
        child: Image(
            image: AssetImage('assets/img/mars.png'),
            width: 92.0,
            height: 92.0,
        ));

    return Container(
      margin: EdgeInsets.symmetric(
        vertical: 16.0,
        horizontal: 24.0,
      ),
      child: Stack(
        //상자의 가장자리를 기준으로 자식을 배치하는 위젯. 여러 자식 요소를 겹칠 수 있음
        children: <Widget>[
//          planetCard,
          planetThumbnail,
        ],
      ),
    );
  }
}
```

(planetCard 부분은 잠시 주석처리)

요기까지만 오면 화면은 이렇다.

<img width="1348" alt="스크린샷 2020-02-24 오후 7 53 14" src="https://user-images.githubusercontent.com/55340876/75146856-504cfb80-573f-11ea-800c-a6039ce15575.png">

이제 텍스트가 들어가는 부분을 만들자.

planetCard 주석을 풀고,  

```dart
...

            image: AssetImage('assets/img/mars.png'),
            width: 92.0,
            height: 92.0,
        ));

  final planetCard = Container(
    height: 124.0,
    margin: EdgeInsets.only(left: 46.0),
    decoration: BoxDecoration(
        color: Color(0xFF333366), //컨테이너 배경색
        shape: BoxShape.rectangle, //직사각형 모양
        borderRadius: BorderRadius.circular(8.0), //테두리선
        boxShadow: <BoxShadow>[
          BoxShadow(
            //그림자효과
            color: Colors.black12,
            blurRadius: 10.0,
            offset: Offset(0.0, 10.0),
          ),
        ]),
  );

...
```

planetCard 내용을 추가해주면?

<img width="500" alt="스크린샷 2020-02-24 오후 8 02 43" src="https://user-images.githubusercontent.com/55340876/75147441-a3737e00-5740-11ea-8708-ac8086008ccf.png">

쫜!! 카드 틀은 만들어졌다.   
home_page.dart 에서 ``HomePageBody()`` 인스턴스를 더 추가하면 쫘륵 나열된다.

<img width="1337" alt="스크린샷 2020-02-24 오후 8 04 48" src="https://user-images.githubusercontent.com/55340876/75147554-ed5c6400-5740-11ea-8563-ba4c2b5fe4e0.png">

# 카드 내용 추가

- lib 디렉토리에 model 디렉토리 생성 후 planets.dart 파일 생성
  
찐데이터가 없으니 목업 데이터를 생성해서 만들건데,  
일단 단일 행성에 대한 정보를 보유하는 클래스와 행성의 정보를 담은 리스트를 만든다.

**lib/model/planets.dart**

```dart
class Planet {
  final String id;
  final String name;
  final String location;
  final String distance;
  final String gravity;
  final String description;
  final String image;
  final String backgroundImg;

  Planet({
    this.id,
    this.name,
    this.location,
    this.distance,
    this.gravity,
    this.description,
    this.image,
    this.backgroundImg,
  });
}

List<Planet> planets = [
  Planet(
    id: "1",
    name: "Mars",
    location: "Milkyway Galaxy",
    distance: "227.9m Km",
    gravity: "3.711 m/s ",
    description: "Mars WOW",
    image: "assets/img/mars.png",
    backgroundImg: "assets/img/marsBG.jpg",
  ),
  Planet(
    id: "2",
    name: "Neptune",
    location: "Milkyway Galaxy",
    distance: "54.6m Km",
    gravity: "11.15 m/s ",
    description: "Neptune WOW",
    image: "assets/img/neptune.png",
    backgroundImg: "assets/img/neptuneBG.jpg",
  ),
  Planet(
    id: "3",
    name: "Moon",
    location: "Milkyway Galaxy",
    distance: "54.6m Km",
    gravity: "1.622 m/s ",
    description: "Moon WOW",
    image: "assets/img/moon.png",
    backgroundImg: "assets/img/MoonBG.jpg",
  ),
  Planet(
    id: "4",
    name: "Earth",
    location: "Milkyway Galaxy",
    distance: "54.6m Km",
    gravity: "9.807 m/s ",
    description: "Earth WOW",
    image: "assets/img/earth.png",
    backgroundImg: "assets/img/EarthBG.jpg",
  ),
  Planet(
    id: "5",
    name: "Mercury",
    location: "Milkyway Galaxy",
    distance: "54.6m Km",
    gravity: "3.7 m/s ",
    description: "Mercury WOW",
    image: "assets/img/mercury.png",
    backgroundImg: "assets/img/MercuryBG.jpg",
  ),
];
```

PlanetCard와 planetThumbnail이 하나의 Planet 객체를 받아서 사용할수 있도록 한다.

**planet_row.dart**
```dart
import 'package:flutter/material.dart';
import 'package:planets_flutter_app/model/planets.dart'; //import

class PlanetRow extends StatelessWidget {
  final Planet planet; //추가

  PlanetRow(this.planet); //추가

...

  @override
  Widget build(BuildContext context) {
  final planetThumbnail = Container(
      margin: EdgeInsets.symmetric(vertical: 16.0),
      alignment: FractionalOffset.centerLeft,
      child: Image(
        image: AssetImage(planet.image), //이미지 경로 수정

...
```

planetThumbnail 및 planetCard를 최종 클래스 멤버로 선언하였고,  
이것을 참조할 수 있게  
*home_ page_body.dart 에서 빌드 메소드를 수정하자.

```dart
import 'package:flutter/material.dart';
import 'package:planets_flutter_app/ui/planet_row.dart';
import 'package:planets_flutter_app/model/planets.dart';

class HomePageBody extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return PlanetRow(planets[0]); //수정
           PlanetRow(planets[1]), //수정
           PlanetRow(planets[2]), //수정
  }
}

```

``planets[0]`` 이부분 인덱스 번호를 수정하여 썸네일 작동을 확인해보자.  

![2020-02-24 21-24-15 2020-02-24 21_26_14](https://user-images.githubusercontent.com/55340876/75152444-5dbcb280-574c-11ea-9554-72ec8c314d3c.gif)



목업 데이터는 총 5개만 존재하기에 (0, 1, 2, 3, 4)  
인덱스 번호 5를 넣으면 에러가 뜬다.

공통적으로 사용할 수 있는 기본 텍스트 스타일을 지정해주자.

**lib/common/text_style.dart**

```dart
import 'package:flutter/material.dart';

final baseTextStyle = TextStyle(
  fontFamily: 'Poppins',
);

final headerTextStyle = baseTextStyle.copyWith(
  color: Colors.white,
  fontSize: 18.0,
  fontWeight: FontWeight.w600,
);

final regularTextStyle = baseTextStyle.copyWith(
  color: Color(0xffb6b2df),
  fontSize: 9.0,
  fontWeight: FontWeight.w400,
);

final subHeaderTextStyle = regularTextStyle.copyWith(
  fontSize: 12.0,
);
```

이제 드디어 내용 추가!!!  

아래는 디자인 일부가 수정된 예제이다.  

<img width="599" alt="planet-card-content-measures" src="https://user-images.githubusercontent.com/55340876/75159086-d0348f00-575a-11ea-9345-0e294783c30c.png">

예제를 참고하여 레이아웃을 짜야한다.

**planet_row.dart**

```dart
...

    final planetCardContent = Container(
      //전체 컨텐츠의 기본 위젯이 될 컨테이너
      margin: EdgeInsets.fromLTRB(76.0, 16.0, 16.0, 16.0),
      constraints: BoxConstraints.expand(), //크기의 제약을 줌
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          Container(height: 4.0), //빈 컨테이너 사용으로 텍스트 요소 구분
          Text(
            planet.name,
            style: headerTextStyle,
          ),
          Container(height: 10.0),
          Text(
            planet.location,
            style: subHeaderTextStyle,
          ),
          Container(
            //단일 컨테이너를 사용. 파란 선 부분이다
            margin: EdgeInsets.symmetric(vertical: 8.0),
            height: 2.0,
            width: 18.0,
            color: Color(0xff00c6ff),
          ),
          Row(
            //거리와 중력은 가로로 배정
            children: <Widget>[
              Image.asset('assets/img/ic_distance.png', height: 12.0),
              Container(width: 8.0),
              Text(
                planet.distance,
                style: regularTextStyle,
              ),
              Container(width: 24.0),
              Image.asset(
                'assets/img/ic_gravity.png',
                height: 12.0,
              ),
              Container(width: 8.0),
              Text(
                planet.gravity,
                style: regularTextStyle,
              ),
            ],

...
```

빈 컨테이너 사용으로 텍스트 요소에 구분을 주었는데  
SizedBox 위젯을 써도 된다.

Row 위젯 부분을 살펴보자.  
중력과 거리 요소 가운데를 컨테이너 위젯을 입혀서 강제로 배치하였다.  

강제값 주는 방법 말고,  
행 너비를 무시하고 항상 중앙에서 시작되길 원한다면?  

```dart
...

        Row(
        //거리와 중력은 가로로 배정
        children: <Widget>[
            Expanded(
                child: Row(
            children: <Widget>[
                Image.asset('assets/img/ic_distance.png', height: 12.0),
                Container(width: 8.0),
                Text(planet.distance, style: regularTextStyle),
            ],
            )),
            Expanded(
                child: Row(
            children: <Widget>[
                Image.asset(
                'assets/img/ic_gravity.png',
                height: 12.0,
                ),
                Container(width: 8.0),
                Text(planet.gravity, style: regularTextStyle),
            ],
            )),

...
```

Expanded와 Row 위젯을 이용하면 둘 요소가 50%로 반반씩 공간을 공유한다.  
내용이 왼쪽에 맞춰지면 두번째 내용은 항상 중앙에서 시작하게 된다.

두 내용은 비슷해서 이것도 노가다다.  
메소드로 추출해서 사용해보자!

```dart
...

    Widget _planetValue({String value, String image}) {
      return Row(
        children: <Widget>[
          Image.asset(image, height: 12.0),
          Container(width: 8.0),
          Text(planet.gravity, style: regularTextStyle),
        ],
      );
    }

...
```

화면에 잘 나타내는지 planetCard 하단에 추가해서 확인해보자.

```dart
...

    final planetCard = Container(
      child: planetCardContent,

...
```

<img width="371" alt="스크린샷 2020-02-25 오전 12 06 33" src="https://user-images.githubusercontent.com/55340876/75163500-b39c5500-5762-11ea-85e3-7b601cca21e5.png">

후.. 나이스하구먼!!! 👍🏻

중간점검 삼아 한번 쭉 훑어봅세  
전체적인 **planet_row.dart** 코드는 이렇다.


# 행성 목록 만들기

지금까지는 정보를 보여주는 카드를 만들었다.  
이제 모든 행성을 보여주는 카드 목록을 만들자.

PlanetCard객체를 사용하여 행성 목록을 표시하기 위해 동적 목록을 생성해야 한다.

ListView 위젯을 사용하여 목록과 스크롤 가능한 항목을 만든다.  
ScrollView 와 유사하다.  

```dart
    ListView(
        children: Widget<>[
        Item1(),
        Item2(),
        Item3()
    ]
)
```

동적 목록의 경우 생성자를 사용하는데,  
ListView.builder(). SimpleListView 이외의 몇 가지 추가 매개 변수가 필요하다.  

- itemCount: 목록에 표시 할 항목 수
- itemBuilder: IndexedWidgetBuilder 각 행 작성을 담당 하는 유형의 함수.   
  현재 컨텍스트와 항목 색인을 수신하고 표시하려면 Widget를 리턴해야한다.
- itemExtent: 행의 크기를 설정.  
   모든 행의 크기가 동일하면 항목의 페인팅 속도가 빨라진다.

**lib/ui/home_ page_body.dart**

```dart
...

class HomePageBody extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemBuilder: (context, index) => new PlanetRow((planets[index])),
      itemCount: planets.length,
      itemExtent: 152.0,
    );
  }
}
```

워우.. 근데 핫리로드하믄 에러뜬다..
?  
?  
?  

이건 ListView 자체 높이를 계산하지 못해서 나는 에러이다.  
지정된 높이의 컨테이너를 넣어줘도 되지만 각 디바이스마다 높이가 다를수도 있고,  
그걸 언제 계산하고 있나?!  
Expanded 위젯을 사용해주자.  

```dart
...

  @override
  Widget build(BuildContext context) {
    return Expanded(
      child: ListView.builder(

...
```

Expanded 확장 위젯은 특정 크기의 위젯 크기를 계산 후,  
나머지 공간을 모두 차지하므로 ListView에 적절 높이 크기를 제공한다.  

<img width="350" alt="" src="https://user-images.githubusercontent.com/55340876/75165278-7c7b7300-5765-11ea-90a0-918eaf856389.gif">

스크롤 가능한 목록이 만들어졌다!  
허나... 에러 보이는감?! 저게뭐람?!  

여백을 고쳐주자!

```dart
...

        itemCount: planets.length,
        padding: EdgeInsets.symmetric(vertical: 16.0),
      ),

...
```

<img width="371" alt="스크린샷 2020-02-25 오전 12 33 01" src="https://user-images.githubusercontent.com/55340876/75165883-67531400-5766-11ea-95e2-c522d1b6b028.png">


(배경 넘모 허여죽죽해서 깐지나게 바꿔줌)  
오류 해결!! 

자 동일한 스크롤 기능을 담당하지만 더 강력한 CustomScrollView, sliver 를 소개하겠다.

## CustomScrollView / sliver

sliver 는 ScrollView 위젯 내부에 위치해야 한다.  
ScrollView 를 만드는 기본 클래스인 CustomScrollView는  
Slivers 를 자식으로 허용한다.  

- SliverAppBar: 접을 수있는 재질 AppBar를 만드는 데 사용 (보이기, 감추기)
- SliverList: 선형 항목 목록.
- SliverFixedExtentList: 이전 항목과 비슷하지만 높이가 고정 된 항목의 경우.
- SliverToBoxAdapter: 크기가 정의 된 단일 자녀가있는 sliver.
- SliverPadding: 다른 Sliver를 포함하고 패딩을 적용 할 수있는 간단한 sliver.

이 중 일부는 일종의 ChildDelegate 사용한다.  
이전에 했던 코드를 바꿔보자.

```dart
...

  Widget build(BuildContext context) {
    return Expanded(
      child: Container(
        color: Color(0xFF736AB7),
        child: CustomScrollView(
          scrollDirection: Axis.vertical,
          slivers: <Widget>[
            SliverPadding(
              padding: EdgeInsets.symmetric(vertical: 24.0),
              sliver: SliverFixedExtentList(
                itemExtent: 152.0,
                delegate: SliverChildBuilderDelegate(
                  (context, index) => PlanetRow(planets[index]),
                  childCount: planets.length,
                ),
              ),
            )

...
```

요로코롬 해도 된다!

# 페이지 라우팅

각 행성의 세부 사항 페이지로 이동하여 목록을 좀더 생동감 있게 만들어보자.

가장 쉬운 방법은 MaterialApp 선언에서 주는 것이다.  
예를 들어 행성 세부 사항에 대한 페이지를 선언하려는 경우,  
MaterialApp 객체에 다음을 추가한다.

```dart
...

    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Planets',
      home: HomePage(),
      routes: <String, WidgetBuilder>{
        '/detail': (_) => DetailPage(),
      },
    );

...
```

route 매개변수는 String 키를 사전에 정의한다.  
각 키는 웹 형식의 페이지 경로 이름이다.  
각 항목의 WidgetBuilder 는 현재 컨텍스트를 수신하고 페이지   
(이 경우 DetailPage) 로 표시되도록 위젯을 리턴하는 유형의 메소드를 포함한다. 

홈 매개 변수를 통해 선언 된 다른 페이지가 있으며 해당 경로는 항상 '/' 이다.  

경로를 선언한 후,  
PlanetRow 객체가 클릭시 이 페이지로 이동하도록 할 수 있는데,  
이를 위해 전체 행 위젯을 GestureDetector 위젯으로 랩핑해야 한다.

```dart
...

    return GestureDetector(
      onTap: () => Navigator.pushNamed(context, '/detail'),
      child: Container(
        margin: EdgeInsets.symmetric(
          vertical: 16.0,
          horizontal: 24.0,
        ),
        child: Stack(
          //상자의 가장자리를 기준으로 자식을 배치하는 위젯. 여러 자식 요소를 겹칠 수 있음
          children: <Widget>[
            planetCard,
            planetThumbnail,

...
```

GestureDetector 위젯은,  
onTap, onDoubleTap, onLongPress 등 여러 매개변수가 존재하지만  
우리는 사용자의 모든 물리적 상호작용을 처리토록 이경우에는 onTap 매개변수만 사용하며   
탭 시, 실행할 기능을 제공한다. 

pushNamed 메소드는 클래스의 메소드를 실행하며,  
Navigator 현재의 컨텍스트와 탐색 경로(예: '/detail') 인 2가지 매개변수가 필요하다.

**lib/ui/detail/datail_page.dart**

```dart
import 'package:flutter/material.dart';

class DetailPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Planet Detail"),
      ),
      body: Center(
        child: RaisedButton(
            onPressed: () => Navigator.pop(context),
            child: Text('<<< Go back')),
      ),
    );
  }
}
```
<img width="350" alt="" src="https://user-images.githubusercontent.com/55340876/75169064-40e3a780-576b-11ea-9608-c9b7b887ab75.gif">

여기서 문제점은  
안드로이드 경우 뒤로 버튼이 작동하고, iOS 경우는 왼쪽 스와이프 동작이 작동한다.

이 라우팅 테이블 방법으로는 매개 변수를 새로운 화면으로 보낼 수 없다.  

만들었던 MaterialApp 경로 매개변수를 삭제하고  
GestureDetector 수정하자.


**lib/ui/detail/datail_page.dart**

```dart
import 'package:flutter/material.dart';
import 'package:planets_flutter_app/model/planets.dart';

class DetailPage extends StatelessWidget {
  final Planet planet;

  DetailPage(this.planet);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        constraints: BoxConstraints.expand(),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(planet.name),
            Image.asset(
              planet.image,
              width: 96.0,
              height: 96.0,
            ),
          ],
        ),
      ),
    );
  }
}
```

PageRoute를 복구하는 대신 pushNamed 클래스를 사용하여 새 경로를 만들고  
여기에 페이지로 표시하기 위해 새 위젯을 반환하는  
PageRoutBuilder 매개변수 pageBuilder 가 있다.  
(이 경우, DetailPage 표시)



**lib/ui/planet_row.dart** 


```dart
...

import 'package:planets_flutter_app/ui/detail/datail_page.dart';

...

    return GestureDetector(
      onTap: () => Navigator.of(context).push(PageRouteBuilder(
        pageBuilder: (_, __, ___) => DetailPage(planet),
      )),

...
```

<img width="350" alt="" src="https://user-images.githubusercontent.com/55340876/75170194-15fa5300-576d-11ea-9328-0c4f154f7487.gif">

화면에 행성 이름과 이미지만 표시되는 간단한 레이아웃이다.  

화면 간 애니메이션을 줘보자!

# 애니메이션 효과


**lib/ui/planet_row.dart** 

```dart
...

      alignment: FractionalOffset.centerLeft,
      child: Hero(
        tag: 'planet-hero-${planet.id}',
        child: Image(
          image: AssetImage(planet.image),
          height: 92.0,
          width: 92.0,
        ),

...
```

**lib/ui/detail/datail_page.dart**

```dart
...

        children: <Widget>[
        Text(planet.name),
        Hero(
            tag: 'planet-hero-${planet.id}',
            child: Image(
                image: AssetImage(planet.image),
                width: 96.0,
                height: 96.0,
            )),

...
```

Hero 위젯은 화면간 쉬운 애니메이션 효과를 주기 위해 쓴다.  

<img width="350" alt="" src="https://user-images.githubusercontent.com/55340876/75171250-b0a76180-576e-11ea-9b5e-fff02ddb9cb0.gif">


# 행성 상세페이지

예제는 이렇다.

<img width="350" alt="" src="https://user-images.githubusercontent.com/55340876/75171762-7f7b6100-576f-11ea-9e23-6c7ebbe302b9.png">


- 배경 이미지 
- 배경 이미지와 배경색 사이의 그라데이션
- 스크롤 가능한 컨텐츠 자체
- 상단의 뒤로가기 버튼

<br/>

일단 텍스트 스타일좀 다시 수정하자. 

**lib/ui/common/text_style.dart**

```dart
import 'package:flutter/material.dart';

class Style {
  static final baseTextStyle = TextStyle(
    fontFamily: 'Poppins',
  );

  static final regularTextStyle = baseTextStyle.copyWith(
    color: Color(0xffb6b2df),
    fontSize: 9.0,
    fontWeight: FontWeight.w400,
  );

  static final subHeaderTextStyle = regularTextStyle.copyWith(
    fontSize: 12.0,
  );

  static final headerTextStyle = baseTextStyle.copyWith(
    color: Colors.white,
    fontSize: 18.0,
    fontWeight: FontWeight.w600,
  );
}
```


**lib/ui/planet_row.dart** 

```dart
...

      Text(planet.gravity, style: Style.regularTextStyle),

...

          Text(
            planet.name,
            style: Style.headerTextStyle,
          ),

...

          Text(
            planet.location,
            style: Style.subHeaderTextStyle,
          ),

...
```


**lib/ui/detail/datail_page.dart**

```dart
...

    Text(planet.name, style: Style.headerTextStyle,),

...
```

이제 배경이미지를 넣어보자.

일단 목업데이터에 네트워크 백그라운드 이미지 전체적으로 추가해주고, 


**lib/ui/detail/datail_page.dart**

```dart
import 'package:flutter/material.dart';
import 'package:planets_flutter_app/model/planets.dart';

class DetailPage extends StatelessWidget {
  final Planet planet;

  DetailPage(this.planet);

  @override
  Widget build(BuildContext context) {
    print(planet.picture);
    return Scaffold(
      body: Container(
        constraints: BoxConstraints.expand(),
        color: Color(0xFF736AB7),
        child: Stack(
          children: <Widget>[
            Container(
              child: Image.network(
                planet.picture,
                fit: BoxFit.cover,
                height: 300.0,
              ),
              constraints: BoxConstraints.expand(height: 300.0),
            ),
            Container(
              margin: EdgeInsets.only(top: 190.0),
              height: 110.0,
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  colors: <Color>[Color(0x00736AB7), Color(0xFF736AB7)],
                  stops: [0.0, 0.9],
                  begin: FractionalOffset(0.0, 0.0),
                  end: FractionalOffset(0.0, 1.0),
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
```

그라데이션까지 더하면


<img width="371" alt="스크린샷 2020-02-25 오전 2 19 05" src="https://user-images.githubusercontent.com/55340876/75175182-37f7d380-5775-11ea-8b73-c8bd79821210.png">

쫘라란!

맨처음 앱바에서 만든 그라데이션이랑 비슷하다.  

이제 내용을 추가하자.






<br/>


---
---

# Reference  
- [SysoCoder님 블로그](https://sysocoder.com/category/flutter/)
- [Sergi & Replace](https://sergiandreplace.com/)
- [CustomScrollView 사용법](https://here4you.tistory.com/141)