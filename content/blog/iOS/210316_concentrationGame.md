---
title: 'π [iOS] μ§μ€λ ₯ κ²μ 1'
date: 2021-03-16 01:23:00
category: 'iOS'
draft: false 
showToc: true
---

# μ§μ€λ ₯ κ²μ λ§λ€κΈ°


## μΉ΄λ μλ©΄ κ΅¬ν

```swift
import UIKit

class ViewController: UIViewController {

}
```


`import UIKit` : λͺ¨λ  UIKitλ₯Ό μ¬μ©νκΈ° μν΄ λΆλ¬μ€λ κ²

`UIKit ` : λ²νΌ, μ¬λ¦¬μ΄λ λ±μ΄ μλ iOS νλ μμν¬(μ½μ½μ ν°μΉ μΈ΅ κ°μ κ²)

`UIViewController` : λΆλͺ¨ ν΄λμ€(μνΌ ν΄λμ€)λ‘ UIKitμ μμ. μ΄λμ UIκ° λ¬΄μμ νλμ§ μ μ΄ν¨

`ViewController` : λΆλͺ¨ ν΄λμ€μΈ `UIViewController` λ₯Ό μμλ°μ. μ¦, μμ ν΄λμ€(μλΈ ν΄λμ€)



λ²νΌμ μΆκ°ν΄λ΄μΈ.  
μ΅μ  λΌμ΄λΈλ¬λ¦¬λ₯Ό ν΅ν΄ **Button** μ μ μ©νκ³ , (λμμΈ μ€λͺμ μλ΅)  
**λ²νΌμ control + λλκ·Έ μ€ λλ‘­ν΄μ μ½λ λ΄μ λΏ!**  



<img width="617" alt="μ€ν¬λ¦°μ· 2021-03-15 μ€ν 11 12 00" src="https://user-images.githubusercontent.com/55340876/111168349-57aea380-85e5-11eb-8192-6b3abb9a1159.png">



Connection -> **Action** : λ²νΌμ λλ μ λ λ©μλλ₯Ό νΈμΆν¨

Object -> **View Controller** : μ΄κ±΄ λ­ λΉμ°ν κ²

Name -> **touchCard** : μ λλ‘ λ λ³μλͺμΌλ‘ μ§μ΄μ£ΌμΌ

Type -> **UIButton** : μ΄κΈ°κ°μ **Any** λ‘ λμ΄μμ γ‘γ‘ μ½λμ λμμ μν΄ **UIButton** μΌλ‘ λ°κΏμ£ΌμΌ

Event -> **Touch Up Inside** : λ²νΌμ ν°μΉνκ³  μμ λ λ λμνκ²λ

Arguments -> **Sender** : Noneμ μ ννλ©΄ μΈμκ° μλκ±΄λ°, μ¬κΈ°μλ λ²νΌκ³Όμ μν΅μ μν΄ **Sender** λ₯Ό μ νν¨

</br>


**μ€μννΈ μΈμ΄μμμ μΈμ**
- λͺ¨λ  μΈμμλ μ΄λ¦μ΄ μμ(λ©μλ νΈμΆμ μ΄ μ΄λ¦μ ν¬ν¨ν΄μΌ ν¨)
- μ΄λ¦μ΄ λκ°μ
  - νΈμΆν  λ μ¬μ©νλ μΈλΆ μ΄λ¦
  - μ½λ κ΅¬νμ μ¬μ©ν  λ΄λΆ μ΄λ¦


```swift
import UIKit

class ViewController: UIViewController {

    @IBAction func touchCard(_ sender: UIButton) {
    }
    
}
```

`_ sender: UIButton` μ¬κΈ°μ UIButtonμ λ§€κ°λ³μμ νμμ.



μ΄ λ λ²νΌμ λ©μλκ° λ¦¬ν΄ κ°μ κ°λλ€λ©΄?

```swift
    @IBAction func touchCard(_ sender: UIButton) -> Int {
    }
```

μ΄λ κ² λ¦¬ν΄ νμμ μ¨μ£Όλ©΄ λ¨!  
μ λ©μλλ Intνμ κ°μ λ¦¬ν΄νλ€λ λ»μ.



