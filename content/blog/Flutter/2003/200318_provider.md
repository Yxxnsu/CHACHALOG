---
title: 'π [Flutter] Provider β­οΈβ­οΈβ­οΈβ­οΈβ­οΈ'
date: 2020-03-18 01:02:00
category: 'Flutter'
draft: false 
showToc: true
---

# Provider

λ¦¬μ‘νΈλ‘ ννλ‘μ νΈ ν  λΉμμλ μνκ΄λ¦¬ λλ¬Έμ λ©λΆμ€κ³  λ­κ° λ­μ§ κ°λ μμμ λκ° μμλ€.  
_~~μ¬μ€ μ§κΈλ λ¦¬λμ€ λΆλΆμ λλ¬΄ μ΄λ ΅λ€~~_   
μΌνλͺ°μμ μ₯λ°κ΅¬λ κ΄λ¦¬κ° κ·Έλ κ² λ³΅μ‘μλ¬μ΄κ±°μλ€λ..  

- μ¬μ©μ νκ²½μ€μ 
- λ‘κ·ΈμΈ μ λ³΄
- μμ λ€νΈμνΉ μ±μ μλ¦Ό
- μ μ μκ±°λ μ±μ μ₯λ°κ΅¬λ
- λ΄μ€ μ±μμ κΈ°μ¬ μ½κΈ° / μ½μ§ μμ μν 

λ±λ±   
μ±μ λ§μ κ³³μμ μνλ₯Ό κ³΅μ νκ³  κ·Έ μνλ€μ μ μ μ νλμ λ°λΌ λ³ννλ€.   

Flutter μ­μλ μνκ΄λ¦¬λ₯Ό νλ λ°©λ²μ λ§λ€.  
κ°μ₯ λνμ μΈ κ±Έλ‘ λ€μλ©΄ BLoC λ Provider  
BLoC λ κ°λ¨νκ±° νλ ν λΌν΄λ ν΄λμ€λ₯Ό 4κ°λ λ§λ€μ΄μ€μΌν΄μ λκ°μ νλ¦°μ΄λ μ°κΈ° μ΄λ ΅λ€.  
λ¬Έμλ§ λ΄λ λ¨Έλ¦¬ μνλλΌ..  

κ·Έλμ κ΅¬κΈμμλ μΆμ² λ ν΄μ£Όλ Providerλ₯Ό ν΄λ‘ μ½λ© νλ©΄μ μ¨λ³΄λλ°   
μ΄ν΄λ μ¬μ κ³  μ°κΈ°λ νΈν κ² κ°λ€.  

## μ½λ 

Provider λ λ΄λΆμ μΌλ‘ μ°λ λ°©λ²μ΄ λͺκ°μ§κ° μμ§λ§ ν¬κ² 2κ°μ§λ‘ λ³΄μ.  
- Provider.of
   - context μ°Έμ‘°
- Consumer
   - context μ°ΎκΈ° νλ€ λ 

μΌλ¨ μμ§ λ₯νκ² λ§λ³Έμ μ΄ μμΌλ λ‘κΈ΄νμ΄μ§μ μκ²λΌλ μ¬μ©ν΄λ³Έ μ½λλ₯Ό λ³΄μ!  


`join_ or_login.dart`

```dart
...

//ChangeNotifier Provider μ ν΄λΉ μ€λΈμ νΈκ° λ³κ²½λ  λλ§λ€ νμμ λͺ¨λ  μμ ―λ€μ μλ¦Όμ λ°μ
class JoinOrLogin extends ChangeNotifier {
  //κ°μ΄ λ³κ²½λμ§ μκ²λ νλΌμ΄λΉ νμμΌλ‘ μ μΈ
  bool _isJoin = false;

  bool get isJoin => _isJoin;

  //μ€νλ λλ§λ€ κ°μ λ³κ²½ν΄μ€
  void toggle() {
    _isJoin = !_isJoin;
    //λ°μ΄ν°κ° λ³κ²½λλ©΄ μ¬μ©νκ³ μλ μμ ―λ€μκ² μλ¦Όμ λ³΄λ
    notifyListeners();
  }
}
```

`main.dart`

