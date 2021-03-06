---
title: '๐ [Flutter] NETFLIX UI'
date: 2020-03-07 04:09:00
category: 'Flutter'
draft: false 
showToc: true
---

ํ๋ค๊ฐ ๋งํ ๋ถ๋ถ์ด๋ ์ฝ์งํ ๋ถ๋ถ ์์ฃผ๋ก ์ ๋ฆฌ.

# ๋ชฉ์ ๋ฐ์ดํฐ

```dart
//๋ฏธ๋ฆฌ๋ณด๊ธฐ
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

//์ต์  ๋ฑ๋ก ์ฝํ์ธ 
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

//์ง๊ธ ๋จ๋ ์ฝํ์ธ 
List<Show> hotContents = [
  Show(
    image: 'assets/images/kingdomS.png',
  ),
  Show(
    image: 'assets/images/strangerthingsS.png',
  ),
];
```

- data ํ์ผ์ ๋ฐ๋ก ๋นผ๊ธฐ
- ํด๋์ค๋ก ์ผ๋จ ๋ง๋ค์ด์ ์์ฑ ์ ์ํ๊ณ  ์์ฑ์๋ก ์ด๊ธฐํ  
  (๊ป๋ฐ๊ธฐ๋ ๊ทธ๋ฅ ํด๋์ค๋ช ๋ถ๋ฌ์ ์ฌ์ฌ์ฉํ๊ณ , ์ค๋ณต ์๋ ์์ฑ๋ง ๊ฐ์ ธ์ฌ๋ ์ธ์๊ฐ์ ๋ฐ๋ก ๋ช์ํด์ ์ฐ๋ฏ ๋๋ค)
- ``List<Show>`` ์ฒ๋ผ ๊ฐ์ ๊ป๋ฐ๊ธฐ ๊ฐ์ ธ๋ค์ธ ์ ๋ค์ ๋์ผํ ๋ฆฌ์คํธ<ํ์> ์ด๋๊น ํด๋์ค๋ ํ๋๋ง ์์ผ๋ฉด ๋๋ค.

# MediaQuery.removePadding

```dart
      body: MediaQuery.removePadding(
        context: context,
        //top ์ฌ๋ฐฑ ์์ ์ค
        removeTop: true,
```

- ์ง์ ๋ ํจ๋ฉ์ ์ ๊ฑฐ ํ๋ ์ MediaQuery ๋ฅผ ์์ฑ.
- context ํ์
- child ํ์
- removeLeft, removeTop, removeRight, ๋ฐ removeBottom์ธ์๊ฐ **null์ด ์๋์ด์ผํจ.**     
  ๋ค ๊ฐ ๋ชจ๋ false (๊ธฐ๋ณธ๊ฐ)์ด๋ฉด ์ด MediaQueryData ๊ฐ ์์ ๋์ง ์์ ์ํ๋ก ๋ฆฌํด๋๋ค.

# Listview 

ํ.. ์ด๊ฑด ๋งค๋ฒ ๋์ค๋๊ฑด๋ฐ ์์ผ ํท๊ฐ๋ฆฌ์ง  

```dart
        child: ListView(
          //์คํฌ๋กค์ ๋ชฉ๋ก ๋์์ ๋ฉ์ถค ํจ๊ณผ๋ฅผ ์ค
          physics: ClampingScrollPhysics(),
          children: <Widget>[
            HeaderSection(),
            PreviewScroll(),
            ShowScroll(
```

- ListView ์์ ฏ์ผ๋ก ๊ฐ์ธ์ ํ์ด์ง์ ์์(์์์์)๋ค์ด ์คํฌ๋กค ๊ฐ๋ฅํ๊ฒ๋ ๋ง๋ฆ
- ClampingScrollPhysics : ์คํฌ๋กคํ๋ค๊ฐ ๋ชฉ๋ก์ด ๋์ ๋๋ฌํ๋ฉด ๋ฉ์ถค ํจ๊ณผ๋ฅผ ์ค๋ค.
- ``shrinkWrap: true`` : ํด๋น ๋ฆฌ์คํธ๊ฐ ๋ค๋ฅธ ์คํฌ๋กค ๊ฐ์ฒด ์์ ์๋ค๋ฉด true๋ก ์ค์ ํด์ผ ํจ
- ์์ง ์คํฌ๋กค ๋ฆฌ์คํธ ์์ ๋ ์คํฌ๋กค ๋ฆฌ์คํธ๊ฐ ์์ด์, ์คํฌ๋กค์ด ์ค๋ณต๋๋๊ฒ ์์น ์๋๋ค๋ฉด   
  ``physics: NeverScrollableScrollPhysics()``  ๋ก ์คํฌ๋กค ๋์์ ์ค์ง์ํจ๋ค.

  # fit: BoxFit

  - ``.cover`` : ์ง์ ํ ํฌ๊ธฐ๋งํผ ์ด๋ฏธ์ง๋ฅผ ํ์ฅํด์ ์ฑ์
  - ``.fill`` : ์ง์ ๋ ํฌ๊ธฐ๋งํผ ๋ ์ฑ์
  - ``.fitWidth`` : ๊ฐ๋ก ํฌ๊ธฐ ๋งํผ ๋ ์ฑ์


