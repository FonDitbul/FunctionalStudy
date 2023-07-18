// .push() 메서드를 카피-온-라이트 버전으로 만들기

function push(array, elem) {
    var copy = array.slice()
    copy.push(elem)
    return copy
}

