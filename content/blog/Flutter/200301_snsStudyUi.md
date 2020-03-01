---
title: '💎 [Flutter] SNS UI Study'
date: 2020-03-01 18:41:00
category: 'Flutter'
draft: false 
showToc: true
---

오준석 쓰앵님의 책 맘에든다.  
나는 초초초초초입문자라 내용 설명이 사아아알짝 부실허긴 한데 그거야 구글링하면 되고..  
그래도 내가 몰랐던 기초부분들 개념 잡기는 뙇 좋은 책이다.  

개념 잡고 사용하는게 익숙해지면 '처음 배우는 플러터'를 그때그때 다시 보면 될 듯!


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
  var _index = 0; //페이지 인덱스의 초깃값 세팅

  var _pages = [
    Page1(),
    Page2(),
    Page3(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(

...

      body: _pages[_index], //선택된 페이지로 화면 업데이트
      bottomNavigationBar: BottomNavigationBar(
        //2~5개까지 지정가능
        onTap: (index) {
          setState(() {
            _index = index; //선택된 탭의 인덱스로 _index를 변경
          });
        },
        currentIndex: _index, //선택된 인덱스
        items: <BottomNavigationBarItem>[
          BottomNavigationBarItem(
            title: Text('홈'),
            icon: Icon(Icons.home),
          ),
          BottomNavigationBarItem(
            title: Text('이용서비스'),
            icon: Icon(Icons.assignment),
          ),
          BottomNavigationBarItem(
            title: Text('내 정보'),
            icon: Icon(Icons.account_circle),
          ),
        ],
      ),
    );
  }
}
```
**포인트 부분 짚기**

1. 페이지 표시를 위한 **_index** 변수 세팅
2. **BottomNavigationBar**
   - ``onTap`` : 아이템을 탭하면 이벤트가 동작하고 선택된 탭의 인덱스가 전달됨.  
             currentIndex에 설정된 _Index 값을 새로 클릭한 인덱스 값으로 교체후,  
             setState() 메서드를 사용해 화면 업데이트
   - ``items`` : BottomNavigationBarItem 위젯의 리스트를 정의 / title과 icon 지정
   - ``currentIndex`` : 현재 선택된 탭이 어떤것인지 0번부터 인덱스 번호 지정
3. 각 페이지를 **_pages** 리스트 변수 값으로 세팅
4. ``body: _pages[_index],`` 화면이 업데이트될 때마다 인덱스 번호인 _index로 해당 페이지를 찾아냄



# page1.dart

```dart
import 'package:flutter/material.dart';
import 'package:carousel_slider/carousel_slider.dart';

final dummyItems = [
  //middle 부분 광희 더미짤
  '광희 이미지 url', //실제 이미지 링크가 들어간다
  '광희 이미지 url',
  '광희 이미지 url',
];

class Page1 extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ListView( //요소들이 스크롤 가능하게끔
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
              //제스처감지
              onTap: () {
                print('클릭');
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
                  Text('택시'),
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
      height: 200.0, //높이
      autoPlay: true, //자동 슬라이더 효과
      items: dummyItems.map((url) {
        return Builder(
          builder: (BuildContext context) {
            //context를 사용하고자 할 때
            return Container(
              width: MediaQuery.of(context).size.width, //기기 가로길이
              margin: EdgeInsets.symmetric(horizontal: 5.0), //좌우 여백
              child: ClipRect(
                child: Image.network(
                  url,
                  fit: BoxFit.cover, //화면 여백 없이
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
    //0~7까지 수를 생성해 두번째 인수의 함수에 i 매개변수로 전달함
    //i 값을 전달받아 ListTile 위젯 형태로 반환하여 그것들의 리스트가 반환됨
    return ListTile(
      leading: Icon(
        Icons.notifications_none,
        color: Colors.redAccent,
      ),
      title: Text('[바이크 위생 강화] 보다 안전하게 이용하세요!'),
    );
  });
  return ListView(
    physics: NeverScrollableScrollPhysics(), //이 리스트의 스크롤 동작 금지
    shrinkWrap: true, //해당 리스트가 다른 스크롤 객체 안에 있다면 true로 설정해야 함
    children: items,
  );
}
```

**포인트 부분 짚기**

1. 상, 중, 하단을 각 메서드로 분리
2. Tip!!! 8개 아이콘중 마지막 8번째를 지워버리면 두번째줄 아이콘들은 줄 모양이 어긋난다.   
   이 때, 8번째 아이콘을 Opacity 위젯으로 감싸고 opacity 속성을 0.0 주면 투명해져서 안보임  
   나중에 써먹자.
3. ListView 위젯으로 감싸서 페이지의 요소들이 스크롤 가능하게끔 만듦
3. [CarouselSlider](https://pub.dev/packages/carousel_slider) 캐러셀슬라이더 라이브러리 이용해보기
4. ListView 위젯으로 상중하 요소들이 감싸진 상태인데 하단 ListView 위젯이 또 들어간 상황이다.  
   요론 경우에는 ``shrinkWrap: true,`` 를 맥여줘야 오류가 나지 않음!
5. 전체적으로 스크롤이 되고있으니 ``physics: NeverScrollableScrollPhysics(),`` 공지사항 부분은 스크롤 기능을 막자.


<br/>
<br/>


결과물을 보자.  

<img width="350" alt="" src="https://user-images.githubusercontent.com/55340876/75623414-08215380-5bed-11ea-9792-02b77a64d2c1.gif">


빼앰!






<br/>
<br/>
<br/>


---
---

# Reference  
- 오준석의 플러터 생존코딩 (도서)
- [FLATICON](www.flaticon.com) 에서 [Freepik](https://www.flaticon.com/kr/authors/freepik) 이 만든 아이콘
- [FLATICON](www.flaticon.com) 에서 [monkik](https://www.flaticon.com/kr/authors/monkik) 이 만든 아이콘