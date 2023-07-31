// 거의 모든 부서에서 숫자 배열에 대한 평균값이 필요합니다.
// 평균을 계산하는 함수를 만들어 보세요.

function average(numbers) {
    return reduce(numbers, 0, plus) / numbers.length
}

function plus (a, b) {
    return a + b
}