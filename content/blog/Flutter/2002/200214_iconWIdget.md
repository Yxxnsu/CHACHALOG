---
title: 'π [Flutter] λͺν¨ App'
date: 2020-02-14 16:38:00
category: 'Flutter'
draft: false 
showToc: true
---

# CircleAvatar Widget
 
μ¬μ©μλ₯Ό λνλ΄λ μ ννμ μμ ―.  
λ³΄ν΅ μ μ  νλ‘ν μ΄λ―Έμ§λ₯Ό κΎΈλ° λ μ¬μ©ν΄μ£Όλ μμ ―μ΄λ€.  



# Icon Widget

Icon μμ ―μ   
μμ λΆλ¬μ¬λμ²λΌ μλ λμμΈ μ°Έκ³ ν΄μ κ°λ€μ°λ©΄ λλκ±°λκΉ   
λ μ΄μμ μ€λͺμ μλ΅νλ€.

```dart
...


              CircleAvatar(
                radius: 60.0,
                backgroundImage: AssetImage('images/chacha.jpg'),
              ),
              Text(
                'JinJoo',
                style: TextStyle(
                  fontFamily: 'Pacifico',
                  fontSize: 40.0,
                  color: Colors.white,
                  fontWeight: FontWeight.bold,
                ),
              ),
              Text(
                'FLUTTER DEVELOPER',
                style: TextStyle(
                    fontFamily: 'Source Sans Pro',
                    color: Colors.teal.shade100,
                    fontSize: 20.0,
                    letterSpacing: 2.5,
                    fontWeight: FontWeight.bold),
              ),
              Container(
                color: Colors.white,
                padding: EdgeInsets.all(10.0),
                margin: EdgeInsets.symmetric(vertical: 10.0, horizontal: 25.0),
                child: Row(
                  children: <Widget>[
                    Icon(
                      Icons.phone,
                      color: Colors.teal,
                    ),
                    SizedBox(
                      width: 10.0,
                    ),
                    Text(
                      '+82 123 456 789',
                      style: TextStyle(
                        color: Colors.teal.shade900,
                        fontFamily: 'Source Sans Pro',
                        fontSize: 20.0,
                      ),
                    ),
                  ],
                ),
              ),
              Container(
                color: Colors.white,
                padding: EdgeInsets.all(10.0),
                margin: EdgeInsets.symmetric(vertical: 10.0, horizontal: 25.0),
                child: Row(
                  children: <Widget>[
                    Icon(
                      Icons.email,
                      color: Colors.teal,
                    ),
                    SizedBox(
                      width: 10.0,
                    ),
                    Text(
                      'chajanee@gmail.com',
                      style: TextStyle(
                        color: Colors.teal.shade900,
                        fontFamily: 'Source Sans Pro',
                        fontSize: 20.0,
                      ),


...
```

<img width="1387" alt="1" src="https://user-images.githubusercontent.com/55340876/74589235-dd5cca00-5046-11ea-985c-57b936bfd00c.png">



# Card Widget & Padding Widget


Card μμ ―μ  
μΉ΄λμ λͺ¨μλ¦¬κ° μ½κ° λ₯κΈκ³  κ·Έλ¦Όμκ° μμΌλ©°,  
padding μμ±μ΄ μλ€.  
(κΈ°λ³Έμ μΌλ‘ Card μμ ―μ μμμ΄ whiteλ‘ λ¨Ήμ¬μ Έμλ€)

μΌμλ ν¨λ©μ μ§μ νκ³  μΆμλ° μλλ€κ³ ?! λ‘Έ?  

μ΄λ΄ κ²½μ°μ,  
Card μμ ―μ μμμΌλ‘ Padding μμ ―μ μ¨μ£Όμ.  

μ¬κΈ°μ λλ μλ¬Έμ !  
λλ μμͺ½ ν¨λ© λ§κ³  λ°κΉ₯μͺ½μΌλ‘ μ¬λ°±μ μ’ μ£Όκ³  μΆμλ°?  
μ κ²½μ°μλ λ°λλ‘ Card μμ ―μ μμμΌλ‘ λκ³ ,  
λΆλͺ¨ μμ ―μΌλ‘ Padding μμ ―μ μ¬μ΄μ£Όλ©΄ λλ€!  



κ³΅μλ¬Έμλ₯Ό μκΈ΄νκ² μ¨λ¨Ήμ. λ€ λμμλ€.



