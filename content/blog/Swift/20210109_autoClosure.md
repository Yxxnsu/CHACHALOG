---
title: 'π [Swift] μ€ν  ν΄λ‘μ '
date: 2021-01-09 23:50:00
category: 'Swift'
draft: false
showToc: true
---

```swift
func random() -> Int {
   return Int.random(in: 0...100)
}

func takeResult(param: Int) {
   print(param)
}

takeResult(param: random())
// λλ€ μ μλ₯Ό λ¦¬ν΄
```

μλ¨ `random` ν¨μλ 0 ~ 100 κΉμ§μ μ«μμ€ νλλ₯Ό λλ€μΌλ‘ λ°ννλ ν¨μμ.  
`takeResult` ν¨μλ μ μλ₯Ό νλΌλ―Έν°λ‘ λ°μμ `print`λ‘ μΆλ ₯ν΄μ€.

```swift
takeResult(param: random())
```

μ μ½λμμλ random ν¨μμμ λ°νν μ μλ₯Ό νλΌλ―Έν°λ‘ λ°μμ μΆλ ₯ν΄μ£Όκ³  μμ!

μ¬κΈ°κΉμ§ μ΄ν΄κ° μ½λ€.  
λ€λ₯Έ μμλ₯Ό λ³΄μ.

```swift
func random() -> Int {
   return Int.random(in: 0...100)
}

func takeClosure(param: () -> Int) {
   print(param())
}

takeClosure(param: { Int.random(in: 0...100) })
// λλ€ μ μλ₯Ό λ¦¬ν΄
```

`takeClosure` ν¨μλ νλΌλ―Έν°κ° μκ³  Intνμ λ¦¬ν΄νλ ν¨μμ.  
λ€μ λ§ν΄, ν΄λ‘μ λ₯Ό μ λ¬ν¨!  
ν¨μ λ°λμμ ν΄λ‘μ λ₯Ό νΈμΆνκ³ , λ¦¬ν΄ λ κ²°κ³Όλ₯Ό μΆλ ₯νκ³  μμ.

```swift
takeClosure(param: { Int.random(in: 0...100) })
```

νλΌλ―Έν°λ‘ μΈλΌμΈ ν΄λ‘μ λ₯Ό μ λ¬νκ³  μμ.  
ν΄λ‘μ  μμ²΄λ₯Ό μΈμμ μ§.μ . μ λ¬νλ κ²μ΄λκΉ μΈλΌμΈ ν΄λ‘μ μ!

μ κ²½μ°μλ  
ν΄λ‘μ  λ΄λΆμ ν¬ν¨λ μ½λλ μΈμ  μ€νλ κΉ??

ν¨μλ₯Ό νΈμΆμ μ€νλλκ² μλλΌ,  
ν¨μ λ΄λΆμμ ν΄λ‘μ λ₯Ό νΈμΆνλ μμ μ μ€νλ¨.

μΈμλ‘ μ λ¬νλ©΄ ν΄λ‘μ λ μ€νλμ§ μκ³ ,  
ν΄λ‘μ  μμ²΄κ° κ·Έλλ‘ μ λ¬λ¨.

ν¨μ λ΄λΆμμ `print(param())` μΌλ‘ ν΄λ‘μ λ₯Ό νΈμΆνμ§ μλλ€λ©΄??

```swift
func takeClosure(param: () -> Int) {
   print(#function)
//    print(param())
}

takeClosure(param: { Int.random(in: 0...100) })
// takeClosure(param:)
```

λΉμ° ν΄λ‘μ μ ν¬ν¨λ μ½λλ μ€νλμ§ μμ!  
μ¬κΈ°μλ λλ€ μ μκ° μΆλ ₯λμ§ μλλ€λ λ§¬μ!

# μ€ν  ν΄λ‘μ (Auto Closure)

**νλΌλ―Έν°λ‘ μ λ¬λλ ννμμ ν΄λ‘μ λ‘ λνν΄μ£Όλ νΉμ±**

`@autoclosure` λ₯Ό μ΄μ©ν΄μ κ΅¬νν΄λ³΄μ.

