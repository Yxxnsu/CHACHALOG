---
title: '💎 [Flutter] Firebase Firestore 기초'
date: 2020-03-17 00:43:00
category: 'Flutter'
draft: false 
showToc: true
---

# 셋업 

- [cloud_firestore](https://pub.dev/packages/cloud_firestore) 라이브러리 설치 
- Cloud Firestore 테스트모드 기본값으로 생성
    - 테스트모드는 30일 짜리니까 개발하다 시간 오래걸리면 날짜 늘려주면 됨 (Rules에 있음)


# Firestore 파일생성 

`firestore_provider.dart`

```dart
import 'package:cloud_firestore/cloud_firestore.dart';

class FirestoreProvider {
  //데이터를 보내는 것
  Future<void> sendData() {
    return Firestore.instance
        //현재 파이어베이스 안에 데이터가 없어도 (컬렉션이 없어도) 저절로 생성이 됨
        .collection('Users')
        //안에 스트링 값을 안넣어줘도 되지만 안줘도 파이어스토어에서 자동적으로 키를 부여해줌
        //이 안에 들어가는건 고유한 도큐먼트에 유일한 키이다. (동일한 키가 있으면 안됨)
        .document('123123123')
        //데이터가 성공적으로 보내지면 Future에서 알림을 줌
        .setData({'email': 'testing@test.com', 'author': 'author'});
  }

  //데이터를 받아오는 것
  void getData() {
    Firestore.instance
        //데이터가 생성이 되있으면 여기서 데이터를 찾아서 갖고옴
        .collection('Users')
        //동일한 키를 넣어줌
        .document('123123123')
        //키에 매칭되는 도큐먼트를 갖고옴
        .get()
        //DocumentSnapshot으로 온 데이터를 ds 받아서 print로 확인해봄
        .then((DocumentSnapshot ds) {
      print(ds.data);
    });
  }
}

//인스턴스 생성 (아무곳에서나 접근할 수 있도록 바깥에 생성)
FirestoreProvider firestoreProvider = FirestoreProvider();
```

요로코롬 해주고 만들어져있던 아이콘버튼에 테스트 함 해보자!

`feed_page.dart`

```dart
class FeedPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        //앱바 왼쪽 아이콘
        leading: IconButton(
          color: Colors.black,
          onPressed: () {
            firestoreProvider.sendData().then((_) {
              print('파이어스토어에 데이터가 보내졌다!');
            });
          },
          icon: ImageIcon(
            AssetImage('assets/actionbar_camera.png'),
          ),
        ),
        title: Image.asset(
          'assets/insta_text_logo.png',
          height: 26,
        ),
        //앱바 오른쪽 아이콘
        actions: <Widget>[
          IconButton(
            color: Colors.black,
            //데이터 갖고오기
            onPressed: () {
              firestoreProvider.getData();
            },
            icon: ImageIcon(
              AssetImage('assets/direct_message.png'),
            ),
          ),
        ],
      ),

...
```

콘솔창에서도 잘 확인되고, 

**sendData 버튼 클릭시**

<img width="345" alt="스크린샷 2020-03-16 오후 9 36 30" src="https://user-images.githubusercontent.com/55340876/76776447-1b860e80-67ea-11ea-8d61-1283f5db12fd.png">

**getData 버튼 클릭시**


<img width="515" alt="스크린샷 2020-03-16 오후 9 36 43" src="https://user-images.githubusercontent.com/55340876/76776451-1c1ea500-67ea-11ea-8d61-a2319220819e.png">

파베스토어에서도 요로코롬 잘 확인이 된다! 

<img width="1256" alt="스크린샷 2020-03-16 오후 9 35 43" src="https://user-images.githubusercontent.com/55340876/76776430-17f28780-67ea-11ea-958a-fec72d689654.png">




<br/>


---
---

# Reference  
- [Cloud Firestore 데이터 모델](https://firebase.google.com/docs/firestore/data-model?hl=ko#top_of_page)