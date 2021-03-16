---
title: '🌈 [iOS] programatically'
date: 2021-03-17 01:00:00
category: 'iOS'
draft: false 
showToc: true
---

# 스토리보드 VS 코드 UI

내가 보는 유료, 무료 강의들은 모두 다 스토리보드를 통해 UI를 구현한다.  
최근에 본 개발서들에도 베이스는 다 스토리보드 기준!  

처음에는 그냥 강의에서 시키는대로 아무생각 없이 따라했는데  
학습 진도가 슬슬 나가기 시작하면서 문득,   
'코드로 구현 하는게 더 좋지 않을까?'  
'스토리보드로만 하면 나중에 에러 찾기 힘들지 않을까?'  
라는 생각이 들었다.  

물론 스토리보드를 이용하면 빠르고 쉽게 UI단을 볼 수 있어서 좋다.  
근데 코드를 재사용하고 싶다면??  
앱 로딩 시간은??  
  
무엇보다 코드와 친해져야하는 개발자가 되려면   
코드로 짜는 UI에 더 친숙해질 필요가 있다!

**구글링 하면 요 주제에 대한 꽤 많은 블로그 글들이 있으니  
찾아서 읽어보면 좋을 것 같음!!**

코드 UI 기준의 한국어 클론 강의들이 있으면 참 좋을텐데..라며  
구글링을 하다가 예전에 보려고 찜해둔 유튜브 채널이 생각이 났다.  

채널에 성함 석자를 거시고 강의를 올려주시는 빛과 소금과도 같은 동규쌤..  

