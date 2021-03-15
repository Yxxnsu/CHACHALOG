---
title: '🌈 [iOS] 집중력 게임'
date: 2021-03-16 01:23:00
category: 'iOS'
draft: false 
showToc: true
---

# 집중력 게임 만들기


## 카드 앞면 구현

```swift
import UIKit

class ViewController: UIViewController {

}
```


`import UIKit` : 모든 UIKit를 사용하기 위해 불러오는 것

`UIKit ` : 버튼, 슬리이더 등이 있는 iOS 프레임워크(코코아 터치 층 같은 것)

`UIViewController` : 부모 클래스(슈퍼 클래스)로 UIKit에 있음. 이놈은 UI가 무엇을 하는지 제어함

`ViewController` : 부모 클래스인 `UIViewController` 를 상속받음. 즉, 자식 클래스(서브 클래스)



버튼을 추가해봅세.  
옵젝 라이브러리를 통해 **Button** 을 적용하고, (디자인 설명은 생략)  
**버튼을 control + 드래그 앤 드롭해서 코드 내에 뿜!**  



<img width="617" alt="스크린샷 2021-03-15 오후 11 12 00" src="https://user-images.githubusercontent.com/55340876/111168349-57aea380-85e5-11eb-8192-6b3abb9a1159.png">



Connection -> **Action** : 버튼을 눌렀을 때 메소드를 호출함

Object -> **View Controller** : 이건 뭐 당연한 것

Name -> **toushCard** : 제대로 된 변수명으로 지어주삼

Type -> **UIButton** : 초기값은 **Any** 로 되어있음 ㅡㅡ 코드의 동작을 위해 **UIButton** 으로 바꿔주삼

Event -> **Touch Up Inside** : 버튼을 터치하고 손을 뗄 때 동작하게끔

Arguments -> **Sender** : None을 선택하면 인자가 없는건데, 여기서는 버튼과의 소통을 위해 **Sender** 를 선택함

</br>


**스위프트 언어에서의 인자**
- 모든 인자에는 이름이 있음(메소드 호출시 이 이름을 포함해야 함)
- 이름이 두개임
  - 호출할 때 사용하는 외부 이름
  - 코드 구현에 사용할 내부 이름


```swift
import UIKit

class ViewController: UIViewController {

    @IBAction func touchCard(_ sender: UIButton) {
    }
    
}
```

`_ sender: UIButton` 여기서 UIButton은 매개변수의 타입임.



이 때 버튼의 메소드가 리턴 값을 갖는다면?

```swift
    @IBAction func touchCard(_ sender: UIButton) -> Int {
    }
```

이렇게 리턴 타입을 써주면 됨!  
요 메소드는 Int형의 값을 리턴한다는 뜻임.



버튼이 제대로 동작하는지 봅세!

```swift
    @IBAction func touchCard(_ sender: UIButton) {
        print(#function)
    }
```

콘솔에 해당 함수가 찍히는지만~~

<img width="500" alt="" src="https://user-images.githubusercontent.com/55340876/111168829-c55acf80-85e5-11eb-913d-1761bafcf5d2.gif">

잘 되는구먼!! 👻



## 뒤집기 구현

카드를 뒤집는 함수를 만들자.

```swift
    func flipCard(withEmoji emoji: String, on button: UIButton) {
        
    }
```



매개변수는 2개임  
- `withEmoji` 카드에 표시할 이모티콘
- `emoji` 이모티콘을 넣을 버튼

</br>

`withEmoji emoji: String` 코드에서

`withEmoji` 는 인자 레이블 : 함수를 호출하면서 인자를 전달할 때 사용하는 이름.

`emoji` 는 파라미터명 : 함수 바디에서 함수로 전달된 값에 접근할 때 사용하는 이름.

`String` 은 매개변수 타입.



`on button: UIButton` 코드도,  
인자레이블은 on, 파라미터명은 button,  
파라미터의 타입은 UIButton 타입이라는 것을 알 수 있음!



