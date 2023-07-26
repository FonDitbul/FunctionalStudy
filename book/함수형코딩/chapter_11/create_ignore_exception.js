// 예외가 발생했을 때 에러를 무시하는 함수 만들기
// 에러가 발생하면 null을 리턴
// 최소 3개의 인자를 갖는 함수에 쓸 수 있어야 합니다.

try{
    codeThatMightThrow();
} catch(e) {
    // 에러를 무시하고 아무것도 하지 않음
}

// answer
function wrapIgnoreErrors(f) {
    return function(a1, a2, a3) {
        try{
            return f(a1, a2, a3)
        } catch (error) {
            return null
        }
    }
}