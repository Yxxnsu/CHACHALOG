---
title: '๐ [Flutter] Stateful ์์ ฏ์ LifeCycle'
date: 2020-02-27 19:35:00
category: 'Flutter'
draft: false
showToc: true
---

์๋ช์ฃผ๊ธฐ ๋ฉ์๋ ์ถ๊ฐ : ์๋๋ก์ด๋ ์คํ๋์ค ๊ธฐ์ค ``ctrl + o``   
- Stateless ์์ ฏ์ ๋ผ์ดํ์ฌ์ดํด์ด ์์  
- Stateful ์์ ฏ์ State ํด๋์ค๋ฅผ ํตํด ๋ผ์ดํ์ฌ์ดํด์ ์ง์ํจ

# LifeCycle ๋ฉ์๋

### StatefulWidget.createState()
   - ์ํ๋ฅผ ์์ฑ
   - ์ด ๋ฉ์๋๋ฅผ ์ ์ธํ๊ณ  ๋๋จธ์ง๋ ๋ชจ๋ State ํด๋์ค ๋ด๋ถ์ ์กด์ฌํ๋ค.
  
<br/>

### mounted ๋ณ์๊ฐ true๊ฐ ๋จ
   - ํ๋ฉด์ ์์ ฏ์ด ๋ถ์ฐฉ๋ ์ํ
   - createState๊ฐ stateํด๋์ค๋ฅผ ์์ฑํ๋ฉด buildContext๋ state์ ํ ๋น ๋จ   
    (BuildContext๋ ์์ ฏ์ด ๋ฐฐ์น๋ ์์ ฏ ํธ๋ฆฌ์ ์์น๋ฅผ ๋จ์ํ ํ ๊ฒ)
    ๋ชจ๋  ์์ ฏ์ bool ํ์์ this.mounted ์์ฑ์ ๊ฐ์ง๊ณ  ์๋ค.   
    buildContext๊ฐ ํ ๋น๋๋ฉด true๋ฅผ ๋ฆฌํดํ๋ค.  
     ์์ ฏ์ด unmounted์ํ์ผ๋ setState๋ฅผ ํธ์ถํ๋ฉด error๊ฐ ๋ฐ์ํ๋ค.

<br/>

### initState()
   - ์์ ฏ์ด ์์ฑ๋  ๋ ๊ฐ์ฅ ์ฒ์ ํธ์ถ
   - ์ํ๋ฅผ ์ด๊ธฐํํจ
   - ๋จ ํ๋ฒ๋ง ํธ์ถ
   - super.initState() ์ ๋ฐ๋์ ํธ์ถํด์ผํจ
  
<br/>

### didChangeDependencies()
   - ์ํ ๊ฐ์ฒด์ ์์กด์ฑ์ด ๋ณ๊ฒฝ๋๋ฉด ํธ์ถ
   - initState() ๋ค์์ ํธ์ถ
  
<br/>

### build()
   - (ํ์!!!!)
   - ์์ ฏ์ ํ๋ฉด์ ํ์ํ๋ ๋ฉ์๋
   - ํ๋ฉด์ ํ์ํ  ์์ ฏ์ ๋ฐํํด์ผํจ   
      (์ฌ์ ์ ๋์(@override)์ด๊ณ  ๋ฐ๋์ Widget์ ๋ฆฌํดํด์ผ ํจ)

<br/>

### didUpdateWidget() 
   - ์์ ฏ์ ์ค์ ์ด ๋ณ๊ฒฝ๋  ๋ ํธ์ถ  
      (๋ถ๋ชจ ์์ ฏ์ด ๋ณ๊ฒฝ๋์ด ์ด ์์ ฏ์ ์ฌ ๊ตฌ์ฑํด์ผ ํ๋ ๊ฒฝ์ฐ)  

<br/>