> 자세한 내용은 하단 글을 참고하삼.
>
> [🕊 [Swift] 함수 / return](https://chajinjoo.netlify.app/Swift/20210109_functionAndReturn/)
>
> [🕊 [Swift] 파라미터(Parameter)](https://chajinjoo.netlify.app/Swift/20210109_parameter/)
>
> [🕊 [Swift] 인자 레이블](https://chajinjoo.netlify.app/Swift/20210109_argumentLabel/)



일단 현재는 유령카드를 터치했을 때,   
`flipCard` 메소드를 호출하게끔 구현해보자.

```swift
    @IBAction func touchCard(_ sender: UIButton) {
        flipCard(withEmoji: "👻", on: sender)
    }
    
    func flipCard(withEmoji emoji: String, on button: UIButton) {
        
    }
```

**Flip card with emoji ghost on sender.**



filpCard 메소드를 구현해보자!



**카드의 뒷면을 구현해야하니까**

`filpCard` 메소드에게 버튼을 확인해서 이미 유령이면,   
이모티콘 없이 주황색으로 뒤집게 할고임!  
유령이 아니면 흰 바탕에 유령이 있게 함!



일단 버튼의 현재 타이틀이 유령으로 되어 있는지부터 확인해야함.



<img width="617" alt="스크린샷 2021-03-16 오전 12 05 32" src="https://user-images.githubusercontent.com/55340876/111175073-5f714680-85eb-11eb-9a6d-ff2330a5c9f7.png">



현재 타이틀이 있을지 없을지 확신할 수 없으니 `currentTitle`  속성은 옵셔널 String을 리턴함.



> 자세한 내용은 하단 글을 참고하삼.
>
> [🕊 [Swift] 옵셔널 / 언래핑 / 강제추출](https://chajinjoo.netlify.app/Swift/20210108_optionalAndUnwrapping/)



카드를 뒤집는데 필요한 이모티콘과 같은지 비교를 하고,  
이미 유령 이모티콘이 있으니까 카드를 빈 주황색으로 만들어야 함.



<img width="705" alt="스크린샷 2021-03-16 오전 12 18 12" src="https://user-images.githubusercontent.com/55340876/111176931-1c17d780-85ed-11eb-80b1-1c67d2573e22.png">



`setTitle` 속성은 현재 버튼의 타이틀을 바꿔줌.  
지금은 카드의 뒷면을 만들고 있으니까!!  
첫번째 파라미터로는 공백을 주고, 두번째 파라미터는 상태를 줌.  
**보통 이런 속성은 마지막 파라미터로 상태를 받는데 여기서는 `.normal` 로 지정해주자!**



```swift
        if button.currentTitle == emoji {
            button.setTitle("", for: .normal)
            button.backgroundColor = #colorLiteral(red: 1, green: 0.5763723254, blue: 0, alpha: 1)
        }
```

백그라운드 색상은 color 리터럴을 사용했음.  
코드로 옮기니까 저래 뜨네 오호.. 🤭



유령이 없는 경우도 조건을 주자.  
유령이 없다면?? 유령을 넣어주삼!



```swift
    func flipCard(withEmoji emoji: String, on button: UIButton) {
        if button.currentTitle == emoji {
            button.setTitle("", for: .normal)
            button.backgroundColor = #colorLiteral(red: 1, green: 0.5763723254, blue: 0, alpha: 1)
        } else {
            button.setTitle(emoji, for: .normal)
            button.backgroundColor = #colorLiteral(red: 1, green: 1, blue: 1, alpha: 1)
        }
    }
```



작동을 해봅세.

<img width="500" alt="" src="https://user-images.githubusercontent.com/55340876/111179390-61d59f80-85ef-11eb-8224-fa679ab5becf.gif">



👍🏻



유령 카드를 복사해서 호박 카드도 만들어보자.

```swift
    @IBAction func touchSecondCard(_ sender: UIButton) {
        flipCard(withEmoji: "🎃", on: sender)
    }
    
    func flipCard(withEmoji emoji: String, on button: UIButton) {
        print("filpCard(withEmoji: \(emoji))") // 디버깅 코드
```

일단 `flipCard` 메서드를 잘 호출하는지 확인하는 코드와 함께 실행해보자.(문자열 보간법 사용)



<img width="700" alt="" src="https://user-images.githubusercontent.com/55340876/111180721-a6ae0600-85f0-11eb-8d29-0110eed37802.gif">



??????????  
호박이 카드가 안뒤집힘;;  
왜???  
유령. 호박.  
유령. 호박.  
두번씩 호출하고 있음 ㅠㅠ



**Connection Well**에 마우스를 대보삼!!!



<img width="700" alt="" src="https://user-images.githubusercontent.com/55340876/111181137-01476200-85f1-11eb-8503-ace8a1435043.gif">



`touchCard` 메소드가 유령카드랑 호박카드 두개를 호출하고 있음!!!! 🤔  
아까 유령카드를 복사해서 호박카드를 만들어서 그렇다;;  
자주 하는 실수니까 주의하자!!



<img width="700" alt="" src="https://user-images.githubusercontent.com/55340876/111181913-c7c32680-85f1-11eb-947b-c7813ca72da4.gif">



마우스 오른쪽을 클릭해서 호박카드랑 연결된 `touchCard` 메소드를 해제해주삼!



<img width="700" alt="" src="https://user-images.githubusercontent.com/55340876/111182232-0e188580-85f2-11eb-944b-5adda3583d76.gif">



유령카드도 뒤집히고,  
호박카드도 뒤집히고!!  
퍼펙트하다.



## 뒤집은 횟수 구현

카드를 적게 뒤집을수록 승자임!



먼저 뒤집은 횟수를 추적할 인스턴스 변수(프로퍼티)를 추가함.  

**모든 인스턴스 변수**  
**즉, 프로퍼티(속성)은 무조건 초기화를 해야함.**  
**이니셜라이저!!!**  
**초기값을 갖고 있어야한다는 말씀!**



인스턴스 변수를 초기화하는 방법  
- 이니셜라이저 이용
- 초기값 할당



여기선 초기값을 할당해주겠음.

```swift
class ViewController: UIViewController {
    var flipCount: Int = 0
```



사실 상단 코드를 보면 초기값으로 `0` 을 넣어줬으니  
타입 추론이 가능하니까 `Int` 를 명시해주지 않아도 됨!



보통 함수의 파라미터 타입을 명시하는 경우는 거의 필수적이고,  
변수는 추론으로 넘기는 경우가 많지만..  
난 코린이니까 명시해주는걸로~~~!



자 이제, 카드를 뒤집을 때마다 횟수를 늘려보자!

```swift
    @IBAction func touchCard(_ sender: UIButton) {
        flipCount += 1
        flipCard(withEmoji: "👻", on: sender)
    }
    
    @IBAction func touchSecondCard(_ sender: UIButton) {
        flipCount += 1
        flipCard(withEmoji: "🎃", on: sender)
    }
```

`flipCount += 1` 코드를 복붙해서 중복임.. 🤮  
일단 진행해보자.



이 횟수를 UI에 적용합세!  
옵젝 라이브러리를 통해 **Label** 을 적용하고,  
UI와 코드를 연결해보자.

```swift
@IBOutlet weak var flipCountLabel: UILabel!
```

UILabel은 UI 안에 있어서 타입 추론 불가능!  
그래서 UILabel이라 명시해주어야 함.



횟수가 바뀔때마다 UI에 횟수 텍스트도 바뀌어야하지?

```swift
    var flipCount: Int = 0

    @IBOutlet weak var flipCountLabel: UILabel!
    
    @IBAction func touchCard(_ sender: UIButton) {
        flipCount += 1
        flipCountLabel.text = "Flips: \(flipCount)"
        flipCard(withEmoji: "👻", on: sender)
    }
    
    @IBAction func touchSecondCard(_ sender: UIButton) {
        flipCount += 1
        flipCountLabel.text = "Flips: \(flipCount)"
        flipCard(withEmoji: "🎃", on: sender)
    }
```

<img width="300" alt="" src="https://user-images.githubusercontent.com/55340876/111185761-a9f7c080-85f5-11eb-9bc9-3189c972409c.gif">

지금은 앞뒤 상관없이 횟수가 증가함.  
코드 중복이 많으니까 속성감시자를 통해 바꿔주자.

```swift
    var flipCount: Int = 0 {
        didSet {
            flipCountLabel.text = "Flips: \(flipCount)"
        }
    }

    @IBOutlet weak var flipCountLabel: UILabel!
    
    @IBAction func touchCard(_ sender: UIButton) {
        flipCount += 1
        flipCard(withEmoji: "👻", on: sender)
    }
    
    @IBAction func touchSecondCard(_ sender: UIButton) {
        flipCount += 1
        flipCard(withEmoji: "🎃", on: sender)
    }
```



## 초기 카드 설정

카드는 일단 뒤집어져 있어야 하니까  
두 카드의 앞면 이모티콘을 지우고 백그라운드 컬러도 오렌지로 바꿔줌.



일단 카드들을 또 복사하기전에 중복되는 코드 정리를 좀 해주자.  
호박카드도 일단 `touchCard` 와 연결해줌! (이전 연결된 커넥트는 해제함)  
카드를 복붙해서 더 생성해줍세.



그리고 하드코딩이었던 이모티콘을 배열에서 꺼내오게끔 하자.

```swift
    @IBOutlet var cardButtons: [UIButton]!
```

**Outlet Collection** 으로 코드에 연결(UI에 있는 것들의 배열)



<img width="800" alt="스크린샷 2021-03-16 오전 1 49 29" src="https://user-images.githubusercontent.com/55340876/111189876-dca3b800-85f9-11eb-97cd-0810d551c073.png">



현재는 3개의 카드를 `[UIButton]` 배열에 연결해줬음. (UIButton 타입의 배열)



카드를 터치할 때마다 해당 카드의 인덱스를 출력하게끔 해보자.

```swift
    @IBAction func touchCard(_ sender: UIButton) {
        flipCount += 1
        let cardNumber = cardButtons.firstIndex(of: sender)
        print("cardNumber = \(cardNumber)")
//        flipCard(withEmoji: "👻", on: sender)
    }
```

<img width="800" alt="스크린샷 2021-03-16 오전 1 49 29" src="https://user-images.githubusercontent.com/55340876/111192021-fb0ab300-85fb-11eb-9144-446a4bb4cfe7.gif">



`cardNumber` 는 옵셔널 index라 저렇게 출력됨.

<img width="667" alt="스크린샷 2021-03-16 오전 2 07 28" src="https://user-images.githubusercontent.com/55340876/111192422-5f2d7700-85fc-11eb-891f-cc25e02b6cf2.png">

애초에 `firstIndex` 는  옵셔널 Int형의 값을 반환하기 때문!!  
값이 없으면 nil을 리턴하는 것!! (위에 출력결과에서 nil을 보면 알 수 있음)  
즉, 배열에 없는 카드를 터치하면 nil 값을 리턴함.



```swift
        let cardNumber = cardButtons.firstIndex(of: sender)!
```

이런식으로 `!` 로 강제추출하면 되는데 흠.. 이 방법은 비추이긴 함;



<img width="800" alt="스크린샷 2021-03-16 오전 2 12 23" src="https://user-images.githubusercontent.com/55340876/111193009-0dd1b780-85fd-11eb-9359-e61b621c4b19.png">



값이 없는 애를 터치하면 요래 에러가 나뿌니까!!  
왜??  
nil 은 값이 없다는 말인데 강제로 언래핑 해버려서 에러가 남!



옵셔널 바인딩을 이용하자.

```swift
    @IBAction func touchCard(_ sender: UIButton) {
        flipCount += 1
        if let cardNumber = cardButtons.firstIndex(of: sender) {
            print("cardNumber = \(cardNumber)")
        } else {
            print("선택된 카드는 UIButton 배열에 없음;")
        }
    }
```



나머지 카드 하나도 코드에 마저 연결하고,  
초기 카드 설정을 마무리해보자!

```swift
    @IBOutlet var cardButtons: [UIButton]!
    
    var emojiChoices: Array<String> = ["🎃", "👻", "🎃", "👻"]
    
    @IBAction func touchCard(_ sender: UIButton) {
        flipCount += 1
        if let cardNumber = cardButtons.firstIndex(of: sender) {
    //        flipCard(withEmoji: "👻", on: sender)
            flipCard(withEmoji: emojiChoices[cardNumber], on: sender)
        } else {
            print("선택된 카드는 UIButton 배열에 없음;")
        }
    }
```

<img width="300" alt="스크린샷 2021-03-16 오전 2 12 23" src="https://user-images.githubusercontent.com/55340876/111194899-014e5e80-85ff-11eb-9c4d-4d4db4f7b972.gif">

사실 여기서 끝이나면 안되는데 강의는 끝임. ㅋ  
나중에 추가적으로 기능을 더 넣어봅세!


</br>
</br>
</br>


---
---
# Reference
- [Stanford - Developing iOS 11 Apps with Swift [2017-18]](https://www.youtube.com/watch?v=TZL5AmwuwlA&list=PL3d_SFOiG7_8ofjyKzX6Nl1wZehbdiZC_)