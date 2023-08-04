// 문자열을 소문자로 바꿔주는 lowercase() 함수
// update() 를 사용해 user 레코드에 사용자 이메일 주소에 lowercase 적용하기

var user = {
    firstName: "Joe",
    lastName: "Nash",
    email: "JOE@EXAMPLE.com"
}

// answer
update(user, 'email', lowercase)
