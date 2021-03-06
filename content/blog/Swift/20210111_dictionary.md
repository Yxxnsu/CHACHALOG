---
title: 'π [Swift] λμλλ¦¬(Dictionary)'
date: 2021-01-11 11:00:00
category: 'Swift'
draft: false
showToc: true
---

# Dictionary

**νλμ μμμ ν€, κ°μ΄ ν¨κ» μ μ₯λ¨.**

<span style="color: red;">**ν€λ μ μΌν κ°μ κ°κ³ ,  
κ°μ μ€λ³΅λμ΄λ μκ΄μμ.**</span>

**μ μ₯λ μμλ μ λ ¬λμ§ μμμ <u>μΈλ±μ€κ° μ¬μ©λμ§ μμ!</u>**

<span style="color: blue;">**μ μ₯λ μμμ μλ£νμ λͺ¨λ κ°μμΌ ν¨.  
ν€μ κ°μ μλ£νμ λͺ¨λ κ°μμΌ ν¨!!**</span>

 
```swift
[ν€: κ°, ν€: κ°, ν€: κ°, ...]
```

ν€μ κ°μ ν¨κ» νννκΈ° λλ¬Έμ μμλ₯Ό μ κ΅¬λΆν΄μΌ ν¨!  
ν€μ κ°μ `:` νλμ μμλ§λ€ `,`

**λ°°μ΄κ³Ό ν·κ°λ¦¬μ§ μκ² μ£Όμνμ!**

 

# λμλλ¦¬ μμ±

```swift
var dict = ["A": "Apple", "B": "Banana"]

// λΉ λμλλ¦¬ μμ±
dict = [:]
```
 
```swift
Dictionary<ν€νμ, κ°νμ>
```

```swift
[ν€νμ: κ°νμ]
```

```swift
// μ μ λ¬Έλ²μΌλ‘ μμ±
let dict1: Dictionary<String, Int>

// λ¨μΆ λ¬Έλ²μΌλ‘ μμ±
let dict2: [String: Int]
```

# μλ‘μ΄ λμλλ¦¬ μμ±

```swift
var dict = ["A": "Apple", "B": "Banana", "C": "City"]

// λΉ λμλλ¦¬ μμ±
let emptyDict: [String: String] = [:]

// μμ±μ μ¬μ©ν΄μ λΉ λμλλ¦¬ μμ±
let emptyDict2 = [String: String]()

// μ μ λ¬Έλ²μΌλ‘ λΉ λμλλ¦¬ μμ±
let emptyDict3 = Dictionary<String, String>()
```

# μ μ₯λ μμ κ²μ¬

```swift
// μ μ₯λ μμμ μ νμΈ
dict.count // 3

// λΉμ΄μλμ§ νμΈ
dict.isEmpty // false
```

# μμ μ κ·Ό

```swift
// μλΈμ€ν¬λ¦½νΈ λ¬Έλ² μ¬μ©
dict["A"] // Apple
dict["Apple"] // nil

let a = dict["E"] // nil (μ΅μλ StringμΌλ‘ a μμμ μ μ₯)

// μ λ¬ ν€κ° μλ€λ©΄ κΈ°λ³Έκ° λ¦¬ν΄νκ²λ κ΅¬ν
let b = dict["E", default: "Empty"] // Empty (λΌμ΅μλ StringμΌλ‘ μ μ₯)

// ν€ μ΄κ±°
for k in dict.keys {
    print(k)
}

// κ° μ΄κ±°
for v in dict.values {
    print(v)
}

// ν€ μ€λ¦μ°¨μμΌλ‘ μ λ ¬
for k in dict.keys.sorted() {
    print(k)
}

// λ μμ±μ λ¦¬ν΄ κ°μ λ°°μ΄λ‘ λ°κΎΈκ³  μΆλ€λ©΄?
let keys = Array(dict.keys) // ["A", "B", "C"]
let values = Array(dict.values) // ["Apple", "Banana", "City"]
```

# μμ μΆκ°

**ν€λ₯Ό κΈ°μ€μΌλ‘ μΆκ°**

```swift
var words = [String: String]()

// μλΈμ€ν¬λ¦½νΈ λ¬Έλ²μΌλ‘ μμ μΆκ°
words["A"] = "Apple"
words["B"] = "Banana"

words.count // 2
words // ["A": "Apple", "B": "Banana"]

// κΈ°μ‘΄ Bμ κ°μ΄ κ΅μ²΄λ¨
words["B"] = "Ball"
words // ["B": "Ball", "A": "Apple"]

// λ©μλλ‘ μΆκ°
words.updateValue("City", forKey: "C") // nil (μλ‘μ΄ μμκ° μΆκ°λλ©΄ nil λ¦¬ν΄)
words // ["A": "Apple", "B": "Ball", "C": "City"]

words.updateValue("Circle", forKey: "C") // City (ν€λ κ·Έλλ‘λ κ°λ§ μλ°μ΄νΈ)
words // ["B": "Ball", "A": "Apple", "C": "Circle"]
```