![11](https://user-images.githubusercontent.com/55340876/111315883-23e78280-86a6-11eb-824e-6693278505aa.jpeg)


신뢰뿜뿜! 구독!  

</br>

> [신동규](https://www.youtube.com/channel/UCEu31Np3_ocJ0JEtuoSbXIA/videos
)

</br>

온리 코드 베이스의 강의가 있어서 나에게 아주 큰 도움이 될 것 같다!!  
진짜 온라인/오프라인 강의 하셨어도 주머니 탈탈 털어서 갔을거임!!  
동규쌤, 적게 일하시고 많이 버세요!! 👍🏻🙏🏻


---
---
---

# 초기 세팅

<img width="600" alt="스크린샷 2021-03-16 오후 11 12 14" src="https://user-images.githubusercontent.com/55340876/111323271-0d90f500-86ad-11eb-8210-d943bd528c31.png">


- **ViewController.swift 파일 삭제**  
- **새 폴더 + 새 swift 파일 추가**  
- **RootViewController.swift 파일 수정하기!**

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

`UIKit` : 화면을 구성하는 모듈들을 사용하기 위해 불러옴

<img width="500" alt="스크린샷 2021-03-16 오후 11 14 46" src="https://user-images.githubusercontent.com/55340876/111323625-6791ba80-86ad-11eb-8e85-c1353f797f83.png">

(UIKit 내부에 이미 Foundation을 import 하고 있어서 추가적으로 불러올 필요는 없음)

`RootViewController` : `UIViewController` 를 상속받는 서브 클래스.  
내부에는 앱이 실행될 때 자동으로 호출되는 `viewDidLoad` 메서드를 만든다.  


요래만 코드를 짜고 앱을 실행하면 크래시가 남.  
왜??  
ViewController.swift 파일을 삭제하고,  
따로 프로젝트의 진입점을 설정해주지 않았으니까!

# 진입점 설정

**SceneDelegate.swift** 파일을 보자.

```swift
// 초기 세팅 코드
import UIKit

class SceneDelegate: UIResponder, UIWindowSceneDelegate {

    var window: UIWindow?

    func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
        guard let _ = (scene as? UIWindowScene) else { return }
    }
```

초기 세팅된 코드는 위와 같음. (주석 지움)  
코드를 수정해서 진입점을 설정해주자.

```swift
    var window: UIWindow?

    func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
        guard let scene = (scene as? UIWindowScene) else { return }
        
        window = UIWindow(windowScene: scene)
        window?.rootViewController = RootViewController()
        window?.makeKeyAndVisible()
    }
```


상단 코드를 해석해보자.

```swift
guard let scene = (scene as? UIWindowScene) else { return }
```

`as?` 연사자를 이용해서 **다운캐스팅**을 해줌.   
**즉, `let scene`은 `UIWindowScene`형식이 됨!**  
(와일드카드 패턴을 지우고 `scene`이라는 변수명을 준거임)

이 때, `as?` 연산자는 **Conditional Cast**이기 때문에  
옵셔널과 마찬가지로 캐스팅에 성공하면 인스턴스를 리턴, 실패하면 nil을 리턴함.  
그러므로 **Conditional Cast는 guard문등을 통한 옵셔널 바인딩을 같이 쓰는 것이 좋음!!**

아무튼 UIWindowScene.   
여기서는 같은 의미로 옵셔널 바인딩한 `scene`을 말하는데 이놈은 앱 UI 전체의 인스턴스이고,  
`UIWindowScene`은 멀티 스크린에서 UIWindow를 담는 컨테이너 역할을 함.

```swift
window = UIWindow(windowScene: scene)
```

`window`를 `UIWindowScene`형식인 `scene`과 연결해줌.   
즉, `UIWindow`가 어떤 `UIWindowScene`에 담길지 결정해줌.  
(인스턴스를 생성해서 window 변수에 넣어준거임)  


```swift
window?.rootViewController = RootViewController()
```

`window`의 **rootViewController** 속성을 설정하는데,  
만들어놓은 `RootViewController` 객체를 넣어 지정해줌!  
앱을 처음 실행할 때의 진입점으로 사용되는 뷰 컨트롤러가 됨!!

```swift
window?.makeKeyAndVisible()
```

해당 `window`를 **key window**로 지정해줌.   
**key window**는 앱에서 오.직. 하나만 존재하며   
키보드 이벤트, 터치와 무관한 이벤트를 수신하는 윈도우를 말함.  

유후!!!  
이제 스토리보드가 아닌 윈도우를 이용해서 뷰 컨트롤러에 접근이 가능해져따!! 🥳


<img width="800" alt="스크린샷 2021-03-16 오후 11 24 38" src="https://user-images.githubusercontent.com/55340876/111325173-c86dc280-86ae-11eb-9306-046348e3db0c.png">

진입점을 설정해줬으니까 앱을 실행하면  
테스트 로그가 제대로 콘솔에 출력됨! 



# iOS UI 구조

![11](https://user-images.githubusercontent.com/55340876/111335272-990f8380-86b7-11eb-8e14-f2062488457a.png)

</br>

---
---
---

# Reference
- [iOS 개발에서 Xcode 스토리보드를 쓰지 말아야 하는 이유](https://minjunkweon.github.io/why-should-we-dont-use-storyboard/)  
- [Storyboard vs Programmatically in Swift](https://medium.com/@chan.henryk/storyboard-vs-programmatically-in-swift-9a65ff6aaeae)
- [스토리보드를 사용하지 않는 iOS 개발](https://medium.com/@goehd2538/%EC%8A%A4%ED%86%A0%EB%A6%AC%EB%B3%B4%EB%93%9C%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%95%98%EC%A7%80-%EC%95%8A%EB%8A%94-ios-%EA%B0%9C%EB%B0%9C-55b857b0acc0)
- [iOS) UIWindow. 그리고 UIView](https://zeddios.tistory.com/283)
- [UIWindow에 대한 공부](https://medium.com/@Alpaca_iOSStudy/uiwindow-5e7a9d72c582)
- [swift 강좌 1. Pro 처럼 project 시작하기](https://www.youtube.com/watch?v=25Mb_iUJzIA)

