---
title: 'π [Swift] @discardableResult'
date: 2021-01-09 23:43:00
category: 'Swift'
draft: false
showToc: true
---

# @discardableResult

ν¨μ μ μΈκ³Ό λ©μλ μ μΈμ μΆκ°ν  μ μλ μμ±.  
<span style="color: red;">**λ²λ¦΄ μ μλ κ²°κ³Ό**</span>

**`@discardableResult` μμ Result λ ν¨μκ° λ¦¬ν΄νλ κ²°κ³Όμ.**

```swift
func doSomething() {
   print("Something secret")
}

func saySomething() -> String {
   return "Hello"
}

class ViewController: UIViewController {

   override func viewDidLoad() {
      super.viewDidLoad()

      doSomething()

      saySomething() // β οΈResult of call to 'saySomething()' is unused
   }
}
```

μλ¨ μ½λλ₯Ό μ€ννλ©΄  
`saySomething()` λΆλΆμμ κ²½κ³ κ° λμ΄.

`doSomething`μ κ°μ λ¦¬ν΄νμ§ μλ ν¨μ.  
`saySomething`μ κ°μ λ¦¬ν΄νλ ν¨μ.

μ€μννΈλ ν¨μκ° λ¦¬ν΄ν κ²°κ³Όλ₯Ό μ½λ λ΄λΆμμ μ¬μ©νμ§ μμΌλ©΄ κ²½κ³ λ₯Ό μ€!  
λ­ μ΄κ±΄ κ± λ¬΄μν΄λ μ λμκ°λ κ²½μ°κ° μμ§λ§.. κ±°μ¬λ¦¬μ§ μμ΄?!

**κ²½κ³ λ₯Ό μ¨κΈ°κ³  μΆμ λ, `@discardableResult` λ₯Ό μ¬μ©ν¨!!  
ν¨μκ° λ¦¬ν΄ν  κ²°κ³Όλ₯Ό μ¬μ©νμ§ μκ³  λ²λ¦°λ€λ κ²!!**

μ ννλ λ¬΄μνλ€κ³  μκ°νμΌ.

μ νΉμ±μ ν¨μ μ μΈ μλΆλΆμ μΆκ°ν¨.

```swift
@discardableResult
func saySomething() -> String {
   return "Hello"
}
```

μλ ν΄μ£Όλ©΄ κ²½κ³ κ° μ¬λΌμ§.

μ νΉμ±μ `doSomething` ν¨μμ μ¬μ©νλ€λ©΄??  
κ²½κ³ λ₯Ό μ€λ€!

μ??  
μ μ΄μ `doSomething` ν¨μλ κ°μ λ¦¬ν΄νμ§ μμΌλκΉ  
λ²λ¦΄ κ²°κ³Όλ μμΌλ λΉμ°ν κ²½κ³ !!  
μ΄ ν¨μμλ νμκ° μλ νΉμ±μ!!

ν¨μλ₯Ό μ§μ  λ§λ€μκ±°λ  
ν¨μ μ μΈμ μμ ν  μ μλ€λ©΄  
μ§κΈμ²λΌ `@discardableResult` μμ±μ μΆκ°ν΄μ£Όλ©΄ λλλ°,

λ§μ½ μ μΈμ μμ ν  μ μλ€λ©΄??  
ν¨μ νΈμΆ μμ `_` μμΌλμΉ΄λ ν¨ν΄μ μ¬μ©ν΄μ€.

```swift
func doSomething() {
   print("Something secret")
}

//@discardableResult
func saySomething() -> String {
   return "Hello"
}

class ViewController: UIViewController {

   override func viewDidLoad() {
      super.viewDidLoad()

      doSomething()
      _ = saySomething()
   }
}
```

ν¨μκ° μ¬μ©νμ§ μλλ€λ κ²μ  
μμΌλμΉ΄λ ν¨ν΄μΌλ‘ λͺμμ μΌλ‘ ννν΄μ€¬κΈ° λλ¬Έμ κ²½κ³ λ λμ€μ§ μμ!
