// min, max를 사용하지 않고 배열에 있는 가장 큰 값과 가장 작은 값을 찾는 함수 만들기

function min(numbers) {
    return reduce(numbers, Number.MAX_VALUE, function (acc, number) {
        if(acc > number) {
            return number
        }
        return acc
    })
}

function max(numbers) {
    return reduce(numbers, Number.MAX_VALUE, function (acc, number) {
        if(acc < number) {
            return number
        }
        return acc
    })
}