# Positioned ์์ ฏ

- **Stack ์์ ฏ ์์ ์ํ Positioned ์์ ฏ์ ์๋ก ๋ ๋ค.**
- child ์์ ฏ์ ์์น๋ฅผ ๋ฐ๊ฟ์ค
- ํน์  ์ถ์ ์ธ ๊ฐ์ด ๋ชจ๋ null ์ธ ๊ฒฝ์ฐ ``Stack.alignment`` ์์ฑ์ ์ฌ์ฉํ์ฌ ์์์ ๋ฐฐ์นํ๋ค.

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
            //๊ทธ๋ผ๋ฐ์ด์ ํจ๊ณผ : ์ฒ์์ ํฌ๋ชํ ์์ํด์ ์ ์  ์ด๋์์ง๊ฒ ์ค
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
            //๋ฅ๊ธ๊ฒ๋ฅ๊ธ๊ฒ
            borderRadius: BorderRadius.circular(60),
            border: Border.all(
            //MyApp ์ primaryColor ๋ฅผ ๊ฐ์ ธ์จ๋ค
            color: Theme.of(context).primaryColor,
            //์ฌ๊ธฐ์๋ ๋๊ป
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
        //home_screen์์ ๋ถ๋ฌ์จ newContentx.image
        image: AssetImage(show.image),
        //๋ฐ์ค ํฌ๊ธฐ๋งํผ ๋ ์ฑ์
        fit: BoxFit.fill,
        ),
```

```dart
        child: Image.asset(
        preview.name,
        //๊ฐ๋ก ํฌ๊ธฐ๋งํผ ๋ฑ ์ฑ์์ง
        fit: BoxFit.fitWidth,
        ),
