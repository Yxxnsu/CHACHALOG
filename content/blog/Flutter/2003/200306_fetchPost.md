---
title: '๐ [Flutter] ๋ฐ์ดํฐ ๊ฐ์ ธ์ค๊ธฐ โก๏ธ'
date: 2020-03-06 10:10:00
category: 'Flutter'
draft: false 
showToc: true
---



# ๊ฐ์ ธ์ฌ ๋ฐ์ดํฐ 

https://jsonplaceholder.typicode.com/posts/1

```json
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
```

# ๋ผ์ด๋ธ๋ฌ๋ฆฌ ์ํฌํธ

๊ฐ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ pubspec.yaml ์ ์ ์ฅํด์ pakages get ํด์ฃผ๊ณ !

```dart
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http; //Http ํ๋กํ ์ฝ์ ์ด์ฉํ๊ธฐ ์ํ ํจํค์ง
import 'dart:async'; //async / await ์ง์. ์ ์ธํ์ง ์์๋ ์ด์ฉ๊ฐ๋ฅ
import 'dart:convert';  //JSON ๋ฐ์ดํฐ ์ฒ๋ฆฌ ์ง์
```

async ๋ผ์ด๋ธ๋ฌ๋ฆฌ์ ๊ฒฝ์ฐ async์ await๋ฅผ ์ ๊ณตํ๋ ๋ผ์ด๋ธ๋ฌ๋ฆฌ.   
์ด๊ฑด ๋ช์์ ์ผ๋ก ์ ์ธํ์ง ์์๋ ๊ธฐ๋ณธ์ ์ผ๋ก ์ฌ์ฉ๊ฐ๋ฅ.   
async๋ก ์ ์ธ๋ ํด๋์ค ๋ด๋ถ์ await๋ก ๊ตฌํ๋ ๋ฉ์๋๋ ๊ทธ ๋ก์ง์ด ์๋ฃ๋๊ฑฐ๋ ํ์์์์ด ๋ฐ์ํ  ๋๊น์ง ๋น๋๊ธฐ ์ฒ๋ฆฌ.  

convert๋ JSON ๊ฐ์ฒด๋ฅผ ๋ค๋ฃจ๊ธฐ ์ํ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ก ์จ๋ผ์ธ์์ ์์ ํ ์๋ต ๋ฉ์์ง๋ฅผ JSON ํฌ๋งท์ ๋ฐ์ดํฐ๋ฅผ ๋์ฝ๋ฉ ํ  ๋ ์ฌ์ฉ.  

Http ํจํค์ง๋ Http ํ๋กํ ์ฝ๊ณผ ๊ด๋ จํ API๋ฅผ ์ ๊ณตํ๋ ํจํค์ง๋ก 'as http'๋ก ์ ์ธ๋์ฌ ์ฝ๋ ๋ด์์ http ์ฝ์นญ์ผ๋ก ์ด์ฉํ  ์ ์๋ค.

# Post ํด๋์ค

