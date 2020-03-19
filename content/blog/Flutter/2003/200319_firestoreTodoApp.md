---
title: '💎 [Flutter] Firebase Firestore Todo App 📲'
date: 2020-03-19 21:01:00
category: 'Flutter'
draft: false 
showToc: true
---

# 클라우드 DB를 활용한 Todo App

앱을 재시작하면 모든 자료가 사라지니,   
자료 저장을 위해 구글 파베가 제공해주는 클라우드 DB를 사용해보자.

**Firebase**
- 개인적 서버 없이도 활용할 수 있는 다양한 서버 기능 제공
- 쉽고 간편한 데이터 베이스
- 문서 기반의 구조라 이해하기 쉬움 (SQL 문법 몰라도 됨)
- 실시간으로 데이터 읽기를 제공

<br/>

**Firestore 구조**

<img width="250" alt="" src="https://user-images.githubusercontent.com/55340876/77067621-9a688a80-6a28-11ea-957b-86738115b9c5.png">

- NoSQL 데이터베이스의 일종으로 자료의 저장 단위는 문서 document 이다.
- 문서는 컬렉션 collection 안에 저장된다.
- 문서에는 키 - 값 형태로 다양한 형태의 자료 data 를 저장할 수 있다.
- 문서 안에 또 다른 컬렉션을 저장할 수 있다.

<br/>





```dart
import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

void main() => runApp(MyApp());

//할 일 클래스
class Todo {
  bool isDone = false;
  String title;

  Todo(this.title, {this.isDone = false});
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: '할 일 관리',
      theme: ThemeData(
        primarySwatch: Colors.red,
      ),
      home: TodoListPage(),
    );
  }
}

class TodoListPage extends StatefulWidget {
  @override
  _TodoListPageState createState() => _TodoListPageState();
}

class _TodoListPageState extends State<TodoListPage> {
  //할 일 목록을 저장할 리스트
  final _items = <Todo>[];

  //할 일 문자열 조작을 위한 컨트롤러
  var _todoController = TextEditingController();

  //메모리 릭 방지를 위해 컨트롤러는 dispose 필수
  @override
  void dispose() {
    _todoController.dispose(); //사용이 끝나면 해제
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('남은 할 일'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Column(
          children: <Widget>[
            Row(
              children: <Widget>[
                //영역 확장을 해줘야 TextField 위젯이 활성화 됨
                Expanded(
                  //입력을 받을 텍스트필드
                  child: TextField(
                    controller: _todoController,
                  ),
                ),
                RaisedButton(
                  child: Text('추가'),
                  onPressed: () => _addTodo(Todo(_todoController.text)),
                ),
              ],
            ),
            //스트림의 값이 변할 때마다 builder 부분이 재호출됨 (변경된 부분만 다시그림)
            //Firestore 에서는 snapshot() 메서드를 사용해 데이터의 스트림을 쉽게 얻는다
            StreamBuilder<QuerySnapshot>(
              //컬렉션에 있는 문서를 스트림으로 얻음. 자료가 변경되면 화면을 다시그림
              stream: Firestore.instance.collection('todo').snapshots(),
              //BuildContext 와 QuerySnapshot 객체가 각 context 와 snapshot 으로 넘어옴
              //여기에서 화면에 그려질 UI를 반환하도록 코드를 짠다
              builder: (context, snapshot) {
                //snapshot 에는 데이터를 포함하여 다양한 정보가 들어있다.
                //.hasData 로 자료의 유무를 얻는다
                if (!snapshot.hasData) {
                  //자료가 없다면 로딩표시를 한다
                  return CircularProgressIndicator();
                }
                //snapshot.data.documents 로 모든 문서를 얻음
                final documents = snapshot.data.documents;
                //Column 위젯의 children 프로퍼티에 포함될 때 영역 확장을 해줘야 ListView 위젯이 활성화 됨
                return Expanded(
                  //작성한 할 일 목록 UI가 표시되도록
                  child: ListView(
                    //값 리스트를 위젯 리스트로 변환하는 코드
                    //_items 리스트의 항목을 map() 함수를 통해 내부 순환하여
                    //doc을 인수로 받고 _buildItemWidget() 메서드를 반환한다
                    //이를 toList() 함수로 다시 리스트로 반환한다
                    children:
                        //documents 를 반복하여 doc을 통해 위젯을 그림
                        documents.map((doc) => _buildWidget(doc)).toList(),
                  ),
                );
              },
            ),
          ],
        ),
      ),
    );
  }

  //할 일 객체를 ListTile 형태로 변경하는 메서드
  //Firestore 문서는 DocumentSnapshot 클래스의 인스턴스다. 이를 받아서 Todo객체를 생성함
  Widget _buildWidget(DocumentSnapshot doc) {
    final todo = Todo(doc['title'], isDone: doc['isDone']);
    return ListTile(
      //완료 / 미완료
      onTap: () => _toggleTodo(doc),
      title: Text(
        //할 일
        todo.title,

        //완료일 때는 스타일 적용
        //isDone 프로퍼티의 값에 따라 삼항연산자 적용
        style: todo.isDone
            ? TextStyle(
                //취소선
                decoration: TextDecoration.lineThrough,
                //이택릭체
                fontStyle: FontStyle.italic)
            //아무 스타일도 적용 안 함
            : null,
      ),
      //쓰레기통 아이콘 배치
      trailing: IconButton(
        icon: Icon(Icons.delete_forever),
        //삭제
        onPressed: () => _deleteTodo(doc),
      ),
    );
  }

  //할 일 추가 메서드
  void _addTodo(Todo todo) {
    //todo컬렉션에 add() 메서드를 이용해 새로운 문서를 추가하는 코드
    //add() 메서드에는 Map 형식으로 데이터를 작성한다. (키: 값)
    Firestore.instance
        .collection('todo')
        .add({'title': todo.title, 'isDone': todo.isDone});
    //할 일을 추가한 후에 입력 필드를 비움
    _todoController.text = '';
  }

  //할 일 삭제 메서드
  void _deleteTodo(DocumentSnapshot doc) {
    //삭제할 때도 문서ID는 필수!
    Firestore.instance.collection('todo').document(doc.documentID).delete();
  }

  //할 일 완료/미완료 메서드
  void _toggleTodo(DocumentSnapshot doc) {
    //맨 처음 클릭하면 true 값(초기세팅 값이 false 임)으로 바뀌며 취소선+이택릭체 됨
    //문서를 업데이트 하려면 문서ID 가 필요하고, DocumentSnapshot 를 통해 문서ID 를 얻는다
    //document() 메서드에 인수로 전달하고 updateData() 메서드에 수정하고자 하는 내용을 Map 형태로 전달하면 자료가 업데이트됨
    Firestore.instance.collection('todo').document(doc.documentID).updateData({
      'isDone': !doc['isDone'],
    });
  }
}
```

