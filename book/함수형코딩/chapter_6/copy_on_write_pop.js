// pop 카피-온-라이트 버전으로 만들기
// 1. 읽기와 쓰기 함수로 분리하기
// 2. 값 두 개를 리턴하는 함수로 만들기

// example
var a = [1,2,3,4];
var b = a.pop()
console.log(b); // 4를 출력
console.log(a); // [1,2,3] 을 출력

// 1. 읽기 함수와 쓰기 함수로 분리하기
function last_element (array) {
    return array[array.length - 1]
}

function drop_last_element (array) {
    tempArray.pop()
}

// 2. 값 두 개를 리턴하는 함수로 만들기
function pop(array) {
    const tempArray = array.slice()
    const lastElement = tempArray.pop()
    return {
        last: lastElement,
        array: tempArray
    }
}