```dart
//Model: Post
class Post {
  //๋ฉค๋ฒ๋ณ์ ์ง์ ํ๋ฉด ์๋ ์ด๊ธฐํ
  final int userId;
  final int id;
  final String title;
  final String body;

  //์์ฑ์
  Post({this.userId, this.id, this.title, this.body});

  //factory๋ ํด๋์ค ํจ์๋ก ์์ฑ์๋ฅผ ๋ง๋ค ๋ ์ฌ์ฉํ๋ ํค์๋. (Post ์ ๋ณด๋ฅผ ํฌํจํ๋ ์ธ์คํด์ค๋ฅผ ์์ฑํ์ฌ ๋ฐํํ๋ factory ์์ฑ์)
  //factory๋ ๊ฐ๋ฐ์๊ฐ ์์๋ก ํด๋์ค์ ์ธ์คํด์ค๋ฅผ ์์ฑํด์ ์ด์ฉํ๋ ํจํด์ด ์๋, ์ธ์คํด์ค๋ฅผ ๋์  ์์ฑํด์ ๋ฐํํด์ฃผ๋ ํจํด ๊ธฐ๋ฒ์ด๋ค.
  //factory ์์ฑ์๋ฅผ ์ด์ฉํด JSON ๊ฐ์ฒด๋ฅผ ์ด๊ธฐํ ํ  ์ ์๋๋ก factory Post.fromJson ๋ฉ์๋ ์ถ๊ฐ
  //์๊ท๋จผํธ๋ก ๋๊ฒจ ๋ฐ์ JSON ๋ฐ์ดํฐ๋ฅผ ์๋ก์ด Post ํด๋์ค์ ์ธ์คํด์ค๋ก ์์ฑํ์ฌ ๋ฐํํ๋ค.
  //์ ์ญ ํจ์์ฒ๋ผ ๋์ํ๊ธฐ ๋๋ฌธ์ this ํค์๋๋ฅผ ์ฌ์ฉํ  ์ ์๋ค.
  factory Post.fromJson(Map<String, dynamic> json) {
    //์ฌ๊ธฐ์ Post๋ ์ฐํธ(์์  ๋ฉ์์ง)์ด๋ผ๋ ๋ป์ผ๋ก ๋ช๋ชํ ๊ฒ์ด์ง Http ํ๋กํ ์ฝ์ Post ๋ฐฉ์์ ์๋ฏธํ๋ ๊ฒ์ ์๋๋ค.
    //์ค์  ์ฑ์์๋ Post ๋ฐฉ์์ด ์๋ Get ๋ฐฉ์์ผ๋ก ๋ฐ์ดํฐ๋ฅผ ์์ ํ๊ณ  ์๋ค.
    return Post(
      userId: json['userId'],
      id: json['id'],
      title: json['title'],
      body: json['body'],
    );
  }
}
```

Post ํด๋์ค๋ Http ์์ฒญ ๋ฉ์์ง์ ์๋ต ๋ฉ์์ง๋ฅผ ์ ์ฅํ๊ธฐ ์ํด ์ฌ์ฉํ  ํด๋์ค.  

factory ์์ฑ์๋ก Post.fromJson()์ ๊ตฌํํ๊ณ  ์๋๋ฐ,   
factory๋ ๊ฐ๋ฐ์๊ฐ ์์๋ก ํด๋์ค์ ์ธ์คํด์ค๋ฅผ ์์ฑํด์ ์ด์ฉํ๋ ํจํด์ด ์๋,   
์ธ์คํด์ค๋ฅผ ๋์  ์์ฑํด์ ๋ฐํํด์ฃผ๋ ํจํด ๊ธฐ๋ฒ์ด๋ค.   
์ ์ฝ๋์์๋ ์๊ท๋จผํธ๋ก ๋๊ฒจ ๋ฐ์ JSON ๋ฐ์ดํฐ๋ฅผ ์๋ก์ด Post ํด๋์ค์ ์ธ์คํด์ค๋ก ์์ฑํ์ฌ ๋ฐํํ๋ค.

* ์ฌ๊ธฐ์ Post๋ ์ฐํธ(์์  ๋ฉ์์ง)์ด๋ผ๋ ๋ป์ผ๋ก ๋ช๋ชํ ๊ฒ์ด์ง Http ํ๋กํ ์ฝ์ Post ๋ฐฉ์์ ์๋ฏธํ๋ ๊ฒ์ ์๋๋ค.   
* ์ค์  ์ฑ์์๋ Post ๋ฐฉ์์ด ์๋ Get ๋ฐฉ์์ผ๋ก ๋ฐ์ดํฐ๋ฅผ ์์ ํ๊ณ  ์๋ค.

# ์๋ต ์ฒ๋ฆฌ

