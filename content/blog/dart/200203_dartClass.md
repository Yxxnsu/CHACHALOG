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
  

![스크린샷 2020-01-31 오후 9.17.32.png](https://images.velog.io/post-images/chajanee/ad7bfe70-4423-11ea-acb1-c7d88fea00da/-2020-01-31-9.17.32.png)  

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

![제목_없는_아트워크.jpg](https://images.velog.io/post-images/chajanee/c0599730-442f-11ea-a046-178c7b269e2e/.jpg)  

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
  
![스크린샷 2020-01-31 오후 11.00.35.png](https://images.velog.io/post-images/chajanee/13c5b8c0-4432-11ea-80bd-63538db7ad6e/-2020-01-31-11.00.35.png)  
  
---  
  
# inheritance(상속) Extends  
  
  
![제목_없는_아트워크 복사본.jpg](https://images.velog.io/post-images/chajanee/b1129810-4436-11ea-b437-f7172fb9ece8/-.jpg)  

  
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
  

![스크린샷 2020-01-31 오후 11.52.05.png](https://images.velog.io/post-images/chajanee/46659af0-4439-11ea-a670-f7ff28b8fa62/-2020-01-31-11.52.05.png)  
  
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


![스크린샷 2020-02-01 오전 12.28.46.png](https://images.velog.io/post-images/chajanee/9f15d250-443e-11ea-863f-116de53cc510/-2020-02-01-12.28.46.png)  
  
```Create 4 missing override(s)``` 를 클릭하면,  


![스크린샷 2020-02-01 오전 12.32.23.png](https://images.velog.io/post-images/chajanee/e57e4420-443e-11ea-876f-ed2b923508be/-2020-02-01-12.32.23.png)


짠! 자동완성 되지?!   
그럼 상단 코드 블럭처럼 수정해주면 돼!  


![스크린샷 2020-02-01 오전 12.27.55.png](https://images.velog.io/post-images/chajanee/127223c0-443f-11ea-8c94-a7c3ab319c42/-2020-02-01-12.27.55.png)  

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

![스크린샷 2020-02-05 오후 10.55.51.png](https://images.velog.io/post-images/chajanee/4479cb00-481f-11ea-8221-4da73859da2d/-2020-02-05-10.55.51.png)

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

![스크린샷 2020-02-05 오후 10.56.03.png](https://images.velog.io/post-images/chajanee/47eecd80-481f-11ea-8221-4da73859da2d/-2020-02-05-10.56.03.png)

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

![스크린샷 2020-02-05 오후 11.00.16.png](https://images.velog.io/post-images/chajanee/04befc00-4820-11ea-8221-4da73859da2d/-2020-02-05-11.00.16.png)

대괄호로 옵션값을 지정해주고, 밑에서 black을 빼버리니까  
값이 ```color: null``` 이라고 뜨지?  

변수, 그니까 저장소에 아무 값이 없다는겨!  
우린 color에 아무 값도 던져주질 않아서 null 이 뜨는거지~

값을 다시 떤져주면?!


![2020-02-05 23-05-16.2020-02-05 23_06_26.gif](https://images.velog.io/post-images/chajanee/b8b08170-4820-11ea-8221-4da73859da2d/2020-02-05-23-05-16.2020-02-05-230626.gif)

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


![스크린샷 2020-02-05 오후 11.12.53.png](https://images.velog.io/post-images/chajanee/9e024150-4821-11ea-8221-4da73859da2d/-2020-02-05-11.12.53.png)

**짜란 🤗**  

이 때,
기본 ```gray``` 값을 무시하고 따로 지정을 해주면 내가 지정해 준 색이 출력되는거지!


![2020-02-05 23-17-18.2020-02-05 23_18_16.gif](https://images.velog.io/post-images/chajanee/5fd31b60-4822-11ea-a6f2-cff7049c3a58/2020-02-05-23-17-18.2020-02-05-231816.gif)

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


![스크린샷 2020-02-05 오후 11.30.02.png](https://images.velog.io/post-images/chajanee/03321da0-4824-11ea-841e-717d6f58d90d/-2020-02-05-11.30.02.png)


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

![스크린샷 2020-02-05 오후 11.42.27.png](https://images.velog.io/post-images/chajanee/bf4b89d0-4825-11ea-8a2a-ddd8c4b60d47/-2020-02-05-11.42.27.png)

요고야! 코드를 잘 살펴봐!  

**class는 중요한 부분이니까 익숙해질 때까지 복습은 필수야!!!  
버닝버닝!! 🔥**  

---  
---  

# Reference  
- [더코딩파파 유튜브](http://bit.ly/TheCodingPapa)
- [Dart 공식문서](https://dart.dev/)
