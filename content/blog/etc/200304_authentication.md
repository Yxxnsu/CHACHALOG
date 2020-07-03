---
title: '🚥 [etc] 인증(Authentication) & 인가(Authorization)'
date: 2020-03-04 18:22:00
category: 'etc'
draft: false
showToc: true
---

# 인증(Authentication) & 인가(Authorization)
- 인증과 인가는 API에서 가장 자주 구현되는 기능중 하나이다.
- Private한 API는 물론이고 Public한 API도 기본적인 인증과 인가를 요구한다.

## 인증(Authentication)
- Authentication은 유저의 identification을 확인하는 절차다.
- 쉽게 설명하면, 유저의 아이디와 비번을 확인하는 절차.
- 인증을 하기 위해선 먼저 유저의 아이디와 비번을 생성할 수 있는 기능도 필요하다.


### 로그인 절차
1. 유저 아이디와 비번 생성
2. 유저 비번 암호화 해서 DB에 저장.
3. 유저 로그인 -> 아이디와 비밀번호 입력
4. 유저가 입력한 비밀번호 암호화 한후 암호화되서 DB에 저정된 유저 비밀번호와 비교.
5. 일치하면 로그인 성공
6. 로그인 성공하면 ``access token``을 클라이언트에게 전송.
7. 유저는 로그인 성공후 다음부터는 ``access token``을 첨부해서 request를 서버에 전송함으로서 매번 로그인 해도 되지 않도록 한다.

### 유저 비밀번호 암호화
- 유저의 비밀번호는 절대 비밀번호 그대로 DB에 저장 하지 않는다.
  - DB가 해킹을 당하면 유저의 비밀번호도 그대로 노출 된다.
  - 외부 해킹이 아니더라도 내부 개발자나 인력이 유저들의 비밀번호를 볼 수 있다.
- 유저의 비밀번호는 꼭 암호화 해서 저장 해야 한다.
  - 그럼으로 DB가 해킹을 당해도 비밀번호가 그대로 노출되지 않으며
  - 내부 인력도 비밀번호를 알 수가 없음.
- 비밀번호 암호에는 단방향 해쉬 함수(one-way hash function)가 일반적으로 쓰인다.

  - 단방향 해시 함수는 원본 메시지를 변환하여 암호화된 메시지인 ``다이제스트(digest)``를 생성한다.   
  원본 메시지를 알면 암호화된 메시지를 구하기는 쉽지만 암호화된 메시지로는 원본 메시지를 구할 수 없어서 ``단방향성(one-way)`` 이라고 한다.
  - 예를 들어, "test password"를 hash256이라는 해쉬 함수를 사용하면 ``0b47c69b1033498d5f33f5f7d97bb6a3126134751629f4d0185c115db44c094e`` 값이 나온다.
  - 만일 "test password2"를 hash256 해쉬 함수를 사용하면 ``d34b32af5c7bc7f54153e2fdddf251550e7011e846b465e64207e8ccda4c1aeb`` 값이 나온다.   
  실제 비밀번호는 비슷하지만 해쉬 함수 값은 완전히 틀린것을 볼 수 있다. 이러한 효과를 avalance라고 하는데 비밀번호 해쉬 값을 해킹을 어렵게 만드는 하나의 요소이다.


```dart
    In [21]: import hashlib

    In [22]: m = hashlib.sha256()

    In [23]: m.update(b"test password")

    In [24]: m.hexdigest()
    Out[24]: '0b47c69b1033498d5f33f5f7d97bb6a3126134751629f4d0185c115db44c094e'

    In [25]: m = hashlib.sha256()

    In [26]: m.update(b"test password2")

    In [27]: m.hexdigest()
    Out[27]: 'd34b32af5c7bc7f54153e2fdddf251550e7011e846b465e64207e8ccda4c1aeb'
```

### Bcrypt
- 단방향 해쉬 함수도 몇가지 취약점이 있다.
  - Rainbow table attack - 미리 해쉬값들을 계산해 놓은 테이블을 Rainbow table이라고 한다.
  - 해시 함수는 원래 패스워드를 저장하기 위해서 설계된 것이 아니라 짧은 시간에 데이터를 검색하기 위해 설계된 것이다 (Remember Set?).   
  그렇기 때문에 해시 함수는 본래 처리 속도가 최대한 빠르도록 설계되었다.   
  이러한 속성 때문에 공격자는 매우 빠른 속도로 임의의 문자열의 다이제스트와 해킹할 대상의 다이제스트를 비교할 수 있다  
  (MD5를 사용한 경우 일반적인 장비를 이용하여 1초당 56억 개의 다이제스트를 대입할 수 있다).   
  이런 방식으로 패스워드를 추측하면 패스워드가 충분히 길거나 복잡하지 않은 경우에는 그리 긴 시간이 걸리지 않는다   
  (대부분 사용자의 패스워드는 길거나 복잡하지 않을 뿐 아니라, 동일한 패스워드를 사용하는 경우도 많다).  
- 단방향 해쉬 함수의 취약점들을 보안하기 위해 일반적으로 2가지 보완점들이 사용된다.
  - Salting
      - 실제 비밀번호 이외에 추가적으로 랜덤 데이터를 더해서 해시값을 계산하는 방법.
