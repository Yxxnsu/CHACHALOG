---
title: '🌈 [Swift] Image View 앱'
date: 2020-08-11 02:27:00
category: 'iOS'
draft: false 
showToc: true
---

# Image View 앱



## 옵셔널 변수

```swift
var imgOn: UIImage?
```  


: 변수 선언 뒤에 `?` 물음표를 삭제하면 에러가 난다.  
옵셔널은 어떤 값이 존재하지 않는다는 것을 나타낼 때 사용한다.  
**(변수가 nil(=null) 이거나 값의 존재 여부를 알 수 없다는 것을 의미)**  

스위프트는 변수 선언시, 반드시 nil이 아닌 값을 할당해야 하지만  
옵셔널 타입을 사용해서 변수에 값이 없다는 것을 알릴 수 있다.  

상단 코드는 초깃값을 주지 않았기 때문에 `값이 없을 수 있다` 는 의미로   
`?` 를 붙여 줘야 하는 것이다.  

```swift
var index: Int?

index = 3

if index != nil {
    print(index!)
}
```

옵셔널로 선언된 변수에 값이 할당되면 그 값은 `옵셔널에 래핑 되었다` 고 하며,  
이 값은 `!` 를 사용하여 강제 언래핑하여 값에 접근할 수 있다.

```swift
var index: Int!

index = 3

if index != nil {
    print(index)
}
```

또한 옵셔널은 암묵적인 언래핑이 되도록 선언할 수 있는데,  
이떄는 강제 언래핑을 사용하지 않아도 값에 접근할 수 있다.

</br>

## 이미지 띄우기

코드는 아래와 같다.

**ViewController.swift**


```swift
//
//  ViewController.swift
//  ImageView
//
//  Created by 차차 on 2020/08/11.
//  Copyright © 2020 Chacha. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    var isZoom = false  // 확대 여부를 나타내는 bool 타입의 변수
    var imgOn: UIImage?  // 켜진 전구 이미지가 있는 UIImage 타입의 변수
    var imgOff: UIImage?  // 꺼진 전구 이미지가 있는 UIImage 타입의 변수
    
    @IBOutlet var imgView: UIImageView!  // 화면에 나타낼 이미지를 설정하는 아웃렛 변수
    @IBOutlet var btnResize: UIButton!  // 버튼의 타이틀을 수정하는 아웃렛 변수
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        
        imgOn = UIImage(named: "lamp_on.png")  // UIImage 타입의 imgOn 변수에 이미지를 지정
        imgOff = UIImage(named: "lamp_off.png")  // UIImage 타입의 imgOff 변수에 이미지를 지정
        
        imgView.image = imgOn  // 이미지 뷰의 imgView 아웃렛 변수에 imgOn 이미지를 지정
    }

    // 확대, 축소 버튼에 대한 액션 함수
    @IBAction func btnResizeImage(_ sender: UIButton) {  
    }
    
    // 스위치에 대한 액션 함수
    @IBAction func switchImageOnOff(_ sender: UISwitch) {  
    }
    
}
```

요기까지 진행하믄  
각 UIImage 타입의 변수인 imgOn 과 imgOff 에다가  
UIImage 타입의 이미지들을 지정해 주었고,  

이미지 뷰의 객체인 imgView.image 에 imgOn 을 대입했으니  
앱을 실행하면 켜진 조명이 뚜왔! 하고 뜬다.  

<img width="300" alt="" src="https://user-images.githubusercontent.com/55340876/89808951-e18d1e80-db75-11ea-90a0-525cb3691a09.png">

</br>

## viewDidLoad 함수가 뭐야?
: 내가 만든 뷰를 불러왔을 때 호출되는 함수.  
부모 클래스인 UIViewController 클래스에 선언되어 있다.  
뷰가 불려진 후 실행하고자 하는 기능이 필요할 때 이 함수 내에 코드를 입력해준다.

```swift
class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.

    }
    
}
```

## 확대 버튼 함수 코딩

```swift
    // 확대, 축소 버튼에 대한 액션 함수
    @IBAction func btnResizeImage(_ sender: UIButton) {  
        let scale: CGFloat = 2.0  // 버튼 누르면 이미지가 2배로 확대되니 상수를 CGFloat(실수형) 타입으로 선언하고 값을 설정
        var newWidth:CGFloat, newHeight:CGFloat  // 확대 크기를 계산해서 보관할 변수를 각각 실수형 타입으로 선언
        
        if (isZoom) {  // true, 확대
            newWidth = imgView.frame.width/scale  // 이미지 프레임의 가로, 세로 크기에 scale 값을 나누어 각 변수에 할당
            newHeight = imgView.frame.height/scale
            btnResize.setTitle("확대", for: .normal)  // 버튼 텍스트를 변경
        }
        else {  // false, 축소
            newWidth = imgView.frame.width*scale  // 이미지 프레임의 가로, 세로 크기에 scale 값을 곱해 각 변수에 할당
            newHeight = imgView.frame.height*scale
            btnResize.setTitle("축소", for: .normal)  // 버튼 텍스트를 변경
        }
        imgView.frame.size = CGSize(width: newWidth, height: newHeight)  // CGSize 메서드를 사용하여 이미지 뷰의 프레임 크기를 변경
        isZoom = !isZoom  // 변수의 상태를 반전시킴
    }
```

</br>

![스크린샷 2020-08-11 오전 2 03 33](https://user-images.githubusercontent.com/55340876/89809673-de466280-db76-11ea-9dc4-e38b7716929e.png)

이 때, 뜨는 에러는 해당 상수나 변수를 코드 내에서 한번도 사용하지 않아서 나온거다.  
사용하면 경고 메세지가 사라진다!!!

## 스위치 버튼 함수 코딩

```swift
    // 스위치에 대한 액션 함수
    @IBAction func switchImageOnOff(_ sender: UISwitch) {  
        if sender.isOn {  // 스위치가 On 이면
            imgView.image = imgOn  // 이미지 뷰의 이미지에 imgOn 이미지를 할당
        } else {  // 스위치가 Off 이면
            imgView.image = imgOff  // 이미지 뷰의 이미지에 imgOff 이미지를 할당
        }
    }
```

</br>

결과물

<img width="300" alt="" src="https://user-images.githubusercontent.com/55340876/89811497-b86e8d00-db79-11ea-80f3-f6f018c571a0.gif">

---
---

# Reference  
- (도서) Do it! 스위프트로 아이폰 앱 만들기