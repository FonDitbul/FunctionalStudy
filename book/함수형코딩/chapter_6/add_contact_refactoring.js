// 카피-온-라이트 push 함수를 사용해 다음 코드 리팩토링하기
// before
function add_contact(mailing_list, email) {
    var list_copy = mailing_list.slice()
    list_copy.push(email)
    return list_copy
}

// after
function add_contact(mailing_list, email) {
    return push(mailing_list, email)
}

function push(array, elem) {
    var copy = array.slice()
    copy.push(elem)
    return copy
}

