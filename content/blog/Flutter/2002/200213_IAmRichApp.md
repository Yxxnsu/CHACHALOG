---
title: 'π [Flutter] μ±μ κΈ°μ΄ (I Am Rich App)'
date: 2020-02-13 00:57:00
category: 'Flutter'
draft: false 
showToc: true
---

# κΈ°λ³Έ μμΉ μμ ―

<img width="1223" alt="1" src="https://user-images.githubusercontent.com/55340876/74589010-ecdb1380-5044-11ea-854e-09fbfc347023.png">



---

# I Am Rich App 1

```dart
import 'package:flutter/material.dart';

//main() ν¨μλ λͺ¨λ  Flutter μ±μ μμμ μ΄λ€.
void main() => runApp(
  MaterialApp(
    debugShowCheckedModeBanner: false,
    home: Scaffold(
      backgroundColor: Colors.redAccent,
      appBar: AppBar(
        title: Text('I Am Rich'),
        backgroundColor: Colors.amber,
        elevation: 0.0,
      ),
      body: Center(
        child: Image(
          image: NetworkImage(
              'https://cdn.bitdegree.org/learn/pexels-photo-920220.jpeg?4d5e638c'),
        ),
      ),
    ),
  ),
);

```

<img width="1403" alt="2" src="https://user-images.githubusercontent.com/55340876/74589013-f2385e00-5044-11ea-891d-964f71518123.png">




---


# [λ€μ΄μ΄κ·Έλ¨ λ§λλ μ¬μ΄νΈ](https://www.draw.io/)

I Am Rich App μ½λλ₯Ό λ€μ΄μ΄κ·Έλ¨μΌλ‘ κ΅¬ννμ λ ππ»

<br/>

<img width="749" alt="3" src="https://user-images.githubusercontent.com/55340876/74589014-f4022180-5044-11ea-858b-8ed6471881ff.png">




<br/>

---



# I Am Rich App 2 (μ΅μ’μ½λ)

```dart
import 'package:flutter/material.dart';

//main() ν¨μλ λͺ¨λ  Flutter μ±μ μμμ μ΄λ€.
void main() => runApp(
      MaterialApp(
        debugShowCheckedModeBanner: false,
        home: Scaffold(
          backgroundColor: Colors.amber[100],
          appBar: AppBar(
            title: Text('I Am Rich'),
            backgroundColor: Colors.amber,
            elevation: 0.0,
          ),
          body: Center(
            child: Image(
              image: AssetImage('images/diamond.png'),
            ),
          ),
        ),
      ),
    );

```

<img width="1676" alt="4" src="https://user-images.githubusercontent.com/55340876/74589015-f49ab800-5044-11ea-83b4-e92eedaf03db.png">



<br/>
<br/>

---

# * μ΄λ―Έμ§ λΆλ¬μ€κΈ° 

<img width="1272" alt="5" src="https://user-images.githubusercontent.com/55340876/74589016-f5334e80-5044-11ea-93a9-ca686d1df107.png">



ν­μ ``pubspec.yaml`` νμΌμμ κ²½λ‘λ₯Ό μμ  ν,  

μ μ©μ΄ μ λμλμ§ νμΈν΄μ£Όκ³  (μ μ₯ + μ°μλ¨ Packages get + νλ¨ console μ°½)  
κ·Έ νμ μ΄λ―Έμ§λ₯Ό λΆλ¬μμ£Όμ!


<br/>


---
---

# Reference  
- [Angela Yu κ°μ(μ λ£)](https://www.udemy.com/course/flutter-bootcamp-with-dart/)