### setState()
   - ์์ ฏ์ ์ํ๋ฅผ ๊ฐฑ์ 
   - ์ด ๋ฉ์๋๋ฅผ ์คํํ๋ฉด ์์ ฏ์ ์ฒ์๋ถํฐ ๋ค์ ๋ง๋ค์ง๋ง initState() ๋ฉ์๋๋ ํธ์ถ๋์ง ์์
   - '๋ฐ์ดํฐ๊ฐ ๋ณ๊ฒฝ๋์์โ์ ํ๋ ์์ํฌ์ ์๋ฆฌ๋๋ฐ ์ฌ์ฉ๋๋ฉฐ build context์ ์์ ฏ์ ๋ค์ ๋น๋ํ๊ฒ ํจ
   - setState()๋ ๋น๋๊ธฐ์ ์ด ์์ callback์ ์ฌ์ฉํจ (callback์ผ๋ก ๋น๋๊ธฐ๋ฅผ ์ฌ์ฉํ  ์ ์๋ค๋ ๋ง์)

<br/>

### deactivate()
   - ์ํ ๊ฐ์ฒด๊ฐ ์์ ฏ ํธ๋ฆฌ์์ ์ ๊ฑฐ๋จ  
      (๊ฒฝ์ฐ์ ๋ฐ๋ผ ๋ค์ ์ถ๊ฐ๋  ์๋ ์์)
  
<br/>

### dispose()
   - ์ํ ๊ฐ์ฒด๊ฐ ์์ ฏ ํธ๋ฆฌ์์ ์๊ตฌ ์ ๊ฑฐ๋จ  
      (์ด ๋ฉ์๋๊ฐ ํธ์ถ๋๋ฉด ์ํ ๊ฐ์ฒด๋ ์ฌ์ฌ์ฉ ๋ถ๊ฐ)

<br/>

### mounted ๋ณ์๊ฐ false๋ก ์ค์ ๋จ
   - ์ต์ข์ ์ผ๋ก ์์ ฏ์ด ํ๋ฉด์์ ํ์ฐฉ๋จ  
      (์ด ์ํ์์ state ๊ฐ์ฒด๋ ๊ฒฐ์ฝ ๋ค์ mount๋์ง ์์ผ๋ฉฐ, setState()๊ฐ ํธ์ถ๋๋ฉด ์๋ฌ๋ฐ์)

<br/>
<br/>


### ์์ ์ฝ๋ 

