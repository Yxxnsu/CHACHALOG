---
title: '๐ [Flutter] Firebase Firestore Todo App ๐ฒ'
date: 2020-03-19 21:01:00
category: 'Flutter'
draft: false 
showToc: true
---

# ํด๋ผ์ฐ๋ DB๋ฅผ ํ์ฉํ Todo App

์ฑ์ ์ฌ์์ํ๋ฉด ๋ชจ๋  ์๋ฃ๊ฐ ์ฌ๋ผ์ง๋,   
์๋ฃ ์ ์ฅ์ ์ํด ๊ตฌ๊ธ ํ๋ฒ ๊ฐ ์ ๊ณตํด์ฃผ๋ ํด๋ผ์ฐ๋ DB๋ฅผ ์ฌ์ฉํด๋ณด์.

**Firebase**
- ๊ฐ์ธ์  ์๋ฒ ์์ด๋ ํ์ฉํ  ์ ์๋ ๋ค์ํ ์๋ฒ ๊ธฐ๋ฅ ์ ๊ณต
- ์ฝ๊ณ  ๊ฐํธํ ๋ฐ์ดํฐ ๋ฒ ์ด์ค
- ๋ฌธ์ ๊ธฐ๋ฐ์ ๊ตฌ์กฐ๋ผ ์ดํดํ๊ธฐ ์ฌ์ (SQL ๋ฌธ๋ฒ ๋ชฐ๋ผ๋ ๋จ)
- ์ค์๊ฐ์ผ๋ก ๋ฐ์ดํฐ ์ฝ๊ธฐ๋ฅผ ์ ๊ณต

<br/>

**Firestore ๊ตฌ์กฐ**

<img width="250" alt="" src="https://user-images.githubusercontent.com/55340876/77067621-9a688a80-6a28-11ea-957b-86738115b9c5.png">

- NoSQL ๋ฐ์ดํฐ๋ฒ ์ด์ค์ ์ผ์ข์ผ๋ก ์๋ฃ์ ์ ์ฅ ๋จ์๋ ๋ฌธ์ document ์ด๋ค.
- ๋ฌธ์๋ ์ปฌ๋ ์ collection ์์ ์ ์ฅ๋๋ค.
- ๋ฌธ์์๋ ํค - ๊ฐ ํํ๋ก ๋ค์ํ ํํ์ ์๋ฃ data ๋ฅผ ์ ์ฅํ  ์ ์๋ค.
- ๋ฌธ์ ์์ ๋ ๋ค๋ฅธ ์ปฌ๋ ์์ ์ ์ฅํ  ์ ์๋ค.

<br/>





