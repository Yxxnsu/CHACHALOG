---
title: '💎 [Flutter] NETFLIX UI 💙'
date: 2020-03-07 04:09:00
category: 'Flutter'
draft: false 
showToc: true
---

하다가 막힌 부분이랑 삽질한 부분 위주로 정리.

# 목업 데이터

```dart
//미리보기
class Preview {
  String name;
  String image;

  Preview({this.name, this.image});
}

List<Preview> previews = [
  Preview(
    name: 'assets/images/disenchantmentLogo.png',
    image: 'assets/images/disenchantment.png',
  ),
  Preview(
    name: 'assets/images/sabrinaLogo.png',
    image: 'assets/images/sabrina.png',
  ),
];

//최신 등록 콘텐츠
class Show {
  final String image;

  Show({this.image});
}

List<Show> newContents = [
  Show(
    image: 'assets/images/brightM.png',
  ),
  Show(
    image: 'assets/images/tatbilbM.png',
  ),
];

//지금 뜨는 콘텐츠
List<Show> hotContents = [
  Show(
    image: 'assets/images/kingdomS.png',
  ),
  Show(
    image: 'assets/images/strangerthingsS.png',
  ),
];
```

- data 파일에 따로 빼기
- 클래스로 일단 만들어서 속성 정의하고 생성자로 초기화  
  (껍데기는 그냥 클래스명 불러서 재사용하고, 중복 아닌 속성만 가져올때 인자값에 따로 명시해서 쓰믄 된다)
- ``List<Show>`` 처럼 같은 껍데기 가져다쓸 애들은 동일한 리스트<타입> 이니까 클래스는 하나만 있으면 된다.

# MediaQuery.removePadding

```dart
      body: MediaQuery.removePadding(
        context: context,
        //top 여백 없애줌
        removeTop: true,
```

- 지정된 패딩을 제거 하는 새 MediaQuery 를 작성.
- context 필수
- child 필수
- removeLeft, removeTop, removeRight, 및 removeBottom인수가 **null이 아니어야함.**     
  네 개 모두 false (기본값)이면 이 MediaQueryData 가 수정되지 않은 상태로 리턴된다.

# Listview 

하.. 이건 매번 나오는건데 왜케 헷갈리지  

```dart
        child: ListView(
          //스크롤시 목록 끝에서 멈춤 효과를 줌
          physics: ClampingScrollPhysics(),
          children: <Widget>[
            HeaderSection(),
            PreviewScroll(),
            ShowScroll(
```

- ListView 위젯으로 감싸서 페이지의 요소(자식요소)들이 스크롤 가능하게끔 만듦
- ClampingScrollPhysics : 스크롤하다가 목록이 끝에 도달하면 멈춤 효과를 준다.
- ``shrinkWrap: true`` : 해당 리스트가 다른 스크롤 객체 안에 있다면 true로 설정해야 함
- 수직 스크롤 리스트 안에 또 스크롤 리스트가 있어서, 스크롤이 중복되는게 원치 않는다면   
  ``physics: NeverScrollableScrollPhysics()``  로 스크롤 동작을 중지시킨다.

  # fit: BoxFit

  - ``.cover`` : 지정한 크기만큼 이미지를 확장해서 채움
  - ``.fill`` : 지정된 크기만큼 뙇 채움
  - ``.fitWidth`` : 가로 크기 만큼 뙇 채움


# Positioned 위젯

- **Stack 위젯 안에 속한 Positioned 위젯을 예로 든다.**
- child 위젯의 위치를 바꿔줌
- 특정 축의 세 값이 모두 null 인 경우 ``Stack.alignment`` 속성을 사용하여 자식을 배치한다.

```dart
        Positioned(
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
```

# gradient: LinearGradient()

```dart
        child: Container(
        height: 600,
        decoration: BoxDecoration(
            //그라데이션 효과 : 처음엔 투명히 시작해서 점점 어두워지게 줌
            gradient: LinearGradient(
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
            colors: [Colors.transparent, Colors.black],
            ),
        ),
```

# decoration: BoxDecoration()

```dart
        Container(
        margin: EdgeInsets.symmetric(horizontal: 5),
        decoration: BoxDecoration(
            //둥글게둥글게
            borderRadius: BorderRadius.circular(60),
            border: Border.all(
            //MyApp 의 primaryColor 를 가져온다
            color: Theme.of(context).primaryColor,
            //여기서는 두께
            width: 2,
            ),
        ),
        width: 120,
        height: 120,
```


