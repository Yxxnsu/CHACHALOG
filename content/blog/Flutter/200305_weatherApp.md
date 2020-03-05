---
title: '💎 [Flutter] 현재 날씨 App 🌦'
date: 2020-03-05 00:56:00
category: 'Flutter'
draft: false 
showToc: true
---

# 위치 데이터 갖고오기

**[[etc] API / RESTful API](http://localhost:8000/etc/200304_api/) 참고**

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



**[[Dart] future & async-await](https://jinjoo.netlify.com/dart/200203_futureAsync/) 참고**  


# 날씨 데이터 갖고오기

- [http 0.12.0+4](https://pub.dev/packages/http) 라이브러리 설치

해당 라이브러리로 네트워크 요청을 하려면 ``get`` 메소드를 호출하면 됨

```dart
Future<http.Response> fetchAlbum() {
  return http.get('https://jsonplaceholder.typicode.com/albums/1');
}
```

이것 역시도 데이터를 가져오는데 시간이 오래 소요될 수 있기에 비동기 방식으로 진행한다.  

```dart
...

  void getData() async {
    Response response = await get(
        'https://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b6907d289e10d714a6e88b30761fae22');
    print(response);
  }

...
```


[openweathermap](https://openweathermap.org/current) 사이트를 통해 날씨 데이터를 가져올 수 있는 url 주소를 복사하고  
해당 라이브러리의 get 메소드 내부에 작성한다.  
얻어낸 데이터의 유지를 위해 ``Response`` 타입의 새로운 변수에 할당을 해줌.  
받아낸 ``Response`` 를 어딘가에 사용하려면 비동기 방식으로 바꿔주어야 한다.  

데이터를 제대로 왔는지에 대한 확인은  
``initState() {}`` 이나 ``build`` 하단에서 ``getData();`` 를 찍어 확인해주면 된다.  


loading_screen.dart

```dart
import 'package:flutter/material.dart';
import 'package:clima/services/location.dart';
import 'package:http/http.dart';

class LoadingScreen extends StatefulWidget {
  @override
  _LoadingScreenState createState() => _LoadingScreenState();
}

class _LoadingScreenState extends State<LoadingScreen> {
  @override
  void initState() {
    super.initState();
    //getData(); 를 여따 넣어줘도 됨
    getLocation();
  }

  void getLocation() async {
    Location location = Location(); 
    await location.getCurrentLocation();
    print(location.latitude);
    print(location.longitude);
  }

  void getData() async { //날씨 데이터
    Response response = await get(
        'https://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b6907d289e10d714a6e88b30761fae22');
    print(response);
  }

  @override
  Widget build(BuildContext context) {
    getData(); //확인해보자
    return Scaffold();
  }
}
```

<img width="595" alt="스크린샷 2020-03-04 오후 7 44 26" src="https://user-images.githubusercontent.com/55340876/75871877-90536300-5e50-11ea-8f12-05e3dd065ea8.png">

``Response`` 객체가 제대로 찍힌다.  

``print(response);`` 요 부분에서 ``print(response.body);``, ``print(response.statusCode);`` 등을 찍어주면  
내 요청에 대한 응답들이 콘솔에 찍힌다. 

**[[etc] HTTP 기초](http://localhost:8000/etc/200304_http/) 참고**

<img width="963" alt="스크린샷 2020-03-04 오후 8 10 20" src="https://user-images.githubusercontent.com/55340876/75873940-2dfc6180-5e54-11ea-9e44-c9f8899a07e3.png">

링크에 weather 부분을 header 로 바꾸고 실행을 하면 당연히 404 에러가 뜬다.



```dart
...

import 'package:http/http.dart' as http;

...

  void getData() async {
    http.Response response = await http.get(
        'https://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b6907d289e10d714a6e88b30761fae22');

    if (response.statusCode == 200) {
      String data = response.body;
      print(data);
    } else {
      print(response.statusCode);
    }
  }

...
```
statusCode 확인을 위해 if문으로 수정해줬다.

상단 임포트도 
``import 'package:http/http.dart' as http;`` 로 수정한다. (http 패키지 안에 모든 것을 사용함)  
이제 ``get`` 대신 ``http.get`` 을 작성하고,  
``Response`` 를 ``http.Response`` 로 작성한다. 

앱을 재실행하면  

```
//console 결과는??
flutter: 37.785834
flutter: -122.406417
flutter: {"coord":{"lon":139.01,"lat":35.02},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"base":"stations","main":{"temp":285.514,"pressure":1013.75,"humidity":100,"temp_min":285.514,"temp_max":285.514,"sea_level":1023.22,"grnd_level":1013.75},"wind":{"speed":5.52,"deg":311},"clouds":{"all":0},"dt":1485792967,"sys":{"message":0.0025,"country":"JP","sunrise":1485726240,"sunset":1485763863},"id":1907296,"name":"Tawarano","cod":200}
```

요로코롬 경도 위도와 함께 ``키: 값`` ``Key: Value`` 인 ``JSON 형식``의 값이 출력된다.

# JSON

대부분의 API는 두개로 나뉜다  

- **XML**  
  - ``<key>value</key>`` 형식으로 키의 이름은 태그이고 여닫는 태그 내부에 값이 있다.   

Example of API response:
```json
<current>
<city id="0" name="Mountain View">
<coord lon="-122.09" lat="37.39"/>
<country>US</country>
<timezone>-28800</timezone>
<sun rise="2020-01-07T15:22:59" set="2020-01-08T01:05:37"/>
</city>
<temperature value="278.07" min="273.15" max="282.59" unit="kelvin"/>
<feels_like value="275.88" unit="kelvin"/>
<humidity value="86" unit="%"/>
<pressure value="1026" unit="hPa"/>
<wind>
<speed value="0.93" unit="m/s" name="Calm"/>
<gusts/>
<direction value="23" code="NNE" name="North-northeast"/>
</wind>
<clouds value="1" name="clear sky"/>
<visibility value="16093"/>
<precipitation mode="no"/>
<weather number="800" value="clear sky" icon="01n"/>
<lastupdate value="2020-01-07T11:33:40"/>
</current>
```

- **JSON (JavaScript Object Notation)**
  - ``{key: value}``  {} 중괄호 안에 key와 : 콜론 그리고 값이 있다.  

Example of API response:
```json
{
  "coord": {
    "lon": -122.08,
    "lat": 37.39
  },
  "weather": [
    {
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 282.55,
    "feels_like": 281.86,
    "temp_min": 280.37,
    "temp_max": 284.26,
    "pressure": 1023,
    "humidity": 100
  },
  "visibility": 16093,
  "wind": {
    "speed": 1.5,
    "deg": 350
  },
  "clouds": {
    "all": 1
  },
  "dt": 1560350645,
  "sys": {
    "type": 1,
    "id": 5122,
    "message": 0.0139,
    "country": "US",
    "sunrise": 1560343627,
    "sunset": 1560396563
  },
  "timezone": -25200,
  "id": 420006353,
  "name": "Mountain View",
  "cod": 200
}
```
  
이런 형식으로만 줄맞춰서 뙇 보여지면 편하겠지만  
줄줄이 소세지처럼 나온것들은 보기 힘들다.
[JSON Viewer Awesome](https://chrome.google.com/webstore/detail/json-viewer-awesome/iemadiahhbebdklepanmkjenfdebfpfe)  
크롬에 요놈을 확장 프로그램으로 깔아준다.  

![2020-03-05 00-02-59 2020-03-05 00_05_49](https://user-images.githubusercontent.com/55340876/75892692-17b2cd80-5e75-11ea-97aa-e83a4e5bf749.gif)

즈엉말 신박한 새럼들...  

이것은 Dart 에서의 Map 형식과 비슷하다. 

```dart
var wardrobe = {
    doors: 2,
    drawers: 2,
    colour: 'red'
}
```

프로젝트로 돌아가자.  

``dart:convert`` 라는 Dart 패키지를 통해  
거기서 나온 ``jsonDecode()`` 메서드를 쓰자.  
JSON 데이터를 원하는 값에 따라 디코딩 해준다.  

```json
{
  "coord": {
  "lon": 139.01,
  "lat": 35.02
  },

...
```

샘플 사이트의 JSON 데이터를 보고, 해당 경도 값을 가져와보자.  

```dart
import 'package:flutter/material.dart';
import 'package:clima/services/location.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class LoadingScreen extends StatefulWidget {
  @override
  _LoadingScreenState createState() => _LoadingScreenState();
}

class _LoadingScreenState extends State<LoadingScreen> {
  @override
  void initState() {
    super.initState();

    getLocation();
  }

  void getLocation() async {
    Location location = Location();

    await location.getCurrentLocation();

    print(location.latitude);
    print(location.longitude);
  }

  void getData() async {
    http.Response response = await http.get(
        'https://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b6907d289e10d714a6e88b30761fae22');

    if (response.statusCode == 200) {
      String data = response.body;

      var longitude = jsonDecode(data)['coord']['lon'];
      print(longitude);
      
    } else {
      print(response.statusCode);
    }
  }

  @override
  Widget build(BuildContext context) {
    getData();
    return Scaffold();
  }
}
```

```dart
//console 결과는??
flutter: 139.01
```

경도를 찾아와서 제대로 뱉어준다! 



<br/>


```json
{
  "coord": {
  "lon": 139.01,
  "lat": 35.02
  },
  "weather": [
      {
      "id": 800,
      "main": "Clear",
      "description": "clear sky",
      "icon": "01n"
      }
  ],

...
```

``"clear sky"``  값을 갖고 오려면 쪼오꼼 더 까다롭다.  
weather 안에 [] 안에 {} 안에 ``"description":`` 키의 값.  

```dart
var longitude = jsonDecode(data)['weather'][0]['description'];
```

요로코롬 하면 결과로 ``flutter: clear sky``  가 뿅! 나온다.

타이핑이 귀찮다면 JSON 뷰어에 path 복사 기능을 이용하면 된다!

![2020-03-05 00-38-39 2020-03-05 00_38_53](https://user-images.githubusercontent.com/55340876/75895973-b6d9c400-5e79-11ea-929e-5b63d9a89ead.gif)

다른 값에도 접근해보자. 

```dart
...

    if (response.statusCode == 200) {
      String data = response.body;

      var decodedData = jsonDecode(data);

      String cityName = decodedData['name'];
      double temperature = decodedData['main']['temp'];
      int condition = decodedData['weather'][0]['id'];

      print(cityName);
      print(temperature);
      print(condition);
    } else {
      print(response.statusCode);
    }

...
```

JSON 더미 데이터를 보고 값을 가져오기 때문에 우리는 ``name``, ``temp``, ``id`` 가 어떤 타입의 값인지 안다.  
하지만 바로 위에 변수로 선언한 ``decodedData`` 는  
디코딩이 완료될 때까지 어떤 유형의 값인지 알 수가 없기 때문에 ``var`` 로 변수를 선언해준다.


# OWM API에서 실제 날씨 데이터 갖고오기

그동안 한건 OpenWeatherMap 사이트에서 제공한 샘플 더미 데이터를 사용한 것이고,  
실제 데이터로 놀아보자!  

먼저 API 등록을 해야한다.  
계정에 로그인을 하고오~  
API Key 를 복사해서 프로젝트 임포트 하단에 const 상수 변수로 선언해준다!  

이제 아까 더미 url끝에 ``appid`` 뒷 부분을 상수로 선언한 내가 받은 ``API Key`` 로 대체하고,  
``samples`` 부분도 ``api`` 로 바꿔준다.   
``'https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=$apiKey');``  



```dart
import 'package:flutter/material.dart';
import 'package:clima/services/location.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

const apiKey = '8bc3bc4cafdd5ae280772f298bf883f7';

class LoadingScreen extends StatefulWidget {
  @override
  _LoadingScreenState createState() => _LoadingScreenState();
}

class _LoadingScreenState extends State<LoadingScreen> {
  double latitude;
  double longitude;

  @override
  void initState() {
    super.initState();

    getLocation();
  }

  void getLocation() async {
    Location location = Location();

    await location.getCurrentLocation();

    latitude = (location.latitude);
    longitude = (location.longitude);

    getData();
  }

  void getData() async {
    http.Response response = await http.get(
        'https://api.openweathermap.org/data/2.5/weather?lat=$latitude&lon=$longitude&appid=$apiKey');

    if (response.statusCode == 200) {
      String data = response.body;

      var decodedData = jsonDecode(data);

      String cityName = decodedData['name'];
      double temperature = decodedData['main']['temp'];
      int condition = decodedData['weather'][0]['id'];

      print(cityName);
      print(temperature);
      print(condition);
    } else {
      print(response.statusCode);
    }
  }

  @override
  Widget build(BuildContext context) {
    getData();
    return Scaffold();
  }
}
```

```dart
//console 결과는??
flutter: San Francisco
flutter: 287.72
flutter: 701
```

샌프란시스코에 있으며  
온도는 287K  
컨디션은 701 이 제대로 나온다! 

길어진 코드들을 다시 파일별로 분할하고 훑어보자.  

networking.dart

```dart
import 'package:http/http.dart' as http;
import 'dart:convert';

class NetworkHelper {
  final String url;

  NetworkHelper(this.url);

  Future getDate() async {
    http.Response response = await http.get(url); //url을 갖고오고

    if (response.statusCode == 200) {
      //if문을 통해 statusCode 확인
      String data = response.body;

      return jsonDecode(data); //jsonDecode를 사용하여 다시 파싱함
    } else {
      print(response.statusCode);
    }
  }
}
```

loading_screen.dart

```dart
import 'package:flutter/material.dart';
import 'package:clima/services/location.dart';
import 'package:clima/services/networking.dart';

const apiKey = '8bc3bc4cafdd5ae280772f298bf883f7';

class LoadingScreen extends StatefulWidget {
  @override
  _LoadingScreenState createState() => _LoadingScreenState();
}

class _LoadingScreenState extends State<LoadingScreen> {
  double latitude;
  double longitude;

  @override
  void initState() {
    super.initState();
    getLocationData();
  }

  void getLocationData() async {
    Location location = Location();
    await location.getCurrentLocation();
    latitude = (location.latitude); //위도
    longitude = (location.longitude); //경도

    NetworkHelper networkHelper = NetworkHelper(//네트워킹을 통해 데이터 갖고옴
        'https://api.openweathermap.org/data/2.5/weather?lat=$latitude&lon=$longitude&appid=$apiKey');

    var weatherData = await networkHelper.getDate();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold();
  }
}
```




















<br/>


---
---

# Reference  
- [Angela Yu 강의(유료)](https://www.udemy.com/course/flutter-bootcamp-with-dart/)