```dart
import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

void main() => runApp(MyApp());

//ํ  ์ผ ํด๋์ค
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
      title: 'ํ  ์ผ ๊ด๋ฆฌ',
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
  //ํ  ์ผ ๋ชฉ๋ก์ ์ ์ฅํ  ๋ฆฌ์คํธ
  final _items = <Todo>[];

  //ํ  ์ผ ๋ฌธ์์ด ์กฐ์์ ์ํ ์ปจํธ๋กค๋ฌ
  var _todoController = TextEditingController();

  //๋ฉ๋ชจ๋ฆฌ ๋ฆญ ๋ฐฉ์ง๋ฅผ ์ํด ์ปจํธ๋กค๋ฌ๋ dispose ํ์
  @override
  void dispose() {
    _todoController.dispose(); //์ฌ์ฉ์ด ๋๋๋ฉด ํด์ 
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('๋จ์ ํ  ์ผ'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Column(
          children: <Widget>[
            Row(
              children: <Widget>[
                //์์ญ ํ์ฅ์ ํด์ค์ผ TextField ์์ ฏ์ด ํ์ฑํ ๋จ
                Expanded(
                  //์๋ ฅ์ ๋ฐ์ ํ์คํธํ๋
                  child: TextField(
                    controller: _todoController,
                  ),
                ),
                RaisedButton(
                  child: Text('์ถ๊ฐ'),
                  onPressed: () => _addTodo(Todo(_todoController.text)),
                ),
              ],
            ),
            //์คํธ๋ฆผ์ ๊ฐ์ด ๋ณํ  ๋๋ง๋ค builder ๋ถ๋ถ์ด ์ฌํธ์ถ๋จ (๋ณ๊ฒฝ๋ ๋ถ๋ถ๋ง ๋ค์๊ทธ๋ฆผ)
            //Firestore ์์๋ snapshot() ๋ฉ์๋๋ฅผ ์ฌ์ฉํด ๋ฐ์ดํฐ์ ์คํธ๋ฆผ์ ์ฝ๊ฒ ์ป๋๋ค
            StreamBuilder<QuerySnapshot>(
              //์ปฌ๋ ์์ ์๋ ๋ฌธ์๋ฅผ ์คํธ๋ฆผ์ผ๋ก ์ป์. ์๋ฃ๊ฐ ๋ณ๊ฒฝ๋๋ฉด ํ๋ฉด์ ๋ค์๊ทธ๋ฆผ
              stream: Firestore.instance.collection('todo').snapshots(),
              //BuildContext ์ QuerySnapshot ๊ฐ์ฒด๊ฐ ๊ฐ context ์ snapshot ์ผ๋ก ๋์ด์ด
              //์ฌ๊ธฐ์์ ํ๋ฉด์ ๊ทธ๋ ค์ง UI๋ฅผ ๋ฐํํ๋๋ก ์ฝ๋๋ฅผ ์ง ๋ค
              builder: (context, snapshot) {
                //snapshot ์๋ ๋ฐ์ดํฐ๋ฅผ ํฌํจํ์ฌ ๋ค์ํ ์ ๋ณด๊ฐ ๋ค์ด์๋ค.
                //.hasData ๋ก ์๋ฃ์ ์ ๋ฌด๋ฅผ ์ป๋๋ค
                if (!snapshot.hasData) {
                  //์๋ฃ๊ฐ ์๋ค๋ฉด ๋ก๋ฉํ์๋ฅผ ํ๋ค
                  return CircularProgressIndicator();
                }
                //snapshot.data.documents ๋ก ๋ชจ๋  ๋ฌธ์๋ฅผ ์ป์
                final documents = snapshot.data.documents;
                //Column ์์ ฏ์ children ํ๋กํผํฐ์ ํฌํจ๋  ๋ ์์ญ ํ์ฅ์ ํด์ค์ผ ListView ์์ ฏ์ด ํ์ฑํ ๋จ
                return Expanded(
                  //์์ฑํ ํ  ์ผ ๋ชฉ๋ก UI๊ฐ ํ์๋๋๋ก
                  child: ListView(
                    //๊ฐ ๋ฆฌ์คํธ๋ฅผ ์์ ฏ ๋ฆฌ์คํธ๋ก ๋ณํํ๋ ์ฝ๋
                    //_items ๋ฆฌ์คํธ์ ํญ๋ชฉ์ map() ํจ์๋ฅผ ํตํด ๋ด๋ถ ์ํํ์ฌ
                    //doc์ ์ธ์๋ก ๋ฐ๊ณ  _buildItemWidget() ๋ฉ์๋๋ฅผ ๋ฐํํ๋ค
                    //์ด๋ฅผ toList() ํจ์๋ก ๋ค์ ๋ฆฌ์คํธ๋ก ๋ฐํํ๋ค
                    children:
                        //documents ๋ฅผ ๋ฐ๋ณตํ์ฌ doc์ ํตํด ์์ ฏ์ ๊ทธ๋ฆผ
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

  //ํ  ์ผ ๊ฐ์ฒด๋ฅผ ListTile ํํ๋ก ๋ณ๊ฒฝํ๋ ๋ฉ์๋
  //Firestore ๋ฌธ์๋ DocumentSnapshot ํด๋์ค์ ์ธ์คํด์ค๋ค. ์ด๋ฅผ ๋ฐ์์ Todo๊ฐ์ฒด๋ฅผ ์์ฑํจ
  Widget _buildWidget(DocumentSnapshot doc) {
    final todo = Todo(doc['title'], isDone: doc['isDone']);
    return ListTile(
      //์๋ฃ / ๋ฏธ์๋ฃ
      onTap: () => _toggleTodo(doc),
      title: Text(
        //ํ  ์ผ
        todo.title,

        //์๋ฃ์ผ ๋๋ ์คํ์ผ ์ ์ฉ
        //isDone ํ๋กํผํฐ์ ๊ฐ์ ๋ฐ๋ผ ์ผํญ์ฐ์ฐ์ ์ ์ฉ
        style: todo.isDone
            ? TextStyle(
                //์ทจ์์ 
                decoration: TextDecoration.lineThrough,
                //์ดํ๋ฆญ์ฒด
                fontStyle: FontStyle.italic)
            //์๋ฌด ์คํ์ผ๋ ์ ์ฉ ์ ํจ
            : null,
      ),
      //์ฐ๋ ๊ธฐํต ์์ด์ฝ ๋ฐฐ์น
      trailing: IconButton(
        icon: Icon(Icons.delete_forever),
        //์ญ์ 
        onPressed: () => _deleteTodo(doc),
      ),
    );
  }

  //ํ  ์ผ ์ถ๊ฐ ๋ฉ์๋
  void _addTodo(Todo todo) {
    //todo์ปฌ๋ ์์ add() ๋ฉ์๋๋ฅผ ์ด์ฉํด ์๋ก์ด ๋ฌธ์๋ฅผ ์ถ๊ฐํ๋ ์ฝ๋
    //add() ๋ฉ์๋์๋ Map ํ์์ผ๋ก ๋ฐ์ดํฐ๋ฅผ ์์ฑํ๋ค. (ํค: ๊ฐ)
    Firestore.instance
        .collection('todo')
        .add({'title': todo.title, 'isDone': todo.isDone});
    //ํ  ์ผ์ ์ถ๊ฐํ ํ์ ์๋ ฅ ํ๋๋ฅผ ๋น์
    _todoController.text = '';
  }

  //ํ  ์ผ ์ญ์  ๋ฉ์๋
  void _deleteTodo(DocumentSnapshot doc) {
    //์ญ์ ํ  ๋๋ ๋ฌธ์ID๋ ํ์!
    Firestore.instance.collection('todo').document(doc.documentID).delete();
  }

  //ํ  ์ผ ์๋ฃ/๋ฏธ์๋ฃ ๋ฉ์๋
  void _toggleTodo(DocumentSnapshot doc) {
    //๋งจ ์ฒ์ ํด๋ฆญํ๋ฉด true ๊ฐ(์ด๊ธฐ์ธํ ๊ฐ์ด false ์)์ผ๋ก ๋ฐ๋๋ฉฐ ์ทจ์์ +์ดํ๋ฆญ์ฒด ๋จ
    //๋ฌธ์๋ฅผ ์๋ฐ์ดํธ ํ๋ ค๋ฉด ๋ฌธ์ID ๊ฐ ํ์ํ๊ณ , DocumentSnapshot ๋ฅผ ํตํด ๋ฌธ์ID ๋ฅผ ์ป๋๋ค
    //document() ๋ฉ์๋์ ์ธ์๋ก ์ ๋ฌํ๊ณ  updateData() ๋ฉ์๋์ ์์ ํ๊ณ ์ ํ๋ ๋ด์ฉ์ Map ํํ๋ก ์ ๋ฌํ๋ฉด ์๋ฃ๊ฐ ์๋ฐ์ดํธ๋จ
    Firestore.instance.collection('todo').document(doc.documentID).updateData({
      'isDone': !doc['isDone'],
    });
  }
}
```