```dart
//Service: fetchPost
//Http ์์ฒญ ๋ฉ์์ง๋ฅผ ์ ์กํ๊ณ  ๊ทธ ์๋ต์ ์์ ํ๊ธฐ ์ํด Post ํ์์ Future ์ธ์คํด์ค๋ฅผ ๋ฐํํ๋ ๋ฉ์๋ fetchPost๋ฅผ async ๋ก ์ ์ธํ๊ณ  ์๋ค.
//Future<T> ๋ฅผ ๋ฆฌํด ํ์์ผ๋ก ์ค์ ํ์ฌ Future๊ฐ ํ์ํ ๋ฉ์๋ ๋ฑ์์ ์ฌ์ฉํ  ์ ์์
//์ฌ๊ธฐ์ <T> ๋ return ๋  ํ์์ ๋ฃ์ด์ค๋ค. (๊ฐ์ ๋ฐํํ์ง ์์ผ๋ฉด Future<void>)
//Future ๊ฐ์ฒด๋ ์ผ์  ์์์๊ฐ ์ดํ์ ๊ฐ์ด๋ ์๋ฌ๋ฅผ ๋ฐํํ๋ค.
//ํจ์ ๋ณธ๋ฌธ ์์ async ํค์๋๊ฐ ์์ด์ผ await ํค์๋๋ฅผ ์ธ ์ ์๋ค.
//๋น๋๊ธฐ ๊ด๋ จ https://dart.dev/codelabs/async-await ๋ฌธ์ ํ๋ํ์.
//json ์๋ฒ๋ก๋ถํฐ ์ฌ์ฉ์ ๋ฐ์ดํฐ ์ค์์ ์ฒซ ๋ฒ์งธ ๋ฐ์ดํฐ 1๊ฐ๋ง ๊ฐ์ ธ์จ๋ค.
Future<Post> fetchPost() async {
  //์ฒซ ๋ฒ์งธ๋ฅผ ๊ฐ์ ธ์ค๊ธฐ ๋๋ฌธ์ ์ฃผ์ ๋ง์ง๋ง์ '1'์ด ๋ถ์ด์๋ค.
  //http ํ๋กํ ์ฝ์ get ๋ฐฉ์์ผ๋ก ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ์จ๋ค.
  //get์ ๊ฐ์ ธ์จ๋ค๋ ๋ป์ด ์๋๋ผ ์ด๋ค ๋ฐฉ์์ผ๋ก ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ์ฌ์ง๋ฅผ ์๋ ค์ฃผ๋ ๋ฐฉ์(method)์ ์๋ฏธํ๋ค.
  final url = 'https://jsonplaceholder.typicode.com/posts/1';
  //ํด๋น URL์ ๋ฐ์ดํฐ๋ฅผ ์์ .
  //await ์ฒ๋ฆฌ: ์๋ต ๋ฉ์์ง๊ฐ ๋์ฐฉํ๊ฑฐ๋ ํ์์์์ด ๋ฐ์ํ  ๋๊น์ง ๋๊ธฐ
  final response = await http.get(url);

  //์๋ต์ด ์ฑ๊ณตํ๋ฉด json.decode ๋ก ์๋ต์ body๋ฅผ JSON ์ผ๋ก ๋ง๋ค๊ณ 
  //Post ํด๋์ค์์ ๋ง๋  fromJson ๋ฉ์๋๋ก ์ด๊ธฐํํ๋ค.
  if (response.statusCode == 200) {
    //์์  ๋ฉ์์ง์ body๋ถ๋ถ์ JSON ๊ฐ์ฒด๋ก ๋์ฝ๋ฉํํ Post.fromJson ๋ฉ์๋๋ฅผ ํตํด ๋ค์ ํ์ฑํจ
    //json ๋ฐ์ดํฐ๋ฅผ ์์ ํด์ Post ๊ฐ์ฒด๋ก ๋ณํ
    final jsonBody = json.decode(response.body);
    return Post.fromJson(jsonBody);
    //200 ok ๊ฐ ์๋๋ผ๋ฉด, ์ค์  ์ํฉ์์๋ ๋ฐ์ดํฐ ์์ ์ ์คํจํ์ ๋์ ์ฒ๋ฆฌ๋ฅผ ์ ๊ณตํด์ผ ํ๋ค.
    //๋ค์ ์ฝ์ด์ผ ํ๋ค๋๊ฐ ๋น ๋ฐ์ดํฐ ๋๋ ์๋ฌ๋ฅผ ํ์ํ๋ค๋๊ฐ.
  } else {
    //๋ฐ์ดํฐ ์์ ์ ์คํจํ์ ๊ฒฝ์ฐ, throw Exception : ์ฌ์ฉ์ ์ ์ ์์ธ๋ฅผ ๋์ง๋ค.
    throw Exception('Failed to load post');
  }
}
```

