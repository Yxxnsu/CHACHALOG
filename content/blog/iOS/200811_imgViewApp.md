---
title: 'π [iOS] Image View μ±'
date: 2020-08-11 02:27:00
category: 'iOS'
draft: false 
showToc: true
---

# Image View μ±



## μ΅μλ λ³μ

```swift
var imgOn: UIImage?
```  


: λ³μ μ μΈ λ€μ `?` λ¬Όμνλ₯Ό μ­μ νλ©΄ μλ¬κ° λλ€.  
μ΅μλμ μ΄λ€ κ°μ΄ μ‘΄μ¬νμ§ μλλ€λ κ²μ λνλΌ λ μ¬μ©νλ€.  
**(λ³μκ° nil(=null) μ΄κ±°λ κ°μ μ‘΄μ¬ μ¬λΆλ₯Ό μ μ μλ€λ κ²μ μλ―Έ)**  

μ€μννΈλ λ³μ μ μΈμ, λ°λμ nilμ΄ μλ κ°μ ν λΉν΄μΌ νμ§λ§  
μ΅μλ νμμ μ¬μ©ν΄μ λ³μμ κ°μ΄ μλ€λ κ²μ μλ¦΄ μ μλ€.  

μλ¨ μ½λλ μ΄κΉκ°μ μ£Όμ§ μμκΈ° λλ¬Έμ `κ°μ΄ μμ μ μλ€` λ μλ―Έλ‘   
`?` λ₯Ό λΆμ¬ μ€μΌ νλ κ²μ΄λ€.  

```swift
var index: Int?

index = 3

if index != nil {
    print(index!)
}
```

μ΅μλλ‘ μ μΈλ λ³μμ κ°μ΄ ν λΉλλ©΄ κ·Έ κ°μ `μ΅μλμ λν λμλ€` κ³  νλ©°,  
μ΄ κ°μ `!` λ₯Ό μ¬μ©νμ¬ κ°μ  μΈλννμ¬ κ°μ μ κ·Όν  μ μλ€.

```swift
var index: Int!

index = 3

if index != nil {
    print(index)
}
```

λν μ΅μλμ μλ¬΅μ μΈ μΈλνμ΄ λλλ‘ μ μΈν  μ μλλ°,  
μ΄λλ κ°μ  μΈλνμ μ¬μ©νμ§ μμλ κ°μ μ κ·Όν  μ μλ€.

</br>

## μ΄λ―Έμ§ λμ°κΈ°

μ½λλ μλμ κ°λ€.

**ViewController.swift**


```swift
//
//  ViewController.swift
//  ImageView
//
//  Created by μ°¨μ°¨ on 2020/08/11.
//  Copyright Β© 2020 Chacha. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    var isZoom = false  // νλ μ¬λΆλ₯Ό λνλ΄λ bool νμμ λ³μ
    var imgOn: UIImage?  // μΌμ§ μ κ΅¬ μ΄λ―Έμ§κ° μλ UIImage νμμ λ³μ
    var imgOff: UIImage?  // κΊΌμ§ μ κ΅¬ μ΄λ―Έμ§κ° μλ UIImage νμμ λ³μ
    
    @IBOutlet var imgView: UIImageView!  // νλ©΄μ λνλΌ μ΄λ―Έμ§λ₯Ό μ€μ νλ μμλ  λ³μ
    @IBOutlet var btnResize: UIButton!  // λ²νΌμ νμ΄νμ μμ νλ μμλ  λ³μ
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        
        imgOn = UIImage(named: "lamp_on.png")  // UIImage νμμ imgOn λ³μμ μ΄λ―Έμ§λ₯Ό μ§μ 
        imgOff = UIImage(named: "lamp_off.png")  // UIImage νμμ imgOff λ³μμ μ΄λ―Έμ§λ₯Ό μ§μ 
        
        imgView.image = imgOn  // μ΄λ―Έμ§ λ·°μ imgView μμλ  λ³μμ imgOn μ΄λ―Έμ§λ₯Ό μ§μ 
    }

    // νλ, μΆμ λ²νΌμ λν μ‘μ ν¨μ
    @IBAction func btnResizeImage(_ sender: UIButton) {  
    }
    
    // μ€μμΉμ λν μ‘μ ν¨μ
    @IBAction func switchImageOnOff(_ sender: UISwitch) {  
    }
    
}
```

μκΈ°κΉμ§ μ§ννλ―  
κ° UIImage νμμ λ³μμΈ imgOn κ³Ό imgOff μλ€κ°  
UIImage νμμ μ΄λ―Έμ§λ€μ μ§μ ν΄ μ£Όμκ³ ,  

μ΄λ―Έμ§ λ·°μ κ°μ²΄μΈ imgView.image μ imgOn μ λμνμΌλ  
μ±μ μ€ννλ©΄ μΌμ§ μ‘°λͺμ΄ λμ! νκ³  λ¬λ€.  

