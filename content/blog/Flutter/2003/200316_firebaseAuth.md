---
title: '💎 [Flutter] Firebase Auth / 페북 로긴'
date: 2020-03-16 22:50:00
category: 'Flutter'
draft: false 
showToc: true
---

페북 SDK를 통해서 페북 로그인을 하면 페북에서 token 을 주는데 그걸 파베에 갖다주고,  
파베 Authentication 이 그 페북 token 을 가지고 내부에서 해결한다


# 라이브러리 설치

[firebase_auth](https://pub.dev/packages/firebase_auth) 라이브러리 설치

`android > build.gradle`

```dart
    dependencies {
        classpath 'com.android.tools.build:gradle:3.5.3' //추가
        
        ...
        
        classpath 'com.google.gms:google-services:4.3.3' //추가
    }
```

`android > app > build.gradle`

```dart
    defaultConfig {
        
        ...
        
        minSdkVersion 21 //추가 (메서드가 64k가 초과하면 빌드오류가 발생하기 때문에 넣어줌)
		
        ...
        
        multiDexEnabled true //추가
    }
    
dependencies {
	
    ...

    implementation 'androidx.multidex:multidex:2.0.1' //추가
}

apply plugin: 'com.google.gms.google-services' //추가
```

`pubspec.yaml`

```dart
    dependencies:
        firebase_auth: ^0.15.5+2 //추가
```

**ios 는 따로 할 건 없다**

# 콘솔 세팅

1. firebase 가서 프로젝트 생성
2. 이메일, 페이스북 Enable 설정
3. 앱에 firebase 추가 (해당 프로젝트 > 프로젝트 설정 > 하단)
   - `ios` bundle ID 경로 : 프로젝트에서 Xcode 열기 > Runner > General > Bundle Identifier 부분 복붙 > Register app 클릭
   - 다운로드 받은 config 파일 붙이는 경로 : ios > Runner 에 붙여넣기 > Xcode 열기 > Runner > Runner (두번째 러너)에 안스에서 복붙한 파일 우마우스 클릭해서 Reveal in Finder 클릭해서 열고, 해당 두번째 러너에 드래그해서 붙이기
   - 그 후, 넥스뜨 넥스트 컨티뉴 하면 됨
   - `안드로이드` package name 경로 :  android > app > src > main > AndroidManifest.xml > 상단에 package='요부분만복사' > 해서 붙여넣기 > Register app 클릭
   - 다운로드 받은 config 파일 붙이는 경로 : android > app 폴더 안에 넣기
   - 그 후, 넥스뜨 넥스트 컨티뉴 하면 됨
   

# 페북 로그인 셋업

1. [flutter_ facebook_login](https://pub.dev/packages/flutter_facebook_login) 라이브러리 설치

`pubspec.yaml`

```dart
    dependencies:
        flutter_facebook_login: ^3.0.0 //추가
```

2. 페북 로그인 퀵스타트 참고해서 깔기 (앱아이디 필수)
   - [안드로이드 퀵스타트](https://developers.facebook.com/docs/facebook-login/android)
      - 4. 리소스 및 메니페스트 수정 **이행하기**
      - 5. 패키지 이름 및 기본 클래스를 앱과 연결 **이행하기**
      - 6. 앱용 개발 및 릴리스 키 해시 제공 **이행하기**
      - 7. 앱에 대한 SSO 활성화 **이행하기**
   - [ios 퀵스타트](https://developers.facebook.com/docs/facebook-login/ios)
      - 3. Facebook에 앱 등록 및 구성 **이행하기**
      - 4. 프로젝트 구성 **이행하기**


# 페북 로그인 사용해보기

`main.dart`

```dart
...

void main() => runApp(MyApp());

//첫번째 데이터
bool isItFirstData = true;

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(primarySwatch: white),
      home: StreamBuilder<FirebaseUser>(
        //유저가 로그인하면 스트림 통해서 onAuthStateChanged가 트리거가 되서,
        //<FirebaseUser> 를 snapshot 을 통해 던져주면 MainPage로 이동
        //**중요! 여기서 던져지는 첫번째 데이터 값은 snapshot에 데이터가 없는 null값이다. (버려야하는 값)
        stream: FirebaseAuth.instance.onAuthStateChanged,
        builder: (context, snapshot) {
          //첫번째 데이터가 들어오면 false 로 바꾸고 (버려야하는 값이니까), 로딩을 돌린다
          if (isItFirstData) {
            isItFirstData = false;
            return MyProgressIndicator();
            //두번째 데이터부터는 <FirebaseUser>가 있다면(유저가 있다면) MainPage로 가고,
            //없으면 AuthPage 로 이동
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

  //TextEditingController 를 사용한 후에는 dispose를 사용해서 메모리 릭을 방지.
  //메모리 누수(memory leak) 현상은 컴퓨터 프로그램이 필요하지 않은 메모리를 계속 점유하고 있는 현상으로,
  //할당된 메모리를 사용한 다음 반환하지 않는 것이 누적되면 메모리가 낭비된다.
  @override
  void dispose() {
    _emailController.dispose();
    _pwController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      //창의 아래쪽 삽입을 피하기 위해 자식 크기를 조정해야하는지 여부
      //예를 들어, 스캐 폴드 위에 온 스크린 키보드가 표시되는 경우,
      //키보드가 겹치지 않도록 본체 크기를 조정할 수 있으므로 본체 내부의 위젯이 키보드에 의해 가려지지 않음.
      //기본값은 true이며 null 일 수 없음
      resizeToAvoidBottomInset: true,
      body: Padding(
        padding: EdgeInsets.all(common_gap),
        child: Form(
          key: _formKey,
          child: ListView(
            shrinkWrap: true,
            children: <Widget>[
              //위젯 사이 공간을 줌
              SizedBox(height: 80),
              Image.asset('assets/insta_text_logo.png'),
              SizedBox(height: 20),
              TextFormField(
                //커서색상
                cursorColor: Colors.blue,
                //커서두께
                cursorWidth: 2,
                controller: _emailController,
                decoration: getTextFieldDecor('전화번호, 사용자 이름 또는 이메일'),
                //유저가 입력한 것에 대한 유효성 검사
                validator: (String value) {
                  //value가 비어있거나 @ 를 포함 안하고 있으면 에러 메세지 던지고,
                  if (value.isEmpty || !value.contains('@')) {
                    return '이메일 주소를 다시 확인해주세요.';
                  }
                  //아니면 그냥 null 값 던져서 에러없이 통과
                  return null;
                },
              ),
              SizedBox(height: 12),
              TextFormField(
                //비번 땡땡처리
                obscureText: true,
                cursorColor: Colors.blue,
                controller: _pwController,
                decoration: getTextFieldDecor('비밀번호'),
                validator: (String value) {
                  //value가 비어있으면 에러 메세지 투척
                  if (value.isEmpty) {
                    return '비밀번호를 입력해주세요.';
                  }
                  //아니면 통과
                  return null;
                },
              ),
              SizedBox(height: 20),
              Text(
                '비밀번호를 잊으셨나요?',
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
                  //유효성 검증이 완벽히 되면 파이어베이스에 던져줌
                  if (_formKey.currentState.validate()) {
                    _login;
                  }
                },
                child: Text(
                  '로그인',
                  style: TextStyle(color: Colors.white, fontSize: 16),
                ),

...

  get _login async {
    final AuthResult result = await FirebaseAuth.instance
        .signInWithEmailAndPassword(
            email: _emailController.text, password: _pwController.text);

    //유저 확인
    final FirebaseUser user = result.user;

    //유저가 null 이면 스낵바로 에러 던짐
    if (user == null) {
      simpleSnackbar(context, 'Please try again later!');
    }
  }

...
```



`sign_ up_form.dart`

```dart
... 
//주석처리된 요공간은 상단 sign_in_form.dart 와 내용 동일
//주석처리된 요공간은 상단 sign_in_form.dart 와 내용 동일
//주석처리된 요공간은 상단 sign_in_form.dart 와 내용 동일

              TextFormField(
                //비번 땡땡처리
                obscureText: true,
                cursorColor: Colors.blue,
                controller: _cpwController,
                decoration: getTextFieldDecor('비밀번호 재확인'),
                validator: (String value) {
                  //value가 비어있거나 상단 비번과 매치가 안되면 에러 메세지 투척
                  if (value.isEmpty || value != _pwController.text) {
                    return '비밀번호가 틀렸습니다.';
                  }
                  //아니면 통과
                  return null;
                },
              ),
              SizedBox(height: 20),
              FlatButton(
                padding: EdgeInsets.all(15),
                onPressed: () {
                  //유효성 검증이 완벽히 되면 파이어베이스에 던져줌
                  if (_formKey.currentState.validate()) {
                    _register;
                  }
                },
                child: Text(
                  '회원가입',
                  style: TextStyle(color: Colors.white, fontSize: 16),
                ),
                
...

  get _register async {
    final AuthResult result =
        await FirebaseAuth.instance.createUserWithEmailAndPassword(
      email: _emailController.text,
      password: _pwController.text,
    );

    //유저 확인
    final FirebaseUser user = result.user;

    //유저가 null 이면 스낵바로 에러 던짐
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
  //페북 SDK를 사용해서 이메일을 통해 로그인한다
  final facebookLogin = FacebookLogin();
  //[] 리스트 안에 email, phonenumber 등 페북 SDK에서 제공해주는 키워드로 로긴
  //갖고올 수 있는 것과 없는 것이 있으니 잘 확인하자!
  final result = await facebookLogin.logIn(['email']);

  //3가지 상태 체크
  switch (result.status) {
    //로그인 성공 상태 > 성공하면 token 가져옴
    case FacebookLoginStatus.loggedIn:
      _handleFacebookToken(context, result.accessToken.token);
      break;
    //유저가 로그인 취소한 상태 (스낵바로 에러메세지 던짐)
    //스낵바에서 에러가 난다면 context 가 Scaffold 에서 온게 맞는지 확인할 것!
    case FacebookLoginStatus.cancelledByUser:
      simpleSnackbar(context, 'User cancel facebook sign in!');
      break;
    //로그인 하다 에러난 상태 (스낵바로 에러메세지 던짐)
    case FacebookLoginStatus.error:
      simpleSnackbar(context, 'Error while facebook sign in!');
      break;
  }
}

//페북 SDK를 통해 로그인후 result에서 페북에서 준 token을 갖고와서 파베 auth에 전달함
void _handleFacebookToken(BuildContext context, String token) async {
  //FacebookAuthProvider : firebase_auth 라이브러리에서 제공해주는 API
  //token을 던져줘서 credential을 갖고옴
  final AuthCredential credential = FacebookAuthProvider.getCredential(
    accessToken: token,
  );
  //갖고온 credential을 던져 로그인한 결과에서 user를 갖고온다
  final FirebaseUser user =
      (await FirebaseAuth.instance.signInWithCredential(credential)).user;
  //user 가 없으면 스낵바 에러메세지 투척
  if (user == null) {
    simpleSnackbar(context, 'Failed to sign in with Facebook.');
  }
}
```