Http ์์ฒญ ๋ฉ์์ง๋ฅผ ์ ์กํ๊ณ  ๊ทธ ์๋ต์ ์์ ํ๊ธฐ ์ํด   
Post ํ์์ Future ์ธ์คํด์ค๋ฅผ ๋ฐํํ๋ ๋ฉ์๋ fetchPost๋ฅผ aync ๋ก ์ ์ธ.

Future๋ Dart์ ํต์ฌ ํด๋์ค ์ค ํ๋๋ก ๋น๋๊ธฐ์ ์ผ๋ก ๋์ํ๋ ์์์ ์ฒ๋ฆฌ๋ ์ฌ์ฉํ๋ค.   
Future ๊ฐ์ฒด๋ ์ผ์  ์์์๊ฐ ์ดํ์ ์ ์ ํ ๊ฐ์ด๋ ์๋ฌ๋ก ๋ฐํ๋๋ค.   
์ด๋ฅผ ์ํด์ async ํด๋์ค๋ก ์ ์ธํ๊ณ  ์๋ฒ๋ก๋ถํฐ ๋ฐ์ดํฐ๋ฅผ ์์ฒญ/์์ ํ๋ http.get ๋ฉ์๋๋ฅผ await๋ก ํธ์ถํ๋ค.   
async ํด๋์ค๋ await ๋ฉ์๋๋ฅผ ๊ฐ์ง๋ ํด๋์ค๋ก await๋ก ์ ์ธ๋ ๋ฉ์๋๋ ๊ทธ ์๋ต์ด ์ฒ๋ฆฌ๋ ๋๊น์ง ๋๊ธฐํ๋ ๋น๋๊ธฐ์์ผ๋ก ๋์ํ๋ค.   
๊ฒฐ๊ณผ์ ์ผ๋ก http.get ๋ฉ์๋๋ฅผ ํตํด URL์ ํด๋นํ๋ ๋ฐ์ดํฐ๋ฅผ ์์ ํ์ฌ response ํ๋์ ์ ์ฅํ ํ ๋ค์ ์ฝ๋๊ฐ ๊ณ์ ์งํ๋๋ค.

response์ ์ํ์ฝ๋๊ฐ ์ ์(200)์ด๋ฉด Post ํด๋์ค์ ํฉํ ๋ฆฌ ์์ฑ์์ธ fromJson์ ํธ์ถํ์ฌ Post ์ธ์คํด์ค๋ฅผ ๋ฐํํ๋ค.   
์ด ๋ ์์ ํ ๋ฐ์ดํฐ๋ฅผ JSON ๊ฐ์ฒด๋ก ๋ณํํ๊ธฐ ์ํด decode ํจ์๊ฐ ์ฐ์ธ๋ค.   
๋ง์ฝ ์ ์ ์ํ์ฝ๋๋ฅผ ์์ ํ์ง ๋ชปํ ๊ฒฝ์ฐ ์๋ฌ๋ฅผ ๋ฐ์ํ๋ค.

* ํ๋ฆฌ๋ฏธํฐ์ ๊ธฐ์ ๋ response.body ๋ Post ํด๋์ค์ body๋ฅผ ์๋ฏธํ๋ ๊ฒ์ด ์๋๋ค.   
* ์ฌ๊ธฐ์์ body๋ get ๋ฉ์๋ ํธ์ถ์ ์ํด ์์ ๋ ๋ฐ์ดํฐ ์ค body์ ํด๋นํ๋ ๋ฐ์ดํฐ ์ด๋ฉฐ ์น๋ธ๋ผ์ฐ์ ๋ก ์ ์ํ์ ๋ ํ์ธํ๋ JSON ๊ฐ์ฒด ์ ๋ถ๋ฅผ ํฌํจํ๊ณ  ์๋ค.