```dart
...


              Card(
                color: Colors.white,
                margin: EdgeInsets.symmetric(vertical: 10.0, horizontal: 25.0),
                child: Row(
                  children: <Widget>[
                    Icon(
                      Icons.phone,
                      color: Colors.teal,
                    ),
                    SizedBox(
                      width: 10.0,
                    ),
                    Text(
                      '+82 123 456 789',
                      style: TextStyle(
                        color: Colors.teal.shade900,
                        fontFamily: 'Source Sans Pro',
                        fontSize: 20.0,
                      ),
                    ),
                  ],
                ),
              ),
              Card(
                color: Colors.white,
                margin: EdgeInsets.symmetric(vertical: 10.0, horizontal: 25.0),
                child: Row(
                  children: <Widget>[
                    Icon(
                      Icons.email,
                      color: Colors.teal,
                    ),
                    SizedBox(
                      width: 10.0,
                    ),
                    Text(
                      'chajanee@gmail.com',
                      style: TextStyle(
                        color: Colors.teal.shade900,
                        fontFamily: 'Source Sans Pro',
                        fontSize: 20.0,
                      ),
                    ),
                  ],


...
```



![2](https://user-images.githubusercontent.com/55340876/74589240-e5b50500-5046-11ea-976c-c4702ab44dfd.gif)



# ListTile Widget

ν­λͺ© λ¦¬μ€νΈλ‘,  
μΌλ°μ μΌλ‘ λ¦¬μ€νΈ λ°μ€μ μλΆλΆμ΄λ λ·λΆλΆμ μμ΄μ½ λΏλ§ μλλΌ μΌλΆ νμ€νΈλ₯Ό ν¬ν¨νλ  
λ¨μΌ κ³ μ  λμ΄μ νμ΄λ€. 



![3](https://user-images.githubusercontent.com/55340876/74589242-efd70380-5046-11ea-976c-9dc76f474870.png)



# Divider Widget

μνμ  μμ ―.  
μμ μ¬μ΄λ₯Ό κ΅¬λΆ (μ»¨νμΈ  λΆλ¦¬) μ§μ λ μμ£Ό μ¬μ©νλ€.


# μ΅μ’μ½λ

```dart
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        backgroundColor: Colors.teal,
        body: SafeArea(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              CircleAvatar(
                radius: 60.0,
                backgroundImage: AssetImage('images/chacha.jpg'),
              ),
              Text(
                'JinJoo',
                style: TextStyle(
                  fontFamily: 'Pacifico',
                  fontSize: 40.0,
                  color: Colors.white,
                  fontWeight: FontWeight.bold,
                ),
              ),
              Text(
                'FLUTTER DEVELOPER',
                style: TextStyle(
                    fontFamily: 'Source Sans Pro',
                    color: Colors.teal.shade100,
                    fontSize: 20.0,
                    letterSpacing: 2.5,
                    fontWeight: FontWeight.bold),
              ),
              SizedBox(
                height: 20.0,
                width: 150.0,
                child: Divider(
                  color: Colors.teal.shade100,
                ),
              ),
              Card(
                margin: EdgeInsets.symmetric(vertical: 10.0, horizontal: 25.0),
                child: ListTile(
                  leading: Icon(
                    Icons.phone,
                    color: Colors.teal,
                  ),
                  title: Text(
                    '+82 123 456 789',
                    style: TextStyle(
                      color: Colors.teal.shade900,
                      fontFamily: 'Source Sans Pro',
                      fontSize: 20.0,
                    ),
                  ),
                ),
              ),
              Card(
                margin: EdgeInsets.symmetric(vertical: 10.0, horizontal: 25.0),
                child: ListTile(
                  leading: Icon(
                    Icons.email,
                    color: Colors.teal,
                  ),
                  title: Text(
                    'chajanee@gmail.com',
                    style: TextStyle(
                      color: Colors.teal.shade900,
                      fontFamily: 'Source Sans Pro',
                      fontSize: 20.0,
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

```



<img width="1388" alt="4" src="https://user-images.githubusercontent.com/55340876/74589243-f06f9a00-5046-11ea-8515-51c9ac212b52.png">



<img width="378" alt="5" src="https://user-images.githubusercontent.com/55340876/74589245-f1a0c700-5046-11ea-83d6-1b9d2525185c.png">



<br/>


---
---

# Reference  
- [Angela Yu κ°μ(μ λ£)](https://www.udemy.com/course/flutter-bootcamp-with-dart/)
- [CircleAvatar Class (κ³΅μλ¬Έμ)](https://api.flutter.dev/flutter/material/CircleAvatar-class.html)
- [Material Icons](https://www.materialpalette.com/icons)
- [Card Class (κ³΅μλ¬Έμ)](https://api.flutter.dev/flutter/material/Card-class.html)
- [Padding Class (κ³΅μλ¬Έμ)](https://api.flutter.dev/flutter/widgets/Padding-class.html)
- [ListTile Class (κ³΅μλ¬Έμ)](https://api.flutter.dev/flutter/material/ListTile-class.html)
- [Divider Class (κ³΅μλ¬Έμ)](https://api.flutter.dev/flutter/material/Divider-class.html)


