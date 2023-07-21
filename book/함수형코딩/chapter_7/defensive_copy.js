// payrollCalc 함수에 방어적 복사를 적용하기
function payrollCalc(employees) {
    return payrollCheks;
}

function payrollCalcSafe(employees) {
    var copy = deepCopy(employees);
    var payrollChecks = payrollCalc(copy)
    return deepCopy(payrollChecks)
}