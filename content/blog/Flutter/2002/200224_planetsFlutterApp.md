---
title: 'π [Flutter] Planets App'
date: 2020-02-25 01:34:00
category: 'Flutter'
draft: false
showToc: true
---

2λλ ν¨μ¬ μ§λ λΈλ‘κ·Έλ₯Ό μ°Έκ³ ν΄μ λ§λλκ±°λΌ κ΅¬λ°©μμ΄ λ¨μμμ μ μλ€.

- νλ¬ν° νλ‘μ νΈ μμ±
- assets ν΄λ μμ±
- λ€μ΄λ°μ ν°νΈμ μ΄λ―Έμ§λ₯Ό pubspec.yaml μ μΆκ° (λ€μ¬μ°κΈ° μ£Όμ!)
  
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

# μ±λ° κΎΈλ―ΈκΈ°

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
        //flexibleSpace : μ΅λλμ΄
          decoration: BoxDecoration(
              //μ»¨νμ΄λ λ°°κ²½ κΎΈλ―ΈκΈ°
              gradient: LinearGradient(
                  //λΌμΈ μμ μ ν. 2κ°μ§μ μμμ λ°λλ€
                  begin: Alignment.topLeft, //μ»¬λ¬ μμμ 
                  end: Alignment.topRight, //μ»¬λ¬ λλλμ 
                  colors: <Color>[
                //μλ§λλ‘ Colors.μμ ν΄λ μκ΄μμ
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


<img width="500" alt="αα³αα³αα΅α«αα£αΊ 2020-02-24 αα©αα? 6 00 30" src="https://user-images.githubusercontent.com/55340876/75139338-b7fb4a80-572f-11ea-87c3-ae5bd6b7a4f1.png">

**λΎ°λ‘λ‘±**


# μΉ΄λ λ§λ€κΈ°

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

μμ λ₯Ό λ³΄μλ©΄,  
μλ‘μ½λ‘¬ μλ¨ μ΄λ―Έμ§μ²λΌ μΉ΄λλ₯Ό κ΅¬νν΄μ€μΌ νλ€!


## EdgeInsets
- μ¬λ°±μ μμ±νλ ν΄λμ€
- ``EdgeInsets.only(left, top, right, bottom)``
   - λ©΄λ§λ€ λ€λ₯Έ μ¬λ°±μ μ μ 
   - λͺ¨λ μ ν μ¬ν­μ΄λ―λ‘ μλ₯Ό λ€μ΄ μΌμͺ½κ³Ό μμͺ½ λ§ μ§μ  κ°λ₯
- ``EdgeInsets.fromLTRB(left, top, right, bottom)``
   - μ΄μ κ³Ό μ μ¬νμ§λ§ μμΉ λ§€κ° λ³μλ₯Ό μ¬μ©νμ¬ λ€ κ°μ μ¬λ°±μ μ§μ 
   - LTRB κ·μΉ (μΌμͺ½, μ, μ€λ₯Έμͺ½, μλ)
- ``EdgeInsets.all(value)``
   - λ€λ©΄ λͺ¨λμ λν΄ λμΌν μ¬λ°±μ μ€μ 
- ``EdgeInsets.symmetric(vertical, horizontal)``
   - λ¨μΌ κ°μΌλ‘ μ / μλ λ° / λλ μΌμͺ½ / μ€λ₯Έμͺ½μ μ§μ  κ°λ₯ (λμΉ­)
  
<br/>

``Widget build(BuildContext context)`` μΈ,  
λΉλ μμ ― λ°μλ€ κΈ°μ¬λ₯Ό ν΄μΌνλλ°,  
μ€λ²λΌμ΄λ μμ€μ κΈ°μ¬ν΄μ μ½μ§ μ’ νλ€.. γ γ 

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
        //μμμ κ°μ₯μλ¦¬λ₯Ό κΈ°μ€μΌλ‘ μμμ λ°°μΉνλ μμ ―. μ¬λ¬ μμ μμλ₯Ό κ²ΉμΉ  μ μμ
        children: <Widget>[
//          planetCard,
          planetThumbnail,
        ],
      ),
    );
  }
}
```

(planetCard λΆλΆμ μ μ μ£Όμμ²λ¦¬)

μκΈ°κΉμ§λ§ μ€λ©΄ νλ©΄μ μ΄λ λ€.

<img width="1348" alt="αα³αα³αα΅α«αα£αΊ 2020-02-24 αα©αα? 7 53 14" src="https://user-images.githubusercontent.com/55340876/75146856-504cfb80-573f-11ea-800c-a6039ce15575.png">

μ΄μ  νμ€νΈκ° λ€μ΄κ°λ λΆλΆμ λ§λ€μ.

planetCard μ£Όμμ νκ³ ,  

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
        color: Color(0xFF333366), //μ»¨νμ΄λ λ°°κ²½μ
        shape: BoxShape.rectangle, //μ§μ¬κ°ν λͺ¨μ
        borderRadius: BorderRadius.circular(8.0), //νλλ¦¬μ 
        boxShadow: <BoxShadow>[
          BoxShadow(
            //κ·Έλ¦Όμν¨κ³Ό
            color: Colors.black12,
            blurRadius: 10.0,
            offset: Offset(0.0, 10.0),
          ),
        ]),
  );

...
```

