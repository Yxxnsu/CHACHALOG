---
title: '💎 [Flutter] 날씨 데이터 갖고오기 / async await'
date: 2020-03-04 02:10:00
category: 'Flutter'
draft: false 
showToc: true
---



- [geolocator 5.3.0](https://pub.dev/packages/geolocator) 라이브러리 설치

- 반환이 없는 void 메서드를 하나 만듦

loading_screen.dart

```dart
import 'package:flutter/material.dart';
import 'package:clima/services/location.dart';

class LoadingScreen extends StatefulWidget {
  @override
  _LoadingScreenState createState() => _LoadingScreenState();
}

class _LoadingScreenState extends State<LoadingScreen> {
  @override
  void initState() { //객체가 트리에 삽입 될 때 호출
    // TODO: implement initState
    super.initState();

    getLocation(); //앱이 재실행 되면 콘솔창에 위치 바로 찍어줌
  }

  void getLocation() async {
    Location location = Location(); //새 위치 객체
    await location.getCurrentLocation();
    print(location.latitude);
    print(location.longitude);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold();
  }
}
```


<br/>


location.dart

```dart
import 'package:geolocator/geolocator.dart';

class Location {
  double latitude; //위도
  double longitude; //경도

  Future<void> getCurrentLocation() async {
    try {
      //이 코드는 오류가 날 수 있으니 try catch 로 오류잡기
      Position position = await Geolocator()
          .getCurrentPosition(desiredAccuracy: LocationAccuracy.low);
      //라이브러리를 통해 현재 나의 GPS 호출
      //low 부분의 정확도가 높아질수록 배터리 용량 많이 잡아먹음

      latitude = position.latitude; //해당값 각각 할당
      longitude = position.longitude; 
    } catch (e) {
      print(e);
    }
  }
}
```

- 가져온 위치 라이브러리를 통해 ``Geolocator()`` 라는 객체를 얻고,  
``getCurrentPosition()`` 으로 원하는 정도의 정확도를 제공받아 현재 위치를 얻는다.  

- 각 안드로이드 Android Manifest 파일 내부의 ``<manifest>`` 하단과   
  ios > Info.plist 파일 내부에 ``<dict>`` 안에 사용자 위치정보 권한 엑세스를 추가한다.   
  (해당 라이브러리 사용법 참고)

```dart
    void getLocation() async {
        Position position = await Geolocator()
          .getCurrentPosition(desiredAccuracy: LocationAccuracy.low);
          print(position);
    }
```

현재위치만 얻는 코드였다면 요로코롬 쓰겠지만  
실행해야 할 다른 동작들도 있으니 일단,   
await 키워드에 엑세스를 하기위해 ``async`` 키워드를 추가한다.  
(현재 위치를 찾을 때까지 백그라운드에서 기다릴 수 있도록 비동기로 표시)  
상단 전체 코드처럼 미래에서 받는 것이라는 가정하에 ``Future<반환타입>`` 으로 묶어준다.   

이 때, 

```dart
    void getLocation() async {
        Future<Position> position = Geolocator()
          .getCurrentPosition(desiredAccuracy: LocationAccuracy.low);
          print(position);
    }
```
요론 식으로 await 키워드가 없다면 실행했을때 반환값은 열리지 않은 선물상자일 뿐이다.  

내가 주문한 커피 영수증마냥 커피는 없고 영수증만 온 것이다.  
메소드를 호출했을 때,  
``await`` 키워드를 이용하여 커피가 오길 기다렸다가 갓 내린 커피를 받는 것!!!

- 위치 정보를 얻기 위한 클릭을 요구하는 버튼 같은건 사용하지 않고,   
  ``initState() {}`` 를 통해 stful 위젯이 생성되는 즉시 트리거되고   
  화면이 재실행 되면서 콘솔창에 내 현재 위치 정보가 출력된다.  
  (단 한 번 호출됨)



# [[Dart] future & async-await](https://jinjoo.netlify.com/dart/200203_futureAsync/) 참고

















<br/>


---
---

# Reference  
- [Angela Yu 강의(유료)](https://www.udemy.com/course/flutter-bootcamp-with-dart/)