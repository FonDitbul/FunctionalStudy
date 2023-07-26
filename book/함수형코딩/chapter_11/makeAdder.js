// 다른 숫자에 어떤 숫자를 더하는 함수 만들기

// example
var increment = makeAddr(1);
// > increment(10)
// 11

var plus10 = makeAddr(10);
// > plus10(12)
// 22

// answer
function makeAddr(n) {
    return function(x) {
        return n + x
    }
}