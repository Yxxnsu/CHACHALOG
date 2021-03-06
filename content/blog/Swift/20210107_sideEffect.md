---
title: 'π [Swift] λ¨λ½ νκ° / μ¬μ΄λ μ΄ννΈ'
date: 2021-01-07 03:00:00
category: 'Swift'
draft: false
showToc: true
---

# λ¨λ½ νκ°(Short-circuit Evaluation)
μ‘°κ±΄μ νκ°λ°©λ²μ μμλ΄μΈ!

λΌλ¦¬ μ°μ°μλ€μ κ²°κ³Ό λμΆμ νμν μ΅μνμ λΌλ¦¬μλ§ νκ°νκ³ ,  
μ΄ νκ° λ°©μμ **λ¨λ½ νκ°**λΌκ³  λ§ν¨

![1](https://user-images.githubusercontent.com/55340876/110206561-cb540080-7ec1-11eb-84cf-770b553349ef.png)

μλ¨ μ½λμμλ  
`||` (or) μ°μ°μλΌμ,  
updateLeft κ° trueλκΉ updateRightλ₯Ό νΈμΆνμ§ μκ³  λ°λ‘ νκ°ν¨.

<!-- </br> -->

> <νμ μ€λͺ>  
'λ³μμ μ΄κΈ°ν'λ λ³μλ₯Ό μ μΈν ν κ·Έ λ³μμ μ²μμΌλ‘ μ΄λ ν κ°μ μ μ₯νλ κ²μ λ§νλ€.  
μΈμ€ν΄μ€μ μμ±μ λ©€λ² λ³μλ μ΄κΈ°ν νμ§ μμλ λ°μ΄ν° νμμ λ§λ κΈ°λ³Έκ°μΌλ‘ μλ μ΄κΈ°νκ° λμ§λ§  
μ§μ­λ³μλ μ¬μ©νκΈ° μ μ κΌ­ μ΄κΈ°νλ₯Ό μμΌμ€μΌλ§ νλ€.  

<!-- </br> -->

μ€μννΈλ λΌλ¦¬μμ νκ°ν  λ,  
κ²°κ³Όλ₯Ό μ»λλ° νμν μ΅μνμ μ½λλ§ μ€νν¨!

 

μ΄λ―Έ κ²°κ³Όλ₯Ό μ»μλ€λ©΄?  
λλ¨Έμ§ μ½λλ μ€ννμ§ μλκ±°μ.


![1](https://user-images.githubusercontent.com/55340876/110206807-5386d580-7ec3-11eb-8e22-9501e2504ace.png)


μλ¨ μ½λλ updateLeft ν¨μλ₯Ό μ€ννκ³  μΌλ¨ aμ 1μ λν ν, falseλ₯Ό λ¦¬ν΄ν¨.  

 

μ§κΈ `||` (or) μ°μ°μλ‘ λΉκ΅λ₯Ό νκ³  μμΌλκΉ  
updateLeft λ falseλκΉ updateRightκΉμ§ μ€νμ ν΄μ aμ bμ κ° 1μ λν ν, λ¦¬ν΄ν¨

![1](https://user-images.githubusercontent.com/55340876/110206836-774a1b80-7ec3-11eb-8a77-d5cd41804e91.png)

`&&` (and) μ°μ°μλ λ§ν  κ²λ μμ§μμ??  
μ΄λ―Έ μ²«λ² μ§Έ ν¨μμ κ²°κ³Όκ° falseλκΉ updateLeft ν¨μλ§ μ€ννκ³  λ!!


# λΆμμ©(Side Effect)
**μ½λμ μ€νκ²°κ³Όλ‘ μΈν΄μ κ° λλ μνκ° λ³κ²½λλ κ²**μ λ§ν¨

μμμ λ§μ§λ§ μ½λλ₯Ό λ€μ λ΄μΈ.  
aκ° 2λ‘ λ°λκ³  bλ κ·Έλλ‘ μ μ§κ° λ¨  
κ°μ΄ νλ²λ§ λ°κΌμΌλκΉ νλ²μ **μ¬μ΄λ μ΄ννΈ**κ° λ°μνκ²!

```swift
a
b
```

μ μ½λλ μ μ₯ κ°μ μΆλ ₯λ§ νλκ±°μ§, κ°μ λ°κΎΈλ κ²μ μλλκΉ μ¬μ΄λ μ΄ννΈλ λ°μνμ§ μμ

νμ§λ§ λ§μ§λ§ μ€μ

```swift
a = 1
```

μ΄λΌλ μ½λλ₯Ό μ¬μ©νλ©΄ μ΄λ¨κΉ?  
μ΄κ±΄ κ°μ΄ λ°λλκ±°λκΉ μ¬μ΄λ μ΄ννΈκ° νλ² λ λ°μνκ² λλκ±°μ!

μ¬μ΄λ μ΄ννΈλ ν­μ μμΈ‘κ°λ₯ν λ²μ λ΄μ μμ΄μΌ νκ³ ,  
μ°λ¦¬κ° μλν κ²°κ³Όλ₯Ό λμΆν΄μΌν¨

κ°μ μ ν΄λ΄μΈ.

![1](https://user-images.githubusercontent.com/55340876/110206888-bd9f7a80-7ec3-11eb-9d00-789b8e1c2364.png)

μλ¨ μ½λλ λΌλ¦¬μμ κ΄κ³μμ΄ updateLeft() μ updateRight() λ ν­μ νΈμΆμ΄ λκ³ ,  
ifλ¬Έμμλ μ¬μ΄λ μ΄ννΈλ λ°μλμ§ μμ (μμμ μ μ₯λ λΆλ¦¬μΈ κ°μ μ½κ³ λ§ μμΌλκΉ)

**μμΌλ‘ λΌλ¦¬μμ μμ±ν  λμλ λΌλ¦¬μ μΈ μ€λ₯ λ°μμ λλΉν΄μ**  
**κ°λ₯νλ€λ©΄ μ¬μ΄λ μ΄ννΈκ° λ°μνλ μ½λλ μ΄μ μΌλ‘ λΉΌλμ!**
