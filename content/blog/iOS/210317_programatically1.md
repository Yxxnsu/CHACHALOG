---
title: '๐ [iOS] programatically - 1'
date: 2021-03-17 01:00:00
category: 'iOS'
draft: false 
showToc: true
---

# ์คํ ๋ฆฌ๋ณด๋ VS ์ฝ๋ UI

๋ด๊ฐ ๋ณด๋ ์ ๋ฃ, ๋ฌด๋ฃ ๊ฐ์๋ค์ ๋ชจ๋ ๋ค ์คํ ๋ฆฌ๋ณด๋๋ฅผ ํตํด UI๋ฅผ ๊ตฌํํ๋ค.  
์ต๊ทผ์ ๋ณธ ๊ฐ๋ฐ์๋ค์๋ ๋ฒ ์ด์ค๋ ๋ค ์คํ ๋ฆฌ๋ณด๋ ๊ธฐ์ค!  

์ฒ์์๋ ๊ทธ๋ฅ ๊ฐ์์์ ์ํค๋๋๋ก ์๋ฌด์๊ฐ ์์ด ๋ฐ๋ผํ๋๋ฐ  
ํ์ต ์ง๋๊ฐ ์ฌ์ฌ ๋๊ฐ๊ธฐ ์์ํ๋ฉด์ ๋ฌธ๋,   
'์ฝ๋๋ก ๊ตฌํ ํ๋๊ฒ ๋ ์ข์ง ์์๊น?'  
'์คํ ๋ฆฌ๋ณด๋๋ก๋ง ํ๋ฉด ๋์ค์ ์๋ฌ ์ฐพ๊ธฐ ํ๋ค์ง ์์๊น?'  
๋ผ๋ ์๊ฐ์ด ๋ค์๋ค.  

๋ฌผ๋ก  ์คํ ๋ฆฌ๋ณด๋๋ฅผ ์ด์ฉํ๋ฉด ๋น ๋ฅด๊ณ  ์ฝ๊ฒ UI๋จ์ ๋ณผ ์ ์์ด์ ์ข๋ค.  
๊ทผ๋ฐ ์ฝ๋๋ฅผ ์ฌ์ฌ์ฉํ๊ณ  ์ถ๋ค๋ฉด??  
์ฑ ๋ก๋ฉ ์๊ฐ์??  
  
๋ฌด์๋ณด๋ค ์ฝ๋์ ์นํด์ ธ์ผํ๋ ๊ฐ๋ฐ์๊ฐ ๋๋ ค๋ฉด   
์ฝ๋๋ก ์ง๋ UI์ ๋ ์น์ํด์ง ํ์๊ฐ ์๋ค!

**๊ตฌ๊ธ๋ง ํ๋ฉด ์ ์ฃผ์ ์ ๋ํ ๊ฝค ๋ง์ ๋ธ๋ก๊ทธ ๊ธ๋ค์ด ์์ผ๋  
์ฐพ์์ ์ฝ์ด๋ณด๋ฉด ์ข์ ๊ฒ ๊ฐ์!!**

์ฝ๋ UI ๊ธฐ์ค์ ํ๊ตญ์ด ํด๋ก  ๊ฐ์๋ค์ด ์์ผ๋ฉด ์ฐธ ์ข์ํ๋ฐ..๋ผ๋ฉฐ  
๊ตฌ๊ธ๋ง์ ํ๋ค๊ฐ ์์ ์ ๋ณด๋ ค๊ณ  ์ฐํด๋ ์ ํ๋ธ ์ฑ๋์ด ์๊ฐ์ด ๋ฌ๋ค.  

์ฑ๋์ ์ฑํจ ์์๋ฅผ ๊ฑฐ์๊ณ  ๊ฐ์๋ฅผ ์ฌ๋ ค์ฃผ์๋ ๋น๊ณผ ์๊ธ๊ณผ๋ ๊ฐ์ ๋๊ท์ค..  

