// 카피-온-라이트 원칙을 적용한 withArrayCopy 함수를 만들기

function withArrayCopy(array, modify) {
    var copy = array.slice()
    modify(copy)
    return copy
}

// example 1.
function arraySet(array, idx, value) {
    var copy = array.slice()
    copy[idx] = value
    return copy
}

// answer
function arraySet(array, idx, value) {
    return withArrayCopy(array, function(copy) {
        copy[idx] = value
    })
}

// question 1.
function push(array, elem) {
    var copy = array.slice();
    copy.push(elem);
    return copy
}

// answer 1.
function push(array, elem) {
    return withArrayCopy(array, function(copy) {
        copy.push(elem)
    })
}

// question 2.
function drop_last(array) {
    var array_copy = array.slice()
    array_copy.pop();
    return array_copy
}

// answer 2.
function drop_last(array) {
    return withArrayCopy(array, function(copy) {
        copy.pop()
    })
}

// question 3.
function drop_first(array) {
    var array_copy = array.slice();
    array_copy.shift();
    return array_copy;
}

// answer 3.
function drop_first(array) {
    return withArrayCopy(array, function(copy) {
        copy.shift()
    })
}