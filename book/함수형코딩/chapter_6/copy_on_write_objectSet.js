// 카피-온-라이트 방식으로 objectSet 함수 만들기

function objectSet(object, key, value) {
    var copy = Object.assign({}, object);
    copy[key] = value
    return copy
}