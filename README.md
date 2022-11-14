# 과메기를 좋아하는 사람들을 위한 채팅 서비스 :: GUATALK - 과톡 #수정중

<img width='100%' src='https://user-images.githubusercontent.com/71423455/199930789-18a416c6-a722-49f8-9f9f-d9601b8e55a8.gif' >


### Front - end

- UI → 로그인 화면 UI를 사용자가 원하는 위치로 이동 가능하도록 설계하려고 했다.

<img width="100%" alt="action" src="https://user-images.githubusercontent.com/71423455/200486578-320875f0-a28d-46e8-81fe-b27d8eb17a16.gif">

  ∙ 오른쪽 상단 슬라이드바로 App의 opacity 변경 가능

- functions
    
  ∙ 전체 메시지 / DM 기능
    
  ∙ 왼쪽 상단의 x 버튼을 누르면 채팅 종료 
    
  → 채팅 종료시 방에 남은 인원은 회원 확인 가능하며 [socket.io](http://socket.io) 삭제

1️⃣ 코드
    
> <img width="49.4%"  alt="addEvent" src="https://user-images.githubusercontent.com/71423455/200482659-866a3942-8483-4bbd-9939-17b9dd9956d5.png"> <img width="49.4%" alt="moveEvent" src="https://user-images.githubusercontent.com/71423455/200482653-e4fc04a4-55bb-40ae-af53-770a63716746.png">


# 과메기톡 → Back - end

* 입장시 회원(db에 저장된 데이터)의 닉네임으로 입장 여부 확인 가능하도록 테이블을 구성 → db : MySQL
* Node.js → ORM( sequelize ) 사용 → 회원 가입 이후 로그인 가능
