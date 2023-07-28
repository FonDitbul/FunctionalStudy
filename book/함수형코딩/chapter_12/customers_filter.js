// 주어진 것
// 모든 고객 배열인 customers
// 고객 아이디가 들어 있는 customer.id
// 3으로 나누어 떨어지는 고객을 테스트 그룹으로 만들기
// 나머지 연산자 % * % === 0 이라면 3으로 나누어 떨어지는 값

var testGroup = filter(customers, function(customer) {
    return customer.id % 3 === 0
})

var nonTestGroup = filter(customers, function(customer) {
    return customer.id % 3 !== 0
})

