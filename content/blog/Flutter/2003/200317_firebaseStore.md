---
title: '๐ [Flutter] Firebase Firestore ๊ธฐ์ด'
date: 2020-03-17 00:43:00
category: 'Flutter'
draft: false 
showToc: true
---

# ์์ 

- [cloud_firestore](https://pub.dev/packages/cloud_firestore) ๋ผ์ด๋ธ๋ฌ๋ฆฌ ์ค์น 
- Cloud Firestore ํ์คํธ๋ชจ๋ ๊ธฐ๋ณธ๊ฐ์ผ๋ก ์์ฑ
    - ํ์คํธ๋ชจ๋๋ 30์ผ ์ง๋ฆฌ๋๊น ๊ฐ๋ฐํ๋ค ์๊ฐ ์ค๋๊ฑธ๋ฆฌ๋ฉด ๋ ์ง ๋๋ ค์ฃผ๋ฉด ๋จ (Rules์ ์์)


# Firestore ํ์ผ์์ฑ 

`firestore_provider.dart`

```dart
import 'package:cloud_firestore/cloud_firestore.dart';

class FirestoreProvider {
  //๋ฐ์ดํฐ๋ฅผ ๋ณด๋ด๋ ๊ฒ
  Future<void> sendData() {
    return Firestore.instance
        //ํ์ฌ ํ์ด์ด๋ฒ ์ด์ค ์์ ๋ฐ์ดํฐ๊ฐ ์์ด๋ (์ปฌ๋ ์์ด ์์ด๋) ์ ์ ๋ก ์์ฑ์ด ๋จ
        .collection('Users')
        //์์ ์คํธ๋ง ๊ฐ์ ์๋ฃ์ด์ค๋ ๋์ง๋ง ์์ค๋ ํ์ด์ด์คํ ์ด์์ ์๋์ ์ผ๋ก ํค๋ฅผ ๋ถ์ฌํด์ค
        //์ด ์์ ๋ค์ด๊ฐ๋๊ฑด ๊ณ ์ ํ ๋ํ๋จผํธ์ ์ ์ผํ ํค์ด๋ค. (๋์ผํ ํค๊ฐ ์์ผ๋ฉด ์๋จ)
        .document('123123123')
        //๋ฐ์ดํฐ๊ฐ ์ฑ๊ณต์ ์ผ๋ก ๋ณด๋ด์ง๋ฉด Future์์ ์๋ฆผ์ ์ค
        .setData({'email': 'testing@test.com', 'author': 'author'});
  }

  //๋ฐ์ดํฐ๋ฅผ ๋ฐ์์ค๋ ๊ฒ
  void getData() {
    Firestore.instance
        //๋ฐ์ดํฐ๊ฐ ์์ฑ์ด ๋์์ผ๋ฉด ์ฌ๊ธฐ์ ๋ฐ์ดํฐ๋ฅผ ์ฐพ์์ ๊ฐ๊ณ ์ด
        .collection('Users')
        //๋์ผํ ํค๋ฅผ ๋ฃ์ด์ค
        .document('123123123')
        //ํค์ ๋งค์นญ๋๋ ๋ํ๋จผํธ๋ฅผ ๊ฐ๊ณ ์ด
        .get()
        //DocumentSnapshot์ผ๋ก ์จ ๋ฐ์ดํฐ๋ฅผ ds ๋ฐ์์ print๋ก ํ์ธํด๋ด
        .then((DocumentSnapshot ds) {
      print(ds.data);
    });
  }
}

//์ธ์คํด์ค ์์ฑ (์๋ฌด๊ณณ์์๋ ์ ๊ทผํ  ์ ์๋๋ก ๋ฐ๊นฅ์ ์์ฑ)
FirestoreProvider firestoreProvider = FirestoreProvider();
```

์๋ก์ฝ๋กฌ ํด์ฃผ๊ณ  ๋ง๋ค์ด์ ธ์๋ ์์ด์ฝ๋ฒํผ์ ํ์คํธ ํจ ํด๋ณด์!

`feed_page.dart`

```dart
class FeedPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        //์ฑ๋ฐ ์ผ์ชฝ ์์ด์ฝ
        leading: IconButton(
          color: Colors.black,
          onPressed: () {
            firestoreProvider.sendData().then((_) {
              print('ํ์ด์ด์คํ ์ด์ ๋ฐ์ดํฐ๊ฐ ๋ณด๋ด์ก๋ค!');
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
        //์ฑ๋ฐ ์ค๋ฅธ์ชฝ ์์ด์ฝ
        actions: <Widget>[
          IconButton(
            color: Colors.black,
            //๋ฐ์ดํฐ ๊ฐ๊ณ ์ค๊ธฐ
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

์ฝ์์ฐฝ์์๋ ์ ํ์ธ๋๊ณ , 

**sendData ๋ฒํผ ํด๋ฆญ์**

<img width="345" alt="แแณแแณแแตแซแแฃแบ 2020-03-16 แแฉแแฎ 9 36 30" src="https://user-images.githubusercontent.com/55340876/76776447-1b860e80-67ea-11ea-8d61-1283f5db12fd.png">

**getData ๋ฒํผ ํด๋ฆญ์**


<img width="515" alt="แแณแแณแแตแซแแฃแบ 2020-03-16 แแฉแแฎ 9 36 43" src="https://user-images.githubusercontent.com/55340876/76776451-1c1ea500-67ea-11ea-8d61-a2319220819e.png">

ํ๋ฒ ์คํ ์ด์์๋ ์๋ก์ฝ๋กฌ ์ ํ์ธ์ด ๋๋ค! 

<img width="1256" alt="แแณแแณแแตแซแแฃแบ 2020-03-16 แแฉแแฎ 9 35 43" src="https://user-images.githubusercontent.com/55340876/76776430-17f28780-67ea-11ea-958a-fec72d689654.png">




<br/>


---
---

# Reference  
- [Cloud Firestore ๋ฐ์ดํฐ ๋ชจ๋ธ](https://firebase.google.com/docs/firestore/data-model?hl=ko#top_of_page)