```dart
...

    return MaterialApp(
      debugShowCheckedModeBanner: false,
      //μ΄λ€ λ°μ΄ν°λ₯Ό μ κ³΅ν΄μ£Όλμ§ λ°μ΄ν° νμ νμ κΈ°μ¬
      //μ¬κΈ°μ λͺμλ κ°μ Providerλ₯Ό μ΄μ©ν΄ AuthPage() λͺ¨λ κ³³μμ μ κ·Ό κ°λ₯νλ€
      //μ΄λμ΄ κ°μΌ νμ μμ ―λ€μ λͺ¨λ μ κ·Ό κ°λ₯νλ¨ λ§
      home: ChangeNotifierProvider<JoinOrLogin>.value(
        //μ²« κ°(μ€λΈμ νΈ μμ±ν΄λκ±°)μ νμλ‘ μ λ¬ν΄μΌ ν¨
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

//CustomPaint : μΊλ²μ€λ₯Ό μ κ³΅νκ³  νμΈνΈ λͺλ Ήμ μ€ν
//CustomPaint μμ ―μ μμ
class LoginBackground extends CustomPainter {
  final bool isJoin;

  //νμκ°μΌλ‘ λͺμν΄μ μ΄κΈ°ν
  LoginBackground({@required this.isJoin});

  @override
  //κ·Έλ¦Ό κ·Έλ¦¬λ κ³³
  void paint(Canvas canvas, Size size) {
    //.. : λμΌ κ°μ²΄μ μ¬λ¬ λ©μλλ₯Ό νΈμΆν΄μΌνλ κ²½μ°, λμΌν νκ²μ λ°λ³΅νμ§ μμλ λ¨
    //κ³λ¨μ νκΈ°λ²(cascade)
//    ex)
//    Employee employee = Employee()
//    ..name = 'Cha'
//    ..setAge(29)
//    ..showInfo();
    Paint paint = Paint()
      //μΌν­μ°μ°μ μ¬μ©
      ..color = isJoin ? Colors.redAccent : Colors.blueAccent;
    canvas.drawCircle(
        Offset(size.width * 0.5, size.height * 0.2), size.height * 0.5, paint);
  }

  @override
  //1μ΄μ 60νλ μμ΄ λλλ° κ·Έκ² λλλμ λ·λ°°κ²½λ λ€μ κ·Έλ¦¬λλ λ§λλ~
  bool shouldRepaint(CustomPainter oldDelegate) {
    //λ€μ κ·Έλ¦¬μ§ μλλ€
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
          //CustomPaint : μΊλ²μ€λ₯Ό μ κ³΅νκ³  νμΈνΈ λͺλ Ήμ μ€ν
          CustomPaint(
            size: size,
            painter: LoginBackground(
                isJoin:
                    //Provider.of<μ°Ύκ³ μλ.μΈ κ°> λ₯Ό ν΅ν΄ κ°μ κ°μ Έμμ μΈμ μμ
                    Provider.of<JoinOrLogin>(context, listen: true).isJoin),
          ),

...

        //μ»¨μλ¨Έ(Provider μ¬μ©λ² μ€ νλ)λ₯Ό μ΄μ©ν΄μ λΉλμκ² context, value, child λ₯Ό λ°κ³ 
        //μ¬κΈ°μ valueλ₯Ό μ¬μ©ν΄μ ν΄λΉ κ°μ κ°μ Έμ¨λ€
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
  //λ°λ μΈμκ°μ΄ μλ€λ©΄ get ν€μλλ‘ μμ±νλ€. κ°μ Έμ¬λλ () κ΄νΈ μλ΅
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
`ChangeNotifier` λ₯Ό μμλ°μ ν΄λμ€λ₯Ό νλ μμ±νκ³    
`notifyListeners();` μλμΌλ‘ λ°μ΄ν°κ° λ³νλ©΄ κ·Έ κ°μ μ°κ³ μλ μ λ€μκ² μλμ λ³΄λ΄μ£Όκ³ !  
(μΈνΈλΌκ³  λ³΄λ©΄ λλ€)   

`ChangeNotifierProvider` μ valueμλ μμ±ν ν΄λμ€λ₯Ό μ£Όκ³ ,  
μν΄μλ νμ μμ μμ ―λ€μκ² κ·Έ κ°μ κ³΅μ ν  μ μλ€.  

κ°μΌ νμ μμ ―λ€ μ€μμ λ΄κ° κ°μ λ°κ³  μΆμ μ νν κ°μ  
`Provider.of` λ‘ κ°μ λ°κ±°λ  
**contextλ₯Ό κ°μ Έμ€κΈ° μ΄λ €μ°λ©΄**`Consumer` λ₯Ό λ°μμ κ°λ€μ°λ©΄ λλ€! 