# ํ๋ฉด์ ๋ฐ์ดํฐ ์ถ๋ ฅ

```dart
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Post Detail Demo',
      theme: ThemeData(primarySwatch: Colors.red),
      home: PostDetailPage(),
    );
  }
}

class PostDetailPage extends StatefulWidget {
  @override
  _PostDetailPageState createState() => _PostDetailPageState();
}

class _PostDetailPageState extends State<PostDetailPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Post Detail'),
      ),
      body: Column(
        children: <Widget>[
          //Future ์์ ์ต์  ์ํธ ์์ฉ snapshot ์ ๊ธฐ๋ฐ์ผ๋ก ์์ฒด ๋น๋๋๋ ์์ ฏ.
          //FutureBuilder: Future ๊ฐ์ฒด๋ฅผ ์ฒ๋ฆฌํ๊ธฐ ์ํ builder
          FutureBuilder(
            //builder๋ fetchPost๊ฐ์ ๋ณํ๊ฐ ๋ฐ์ํ  ๋๋ง๋ค ํธ์ถ๋จ
            future: fetchPost(),
            //snapshot์ Future ํด๋์ค๊ฐ ํฌ์ฅํ๊ณ  ์๋ ๊ฐ์ฒด๋ฅผ data ์์ฑ์ผ๋ก ์ ๋ฌ
            //Future ๊ฐ์ฒด๋ฅผ ์ฒ๋ฆฌํ  ๋น๋.
            builder: (context, snapshot) {
              //์ ์์ ์ผ๋ก ๋ฐ์ดํฐ๊ฐ ์ถ๋ ฅ๋ ๊ฒฝ์ฐ, ํ๋จ ์ฝ๋ return
              if (snapshot.hasData) {
                final title = snapshot.data.title;
                final body = snapshot.data.body;
                return Column(
                  children: <Widget>[
                    //Post Title
                    Text(
                      title,
                      style: Theme.of(context).textTheme.title,
                    ),
                    //Post Body
                    Text(
                      body,
                      style: Theme.of(context).textTheme.display1,
                    )
                  ],
                );
                //์๋ฌ ๋ฐ์์ ์๋ฌ ์ถ๋ ฅ
              } else if (snapshot.hasError) {
                return Text("${snapshot.error}");
              }
              //Future ๊ฐ ์ข๋ฃ๋์ง ์์๋ค๋ฉด(๋ฐ์ดํฐ ์์ ์ ) CircularProgressIndicator (๋ก๋ฉํ์) ๋ฅผ ์ถ๋ ฅํจ
              //https://material.io/components/progress-indicators/#circular-progress-indicators ์ฐธ๊ณ 
              return CircularProgressIndicator();
            },
          ),
        ],
      ),
    );
  }
}
```

ํด๋์ค์ ์์ฑ์์์ Future<Post> ํ์์ ์๋ต ๋ฉ์์ง๋ฅผ ์ ๋ฌ๋ฐ์ ํ๋์ ์ ์ฅํ๋ค.   
์ด ๊ฐ์ ํ๋ฉด์ ์ถ๋ ฅํ๊ธฐ ์ํด FutureBuilder ๋ฉ์๋๋ฅผ ์ฌ์ฉํ๋ค.   
FutureBuilder์ future ํญ๋ชฉ์์ post(ํ๋๊ฐ)์ ์ค์ ํ๋ค.   
์ด๋ก์ post์ ๊ฐ์ ๋ณํ๊ฐ ์๊ธธ ๋ ๋ง๋ค builder๊ฐ ํธ์ถ๋๊ฒ ๋๋ค.   
์๋ก ๊ฐฑ์ ๋ snapshot(post)์ ๋ด์ฉ์ ํ๋จํ์ฌ ๋ฐ์ดํฐ๊ฐ ์ ์ ์์ ๋ ๊ฒฝ์ฐ ํด๋น ๋ฐ์ดํฐ์ title ํญ๋ชฉ์ ์ถ๋ ฅํ๊ณ ,   
์๋ฌ๊ฐ ๋ฐ์ํ ๊ฒฝ์ฐ ๊ทธ ์๋ฌ ๋ฉ์์ง๋ฅผ ์ถ๋ ฅํ๋ค.   
์ฑ์ด ์ฒ์ ์คํ๋์์ ๋์๋ CircularProgressIndicator๊ฐ ํ๋ฉด์ ์ถ๋ ฅ๋๋ค.