<img width="300" alt="" src="https://user-images.githubusercontent.com/55340876/89808951-e18d1e80-db75-11ea-90a0-525cb3691a09.png">

</br>

## viewDidLoad ν¨μκ° λ­μΌ?
: λ΄κ° λ§λ  λ·°λ₯Ό λΆλ¬μμ λ νΈμΆλλ ν¨μ.  
λΆλͺ¨ ν΄λμ€μΈ UIViewController ν΄λμ€μ μ μΈλμ΄ μλ€.  
λ·°κ° λΆλ €μ§ ν μ€ννκ³ μ νλ κΈ°λ₯μ΄ νμν  λ μ΄ ν¨μ λ΄μ μ½λλ₯Ό μλ ₯ν΄μ€λ€.

```swift
class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.

    }
    
}
```

## νλ λ²νΌ ν¨μ μ½λ©

```swift
    // νλ, μΆμ λ²νΌμ λν μ‘μ ν¨μ
    @IBAction func btnResizeImage(_ sender: UIButton) {  
        let scale: CGFloat = 2.0  // λ²νΌ λλ₯΄λ©΄ μ΄λ―Έμ§κ° 2λ°°λ‘ νλλλ μμλ₯Ό CGFloat(μ€μν) νμμΌλ‘ μ μΈνκ³  κ°μ μ€μ 
        var newWidth:CGFloat, newHeight:CGFloat  // νλ ν¬κΈ°λ₯Ό κ³μ°ν΄μ λ³΄κ΄ν  λ³μλ₯Ό κ°κ° μ€μν νμμΌλ‘ μ μΈ
        
        if (isZoom) {  // true, νλ
            newWidth = imgView.frame.width/scale  // μ΄λ―Έμ§ νλ μμ κ°λ‘, μΈλ‘ ν¬κΈ°μ scale κ°μ λλμ΄ κ° λ³μμ ν λΉ
            newHeight = imgView.frame.height/scale
            btnResize.setTitle("νλ", for: .normal)  // λ²νΌ νμ€νΈλ₯Ό λ³κ²½
        }
        else {  // false, μΆμ
            newWidth = imgView.frame.width*scale  // μ΄λ―Έμ§ νλ μμ κ°λ‘, μΈλ‘ ν¬κΈ°μ scale κ°μ κ³±ν΄ κ° λ³μμ ν λΉ
            newHeight = imgView.frame.height*scale
            btnResize.setTitle("μΆμ", for: .normal)  // λ²νΌ νμ€νΈλ₯Ό λ³κ²½
        }
        imgView.frame.size = CGSize(width: newWidth, height: newHeight)  // CGSize λ©μλλ₯Ό μ¬μ©νμ¬ μ΄λ―Έμ§ λ·°μ νλ μ ν¬κΈ°λ₯Ό λ³κ²½
        isZoom = !isZoom  // λ³μμ μνλ₯Ό λ°μ μν΄
    }
```

</br>

![αα³αα³αα΅α«αα£αΊ 2020-08-11 αα©αα₯α« 2 03 33](https://user-images.githubusercontent.com/55340876/89809673-de466280-db76-11ea-9dc4-e38b7716929e.png)

μ΄ λ, λ¨λ μλ¬λ ν΄λΉ μμλ λ³μλ₯Ό μ½λ λ΄μμ νλ²λ μ¬μ©νμ§ μμμ λμ¨κ±°λ€.  
μ¬μ©νλ©΄ κ²½κ³  λ©μΈμ§κ° μ¬λΌμ§λ€!!!

## μ€μμΉ λ²νΌ ν¨μ μ½λ©

```swift
    // μ€μμΉμ λν μ‘μ ν¨μ
    @IBAction func switchImageOnOff(_ sender: UISwitch) {  
        if sender.isOn {  // μ€μμΉκ° On μ΄λ©΄
            imgView.image = imgOn  // μ΄λ―Έμ§ λ·°μ μ΄λ―Έμ§μ imgOn μ΄λ―Έμ§λ₯Ό ν λΉ
        } else {  // μ€μμΉκ° Off μ΄λ©΄
            imgView.image = imgOff  // μ΄λ―Έμ§ λ·°μ μ΄λ―Έμ§μ imgOff μ΄λ―Έμ§λ₯Ό ν λΉ
        }
    }
```

</br>

κ²°κ³Όλ¬Ό

<img width="300" alt="" src="https://user-images.githubusercontent.com/55340876/89811497-b86e8d00-db79-11ea-80f3-f6f018c571a0.gif">

---
---

# Reference  
- (λμ) Do it! μ€μννΈλ‘ μμ΄ν° μ± λ§λ€κΈ°