/***
 * 이메일 주소를 전역변수인 리스트에 추가합니다.
 * 카피-온-라이트 형식으로 변경해보세요
 * */


// before
var mailing_list = [];

function add_contact(email) {
    mailing_list.push(email)
}

function submit_form_handler(event) {
    var form = event.target;
    var email = form.elements["email"].value;
    add_contact(email)
}

// after

var mailing_list = [];

function add_contact(mailList, email) {
    const tempEmail = mailList.slice()
    tempEmail.push(email)
    return tempEmail
}

function submit_form_handler(event) {
    var form = event.target;
    var email = form.elements["email"].value;
    mailing_list = add_contact(mailing_list, email)
}
