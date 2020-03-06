---
title: '💎 [Flutter] 데이터 가져오기 ⚡️'
date: 2020-03-06 10:10:00
category: 'Flutter'
draft: false 
showToc: true
---



# 가져올 데이터 

https://jsonplaceholder.typicode.com/posts/1

```json
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
```

# 라이브러리 임포트

각 라이브러리는 pubspec.yaml 에 저장해서 pakages get 해주고!

```dart
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http; //Http 프로토콜을 이용하기 위한 패키지
import 'dart:async'; //async / await 지원. 선언하지 않아도 이용가능
import 'dart:convert';  //JSON 데이터 처리 지원
```

async 라이브러리의 경우 async와 await를 제공하는 라이브러리.   
이건 명시적으로 선언하지 않아도 기본적으로 사용가능.   
async로 선언된 클래스 내부에 await로 구현된 메소드는 그 로직이 완료되거나 타임아웃이 발생할 때까지 비동기 처리.  

convert는 JSON 객체를 다루기 위한 라이브러리로 온라인에서 수신한 응답 메시지를 JSON 포맷의 데이터를 디코딩 할 때 사용.  

Http 패키지는 Http 프로토콜과 관련한 API를 제공하는 패키지로 'as http'로 선언되여 코드 내에서 http 약칭으로 이용할 수 있다.

# Post 클래스

```dart
//Model: Post
class Post {
  //멤버변수 지정하면 자동 초기화
  final int userId;
  final int id;
  final String title;
  final String body;

  //생성자
  Post({this.userId, this.id, this.title, this.body});

  //factory는 클래스 함수로 생성자를 만들 때 사용하는 키워드. (Post 정보를 포함하는 인스턴스를 생성하여 반환하는 factory 생성자)
  //factory란 개발자가 임의로 클래스의 인스턴스를 생성해서 이용하는 패턴이 아닌, 인스턴스를 대신 생성해서 반환해주는 패턴 기법이다.
  //factory 생성자를 이용해 JSON 객체를 초기화 할 수 있도록 factory Post.fromJson 메소드 추가
  //아규먼트로 넘겨 받은 JSON 데이터를 새로운 Post 클래스의 인스턴스로 생성하여 반환한다.
  //전역 함수처럼 동작하기 때문에 this 키워드를 사용할 수 없다.
  factory Post.fromJson(Map<String, dynamic> json) {
    //여기서 Post는 우편(수신 메시지)이라는 뜻으로 명명한 것이지 Http 프로토콜의 Post 방식을 의미하는 것은 아니다.
    //실제 앱에서는 Post 방식이 아닌 Get 방식으로 데이터를 수신하고 있다.
    return Post(
      userId: json['userId'],
      id: json['id'],
      title: json['title'],
      body: json['body'],
    );
  }
}
```

Post 클래스는 Http 요청 메시지의 응답 메시지를 저장하기 위해 사용할 클래스.  

factory 생성자로 Post.fromJson()을 구현하고 있는데,   
factory란 개발자가 임의로 클래스의 인스턴스를 생성해서 이용하는 패턴이 아닌,   
인스턴스를 대신 생성해서 반환해주는 패턴 기법이다.   
위 코드에서는 아규먼트로 넘겨 받은 JSON 데이터를 새로운 Post 클래스의 인스턴스로 생성하여 반환한다.

* 여기서 Post는 우편(수신 메시지)이라는 뜻으로 명명한 것이지 Http 프로토콜의 Post 방식을 의미하는 것은 아니다.   
* 실제 앱에서는 Post 방식이 아닌 Get 방식으로 데이터를 수신하고 있다.

# 응답 처리

```dart
//Service: fetchPost
//Http 요청 메시지를 전송하고 그 응답을 수신하기 위해 Post 타입의 Future 인스턴스를 반환하는 메소드 fetchPost를 async 로 선언하고 있다.
//Future<T> 를 리턴 타입으로 설정하여 Future가 필요한 메소드 등에서 사용할 수 있음
//여기서 <T> 는 return 될 타입을 넣어준다. (값을 반환하지 않으면 Future<void>)
//Future 객체는 일정 소요시간 이후에 값이나 에러를 반환한다.
//함수 본문 앞에 async 키워드가 있어야 await 키워드를 쓸 수 있다.
//비동기 관련 https://dart.dev/codelabs/async-await 문서 필독하자.
//json 서버로부터 사용자 데이터 중에서 첫 번째 데이터 1개만 가져온다.
Future<Post> fetchPost() async {
  //첫 번째를 가져오기 때문에 주소 마지막에 '1'이 붙어있다.
  //http 프로토콜의 get 방식으로 데이터를 가져온다.
  //get은 가져온다는 뜻이 아니라 어떤 방식으로 데이터를 가져올지를 알려주는 방식(method)을 의미한다.
  final url = 'https://jsonplaceholder.typicode.com/posts/1';
  //해당 URL의 데이터를 수신.
  //await 처리: 응답 메시지가 도착하거나 타임아웃이 발생할 때까지 대기
  final response = await http.get(url);

  //응답이 성공하면 json.decode 로 응답의 body를 JSON 으로 만들고
  //Post 클래스에서 만든 fromJson 메소드로 초기화한다.
  if (response.statusCode == 200) {
    //수신 메시지의 body부분을 JSON 객체로 디코딩한후 Post.fromJson 메소드를 통해 다시 파싱함
    //json 데이터를 수신해서 Post 객체로 변환
    final jsonBody = json.decode(response.body);
    return Post.fromJson(jsonBody);
    //200 ok 가 아니라면, 실제 상황에서는 데이터 수신에 실패했을 때의 처리를 제공해야 한다.
    //다시 읽어야 한다던가 빈 데이터 또는 에러를 표시한다던가.
  } else {
    //데이터 수신에 실패했을 경우, throw Exception : 사용자 정의 예외를 던진다.
    throw Exception('Failed to load post');
  }
}
```