λ²νΌμ΄ μ λλ‘ λμνλμ§ λ΄μΈ!

```swift
    @IBAction func touchCard(_ sender: UIButton) {
        print(#function)
    }
```

μ½μμ ν΄λΉ ν¨μκ° μ°νλμ§λ§~~

<img width="500" alt="" src="https://user-images.githubusercontent.com/55340876/111168829-c55acf80-85e5-11eb-913d-1761bafcf5d2.gif">

μ λλκ΅¬λ¨Ό!! π»



## λ€μ§κΈ° κ΅¬ν

μΉ΄λλ₯Ό λ€μ§λ ν¨μλ₯Ό λ§λ€μ.

```swift
    func flipCard(withEmoji emoji: String, on button: UIButton) {
        
    }
```



</br>

`withEmoji emoji: String` μ½λμμ

`withEmoji` λ μΈμ λ μ΄λΈ : ν¨μλ₯Ό νΈμΆνλ©΄μ μΈμλ₯Ό μ λ¬ν  λ μ¬μ©νλ μ΄λ¦.

`emoji` λ νλΌλ―Έν°λͺ : ν¨μ λ°λμμ ν¨μλ‘ μ λ¬λ κ°μ μ κ·Όν  λ μ¬μ©νλ μ΄λ¦.

`String` μ λ§€κ°λ³μ νμ.



`on button: UIButton` μ½λλ,  
μΈμλ μ΄λΈμ on, νλΌλ―Έν°λͺμ button,  
νλΌλ―Έν°μ νμμ UIButton νμμ΄λΌλ κ²μ μ μ μμ!



