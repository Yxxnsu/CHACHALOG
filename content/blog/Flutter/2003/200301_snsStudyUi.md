---
title: 'π [Flutter] SNS UI Study'
date: 2020-03-01 18:41:00
category: 'Flutter'
draft: false 
showToc: true
---

μ€μ€μ μ°μ΅λμ μ± λ§μλ λ€.  
λλ μ΄μ΄μ΄μ΄μ΄μλ¬ΈμλΌ λ΄μ© μ€λͺμ΄ μ¬μμμμ§ λΆμ€νκΈ΄ νλ° κ·Έκ±°μΌ κ΅¬κΈλ§νλ©΄ λκ³ ..  
κ·Έλλ λ΄κ° λͺ°λλ κΈ°μ΄λΆλΆλ€ κ°λ μ‘κΈ°λ λ μ’μ μ±μ΄λ€.  

κ°λ μ‘κ³  μ¬μ©νλκ² μ΅μν΄μ§λ©΄ 'μ²μ λ°°μ°λ νλ¬ν°'λ₯Ό κ·Έλκ·Έλ λ€μ λ³΄λ©΄ λ  λ―!


# myHomePage.dart

```dart
import 'package:flutter/material.dart';
import 'page1.dart';
import 'page2.dart';
import 'page3.dart';

class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  var _index = 0; //νμ΄μ§ μΈλ±μ€μ μ΄κΉκ° μΈν

  var _pages = [
    Page1(),
    Page2(),
    Page3(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(

...

      body: _pages[_index], //μ νλ νμ΄μ§λ‘ νλ©΄ μλ°μ΄νΈ
      bottomNavigationBar: BottomNavigationBar(
        //2~5κ°κΉμ§ μ§μ κ°λ₯
        onTap: (index) {
          setState(() {
            _index = index; //μ νλ ν­μ μΈλ±μ€λ‘ _indexλ₯Ό λ³κ²½
          });
        },
        currentIndex: _index, //μ νλ μΈλ±μ€
        items: <BottomNavigationBarItem>[
          BottomNavigationBarItem(
            title: Text('ν'),
            icon: Icon(Icons.home),
          ),
          BottomNavigationBarItem(
            title: Text('μ΄μ©μλΉμ€'),
            icon: Icon(Icons.assignment),
          ),
          BottomNavigationBarItem(
            title: Text('λ΄ μ λ³΄'),
            icon: Icon(Icons.account_circle),
          ),
        ],
      ),
    );
  }
}
```
**ν¬μΈνΈ λΆλΆ μ§κΈ°**

1. νμ΄μ§ νμλ₯Ό μν **_index** λ³μ μΈν
2. **BottomNavigationBar**
   - ``onTap`` : μμ΄νμ ν­νλ©΄ μ΄λ²€νΈκ° λμνκ³  μ νλ ν­μ μΈλ±μ€κ° μ λ¬λ¨.  
             currentIndexμ μ€μ λ _Index κ°μ μλ‘ ν΄λ¦­ν μΈλ±μ€ κ°μΌλ‘ κ΅μ²΄ν,  
             setState() λ©μλλ₯Ό μ¬μ©ν΄ νλ©΄ μλ°μ΄νΈ
   - ``items`` : BottomNavigationBarItem μμ ―μ λ¦¬μ€νΈλ₯Ό μ μ / titleκ³Ό icon μ§μ 
   - ``currentIndex`` : νμ¬ μ νλ ν­μ΄ μ΄λ€κ²μΈμ§ 0λ²λΆν° μΈλ±μ€ λ²νΈ μ§μ 
3. κ° νμ΄μ§λ₯Ό **_pages** λ¦¬μ€νΈ λ³μ κ°μΌλ‘ μΈν
4. ``body: _pages[_index],`` νλ©΄μ΄ μλ°μ΄νΈλ  λλ§λ€ μΈλ±μ€ λ²νΈμΈ _indexλ‘ ν΄λΉ νμ΄μ§λ₯Ό μ°Ύμλ



# page1.dart