# image.asset

```dart
        Container(
        width: 35,
        child: Image.asset('assets/images/netflixLogo.png'),
        ),
```


```dart
        CircleAvatar(
        radius: 60.0,
        backgroundImage: AssetImage('images/chacha.jpg'),
        ),
```

```dart
        child: Image(
        //home_screen에서 불러온 newContentx.image
        image: AssetImage(show.image),
        //박스 크기만큼 뙇 채움
        fit: BoxFit.fill,
        ),
```

```dart
        child: Image.asset(
        preview.name,
        //가로 크기만큼 딱 채워짐
        fit: BoxFit.fitWidth,
        ),
```

그래서 어떻게 쓰라거...

# ListView.builder()

이해가 어려웠다.

```dart
class HomePageBody extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Expanded(
      child: ListView.builder(
        itemBuilder: (context, index) => new PlanetRow((planets[index])),
        itemCount: planets.length,
        itemExtent: 152.0,
    );
  }
}
```

동적 목록의 경우 생성자를 사용하는데,  
ListView.builder(). SimpleListView 이외의 몇 가지 추가 매개 변수가 필요하다.

``itemCount:`` 목록에 표시 할 항목 수  
``itemBuilder:`` IndexedWidgetBuilder 각 행 작성을 담당 하는 유형의 함수.  
현재 컨텍스트와 항목 색인을 수신하고 표시하려면 Widget를 리턴해야한다.  
``itemExtent:`` 행의 크기를 설정.  
모든 행의 크기가 동일하면 항목의 페인팅 속도가 빨라진다.  

```dart
    Container(
    height: 130,
    //ListView.builder : 목록 구성을 위해 호출되는 생성자
    child: ListView.builder(
        padding: EdgeInsets.symmetric(horizontal: 15),
        //스크롤 뷰가 스크롤되는 축
        scrollDirection: Axis.horizontal,
        //목록에 표시할 항목 수
        itemCount: previews.length,
        //itemBuilder : 모든 항목을 빌드하기 위해 호출되는 콜백함수
        //리스트에 그려질 항목을 Lazy 하게, 해당 child가 화면에 보여야 할 때 생성한다.
        //이로 인해 많은 아이템을 그려주어야 할 때, 우리는 당연히 이걸 써야 한다.
        //ListView.builder 생성자는 IndexedWidgetBuilder라는 녀석을 인자로 받는다.
        //Widget을 반환하는 함수, BuildContext와 int를 인자로 받는 함수
        //여기서 중요한 int는 index로, 해당 child가 ListView에서 몇 번째 자식인지를 나타낸다.
        //(예를 들면 Header는 리스트의 맨 처음 나와야 하므로, index가 0이다.)
        itemBuilder: (BuildContext context, int index) {
        //Preview 타입의 preview 변수에 할당
        Preview preview = previews[index];
        return GestureDetector(
            onTap: () => print('미리보기 클릭'),
```

**자체 높이**는 필수이다.   
ListView 자체 높이값을 안주면 에러!

```dart
          Container(
            height: 160,
            child: ListView.builder(
              padding: EdgeInsets.symmetric(horizontal: 15),
              //스크롤 방향 세로축으로
              scrollDirection: Axis.horizontal,
              //목록에 표시할 아이템 개수
              itemCount: shows.length,
              //Widget을 반환하는 함수, BuildContext와 int를 인자로 받는 함수
              //여기서 중요한 int는 index로, 해당 child가 ListView에서 몇 번째 자식인지를 나타낸다.
              itemBuilder: (BuildContext context, int index) {
                //show라는 변수에 재할당
                Show show = shows[index];
                return Container(
```


# ClipRRect()

```dart
    //ClipRRect : 자식 위젯을 둥글게 만듦. 선 스타일도 지정가능
    child: ClipRRect(
        borderRadius: BorderRadius.circular(60),
        child: Image(
        image: AssetImage(preview.image),
        //이미지가 박스 사이즈에 맞게 확장되어 채움
        fit: BoxFit.cover,
        ),
    ),
```

# BottomNavigationBar()

