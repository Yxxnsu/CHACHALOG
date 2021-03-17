---
title: '🌈 [iOS] programatically - 2'
date: 2021-03-17 22:00:00
category: 'iOS'
draft: true 
showToc: true
---

UI 디자인을 해보자!

# 라벨

```swift
//  RootViewController.swift

import UIKit

class RootViewController: UIViewController {
    
    // MARK: Properties
    lazy var helloWorldLabel: UILabel = {
        let label = UILabel()
        label.text = "Hello World"
        return label
    }()
    
    // MARK: Life Cycle functions
    override func viewDidLoad() {
        super.viewDidLoad()
        
        configureViewComponent()
    }
    
    // MARK: Configures
    func configureViewComponent() {
        self.view.backgroundColor = .systemBackground
    }
}
```




```swift
self.view.backgroundColor = .systemBackground
```

`.systemBackground` 는 디바이스의 테마 색상을 나타냄.  















</br>

---
---
---

# Reference
- []()