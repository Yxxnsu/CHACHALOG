---
title: 'π [iOS] programatically - 2'
date: 2021-03-17 22:00:00
category: 'iOS'
draft: true 
showToc: true
---

UI λμμΈμ ν΄λ³΄μ!

# λΌλ²¨

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

`.systemBackground` λ λλ°μ΄μ€μ νλ§ μμμ λνλ.  















</br>

---
---
---

# Reference
- []()