```

๊ทธ๋์ ์ด๋ป๊ฒ ์ฐ๋ผ๊ฑฐ...

# ListView.builder()

์ดํด๊ฐ ์ด๋ ค์ ๋ค.

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

๋์  ๋ชฉ๋ก์ ๊ฒฝ์ฐ ์์ฑ์๋ฅผ ์ฌ์ฉํ๋๋ฐ,  
ListView.builder(). SimpleListView ์ด์ธ์ ๋ช ๊ฐ์ง ์ถ๊ฐ ๋งค๊ฐ ๋ณ์๊ฐ ํ์ํ๋ค.

``itemCount:`` ๋ชฉ๋ก์ ํ์ ํ  ํญ๋ชฉ ์  
``itemBuilder:`` IndexedWidgetBuilder ๊ฐ ํ ์์ฑ์ ๋ด๋น ํ๋ ์ ํ์ ํจ์.  
ํ์ฌ ์ปจํ์คํธ์ ํญ๋ชฉ ์์ธ์ ์์ ํ๊ณ  ํ์ํ๋ ค๋ฉด Widget๋ฅผ ๋ฆฌํดํด์ผํ๋ค.  
``itemExtent:`` ํ์ ํฌ๊ธฐ๋ฅผ ์ค์ .  
๋ชจ๋  ํ์ ํฌ๊ธฐ๊ฐ ๋์ผํ๋ฉด ํญ๋ชฉ์ ํ์ธํ ์๋๊ฐ ๋นจ๋ผ์ง๋ค.  

```dart
    Container(
    height: 130,
    //ListView.builder : ๋ชฉ๋ก ๊ตฌ์ฑ์ ์ํด ํธ์ถ๋๋ ์์ฑ์
    child: ListView.builder(
        padding: EdgeInsets.symmetric(horizontal: 15),
        //์คํฌ๋กค ๋ทฐ๊ฐ ์คํฌ๋กค๋๋ ์ถ
        scrollDirection: Axis.horizontal,
        //๋ชฉ๋ก์ ํ์ํ  ํญ๋ชฉ ์
        itemCount: previews.length,
        //itemBuilder : ๋ชจ๋  ํญ๋ชฉ์ ๋น๋ํ๊ธฐ ์ํด ํธ์ถ๋๋ ์ฝ๋ฐฑํจ์
        //๋ฆฌ์คํธ์ ๊ทธ๋ ค์ง ํญ๋ชฉ์ Lazy ํ๊ฒ, ํด๋น child๊ฐ ํ๋ฉด์ ๋ณด์ฌ์ผ ํ  ๋ ์์ฑํ๋ค.
        //์ด๋ก ์ธํด ๋ง์ ์์ดํ์ ๊ทธ๋ ค์ฃผ์ด์ผ ํ  ๋, ์ฐ๋ฆฌ๋ ๋น์ฐํ ์ด๊ฑธ ์จ์ผ ํ๋ค.
        //ListView.builder ์์ฑ์๋ IndexedWidgetBuilder๋ผ๋ ๋์์ ์ธ์๋ก ๋ฐ๋๋ค.
        //Widget์ ๋ฐํํ๋ ํจ์, BuildContext์ int๋ฅผ ์ธ์๋ก ๋ฐ๋ ํจ์
        //์ฌ๊ธฐ์ ์ค์ํ int๋ index๋ก, ํด๋น child๊ฐ ListView์์ ๋ช ๋ฒ์งธ ์์์ธ์ง๋ฅผ ๋ํ๋ธ๋ค.
        //(์๋ฅผ ๋ค๋ฉด Header๋ ๋ฆฌ์คํธ์ ๋งจ ์ฒ์ ๋์์ผ ํ๋ฏ๋ก, index๊ฐ 0์ด๋ค.)
        itemBuilder: (BuildContext context, int index) {
        //Preview ํ์์ preview ๋ณ์์ ํ ๋น
        Preview preview = previews[index];
        return GestureDetector(
            onTap: () => print('๋ฏธ๋ฆฌ๋ณด๊ธฐ ํด๋ฆญ'),
```

**์์ฒด ๋์ด**๋ ํ์์ด๋ค.   
ListView ์์ฒด ๋์ด๊ฐ์ ์์ฃผ๋ฉด ์๋ฌ!

```dart
          Container(
            height: 160,
            child: ListView.builder(
              padding: EdgeInsets.symmetric(horizontal: 15),
              //์คํฌ๋กค ๋ฐฉํฅ ์ธ๋ก์ถ์ผ๋ก
              scrollDirection: Axis.horizontal,
              //๋ชฉ๋ก์ ํ์ํ  ์์ดํ ๊ฐ์
              itemCount: shows.length,
              //Widget์ ๋ฐํํ๋ ํจ์, BuildContext์ int๋ฅผ ์ธ์๋ก ๋ฐ๋ ํจ์
              //์ฌ๊ธฐ์ ์ค์ํ int๋ index๋ก, ํด๋น child๊ฐ ListView์์ ๋ช ๋ฒ์งธ ์์์ธ์ง๋ฅผ ๋ํ๋ธ๋ค.
              itemBuilder: (BuildContext context, int index) {
                //show๋ผ๋ ๋ณ์์ ์ฌํ ๋น
                Show show = shows[index];
                return Container(
```


# ClipRRect()

```dart
    //ClipRRect : ์์ ์์ ฏ์ ๋ฅ๊ธ๊ฒ ๋ง๋ฆ. ์  ์คํ์ผ๋ ์ง์ ๊ฐ๋ฅ
    child: ClipRRect(
        borderRadius: BorderRadius.circular(60),
        child: Image(
        image: AssetImage(preview.image),
        //์ด๋ฏธ์ง๊ฐ ๋ฐ์ค ์ฌ์ด์ฆ์ ๋ง๊ฒ ํ์ฅ๋์ด ์ฑ์
        fit: BoxFit.cover,
        ),
    ),
```

# BottomNavigationBar()

```dart
      bottomNavigationBar: SizedBox(
        height: 105,
        //items๊ฐ 2๊ฐ ์ด์์์ด์ผ ํ์ฑํ ๋๋ค.
        child: BottomNavigationBar(
          backgroundColor: Colors.black,
          iconSize: 28,
          //์ ํ์
          selectedItemColor: Colors.white,
          selectedFontSize: 13,
          //์ ํ์ํ ์
          unselectedItemColor: Colors.grey,
          unselectedFontSize: 13,
          //๊ณ ์ 
          type: BottomNavigationBarType.fixed,
          //ํ์ฌ ํ์ฑํ ๋ BottomNavigationBarItem์ ํญ๋ชฉ์ ๋ํ ์ธ๋ฑ์ค
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
                  'ํ',
                  style: TextStyle(fontWeight: FontWeight.w800),
                ),
              ),
            ),
            BottomNavigationBarItem(
              icon: Icon(FontAwesomeIcons.search),
              title: Padding(
                padding: EdgeInsets.only(top: 7, left: 4),
                child: Text(
                  '๊ฒ์',
                  style: TextStyle(fontWeight: FontWeight.w800),
                ),
              ),
            ),
            BottomNavigationBarItem(
```



# ๐ฅ์ฌ์ฌ์ฉ

**data.dart**

```dart
//์ต์  ๋ฑ๋ก ์ฝํ์ธ 
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

์ผ๋จ ``๋ชฉ์ ๋ฐ์ดํฐ`` ๊ธฐ๋ฐ์ผ๋ก, 

**show_scroll.dart**

```dart
class ShowScroll extends StatelessWidget {
  //1.์์ฑ 2๊ฐ ์ง์ ํด์ฃผ๊ณ 
  //shows : data.dart์์ ๋ถ๋ฌ์ฌ ์ด๋ฏธ์ง๋ค
  //์ฝํ์ธ ๋ค์ด ๋ค ๋์ผํ๊ฒ ์ ํ์คํฌ๋ฆฐ ์ธ์๊ฐ์ ๋ฐ์ดํฐ ์ด๋ฆ๋ง ๋ฐ๊ฟ์ ๋ถ๋ฌ์์ฃผ๋ฉด๋จ
  final List<Show> shows;

  //scrollLabel : ์ฝํ์ธ  ์ ๋ชฉ
  final String scrollLabel;

  //2. ์์ฑ์๋ก ์ด๊ธฐํ ํด์ฃผ๊ณ ! home_screen ์์ ์ธ์๊ฐ ๋ฃ์ด์ฃผ๋ฉด๋จ!
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
                //show๋ผ๋ ๋ณ์์ ์ฌํ ๋น
                Show show = shows[index];
                return Container(
                  margin: EdgeInsets.symmetric(horizontal: 5),
                  width: 120,
                  child: Container(
                    width: double.infinity,
                    child: ClipRRect(
                      borderRadius: BorderRadius.circular(1),
                      child: Image(
                        //home_screen์์ ๋ถ๋ฌ์จ newContentx.image
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
            //3. show_scroll.dart์ ์์ฑ์๋ก ์ด๊ธฐํํ ์์ฑ๋ค์ ์๋ก์ฝ๋กฌ ์ธ์๊ฐ ๋ฃ์ด์ค.
            //newContents๋ data.dart์์ ๋ถ๋ฌ์ด
            shows: newContents,
            scrollLabel: '์ต์  ๋ฑ๋ก ์ฝํ์ธ ',
        ),
        ShowScroll(
            shows: hotContents,
            scrollLabel: '์ง๊ธ ๋จ๋ ์ฝํ์ธ ',
        ),
        ShowScroll(
            shows: bestContents,
            scrollLabel: 'ํ์๋์ ์ทจํฅ์ ๊ฒฉ ๋ฒ ์คํธ ์ฝํ์ธ ',
        ),
```

์๋ก ์์ผ๋ก ๋ถ๋ฌ์์ ์ด๋ค.

---

๋ค๋ฅธ ์๋ฅผ ํ๊ฐ์ง ๋ ๋ค๋ฉด,  

**other_screen.dart**

```dart
class OtherScreen extends StatelessWidget {
    //์์ฑ์ ์ฃผ๊ณ  ์์ฑ์๋ก ์ด๊ธฐํํ ํ,
  final String otherScreen;

  OtherScreen({this.otherScreen});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: Center(
        child: Text(
          otherScreen, //์๋ก์ฝ๋กฌ
          style: TextStyle(
```

**bottom_nav _bar(์ด๊ฒ home์ธ ์ํ)**

```dart
class _BottomNavBarState extends State<BottomNavBar> {
  //์ํ๋ณํ๊ฐ ์๋ ๊ฒ์ ์ฌ๊ธฐ์ ๊ธฐ์ฌ!!!
  int selectedScreen = 0;

  final screenOptions = [
    HomeScreen(),
    OtherScreen(otherScreen: '๊ฒ์'),
    OtherScreen(otherScreen: '์ ์ฅํ ์ฝํ์ธ  ๋ชฉ๋ก'),
    OtherScreen(otherScreen: '๋ ๋ณด๊ธฐ'),
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