Http 요청 메시지를 전송하고 그 응답을 수신하기 위해   
Post 타입의 Future 인스턴스를 반환하는 메소드 fetchPost를 aync 로 선언.

Future는 Dart의 핵심 클래스 중 하나로 비동기적으로 동작하는 작업을 처리때 사용한다.   
Future 객체는 일정 소요시간 이후에 적절한 값이나 에러로 반환된다.   
이를 위해서 async 클래스로 선언하고 서버로부터 데이터를 요청/수신하는 http.get 메소드를 await로 호출한다.   
async 클래스는 await 메소드를 가지는 클래스로 await로 선언된 메소드는 그 응답이 처리될때까지 대기하는 비동기식으로 동작한다.   
결과적으로 http.get 메소드를 통해 URL에 해당하는 데이터를 수신하여 response 필드에 저장한 후 다음 코드가 계속 진행된다.

response의 상태코드가 정상(200)이면 Post 클래스의 팩토리 생성자인 fromJson을 호출하여 Post 인스턴스를 반환한다.   
이 때 수신한 데이터를 JSON 객체로 변환하기 위해 decode 함수가 쓰인다.   
만약 정상 상태코드를 수신하지 못한 경우 에러를 발생한다.

* 파리미터에 기술된 response.body 는 Post 클래스의 body를 의미하는 것이 아니다.   
* 여기서의 body는 get 메소드 호출에 의해 수신된 데이터 중 body에 해당하는 데이터 이며 웹브라우저로 접속했을 때 확인했던 JSON 객체 전부를 포함하고 있다.

# 화면에 데이터 출력

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
          //Future 와의 최신 상호 작용 snapshot 을 기반으로 자체 빌드되는 위젯.
          //FutureBuilder: Future 객체를 처리하기 위한 builder
          FutureBuilder(
            //builder는 fetchPost값의 변화가 발생할 때마다 호출됨
            future: fetchPost(),
            //snapshot은 Future 클래스가 포장하고 있는 객체를 data 속성으로 전달
            //Future 객체를 처리할 빌더.
            builder: (context, snapshot) {
              //정상적으로 데이터가 출력된 경우, 하단 코드 return
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
                //에러 발생시 에러 출력
              } else if (snapshot.hasError) {
                return Text("${snapshot.error}");
              }
              //Future 가 종료되지 않았다면(데이터 수신전) CircularProgressIndicator (로딩표시) 를 출력함
              //https://material.io/components/progress-indicators/#circular-progress-indicators 참고
              return CircularProgressIndicator();
            },
          ),
        ],
      ),
    );
  }
}
```

클래스의 생성자에서 Future<Post> 타입의 응답 메시지를 전달받아 필드에 저장한다.   
이 값을 화면에 출력하기 위해 FutureBuilder 메소드를 사용한다.   
FutureBuilder의 future 항목에서 post(필드값)을 설정한다.   
이로서 post의 값에 변화가 생길 때 마다 builder가 호출되게 된다.   
새로 갱신된 snapshot(post)의 내용을 판단하여 데이터가 정상 수신된 경우 해당 데이터의 title 항목을 출력하고,   
에러가 발생한 경우 그 에러 메시지를 출력한다.   
앱이 처음 실행되었을 때에는 CircularProgressIndicator가 화면에 출력된다.


<img width="300" alt="" src="https://user-images.githubusercontent.com/55340876/76050184-eb4c9d80-5fa9-11ea-90ba-a494d8354687.gif">


# 전체 코드

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





<br/>
<br/>
<br/>


---
---

# Reference  
- [플러터(Flutter) 앱 만들기 : 블로그 글 상세](https://medium.com/@changjoopark/%ED%94%8C%EB%9F%AC%ED%84%B0-flutter-%EC%95%B1-%EB%A7%8C%EB%93%A4%EA%B8%B0-%EB%B8%94%EB%A1%9C%EA%B7%B8-%EA%B8%80-%EC%83%81%EC%84%B8-dc1ba68d4cef)
- [[Networking] 인터넷에서 데이터 가져오는 방법](https://here4you.tistory.com/143?category=787559)
- [26. 플러터 : 서버/클라이언트 연동 (1)](https://pythonkim.tistory.com/128?category=696641)