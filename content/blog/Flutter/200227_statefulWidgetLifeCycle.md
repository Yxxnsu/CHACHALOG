---
title: '💎 [Flutter] Stateful 위젯의 LifeCycle'
date: 2020-02-27 19:35:00
category: 'Flutter'
draft: false
showToc: true
---

생명주기 메소드 추가 : 안드로이드 스튜디오 기준 ``ctrl + o``   
- Stateless 위젯은 라이프사이클이 없음  
- Stateful 위젯은 State 클래스를 통해 라이프사이클을 지원함

# LifeCycle 메소드

### StatefulWidget.createState()
   - 상태를 생성
   - 이 메서드를 제외하고 나머지는 모두 State 클래스 내부에 존재한다.
  
<br/>

### mounted 변수가 true가 됨
   - 화면에 위젯이 부착된 상태
   - createState가 state클래스를 생성하면 buildContext는 state에 할당 됨   
    (BuildContext는 위젯이 배치된 위젯 트리의 위치를 단순화 한 것)
    모든 위젯은 bool 형식의 this.mounted 속성을 가지고 있다.   
    buildContext가 할당되면 true를 리턴한다.  
     위젯이 unmounted상태일때 setState를 호출하면 error가 발생한다.

<br/>

### initState()
   - 위젯이 생성될 때 가장 처음 호출
   - 상태를 초기화함
   - 단 한번만 호출
   - super.initState() 을 반드시 호출해야함
  
<br/>

### didChangeDependencies()
   - 상태 객체의 의존성이 변경되면 호출
   - initState() 다음에 호출
  
<br/>

### build()
   - (필수!!!!)
   - 위젯을 화면에 표시하는 메소드
   - 화면에 표시할 위젯을 반환해야함   
      (재정의 대상(@override)이고 반드시 Widget을 리턴해야 함)

<br/>

### didUpdateWidget() 
   - 위젯의 설정이 변경될 때 호출  
      (부모 위젯이 변경되어 이 위젯을 재 구성해야 하는 경우)  

<br/>

### setState()
   - 위젯의 상태를 갱신
   - 이 메소드를 실행하면 위젯을 처음부터 다시 만들지만 initState() 메소드는 호출되지 않음
   - '데이터가 변경되었음’을 프레임워크에 알리는데 사용되며 build context의 위젯을 다시 빌드하게 함
   - setState()는 비동기적이 않은 callback을 사용함 (callback으로 비동기를 사용할 수 없다는 말임)

<br/>

### deactivate()
   - 상태 객체가 위젯 트리에서 제거됨  
      (경우에 따라 다시 추가될 수도 있음)
  
<br/>

### dispose()
   - 상태 객체가 위젯 트리에서 영구 제거됨  
      (이 메소드가 호출되면 상태 객체는 재사용 불가)

<br/>

### mounted 변수가 false로 설정됨
   - 최종적으로 위젯이 화면에서 탈착됨  
      (이 상태에서 state 객체는 결코 다시 mount되지 않으며, setState()가 호출되면 에러발생)

<br/>
<br/>


### 예제코드 

```dart
import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(
      title: 'Stateful 위젯 데모',
      home: Scaffold(
        appBar: AppBar(title: Text('Stateful 위젯 데모')),
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
      //1. Stateful 위젯이 생성될 때 한번만 호출됨
      //보통 필요한 변수를 초기화할 때 사용함
    super.initState();
    print('initState(): 기본값을 설정합니다.');
    _buttonState = 'OFF';
  }

  @override
  void didChangeDependencies() {
    print('didChangeDependencies() 호출됨');
  }

  @override
  Widget build(BuildContext context) {
      //2. 위젯을 반환함
      //setState() 함수가 호출되면 이 메소드는 언제는 재실행됨
      //따라서 오래 걸리는 계산은 내부에 포함되면 안됨
      //버튼을 누르면 _onClick 메소드가 호출됨
    print('build() 호출됨');
    return Column(
      children: <Widget>[
        RaisedButton(
          child: Text('버튼을 누르세요'),
          onPressed: _onClick,
        ),
        Row(
          children: <Widget>[
            Text('버튼 상태: '),
            Text(_buttonState), 
            //4. 내부 변수인 _buttonState 변경으로 화면이 자동갱신됨 (선언적 프로그래밍 방식)
          ],
        )
      ],
    );
  }

  void _onClick() {
      //3. setState() 메소드 호출
    print('_onClick() 호출됨');
    setState(() {
      print('setState() 호출됨');
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
//console 결과는??
flutter: initState(): 기본값을 설정합니다.
flutter: didChangeDependencies() 호출됨
flutter: build() 호출됨
flutter: build() 호출됨 //처음 실행시 여기까지 자동호출
flutter: _onClick() 호출됨 //버튼 클릭시
flutter: setState() 호출됨
flutter: build() 호출됨
flutter: _onClick() 호출됨 //버튼 클릭시
flutter: setState() 호출됨
flutter: build() 호출됨
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
- 처음 배우는 플러터 (도서)
- [Stateful Widget Lifecycle](https://jaceshim.github.io/2019/01/28/flutter-study-stateful-widget-lifecycle/)
- [Flutter State Management](https://medium.com/flutter-korea/flutter-state-management-%EC%8B%9C%EC%9E%91-a5408f7a86dd)