planetCard λ΄μ©μ μΆκ°ν΄μ£Όλ©΄?

<img width="500" alt="αα³αα³αα΅α«αα£αΊ 2020-02-24 αα©αα? 8 02 43" src="https://user-images.githubusercontent.com/55340876/75147441-a3737e00-5740-11ea-8708-ac8086008ccf.png">

μ«!! μΉ΄λ νμ λ§λ€μ΄μ‘λ€.   
home_page.dart μμ ``HomePageBody()`` μΈμ€ν΄μ€λ₯Ό λ μΆκ°νλ©΄ μ«λ₯΅ λμ΄λλ€.

<img width="1337" alt="αα³αα³αα΅α«αα£αΊ 2020-02-24 αα©αα? 8 04 48" src="https://user-images.githubusercontent.com/55340876/75147554-ed5c6400-5740-11ea-8563-ba4c2b5fe4e0.png">

# μΉ΄λ λ΄μ© μΆκ°

- lib λλ ν λ¦¬μ model λλ ν λ¦¬ μμ± ν planets.dart νμΌ μμ±
  
μ°λ°μ΄ν°κ° μμΌλ λͺ©μ λ°μ΄ν°λ₯Ό μμ±ν΄μ λ§λ€κ±΄λ°,  
μΌλ¨ λ¨μΌ νμ±μ λν μ λ³΄λ₯Ό λ³΄μ νλ ν΄λμ€μ νμ±μ μ λ³΄λ₯Ό λ΄μ λ¦¬μ€νΈλ₯Ό λ§λ λ€.

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

PlanetCardμ planetThumbnailμ΄ νλμ Planet κ°μ²΄λ₯Ό λ°μμ μ¬μ©ν μ μλλ‘ νλ€.

**planet_row.dart**
```dart
import 'package:flutter/material.dart';
import 'package:planets_flutter_app/model/planets.dart'; //import

class PlanetRow extends StatelessWidget {
  final Planet planet; //μΆκ°

  PlanetRow(this.planet); //μΆκ°

...

  @override
  Widget build(BuildContext context) {
  final planetThumbnail = Container(
      margin: EdgeInsets.symmetric(vertical: 16.0),
      alignment: FractionalOffset.centerLeft,
      child: Image(
        image: AssetImage(planet.image), //μ΄λ―Έμ§ κ²½λ‘ μμ 

...
```

planetThumbnail λ° planetCardλ₯Ό μ΅μ’ ν΄λμ€ λ©€λ²λ‘ μ μΈνμκ³ ,  
μ΄κ²μ μ°Έμ‘°ν  μ μκ²  
*home_ page_body.dart μμ λΉλ λ©μλλ₯Ό μμ νμ.

```dart
import 'package:flutter/material.dart';
import 'package:planets_flutter_app/ui/planet_row.dart';
import 'package:planets_flutter_app/model/planets.dart';

class HomePageBody extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return PlanetRow(planets[0]); //μμ 
           PlanetRow(planets[1]), //μμ 
           PlanetRow(planets[2]), //μμ 
  }
}

```

``planets[0]`` μ΄λΆλΆ μΈλ±μ€ λ²νΈλ₯Ό μμ νμ¬ μΈλ€μΌ μλμ νμΈν΄λ³΄μ.  