<img width="300" alt="" src="https://user-images.githubusercontent.com/55340876/76050184-eb4c9d80-5fa9-11ea-90ba-a494d8354687.gif">


# ์ ์ฒด ์ฝ๋

main.dart

```dart
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http; 
import 'dart:async'; 
import 'dart:convert'; 
void main() => runApp(MyApp());

//Model: Post
class Post {
  
  final int userId;
  final int id;
  final String title;
  final String body;

  Post({this.userId, this.id, this.title, this.body});

  factory Post.fromJson(Map<String, dynamic> json) {
    return Post(
      userId: json['userId'],
      id: json['id'],
      title: json['title'],
      body: json['body'],
    );
  }
}

//Service: fetchPost
Future<Post> fetchPost() async {

  final url = 'https://jsonplaceholder.typicode.com/posts/1';
  final response = await http.get(url);

  if (response.statusCode == 200) {
    final jsonBody = json.decode(response.body);
    return Post.fromJson(jsonBody);
  } else {
    throw Exception('Failed to load post');
  }
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Post Detail Demo',
      theme: ThemeData(primarySwatch: Colors.red),
      home: PostDetailPage(),
    );
  }
}

class PostDetailPage extends StatefulWidget {
  @override
  _PostDetailPageState createState() => _PostDetailPageState();
}

class _PostDetailPageState extends State<PostDetailPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Post Detail'),
      ),
      body: Column(
        children: <Widget>[
          FutureBuilder(
            future: fetchPost(),
            builder: (context, snapshot) {
              if (snapshot.hasData) {
                final title = snapshot.data.title;
                final body = snapshot.data.body;
                return Column(
                  children: <Widget>[
                    Text(
                      title,
                      style: Theme.of(context).textTheme.title,
                    ),
                    Text(
                      body,
                      style: Theme.of(context).textTheme.display1,
                    )
                  ],
                );
              } else if (snapshot.hasError) {
                return Text("${snapshot.error}");
              }
              return CircularProgressIndicator();
            },
          ),
        ],
      ),
    );
  }
}
```

# ๋ค๋ฅธ ์์  (์ค๋ช ๊ฐ๋จ๋ช๋ฃ!)