```dart
import 'package:flutter/material.dart';
import 'package:carousel_slider/carousel_slider.dart';

final dummyItems = [
  //middle λΆλΆ κ΄ν¬ λλ―Έμ§€
  'κ΄ν¬ μ΄λ―Έμ§ url', //μ€μ  μ΄λ―Έμ§ λ§ν¬κ° λ€μ΄κ°λ€
  'κ΄ν¬ μ΄λ―Έμ§ url',
  'κ΄ν¬ μ΄λ―Έμ§ url',
];

class Page1 extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ListView( //μμλ€μ΄ μ€ν¬λ‘€ κ°λ₯νκ²λ
      children: <Widget>[
        _buildTop(),
        _buildMiddle(),
        _buildBottom(),
      ],
    );
  }
}

Widget _buildTop() {
  return Padding(
    padding: const EdgeInsets.only(top: 30.0, bottom: 40.0),
    child: Column(
      children: <Widget>[
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: <Widget>[
            InkWell(
              //μ μ€μ²κ°μ§
              onTap: () {
                print('ν΄λ¦­');
              },
              child: Column(
                children: <Widget>[
                  Image.asset(
                    'assets/taxi.png',
                    width: 60.0,
                  ),
                  SizedBox(
                    height: 10.0,
                  ),
                  Text('νμ'),
                ],
              ),
            ),

...

          SizedBox(...),
          Row(...),
      ],
    ),
  );
}


Widget _buildMiddle() {
  return Padding(
    padding: const EdgeInsets.only(bottom: 30.0),
    child: CarouselSlider(
      height: 200.0, //λμ΄
      autoPlay: true, //μλ μ¬λΌμ΄λ ν¨κ³Ό
      items: dummyItems.map((url) {
        return Builder(
          builder: (BuildContext context) {
            //contextλ₯Ό μ¬μ©νκ³ μ ν  λ
            return Container(
              width: MediaQuery.of(context).size.width, //κΈ°κΈ° κ°λ‘κΈΈμ΄
              margin: EdgeInsets.symmetric(horizontal: 5.0), //μ’μ° μ¬λ°±
              child: ClipRect(
                child: Image.network(
                  url,
                  fit: BoxFit.cover, //νλ©΄ μ¬λ°± μμ΄
                ),
              ),
            );
          },
        );
      }).toList(),
    ),
  );
}

Widget _buildBottom() {
  final items = List.generate(7, (i) {
    //0~7κΉμ§ μλ₯Ό μμ±ν΄ λλ²μ§Έ μΈμμ ν¨μμ i λ§€κ°λ³μλ‘ μ λ¬ν¨
    //i κ°μ μ λ¬λ°μ ListTile μμ ― ννλ‘ λ°ννμ¬ κ·Έκ²λ€μ λ¦¬μ€νΈκ° λ°νλ¨
    return ListTile(
      leading: Icon(
        Icons.notifications_none,
        color: Colors.redAccent,
      ),
      title: Text('[λ°μ΄ν¬ μμ κ°ν] λ³΄λ€ μμ νκ² μ΄μ©νμΈμ!'),
    );
  });
  return ListView(
    physics: NeverScrollableScrollPhysics(), //μ΄ λ¦¬μ€νΈμ μ€ν¬λ‘€ λμ κΈμ§
    shrinkWrap: true, //ν΄λΉ λ¦¬μ€νΈκ° λ€λ₯Έ μ€ν¬λ‘€ κ°μ²΄ μμ μλ€λ©΄ trueλ‘ μ€μ ν΄μΌ ν¨
    children: items,
  );
}
```

**ν¬μΈνΈ λΆλΆ μ§κΈ°**

1. μ, μ€, νλ¨μ κ° λ©μλλ‘ λΆλ¦¬
2. Tip!!! 8κ° μμ΄μ½μ€ λ§μ§λ§ 8λ²μ§Έλ₯Ό μ§μλ²λ¦¬λ©΄ λλ²μ§Έμ€ μμ΄μ½λ€μ μ€ λͺ¨μμ΄ μ΄κΈλλ€.   
   μ΄ λ, 8λ²μ§Έ μμ΄μ½μ Opacity μμ ―μΌλ‘ κ°μΈκ³  opacity μμ±μ 0.0 μ£Όλ©΄ ν¬λͺν΄μ Έμ μλ³΄μ  
   λμ€μ μ¨λ¨Ήμ.
3. ListView μμ ―μΌλ‘ κ°μΈμ νμ΄μ§μ μμλ€μ΄ μ€ν¬λ‘€ κ°λ₯νκ²λ λ§λ¦
3. [CarouselSlider](https://pub.dev/packages/carousel_slider) μΊλ¬μμ¬λΌμ΄λ λΌμ΄λΈλ¬λ¦¬ μ΄μ©ν΄λ³΄κΈ°
4. ListView μμ ―μΌλ‘ μμ€ν μμλ€μ΄ κ°μΈμ§ μνμΈλ° νλ¨ ListView μμ ―μ΄ λ λ€μ΄κ° μν©μ΄λ€.  
   μλ‘  κ²½μ°μλ ``shrinkWrap: true,`` λ₯Ό λ§₯μ¬μ€μΌ μ€λ₯κ° λμ§ μμ!
5. μ μ²΄μ μΌλ‘ μ€ν¬λ‘€μ΄ λκ³ μμΌλ ``physics: NeverScrollableScrollPhysics(),`` κ³΅μ§μ¬ν­ λΆλΆμ μ€ν¬λ‘€ κΈ°λ₯μ λ§μ.


<br/>
<br/>


κ²°κ³Όλ¬Όμ λ³΄μ.  

<img width="350" alt="" src="https://user-images.githubusercontent.com/55340876/75623414-08215380-5bed-11ea-9792-02b77a64d2c1.gif">


λΉΌμ°!






<br/>
<br/>
<br/>


---
---

# Reference  
- μ€μ€μμ νλ¬ν° μμ‘΄μ½λ© (λμ)
- [FLATICON](www.flaticon.com) μμ [Freepik](https://www.flaticon.com/kr/authors/freepik) μ΄ λ§λ  μμ΄μ½
- [FLATICON](www.flaticon.com) μμ [monkik](https://www.flaticon.com/kr/authors/monkik) μ΄ λ§λ  μμ΄μ½