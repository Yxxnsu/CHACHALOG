---
title: '🌈 [Swift] 주사위 앱'
date: 2020-08-11 20:22:00
category: 'iOS'
draft: false 
showToc: true
---

# 주사위 앱

## 이미지 리터럴

<img width="500" alt="" src="https://user-images.githubusercontent.com/55340876/89901893-b90e2e80-dc20-11ea-97b8-d1d31a5fecab.gif">

diceImageView1.image = image Litera1 까지 치고 엔터친 후,  
생성된 아이콘을 더블 클릭해서 이미지를 넣어주자. 노가다 방지  
_(vscode 에 붙이니까 코드가 다 풀려서 나오네...쒹)_

**`Who.What = Value` 방정식**

## print

<img width="800" alt="" src="https://user-images.githubusercontent.com/55340876/89901489-19e93700-dc20-11ea-8307-26892a2e1b8a.gif">

콘솔에 출력해보긔  

여까지 일단 코드를 보자.

```swift
//
//  ViewController.swift
//  Dicee-iOS13
//
//  Created by Angela Yu on 11/06/2019.
//  Copyright © 2019 London App Brewery. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet var diceImageView1: UIImageView!  // 첫번째 주사위
    @IBOutlet var diceImageView2: UIImageView!  // 두번째 주사위
    
    override func viewDidLoad() {  // 뷰가 로드될 때 트리거 되는 코드라인
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        
        // diceImageView1.image = image Litera1 까지 치고 엔터친 후,
        // 생성된 아이콘을 더블 클릭해서 이미지를 넣어주자. 노가다 방지
        diceImageView1.image = #imageLiteral(resourceName: "DiceSix")
        diceImageView2.image = #imageLiteral(resourceName: "DiceTwo")
        
    }

    @IBAction func rollButtonPressed(_ sender: UIButton) {
        print("Button got tapped.")
        diceImageView1.image = #imageLiteral(resourceName: "DiceThree")
        diceImageView2.image = #imageLiteral(resourceName: "DiceFour")
    }
    
}


```

## 사용자 인터페이스 상호작용

<img width="800" alt="" src="https://user-images.githubusercontent.com/55340876/89902856-ed361f00-dc21-11ea-9347-d655561b0fb7.png">

## 주석, 출력, 문자열 보간법

```swift
// 주석

/*나는
 진주다*/

// 콘솔창에 출력
// print()
print("Hello World")

// 문자열 보간법
// print("쏼라 \(2+3) 쏼라")
print("Hello \(3*6) World")
print("The result of 5 + 2 = \(7)")

```

## 변수와 배열

상단 코드는 단순하게 하드코딩해서 만든거라 노잼이다.  
버튼을 눌렀을때마다 주사위 이미지가 바뀌게끔 하려면 배열을 사용해서 해주자.  

스위프트에서 `[]` 는 컬렉션을 보관하는데 거의 독점적으로 사용된다.  
현 코드에서는 이미지 리터럴의 모음이 될 것이다.  

```swift
var leftDiceNumber = 1
```

diceImageView 변수들 밑에  
`var` 를 이용해서 변수를 선언해서 초깃값을 준다.

버튼 액션함수 내부에

```swift
    @IBAction func rollButtonPressed(_ sender: UIButton) {
        //leftDiceNumber = 1
        print("leftDiceNumber at beginning = \(leftDiceNumber)")
        diceImageView1.image = [ #imageLiteral(resourceName: "DiceOne"), #imageLiteral(resourceName: "DiceTwo"), #imageLiteral(resourceName: "DiceThree"), #imageLiteral(resourceName: "DiceFour"), #imageLiteral(resourceName: "DiceFive"), #imageLiteral(resourceName: "DiceSix") ][leftDiceNumber]
        
        leftDiceNumber = leftDiceNumber + 1
        //leftDiceNumber = 2
        print("leftDiceNumber at the end = \(leftDiceNumber)")
    }
```

이미지 리터럴을 이용해서 배열을 선언,  
버튼을 누를때마다 leftDiceNumber 가 +1 씩 증가하는 코드를 넣어주고  
print 를 통해 테스트를 해주자.  

<img width="800" alt="" src="https://user-images.githubusercontent.com/55340876/89910905-c381f580-dc2b-11ea-9384-3dacc0c3091c.gif">

저것도 하드코딩이라 일단..  
주사위가 6까지라서 6 이상이 되는 순간 에러가 뜬다.  


</br>

---
---

# Reference  
- [iOS 13 & Swift 5 - The Complete iOS App Development Bootcamp (유료 강의)](https://www.udemy.com/course/ios-13-app-development-bootcamp/)