![2020-02-24 21-24-15 2020-02-24 21_26_14](https://user-images.githubusercontent.com/55340876/75152444-5dbcb280-574c-11ea-9554-72ec8c314d3c.gif)



λͺ©μ λ°μ΄ν°λ μ΄ 5κ°λ§ μ‘΄μ¬νκΈ°μ (0, 1, 2, 3, 4)  
μΈλ±μ€ λ²νΈ 5λ₯Ό λ£μΌλ©΄ μλ¬κ° λ¬λ€.

κ³΅ν΅μ μΌλ‘ μ¬μ©ν  μ μλ κΈ°λ³Έ νμ€νΈ μ€νμΌμ μ§μ ν΄μ£Όμ.

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

μ΄μ  λλμ΄ λ΄μ© μΆκ°!!!  

μλλ λμμΈ μΌλΆκ° μμ λ μμ μ΄λ€.  

<img width="599" alt="planet-card-content-measures" src="https://user-images.githubusercontent.com/55340876/75159086-d0348f00-575a-11ea-9345-0e294783c30c.png">

μμ λ₯Ό μ°Έκ³ νμ¬ λ μ΄μμμ μ§μΌνλ€.

**planet_row.dart**

```dart
...

    final planetCardContent = Container(
      //μ μ²΄ μ»¨νμΈ μ κΈ°λ³Έ μμ ―μ΄ λ  μ»¨νμ΄λ
      margin: EdgeInsets.fromLTRB(76.0, 16.0, 16.0, 16.0),
      constraints: BoxConstraints.expand(), //ν¬κΈ°μ μ μ½μ μ€
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          Container(height: 4.0), //λΉ μ»¨νμ΄λ μ¬μ©μΌλ‘ νμ€νΈ μμ κ΅¬λΆ
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
            //λ¨μΌ μ»¨νμ΄λλ₯Ό μ¬μ©. νλ μ  λΆλΆμ΄λ€
            margin: EdgeInsets.symmetric(vertical: 8.0),
            height: 2.0,
            width: 18.0,
            color: Color(0xff00c6ff),
          ),
          Row(
            //κ±°λ¦¬μ μ€λ ₯μ κ°λ‘λ‘ λ°°μ 
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

λΉ μ»¨νμ΄λ μ¬μ©μΌλ‘ νμ€νΈ μμμ κ΅¬λΆμ μ£Όμλλ°  
SizedBox μμ ―μ μ¨λ λλ€.

Row μμ ― λΆλΆμ μ΄ν΄λ³΄μ.  
μ€λ ₯κ³Ό κ±°λ¦¬ μμ κ°μ΄λ°λ₯Ό μ»¨νμ΄λ μμ ―μ μνμ κ°μ λ‘ λ°°μΉνμλ€.  

κ°μ κ° μ£Όλ λ°©λ² λ§κ³ ,  
ν λλΉλ₯Ό λ¬΄μνκ³  ν­μ μ€μμμ μμλκΈΈ μνλ€λ©΄?  

```dart
...

        Row(
        //κ±°λ¦¬μ μ€λ ₯μ κ°λ‘λ‘ λ°°μ 
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

Expandedμ Row μμ ―μ μ΄μ©νλ©΄ λ μμκ° 50%λ‘ λ°λ°μ© κ³΅κ°μ κ³΅μ νλ€.  
λ΄μ©μ΄ μΌμͺ½μ λ§μΆ°μ§λ©΄ λλ²μ§Έ λ΄μ©μ ν­μ μ€μμμ μμνκ² λλ€.

λ λ΄μ©μ λΉμ·ν΄μ μ΄κ²λ λΈκ°λ€λ€.  
λ©μλλ‘ μΆμΆν΄μ μ¬μ©ν΄λ³΄μ!

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

νλ©΄μ μ λνλ΄λμ§ planetCard νλ¨μ μΆκ°ν΄μ νμΈν΄λ³΄μ.

```dart
...

    final planetCard = Container(
      child: planetCardContent,

...
```

<img width="371" alt="αα³αα³αα΅α«αα£αΊ 2020-02-25 αα©αα₯α« 12 06 33" src="https://user-images.githubusercontent.com/55340876/75163500-b39c5500-5762-11ea-85e3-7b601cca21e5.png">

ν.. λμ΄μ€νκ΅¬λ¨Ό!!! ππ»

μ€κ°μ κ² μΌμ νλ² μ­ νμ΄λ΄μΈ  
μ μ²΄μ μΈ **planet_row.dart** μ½λλ μ΄λ λ€.


# νμ± λͺ©λ‘ λ§λ€κΈ°

μ§κΈκΉμ§λ μ λ³΄λ₯Ό λ³΄μ¬μ£Όλ μΉ΄λλ₯Ό λ§λ€μλ€.  
μ΄μ  λͺ¨λ  νμ±μ λ³΄μ¬μ£Όλ μΉ΄λ λͺ©λ‘μ λ§λ€μ.

PlanetCardκ°μ²΄λ₯Ό μ¬μ©νμ¬ νμ± λͺ©λ‘μ νμνκΈ° μν΄ λμ  λͺ©λ‘μ μμ±ν΄μΌ νλ€.

ListView μμ ―μ μ¬μ©νμ¬ λͺ©λ‘κ³Ό μ€ν¬λ‘€ κ°λ₯ν ν­λͺ©μ λ§λ λ€.  
ScrollView μ μ μ¬νλ€.  

```dart
    ListView(
        children: Widget<>[
        Item1(),
        Item2(),
        Item3()
    ]
)
```

λμ  λͺ©λ‘μ κ²½μ° μμ±μλ₯Ό μ¬μ©νλλ°,  
ListView.builder(). SimpleListView μ΄μΈμ λͺ κ°μ§ μΆκ° λ§€κ° λ³μκ° νμνλ€.  

- itemCount: λͺ©λ‘μ νμ ν  ν­λͺ© μ
- itemBuilder: IndexedWidgetBuilder κ° ν μμ±μ λ΄λΉ νλ μ νμ ν¨μ.   
  νμ¬ μ»¨νμ€νΈμ ν­λͺ© μμΈμ μμ νκ³  νμνλ €λ©΄ Widgetλ₯Ό λ¦¬ν΄ν΄μΌνλ€.
- itemExtent: νμ ν¬κΈ°λ₯Ό μ€μ .  
   λͺ¨λ  νμ ν¬κΈ°κ° λμΌνλ©΄ ν­λͺ©μ νμΈν μλκ° λΉ¨λΌμ§λ€.

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

μμ°.. κ·Όλ° ν«λ¦¬λ‘λνλ― μλ¬λ¬λ€..
?  
?  
?  

μ΄κ±΄ ListView μμ²΄ λμ΄λ₯Ό κ³μ°νμ§ λͺ»ν΄μ λλ μλ¬μ΄λ€.  
μ§μ λ λμ΄μ μ»¨νμ΄λλ₯Ό λ£μ΄μ€λ λμ§λ§ κ° λλ°μ΄μ€λ§λ€ λμ΄κ° λ€λ₯Όμλ μκ³ ,  
κ·Έκ±Έ μΈμ  κ³μ°νκ³  μλ?!  
Expanded μμ ―μ μ¬μ©ν΄μ£Όμ.  

```dart
...

  @override
  Widget build(BuildContext context) {
    return Expanded(
      child: ListView.builder(

...
```

Expanded νμ₯ μμ ―μ νΉμ  ν¬κΈ°μ μμ ― ν¬κΈ°λ₯Ό κ³μ° ν,  
λλ¨Έμ§ κ³΅κ°μ λͺ¨λ μ°¨μ§νλ―λ‘ ListViewμ μ μ  λμ΄ ν¬κΈ°λ₯Ό μ κ³΅νλ€.  

<img width="350" alt="" src="https://user-images.githubusercontent.com/55340876/75165278-7c7b7300-5765-11ea-90a0-918eaf856389.gif">

μ€ν¬λ‘€ κ°λ₯ν λͺ©λ‘μ΄ λ§λ€μ΄μ‘λ€!  
νλ... μλ¬ λ³΄μ΄λκ°?! μ κ²λ­λ?!  

μ¬λ°±μ κ³ μ³μ£Όμ!

```dart
...

        itemCount: planets.length,
        padding: EdgeInsets.symmetric(vertical: 16.0),
      ),

...
```

<img width="371" alt="αα³αα³αα΅α«αα£αΊ 2020-02-25 αα©αα₯α« 12 33 01" src="https://user-images.githubusercontent.com/55340876/75165883-67531400-5766-11ea-95e2-c522d1b6b028.png">


(λ°°κ²½ λλͺ¨ νμ¬μ£½μ£½ν΄μ κΉμ§λκ² λ°κΏμ€)  
μ€λ₯ ν΄κ²°!! 

μ λμΌν μ€ν¬λ‘€ κΈ°λ₯μ λ΄λΉνμ§λ§ λ κ°λ ₯ν CustomScrollView, sliver λ₯Ό μκ°νκ² λ€.

## CustomScrollView / sliver

sliver λ ScrollView μμ ― λ΄λΆμ μμΉν΄μΌ νλ€.  
ScrollView λ₯Ό λ§λλ κΈ°λ³Έ ν΄λμ€μΈ CustomScrollViewλ  
Slivers λ₯Ό μμμΌλ‘ νμ©νλ€.  

- SliverAppBar: μ μ μμλ μ¬μ§ AppBarλ₯Ό λ§λλ λ° μ¬μ© (λ³΄μ΄κΈ°, κ°μΆκΈ°)
- SliverList: μ ν ν­λͺ© λͺ©λ‘.
- SliverFixedExtentList: μ΄μ  ν­λͺ©κ³Ό λΉμ·νμ§λ§ λμ΄κ° κ³ μ  λ ν­λͺ©μ κ²½μ°.
- SliverToBoxAdapter: ν¬κΈ°κ° μ μ λ λ¨μΌ μλκ°μλ sliver.
- SliverPadding: λ€λ₯Έ Sliverλ₯Ό ν¬ν¨νκ³  ν¨λ©μ μ μ© ν  μμλ κ°λ¨ν sliver.

μ΄ μ€ μΌλΆλ μΌμ’μ ChildDelegate μ¬μ©νλ€.  
μ΄μ μ νλ μ½λλ₯Ό λ°κΏλ³΄μ.

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

μλ‘μ½λ‘¬ ν΄λ λλ€!

# νμ΄μ§ λΌμ°ν

κ° νμ±μ μΈλΆ μ¬ν­ νμ΄μ§λ‘ μ΄λνμ¬ λͺ©λ‘μ μ’λ μλκ° μκ² λ§λ€μ΄λ³΄μ.

κ°μ₯ μ¬μ΄ λ°©λ²μ MaterialApp μ μΈμμ μ£Όλ κ²μ΄λ€.  
μλ₯Ό λ€μ΄ νμ± μΈλΆ μ¬ν­μ λν νμ΄μ§λ₯Ό μ μΈνλ €λ κ²½μ°,  
MaterialApp κ°μ²΄μ λ€μμ μΆκ°νλ€.

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

route λ§€κ°λ³μλ String ν€λ₯Ό μ¬μ μ μ μνλ€.  
κ° ν€λ μΉ νμμ νμ΄μ§ κ²½λ‘ μ΄λ¦μ΄λ€.  
κ° ν­λͺ©μ WidgetBuilder λ νμ¬ μ»¨νμ€νΈλ₯Ό μμ νκ³  νμ΄μ§   
(μ΄ κ²½μ° DetailPage) λ‘ νμλλλ‘ μμ ―μ λ¦¬ν΄νλ μ νμ λ©μλλ₯Ό ν¬ν¨νλ€. 

ν λ§€κ° λ³μλ₯Ό ν΅ν΄ μ μΈ λ λ€λ₯Έ νμ΄μ§κ° μμΌλ©° ν΄λΉ κ²½λ‘λ ν­μ '/' μ΄λ€.  

κ²½λ‘λ₯Ό μ μΈν ν,  
PlanetRow κ°μ²΄κ° ν΄λ¦­μ μ΄ νμ΄μ§λ‘ μ΄λνλλ‘ ν  μ μλλ°,  
μ΄λ₯Ό μν΄ μ μ²΄ ν μμ ―μ GestureDetector μμ ―μΌλ‘ λ©νν΄μΌ νλ€.

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
          //μμμ κ°μ₯μλ¦¬λ₯Ό κΈ°μ€μΌλ‘ μμμ λ°°μΉνλ μμ ―. μ¬λ¬ μμ μμλ₯Ό κ²ΉμΉ  μ μμ
          children: <Widget>[
            planetCard,
            planetThumbnail,

...
```

GestureDetector μμ ―μ,  
onTap, onDoubleTap, onLongPress λ± μ¬λ¬ λ§€κ°λ³μκ° μ‘΄μ¬νμ§λ§  
μ°λ¦¬λ μ¬μ©μμ λͺ¨λ  λ¬Όλ¦¬μ  μνΈμμ©μ μ²λ¦¬ν λ‘ μ΄κ²½μ°μλ onTap λ§€κ°λ³μλ§ μ¬μ©νλ©°   
ν­ μ, μ€νν  κΈ°λ₯μ μ κ³΅νλ€. 

pushNamed λ©μλλ ν΄λμ€μ λ©μλλ₯Ό μ€ννλ©°,  
Navigator νμ¬μ μ»¨νμ€νΈμ νμ κ²½λ‘(μ: '/detail') μΈ 2κ°μ§ λ§€κ°λ³μκ° νμνλ€.

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

μ¬κΈ°μ λ¬Έμ μ μ  
μλλ‘μ΄λ κ²½μ° λ€λ‘ λ²νΌμ΄ μλνκ³ , iOS κ²½μ°λ μΌμͺ½ μ€μμ΄ν λμμ΄ μλνλ€.

μ΄ λΌμ°ν νμ΄λΈ λ°©λ²μΌλ‘λ λ§€κ° λ³μλ₯Ό μλ‘μ΄ νλ©΄μΌλ‘ λ³΄λΌ μ μλ€.  

λ§λ€μλ MaterialApp κ²½λ‘ λ§€κ°λ³μλ₯Ό μ­μ νκ³   
GestureDetector μμ νμ.


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

PageRouteλ₯Ό λ³΅κ΅¬νλ λμ  pushNamed ν΄λμ€λ₯Ό μ¬μ©νμ¬ μ κ²½λ‘λ₯Ό λ§λ€κ³   
μ¬κΈ°μ νμ΄μ§λ‘ νμνκΈ° μν΄ μ μμ ―μ λ°ννλ  
PageRoutBuilder λ§€κ°λ³μ pageBuilder κ° μλ€.  
(μ΄ κ²½μ°, DetailPage νμ)



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

νλ©΄μ νμ± μ΄λ¦κ³Ό μ΄λ―Έμ§λ§ νμλλ κ°λ¨ν λ μ΄μμμ΄λ€.  

νλ©΄ κ° μ λλ©μ΄μμ μ€λ³΄μ!

# μ λλ©μ΄μ ν¨κ³Ό


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

Hero μμ ―μ νλ©΄κ° μ¬μ΄ μ λλ©μ΄μ ν¨κ³Όλ₯Ό μ£ΌκΈ° μν΄ μ΄λ€.  

<img width="350" alt="" src="https://user-images.githubusercontent.com/55340876/75171250-b0a76180-576e-11ea-9b5e-fff02ddb9cb0.gif">


# νμ± μμΈνμ΄μ§

μμ λ μ΄λ λ€.

<img width="350" alt="" src="https://user-images.githubusercontent.com/55340876/75171762-7f7b6100-576f-11ea-9e23-6c7ebbe302b9.png">


- λ°°κ²½ μ΄λ―Έμ§ 
- λ°°κ²½ μ΄λ―Έμ§μ λ°°κ²½μ μ¬μ΄μ κ·ΈλΌλ°μ΄μ
- μ€ν¬λ‘€ κ°λ₯ν μ»¨νμΈ  μμ²΄
- μλ¨μ λ€λ‘κ°κΈ° λ²νΌ

<br/>

μΌλ¨ νμ€νΈ μ€νμΌμ’ λ€μ μμ νμ. 

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

μ΄μ  λ°°κ²½μ΄λ―Έμ§λ₯Ό λ£μ΄λ³΄μ.

μΌλ¨ λͺ©μλ°μ΄ν°μ λ€νΈμν¬ λ°±κ·ΈλΌμ΄λ μ΄λ―Έμ§ μ μ²΄μ μΌλ‘ μΆκ°ν΄μ£Όκ³ , 


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

κ·ΈλΌλ°μ΄μκΉμ§ λνλ©΄


<img width="371" alt="αα³αα³αα΅α«αα£αΊ 2020-02-25 αα©αα₯α« 2 19 05" src="https://user-images.githubusercontent.com/55340876/75175182-37f7d380-5775-11ea-8b73-c8bd79821210.png">

μ«λΌλ!

λ§¨μ²μ μ±λ°μμ λ§λ  κ·ΈλΌλ°μ΄μμ΄λ λΉμ·νλ€.  

μ΄μ  λ΄μ©μ μΆκ°νμ.






<br/>


---
---

# Reference  
- [SysoCoderλ λΈλ‘κ·Έ](https://sysocoder.com/category/flutter/)
- [Sergi & Replace](https://sergiandreplace.com/)
- [CustomScrollView μ¬μ©λ²](https://here4you.tistory.com/141)