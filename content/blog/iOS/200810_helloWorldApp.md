---
title: '🌈 [iOS] Hello World 앱'
date: 2020-08-10 23:24:00
category: 'iOS'
draft: false 
showToc: true
---

# Hello World 앱

전체 코드는 아래와 같다.

**ViewController.swift**


```swift
//
//  ViewController.swift
//  HelloWorld
//
//  Created by 차차 on 2020/08/06.
//  Copyright © 2020 Chacha. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    @IBOutlet var lblHello: UILabel!  // 출력 레이블용 아웃렛 변수
    @IBOutlet var txtName: UITextField!  // 이름 입력용 아웃렛 변수
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }

    @IBAction func btnSend(_ sender: UIButton) {
        // 액션함수
        // "안녕, " 이라는 문자열과 txtName.text 의 문자열을 결합하여 lblHello.text 에 넣음
        lblHello.text = "안녕, " + txtName.text!
    }
    
}


```

## 아웃렛 변수
: 일반적으로 클래스 선언부 바로 아래에 추가한다.
- 객체에 대한 속성을 지정할 때 쓰임

## 액션함수
: 일반적으로 클래스 맨 마지막 부분에 추가한다.
- 객체에 이벤트를 넣고 싶을 때 쓰임

## 상수, 변수, 함수, 메서드 이름 규칙
- 특수문자, 수학 기호, 화살표, 선, 그리기 문자, 유효하지 않은 유니코드 사용불가
- 숫자로 시작하는 이름 사용불가
- 예약어, 키워드로 등록되어 있는 단어 사용불가
- 이름만 보고도 역할이 파악되게끔! (ex: ```nameOfTable```)
- 명사와 동사 또는 전치사로 이루어진 단어를 연결하여 만듦 (ex: ```nameOfStudent```)
- 클래스의 이름은 대문자로 시작 (ex: ```ViewController```)
- 변수, 상수, 메서드는 소문자로 시작 (ex: ```addTextField```)
- 시작 단어를 제외하곤 모든 단어의 시작은 대문자로 함 (ex: ```textStyle```)


</br>

스위프트에서는 ```;``` 요놈을 안써서 좋구먼  

뭔가 플러터랑은 또 다른 맛이라 흥미가 생긴다.  
천천히 공부해보쟈! 💪🏻

</br>

결과물은 요로코롬!!  

</br>

<img width="300" alt="" src="https://user-images.githubusercontent.com/55340876/89801605-6161bb80-db6b-11ea-8212-ccd715f361c2.gif">

---
---

# Reference  
- (도서) Do it! 스위프트로 아이폰 앱 만들기