![2020-03-19 20-57-02 2020-03-19 20_59_18](https://user-images.githubusercontent.com/55340876/77065573-e4e80800-6a24-11ea-8222-cb2e1aa33af3.gif)


<br/>
<br/>

# 기본 Todo App

```dart
import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

void main() => runApp(MyApp());

//할 일 클래스
class Todo {
  bool isDone = false;
  String title;

  Todo(this.title, {this.isDone = false});
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: '할 일 관리',
      theme: ThemeData(
        primarySwatch: Colors.red,
      ),
      home: TodoListPage(),
    );
  }
}

class TodoListPage extends StatefulWidget {
  @override
  _TodoListPageState createState() => _TodoListPageState();
}

class _TodoListPageState extends State<TodoListPage> {
  //할 일 목록을 저장할 리스트
  final _items = <Todo>[];

  //할 일 문자열 조작을 위한 컨트롤러
  var _todoController = TextEditingController();

  //메모리 릭 방지를 위해 컨트롤러는 dispose 필수
  @override
  void dispose() {
    _todoController.dispose(); //사용이 끝나면 해제
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('남은 할 일'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Column(
          children: <Widget>[
            Row(
              children: <Widget>[
                //영역 확장을 해줘야 TextField 위젯이 활성화 됨
                Expanded(
                  //입력을 받을 텍스트필드
                  child: TextField(
                    controller: _todoController,
                  ),
                ),
                RaisedButton(
                  child: Text('추가'),
                  onPressed: () => _addTodo(Todo(_todoController.text)),
                ),
              ],
            ),
            //Column 위젯의 children 프로퍼티에 포함될 때 영역 확장을 해줘야 ListView 위젯이 활성화 됨
            Expanded(
              //작성한 할 일 목록 UI가 표시되도록
              child: ListView(
                //값 리스트를 위젯 리스트로 변환하는 코드
                //_items 리스트의 항목을 map() 함수를 통해 내부 순환하여
                //todo인수로 받고 _buildItemWidget() 메서드를 반환한다
                //이를 toList() 함수로 다시 리스트로 반환한다
                children: _items.map((todo) => _buildItemWidget(todo)).toList(),
              ),
            ),
          ],
        ),
      ),
    );
  }

  //할 일 객체를 ListTile 형태로 변경하는 메서드
  //_buildItemWidget() 메서드는 상단Todo 객체를 인수로 받고 ListTile 위젯을 반환한다
  Widget _buildItemWidget(Todo todo) {
    return ListTile(
      //완료 / 미완료
      onTap: () => _toggleTodo(todo),
      title: Text(
        //할 일
        todo.title,

        //완료일 때는 스타일 적용
        //isDone 프로퍼티의 값에 따라 삼항연산자 적용
        style: todo.isDone
            ? TextStyle(
                //취소선
                decoration: TextDecoration.lineThrough,
                //이택릭체
                fontStyle: FontStyle.italic)
            //아무 스타일도 적용 안 함
            : null,
      ),
      //쓰레기통 아이콘 배치
      trailing: IconButton(
        icon: Icon(Icons.delete_forever),
        //삭제
        onPressed: () => _deleteTodo(todo),
      ),
    );
  }

  //할 일 추가 메서드
  void _addTodo(Todo todo) {
    setState(() {
      //_items 리스트에 추가
      _items.add(todo);
      //할 일을 추가한 후에 입력 필드를 비움
      _todoController.text = '';
    });
  }

  //할 일 삭제 메서드
  void _deleteTodo(Todo todo) {
    setState(() {
      //_items 리스트에서 삭제
      _items.remove(todo);
    });
  }

  //할 일 완료/미완료 메서드
  void _toggleTodo(Todo todo) {
    //맨 처음 클릭하면 true 값(초기세팅 값이 false 임)으로 바뀌며 취소선+이탤릭체 됨
    setState(() {
      todo.isDone = !todo.isDone;
      print(todo.isDone);
    });
  }
}
```

---
---

# Reference  
- 오준석의 플러터 생존코딩 (도서)