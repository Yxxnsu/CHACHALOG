---
title: '๐ [Dart] ๊ธฐ์ด ๋ฌธ๋ฒ'
date: 2020-02-03 10:00:00
category: 'Dart'
draft: false 
showToc: true
---

<!-- Draft Post -->
<!-- Draft Post -->
<!-- Draft Post -->
<!-- Draft Post -->
<!-- Draft Post -->
<!-- Draft Post -->


# Dart ์ธ์ด

**1. ์ ์ง๋ณด์๊ฐ ์ฌ์.**  
 - ๋ค๋ฅธ ์ธ์ด์ ๋นํด ์ฌ์  
   
**2. ๋ฐฐ์ฐ๊ธฐ๊ฐ ์ฌ์.**  
 - loose and strong type  
 - syntax๊ฐ ๊ฐ๊ฒฐ, ์ฌํ  
   
**3. ์์ฐ๋ ฅ์ ์ฆ๊ฐ์ํฌ ์ ์์ด.**  
  - ์ธ์ณ ๊ฐ๊ตฌ๊ธ!!!  
  - ๋ฐฉ๋ํ ๋ผ์ด๋ธ๋ฌ๋ฆฌ  
  - ์ฝ๊ณ  ๋นจ๋ฆฌ ๋ง๋ค ์ ์์  
    
**4. Reactive Programming (์ถํ ์ค๋ช)**  
  
---
# Hello World

**https://dartpad.dartlang.org/**  
**๋งํฌ๋ฅผ ํตํด ์ฌํ ์ดํ๋ฆฌ์ผ์ด์์ ๋ง๋ค์ด ๋ณด์!**  

## ```Dart ์ธ์ด๋ run ํ๋ฉด ๋ฌด์กฐ๊ฑด main() ๋ถํฐ ์ฐพ๋๋ค```  
  

```dart
void main() { //Dart ์ธ์ด๋ run ํ๋ฉด ๋ฌด์กฐ๊ฑด main() ๋ถํฐ ์ฐพ๋๋ค
  print('Hello World');
}
```  


~~_์ง๊ธ์ง๊ธํ 'hello world' ...๐ซ_~~
  
**์๋จ ์ฝ๋ ๋ธ๋ญ์ ์ ๊ฑฐ ์์ฒด๋ฅผ ๋ฉ์๋ ๋ผ๊ณ  ํด.**  
๊ทธ๋ฅ ์ผ๋จ box๋ผ๊ณ  ์๊ฐํ์!  
  
    

>box๊ฐ ๋นต์ ๋ง๋๋ ๊ธฐ๊ณ๋ผ๊ณ  ์๊ฐํด๋ด.  
๊ธฐ๊ณ ์๊ตฌ์ ๋ฐ๊ฐ๋ฃจ๋ฅผ ๋ฃ์ผ๋ฉด ์์์ ํ๋ก์ธ์ค๊ฐ ์ผ์ด๋๊ณ , ๊ทธ๊ฑธ ์ฒ๋ฆฌํ๊ณ  ๋์  
๋ฐ๊นฅ ์ถ๊ตฌ๋ก ๋์ฌ ๋๋ ๋นต์ผ๋ก ๋์ค๋๊ฒจ!  
๊ทธ๊ฑธ ํตํ์ด์ ํ๋์ ๋ฉ์๋๋ผ๊ณ  ๋ณด๋ฉด ๋จ.  
  

**```void``` = ์ถ๊ตฌ  
```()``` = ์๊ตฌ  
```{}``` = ์ค๊ดํธ ์์ ์๋ ๋ฐ๋๋ ์ฒ๋ฆฌํ๋ ๊ณผ์   
```main``` = ๋ฉ์๋์ ์ด๋ฆ / ๋นต ๊ธฐ๊ณ ์ด๋ฆ  
```print``` = ๋ฉ์๋**  
  
    
  

**main ์ด๋ผ๋ ๋ฉ์๋์์ print ๋ผ๋ ๋ฉ์๋๋ฅผ ์ฌ์ฉํ๊ฑฐ์ผ.**  
  


์  ๋ฉ์๋๋ ๋ฐ๋ ๊ฒ๋ ์๊ณ  ์ฃผ๋ ๊ฒ๋ ์์ด, ๋จ์ง ์ฒ๋ฆฌ๋ง ํ๋๊ฒจ.   
๋ญ ์๋ฆฐ๊ฐ ์ถ์ง?  
๊ทธ๋ฅ "ํ๋ฉด์ ํฌ๋ก ์๋๋ง ๋ณด์ฌ์ค" ์ด๊ฑฐ์ผ.  

    

