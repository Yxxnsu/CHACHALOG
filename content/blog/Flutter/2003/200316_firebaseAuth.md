---
title: '๐ [Flutter] Firebase Auth / ํ๋ถ ๋ก๊ธด'
date: 2020-03-16 22:50:00
category: 'Flutter'
draft: false 
showToc: true
---

ํ๋ถ SDK๋ฅผ ํตํด์ ํ๋ถ ๋ก๊ทธ์ธ์ ํ๋ฉด ํ๋ถ์์ token ์ ์ฃผ๋๋ฐ ๊ทธ๊ฑธ ํ๋ฒ ์ ๊ฐ๋ค์ฃผ๊ณ ,  
ํ๋ฒ  Authentication ์ด ๊ทธ ํ๋ถ token ์ ๊ฐ์ง๊ณ  ๋ด๋ถ์์ ํด๊ฒฐํ๋ค


# ๋ผ์ด๋ธ๋ฌ๋ฆฌ ์ค์น

[firebase_auth](https://pub.dev/packages/firebase_auth) ๋ผ์ด๋ธ๋ฌ๋ฆฌ ์ค์น

`android > build.gradle`

```dart
    dependencies {
        classpath 'com.android.tools.build:gradle:3.5.3' //์ถ๊ฐ
        
        ...
        
        classpath 'com.google.gms:google-services:4.3.3' //์ถ๊ฐ
    }
```

`android > app > build.gradle`

```dart
    defaultConfig {
        
        ...
        
        minSdkVersion 21 //์ถ๊ฐ (๋ฉ์๋๊ฐ 64k๊ฐ ์ด๊ณผํ๋ฉด ๋น๋์ค๋ฅ๊ฐ ๋ฐ์ํ๊ธฐ ๋๋ฌธ์ ๋ฃ์ด์ค)
		
        ...
        
        multiDexEnabled true //์ถ๊ฐ
    }
    
dependencies {
	
    ...

    implementation 'androidx.multidex:multidex:2.0.1' //์ถ๊ฐ
}

apply plugin: 'com.google.gms.google-services' //์ถ๊ฐ
```

`pubspec.yaml`

```dart
    dependencies:
        firebase_auth: ^0.15.5+2 //์ถ๊ฐ
```

**ios ๋ ๋ฐ๋ก ํ  ๊ฑด ์๋ค**

# ์ฝ์ ์ธํ

1. firebase ๊ฐ์ ํ๋ก์ ํธ ์์ฑ
2. ์ด๋ฉ์ผ, ํ์ด์ค๋ถ Enable ์ค์ 
3. ์ฑ์ firebase ์ถ๊ฐ (ํด๋น ํ๋ก์ ํธ > ํ๋ก์ ํธ ์ค์  > ํ๋จ)
   - `ios` bundle ID ๊ฒฝ๋ก : ํ๋ก์ ํธ์์ Xcode ์ด๊ธฐ > Runner > General > Bundle Identifier ๋ถ๋ถ ๋ณต๋ถ > Register app ํด๋ฆญ
   - ๋ค์ด๋ก๋ ๋ฐ์ config ํ์ผ ๋ถ์ด๋ ๊ฒฝ๋ก : ios > Runner ์ ๋ถ์ฌ๋ฃ๊ธฐ > Xcode ์ด๊ธฐ > Runner > Runner (๋๋ฒ์งธ ๋ฌ๋)์ ์์ค์์ ๋ณต๋ถํ ํ์ผ ์ฐ๋ง์ฐ์ค ํด๋ฆญํด์ Reveal in Finder ํด๋ฆญํด์ ์ด๊ณ , ํด๋น ๋๋ฒ์งธ ๋ฌ๋์ ๋๋๊ทธํด์ ๋ถ์ด๊ธฐ
   - ๊ทธ ํ, ๋ฅ์ค๋จ ๋ฅ์คํธ ์ปจํฐ๋ด ํ๋ฉด ๋จ
   - `์๋๋ก์ด๋` package name ๊ฒฝ๋ก :  android > app > src > main > AndroidManifest.xml > ์๋จ์ package='์๋ถ๋ถ๋ง๋ณต์ฌ' > ํด์ ๋ถ์ฌ๋ฃ๊ธฐ > Register app ํด๋ฆญ
   - ๋ค์ด๋ก๋ ๋ฐ์ config ํ์ผ ๋ถ์ด๋ ๊ฒฝ๋ก : android > app ํด๋ ์์ ๋ฃ๊ธฐ
   - ๊ทธ ํ, ๋ฅ์ค๋จ ๋ฅ์คํธ ์ปจํฐ๋ด ํ๋ฉด ๋จ
   

# ํ๋ถ ๋ก๊ทธ์ธ ์์

1. [flutter_ facebook_login](https://pub.dev/packages/flutter_facebook_login) ๋ผ์ด๋ธ๋ฌ๋ฆฌ ์ค์น

`pubspec.yaml`

```dart
    dependencies:
        flutter_facebook_login: ^3.0.0 //์ถ๊ฐ
```

2. ํ๋ถ ๋ก๊ทธ์ธ ํต์คํํธ ์ฐธ๊ณ ํด์ ๊น๊ธฐ (์ฑ์์ด๋ ํ์)
   - [์๋๋ก์ด๋ ํต์คํํธ](https://developers.facebook.com/docs/facebook-login/android)
      - 4. ๋ฆฌ์์ค ๋ฐ ๋ฉ๋ํ์คํธ ์์  **์ดํํ๊ธฐ**
      - 5. ํจํค์ง ์ด๋ฆ ๋ฐ ๊ธฐ๋ณธ ํด๋์ค๋ฅผ ์ฑ๊ณผ ์ฐ๊ฒฐ **์ดํํ๊ธฐ**
      - 6. ์ฑ์ฉ ๊ฐ๋ฐ ๋ฐ ๋ฆด๋ฆฌ์ค ํค ํด์ ์ ๊ณต **์ดํํ๊ธฐ**
      - 7. ์ฑ์ ๋ํ SSO ํ์ฑํ **์ดํํ๊ธฐ**
   - [ios ํต์คํํธ](https://developers.facebook.com/docs/facebook-login/ios)
      - 3. Facebook์ ์ฑ ๋ฑ๋ก ๋ฐ ๊ตฌ์ฑ **์ดํํ๊ธฐ**
      - 4. ํ๋ก์ ํธ ๊ตฌ์ฑ **์ดํํ๊ธฐ**


# ํ๋ถ ๋ก๊ทธ์ธ ์ฌ์ฉํด๋ณด๊ธฐ

`main.dart`

```dart
...

void main() => runApp(MyApp());

//์ฒซ๋ฒ์งธ ๋ฐ์ดํฐ
bool isItFirstData = true;

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(primarySwatch: white),
      home: StreamBuilder<FirebaseUser>(
        //์ ์ ๊ฐ ๋ก๊ทธ์ธํ๋ฉด ์คํธ๋ฆผ ํตํด์ onAuthStateChanged๊ฐ ํธ๋ฆฌ๊ฑฐ๊ฐ ๋์,
        //<FirebaseUser> ๋ฅผ snapshot ์ ํตํด ๋์ ธ์ฃผ๋ฉด MainPage๋ก ์ด๋
        //**์ค์! ์ฌ๊ธฐ์ ๋์ ธ์ง๋ ์ฒซ๋ฒ์งธ ๋ฐ์ดํฐ ๊ฐ์ snapshot์ ๋ฐ์ดํฐ๊ฐ ์๋ null๊ฐ์ด๋ค. (๋ฒ๋ ค์ผํ๋ ๊ฐ)
        stream: FirebaseAuth.instance.onAuthStateChanged,
        builder: (context, snapshot) {
          //์ฒซ๋ฒ์งธ ๋ฐ์ดํฐ๊ฐ ๋ค์ด์ค๋ฉด false ๋ก ๋ฐ๊พธ๊ณ  (๋ฒ๋ ค์ผํ๋ ๊ฐ์ด๋๊น), ๋ก๋ฉ์ ๋๋ฆฐ๋ค
          if (isItFirstData) {
            isItFirstData = false;
            return MyProgressIndicator();
            //๋๋ฒ์งธ ๋ฐ์ดํฐ๋ถํฐ๋ <FirebaseUser>๊ฐ ์๋ค๋ฉด(์ ์ ๊ฐ ์๋ค๋ฉด) MainPage๋ก ๊ฐ๊ณ ,
            //์์ผ๋ฉด AuthPage ๋ก ์ด๋
          } else {
            if (snapshot.hasData) {
              return MainPage();
            }
            return AuthPage();
          }
        },
      ),
    );
  }
}
```

`sign_ in_form.dart`

```dart
...

class _SignInFormState extends State<SignInForm> {
  GlobalKey<FormState> _formKey = GlobalKey<FormState>();
  TextEditingController _emailController = TextEditingController();
  TextEditingController _pwController = TextEditingController();

  //TextEditingController ๋ฅผ ์ฌ์ฉํ ํ์๋ dispose๋ฅผ ์ฌ์ฉํด์ ๋ฉ๋ชจ๋ฆฌ ๋ฆญ์ ๋ฐฉ์ง.
  //๋ฉ๋ชจ๋ฆฌ ๋์(memory leak) ํ์์ ์ปดํจํฐ ํ๋ก๊ทธ๋จ์ด ํ์ํ์ง ์์ ๋ฉ๋ชจ๋ฆฌ๋ฅผ ๊ณ์ ์ ์ ํ๊ณ  ์๋ ํ์์ผ๋ก,
  //ํ ๋น๋ ๋ฉ๋ชจ๋ฆฌ๋ฅผ ์ฌ์ฉํ ๋ค์ ๋ฐํํ์ง ์๋ ๊ฒ์ด ๋์ ๋๋ฉด ๋ฉ๋ชจ๋ฆฌ๊ฐ ๋ญ๋น๋๋ค.
  @override
  void dispose() {
    _emailController.dispose();
    _pwController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      //์ฐฝ์ ์๋์ชฝ ์ฝ์์ ํผํ๊ธฐ ์ํด ์์ ํฌ๊ธฐ๋ฅผ ์กฐ์ ํด์ผํ๋์ง ์ฌ๋ถ
      //์๋ฅผ ๋ค์ด, ์ค์บ ํด๋ ์์ ์จ ์คํฌ๋ฆฐ ํค๋ณด๋๊ฐ ํ์๋๋ ๊ฒฝ์ฐ,
      //ํค๋ณด๋๊ฐ ๊ฒน์น์ง ์๋๋ก ๋ณธ์ฒด ํฌ๊ธฐ๋ฅผ ์กฐ์ ํ  ์ ์์ผ๋ฏ๋ก ๋ณธ์ฒด ๋ด๋ถ์ ์์ ฏ์ด ํค๋ณด๋์ ์ํด ๊ฐ๋ ค์ง์ง ์์.
      //๊ธฐ๋ณธ๊ฐ์ true์ด๋ฉฐ null ์ผ ์ ์์
      resizeToAvoidBottomInset: true,
      body: Padding(
        padding: EdgeInsets.all(common_gap),
        child: Form(
          key: _formKey,
          child: ListView(
            shrinkWrap: true,
            children: <Widget>[
              //์์ ฏ ์ฌ์ด ๊ณต๊ฐ์ ์ค
              SizedBox(height: 80),
              Image.asset('assets/insta_text_logo.png'),
              SizedBox(height: 20),
              TextFormField(
                //์ปค์์์
                cursorColor: Colors.blue,
                //์ปค์๋๊ป
                cursorWidth: 2,
                controller: _emailController,
                decoration: getTextFieldDecor('์ ํ๋ฒํธ, ์ฌ์ฉ์ ์ด๋ฆ ๋๋ ์ด๋ฉ์ผ'),
                //์ ์ ๊ฐ ์๋ ฅํ ๊ฒ์ ๋ํ ์ ํจ์ฑ ๊ฒ์ฌ
                validator: (String value) {
                  //value๊ฐ ๋น์ด์๊ฑฐ๋ @ ๋ฅผ ํฌํจ ์ํ๊ณ  ์์ผ๋ฉด ์๋ฌ ๋ฉ์ธ์ง ๋์ง๊ณ ,
                  if (value.isEmpty || !value.contains('@')) {
                    return '์ด๋ฉ์ผ ์ฃผ์๋ฅผ ๋ค์ ํ์ธํด์ฃผ์ธ์.';
                  }
                  //์๋๋ฉด ๊ทธ๋ฅ null ๊ฐ ๋์ ธ์ ์๋ฌ์์ด ํต๊ณผ
                  return null;
                },
              ),
              SizedBox(height: 12),
              TextFormField(
                //๋น๋ฒ ๋ก๋ก์ฒ๋ฆฌ
                obscureText: true,
                cursorColor: Colors.blue,
                controller: _pwController,
                decoration: getTextFieldDecor('๋น๋ฐ๋ฒํธ'),
                validator: (String value) {
                  //value๊ฐ ๋น์ด์์ผ๋ฉด ์๋ฌ ๋ฉ์ธ์ง ํฌ์ฒ
                  if (value.isEmpty) {
                    return '๋น๋ฐ๋ฒํธ๋ฅผ ์๋ ฅํด์ฃผ์ธ์.';
                  }
                  //์๋๋ฉด ํต๊ณผ
                  return null;
                },
              ),
              SizedBox(height: 20),
              Text(
                '๋น๋ฐ๋ฒํธ๋ฅผ ์์ผ์จ๋์?',
                textAlign: TextAlign.end,
                style: TextStyle(
                  color: Colors.blue[700],
                  fontWeight: FontWeight.w600,
                ),
              ),
              SizedBox(height: 20),
              FlatButton(
                padding: EdgeInsets.all(15),
                onPressed: () {
                  //์ ํจ์ฑ ๊ฒ์ฆ์ด ์๋ฒฝํ ๋๋ฉด ํ์ด์ด๋ฒ ์ด์ค์ ๋์ ธ์ค
                  if (_formKey.currentState.validate()) {
                    _login;
                  }
                },
                child: Text(
                  '๋ก๊ทธ์ธ',
                  style: TextStyle(color: Colors.white, fontSize: 16),
                ),

...

  get _login async {
    final AuthResult result = await FirebaseAuth.instance
        .signInWithEmailAndPassword(
            email: _emailController.text, password: _pwController.text);

    //์ ์  ํ์ธ
    final FirebaseUser user = result.user;

    //์ ์ ๊ฐ null ์ด๋ฉด ์ค๋ต๋ฐ๋ก ์๋ฌ ๋์ง
    if (user == null) {
      simpleSnackbar(context, 'Please try again later!');
    }
  }

...
```



`sign_ up_form.dart`

```dart
... 
//์ฃผ์์ฒ๋ฆฌ๋ ์๊ณต๊ฐ์ ์๋จ sign_in_form.dart ์ ๋ด์ฉ ๋์ผ
//์ฃผ์์ฒ๋ฆฌ๋ ์๊ณต๊ฐ์ ์๋จ sign_in_form.dart ์ ๋ด์ฉ ๋์ผ
//์ฃผ์์ฒ๋ฆฌ๋ ์๊ณต๊ฐ์ ์๋จ sign_in_form.dart ์ ๋ด์ฉ ๋์ผ

              TextFormField(
                //๋น๋ฒ ๋ก๋ก์ฒ๋ฆฌ
                obscureText: true,
                cursorColor: Colors.blue,
                controller: _cpwController,
                decoration: getTextFieldDecor('๋น๋ฐ๋ฒํธ ์ฌํ์ธ'),
                validator: (String value) {
                  //value๊ฐ ๋น์ด์๊ฑฐ๋ ์๋จ ๋น๋ฒ๊ณผ ๋งค์น๊ฐ ์๋๋ฉด ์๋ฌ ๋ฉ์ธ์ง ํฌ์ฒ
                  if (value.isEmpty || value != _pwController.text) {
                    return '๋น๋ฐ๋ฒํธ๊ฐ ํ๋ ธ์ต๋๋ค.';
                  }
                  //์๋๋ฉด ํต๊ณผ
                  return null;
                },
              ),
              SizedBox(height: 20),
              FlatButton(
                padding: EdgeInsets.all(15),
                onPressed: () {
                  //์ ํจ์ฑ ๊ฒ์ฆ์ด ์๋ฒฝํ ๋๋ฉด ํ์ด์ด๋ฒ ์ด์ค์ ๋์ ธ์ค
                  if (_formKey.currentState.validate()) {
                    _register;
                  }
                },
                child: Text(
                  'ํ์๊ฐ์',
                  style: TextStyle(color: Colors.white, fontSize: 16),
                ),
                
...

  get _register async {
    final AuthResult result =
        await FirebaseAuth.instance.createUserWithEmailAndPassword(
      email: _emailController.text,
      password: _pwController.text,
    );

    //์ ์  ํ์ธ
    final FirebaseUser user = result.user;

    //์ ์ ๊ฐ null ์ด๋ฉด ์ค๋ต๋ฐ๋ก ์๋ฌ ๋์ง
    if (user == null) {
      simpleSnackbar(context, 'please try again later!');
    }
  }

...
```

`facebook_login.dart`

```dart
...

void signInFacebook(BuildContext context) async {
  //ํ๋ถ SDK๋ฅผ ์ฌ์ฉํด์ ์ด๋ฉ์ผ์ ํตํด ๋ก๊ทธ์ธํ๋ค
  final facebookLogin = FacebookLogin();
  //[] ๋ฆฌ์คํธ ์์ email, phonenumber ๋ฑ ํ๋ถ SDK์์ ์ ๊ณตํด์ฃผ๋ ํค์๋๋ก ๋ก๊ธด
  //๊ฐ๊ณ ์ฌ ์ ์๋ ๊ฒ๊ณผ ์๋ ๊ฒ์ด ์์ผ๋ ์ ํ์ธํ์!
  final result = await facebookLogin.logIn(['email']);

  //3๊ฐ์ง ์ํ ์ฒดํฌ
  switch (result.status) {
    //๋ก๊ทธ์ธ ์ฑ๊ณต ์ํ > ์ฑ๊ณตํ๋ฉด token ๊ฐ์ ธ์ด
    case FacebookLoginStatus.loggedIn:
      _handleFacebookToken(context, result.accessToken.token);
      break;
    //์ ์ ๊ฐ ๋ก๊ทธ์ธ ์ทจ์ํ ์ํ (์ค๋ต๋ฐ๋ก ์๋ฌ๋ฉ์ธ์ง ๋์ง)
    //์ค๋ต๋ฐ์์ ์๋ฌ๊ฐ ๋๋ค๋ฉด context ๊ฐ Scaffold ์์ ์จ๊ฒ ๋ง๋์ง ํ์ธํ  ๊ฒ!
    case FacebookLoginStatus.cancelledByUser:
      simpleSnackbar(context, 'User cancel facebook sign in!');
      break;
    //๋ก๊ทธ์ธ ํ๋ค ์๋ฌ๋ ์ํ (์ค๋ต๋ฐ๋ก ์๋ฌ๋ฉ์ธ์ง ๋์ง)
    case FacebookLoginStatus.error:
      simpleSnackbar(context, 'Error while facebook sign in!');
      break;
  }
}

//ํ๋ถ SDK๋ฅผ ํตํด ๋ก๊ทธ์ธํ result์์ ํ๋ถ์์ ์ค token์ ๊ฐ๊ณ ์์ ํ๋ฒ  auth์ ์ ๋ฌํจ
void _handleFacebookToken(BuildContext context, String token) async {
  //FacebookAuthProvider : firebase_auth ๋ผ์ด๋ธ๋ฌ๋ฆฌ์์ ์ ๊ณตํด์ฃผ๋ API
  //token์ ๋์ ธ์ค์ credential์ ๊ฐ๊ณ ์ด
  final AuthCredential credential = FacebookAuthProvider.getCredential(
    accessToken: token,
  );
  //๊ฐ๊ณ ์จ credential์ ๋์ ธ ๋ก๊ทธ์ธํ ๊ฒฐ๊ณผ์์ user๋ฅผ ๊ฐ๊ณ ์จ๋ค
  final FirebaseUser user =
      (await FirebaseAuth.instance.signInWithCredential(credential)).user;
  //user ๊ฐ ์์ผ๋ฉด ์ค๋ต๋ฐ ์๋ฌ๋ฉ์ธ์ง ํฌ์ฒ
  if (user == null) {
    simpleSnackbar(context, 'Failed to sign in with Facebook.');
  }
}
```