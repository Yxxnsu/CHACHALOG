---
title: 'π [Flutter] νμ¬ λ μ¨ App π¦'
date: 2020-03-05 00:56:00
category: 'Flutter'
draft: false 
showToc: true
---

# μμΉ λ°μ΄ν° κ°κ³ μ€κΈ°

**[[etc] API / RESTful API](https://chajinjoo.netlify.app/etc/200304_api/) μ°Έκ³ **

- [geolocator 5.3.0](https://pub.dev/packages/geolocator) λΌμ΄λΈλ¬λ¦¬ μ€μΉ

main.dart

```dart
import 'package:flutter/material.dart';
import 'package:clima/screens/loading_screen.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData.dark(),
      home: LoadingScreen(),
    );
  }
}
```
<br/>

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
  void initState() { //κ°μ²΄κ° νΈλ¦¬μ μ½μ λ  λ νΈμΆ
    // TODO: implement initState
    super.initState();

    getLocation(); //μ±μ΄ μ¬μ€ν λλ©΄ μ½μμ°½μ μμΉ λ°λ‘ μ°μ΄μ€
  }

  void getLocation() async {
    Location location = Location(); //μ μμΉ κ°μ²΄
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
- λ°νμ΄ μλ void λ©μλλ₯Ό νλ λ§λ¦


<br/>


location.dart

```dart
import 'package:geolocator/geolocator.dart';

class Location {
  double latitude; //μλ
  double longitude; //κ²½λ

  Future<void> getCurrentLocation() async {
    try {
      //μ΄ μ½λλ μ€λ₯κ° λ  μ μμΌλ try catch λ‘ μ€λ₯μ‘κΈ°
      Position position = await Geolocator()
          .getCurrentPosition(desiredAccuracy: LocationAccuracy.low);
      //λΌμ΄λΈλ¬λ¦¬λ₯Ό ν΅ν΄ νμ¬ λμ GPS νΈμΆ
      //low λΆλΆμ μ νλκ° λμμ§μλ‘ λ°°ν°λ¦¬ μ©λ λ§μ΄ μ‘μλ¨Ήμ

      latitude = position.latitude; //ν΄λΉκ° κ°κ° ν λΉ
      longitude = position.longitude; 
    } catch (e) {
      print(e);
    }
  }
}
```

- κ°μ Έμ¨ μμΉ λΌμ΄λΈλ¬λ¦¬λ₯Ό ν΅ν΄ ``Geolocator()`` λΌλ κ°μ²΄λ₯Ό μ»κ³ ,  
``getCurrentPosition()`` μΌλ‘ μνλ μ λμ μ νλλ₯Ό μ κ³΅λ°μ νμ¬ μμΉλ₯Ό μ»λλ€.  

- κ° μλλ‘μ΄λ Android Manifest νμΌ λ΄λΆμ ``<manifest>`` νλ¨κ³Ό   
  ios > Info.plist νμΌ λ΄λΆμ ``<dict>`` μμ μ¬μ©μ μμΉμ λ³΄ κΆν μμΈμ€λ₯Ό μΆκ°νλ€.   
  (ν΄λΉ λΌμ΄λΈλ¬λ¦¬ μ¬μ©λ² μ°Έκ³ )

```dart
    void getLocation() async {
        Position position = await Geolocator()
          .getCurrentPosition(desiredAccuracy: LocationAccuracy.low);
          print(position);
    }
```

νμ¬μμΉλ§ μ»λ μ½λμλ€λ©΄ μλ‘μ½λ‘¬ μ°κ² μ§λ§  
μ€νν΄μΌ ν  λ€λ₯Έ λμλ€λ μμΌλ μΌλ¨,   
await ν€μλμ μμΈμ€λ₯Ό νκΈ°μν΄ ``async`` ν€μλλ₯Ό μΆκ°νλ€.  
(νμ¬ μμΉλ₯Ό μ°Ύμ λκΉμ§ λ°±κ·ΈλΌμ΄λμμ κΈ°λ€λ¦΄ μ μλλ‘ λΉλκΈ°λ‘ νμ)  
μλ¨ μ μ²΄ μ½λμ²λΌ λ―Έλμμ λ°λ κ²μ΄λΌλ κ°μ νμ ``Future<λ°ννμ>`` μΌλ‘ λ¬Άμ΄μ€λ€.   

μ΄ λ, 

```dart
    void getLocation() async {
        Future<Position> position = Geolocator()
          .getCurrentPosition(desiredAccuracy: LocationAccuracy.low);
          print(position);
    }
```
μλ‘  μμΌλ‘ await ν€μλκ° μλ€λ©΄ μ€ννμλ λ°νκ°μ μ΄λ¦¬μ§ μμ μ λ¬ΌμμμΌ λΏμ΄λ€.  

λ΄κ° μ£Όλ¬Έν μ»€νΌ μμμ¦λ§λ₯ μ»€νΌλ μκ³  μμμ¦λ§ μ¨ κ²μ΄λ€.  
λ©μλλ₯Ό νΈμΆνμ λ,  
``await`` ν€μλλ₯Ό μ΄μ©νμ¬ μ»€νΌκ° μ€κΈΈ κΈ°λ€λ Έλ€κ° κ° λ΄λ¦° μ»€νΌλ₯Ό λ°λ κ²!!!

- μμΉ μ λ³΄λ₯Ό μ»κΈ° μν ν΄λ¦­μ μκ΅¬νλ λ²νΌ κ°μκ±΄ μ¬μ©νμ§ μκ³ ,   
  ``initState() {}`` λ₯Ό ν΅ν΄ stful μμ ―μ΄ μμ±λλ μ¦μ νΈλ¦¬κ±°λκ³    
  νλ©΄μ΄ μ¬μ€ν λλ©΄μ μ½μμ°½μ λ΄ νμ¬ μμΉ μ λ³΄κ° μΆλ ₯λλ€.  
  (λ¨ ν λ² νΈμΆλ¨)



**[[Dart] future & async-await](https://chajinjoo.netlify.app/dart/200203_futureAsync/) μ°Έκ³ **  


# λ μ¨ λ°μ΄ν° κ°κ³ μ€κΈ°

- [http 0.12.0+4](https://pub.dev/packages/http) λΌμ΄λΈλ¬λ¦¬ μ€μΉ

ν΄λΉ λΌμ΄λΈλ¬λ¦¬λ‘ λ€νΈμν¬ μμ²­μ νλ €λ©΄ ``get`` λ©μλλ₯Ό νΈμΆνλ©΄ λ¨

```dart
Future<http.Response> fetchAlbum() {
  return http.get('https://jsonplaceholder.typicode.com/albums/1');
}
```

μ΄κ² μ­μλ λ°μ΄ν°λ₯Ό κ°μ Έμ€λλ° μκ°μ΄ μ€λ μμλ  μ μκΈ°μ λΉλκΈ° λ°©μμΌλ‘ μ§ννλ€.  

```dart
...

  void getData() async {
    Response response = await get(
        'https://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b6907d289e10d714a6e88b30761fae22');
    print(response);
  }

...
```


[openweathermap](https://openweathermap.org/current) μ¬μ΄νΈλ₯Ό ν΅ν΄ λ μ¨ λ°μ΄ν°λ₯Ό κ°μ Έμ¬ μ μλ url μ£Όμλ₯Ό λ³΅μ¬νκ³   
ν΄λΉ λΌμ΄λΈλ¬λ¦¬μ get λ©μλ λ΄λΆμ μμ±νλ€.  
μ»μ΄λΈ λ°μ΄ν°μ μ μ§λ₯Ό μν΄ ``Response`` νμμ μλ‘μ΄ λ³μμ ν λΉμ ν΄μ€.  
λ°μλΈ ``Response`` λ₯Ό μ΄λκ°μ μ¬μ©νλ €λ©΄ λΉλκΈ° λ°©μμΌλ‘ λ°κΏμ£Όμ΄μΌ νλ€.  

λ°μ΄ν°λ₯Ό μ λλ‘ μλμ§μ λν νμΈμ  
``initState() {}`` μ΄λ ``build`` νλ¨μμ ``getData();`` λ₯Ό μ°μ΄ νμΈν΄μ£Όλ©΄ λλ€.  


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
    //getData(); λ₯Ό μ¬λ° λ£μ΄μ€λ λ¨
    getLocation();
  }

  void getLocation() async {
    Location location = Location(); 
    await location.getCurrentLocation();
    print(location.latitude);
    print(location.longitude);
  }

  void getData() async { //λ μ¨ λ°μ΄ν°
    Response response = await get(
        'https://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b6907d289e10d714a6e88b30761fae22');
    print(response);
  }

  @override
  Widget build(BuildContext context) {
    getData(); //νμΈν΄λ³΄μ
    return Scaffold();
  }
}
```

<img width="595" alt="αα³αα³αα΅α«αα£αΊ 2020-03-04 αα©αα? 7 44 26" src="https://user-images.githubusercontent.com/55340876/75871877-90536300-5e50-11ea-8f12-05e3dd065ea8.png">

``Response`` κ°μ²΄κ° μ λλ‘ μ°νλ€.  

``print(response);`` μ λΆλΆμμ ``print(response.body);``, ``print(response.statusCode);`` λ±μ μ°μ΄μ£Όλ©΄  
λ΄ μμ²­μ λν μλ΅λ€μ΄ μ½μμ μ°νλ€. 

**[[etc] HTTP κΈ°μ΄](https://chajinjoo.netlify.app/etc/200304_http/) μ°Έκ³ **

<img width="963" alt="αα³αα³αα΅α«αα£αΊ 2020-03-04 αα©αα? 8 10 20" src="https://user-images.githubusercontent.com/55340876/75873940-2dfc6180-5e54-11ea-9e44-c9f8899a07e3.png">

λ§ν¬μ weather λΆλΆμ header λ‘ λ°κΎΈκ³  μ€νμ νλ©΄ λΉμ°ν 404 μλ¬κ° λ¬λ€.



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
statusCode νμΈμ μν΄ ifλ¬ΈμΌλ‘ μμ ν΄μ€¬λ€.

μλ¨ μν¬νΈλ 
``import 'package:http/http.dart' as http;`` λ‘ μμ νλ€. (http ν¨ν€μ§ μμ λͺ¨λ  κ²μ μ¬μ©ν¨)  
μ΄μ  ``get`` λμ  ``http.get`` μ μμ±νκ³ ,  
``Response`` λ₯Ό ``http.Response`` λ‘ μμ±νλ€. 

μ±μ μ¬μ€ννλ©΄  

```
//console κ²°κ³Όλ??
flutter: 37.785834
flutter: -122.406417
flutter: {"coord":{"lon":139.01,"lat":35.02},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"base":"stations","main":{"temp":285.514,"pressure":1013.75,"humidity":100,"temp_min":285.514,"temp_max":285.514,"sea_level":1023.22,"grnd_level":1013.75},"wind":{"speed":5.52,"deg":311},"clouds":{"all":0},"dt":1485792967,"sys":{"message":0.0025,"country":"JP","sunrise":1485726240,"sunset":1485763863},"id":1907296,"name":"Tawarano","cod":200}
```

μλ‘μ½λ‘¬ κ²½λ μλμ ν¨κ» ``ν€: κ°`` ``Key: Value`` μΈ ``JSON νμ``μ κ°μ΄ μΆλ ₯λλ€.

# JSON

λλΆλΆμ APIλ λκ°λ‘ λλλ€  

- **XML**  
  - ``<key>value</key>`` νμμΌλ‘ ν€μ μ΄λ¦μ νκ·Έμ΄κ³  μ¬λ«λ νκ·Έ λ΄λΆμ κ°μ΄ μλ€.   

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
  - ``{key: value}``  {} μ€κ΄νΈ μμ keyμ : μ½λ‘  κ·Έλ¦¬κ³  κ°μ΄ μλ€.  

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
  
μ΄λ° νμμΌλ‘λ§ μ€λ§μΆ°μ λ λ³΄μ¬μ§λ©΄ νΈνκ² μ§λ§  
μ€μ€μ΄ μμΈμ§μ²λΌ λμ¨κ²λ€μ λ³΄κΈ° νλ€λ€.
[JSON Viewer Awesome](https://chrome.google.com/webstore/detail/json-viewer-awesome/iemadiahhbebdklepanmkjenfdebfpfe)  
ν¬λ‘¬μ μλμ νμ₯ νλ‘κ·Έλ¨μΌλ‘ κΉμμ€λ€.  

![2020-03-05 00-02-59 2020-03-05 00_05_49](https://user-images.githubusercontent.com/55340876/75892692-17b2cd80-5e75-11ea-97aa-e83a4e5bf749.gif)

μ¦μλ§ μ λ°ν μλΌλ€...  

μ΄κ²μ Dart μμμ Map νμκ³Ό λΉμ·νλ€. 

```dart
var wardrobe = {
    doors: 2,
    drawers: 2,
    colour: 'red'
}
```

νλ‘μ νΈλ‘ λμκ°μ.  

``dart:convert`` λΌλ Dart ν¨ν€μ§λ₯Ό ν΅ν΄  
κ±°κΈ°μ λμ¨ ``jsonDecode()`` λ©μλλ₯Ό μ°μ.  
JSON λ°μ΄ν°λ₯Ό μνλ κ°μ λ°λΌ λμ½λ© ν΄μ€λ€.  

```json
{
  "coord": {
  "lon": 139.01,
  "lat": 35.02
  },

...
```

μν μ¬μ΄νΈμ JSON λ°μ΄ν°λ₯Ό λ³΄κ³ , ν΄λΉ κ²½λ κ°μ κ°μ Έμλ³΄μ.  

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
//console κ²°κ³Όλ??
flutter: 139.01
```

κ²½λλ₯Ό μ°Ύμμμ μ λλ‘ λ±μ΄μ€λ€! 



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

``"clear sky"``  κ°μ κ°κ³  μ€λ €λ©΄ μͺΌμ€κΌΌ λ κΉλ€λ‘­λ€.  
weather μμ [] μμ {} μμ ``"description":`` ν€μ κ°.  

```dart
var longitude = jsonDecode(data)['weather'][0]['description'];
```

μλ‘μ½λ‘¬ νλ©΄ κ²°κ³Όλ‘ ``flutter: clear sky``  κ° λΏ! λμ¨λ€.

νμ΄νμ΄ κ·μ°?λ€λ©΄ JSON λ·°μ΄μ path λ³΅μ¬ κΈ°λ₯μ μ΄μ©νλ©΄ λλ€!

![2020-03-05 00-38-39 2020-03-05 00_38_53](https://user-images.githubusercontent.com/55340876/75895973-b6d9c400-5e79-11ea-929e-5b63d9a89ead.gif)

λ€λ₯Έ κ°μλ μ κ·Όν΄λ³΄μ. 

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

JSON λλ―Έ λ°μ΄ν°λ₯Ό λ³΄κ³  κ°μ κ°μ Έμ€κΈ° λλ¬Έμ μ°λ¦¬λ ``name``, ``temp``, ``id`` κ° μ΄λ€ νμμ κ°μΈμ§ μλ€.  
νμ§λ§ λ°λ‘ μμ λ³μλ‘ μ μΈν ``decodedData`` λ  
λμ½λ©μ΄ μλ£λ  λκΉμ§ μ΄λ€ μ νμ κ°μΈμ§ μ μκ° μκΈ° λλ¬Έμ ``var`` λ‘ λ³μλ₯Ό μ μΈν΄μ€λ€.


# OWM APIμμ μ€μ  λ μ¨ λ°μ΄ν° κ°κ³ μ€κΈ°

κ·Έλμ νκ±΄ OpenWeatherMap μ¬μ΄νΈμμ μ κ³΅ν μν λλ―Έ λ°μ΄ν°λ₯Ό μ¬μ©ν κ²μ΄κ³ ,  
μ€μ  λ°μ΄ν°λ‘ λμλ³΄μ!  

λ¨Όμ  API λ±λ‘μ ν΄μΌνλ€.  
κ³μ μ λ‘κ·ΈμΈμ νκ³ μ€~  
API Key λ₯Ό λ³΅μ¬ν΄μ νλ‘μ νΈ μν¬νΈ νλ¨μ const μμ λ³μλ‘ μ μΈν΄μ€λ€!  

μ΄μ  μκΉ λλ―Έ urlλμ ``appid`` λ· λΆλΆμ μμλ‘ μ μΈν λ΄κ° λ°μ ``API Key`` λ‘ λμ²΄νκ³ ,  
``samples`` λΆλΆλ ``api`` λ‘ λ°κΏμ€λ€.   
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
//console κ²°κ³Όλ??
flutter: San Francisco
flutter: 287.72
flutter: 701
```

μνλμμ€μ½μ μμΌλ©°  
μ¨λλ 287K  
μ»¨λμμ 701 μ΄ μ λλ‘ λμ¨λ€! 

κΈΈμ΄μ§ μ½λλ€μ λ€μ νμΌλ³λ‘ λΆν νκ³  νμ΄λ³΄μ.  


main.dart

```dart
import 'package:flutter/material.dart';
import 'package:clima/screens/loading_screen.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData.dark(),
      home: LoadingScreen(),
    );
  }
}
```


networking.dart

```dart
import 'package:http/http.dart' as http;
import 'dart:convert';

class NetworkHelper {
  final String url;

  NetworkHelper(this.url); 

  Future getDate() async {
    http.Response response = await http.get(url); //urlμ κ°κ³ μ€κ³ 

    if (response.statusCode == 200) {
      //ifλ¬Έμ ν΅ν΄ statusCode νμΈ
      String data = response.body;

      return jsonDecode(data); //jsonDecodeλ₯Ό μ¬μ©νμ¬ λ€μ νμ±ν¨
    } else {
      print(response.statusCode);
    }
  }
}
```
``NetworkHelper(this.url);`` ν΄λμ€λ₯Ό μ΄κΈ°ννκ³  ν΄λΉ urlμ  
``await http.get(url);`` μ μμ²­νλ€.  
κ·Έλ° λ€μ μλ΅μ΄ μ ν¨νμ§ νμΈνλ€.  
200 ok λ©΄ μλ΅μ λ³Έλ¬Έμ μ·¨νκ³  ``jsonDecode`` λ₯Ό μ¬μ©νμ¬ ν΄λΉ λ°μ΄ν°λ₯Ό ν΄λνκ³  λ¦¬ν΄νλ€.  

μ΄ κΈ°λ₯μ λ μ¨ λΏλ§ μλλΌ λ€λ₯Έ λ€νΈμν¬λ₯Ό νμλ‘ ν  λ μ¬μ¬μ©ν΄μ€λ λλ€.





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
    latitude = (location.latitude); //μλ
    longitude = (location.longitude); //κ²½λ

    NetworkHelper networkHelper = NetworkHelper(//λ€νΈμνΉμ ν΅ν΄ λ°μ΄ν° κ°κ³ μ΄
        'https://api.openweathermap.org/data/2.5/weather?lat=$latitude&lon=$longitude&appid=$apiKey');

    var weatherData = await networkHelper.getDate();

    Navigator.push(
      context, MaterialPageRoute(builder: (context) => LocationScreen()));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold();
  }
}
```

``getLocationData()`` λ©μλμμ μ¬μ©μ νμ¬ μμΉλ₯Ό μ»μ ν,  
ν΄λΉ μμΉμ λ μ¨ λ°μ΄ν°λ₯Ό κ°μ Έμ€λ ``networkHelper`` κ°μ²΄λ₯Ό μμ±ν μΈμλ‘ λ΄κ° μ»μ λ°μ΄ν° urlμ λ£μ΄μ£Όκ³   
λ°μμ¨ λ°μ΄ν°μΈ ``getDate()`` μ ``weatherData`` λ³μμ ν λΉνλ€.  

μ΄μ λΆν° ν  μΌμ μ¬μ©μκ° νμΈν  μ μλλ‘ μ΄ λ°μ΄ν°λ₯Ό νλ©΄μ νμν΄μ£Όλ κ²μ΄λ€.  

```dart
    Navigator.push(
      context, MaterialPageRoute(builder: (context) => LocationScreen()));
```

**μΌλ¨ λ μ¨ λ°μ΄ν°κ° μ»μ΄μ§λ©΄ λ€μ νλ©΄μΌλ‘ λμ΄κ°κ²λ λΌμ°νΈλ₯Ό λ£μ΄μ€¬λ€.**

<img width="300" alt="" src="https://user-images.githubusercontent.com/55340876/75957365-3ceb1e80-5efd-11ea-971d-ba281570d25c.gif">



# λ‘λ©νμ

constants.dart

```dart
import 'package:flutter/material.dart';

const kTempTextStyle = TextStyle(
  fontFamily: 'Spartan MB',
  fontSize: 100.0,
);

const kMessageTextStyle = TextStyle(
  fontFamily: 'Spartan MB',
  fontSize: 60.0,
);

const kButtonTextStyle = TextStyle(
  fontSize: 30.0,
  fontFamily: 'Spartan MB',
);

const kConditionTextStyle = TextStyle(
  fontFamily: 'Spartan MB',
  fontSize: 80.0, //100.0μΌλ‘ νλ©΄ μμ΄μ½ μλ³΄μ¬μ 80.0μ€
);
```


location_screen.dart

```dart
import 'package:flutter/material.dart';
import 'package:clima/utilities/constants.dart';

class LocationScreen extends StatefulWidget {
  @override
  _LocationScreenState createState() => _LocationScreenState();
}

class _LocationScreenState extends State<LocationScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: BoxDecoration(
          image: DecorationImage(
            image: AssetImage('images/location_background.jpg'),
            fit: BoxFit.cover,
            colorFilter: ColorFilter.mode(
                Colors.white.withOpacity(0.8), BlendMode.dstATop),
          ),
        ),
        constraints: BoxConstraints.expand(),
        child: SafeArea(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: <Widget>[
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: <Widget>[
                  FlatButton(
                    onPressed: () {},
                    child: Icon(
                      Icons.near_me,
                      size: 50.0,
                    ),
                  ),
                  FlatButton(
                    onPressed: () {},
                    child: Icon(
                      Icons.location_city,
                      size: 50.0,
                    ),
                  ),
                ],
              ),
              Padding(
                padding: EdgeInsets.only(left: 15.0),
                child: Row(
                  children: <Widget>[
                    Text(
                      '32Β°',
                      style: kTempTextStyle,
                    ),
                    Text(
                      'βοΈ',
                      style: kConditionTextStyle,
                    ),
                  ],
                ),
              ),
              Padding(
                padding: EdgeInsets.only(right: 15.0),
                child: Text(
                  "It's π¦ time in San Francisco!",
                  textAlign: TextAlign.right,
                  style: kMessageTextStyle,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

//String cityName = decodedData['name'];
//double temperature = decodedData['main']['temp'];
//int condition = decodedData['weather'][0]['id'];
```

city_screen.dart
```dart
import 'package:flutter/material.dart';
import 'package:clima/utilities/constants.dart';

class CityScreen extends StatefulWidget {
  @override
  _CityScreenState createState() => _CityScreenState();
}

class _CityScreenState extends State<CityScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: BoxDecoration(
          image: DecorationImage(
            image: AssetImage('images/city_background.jpg'),
            fit: BoxFit.cover,
          ),
        ),
        constraints: BoxConstraints.expand(),
        child: SafeArea(
          child: Column(
            children: <Widget>[
              Align(
                alignment: Alignment.topLeft,
                child: FlatButton(
                  onPressed: () {},
                  child: Icon(
                    Icons.arrow_back_ios,
                    size: 50.0,
                  ),
                ),
              ),
              Container(
                padding: EdgeInsets.all(20.0),
                child: null,
              ),
              FlatButton(
                onPressed: () {},
                child: Text(
                  'Get Weather',
                  style: kButtonTextStyle,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
```





λ°μ΄ν°κ° λ°μμ Έμ νλ©΄μ΄ μλμΌλ‘ λμ΄κ°λκΉμ§ νμ΄ μλ€.  
λ‘λ© νμκΈ°λ₯Ό μΆκ°ν΄μ£Όμ! 


[flutter_spinkit 4.1.2](https://pub.dev/packages/flutter_spinkit) λΌμ΄λΈλ¬λ¦¬λ₯Ό μ€μΉνλ€.  
λ€μν μ λλ©μ΄μ λ‘λ© νμκΈ°λ₯Ό λνλ΄μ£Όλ λΌμ΄λΈλ¬λ¦¬λ€.  
μ΄μ  λΌμ΄λΈλ¬λ¦¬ μ€μΉνκ³  κ°λ€μΈλλ μλ¨μ μν¬νΈ κ΅¬λ¬Έ μΆκ°νλκ±΄ μλ κΈ°λ³Έμ΄λκΉ! λ°λ‘ μΈκΈγ΄γ΄νλ€!  

νλ©΄μ΄ μ¬μ€νλκ³  λ°μ΄ν°κ° λ°μμ§κΈ° μ  μμ μμ μ€νλμΌ νλκΉ λΉλ λ©μλ λ΄λΆμ λ£μ΄μ€λ€.

loading_screen.dart

```dart
...

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: SpinKitDoubleBounce(
          color: Colors.white,
          size: 100.0,
        ),
      ),
    );
  }
}
```

λ€μ μ±μ μ¬μ€ννλ©΄?!

<img width="300" alt="" src="https://user-images.githubusercontent.com/55340876/75959447-9ead8780-5f01-11ea-9949-e7850db9d16f.gif">

μλ‘μ½λ‘¬ λ‘λ© νλ©΄ νμλν λ°μ΄ν°κ° λ°μμ§λ©΄ νλ©΄μ΄ λμ΄κ°λ€!  
μλλ€! μ¬λ―Έλλ€!! π€­  
μ»¬λ¬λ μ¬μ΄μ¦κΉμ§ μ μλλ μμ£Ό κ³ λ₯ λλ΄μ£Όλκ³ λ§!!  

# λ°μ΄ν° μ λ¬νκΈ°

μ΄μ  νλμ½λ©λ λ΄μ© λ§κ³  μ€μ  λ°μ΄ν°λ₯Ό μ λ¬ν΄μ νλ©΄μΌλ‘ λκ²¨μ£Όμ.

location_screen.dart

```dart
...

class LocationScreen extends StatefulWidget {
  final locationWeather;

  LocationScreen({this.locationWeather});

  @override
  _LocationScreenState createState() => _LocationScreenState();
}

class _LocationScreenState extends State<LocationScreen> {
  @override
  void initState() { 
    super.initState();

    print(widget.locationWeather); 
  }

...
```

``locationWeather`` μμ±μ μ£Όκ³  μμ±μλ₯Ό ν΅ν΄ μ΄κΈ°νλ₯Ό ν΄μ€λ€.  
κ·Έλ¦¬κ³  ``State`` ν΄λμ€ μ€λ²λΌμ΄λ λ°μ ``initState()`` λ₯Ό μΆκ°ν΄μ μΆλ ₯μ ν΄μ£Όμ.  
μ¬κΈ°μ ``widget.`` μ StatefulWidget μμ ―μ μμλ°μ LocationScreen ν΄λμ€λ₯Ό κ°λ₯΄ν¨λ€.   

loading_screen.dart

```dart
...

    var weatherData = await networkHelper.getDate();

    Navigator.push(
        context,
        MaterialPageRoute(
            builder: (context) => LocationScreen(locationWeather: weatherData,)));

...
```

``LocationScreen(locationWeather: weatherData,)`` κ°μ μ£Όλ©΄ ν΄λΉ μμΉ λ°μ΄ν°λ₯Ό κ°κ³ μ¬ μ μλ€.  

```dart
//console κ²°κ³Όλ??
flutter: {coord: {lon: -122.41, lat: 37.79}, weather: [{id: 801, main: Clouds, description: few clouds, icon: 02n}], base: stations, main: {temp: 284.3, feels_like: 281.58, temp_min: 282.04, temp_max: 286.48, pressure: 1020, humidity: 87}, visibility: 16093, wind: {speed: 3.6, deg: 360}, clouds: {all: 20}, dt: 1583396793, sys: {type: 1, id: 5154, country: US, sunrise: 1583418887, sunset: 1583460449}, timezone: -28800, id: 5391959, name: San Francisco, cod: 200}
```

λ μ¨μ μ κ·Όμ νλ€!  

location_screen.dart

```dart
...

class _LocationScreenState extends State<LocationScreen> {
  String cityName;
  double temperature;
  int condition;

  @override
  void initState() {
    super.initState();

    updateUI(widget.locationWeather);
  }

  void updateUI(dynamic weatherData) {
    cityName = weatherData['name'];
    temperature = weatherData['main']['temp'];
    condition = weatherData['weather'][0]['id'];
  }

...
```

μμλ μ΄λ λ€.  
``LocationScreen`` μ΄ μ΄κΈ°νλλ©΄ μμΉλ₯Ό λκ²¨μ£Όλλ°,  
``widget.locationWeather`` λ₯Ό ν΅ν΄ ``updateUI`` λ₯Ό νΈμΆνμ¬  
ν΄λΉ λ μ¨ λ°μ΄ν°λ₯Ό λ€μ μ λ¬νλ€.  

loading_screen.dart
```dart
        $apiKey&units=metric');
```

```dart
    temperature = weatherData['main']['temp'];
    condition = weatherData['weather'][0]['id'];

    print(temperature); //ho!
  }
```

url λΆλΆ λ€μ λΆμ¬μ μ¨λλ₯Ό μ­μ¨λ‘ λ°κΏμ£Όκ³  μΆλ ₯νλ©΄? 
``flutter: 10.12`` μ λλ‘ λ³νλμ λμ¨λ€.  
μ¦, μ΄μ  νμ€νΈ μμ ―μ λμν΄μ μ¬μ©ν  μ μλ€! 

<img width="371" alt="αα³αα³αα΅α«αα£αΊ 2020-03-05 αα©αα? 7 48 40" src="https://user-images.githubusercontent.com/55340876/75974547-52bb0c80-5f1a-11ea-9d34-76c13a56a4b2.png">

μμμ  μλ¦¬λΌ μ΄λͺ¨ν°μ½μ΄ λ°λ €λλ μ μλ‘ λ³νμ ν΄μ£Όμ.  


```dart
...

int temperature;

...

    double temp = weatherData['main']['temp'];
    temperature = temp.toInt(); 

...

          Text(
          '$temperatureΒ°',

...
```
μμ±μ ``int temperature;`` int νμμΌλ‘ λ°κΎΈκ³   
``.toInt()`` λ₯Ό μ΄μ©νμ¬ μμλ₯Ό μ μλ‘ λ³ννλ©΄ 

<img width="371" alt="αα³αα³αα΅α«αα£αΊ 2020-03-05 αα©αα? 7 52 56" src="https://user-images.githubusercontent.com/55340876/75974897-ea205f80-5f1a-11ea-8af1-ed46de2ba3a1.png">

λ!! 

ν΄.. κ·Όλ° μ½λκ° λλͺ¨ κΈ°λκΉ λ³μλ€μ μ κ±°νκ³  κ°κ²°νκ² νμ.  

loading_screen.dart
```dart
...

class _LoadingScreenState extends State<LoadingScreen> {
  @override
  void initState() {
    super.initState();
    getLocationData();
  }

  void getLocationData() async {
    Location location = Location();
    await location.getCurrentLocation();

    NetworkHelper networkHelper = NetworkHelper(
        'https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=$apiKey&units=metric');

...
```

μκ³  νλ€λ€..  

![unnamed](https://user-images.githubusercontent.com/55340876/75946061-5aa98b00-5edf-11ea-9b52-8cf6c95caf08.gif)

μ§μ΄€ λ¦¬μΌλ£¨λ€κ° μνκ΄λ¦¬λ HTTP JSON λλͺ¨ μ΄λ ΅λ€  
μ.... λμμΈ νλκ±΄ λ¬Έμ κ° μλλ° μ§μ§ μμμμ€μμ!!  

λ¦¬μ‘νΈ ν  λλ λλ¬΄ μ΄ν΄ μκ°λλ° λ§μ°¬κ°μ§κ³ λ§... ν½  
λ¬΄μ‘°κ±΄ μ°μ΅μ°μ΅μ°μ΅μ΄ μ΄κΈΈμ΄λ€!! π₯Ί  

# νλμ½λ©λκ±°μ λ μ¨ μλ°μ΄νΈ

weather.dart

```dart
class WeatherModel {
  String getWeatherIcon(int condition) {
    if (condition < 300) {
      return 'π©';
    } else if (condition < 400) {
      return 'π§';
    } else if (condition < 600) {
      return 'βοΈ';
    } else if (condition < 700) {
      return 'βοΈ';
    } else if (condition < 800) {
      return 'π«';
    } else if (condition == 800) {
      return 'βοΈ';
    } else if (condition <= 804) {
      return 'βοΈ';
    } else {
      return 'π€·β';
    }
  }

  String getMessage(int temp) {
    if (temp > 25) {
      return 'It\'s π¦ time';
    } else if (temp > 20) {
      return 'Time for shorts and π';
    } else if (temp < 10) {
      return 'You\'ll need π§£ and π§€';
    } else {
      return 'Bring a π§₯ just in case';
    }
  }
}
```

μ‘°κ±΄λΆ μ½λλ₯Ό κ²μ¬νμ¬ ν΄λΉ μ»¨λμκ³Ό μ¨λμ λ§λ μ΄λͺ¨ν°μ½μ λ°νν΄μ€λ€.  

location_screen.dart

```dart
import 'package:flutter/material.dart';
import 'package:clima/utilities/constants.dart';
import 'package:clima/services/weather.dart';

class LocationScreen extends StatefulWidget {
  final locationWeather;

  LocationScreen({this.locationWeather});

  @override
  _LocationScreenState createState() => _LocationScreenState();
}

class _LocationScreenState extends State<LocationScreen> {
  WeatherModel weather = WeatherModel();

  String cityName;
  int temperature;
  String weatherIcon;
  String weatherMessage;

  @override
  void initState() {
    super.initState();

    updateUI(widget.locationWeather);
  }

  void updateUI(dynamic weatherData) {
    setState(() {
      cityName = weatherData['name'];
      double temp = weatherData['main']['temp'];
      temperature = temp.toInt();
      var condition = weatherData['weather'][0]['id'];
      weatherIcon = weather.getWeatherIcon(condition);
      weatherMessage = weather.getMessage(temperature);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: BoxDecoration(
          image: DecorationImage(
            image: AssetImage('images/location_background.jpg'),
            fit: BoxFit.cover,
            colorFilter: ColorFilter.mode(
                Colors.white.withOpacity(0.8), BlendMode.dstATop),
          ),
        ),
        constraints: BoxConstraints.expand(),
        child: SafeArea(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: <Widget>[
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: <Widget>[
                  FlatButton(
                    onPressed: () {},
                    child: Icon(
                      Icons.near_me,
                      size: 50.0,
                    ),
                  ),
                  FlatButton(
                    onPressed: () {},
                    child: Icon(
                      Icons.location_city,
                      size: 50.0,
                    ),
                  ),
                ],
              ),
              Padding(
                padding: EdgeInsets.only(left: 15.0),
                child: Row(
                  children: <Widget>[
                    Text(
                      '$temperatureΒ°',
                      style: kTempTextStyle,
                    ),
                    Text(
                      weatherIcon,
                      style: kConditionTextStyle,
                    ),
                  ],
                ),
              ),
              Padding(
                padding: EdgeInsets.only(right: 15.0),
                child: Text(
                  '$weatherMessage in $cityName',
                  textAlign: TextAlign.right,
                  style: kMessageTextStyle,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
```

<img width="320" alt="αα³αα³αα΅α«αα£αΊ 2020-03-06 αα©αα? 5 18 20" src="https://user-images.githubusercontent.com/55340876/76065252-9bcc9880-5fce-11ea-9d01-b323f9cc2bf9.png">

# μμΉ λ¦¬ν©ν λ§













































<br/>


---
---

# Reference  
- [Angela Yu κ°μ(μ λ£)](https://www.udemy.com/course/flutter-bootcamp-with-dart/)