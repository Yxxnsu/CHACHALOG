---
title: 'π [Flutter] Layouts Challenge'
date: 2020-02-14 02:28:00
category: 'Flutter'
draft: false 
showToc: true
---

# μ£Όμ΄μ§ μμ 

<img width="676" alt="1" src="https://user-images.githubusercontent.com/55340876/74589183-64f60900-5046-11ea-85da-6b39560855db.png">



<br/>

---

<br/>

# λ΄κ° μμ±ν μ½λ


```dart
import 'package:flutter/material.dart';

void main() => runApp(MyApp());
//void main() {
//  runApp(
//      MyApp()
//  );
//}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: Scaffold(
        backgroundColor: Colors.teal,
        body: SafeArea(
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: <Widget>[
              Container(
                width: 100.0,
                color: Colors.red,
              ),
              Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: <Widget>[
                  Container(
                    width: 100.0,
                    height: 100.0,
                    color: Colors.yellow,
                  ),
                  Container(
                    width: 100.0,
                    height: 100.0,
                    color: Colors.lime[600],
                  ),
                ],
              ),
              Container(
                width: 100.0,
                height: double.infinity,
                color: Colors.blue,
              ),
            ],
          ),
        ),
      ),
    );
  }
}

```

<img width="1450" alt="2" src="https://user-images.githubusercontent.com/55340876/74589180-5dcefb00-5046-11ea-87b2-ff31b9e9eae3.png">



<img width="397" alt="3" src="https://user-images.githubusercontent.com/55340876/74589184-658e9f80-5046-11ea-9147-2ae226ad0e8d.png">



μ¬μ΄λμ μμͺ½ λ°μ€ λκ°λ μ¬μ λλ°  
κ°μ΄λ° λ°μ€ λκ°λ₯Ό μΈλ‘λ‘ λμ΄νλλ°μ λ§νμλ€.  
~~(λΉμ΄λ¨Ήμ CSS)~~

λ°λ³΄κ°μ΄ Row μμ ― μμ Column μμ ―μ λͺ»λ€μ΄κ°λ€κ³  μκ°μ νκ³   (μ¨?! λμ²΄ μ?!!!)  
κ³μ μ½μ§νλ€κ°...  

μ΄?  
μλμ§?!  
Row μμ ― -> children μμ ― μμ λ³΅μλ‘ μμλ€ μμ ―μ΄ μ«γλΌλΌλ½ μλκ±΄λ°!!  
λΉμ°ν λ€λ₯Έ μμ ―λ λ€μ΄κ°μ§ μ§μ£ΌμΌ!!!! μ μ μ°¨λ¦¬λΌκ³ !!! 

ν΄μ λ°λ‘ νγ±ννκ°ν  

![4](https://user-images.githubusercontent.com/55340876/74589182-645d7280-5046-11ea-9f5e-1f68f5f2eb70.jpg)



μ±λ¦°μ§ μ±κ³΅!  

μ λ° μ§μ£ΌμΌ.... μ½λ μ’ μ§μ  μ³λ³΄κ³  λλμ§ μλλμ§ νλ¨νμ...  
λλ λμ π§ λ₯Ό λ―ΏμΌλ©΄ μλΌ..   
μμ¬νκ³  λ μμ¬νκ³  λ μμ¬νκ³  λ μμ¬νκ±°λΌ... 



<br/>


---
---

# Reference  
- [Angela Yu κ°μ(μ λ£)](https://www.udemy.com/course/flutter-bootcamp-with-dart/)
- [λ μ΄μμ μμ ― (Flutter κ³΅μλ¬Έμ)](https://flutter.dev/docs/development/ui/widgets/layout)
- [Tomekμ Flutter Layout Cheat Sheet](https://medium.com/flutter-community/flutter-layout-cheat-sheet-5363348d037e)