![11](https://user-images.githubusercontent.com/55340876/111315883-23e78280-86a6-11eb-824e-6693278505aa.jpeg)


์ ๋ขฐ๋ฟ๋ฟ! ๊ตฌ๋!  

</br>

> [์ ๋๊ท](https://www.youtube.com/channel/UCEu31Np3_ocJ0JEtuoSbXIA/videos
)

</br>

์จ๋ฆฌ ์ฝ๋ ๋ฒ ์ด์ค์ ๊ฐ์๊ฐ ์์ด์ ๋์๊ฒ ์์ฃผ ํฐ ๋์์ด ๋  ๊ฒ ๊ฐ๋ค!!  
์ง์ง ์จ๋ผ์ธ/์คํ๋ผ์ธ ๊ฐ์ ํ์จ์ด๋ ์ฃผ๋จธ๋ ํํ ํธ์ด์ ๊ฐ์๊ฑฐ์!!  
๋๊ท์ค, ์ ๊ฒ ์ผํ์๊ณ  ๋ง์ด ๋ฒ์ธ์!! ๐๐ป๐๐ป


---
---
---

# ์ด๊ธฐ ์ธํ

<img width="600" alt="แแณแแณแแตแซแแฃแบ 2021-03-16 แแฉแแฎ 11 12 14" src="https://user-images.githubusercontent.com/55340876/111323271-0d90f500-86ad-11eb-8210-d943bd528c31.png">


- **ViewController.swift ํ์ผ ์ญ์ **  
- **์ ํด๋ + ์ swift ํ์ผ ์ถ๊ฐ**  
- **RootViewController.swift ํ์ผ ์์ ํ๊ธฐ!**

```swift
import UIKit

class RootViewController: UIViewController {
    // MARK: Life Cycle functions
    override func viewDidLoad() {
        super.viewDidLoad()
        
        print(#function)
    }
}
```

`UIKit` : ํ๋ฉด์ ๊ตฌ์ฑํ๋ ๋ชจ๋๋ค์ ์ฌ์ฉํ๊ธฐ ์ํด ๋ถ๋ฌ์ด

<img width="500" alt="แแณแแณแแตแซแแฃแบ 2021-03-16 แแฉแแฎ 11 14 46" src="https://user-images.githubusercontent.com/55340876/111323625-6791ba80-86ad-11eb-8e85-c1353f797f83.png">

(UIKit ๋ด๋ถ์ ์ด๋ฏธ Foundation์ import ํ๊ณ  ์์ด์ ์ถ๊ฐ์ ์ผ๋ก ๋ถ๋ฌ์ฌ ํ์๋ ์์)

`RootViewController` : `UIViewController` ๋ฅผ ์์๋ฐ๋ ์๋ธ ํด๋์ค.  
๋ด๋ถ์๋ ์ฑ์ด ์คํ๋  ๋ ์๋์ผ๋ก ํธ์ถ๋๋ `viewDidLoad` ๋ฉ์๋๋ฅผ ๋ง๋ ๋ค.  


์๋๋ง ์ฝ๋๋ฅผ ์ง๊ณ  ์ฑ์ ์คํํ๋ฉด ํฌ๋์๊ฐ ๋จ.  
์??  
ViewController.swift ํ์ผ์ ์ญ์ ํ๊ณ ,  
๋ฐ๋ก ํ๋ก์ ํธ์ ์ง์์ ์ ์ค์ ํด์ฃผ์ง ์์์ผ๋๊น!

# ์ง์์  ์ค์ 

**SceneDelegate.swift** ํ์ผ์ ๋ณด์.

```swift
// ์ด๊ธฐ ์ธํ ์ฝ๋
import UIKit

class SceneDelegate: UIResponder, UIWindowSceneDelegate {

    var window: UIWindow?

    func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
        guard let _ = (scene as? UIWindowScene) else { return }
    }
```

์ด๊ธฐ ์ธํ๋ ์ฝ๋๋ ์์ ๊ฐ์. (์ฃผ์ ์ง์)  
์ฝ๋๋ฅผ ์์ ํด์ ์ง์์ ์ ์ค์ ํด์ฃผ์.

```swift
    var window: UIWindow?

    func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
        guard let scene = (scene as? UIWindowScene) else { return }
        
        window = UIWindow(windowScene: scene)
        window?.rootViewController = RootViewController()
        window?.makeKeyAndVisible()
    }
```


์๋จ ์ฝ๋๋ฅผ ํด์ํด๋ณด์.

```swift
guard let scene = (scene as? UIWindowScene) else { return }
```

`as?` ์ฐ์ฌ์๋ฅผ ์ด์ฉํด์ **๋ค์ด์บ์คํ**์ ํด์ค.   
**์ฆ, `let scene`์ `UIWindowScene`ํ์์ด ๋จ!**  
(์์ผ๋์นด๋ ํจํด์ ์ง์ฐ๊ณ  `scene`์ด๋ผ๋ ๋ณ์๋ช์ ์ค๊ฑฐ์)

์ด ๋, `as?` ์ฐ์ฐ์๋ **Conditional Cast**์ด๊ธฐ ๋๋ฌธ์  
์ต์๋๊ณผ ๋ง์ฐฌ๊ฐ์ง๋ก ์บ์คํ์ ์ฑ๊ณตํ๋ฉด ์ธ์คํด์ค๋ฅผ ๋ฆฌํด, ์คํจํ๋ฉด nil์ ๋ฆฌํดํจ.  
๊ทธ๋ฌ๋ฏ๋ก **Conditional Cast๋ guard๋ฌธ๋ฑ์ ํตํ ์ต์๋ ๋ฐ์ธ๋ฉ์ ๊ฐ์ด ์ฐ๋ ๊ฒ์ด ์ข์!!**

์๋ฌดํผ UIWindowScene.   
์ฌ๊ธฐ์๋ ๊ฐ์ ์๋ฏธ๋ก ์ต์๋ ๋ฐ์ธ๋ฉํ `scene`์ ๋งํ๋๋ฐ ์ด๋์ ์ฑ UI ์ ์ฒด์ ์ธ์คํด์ค์ด๊ณ ,  
`UIWindowScene`์ ๋ฉํฐ ์คํฌ๋ฆฐ์์ UIWindow๋ฅผ ๋ด๋ ์ปจํ์ด๋ ์ญํ ์ ํจ.

```swift
window = UIWindow(windowScene: scene)
```

`window`๋ฅผ `UIWindowScene`ํ์์ธ `scene`๊ณผ ์ฐ๊ฒฐํด์ค.   
์ฆ, `UIWindow`๊ฐ ์ด๋ค `UIWindowScene`์ ๋ด๊ธธ์ง ๊ฒฐ์ ํด์ค.  
(์ธ์คํด์ค๋ฅผ ์์ฑํด์ window ๋ณ์์ ๋ฃ์ด์ค๊ฑฐ์)  


```swift
window?.rootViewController = RootViewController()
```

`window`์ **rootViewController** ์์ฑ์ ์ค์ ํ๋๋ฐ,  
๋ง๋ค์ด๋์ `RootViewController` ๊ฐ์ฒด๋ฅผ ๋ฃ์ด ์ง์ ํด์ค!  
์ฑ์ ์ฒ์ ์คํํ  ๋์ ์ง์์ ์ผ๋ก ์ฌ์ฉ๋๋ ๋ทฐ ์ปจํธ๋กค๋ฌ๊ฐ ๋จ!!

```swift
window?.makeKeyAndVisible()
```

ํด๋น `window`๋ฅผ **key window**๋ก ์ง์ ํด์ค.   
**key window**๋ ์ฑ์์ ์ค.์ง. ํ๋๋ง ์กด์ฌํ๋ฉฐ   
ํค๋ณด๋ ์ด๋ฒคํธ, ํฐ์น์ ๋ฌด๊ดํ ์ด๋ฒคํธ๋ฅผ ์์ ํ๋ ์๋์ฐ๋ฅผ ๋งํจ.  

์ ํ!!!  
์ด์  ์คํ ๋ฆฌ๋ณด๋๊ฐ ์๋ ์๋์ฐ๋ฅผ ์ด์ฉํด์ ๋ทฐ ์ปจํธ๋กค๋ฌ์ ์ ๊ทผ์ด ๊ฐ๋ฅํด์ ธ๋ฐ!! ๐ฅณ


<img width="800" alt="แแณแแณแแตแซแแฃแบ 2021-03-16 แแฉแแฎ 11 24 38" src="https://user-images.githubusercontent.com/55340876/111325173-c86dc280-86ae-11eb-9306-046348e3db0c.png">

์ง์์ ์ ์ค์ ํด์คฌ์ผ๋๊น ์ฑ์ ์คํํ๋ฉด  
ํ์คํธ ๋ก๊ทธ๊ฐ ์ ๋๋ก ์ฝ์์ ์ถ๋ ฅ๋จ! 



# iOS UI ๊ตฌ์กฐ

![11](https://user-images.githubusercontent.com/55340876/111335272-990f8380-86b7-11eb-8e14-f2062488457a.png)

</br>

---
---
---

# Reference
- [iOS ๊ฐ๋ฐ์์ Xcode ์คํ ๋ฆฌ๋ณด๋๋ฅผ ์ฐ์ง ๋ง์์ผ ํ๋ ์ด์ ](https://minjunkweon.github.io/why-should-we-dont-use-storyboard/)  
- [Storyboard vs Programmatically in Swift](https://medium.com/@chan.henryk/storyboard-vs-programmatically-in-swift-9a65ff6aaeae)
- [์คํ ๋ฆฌ๋ณด๋๋ฅผ ์ฌ์ฉํ์ง ์๋ iOS ๊ฐ๋ฐ](https://medium.com/@goehd2538/%EC%8A%A4%ED%86%A0%EB%A6%AC%EB%B3%B4%EB%93%9C%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EC%A7%80-%EC%95%8A%EB%8A%94-ios-%EA%B0%9C%EB%B0%9C-55b857b0acc0)
- [iOS) UIWindow. ๊ทธ๋ฆฌ๊ณ  UIView](https://zeddios.tistory.com/283)
- [UIWindow์ ๋ํ ๊ณต๋ถ](https://medium.com/@Alpaca_iOSStudy/uiwindow-5e7a9d72c582)
- [swift ๊ฐ์ข 1. Pro ์ฒ๋ผ project ์์ํ๊ธฐ](https://www.youtube.com/watch?v=25Mb_iUJzIA)

