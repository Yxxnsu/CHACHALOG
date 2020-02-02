---
title: '📝 [Dart] Class'
date: 2020-02-03 12:00:00
category: 'Dart'
draft: false 
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
---  

## Reference  
- [더코딩파파 유튜브](http://bit.ly/TheCodingPapa)