<img width="690" alt="1" src="https://user-images.githubusercontent.com/55340876/74587935-c6fd4100-503b-11ea-8b8d-afcacaa3eb11.png">
  


์ฐ๋ฆฐ ํฌ๋ก ์๋๋ฅผ print ํ๋ ์ดํ๋ฆฌ์ผ์ด์์ ๋ง๋  ๊ฑฐ์ผ.   
์ถํํด!!! ๋ฐ์์ง์ง!!! ๐๐ป  
  
---  
  

# Variable / Type  
  


```dart
void main() {
//   var name = 'jane'; //string
//   var year = 1992; //int
//   var sosujum = 1.8; //double
//   var arr = ['dohee', 'heela', 'soyeon', 'hyojin']; //List<String>
//   var arr3 = ['dohee', 1988, 'heela', 'soyeon', 'hyojin']; //List<Object>
//   var arr4 = [1, 2, 3, 4]; //List<int>
  
//์๋จ ๋ด์ฉ์ฒ๋ผ var์ ์จ๋ ๋์ง๋ง ๋์ค์ ์ํด ํ๋จ์ฒ๋ผ ์ง์  ํ์์ ์ง์ ํ๋ฉด์ ์ฝ๋๋ฅผ ์ง๋๊ฒ ์ข์!
//var image = arr[1]; ๐ฆ์ด๊ฒ ๋์ฒด ๋ญ ํ์์ผ๋ก ๊ตฌ์ฑ๋ ์๋๊ฒจ?
//int image = arr[1]; ๐์ด๊ฑด int ํ์์ผ๋ก ๊ตฌ์ฑ๋ ์๊ตฌ๋ง!
//์๋ก์ฝ๋กฌ ํ๋ค๊ฒ ํด๋น arr[1] ์ฝ๋๋ฅผ ์ง์  ํ๊ณ  ์ฌ๋ผ๊ฐ์ง ์์๋ ์ ์ถํ  ์ ์๋๊ฑฐ์ง.
  String name = 'jane';
  int year = 1992;
  double sosujum = 1.8;
  List<String> arr = ['dohee', 'heela', 'soyeon', 'hyojin'];
  List<Object> arr3 = ['dohee', 1988, 'heela', 'soyeon', 'hyojin'];
  List<int> arr4 = [1, 2, 3, 4];
  
  
  List<String> arr2 = ['dohee', 'heela', 'soyeon', 'hyojin']; //ํ์์ int๋ก ํ๋ฉด ๋น์ฐํ ์ค๋ฅ๋!
  
  var image = { //Map<String, Object>
    'tags': ['BTS'], //Key: Value
    'url': '//path/to/BTS.jpg'
  };
  
  print(image['tags']);
  print(image['url']);
  print(arr3[1]);
  
}

```  
  



Dart ์์๋ ํ์์ ์ถ๋ก ํด์ค์ var ๋ก ๋ณ์ ์ ์ธ์ ํด์ค๋ ๋์ง๋ง,  
์ ๋งํ๋ฉด ๋์ค์ ์ํด ์ง์  ํ์์ ๋ถ์ฌ์ ์ ์ธํด์ฃผ๋๊ฒ ์ข์.  
๊ณต์ ๋ฌธ์์์๋ ๊ทธ๊ฑธ ๊ถํ๊ณ  ์๊ณ !!!  

  


<img width="1062" alt="2" src="https://user-images.githubusercontent.com/55340876/74587938-c8c70480-503b-11ea-9f88-316e465b8912.png">

  


---  
  
  
# if๋ฌธ  
  
```dart
void main() {
  
  int age = -1;
  
  if (age >= 20){ //20์ธ๋ณด๋ค ํฌ๊ฑฐ๋ ๊ฐ์ผ๋ฉด
    print('ํ ๋งฅ๊ฐ์ ์ง๋ก ๊ณ ๊ณ ?!');
  }else if (age <20 && age >=0){ //&& = ๊ทธ๋ฆฌ๊ณ  , 0์ธ ~ 19์ธ ๊น์ง๋ ์ข ๋ ํฌ๊ณ  ์๋ผ!
    print('์ข ๋ ํฌ๊ณ  ์๋ผ.');
  }else{ //์์ 2๊ฐ ์กฐ๊ฑด์ ์ถฉ์กฑํ์ง ์์๋ค๋ฉด
    print('ํ์ด๋์ง๋ ์์์์ ์๋ง!');
  }
  
}

```  
  