```dart
import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(
      title: 'Stateful ์์ ฏ ๋ฐ๋ชจ',
      home: Scaffold(
        appBar: AppBar(title: Text('Stateful ์์ ฏ ๋ฐ๋ชจ')),
        body: _MyStatefulWidget(),
      ),
    ));

class _MyStatefulWidget extends StatefulWidget {
  @override
  State createState() => _MyStatefulWidgetState();
}

class _MyStatefulWidgetState extends State<_MyStatefulWidget> {
  String _buttonState;

  @override
  void initState() {
      //1. Stateful ์์ ฏ์ด ์์ฑ๋  ๋ ํ๋ฒ๋ง ํธ์ถ๋จ
      //๋ณดํต ํ์ํ ๋ณ์๋ฅผ ์ด๊ธฐํํ  ๋ ์ฌ์ฉํจ
    super.initState();
    print('initState(): ๊ธฐ๋ณธ๊ฐ์ ์ค์ ํฉ๋๋ค.');
    _buttonState = 'OFF';
  }

  @override
  void didChangeDependencies() {
    print('didChangeDependencies() ํธ์ถ๋จ');
  }

  @override
  Widget build(BuildContext context) {
      //2. ์์ ฏ์ ๋ฐํํจ
      //setState() ํจ์๊ฐ ํธ์ถ๋๋ฉด ์ด ๋ฉ์๋๋ ์ธ์ ๋ ์ฌ์คํ๋จ
      //๋ฐ๋ผ์ ์ค๋ ๊ฑธ๋ฆฌ๋ ๊ณ์ฐ์ ๋ด๋ถ์ ํฌํจ๋๋ฉด ์๋จ
      //๋ฒํผ์ ๋๋ฅด๋ฉด _onClick ๋ฉ์๋๊ฐ ํธ์ถ๋จ
    print('build() ํธ์ถ๋จ');
    return Column(
      children: <Widget>[
        RaisedButton(
          child: Text('๋ฒํผ์ ๋๋ฅด์ธ์'),
          onPressed: _onClick,
        ),
        Row(
          children: <Widget>[
            Text('๋ฒํผ ์ํ: '),
            Text(_buttonState), 
            //4. ๋ด๋ถ ๋ณ์์ธ _buttonState ๋ณ๊ฒฝ์ผ๋ก ํ๋ฉด์ด ์๋๊ฐฑ์ ๋จ (์ ์ธ์  ํ๋ก๊ทธ๋๋ฐ ๋ฐฉ์)
          ],
        )
      ],
    );
  }

  void _onClick() {
      //3. setState() ๋ฉ์๋ ํธ์ถ
    print('_onClick() ํธ์ถ๋จ');
    setState(() {
      print('setState() ํธ์ถ๋จ');
      if (_buttonState == 'OFF') {
        _buttonState = 'ON';
      } else {
        _buttonState = 'OFF';
      }
    });
  }

  @override
  void didUpdateWidget(_MyStatefulWidget oldWidget) {
    print('didUpdateWidget()');
  }

  @override
  void deactivate() {
    print('deactivate()');
  }

  @override
  void dispose() {
    print('dispose()');
  }
}
```

```dart
//console ๊ฒฐ๊ณผ๋??
flutter: initState(): ๊ธฐ๋ณธ๊ฐ์ ์ค์ ํฉ๋๋ค.
flutter: didChangeDependencies() ํธ์ถ๋จ
flutter: build() ํธ์ถ๋จ
flutter: build() ํธ์ถ๋จ //์ฒ์ ์คํ์ ์ฌ๊ธฐ๊น์ง ์๋ํธ์ถ
flutter: _onClick() ํธ์ถ๋จ //๋ฒํผ ํด๋ฆญ์
flutter: setState() ํธ์ถ๋จ
flutter: build() ํธ์ถ๋จ
flutter: _onClick() ํธ์ถ๋จ //๋ฒํผ ํด๋ฆญ์
flutter: setState() ํธ์ถ๋จ
flutter: build() ํธ์ถ๋จ
```

<br/>

![2020-02-27 19-38-02 2020-02-27 19_42_33](https://user-images.githubusercontent.com/55340876/75437283-550cec00-5999-11ea-93ef-c6dde7f5dd28.gif)

<br/>
<br/>
<br/>

![1_HU-fbS_mE_zBGbyZiJCuvg](https://user-images.githubusercontent.com/55340876/75436664-4ffb6d00-5998-11ea-88e5-85d62d12ffb0.png)


<br/>
<br/>
<br/>

![1_uyRJ8g2st03YvpEgsrf2Ow](https://user-images.githubusercontent.com/55340876/75436663-4ffb6d00-5998-11ea-9bb7-4ae90d53220c.png)



<br/>
<br/>
<br/>

<img width="969" alt="eQ688" src="https://user-images.githubusercontent.com/55340876/75436665-50940380-5998-11ea-9729-49755d1ba8d8.png">





<br/>
<br/>
<br/>


---
---

# Reference  
- ์ฒ์ ๋ฐฐ์ฐ๋ ํ๋ฌํฐ (๋์)
- [Stateful Widget Lifecycle](https://jaceshim.github.io/2019/01/28/flutter-study-stateful-widget-lifecycle/)
- [Flutter State Management](https://medium.com/flutter-korea/flutter-state-management-%EC%8B%9C%EC%9E%91-a5408f7a86dd)