**Insert + Update = Upsert**

 

# μμ μ κ±°

```swift
var dict = ["B": "Ball", "A": "Apple", "C": "Circle"]

// μλΈμ€ν¬λ¦½νΈλ‘ μ­μ 
dict["B"] = nil
dict // ["C": "Circle", "A": "Apple"]

// μ‘΄μ¬νμ§ μλ ν€ μ­μ 
// μλ¬΄λ° λμ μμ΄ λ€μ μ½λ μ€ν
dict["Z"] = nil

// λ©μλλ‘ μ­μ 
dict.removeValue(forKey: "A") // Apple (μ­μ ν κ°μ λ¦¬ν΄)
dict // ["C": "Circle"]

dict.removeValue(forKey: "A") // nil (μ΄λ―Έ μ­μ λ κ°μ΄λΌ)

// μ μ²΄ μ­μ 
dict.removeAll() // [:]
```

# μμ λΉκ΅

```swift
let a = ["A": "Apple", "B": "Banana", "C": "City"]
let b = ["A": "Apple", "C": "City", "B": "banana"]

// λμλ¬Έμκ° λ€λ₯΄λ
a == b // false
a != b // true

// λμλ¬Έμ λ¬΄μνκ³  λΉκ΅
a.elementsEqual(b) { (lhs, rhs) -> Bool in
    print(lhs.key, rhs.key) // λμλλ¦¬λ μ λ ¬λμ΄ μμ§ μκΈ° λλ¬Έμ, μλ‘ λ€λ₯Έ ν€λ₯Ό λΉκ΅νλ κ²½μ°λ μλ€.
    return lhs.key.caseInsensitiveCompare(rhs.key) == .orderedSame && lhs.value.caseInsensitiveCompare(rhs.value) == .orderedSame
} // trueμ false κ° κ·Έλκ·Έλ λ€λ₯΄κ² λμ΄

// μ λ ¬λ ν€λ₯Ό κΈ°μ€μΌλ‘ λΉκ΅
// μ€λ¦μ°¨μμΌλ‘ μΌλ¨ μ λ ¬
let aKeys = a.keys.sorted()
let bKeys = b.keys.sorted()

// μμ ν€λ₯Ό κΈ°μ€μΌλ‘ λμλλ¦¬λ₯Ό λΉκ΅νμ
aKeys.elementsEqual(bKeys) { (lhs, rhs) -> Bool in
    // ν€λ₯Ό λΉκ΅
    guard lhs.caseInsensitiveCompare(rhs) == .orderedSame else {
        return false
    }
    
    // κ°μ λΉκ΅ (ν€λ₯Ό λΉκ΅νμΌλ κ°λ λΉκ΅)
    guard let lv = a[lhs], let rv = b[rhs], lv.caseInsensitiveCompare(rv) == .orderedSame else {
        return false
    }
    
    // ν€μ κ°μ΄ κ°λ€λ©΄ true λ¦¬ν΄
    return true
} // true
```

# μμ κ²μ

**λμλλ¦¬ κ²μμ ν΄λ‘μ κ° νμν¨.**

ν€μ κ°μ΄ μ μ₯λμ΄ μλ ννμ νλΌλ―Έν°λ‘ λ°κ³  true or false λ₯Ό λ¦¬ν΄ν¨.

```swift
var words = ["A": "Apple", "B": "Banana", "C": "City"]

// ν΄λ‘μ λ₯Ό λ³λμ μμμ μ μ₯
let c: ((String, String)) -> Bool = {
    // ν€μ λλ¬Έμ Bκ° ν¬ν¨λκ±°λ κ°μ μλ¬Έμ iκ° ν¬ν¨λμλ€λ©΄ true λ¦¬ν΄
    $0.0 == "B" || $0.1.contains("i")
}

words.contains(where: c) // true

// λμλλ¦¬λ₯Ό μ λ ¬λμ§ μμ μ»¬λ μμ΄λΌ κ²μμλ§λ€ κ°μ΄ λ°λλ€. (μ€νμλ§λ€ μ μ₯λ μμ μμκ° λ°λλκΉ!)
let r = words.first(where: c)
r?.key
r?.value

// μ‘°κ±΄μ λ§μ‘±μν€λ λͺ¨λ  μμκ° μλ‘μ΄ λμλλ¦¬λ‘ λ¦¬ν΄λ¨
words.filter(c)
```