- Key Stretching
  - 단방향 해쉬값을 계산 한 후 그 해쉬값을 또 또 해쉬 하고, 또 이를 반복하는 것을 말한다.
  - 최근에는 일반적인 장비로 1초에 50억 개 이상의 다이제스트를 비교할 수 있지만, 키 스트레칭을 적용하여 동일한 장비에서 1초에 5번 정도만 비교할 수 있게 한다.   
  GPU(Graphics Processing Unit)를 사용하더라도 수백에서 수천 번 정도만 비교할 수 있다.   
  50억 번과는 비교할 수도 없을 정도로 적은 횟수다. 앞으로 컴퓨터 성능이 더 향상되면 몇 번의 반복을 추가하여 보완할 수 있다.

<img width="601" alt="스크린샷 2020-03-04 오후 6 23 05" src="https://user-images.githubusercontent.com/55340876/75864387-3ef1a680-5e45-11ea-971c-3031559b4384.png">


- Salting과 Key Stretching을 구현한 해쉬 함수중 가장 널리 사용되는 것이 bcrypt이다. bcrypt는 처음부터 비밀번호를 단방향 암호화 하기 위해 만들이전 해쉬함수 이다.

```dart
In [40]: import bcrypt

In [41]: bcrypt.hashpw(b"secrete password", bcrypt.gensalt())
Out[41]: b'$2b$12$.XIJKgAepSrI5ghrJUaJa.ogLHJHLyY8ikIC.7gDoUMkaMfzNhGo6'

In [42]: bcrypt.hashpw(b"secrete password", bcrypt.gensalt()).hex()
Out[42]: '243262243132242e6b426f39757a69666e344f563852694a43666b5165445469397448446c4d366635613542396847366d5132446d62744b70357353'
```

### JWT(JSON Web Tokens)
- 앞서 언급했듯이 유저가 로그인에 성공한 후에는 ``access token``이라고 하는 암호화된 유저 정보를 첨부해서 request를 보내게 된다.

  - 유저 로그인:
  
```dart
POST /auth HTTP/1.1
Host: localhost:5000
Content-Type: application/json

{
    "username": "joe",
    "password": "pass"
}
```

-  access token:

```dart
HTTP/1.1 200 OK
Content-Type: application/json

{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGl0eSI6MSwiaWF0IjoxNDQ0OTE3NjQwLCJuYmYiOjE0NDQ5MTc2NDAsImV4cCI6MTQ0NDkxNzk0MH0.KPmI6WSjRjlpzecPvs3q_T3cJQvAgJvaQAPtk1abC_E"
}
```

- 그러면 서버에서는 ``access token``을 복호화 해서 해당 유저 정보를 얻게 된다.

  - 예를들어 access token 
  ```
  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGl0eSI6MSwiaWF0IjoxNDQ0OTE3NjQwLCJuYmYiOjE0NDQ5MTc2NDAsImV4cCI6MTQ0NDkxNzk0MH0.KPmI6WSjRjlpzecPvs3q_T3cJQvAgJvaQAPtk1abC_E
  ```
  를 복호화 하면 다음과 같은 정보를 얻는다:

```dart
{
    user_id = 1 
}
```

- 복호화해서 얻은 유저 아이디를 통해 해당 유저가 누군지 알 수 있다.
- 이런 절차의 목적은 해당 유저가 매번 로그인 해도 되지 않도록 하는 것이다.

- ``access token``을 생성하는 방법은 여러가지가 있는데, 그 중 가장 널리 사용되는 기술중 하가 바로 JWT(JSON Web Tokens)이다.
- JWT는 말 그대로 유저 정보를 담음 JSON 데이터를 암호화 해서 클라이언트와 서버간에 주고 받는 것이다.


<img width="721" alt="스크린샷 2020-03-04 오후 6 23 20" src="https://user-images.githubusercontent.com/55340876/75864393-42852d80-5e45-11ea-89b2-66ab1379b7d6.png">


### Why Use Access Token VS ID and Password?
- Performance
  - No heavy bcrypt call, just a simple hash
- Client-side storage
  - No actual ID and password stored in the client such as cookie.
  - Also, token is very server specific - not reused in any other site.

## 인가(Authorization)
- Authorization은 유저가 요청하는 request를 실행할 수 있는 권한이 있는 유저인가를 확인하는 절차 이다.
- 예를 들어, 해당 유저는 고객 정보를 볼 수 있는 있지만 수정 할 수는 없다 등.
- Authroization도 JWT를 통해서 구현 될 수 있다.
  - ``access token``을 통해 해당 유저 정보를 얻을 수 있음으로 해당 유저가 가지고 있는 권한(permission)도 확인 할 수 있다.

### Authorization 절차
1. Authentication 절차를 통해 ``access token``을 생성한다. ``access token``에는 유저 정보를 확인할 수 있는 정보가 들어가 있어야 한다 (예를 들어 user id).
2. 유저가 request를 보낼때 ``access token``을 첨부해서 보낸다.
3. 서버에서는 유저가 보낸 ``access token``을 복호화 한다.
4. 복호화된 데이터를 통해 user id를 얻는다.
5. user id를 사용해서 database에서 해당 유저의 권한(permission)을 확인하다.
6. 유저가 충분한 권한을 가지고 있으면 해당 요청을 처리한다.
7. 유저가 권한을 가지고 있지 않으면 Unauthorized Response(401) 혹은 다른 에러 코드를 보낸다.