![1](https://user-images.githubusercontent.com/55340876/110321683-5f0a0600-8055-11eb-8abf-7464b9f3db00.png)

μ­??  
μλ¬??

νλΌλ―Έν°κ° ν¨μ νμμ΄λκΉ ν¨μ νΈμΆμ μΈμμ ν΄λ‘μ λ₯Ό μ λ¬ν΄μΌν¨.  
κ·Όλ° μλ¬?? μ??

`() -> Int`  
νλΌλ―Έν°κ° λΆλͺ ν¨μ νμμΌλ‘ μ μΈλμλλ°!!!  
λμΌ νμμ ν¨μ/λ©μλ/ν΄λ‘μ λ₯Ό μ λ¬ν  μ μμ§λ!!!  
κ·Ό λ° μ μ λ¬ ? μΈ μ λ ?

μμμμμ λ¦΄λ μ€  
<span style="color: red;">**νλΌλ―Έν°κ° `@autoclosure` νΉμ±μΌλ‘ μ μΈλμ΄ μμ΄μ  
ν΄λ‘μ λ₯Ό μ λ¬ν  μ μλκ±°μ!!**</span>

```swift
func takeAutoClosure(param: @autoclosure () -> Int) {
   print(param())
}

takeAutoClosure(param: Int.random(in: 0...100))
// λλ€ μ μ λ°ν
```

`{}` braceλ₯Ό λΉΌλ©΄ μ μμ μΌλ‘ μλν¨. γγ.  
νΉμ±μ μ΄μ©νλ©΄ νλΌλ―Έν°λ‘ μ λ¬νλ ννμμ΄ μλμΌλ‘ μ€ν  ν΄λ‘μ λ‘ λνλ¨!

λλ€ λ©μλ κ²°κ³Όκ° μΈμλ‘ μ°μ΄λκ² μλλΌ,  
λνλ ν΄λ‘μ κ° νλΌλ―Έν°λ‘ μ λ¬λλ κ²!

μ€ν  ν΄λ‘μ λ ννμμ ν΄λ‘μ λ‘ λννλ λ¨μν νΉμ±.  
`{}` λ₯Ό μλ΅νκ³  μ½λλ₯Ό λ¨μν μμ±νκΈ° μν΄μ μ.

λ°λμ νμν κ²½μ°κ° μλλ©΄ μ°μ§λ§μ!!

## λνμ  μ¬μ© μμ1

```swift
let rnd = random()
assert(rnd > 30)
```

`rnd` μμμ μ μ₯λ κ°μ΄ 30 μ΄νλ©΄ μ€νμ΄ λ©μΆ€!

![1](https://user-images.githubusercontent.com/55340876/110322404-6e3d8380-8056-11eb-8b08-91fe52792bbc.png)

<span style="color: red;">**λ¨, `assert` λ λλ²κ·Έ λͺ¨λμμλ§ λμν¨!  
λ¦΄λ¦¬μ¦ λͺ¨λμμλ λμ λΈλΈ!!**</span>

![`](https://user-images.githubusercontent.com/55340876/110322844-14898900-8057-11eb-87a9-6ee45f9ec974.png)

**[(assert μ°Έκ³ )](https://github.com/apple/swift/blob/main/stdlib/public/core/Assert.swift)**

```swift
public func assert(
   _ condition: @autoclosure () -> Bool,
   _message: @autoclosure () -> String = String(),
   file: StaticString = #file, line: UInt = #line
) {
```

`assert` λ©μλμ λν΄ ν΄λ¦­ν΄μ λ³΄λ©΄,  
μ²«λ²μ§Έμ λλ²μ§Έ νλΌλ―Έν°κ° `autoclosure`λ‘ μ μΈλμ΄ μμ.

μ¦, μΈμλ‘ μ λ¬λ  λ νκ°λλκ² μλλΌ  
ν΄λ‘μ λ‘ λνλμ΄μ ν¨μ λ΄λΆλ‘ μ λ¬μ΄ λκ³ ,  
λλ²κ·Έ νκ²½μΈμ§ νμΈ ν, `true`λ‘ νκ°λλ κ²½μ°μλ§!
μλμΌλ‘ λνλ ν΄λ‘μ λ₯Ό νΈμΆνκ³  μμ.

λ°λ‘ μ μμ μ `rnd > 30` μ¬κΈ°μ μ λ¬ν μ½λκ° μ€νλλ κ²!  
(μ ν¨ν΄μ κ΅³μ΄ μ€ν  ν΄λ‘μ κ° μλλΌλ κ΅¬νμ΄ κ°λ₯νκΈ΄ ν¨)

μ€ν  ν΄λ‘μ λ λλ³΄λ€ μ€μ΄ λ§μ νΉμ±μ΄λΌ μ μ€ν μ¨μΌν¨μ!!

## λνμ  μ¬μ© μμ2

λ€λ₯Έ μμλ‘ λΉλκΈ°λ₯Ό μ¨λ³΄μ.

![1](https://user-images.githubusercontent.com/55340876/110323493-04be7480-8058-11eb-852d-75ebddc6f3b6.png)

λΉλκΈ° λΈλ­μμ νΈμΆνλ©΄  
escaping ν΄λ‘μ κ° non-escaping νλΌλ―Έν°λ₯Ό μΊ‘μ³νκ³  μλ€κ³  μλ¬ λΏ!  
μ€ν  ν΄λ‘μ  νΉμ±μ κΈ°λ³Έμ μΌλ‘ non-escaping νΉμ±μ κ°κ³  μμ.

λΉλκΈ°λ‘ νΈμΆνκ³  μΆλ€λ©΄??

```swift
func takeAutoClosure(param: @autoclosure @escaping () -> Int) {
   print(#function)

   DispatchQueue.main.asyncAfter(deadline: .now() + 1) {
      print(param())
   }
}

takeAutoClosure(param: Int.random(in: 0...100))
// takeAutoClosure(param:)
// 1μ΄ μ§μ° ν, λλ€ μ μ λ°ν
```

`@autoclosure` νΉμ± λ€μ `@escaping` νΉμ±μ μΆκ°ν΄μ€!  
κ·ΈλΌ 1μ΄ μ§μ° ν, λλ€ μ μκ° λ°ν λμ§λ !

μ΄λ²μ ν΄λ‘μ μ νλΌλ―Έν° νμμ μΆκ°ν΄λ³΄μ.

![1](https://user-images.githubusercontent.com/55340876/110324158-f6248d00-8058-11eb-86d3-3622bfd53b32.png)

μλ¬;;

μ€ν  ν΄λ‘μ  νΉμ±μ μΆκ°νλ©΄,  
ν΄λ‘μ μ νλΌλ―Έν°λ₯Ό μΆκ°ν  μ μμ!!!  
but λ¦¬ν΄νμμ μμ λ‘­κ² μ μΈ κ°-λ₯!!!

`() -> Int`  
νλΌλ―Έν°λ₯Ό λΉμ΄λκ³ μλ§ μ μΈ κ°λ₯νλ¨ λ§¬μμ.