```dart
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: HomePage(),
    );
  }
}

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

//_data ๋ฆฌ์คํธ์ ๋ฃ๊ธฐ์ํ ์ปค์คํ ํด๋์ค
class Picture {
//๋ฐ์ดํฐ ์์ 
//  [
//    {
//      "id": "0",
//      "author": "Alejandro Escamilla",
//      "width": 5616,
//      "height": 3744,
//      "url": "https://unsplash.com/...",
//      "download_url": "https://picsum.photos/..."
//    }
//  ]

  String id;
  String author;

  Picture(this.id, this.author);
}

class _HomePageState extends State<HomePage> {
  List _data = [];

  int page = 1;
  int limit = 20;

  //๋ฐ์ดํฐ๋ฅผ ๊บผ๋ด์ค๋ ๋ฉ์๋
  _fetchData() {
    //http ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ํตํด ๋ฐ์ดํฐ๋ฅผ ๊ฐ์ ธ์ฌ๊บผ๋๊น get ๋ฉ์๋ ์ฌ์ฉ
    //http.get() ๋ฉ์๋๋ Response๋ฅผ ํฌํจํ๊ณ  ์๋ Future๋ฅผ ๋ฐํํจ
    //then()์ ์ฌ์ฉํ์ฌ Future ๊ฐ ์๋ฃ ๋  ๋ ์คํ๋๋ ์ฝ๋๋ฅผ ์ค์ผ์ค๋ง ํ  ์ ์๋ค.
    //์๋ฅผ ๋ค์ด HTTP ์์ฒญ์ ์๊ฐ์ด ๊ฑธ๋ฆด ์ ์์ผ๋ฏ๋ก http.get() ์ Future๋ฅผ ๋ฐํํ๋ค.
    http.get('https://picsum.photos/v2/list?page=$page&limit=$limit').then(
      (response) {
        //๋ง์ฝ ์๋ฒ๊ฐ OK ์๋ต์ ๋ฐํํ๋ฉด, json ๋ณธ๋ฌธ์ ๊ฐ์ ธ์ด.
        if (response.statusCode == 200) {
          String jsonString = response.body;
          print(jsonString);

          //convert ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ํตํ jsonDecode() ๋ฉ์๋
          List pictures = jsonDecode(jsonString);
          for (int i = 0; i < pictures.length; i++) {
            var picture = pictures[i];
            //์๋ก์ด pictureToAdd ์ธ์คํด์ค๋ฅผ ์์ฑ
            Picture pictureToAdd = Picture(picture['id'], picture['author']);
            print(pictureToAdd.author);

            //๋ฆฌ์คํธ์ ์ถ๊ฐ
            setState(() {
              _data.add(pictureToAdd);
              page++;
            });
          }
          //์๋๋ฉด ์๋ฌ
        } else {
          print('Error!!!');
        }
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('HTTP & JSON'),
        //์ฑ๋ฐ ์ค๋ฅธ์ชฝ์ ์์นํ๋ ์์ด์ฝ๋ฒํผ ์์ ฏ
        actions: <Widget>[
          IconButton(
              icon: Icon(Icons.refresh),
              onPressed: () {
                _fetchData();
              }),
        ],
      ),
      //๋์  ๋ฆฌ์คํธ๋๊น ListView.builder ๋ก~
      body: ListView.builder(
        itemCount: _data.length,
        itemBuilder: (context, index) {
          Picture picture = _data[index];
          //๋ฆฌํด์ ํด์ค์ผ ํ๋ฉด์ ํ์๋จ
          return Card(
            child: Column(
              children: <Widget>[
                Text(picture.author),
                Image.network('https://picsum.photos/id/${picture.id}/200/300'),
              ],
            ),
          );
        },
      ),
    );
  }
}
```

<img width="340" alt="" src="https://user-images.githubusercontent.com/55340876/76168010-81511580-61ae-11ea-8996-5689c10e48bb.gif">




<br/>
<br/>
<br/>


---
---

# Reference  
- [ํ๋ฌํฐ(Flutter) ์ฑ ๋ง๋ค๊ธฐ : ๋ธ๋ก๊ทธ ๊ธ ์์ธ](https://medium.com/@changjoopark/%ED%94%8C%EB%9F%AC%ED%84%B0-flutter-%EC%95%B1-%EB%A7%8C%EB%93%A4%EA%B8%B0-%EB%B8%94%EB%A1%9C%EA%B7%B8-%EA%B8%80-%EC%83%81%EC%84%B8-dc1ba68d4cef)
- [[Networking] ์ธํฐ๋ท์์ ๋ฐ์ดํฐ ๊ฐ์ ธ์ค๋ ๋ฐฉ๋ฒ](https://here4you.tistory.com/143?category=787559)
- [26. ํ๋ฌํฐ : ์๋ฒ/ํด๋ผ์ด์ธํธ ์ฐ๋ (1)](https://pythonkim.tistory.com/128?category=696641)