![3](https://user-images.githubusercontent.com/55340876/74587940-ca90c800-503b-11ea-8f86-c5112ad6efc5.gif)
  



---  
  



# for๋ฌธ / while๋ฌธ  
  



```dart
void main() {
  
  List<String> boyfriends = ['๊นํํ', '๋จ์ฃผํ', '์ํจ์ญ', '๊ฐํ๋'];
  
  for (String boy in boyfriends){ //for = ~๋์ , ๋ฆฌ์คํธ ์์ ์๋ ๊ฐ๋ค์ ํ๋์ฉ ๋ค ๊ฑฐ์น ๋์ ํ๋ฒ์ฉ ์คํ์ ํด. '๊นํํ' ์ boy ์ ๋ฃ์ด์ ์คํ.. '๋จ์ฃผํ' ์ boy ์ ๋ฃ์ด์ ์คํ...
    print(boy);
  }
  
  for (int i=0; i<4; i++){ //i๊ฐ 4๋ณด๋ค ์์ผ๋ฉด ํ๋ฒ ํ๋ฆฐํธ ์คํํ (์ฒ์ i=0์ด์ผ! ๊นํํ์ด ์คํ๋๊ฒ ์ง?), i์ 1์ ๋ํด์ค. ๊ทธ๋ผ i๊ฐ 1์ด ๋๊ณ  4๋ณด๋ค ์์ผ๋ฉด ์คํํ(๋จ์ฃผํ์ด ์คํ๋๊ฒ ์ง?), i์ ๋ 1์ ๋ํด์ค. ๊ทธ๋ผ i๊ฐ 2๊ฐ ๋๊ณ .... ์กฐ๊ฑด์ด false๊ฐ ๋ ๋๊น์ง ์คํํ์ง!
    print(boyfriends[i]);
  }
  
  for (int i=0; i<boyfriends.length; i++){ //๋ฆฌ์คํธ ์์ ์์๊ฐ ์์ฒ๊ฐ๋ฉด ์ผ์ผ์ด ์ซ์ ์ธ๊ฑฐ์ผ?! i<boyfriends.length ์ฐ๋ฉด ๊ทธ ๊ธธ์ด๋ณด๋ค ์์ ๋๊น์ง ๋๋๊ฑฐ์ง!
    print(boyfriends[i]);
  }
  
  print('---------๋ฐ์์๋ถํฐ๋ while๋ฌธ---------');
  
  int index = 0;
  
  while (index<boyfriends.length){
    print(boyfriends[index]);
    index++; //์ด๊ฑธ ์๊ฑธ์ด์ฃผ๋ฉด index ๊ฐ์ ํญ์ 0์ด๋ผ์ ์กฐ๊ฑด์ด ํญ์ true๊ฐ ๋๊ณ  ๋ฌดํ๋ฃจํ ๋๊ณ  ํ๋ก๊ทธ๋จ ๋ ๋จน๋๊ฑฐ์ง ๋ญ!
  }
  
}

```  
  




<img width="1183" alt="4" src="https://user-images.githubusercontent.com/55340876/74587941-cbc1f500-503b-11ea-8d38-0379927225c6.png">

  



**โฝ NO์ฃผ์ ๊นจ๋ฅด๊ผผ ๋ฒ์  ์บก์ณ**  

<img width="1183" alt="5" src="https://user-images.githubusercontent.com/55340876/74587943-cc5a8b80-503b-11ea-8f81-929c28e1721f.png">
  



**while ๋ฌธ์์ ์ฃผ์ ํ  ์ ์**  
์กฐ๊ฑด์ด true.  
๊ทธ๋๊น **์กฐ๊ฑด์ด ์ถฉ์กฑ๋๋ฉด ๊ณ์ ๋ฌดํ๋ฃจํ ๋๋๊น ๋ธ๋ ์ดํฌ๋ฅผ ๊ผญ ๊ฑธ์ด์ค์ผํด.**  
์ด๋ป๊ฒ ๋ณด๋ฉด for๋ฌธ์ ๋นํด ์ปจํธ๋กค ํด์ค๊ฒ ๋ง์๊ฑฐ๋ผ ํญ์ ์ฑ์๊ฐ์ ๊ฐ๊ณ  ์ฝ๋๋ฅผ ์ง์ผํด!  
_๋ฌดํ๋ฃจํ ๋๋ค ๋ค์ด๋๋ฉด ๋ด ์๋ชป์ด๋๊น..._ ๐ฅบ  
  


---  
  

# bool

```dart
bool isEven(int x) { //์ ์ x๊ฐ ์ง์์ผ? (isOdd ํ์์ผ?)
  // An if-else statement.
  if (x % 2 == 0) { //๋ง์ฝ์ x๋ฅผ 2๋ก ๋๋ ๋๋จธ์ง ๊ฐ์ด 0๊ณผ ๊ฐ์ผ๋ฉด (๋๋จธ์ง๊ฐ 0์ด๋ฉด ์ง์)
    return true;
  } else { //๊ทธ๊ฒ ์๋๋ฉด (๋๋จธ์ง๊ฐ 0์ด ์๋๋ฉด ํ์๊ฒ ์ง?!)
    return false;
  }
}

List<int> getEvenNumbers(Iterable<int> numbers) {
  var evenNumbers = <int>[];

  // A for-in loop.
  for (var i in numbers) { //numbers์ ์๋ ๋ฐ์ดํฐ๋ฅผ ํ๊ฐ์ฉ ๋ค์ ธ์ค
    // A single-line if statement.
    if (isEven(i)) evenNumbers.add(i); //๋ง์ฝ์ (isEven(i))๊ฐ ์ง์, true๋ฉด evenNumbers ๋ฆฌ์คํธ์ add(i) ๋ฐ์ดํฐ๋ฅผ ๋ฃ์ด์ค๋ผ.
  }

  return evenNumbers;
}

main() {
  var numbers = List.generate(10, (i) => i); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] ๋ ๊ฐ์๋ง
  print(getEvenNumbers(numbers));
}
  
```


<img width="1085" alt="6" src="https://user-images.githubusercontent.com/55340876/74587944-ccf32200-503b-11ea-9cfb-c66128f0baa0.png">



---

# Strings

```dart
main() {
  print('a single quoted string');
  print("a double quoted string"); //์์๋ฐ์ดํ, ํฐ๋ฐ์ดํ ์๊ด์์ด!

  // ๋ฌธ์์ด ๋ผ๋ฆฌ๋ + ์ฐ์ฐ์์ ๊ฒฐํฉํด์ ์ฌ์ฉํด.
  print("cat" + "dog");

  // ์ผ์ค ๋ฐ์ดํ๋ ์ฌ๋ฌ ์ค ๋์ด์ฐ๊ธฐ ํ ๋ ์ฌ์ฉํด.
  print('''triple quoted strings
are for multiple lines''');

  // Dart supports string interpolation.
  var pi = 3.14;
  print('pi is $pi'); //์คํธ๋ง์ ๋ณ์ ๊ฐ๋ง ํฌํจํ๊ณ  ์ถ์๋! $๋ณ์๋ช
  print('tau is ${2 * pi}'); //๋ณ์ ๊ฐ ์ด์ธ์๋ ๊ณ์ฐ์ด๋ ์ค๋ธ์ ํธ ์์ ์๋ ๋ณ์ ๊ฐ์ ๋ค์ฌ๋ค ๋ณด๊ณ ์ถ์ ๋ ์ค๊ดํธ ๊ฐ์ด์จ! ${}
}
  
```


<img width="1136" alt="7" src="https://user-images.githubusercontent.com/55340876/74587946-cd8bb880-503b-11ea-8d03-4396576bce42.png">


---
 
# collection literals

```dart
// A list literal.
var lostNumbers = [4, 8, 15, 16, 23, 42];

// A map literal.
var nobleGases = {
  'He': 'Helium',
  'Ne': 'Neon',
  'Ar': 'Argon',
};

// A set literal.
var frogs = {
  'Tree',
  'Poison dart',
  'Glass',
};

main() {
  print(lostNumbers[3]);
  print(lostNumbers.first);
  print(lostNumbers.last);
  print(nobleGases['Ne']);
  print(frogs.difference({'Poison dart'}));
}
  
```


<img width="689" alt="8" src="https://user-images.githubusercontent.com/55340876/74587947-ce244f00-503b-11ea-93f9-a419cb4a92a7.png">


---

# ํจ์  
  


```dart
void main() {
  
  List<String> boyfriends = ['๊นํํ', '๋จ์ฃผํ', '์ํจ์ญ', '๊ฐํ๋'];

  int index = 0;
  
  while (index<boyfriends.length){
    print(makeStory(boyfriends[index])); //1๏ธโฃindex์ ๋ง๋ ์คํธ๋ง(๊นํํ)์ ๊ฐ์ ธ์์ makeStory๋ก ๊ฐ์ ธ๊ฐ. //5๏ธโฃ์ฌ๊ธฐ๋ก! ๋ฆฌํดํ ํ๋ฆฐํธ!
    index++;
  }
  
//์์๊ฐ ๋ณต์กํ๋ค๋ฉด ํ๋จ์ฒ๋ผ ํด๋ ๊ฒฐ๊ณผ๋ ๋๊ฐ์! ๋๋ ๋ญ๊ฐ ์๋จ ๋ฐฉ๋ฒ์ด ์ฌํํ๋ฏ..  
//   while (index<boyfriends.length){
//     String finalStory = makeStory(boyfriends[index]);
//     print(finalStory);
//     index++;
//   }
  
}

String makeStory(String name){ //2๏ธโฃ๊ฐ๊ณ ์จ ์คํธ๋ง(๊นํํ)์ name ๋ณ์์ ๋๊ฒจ์ฃผ๊ณ 
  String result = 'I have eat dinner with $name'; //3๏ธโฃ๊ทธ name์ ๋ฌธ์ฅ๊ณผ ํฉ์ณ์ฃผ๊ณ , result ๋ณ์์ ๋์ํด!
  return result; //4๏ธโฃ๊ทธ ํ, return!! ๋๋๋ ค์ฃผ๋๊ฑฐ์ผ. ์ด๋๋ก?
}

```   
  



<img width="1311" alt="9" src="https://user-images.githubusercontent.com/55340876/74587948-cebce580-503b-11ea-9e55-c975b95df704.png">
  



**โฝ NO์ฃผ์ ๊นจ๋ฅด๊ผผ ๋ฒ์  ์บก์ณ**  


<img width="1073" alt="10" src="https://user-images.githubusercontent.com/55340876/74587950-cfee1280-503b-11ea-9f73-6122a025be03.png">
  



## arrow function (ํ์ดํ ํจ์)  
  


๊ทธ๋ฐ๋ฐ ์ฌ๊ธฐ์ ๋ง์ฝ return ๊ฐ์ ํ์ค๋ก ๋ฐ๊ฟ์ค๋ค๋ฉด?!  
  

```dart
String makeStory(String name){
  return 'I have eat dinner with $name';
}

```  

์ด๋ฐ์์ผ๋ก ํ ์ค๋ก ํํํ  ์๋ ์๋๋ฐ~  
ํ ์ค์ผ ๊ฒฝ์ฐ,  

  


```dart
String makeStoryShort(String name) => 'I have eat dinner with $name';
```  
  


์ด๋ ๊ฒ ํ์ดํ ํจ์๋ฅผ ์ด์ฉํด์ ์ค์ฌ์ค ์๋ ์์ด!  
(*makeStoryShort ๋ก ํจ์๋ช์ ์ข ๋ฐ๊ฟ์ค๊ฒ!*)  

๊ฒฐ๊ณผ๋ ๋๊ฐ์!  

  


```dart
void main() {
  
  List<String> boyfriends = ['๊นํํ', '๋จ์ฃผํ', '์ํจ์ญ', '๊ฐํ๋'];

  int index = 0;
  
  while (index<boyfriends.length){
    print(makeStoryShort(boyfriends[index]));
    index++;
  }

  
}

String makeStory(String name){
  return 'I have eat dinner with $name';
}

String makeStoryShort(String name) => 'I have eat dinner with $name';

```  

  


<img width="1073" alt="11" src="https://user-images.githubusercontent.com/55340876/74587951-d086a900-503b-11ea-90ee-f9acab53c9b2.png">

  

---  
---  

# Reference  
 - [๋์ฝ๋ฉํํ ์ ํ๋ธ](http://bit.ly/TheCodingPapa)  
 - [Dart ๊ณต์๋ฌธ์](https://dart.dev/)

