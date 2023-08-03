// 개인의 적합한 포지션 함수 recommendPosition 이라는 함수 사용

// recommendPosition() 을 사용해 직원 이름의 리스트를 모든 직원의 추천 레코드를 코드로 바꿔주는 코드를 만들기

var employeeNames = ["john", "Harry", "Jane"];

var recommendations = map(employeeNames, function(employee) {
    return {
        name: employee.name,
        position: recommendPosition(employee.name)
    }
})

