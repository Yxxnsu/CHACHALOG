---
title: '๐ [Dart] Class'
date: 2020-02-03 12:00:00
category: 'Dart'
draft: false 
showToc: true
---

<!-- Draft Post -->
<!-- Draft Post -->
<!-- Draft Post -->
<!-- Draft Post -->
<!-- Draft Post -->

# ํ๋ก์ ํธ ์ฒซ ์คํํ, class ๋ง๋ค์ด๋ณด๊ธฐ  
  
<img width="1575" alt="1" src="https://user-images.githubusercontent.com/55340876/74588176-87375900-503d-11ea-85c7-e71784e54a8f.png">

bin > main.dart  
  
```dart
import 'package:classyo/classyo.dart' as classyo;
import 'package:classyo/newclass.dart';

void main(List<String> arguments) {
  print('Hello world: ${classyo.calculate()}!   ${new NewClass().chacha}');
}

```  
  
lib > classyo.dart  

```dart
int calculate() {
  return 6 * 7;
}

```  
  
lib > newclass.dart  
  
```dart
class NewClass {
  String chacha = "wassup!";
}

```  
  
>**๊ฒฐ๊ณผ๋?!**
>
> **Hello world: 42!   wassup!**
  
---  
  
# class ๊ฐ๋  

![2](https://user-images.githubusercontent.com/55340876/74588173-856d9580-503d-11ea-9c4b-0df7161efcf1.png)


>class๋ ํฌ๊ฒ 3๊ฐ์ง๋ก ๋๋ ์ ์์ด.
>- Variable(๋ณ์)  
>- Constructor  
>- Method  

์๋ฅผ ๋ค์ด๋ณด์.  

- **```class``` = ์ฐจ๋์ ์ฐ์ด๋ด๋ ๊ณต์ฅ**  
  
 _์ด ๊ณต์ฅ์๋ ๋ญ๊ฐ ํ์ํ ๊น?_  
  
 - **์ฐจ๋์ ์ค์ ๊ฐ   
```Variable``` = ์ํธ, ๋ฌธ์ง, ์ปฌ๋ฌ**  
 _์ด๋ค ์ค์ ๊ฐ์ ๊ฐ๊ณ  ์๋..._  
  
 - **์ฐจ๋์ ์ฃผ๋ฌธ์  
```Constructor``` = ์ฃผ๋ฌธ์ form**  
_์ฃผ๋ฌธ์๊ฐ ์์ด์ผ ์ฐจ๋ฅผ ๋ฝ์ ์ ์์ง!_  
  
	_์ด ๋ ๋์จ ์ฐจ๋์ **```instance```** ๋ผ๊ณ  ํ๋๋ฐ,  
๊ทธ ์ธ์คํด์ค๋ฅผ ๊ฐ์ง๊ณ  ๊ทธ ์ฐจ๋์ ๊ธฐ๋ฅ์ ์ฌ์ฉํ๋ ๊ฑฐ์ผ._  
 - **์ฃผ๋ฌธํ ์ฐจ๋์ ๊ธฐ๋ฅ    
 ```Method``` = ๊ธฐ๋ฅ**  
 _๋ณ์์ ๋ฐ๋ผ ๊ธฐ๋ฅ์ด ๋ฌ๋ผ์ง ์๋ ์๊ฒ์ง?_  

  
  

```dart
void main() {
  
  Car myNewCar = new Car(4, 4, 'black', 5000); //์๋ก์ด ์ฐจ๋ ์ฃผ๋ฌธ
  
  print(myNewCar.color);
  print(myNewCar.door);
  print(myNewCar.seat);
  
  print(myNewCar.currentSpeed(50));
  
}

class Car{ //๋ณ์, ์ฐจ๋์ ์ค์ ๊ฐ
  int seat = 2;
  int door = 2;
  String color = 'white';
  int engineSize = 1000;
  
  Car(int fseat, int fdoor, String fcolor, int fengineSize){ //method ํ์์ constructor(์ฐจ๋์ ์ฃผ๋ฌธ์)๊ฐ ๋๋๊ฑฐ์ผ.
    this.seat = fseat; //this๋ ์ด ์ฐจ๋์ ์ข์์ ๋ช๊ฐ๋, ๋ฌธ์ ๋ช๊ฐ๋, ์๊น์ ๋ญ๋๋ฅผ ๋ปํด.
    this.door = fdoor;
    this.color = fcolor;
    this.engineSize = fengineSize;
  }
  
  int currentSpeed(int accel){ //์ฐจ๋์ ๊ธฐ๋ฅ
  return accel * engineSize;
  }
  
}

```  
  
**```this``` ๋ ํด๋น Class์ ์ธ์คํด์ค(object)๋ฅผ ๊ฐ๋ฆฌํค๋ ํค์๋์ผ.**  
  
```dart
Car myNewCar = new Car(4, 4, 'black', 5000); //์๋ก์ด ์ฐจ๋ ์ฃผ๋ฌธ
```
  
ํน์๋ ๊ถ๊ธํ ์ง๋ ๋ชฐ๋ผ์ ๋งํด์ฃผ๋๋ฐ~  
  
์ด ๋ถ๋ถ์ ๋ณด๋ฉด new ๋ฅผ ๋ถ์ฌ์ ์ ์ธ์ ํด์ฃผ์๋๋ฐ,  
Dart ์ธ์ด์์๋ new, const ํค์๋๊ฐ ์ต์์ด๋ผ  
๋ถ์ฌ๋ ๋๊ณ  ์๋ถ์ฌ๋ ๋๋๊ฒจ!! ๋๋ค ๋๊ฐ์ด ์ปดํ์ผ ๋๋๊น!! ๐  
  
<img width="1083" alt="3" src="https://user-images.githubusercontent.com/55340876/74588170-8272a500-503d-11ea-85b2-17ad734d2a28.png"> 
  


---  
  


# inheritance(์์) Extends  
  
  


![4](https://user-images.githubusercontent.com/55340876/74588167-80104b00-503d-11ea-9ea1-724d946b3da5.png)

  


> ### Constructor Tip!   
>
>Class ์์ construntor(์ฃผ๋ฌธ์)๊ฐ ์์ ๋,  
์๋ฌด ๋ณ์๋ ์ ๋ฌํ์ง ์๋ ๊นกํต constructor(์ฃผ๋ฌธ์)๊ฐ ์๋ค๊ณ  ์๊ฐํด!
>
>์๋ฅผ ๋ค์ด,  
Car class์๋ Car(){}๋ผ๋ ๊นกํต ์ฃผ๋ฌธ์๊ฐ ์๋ค๊ณ  ์๊ฐํ๋ฉด ๋ผ!
  
```dart
void main() {
  ElectricCar tesla = ElectricCar();
  GasolineCar sonata = GasolineCar();
  
  tesla.seat = 7;
  sonata.seat = 4;
  sonata.cc = 2500;
  tesla.power = 3000;
  
  print(tesla.seat);
  print(sonata.seat);
  print(sonata.cc);
  print(tesla.power);
  
  print('-------------------------------');
  print('์ ๊ธฐ์ฐจ๋ ๊ฐ์๋ฆฐ์ฐจ ํด๋์ค์ ์ง์ ํ์ง ์์๋ ๋ฐ์์ฒ๋ผ ์ถ๋ ฅํ๋ฉด ๋ค ๋ ! ์ ๊ฐํ์ง?!');
  print('-------------------------------');
  
  print(tesla.currentSpeed(300));
  print(tesla.door);
  print(sonata.color);
}

class Car{ //๋ณ์, ์ฐจ๋์ ์ค์ ๊ฐ
  int seat = 2;
  int door = 2;
  String color = 'white';
  int engineSize = 1000;
  
  int currentSpeed(int accel){ //์ฐจ๋์ ๊ธฐ๋ฅ
  return accel * engineSize;
  }
}

class ElectricCar extends Car{
  int power;
  int capacity; //์ ๊ธฐ์ฉ๋  
}

class GasolineCar extends Car{
  int cc; //power๋ ๋น์ทํ ๋ง
}

```  
  
<img width="749" alt="5" src="https://user-images.githubusercontent.com/55340876/74588164-7edf1e00-503d-11ea-9b5d-0e64e984ab38.png">


  
---  
  


# inheritance(์์) Implements  


  
ํ์ฌ๋ผ ์์ง?  
์ ๋ชํ ์๋์ฐจ ํ์ฌ!  
ํ์ฌ๋ผ ์์ฒด์๋ ๋ธ๋ฃจํ๋ฆฐํธ๊ฐ ์๊ฒ ์ง?  
์ฐจ๋ฅผ ๋ง๋๋ ๋ฐฉ๋ฒ, ์ค๊ณ๋๋ฅผ ์ ์ฅํ์๊ฑฐ ์๋~  
  
๊ทผ๋ฐ ๋ด๊ฐ chasla๋ผ๋ ํ์ฌ๋ฅผ ์ฐจ๋ ธ์ด.  
๊ทธ๋ฆฌ๊ณ  ๋๋ ์ฐจ๋ฅผ ๋ง๋ค ์์ ์ด์ผ.  
  
์ฐจ์ฌ๋ผ : ํ์ฌ๋ผ ๋๋ค ์ค๊ณ๋ ์ข ์ค๋ด. ๊ทธ๊ฑธ ๋ฐํ์ผ๋ก ์ข ๋ง๋ค๊ณ  ์ถ์ด.  
ํ์ฌ๋ผ : ใใ 10์กฐ์๋ง ์ค. ๊ทธ๋ผ ์ค๊ฒ.  
์ฐจ์ฌ๋ผ : 10์กฐ์? ์๋ค.  
  
ํด์ ํ์ฌ๋ผ ์ค๊ณ๋๋ฅผ ๊ฐ์ ธ์์ ์ธ๊ฑฐ์ผ.  
๊ทธ ์์๋  
๋ฐฐํฐ๋ฆฌ,  
ํ๋ ์,  
์นด๋ฉ๋ผ,  
๋ฑ๋ฑ...  
  
๋ญ ๋ง๊ฒ ์ง?  
๊ทธ๊ฑธ ๊ฐ๊ณ ์์ ๋๊ฐ์ด๋ ๋ง๊ณ  ์ข ๋ณ๊ฒฝํด์ ๊ฐ๋ค ์ฐ๋๊ฑฐ์ผ.  
  
์ด๋ป๊ฒ ํ๋๊ณ ?  
Implements ๋ผ๋ ๊ฒ์ ์ฌ์ฉํด์ ํด๋ณผ๊ฑฐ์ผ!  


  
```dart
void main() {
  Tesla modelx = Tesla();
  print(modelx.makeBattery());
  print(modelx.setAI());
  
  Chasla modelj = Chasla();
  print(modelj.makeBattery());
  print(modelj.setAI());
}

class Tesla{
  String battery;
  String AI;
  
  String makeBattery(){ //ํ์ฌ๋ผ ๋ธ๋ฃจํ๋ฆฐํธ๋๋ก ๋ฐฐํฐ๋ฆฌ ๋ง๋๋ ๊ฒ
    return "tesla way of making battery";
  }
  
  String setAI(){ //ํ์ฌ๋ผ ๋ธ๋ฃจํ๋ฆฐํธ๋๋ก AI๋ฅผ ์ธํํ๋ ๊ฒ
    return "tesla way of set AI";
  }
}

class Chasla implements Tesla{ //ํ์ฌ๋ผ ๋ธ๋ฃจํ๋ฆฐํธ๋ฅผ ์ฐจ์ฌ๋ผ์ ์ ์ฉํด.
  @override //์ด ํ์๋ 'ํ์ฌ๋ผ ๋ธ๋ฃจํ๋ฆฐํธ๋ฅผ ๊ฐ์ ธ์ ์ฌ์ฉํ๊ณ ์๋ค' ๋ผ๋ ๋ง์ด์ผ.
  String AI;

  @override
  String battery;

  @override
  String makeBattery() {
    return "Chasla way of making battery!!!"; //๊ธฐ์กด์ ์๋ ruturn null; ์์ null ์ ์ง์ฐ๊ณ  ์๋ก ์์ฑํด์ค!
  }

  @override
  String setAI() {
    return "Chasla way of setting battery!!!"; //๊ธฐ์กด์ ์๋ ruturn null; ์์ null ์ ์ง์ฐ๊ณ  ์๋ก ์์ฑํด์ค!
  }
  
}

```  
  
์์ฑํ๋ฉด์  
  
```dart
class Chasla implements Tesla{
  
}
```  

์ฌ๊ธฐ์๋  
 **Chasla์ ์ปค์๋ฅผ ๋๊ณ  ```Alt(option)``` + ```Enter``` ๋๋ฅด๋ฉด ๋ฟ! ์ฐฝ์ด ๋ฐ๊ฑฐ์ผ.**  


<img width="569" alt="6" src="https://user-images.githubusercontent.com/55340876/74588162-7d155a80-503d-11ea-8d5e-e7b583dbce27.png">


  
```Create 4 missing override(s)``` ๋ฅผ ํด๋ฆญํ๋ฉด,  



<img width="346" alt="7" src="https://user-images.githubusercontent.com/55340876/74588160-7c7cc400-503d-11ea-8623-e5288dd02374.png">


์ง ! ์๋์์ฑ ๋์ง?!   
๊ทธ๋ผ ์๋จ ์ฝ๋ ๋ธ๋ญ์ฒ๋ผ ์์ ํด์ฃผ๋ฉด ๋ผ!  


<img width="639" alt="8" src="https://user-images.githubusercontent.com/55340876/74588158-7b4b9700-503d-11ea-860d-61a4012e7f8b.png">

---

# ๐ฅ ๋ค์ ํ ๋ฒ ๊ฐ๋ ํ๊ธฐ!

```dart
class Car{
  int seats;
  String color;
  
  Car(int sts, String clr){ //construntor(์ฃผ๋ฌธ์)
    this.seats = sts;
    this.color = clr;
  } //์ฃผ๋ฌธ์์ ๊ธฐ๋ณธ์ function์ด์ผ. Car(){}
  
} //์ฒซ์ค์์ ์ฌ๊ธฐ๊น์ง๊ฐ Car ๋ผ๋ class ์ธ๊ฑฐ์ง!

main(){
  Car newCar = new Car(4, 'black'); //newCar = object or instance ๋ผ ๋ถ๋ฆ
      //์ ์ฐจ = ๊ณ ๊ฐ์ด ์ ์
             //์ด ๋, new ํค์๋๋ ์์จ๋ ๋์ผํ๊ฒ ์ถ๋ ฅ์ ๋์ง๋ง ์ฐ๋๊ฒ ์ข์!
  print('seat: ${newCar.seats}, color: ${newCar.color}');
             //object = instance ๋๊ฐ๋ฅผ ๊ฐ์ ๋ง์ด๋ผ๊ณ  ๋ณด๋ฉด๋๊ณ , ์ฌ๊ธฐ์  "์์ฑ๋ ์ฐจ = newCar" ๋ฅผ ๊ฐ๋ฅด์ผ.
}


```

<img width="881" alt="9" src="https://user-images.githubusercontent.com/55340876/74588156-77b81000-503d-11ea-88bd-5f4ab18cfc52.png">

_( ```this``` ๋ ํด๋น object = instance ๋ฅผ ๊ฐ๋ฆฌํค๋ ๊ฑด ์๊ฒ ์ง?!_  
_ex:  ```this.seats``` =  ์ฃผ๋ฌธ์ ์์ฑํจ์ ์์ด์ ํ์ฌ ๋ด๊ฐ ๋ง๋ค๊ณ  ์ถ์ ์ฐจ์ ์ข์ )_

์ฌ๊ธฐ์,
```dart
print('seat: ${newCar.seats}, color: ${newCar.color}');
```

์ ๋ถ๋ถ์ ๋ค๋ฅด๊ฒ ๋ฐ๊ฟ์ ์ถ๋ ฅํด ์ค ์๋ ์์ด!
์๋ฅผ ๋ค๋ฉด..

```dart
class Car{
  int seats;
  String color;
  
  Car(int sts, String clr){ //construntor(์ฃผ๋ฌธ์)
    this.seats = sts;
    this.color = clr;
  } //์ฃผ๋ฌธ์์ ๊ธฐ๋ณธ์ function์ด์ผ. Car(){}
  
  printVars(){
    print('seat: $seats. color: $color');
  }
  
} //์ฒซ์ค์์ ์ฌ๊ธฐ๊น์ง๊ฐ Car ๋ผ๋ class ์ธ๊ฑฐ์ง!

main(){
  Car newCar = new Car(4, 'black'); //newCar = object or instance ๋ผ ๋ถ๋ฆ
      //์ ์ฐจ = ๊ณ ๊ฐ์ด ์ ์
             //์ด ๋, new ํค์๋๋ ์์จ๋ ๋์ผํ๊ฒ ์ถ๋ ฅ์ ๋์ง๋ง ์ฐ๋๊ฒ ์ข์!
  newCar.printVars();
}

```

<img width="881" alt="10" src="https://user-images.githubusercontent.com/55340876/74588177-88688600-503d-11ea-96b2-218e2bede00f.png">

๊ฒฐ๊ณผ๋ ๋์ผํด!

๋ฐ๋ก ์ง์  ์์ด, ์ต์๊ฐ์ผ๋ก ์ง์ ํ๊ณ  ์ถ์ ๋๋,  

```dart
class Car{
  int seats;
  String color;
  
  Car(int sts, [String clr]){ //๊ธฐ๋ณธ ์ต์๊ฐ []
    this.seats = sts;
    this.color = clr;
  }
  
  printVars(){
    print('seat: $seats. color: $color');
  }
  
}

main(){
  Car newCar = new Car(4); //black ์ ๋นผ๋ฒ๋ฆฌ๋ฉด ๊ฒฐ๊ณผ๋? ๐๐ป
  newCar.printVars();
}


```

<img width="881" alt="11" src="https://user-images.githubusercontent.com/55340876/74588175-86062c00-503d-11ea-88c8-6c73c9286d74.png">

๋๊ดํธ๋ก ์ต์๊ฐ์ ์ง์ ํด์ฃผ๊ณ , ๋ฐ์์ black์ ๋นผ๋ฒ๋ฆฌ๋๊น  
๊ฐ์ด ```color: null``` ์ด๋ผ๊ณ  ๋จ์ง?  

๋ณ์, ๊ทธ๋๊น ์ ์ฅ์์ ์๋ฌด ๊ฐ์ด ์๋ค๋๊ฒจ!  
์ฐ๋ฆฐ color์ ์๋ฌด ๊ฐ๋ ๋์ ธ์ฃผ์ง ์์์ null ์ด ๋จ๋๊ฑฐ์ง~

๊ฐ์ ๋ค์ ๋ค์ ธ์ฃผ๋ฉด?!


![12](https://user-images.githubusercontent.com/55340876/74588172-830b3b80-503d-11ea-982f-d80e5d46b523.gif)

**์ซ!!!**  

์ด๋ฒ์๋ ์ต์์ ๊ธฐ๋ณธ๊ฐ์ผ๋ก ๋ค๋ฅธ ์์ ์ค๋ณผ๊น?

```dart
class Car{
  int seats;
  String color;
  
  Car(int sts, [String clr = 'gray']){ //๊ธฐ๋ณธ๊ฐ []
    this.seats = sts;
    this.color = clr;
  }
  
  printVars(){
    print('seat: $seats. color: $color');
  }
  
}

main(){
  Car newCar = new Car(4);
  newCar.printVars();
}


```


<img width="881" alt="13" src="https://user-images.githubusercontent.com/55340876/74588169-81417800-503d-11ea-956c-23e3f834860c.png">

**์ง๋ ๐ค**  

์ด ๋,
๊ธฐ๋ณธ ```gray``` ๊ฐ์ ๋ฌด์ํ๊ณ  ๋ฐ๋ก ์ง์ ์ ํด์ฃผ๋ฉด ๋ด๊ฐ ์ง์ ํด ์ค ์์ด ์ถ๋ ฅ๋๋๊ฑฐ์ง!


![14](https://user-images.githubusercontent.com/55340876/74588165-7f77b480-503d-11ea-8166-28dae60712b3.gif)


**chachaCustom!!!**

๋ง์ฝ์,  

```dart
class Car{
  int seats;
  String color;
  
...
```

์ด class ์์ ๋ณ์๋ค์ด seats, color ์ด์ธ์ ๋ ๋ง์ด ์๊ธด๋ค๋ฉด?  
```new Car(clr:'chachaCustom', sts:6);``` ์ด ๋ถ๋ถ ์ธ์๊ฐ์ ์์๋๋ก ์ผ์ผ์ด ๋ฃ์ด์ฃผ๊ธฐ ํ๋ค๊ฒ ์ง?

๊ทธ ๋ฒ๊ฑฐ๋ก์์ ํด์ํ๊ธฐ ์ํด์  ์ ๋ฐฉ๋ฒ์ ์จ์ฃผ๋ฉด ๋จ!

```dart
class Car{
  int seats;
  String color;
  
  Car({int sts, String clr = 'gray'}){ //{} ๋ก ๋ฌถ์ด!
    this.seats = sts;
    this.color = clr;
  }
  
  printVars(){
    print('seat: $seats. color: $color');
  }
  
}

main(){
  Car newCar = new Car(clr:'chachaCustom', sts:6); //๊ทธ๋ผ ์์๊ฐ ๋ฌ๋ผ์ ธ๋ ์๋ฌ๊ฐ ์๋!
  newCar.printVars();
}


```


<img width="1031" alt="15" src="https://user-images.githubusercontent.com/55340876/74588163-7dadf100-503d-11ea-94eb-838535e96316.png">



**๋ฟ!**  
{} ๋ก ๋ฌถ์ด์ฃผ๋๊น ์ธ์๊ฐ ์์๊ฐ ๋ฐ๋์ด๋ ์๊ด์์ง?!

ํ .. ์ด ๊ฒฝ์ฐ์์๋ ๊ธฐ๋ณธ๊ฐ์ ์ธํํด์ฃผ๊ณ  ์ถ์ผ๋ฉด ```@required``` ๋ผ๋๊ฒ ์๋๋ฐ  
์ด๊ฑด flutter ์์ ์ธ ์ ์๊ณ  Dart ์ธ์ด์์๋ ์๋๋๋ด!  
๋์ค์ ๋ค์ ์์๋ณด์!! ๐ค  

๋ง์ง๋ง ๋ฐฉ๋ฒ์,

```dart
class Car{
  int seats;
  String color;
  
  Car({this.seats, this.color = 'gray'}); //ํ์ค์ง๋ฆฌ๋ ; ์ธ๋ฏธ์ฝ๋ก  ํ์! {} body๊ฐ ์์ผ๋ฉด ์๋ต๊ฐ๋ฅ!
  
  printVars(){
    print('seat: $seats. color: $color');
  }
  
}

main(){
  Car newCar = new Car(color:'chachaCustom', seats:6); 
  newCar.printVars();
}



```

<img width="1031" alt="16" src="https://user-images.githubusercontent.com/55340876/74588161-7c7cc400-503d-11ea-87b7-c4fbe2d03ecb.png">

์๊ณ ์ผ! ์ฝ๋๋ฅผ ์ ์ดํด๋ด!  

**class๋ ์ค์ํ ๋ถ๋ถ์ด๋๊น ์ต์ํด์ง ๋๊น์ง ๋ณต์ต์ ํ์์ผ!!!  
๋ฒ๋๋ฒ๋!! ๐ฅ**  

---  
---  

# Reference  
- [๋์ฝ๋ฉํํ ์ ํ๋ธ](http://bit.ly/TheCodingPapa)
- [Dart ๊ณต์๋ฌธ์](https://dart.dev/)