![2020-03-19 20-57-02 2020-03-19 20_59_18](https://user-images.githubusercontent.com/55340876/77065573-e4e80800-6a24-11ea-8222-cb2e1aa33af3.gif)


<br/>
<br/>

# ๊ธฐ๋ณธ Todo App

```dart
import 'package:flutter/material.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

void main() => runApp(MyApp());

//ํ  ์ผ ํด๋์ค
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
      title: 'ํ  ์ผ ๊ด๋ฆฌ',
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
  //ํ  ์ผ ๋ชฉ๋ก์ ์ ์ฅํ  ๋ฆฌ์คํธ
  final _items = <Todo>[];

  //ํ  ์ผ ๋ฌธ์์ด ์กฐ์์ ์ํ ์ปจํธ๋กค๋ฌ
  var _todoController = TextEditingController();

  //๋ฉ๋ชจ๋ฆฌ ๋ฆญ ๋ฐฉ์ง๋ฅผ ์ํด ์ปจํธ๋กค๋ฌ๋ dispose ํ์
  @override
  void dispose() {
    _todoController.dispose(); //์ฌ์ฉ์ด ๋๋๋ฉด ํด์ 
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('๋จ์ ํ  ์ผ'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(8.0),
        child: Column(
          children: <Widget>[
            Row(
              children: <Widget>[
                //์์ญ ํ์ฅ์ ํด์ค์ผ TextField ์์ ฏ์ด ํ์ฑํ ๋จ
                Expanded(
                  //์๋ ฅ์ ๋ฐ์ ํ์คํธํ๋
                  child: TextField(
                    controller: _todoController,
                  ),
                ),
                RaisedButton(
                  child: Text('์ถ๊ฐ'),
                  onPressed: () => _addTodo(Todo(_todoController.text)),
                ),
              ],
            ),
            //Column ์์ ฏ์ children ํ๋กํผํฐ์ ํฌํจ๋  ๋ ์์ญ ํ์ฅ์ ํด์ค์ผ ListView ์์ ฏ์ด ํ์ฑํ ๋จ
            Expanded(
              //์์ฑํ ํ  ์ผ ๋ชฉ๋ก UI๊ฐ ํ์๋๋๋ก
              child: ListView(
                //๊ฐ ๋ฆฌ์คํธ๋ฅผ ์์ ฏ ๋ฆฌ์คํธ๋ก ๋ณํํ๋ ์ฝ๋
                //_items ๋ฆฌ์คํธ์ ํญ๋ชฉ์ map() ํจ์๋ฅผ ํตํด ๋ด๋ถ ์ํํ์ฌ
                //todo์ธ์๋ก ๋ฐ๊ณ  _buildItemWidget() ๋ฉ์๋๋ฅผ ๋ฐํํ๋ค
                //์ด๋ฅผ toList() ํจ์๋ก ๋ค์ ๋ฆฌ์คํธ๋ก ๋ฐํํ๋ค
                children: _items.map((todo) => _buildItemWidget(todo)).toList(),
              ),
            ),
          ],
        ),
      ),
    );
  }

  //ํ  ์ผ ๊ฐ์ฒด๋ฅผ ListTile ํํ๋ก ๋ณ๊ฒฝํ๋ ๋ฉ์๋
  //_buildItemWidget() ๋ฉ์๋๋ ์๋จTodo ๊ฐ์ฒด๋ฅผ ์ธ์๋ก ๋ฐ๊ณ  ListTile ์์ ฏ์ ๋ฐํํ๋ค
  Widget _buildItemWidget(Todo todo) {
    return ListTile(
      //์๋ฃ / ๋ฏธ์๋ฃ
      onTap: () => _toggleTodo(todo),
      title: Text(
        //ํ  ์ผ
        todo.title,

        //์๋ฃ์ผ ๋๋ ์คํ์ผ ์ ์ฉ
        //isDone ํ๋กํผํฐ์ ๊ฐ์ ๋ฐ๋ผ ์ผํญ์ฐ์ฐ์ ์ ์ฉ
        style: todo.isDone
            ? TextStyle(
                //์ทจ์์ 
                decoration: TextDecoration.lineThrough,
                //์ดํ๋ฆญ์ฒด
                fontStyle: FontStyle.italic)
            //์๋ฌด ์คํ์ผ๋ ์ ์ฉ ์ ํจ
            : null,
      ),
      //์ฐ๋ ๊ธฐํต ์์ด์ฝ ๋ฐฐ์น
      trailing: IconButton(
        icon: Icon(Icons.delete_forever),
        //์ญ์ 
        onPressed: () => _deleteTodo(todo),
      ),
    );
  }

  //ํ  ์ผ ์ถ๊ฐ ๋ฉ์๋
  void _addTodo(Todo todo) {
    setState(() {
      //_items ๋ฆฌ์คํธ์ ์ถ๊ฐ
      _items.add(todo);
      //ํ  ์ผ์ ์ถ๊ฐํ ํ์ ์๋ ฅ ํ๋๋ฅผ ๋น์
      _todoController.text = '';
    });
  }

  //ํ  ์ผ ์ญ์  ๋ฉ์๋
  void _deleteTodo(Todo todo) {
    setState(() {
      //_items ๋ฆฌ์คํธ์์ ์ญ์ 
      _items.remove(todo);
    });
  }

  //ํ  ์ผ ์๋ฃ/๋ฏธ์๋ฃ ๋ฉ์๋
  void _toggleTodo(Todo todo) {
    //๋งจ ์ฒ์ ํด๋ฆญํ๋ฉด true ๊ฐ(์ด๊ธฐ์ธํ ๊ฐ์ด false ์)์ผ๋ก ๋ฐ๋๋ฉฐ ์ทจ์์ +์ดํค๋ฆญ์ฒด ๋จ
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
- ์ค์ค์์ ํ๋ฌํฐ ์์กด์ฝ๋ฉ (๋์)