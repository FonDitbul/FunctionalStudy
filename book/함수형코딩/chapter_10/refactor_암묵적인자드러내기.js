// 함수 이름에 있는 암묵적 인자 냄새 코드에서 암묵적 인자를 드러내기
// before
function multiplyByFour(x) {
    return x * 4;
}

function multiplyBySix(x) {
    return x * 6;
}

function multiplyBy12(x) {
    return x * 12;
}

function multiplyByPi(x) {
    return x * 3.14159;
}
// after
function multiply(x, y) {
    return x * y;
}