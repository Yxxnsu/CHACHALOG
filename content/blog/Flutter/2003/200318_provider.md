---
title: '💎 [Flutter] Provider ⭐️⭐️⭐️⭐️⭐️'
date: 2020-03-18 01:02:00
category: 'Flutter'
draft: false 
showToc: true
---

# Provider

리액트로 팀프로젝트 할 당시에도 상태관리 때문에 멘붕오고 뭐가 뭔지 감도 안왔을 때가 있었다.  
_~~사실 지금도 리덕스 부분은 너무 어렵다~~_   
쇼핑몰에서 장바구니 관리가 그렇게 복잡시러운거였다니..  

- 사용자 환경설정
- 로그인 정보
- 소셜 네트워킹 앱의 알림
- 전자 상거래 앱의 장바구니
- 뉴스 앱에서 기사 읽기 / 읽지 않은 상태 

등등   
앱은 많은 곳에서 상태를 공유하고 그 상태들은 유저의 행동에 따라 변화한다.   

Flutter 역시도 상태관리를 하는 방법은 많다.  
가장 대표적인 걸로 들자면 BLoC 랑 Provider  
BLoC 는 간단한거 하나 할라해도 클래스를 4개나 만들어줘야해서 나같은 플린이는 쓰기 어렵다.  
문서만 봐도 머리 아프더라..  

그래서 구글에서도 추천 뙇 해주는 Provider를 클론코딩 하면서 써보는데   
이해도 쉬웠고 쓰기도 편한 것 같다.  

## 코드 

Provider 도 내부적으로 쓰는 방법이 몇가지가 있지만 크게 2가지로 보자.  
- Provider.of
   - context 참조
- Consumer
   - context 찾기 힘들 때 

일단 아직 딥하게 맛본적이 없으니 로긴페이지에 얕게라도 사용해본 코드를 보자!  


`join_ or_login.dart`

```dart
...

//ChangeNotifier Provider 은 해당 오브젝트가 변경될 때마다 하위의 모든 위젯들은 알림을 받음
class JoinOrLogin extends ChangeNotifier {
  //값이 변경되지 않게끔 프라이빗 타입으로 선언
  bool _isJoin = false;

  bool get isJoin => _isJoin;

  //실행될때마다 값을 변경해줌
  void toggle() {
    _isJoin = !_isJoin;
    //데이터가 변경되면 사용하고있던 위젯들에게 알림을 보냄
    notifyListeners();
  }
}
```

`main.dart`

```dart
...

    return MaterialApp(
      debugShowCheckedModeBanner: false,
      //어떤 데이터를 제공해주는지 데이터 타입 필수 기재
      //여기에 명시된 값은 Provider를 이용해 AuthPage() 모든곳에서 접근 가능하다
      //이놈이 감싼 하위 위젯들은 모두 접근 가능하단 말
      home: ChangeNotifierProvider<JoinOrLogin>.value(
        //첫 값(오브젝트 생성해둔거)은 필수로 전달해야 함
        value: JoinOrLogin(),
        child: AuthPage(),
      ),
    );
  }
}
```

`login_background.dart`

```dart
...

//CustomPaint : 캔버스를 제공하고 페인트 명령을 실행
//CustomPaint 위젯을 상속
class LoginBackground extends CustomPainter {
  final bool isJoin;

  //필수값으로 명시해서 초기화
  LoginBackground({@required this.isJoin});

  @override
  //그림 그리는 곳
  void paint(Canvas canvas, Size size) {
    //.. : 동일 객체에 여러 메서드를 호출해야하는 경우, 동일한 타겟을 반복하지 않아도 됨
    //계단식 표기법(cascade)
//    ex)
//    Employee employee = Employee()
//    ..name = 'Cha'
//    ..setAge(29)
//    ..showInfo();
    Paint paint = Paint()
      //삼항연산자 사용
      ..color = isJoin ? Colors.redAccent : Colors.blueAccent;
    canvas.drawCircle(
        Offset(size.width * 0.5, size.height * 0.2), size.height * 0.5, paint);
  }

  @override
  //1초에 60프레임이 도는데 그게 도는동안 뒷배경도 다시 그리느냐 마느냐~
  bool shouldRepaint(CustomPainter oldDelegate) {
    //다시 그리지 않는다
    return false;
  }
}
```

`login.dart`

```dart
...

  @override
  Widget build(BuildContext context) {
    final Size size = MediaQuery.of(context).size;

    return Scaffold(
      body: Stack(
        alignment: Alignment.center,
        children: <Widget>[
          //CustomPaint : 캔버스를 제공하고 페인트 명령을 실행
          CustomPaint(
            size: size,
            painter: LoginBackground(
                isJoin:
                    //Provider.of<찾고있는.쓸 값> 를 통해 값을 가져와서 쓸수 있음
                    Provider.of<JoinOrLogin>(context, listen: true).isJoin),
          ),

...

        //컨슈머(Provider 사용법 중 하나)를 이용해서 빌더에게 context, value, child 를 받고
        //여기에 value를 사용해서 해당 값을 가져온다
        Consumer<JoinOrLogin>(
        builder: (context, joinOrLogin, child) => GestureDetector(
            onTap: () {
            joinOrLogin.toggle();
            },
            child: Text(
            joinOrLogin.isJoin
                ? 'Already Have an Account? Sign in'
                : 'Don\'t Have an Account? Create One',
            style: TextStyle(
                color: joinOrLogin.isJoin
                    ? Colors.redAccent
                    : Colors.blueAccent),

...

  //Logo Image
  //받는 인자값이 없다면 get 키워드로 생성한다. 가져올때도 () 괄호 생략
  Widget get _logoImage => Expanded(
        child: Padding(
          padding: const EdgeInsets.only(top: 40, left: 50, right: 50),
          child: FittedBox(
            fit: BoxFit.contain,
            child: Consumer<JoinOrLogin>(
              builder: (context, value, child) => CircleAvatar(
                backgroundImage: AssetImage(
                    value.isJoin ? 'assets/bear.gif' : 'assets/rabbit.gif'),
              ),
            ),
          ),
        ),
      );

  //Login Button
  Widget _authButton(Size size) => Positioned(
        left: size.width * 0.15,
        right: size.width * 0.15,
        bottom: 0,
        child: SizedBox(
          height: 50,
          child: Consumer<JoinOrLogin>(
            builder: (context, value, child) => RaisedButton(
              color: value.isJoin ? Colors.redAccent : Colors.blueAccent,
              child: Text(
                'Login',
                style: TextStyle(fontSize: 20, color: Colors.white),
              ),

...

                SizedBox(height: 8),
                Consumer<JoinOrLogin>(
                  builder: (context, value, child) => Opacity(
                    opacity: value.isJoin ? 0 : 1,
                    child: Text('Forgot Password'),

...
```
`ChangeNotifier` 를 상속받은 클래스를 하나 생성하고   
`notifyListeners();` 요놈으로 데이터가 변하면 그 값을 쓰고있는 애들에게 알람을 보내주고!  
(세트라고 보면 된다)   

`ChangeNotifierProvider` 의 value에는 생성한 클래스를 주고,  
속해있는 하위 자식 위젯들에게 그 값을 공유할 수 있다.  

감싼 하위 위젯들 중에서 내가 값을 받고 싶은 애한테 가서  
`Provider.of` 로 값을 받거나  
**context를 가져오기 어려우면**`Consumer` 를 받아서 갖다쓰면 된다! 
