// arraySet 함수 카피-온-라이트 버전으로 만들기

function arraySet(array, idx, value) {
    const copy = array.slice()
    copy[idx] = value
    return copy
}