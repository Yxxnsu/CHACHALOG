---
title: '💎 [Flutter] 카메라 기능'
date: 2020-03-17 05:51:00
category: 'Flutter'
draft: false 
showToc: true
---

# 라이브러리 설치

[camera](https://pub.dev/packages/camera#-installing-tab-) 라이브러리 설치

```dart
dependencies:
  flutter:
    sdk: flutter
  camera: ^0.5.7+4 //위치랑 줄 맞춤 주의!
```

`ios/Runner/Info.plist` 에 해당 내용 복붙

```dart
...

    <key>NSCameraUsageDescription</key>
    <string>Can I use the camera please?</string>
    <key>NSMicrophoneUsageDescription</key>
    <string>Can I use the mic please?</string>
</dict> //dict 위에다 바로 복붙해주면 됨
</plist>
```

`android/app/build.gradle` 내용 수정

```dart
    defaultConfig {

        ...

        minSdkVersion 21 //21로 바꿈 
```

# preview 세팅

`main_page.dart`

```dart
...

  //카메라 화면으로 가는 라우터 추가
  openCamera(BuildContext context) async {
    final cameras = await availableCameras();
    final firstCamera = cameras.first;

    Navigator.push(
      context,
      MaterialPageRoute(
        builder: (context) => CameraPage(
          camera: firstCamera,
        ),
      ),
    );
  }
}
```

`camera_page.dart`

```dart
import 'package:camera/camera.dart';
import 'package:flutter/material.dart';
import 'package:flutterinsta/constants/size.dart';
import 'package:flutterinsta/widgets/my_progress_indicator.dart';

class CameraPage extends StatefulWidget {
  final CameraDescription camera;

  const CameraPage({Key key, @required this.camera}) : super(key: key);

  @override
  _CameraPageState createState() => _CameraPageState();
}

class _CameraPageState extends State<CameraPage> {
  //화면이 첫 실행됬을때 두번째 화면인 사진화면으로 기본세팅
  int _selectedIndex = 1;
  //페이지뷰 위젯을 컨트롤하는 컨트롤러. 첫 화면은 1번째로 지정
  var _pageController = PageController(initialPage: 1);
  CameraController _controller;
  //카메라를 실행후 준비가 되면 이걸로 신호를 받음
  Future<void> _initializeControllerFuture;

  //상태가 트리에 추가되는 시점
  @override
  void initState() {
    super.initState();
    _controller = CameraController(
      widget.camera,
      //카메라 화질
      ResolutionPreset.ultraHigh,
    );
    _initializeControllerFuture = _controller.initialize();
  }

 ...

  Widget _takePhotoPage() {
    return FutureBuilder<void>(
        future: _initializeControllerFuture,
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.done)
            return Column(
              children: <Widget>[
                Container(
                  //화면을 1:1 비율로 자름
                  width: size.width,
                  height: size.width,
                  child: ClipRect(
                    child: OverflowBox(
                      alignment: Alignment.topCenter,
                      child: FittedBox(
                        fit: BoxFit.fitWidth,
                        child: Container(
                          width: size.width,
                          height: size.width / _controller.value.aspectRatio,
                          child: CameraPreview(_controller),
                        ),
                      ),
                    ),
                  ),
                ),
              ],
            );
          return MyProgressIndicator();
        });
  }

  Widget _takeVideoPage() {
    return Container(color: Colors.deepOrange);
  }
}
```

실제 아이폰으로 구동해보면?  

쫜!!! 
화질을 울트라로 맥이니까 아주 잘나온다 ㅠㅠ 

<img width="300" alt="" src="https://user-images.githubusercontent.com/55340876/76844821-36f02880-6881-11ea-9249-57d381d2e489.PNG">

밋밋하니까 버튼까지 주면 


`camera_page.dart`

```dart
...

    Expanded(
      child: GestureDetector(
        onTap: () {},
        child: Padding(
          padding: EdgeInsets.all(80.0),
          child: Center(
            child: Container(
              decoration: ShapeDecoration(
                  shape: CircleBorder(
                      side: BorderSide(
                          color: Colors.grey[300], width: 20))),
            ),
          ),
        ),
      ),
    ),

...
```

<img width="300" alt="" src="https://user-images.githubusercontent.com/55340876/76846354-b848ba80-6883-11ea-813a-d5ba6f536dc0.jpeg">

올.. 그럴듯해..재미써.. 🤭  
데이터 다루는건 공부를 엄청나게 해야할 것 같다.

찍고 저장하고 가져오고 확인하고 등등  
요고는 차차 정리하기로! 