> μμΈν λ΄μ©μ νλ¨ κΈμ μ°Έκ³ νμΌ.
>
> [π [Swift] ν¨μ / return](https://chajinjoo.netlify.app/Swift/20210109_functionAndReturn/)
>
> [π [Swift] νλΌλ―Έν°(Parameter)](https://chajinjoo.netlify.app/Swift/20210109_parameter/)
>
> [π [Swift] μΈμ λ μ΄λΈ](https://chajinjoo.netlify.app/Swift/20210109_argumentLabel/)



μΌλ¨ νμ¬λ μ λ ΉμΉ΄λλ₯Ό ν°μΉνμ λ,   
`flipCard` λ©μλλ₯Ό νΈμΆνκ²λ κ΅¬νν΄λ³΄μ.

```swift
    @IBAction func touchCard(_ sender: UIButton) {
        flipCard(withEmoji: "π»", on: sender)
    }
    
    func flipCard(withEmoji emoji: String, on button: UIButton) {
        
    }
```

**Flip card with emoji ghost on sender.**



filpCard λ©μλλ₯Ό κ΅¬νν΄λ³΄μ!



**μΉ΄λμ λ·λ©΄μ κ΅¬νν΄μΌνλκΉ**

`filpCard` λ©μλμκ² λ²νΌμ νμΈν΄μ μ΄λ―Έ μ λ Ήμ΄λ©΄,   
μ΄λͺ¨ν°μ½ μμ΄ μ£Όν©μμΌλ‘ λ€μ§κ² ν κ³ μ!  
μ λ Ήμ΄ μλλ©΄ ν° λ°νμ μ λ Ήμ΄ μκ² ν¨!



μΌλ¨ λ²νΌμ νμ¬ νμ΄νμ΄ μ λ ΉμΌλ‘ λμ΄ μλμ§λΆν° νμΈν΄μΌν¨.



<img width="617" alt="μ€ν¬λ¦°μ· 2021-03-16 μ€μ  12 05 32" src="https://user-images.githubusercontent.com/55340876/111175073-5f714680-85eb-11eb-9a6d-ff2330a5c9f7.png">



νμ¬ νμ΄νμ΄ μμμ§ μμμ§ νμ ν  μ μμΌλ `currentTitle`  μμ±μ μ΅μλ Stringμ λ¦¬ν΄ν¨.



> μμΈν λ΄μ©μ νλ¨ κΈμ μ°Έκ³ νμΌ.
>
> [π [Swift] μ΅μλ / μΈλν / κ°μ μΆμΆ](https://chajinjoo.netlify.app/Swift/20210108_optionalAndUnwrapping/)



μΉ΄λλ₯Ό λ€μ§λλ° νμν μ΄λͺ¨ν°μ½κ³Ό κ°μμ§ λΉκ΅λ₯Ό νκ³ ,  
μ΄λ―Έ μ λ Ή μ΄λͺ¨ν°μ½μ΄ μμΌλκΉ μΉ΄λλ₯Ό λΉ μ£Όν©μμΌλ‘ λ§λ€μ΄μΌ ν¨.



<img width="705" alt="μ€ν¬λ¦°μ· 2021-03-16 μ€μ  12 18 12" src="https://user-images.githubusercontent.com/55340876/111176931-1c17d780-85ed-11eb-80b1-1c67d2573e22.png">



`setTitle` μμ±μ νμ¬ λ²νΌμ νμ΄νμ λ°κΏμ€.  
μ§κΈμ μΉ΄λμ λ·λ©΄μ λ§λ€κ³  μμΌλκΉ!!  
μ²«λ²μ§Έ νλΌλ―Έν°λ‘λ κ³΅λ°±μ μ£Όκ³ , λλ²μ§Έ νλΌλ―Έν°λ μνλ₯Ό μ€.  
**λ³΄ν΅ μ΄λ° μμ±μ λ§μ§λ§ νλΌλ―Έν°λ‘ μνλ₯Ό λ°λλ° μ¬κΈ°μλ `.normal` λ‘ μ§μ ν΄μ£Όμ!**



```swift
        if button.currentTitle == emoji {
            button.setTitle("", for: .normal)
            button.backgroundColor = #colorLiteral(red: 1, green: 0.5763723254, blue: 0, alpha: 1)
        }
```

λ°±κ·ΈλΌμ΄λ μμμ color λ¦¬ν°λ΄μ μ¬μ©νμ.  
μ½λλ‘ μ?κΈ°λκΉ μ λ λ¨λ€ μ€νΈ.. π€­



μ λ Ήμ΄ μλ κ²½μ°λ μ‘°κ±΄μ μ£Όμ.  
μ λ Ήμ΄ μλ€λ©΄?? μ λ Ήμ λ£μ΄μ£ΌμΌ!



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



μλμ ν΄λ΄μΈ.

<img width="500" alt="" src="https://user-images.githubusercontent.com/55340876/111179390-61d59f80-85ef-11eb-8224-fa679ab5becf.gif">



ππ»



μ λ Ή μΉ΄λλ₯Ό λ³΅μ¬ν΄μ νΈλ° μΉ΄λλ λ§λ€μ΄λ³΄μ.

```swift
    @IBAction func touchSecondCard(_ sender: UIButton) {
        flipCard(withEmoji: "π", on: sender)
    }
    
    func flipCard(withEmoji emoji: String, on button: UIButton) {
        print("filpCard(withEmoji: \(emoji))") // λλ²κΉ μ½λ
```

μΌλ¨ `flipCard` λ©μλλ₯Ό μ νΈμΆνλμ§ νμΈνλ μ½λμ ν¨κ» μ€νν΄λ³΄μ.(λ¬Έμμ΄ λ³΄κ°λ² μ¬μ©)



<img width="700" alt="" src="https://user-images.githubusercontent.com/55340876/111180721-a6ae0600-85f0-11eb-8d29-0110eed37802.gif">



??????????  
νΈλ°μ΄ μΉ΄λκ° μλ€μ§ν;;  
μ???  
μ λ Ή. νΈλ°.  
μ λ Ή. νΈλ°.  
λλ²μ© νΈμΆνκ³  μμ γ γ 



**Connection Well**μ λ§μ°μ€λ₯Ό λλ³΄μΌ!!!



<img width="700" alt="" src="https://user-images.githubusercontent.com/55340876/111181137-01476200-85f1-11eb-8503-ace8a1435043.gif">



`touchCard` λ©μλκ° μ λ ΉμΉ΄λλ νΈλ°μΉ΄λ λκ°λ₯Ό νΈμΆνκ³  μμ!!!! π€  
μκΉ μ λ ΉμΉ΄λλ₯Ό λ³΅μ¬ν΄μ νΈλ°μΉ΄λλ₯Ό λ§λ€μ΄μ κ·Έλ λ€;;  
μμ£Ό νλ μ€μλκΉ μ£Όμνμ!!



<img width="700" alt="" src="https://user-images.githubusercontent.com/55340876/111181913-c7c32680-85f1-11eb-947b-c7813ca72da4.gif">



λ§μ°μ€ μ€λ₯Έμͺ½μ ν΄λ¦­ν΄μ νΈλ°μΉ΄λλ μ°κ²°λ `touchCard` λ©μλλ₯Ό ν΄μ ν΄μ£ΌμΌ!



<img width="700" alt="" src="https://user-images.githubusercontent.com/55340876/111182232-0e188580-85f2-11eb-944b-5adda3583d76.gif">



μ λ ΉμΉ΄λλ λ€μ§νκ³ ,  
νΈλ°μΉ΄λλ λ€μ§νκ³ !!  
νΌννΈνλ€.



## λ€μ§μ νμ κ΅¬ν

μΉ΄λλ₯Ό μ κ² λ€μ§μμλ‘ μΉμμ!



λ¨Όμ  λ€μ§μ νμλ₯Ό μΆμ ν  μΈμ€ν΄μ€ λ³μ(νλ‘νΌν°)λ₯Ό μΆκ°ν¨.  

**λͺ¨λ  μΈμ€ν΄μ€ λ³μ**  
**μ¦, νλ‘νΌν°(μμ±)μ λ¬΄μ‘°κ±΄ μ΄κΈ°νλ₯Ό ν΄μΌν¨.**  
**μ΄λμλΌμ΄μ !!!**  
**μ΄κΈ°κ°μ κ°κ³  μμ΄μΌνλ€λ λ§μ!**



μΈμ€ν΄μ€ λ³μλ₯Ό μ΄κΈ°ννλ λ°©λ²  
- μ΄λμλΌμ΄μ  μ΄μ©
- μ΄κΈ°κ° ν λΉ



μ¬κΈ°μ  μ΄κΈ°κ°μ ν λΉν΄μ£Όκ² μ.

```swift
class ViewController: UIViewController {
    var flipCount: Int = 0
```



μ¬μ€ μλ¨ μ½λλ₯Ό λ³΄λ©΄ μ΄κΈ°κ°μΌλ‘ `0` μ λ£μ΄μ€¬μΌλ  
νμ μΆλ‘ μ΄ κ°λ₯νλκΉ `Int` λ₯Ό λͺμν΄μ£Όμ§ μμλ λ¨!



λ³΄ν΅ ν¨μμ νλΌλ―Έν° νμμ λͺμνλ κ²½μ°λ κ±°μ νμμ μ΄κ³ ,  
λ³μλ μΆλ‘ μΌλ‘ λκΈ°λ κ²½μ°κ° λ§μ§λ§..  
λ μ½λ¦°μ΄λκΉ λͺμν΄μ£Όλκ±Έλ‘~~~!



μ μ΄μ , μΉ΄λλ₯Ό λ€μ§μ λλ§λ€ νμλ₯Ό λλ €λ³΄μ!

```swift
    @IBAction func touchCard(_ sender: UIButton) {
        flipCount += 1
        flipCard(withEmoji: "π»", on: sender)
    }
    
    @IBAction func touchSecondCard(_ sender: UIButton) {
        flipCount += 1
        flipCard(withEmoji: "π", on: sender)
    }
```

`flipCount += 1` μ½λλ₯Ό λ³΅λΆν΄μ μ€λ³΅μ.. π€?  
μΌλ¨ μ§νν΄λ³΄μ.



μ΄ νμλ₯Ό UIμ μ μ©ν©μΈ!  
μ΅μ  λΌμ΄λΈλ¬λ¦¬λ₯Ό ν΅ν΄ **Label** μ μ μ©νκ³ ,  
UIμ μ½λλ₯Ό μ°κ²°ν΄λ³΄μ.

```swift
@IBOutlet weak var flipCountLabel: UILabel!
```

UILabelμ UI μμ μμ΄μ νμ μΆλ‘  λΆκ°λ₯!  
κ·Έλμ UILabelμ΄λΌ λͺμν΄μ£Όμ΄μΌ ν¨.



νμκ° λ°λλλ§λ€ UIμ νμ νμ€νΈλ λ°λμ΄μΌνμ§?

```swift
    var flipCount: Int = 0

    @IBOutlet weak var flipCountLabel: UILabel!
    
    @IBAction func touchCard(_ sender: UIButton) {
        flipCount += 1
        flipCountLabel.text = "Flips: \(flipCount)"
        flipCard(withEmoji: "π»", on: sender)
    }
    
    @IBAction func touchSecondCard(_ sender: UIButton) {
        flipCount += 1
        flipCountLabel.text = "Flips: \(flipCount)"
        flipCard(withEmoji: "π", on: sender)
    }
```

<img width="300" alt="" src="https://user-images.githubusercontent.com/55340876/111185761-a9f7c080-85f5-11eb-9bc9-3189c972409c.gif">

μ§κΈμ μλ€ μκ΄μμ΄ νμκ° μ¦κ°ν¨.  
μ½λ μ€λ³΅μ΄ λ§μΌλκΉ μμ±κ°μμλ₯Ό ν΅ν΄ λ°κΏμ£Όμ.

```swift
    var flipCount: Int = 0 {
        didSet {
            flipCountLabel.text = "Flips: \(flipCount)"
        }
    }

    @IBOutlet weak var flipCountLabel: UILabel!
    
    @IBAction func touchCard(_ sender: UIButton) {
        flipCount += 1
        flipCard(withEmoji: "π»", on: sender)
    }
    
    @IBAction func touchSecondCard(_ sender: UIButton) {
        flipCount += 1
        flipCard(withEmoji: "π", on: sender)
    }
```



## μ΄κΈ° μΉ΄λ μ€μ 

μΉ΄λλ μΌλ¨ λ€μ§μ΄μ Έ μμ΄μΌ νλκΉ  
λ μΉ΄λμ μλ©΄ μ΄λͺ¨ν°μ½μ μ§μ°κ³  λ°±κ·ΈλΌμ΄λ μ»¬λ¬λ μ€λ μ§λ‘ λ°κΏμ€.



μΌλ¨ μΉ΄λλ€μ λ λ³΅μ¬νκΈ°μ μ μ€λ³΅λλ μ½λ μ λ¦¬λ₯Ό μ’ ν΄μ£Όμ.  
νΈλ°μΉ΄λλ μΌλ¨ `touchCard` μ μ°κ²°ν΄μ€! (μ΄μ  μ°κ²°λ μ»€λ₯νΈλ ν΄μ ν¨)  
μΉ΄λλ₯Ό λ³΅λΆν΄μ λ μμ±ν΄μ€μΈ.



κ·Έλ¦¬κ³  νλμ½λ©μ΄μλ μ΄λͺ¨ν°μ½μ λ°°μ΄μμ κΊΌλ΄μ€κ²λ νμ.

```swift
    @IBOutlet var cardButtons: [UIButton]!
```

**Outlet Collection** μΌλ‘ μ½λμ μ°κ²°(UIμ μλ κ²λ€μ λ°°μ΄)



<img width="800" alt="μ€ν¬λ¦°μ· 2021-03-16 μ€μ  1 49 29" src="https://user-images.githubusercontent.com/55340876/111189876-dca3b800-85f9-11eb-97cd-0810d551c073.png">



νμ¬λ 3κ°μ μΉ΄λλ₯Ό `[UIButton]` λ°°μ΄μ μ°κ²°ν΄μ€¬μ. (UIButton νμμ λ°°μ΄)



μΉ΄λλ₯Ό ν°μΉν  λλ§λ€ ν΄λΉ μΉ΄λμ μΈλ±μ€λ₯Ό μΆλ ₯νκ²λ ν΄λ³΄μ.

```swift
    @IBAction func touchCard(_ sender: UIButton) {
        flipCount += 1
        let cardNumber = cardButtons.firstIndex(of: sender)
        print("cardNumber = \(cardNumber)")
//        flipCard(withEmoji: "π»", on: sender)
    }
```

<img width="800" alt="μ€ν¬λ¦°μ· 2021-03-16 μ€μ  1 49 29" src="https://user-images.githubusercontent.com/55340876/111192021-fb0ab300-85fb-11eb-9144-446a4bb4cfe7.gif">



`cardNumber` λ μ΅μλ indexλΌ μ λ κ² μΆλ ₯λ¨.

<img width="667" alt="μ€ν¬λ¦°μ· 2021-03-16 μ€μ  2 07 28" src="https://user-images.githubusercontent.com/55340876/111192422-5f2d7700-85fc-11eb-891f-cc25e02b6cf2.png">

μ μ΄μ `firstIndex` λ  μ΅μλ Intνμ κ°μ λ°ννκΈ° λλ¬Έ!!  
κ°μ΄ μμΌλ©΄ nilμ λ¦¬ν΄νλ κ²!! (μμ μΆλ ₯κ²°κ³Όμμ nilμ λ³΄λ©΄ μ μ μμ)  
μ¦, λ°°μ΄μ μλ μΉ΄λλ₯Ό ν°μΉνλ©΄ nil κ°μ λ¦¬ν΄ν¨.



```swift
        let cardNumber = cardButtons.firstIndex(of: sender)!
```

μ΄λ°μμΌλ‘ `!` λ‘ κ°μ μΆμΆνλ©΄ λλλ° ν .. μ΄ λ°©λ²μ λΉμΆμ΄κΈ΄ ν¨;



<img width="800" alt="μ€ν¬λ¦°μ· 2021-03-16 μ€μ  2 12 23" src="https://user-images.githubusercontent.com/55340876/111193009-0dd1b780-85fd-11eb-9359-e61b621c4b19.png">



κ°μ΄ μλ μ λ₯Ό ν°μΉνλ©΄ μλ μλ¬κ° λλΏλκΉ!!  
μ??  
nil μ κ°μ΄ μλ€λ λ§μΈλ° κ°μ λ‘ μΈλν ν΄λ²λ €μ μλ¬κ° λ¨!



μ΅μλ λ°μΈλ©μ μ΄μ©νμ.

```swift
    @IBAction func touchCard(_ sender: UIButton) {
        flipCount += 1
        if let cardNumber = cardButtons.firstIndex(of: sender) {
            print("cardNumber = \(cardNumber)")
        } else {
            print("μ νλ μΉ΄λλ UIButton λ°°μ΄μ μμ;")
        }
    }
```



λλ¨Έμ§ μΉ΄λ νλλ μ½λμ λ§μ  μ°κ²°νκ³ ,  
μ΄κΈ° μΉ΄λ μ€μ μ λ§λ¬΄λ¦¬ν΄λ³΄μ!

```swift
    @IBOutlet var cardButtons: [UIButton]!
    
    var emojiChoices: Array<String> = ["π", "π»", "π", "π»"]
    
    @IBAction func touchCard(_ sender: UIButton) {
        flipCount += 1
        if let cardNumber = cardButtons.firstIndex(of: sender) {
    //        flipCard(withEmoji: "π»", on: sender)
            flipCard(withEmoji: emojiChoices[cardNumber], on: sender)
        } else {
            print("μ νλ μΉ΄λλ UIButton λ°°μ΄μ μμ;")
        }
    }
```

<img width="300" alt="μ€ν¬λ¦°μ· 2021-03-16 μ€μ  2 12 23" src="https://user-images.githubusercontent.com/55340876/111194899-014e5e80-85ff-11eb-9c4d-4d4db4f7b972.gif">



</br>
</br>
</br>


---
---
# Reference
- [Stanford - Developing iOS 11 Apps with Swift [2017-18]](https://www.youtube.com/watch?v=TZL5AmwuwlA&list=PL3d_SFOiG7_8ofjyKzX6Nl1wZehbdiZC_)