```dart
      bottomNavigationBar: SizedBox(
        height: 105,
        //items가 2개 이상있어야 활성화 된다.
        child: BottomNavigationBar(
          backgroundColor: Colors.black,
          iconSize: 28,
          //선택시
          selectedItemColor: Colors.white,
          selectedFontSize: 13,
          //선택안할시
          unselectedItemColor: Colors.grey,
          unselectedFontSize: 13,
          //고정
          type: BottomNavigationBarType.fixed,
          //현재 활성화 된 BottomNavigationBarItem의 항목에 대한 인덱스
          currentIndex: selectedScreen,
          onTap: (int index) {
            setState(() {
              selectedScreen = index;
            });
          },
          items: [
            BottomNavigationBarItem(
              icon: Icon(FontAwesomeIcons.home),
              title: Padding(
                padding: EdgeInsets.only(top: 7, left: 4),
                child: Text(
                  '홈',
                  style: TextStyle(fontWeight: FontWeight.w800),
                ),
              ),
            ),
            BottomNavigationBarItem(
              icon: Icon(FontAwesomeIcons.search),
              title: Padding(
                padding: EdgeInsets.only(top: 7, left: 4),
                child: Text(
                  '검색',
                  style: TextStyle(fontWeight: FontWeight.w800),
                ),
              ),
            ),
            BottomNavigationBarItem(
```



# 🔥재사용

**data.dart**

```dart
//최신 등록 콘텐츠
class Show {
  final String image;

  Show({this.image});
}

List<Show> newContents = [
  Show(
    image: 'assets/images/brightM.png',
  ),
  Show(
    image: 'assets/images/tatbilbM.png',
  ),
];
```

일단 ``목업 데이터`` 기반으로, 

**show_scroll.dart**

```dart
class ShowScroll extends StatelessWidget {
  //1.속성 2개 지정해주고
  //shows : data.dart에서 불러올 이미지들
  //콘텐츠들이 다 동일하게 씀 홈스크린 인자값에 데이터 이름만 바꿔서 불러와주면됨
  final List<Show> shows;

  //scrollLabel : 콘텐츠 제목
  final String scrollLabel;

  //2. 생성자로 초기화 해주고! home_screen 에서 인자값 넣어주면됨!
  ShowScroll({this.shows, this.scrollLabel});

  @override
  Widget build(BuildContext context) {

...

        Text(
            scrollLabel,
            style: TextStyle(

...

          Container(
            height: 160,
            child: ListView.builder(
              padding: EdgeInsets.symmetric(horizontal: 15),
              scrollDirection: Axis.horizontal,
              itemCount: shows.length,
              itemBuilder: (BuildContext context, int index) {
                //show라는 변수에 재할당
                Show show = shows[index];
                return Container(
                  margin: EdgeInsets.symmetric(horizontal: 5),
                  width: 120,
                  child: Container(
                    width: double.infinity,
                    child: ClipRRect(
                      borderRadius: BorderRadius.circular(1),
                      child: Image(
                        //home_screen에서 불러온 newContentx.image
                        image: AssetImage(show.image),
                        fit: BoxFit.fill,
                      ),

```

**home_screen.dart**

```dart
        children: <Widget>[
        HeaderSection(),
        PreviewScroll(),
        ShowScroll(
            //3. show_scroll.dart에 생성자로 초기화한 속성들에 요로코롬 인자값 넣어줌.
            //newContents는 data.dart에서 불러옴
            shows: newContents,
            scrollLabel: '최신 등록 콘텐츠',
        ),
        ShowScroll(
            shows: hotContents,
            scrollLabel: '지금 뜨는 콘텐츠',
        ),
        ShowScroll(
            shows: bestContents,
            scrollLabel: '회원님의 취향저격 베스트 콘텐츠',
        ),
```

요론식으로 불러와서 쓴다.

---

다른 예를 한가지 더 들면,  

**other_screen.dart**

```dart
class OtherScreen extends StatelessWidget {
    //속성을 주고 생성자로 초기화한 후,
  final String otherScreen;

  OtherScreen({this.otherScreen});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: Center(
        child: Text(
          otherScreen, //요로코롬
          style: TextStyle(
```

**bottom_nav _bar(이게 home인 상태)**

```dart
class _BottomNavBarState extends State<BottomNavBar> {
  //상태변화가 있는 것은 여기에 기재!!!
  int selectedScreen = 0;

  final screenOptions = [
    HomeScreen(),
    OtherScreen(otherScreen: '검색'),
    OtherScreen(otherScreen: '저장한 콘텐츠 목록'),
    OtherScreen(otherScreen: '더 보기'),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: screenOptions[selectedScreen],

...

          currentIndex: selectedScreen,
          onTap: (int index) {
            setState(() {
              selectedScreen = index;
            });
          },
```