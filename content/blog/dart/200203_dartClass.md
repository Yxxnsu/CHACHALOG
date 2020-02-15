---
title: '📖 [Dart] Class'
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

# 프로젝트 첫 실행후, class 만들어보기  
  
<img width="1575" alt="1" src="https://user-images.githubusercontent.com/55340876/74588176-87375900-503d-11ea-85c7-e71784e54a8f.png">

bin > main.dart  
  
```go
import 'package:classyo/classyo.dart' as classyo;
import 'package:classyo/newclass.dart';

void main(List<String> arguments) {
  print('Hello world: ${classyo.calculate()}!   ${new NewClass().chacha}');
}

```  
  
lib > classyo.dart  

```go
int calculate() {
  return 6 * 7;
}

```  
  
lib > newclass.dart  
  
```go
class NewClass {
  String chacha = "wassup!";
}

```  
  
>**결과는?!**
>
> **Hello world: 42!   wassup!**
  
---  
  
# class 개념  

![2](https://user-images.githubusercontent.com/55340876/74588173-856d9580-503d-11ea-9c4b-0df7161efcf1.png)


>class는 크게 3가지로 나눌 수 있어.
>- Variable(변수)  
>- Constructor  
>- Method  

예를 들어보자.  

- **```class``` = 차량을 찍어내는 공장**  
  
 _이 공장에는 뭐가 필요할까?_  
  
 - **차량의 설정값   
```Variable``` = 시트, 문짝, 컬러**  
 _어떤 설정값을 갖고 있나..._  
  
 - **차량의 주문서  
```Constructor``` = 주문서 form**  
_주문서가 있어야 차를 뽑을 수 있지!_  
  
	_이 때 나온 차량을 **```instance```** 라고 하는데,  
그 인스턴스를 가지고 그 차량의 기능을 사용하는 거야._  
 - **주문한 차량의 기능    
 ```Method``` = 기능**  
 _변수에 따라 기능이 달라질 수도 있겄지?_  

  
  

```go
void main() {
  
  Car myNewCar = new Car(4, 4, 'black', 5000); //새로운 차량 주문
  
  print(myNewCar.color);
  print(myNewCar.door);
  print(myNewCar.seat);
  
  print(myNewCar.currentSpeed(50));
  
}

class Car{ //변수, 차량의 설정값
  int seat = 2;
  int door = 2;
  String color = 'white';
  int engineSize = 1000;
  
  Car(int fseat, int fdoor, String fcolor, int fengineSize){ //method 형식의 constructor(차량의 주문서)가 되는거야.
    this.seat = fseat; //this는 이 차량의 좌석은 몇개냐, 문은 몇개냐, 색깔은 뭐냐를 뜻해.
    this.door = fdoor;
    this.color = fcolor;
    this.engineSize = fengineSize;
  }
  
  int currentSpeed(int accel){ //차량의 기능
  return accel * engineSize;
  }
  
}

```  
  
**```this``` 는 해당 Class의 인스턴스(object)를 가리키는 키워드야.**  
  
```go
Car myNewCar = new Car(4, 4, 'black', 5000); //새로운 차량 주문
```
  
혹시나 궁금할지도 몰라서 말해주는데~  
  
이 부분을 보면 new 를 붙여서 선언을 해주었는데,  
Dart 언어에서는 new, const 키워드가 옵션이라  
붙여도 되고 안붙여도 되는겨!! 둘다 똑같이 컴파일 되니까!! 😎  
  
<img width="1083" alt="3" src="https://user-images.githubusercontent.com/55340876/74588170-8272a500-503d-11ea-85b2-17ad734d2a28.png"> 
  


---  
  


# inheritance(상속) Extends  
  
  


![4](https://user-images.githubusercontent.com/55340876/74588167-80104b00-503d-11ea-9ea1-724d946b3da5.png)

  


> ### Constructor Tip!   
>
>Class 안에 construntor(주문서)가 없을 땐,  
아무 변수도 전달하지 않는 깡통 constructor(주문서)가 있다고 생각해!
>
>예를 들어,  
Car class에는 Car(){}라는 깡통 주문서가 있다고 생각하면 돼!
  
```go
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
  print('전기차랑 가솔린차 클래스에 지정하지 않아도 밑에처럼 출력하면 다 떠! 신가하지?!');
  print('-------------------------------');
  
  print(tesla.currentSpeed(300));
  print(tesla.door);
  print(sonata.color);
}

class Car{ //변수, 차량의 설정값
  int seat = 2;
  int door = 2;
  String color = 'white';
  int engineSize = 1000;
  
  int currentSpeed(int accel){ //차량의 기능
  return accel * engineSize;
  }
}

class ElectricCar extends Car{
  int power;
  int capacity; //전기용량  
}

class GasolineCar extends Car{
  int cc; //power랑 비슷한 말
}

```  
  
<img width="749" alt="5" src="https://user-images.githubusercontent.com/55340876/74588164-7edf1e00-503d-11ea-9b5d-0e64e984ab38.png">


  
---  
  


# inheritance(상속) Implements  


  
테슬라 알지?  
유명한 자동차 회사!  
테슬라 자체에도 블루프린트가 있겠지?  
차를 만드는 방법, 설계도를 저장했을거 아냐~  
  
근데 내가 chasla라는 회사를 차렸어.  
그리고 나도 차를 만들 예정이야.  
  
차슬라 : 테슬라 너네 설계도 좀 줘봐. 그걸 바탕으로 좀 만들고 싶어.  
테슬라 : ㅇㅇ 10조원만 줘. 그럼 줄게.  
차슬라 : 10조원? 옛다.  
  
해서 테슬라 설계도를 가져와서 쓸거야.  
그 안에는  
배터리,  
프레임,  
카메라,  
등등...  
  
뭐 많겠지?  
그걸 갖고와서 똑같이는 말고 좀 변경해서 갖다 쓰는거야.  
  
어떻게 하냐고?  
Implements 라는 것을 사용해서 해볼거야!  


  
```go
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
  
  String makeBattery(){ //테슬라 블루프린트대로 배터리 만드는 것
    return "tesla way of making battery";
  }
  
  String setAI(){ //테슬라 블루프린트대로 AI를 세팅하는 것
    return "tesla way of set AI";
  }
}

class Chasla implements Tesla{ //테슬라 블루프린트를 차슬라에 적용해.
  @override //이 표시는 '테슬라 블루프린트를 가져와 사용하고있다' 라는 말이야.
  String AI;

  @override
  String battery;

  @override
  String makeBattery() {
    return "Chasla way of making battery!!!"; //기존에 있던 ruturn null; 에서 null 을 지우고 새로 작성해줘!
  }

  @override
  String setAI() {
    return "Chasla way of setting battery!!!"; //기존에 있던 ruturn null; 에서 null 을 지우고 새로 작성해줘!
  }
  
}

```  
  
작성하면서  
  
```go
class Chasla implements Tesla{
  
}
```  

여기서는  
 **Chasla에 커서를 두고 ```Alt(option)``` + ```Enter``` 누르면 뿅! 창이 뜰거야.**  


<img width="569" alt="6" src="https://user-images.githubusercontent.com/55340876/74588162-7d155a80-503d-11ea-8d5e-e7b583dbce27.png">


  
```Create 4 missing override(s)``` 를 클릭하면,  



<img width="346" alt="7" src="https://user-images.githubusercontent.com/55340876/74588160-7c7cc400-503d-11ea-8623-e5288dd02374.png">


짠! 자동완성 되지?!   
그럼 상단 코드 블럭처럼 수정해주면 돼!  


<img width="639" alt="8" src="https://user-images.githubusercontent.com/55340876/74588158-7b4b9700-503d-11ea-860d-61a4012e7f8b.png">

---

# 🔥 다시 한 번 개념 훑기!

```go
class Car{
  int seats;
  String color;
  
  Car(int sts, String clr){ //construntor(주문서)
    this.seats = sts;
    this.color = clr;
  } //주문서의 기본은 function이야. Car(){}
  
} //첫줄에서 여기까지가 Car 라는 class 인거지!

main(){
  Car newCar = new Car(4, 'black'); //newCar = object or instance 라 부름
      //새 차 = 고객이 접수
             //이 때, new 키워드는 안써도 동일하게 출력은 되지만 쓰는게 좋아!
  print('seat: ${newCar.seats}, color: ${newCar.color}');
             //object = instance 두개를 같은 말이라고 보면되고, 여기선 "생성된 차 = newCar" 를 가르켜.
}


```

<img width="881" alt="9" src="https://user-images.githubusercontent.com/55340876/74588156-77b81000-503d-11ea-88bd-5f4ab18cfc52.png">

_( ```this``` 는 해당 object = instance 를 가리키는 건 알겠지?!_  
_ex:  ```this.seats``` =  주문서 작성함에 있어서 현재 내가 만들고 싶은 차의 좌석 )_

여기서,
```go
print('seat: ${newCar.seats}, color: ${newCar.color}');
```

요 부분을 다르게 바꿔서 출력해 줄 수도 있어!
예를 들면..

```go
class Car{
  int seats;
  String color;
  
  Car(int sts, String clr){ //construntor(주문서)
    this.seats = sts;
    this.color = clr;
  } //주문서의 기본은 function이야. Car(){}
  
  printVars(){
    print('seat: $seats. color: $color');
  }
  
} //첫줄에서 여기까지가 Car 라는 class 인거지!

main(){
  Car newCar = new Car(4, 'black'); //newCar = object or instance 라 부름
      //새 차 = 고객이 접수
             //이 때, new 키워드는 안써도 동일하게 출력은 되지만 쓰는게 좋아!
  newCar.printVars();
}

```

<img width="881" alt="10" src="https://user-images.githubusercontent.com/55340876/74588177-88688600-503d-11ea-96b2-218e2bede00f.png">

결과는 동일해!

따로 지정 없이, 옵션값으로 지정하고 싶을 때는,  

```go
class Car{
  int seats;
  String color;
  
  Car(int sts, [String clr]){ //기본 옵션값 []
    this.seats = sts;
    this.color = clr;
  }
  
  printVars(){
    print('seat: $seats. color: $color');
  }
  
}

main(){
  Car newCar = new Car(4); //black 을 빼버리면 결과는? 👉🏻
  newCar.printVars();
}


```

<img width="881" alt="11" src="https://user-images.githubusercontent.com/55340876/74588175-86062c00-503d-11ea-88c8-6c73c9286d74.png">

대괄호로 옵션값을 지정해주고, 밑에서 black을 빼버리니까  
값이 ```color: null``` 이라고 뜨지?  

변수, 그니까 저장소에 아무 값이 없다는겨!  
우린 color에 아무 값도 던져주질 않아서 null 이 뜨는거지~

값을 다시 떤져주면?!


![12](https://user-images.githubusercontent.com/55340876/74588172-830b3b80-503d-11ea-982f-d80e5d46b523.gif)

**쫜!!!**  

이번에는 옵션에 기본값으로 다른 색을 줘볼까?

```go
class Car{
  int seats;
  String color;
  
  Car(int sts, [String clr = 'gray']){ //기본값 []
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

**짜란 🤗**  

이 때,
기본 ```gray``` 값을 무시하고 따로 지정을 해주면 내가 지정해 준 색이 출력되는거지!


![14](https://user-images.githubusercontent.com/55340876/74588165-7f77b480-503d-11ea-8166-28dae60712b3.gif)


**chachaCustom!!!**

만약에,  

```go
class Car{
  int seats;
  String color;
  
...
```

이 class 안에 변수들이 seats, color 이외에 더 많이 생긴다면?  
```new Car(clr:'chachaCustom', sts:6);``` 이 부분 인자값을 순서대로 일일이 넣어주기 힘들겠지?

그 번거로움을 해소하기 위해선 요 방법을 써주면 됨!

```go
class Car{
  int seats;
  String color;
  
  Car({int sts, String clr = 'gray'}){ //{} 로 묶어!
    this.seats = sts;
    this.color = clr;
  }
  
  printVars(){
    print('seat: $seats. color: $color');
  }
  
}

main(){
  Car newCar = new Car(clr:'chachaCustom', sts:6); //그럼 순서가 달라져도 에러가 안나!
  newCar.printVars();
}


```


<img width="1031" alt="15" src="https://user-images.githubusercontent.com/55340876/74588163-7dadf100-503d-11ea-94eb-838535e96316.png">



**뿅!**  
{} 로 묶어주니까 인자값 순서가 바뀌어도 상관없지?!

흠.. 이 경우에서도 기본값을 세팅해주고 싶으면 ```@required``` 라는게 있는데  
이건 flutter 에서 쓸 수 있고 Dart 언어에서는 안되나봐!  
나중에 다시 알아보자!! 🤔  

마지막 방법은,

```go
class Car{
  int seats;
  String color;
  
  Car({this.seats, this.color = 'gray'}); //한줄짜리는 ; 세미콜론 필수! {} body가 있으면 생략가능!
  
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

요고야! 코드를 잘 살펴봐!  

**class는 중요한 부분이니까 익숙해질 때까지 복습은 필수야!!!  
버닝버닝!! 🔥**  

---  
---  

# Reference  
- [더코딩파파 유튜브](http://bit.ly/TheCodingPapa)
- [Dart 공식문서](https://dart.dev/)
