// 다음 두 가지 함수를 이용해 높은 점수 순으로 정렬된 평점 목록과 낮은 점수순으로 정렬된 평점 목록도 만들기
// sortBy (array, f) array 배열을 받아 f가 리턴한 값을 우선순위로 정렬한 복사본 배열을 리턴
// reverse(array), array 배열을 받아 역순으로 정렬된 복사본 배열을 리턴

var employeeNames = ["John", "Harry", "Jane"];

var recommendations = map(employeeNames, function(name) {
    return {
        name: name,
        position: recommendPosition(name)
    }
})

var evaluations = map(recommendations, function(rec) {
    return objectSet(rec, 'score', scorePlayer(rec.name, rec.position))
})

var evaluationAscending = sortBy(evaluations, function(eval) {
    return eval.score
})

var roster = reduce(evaluations, {}, function(roster, eval) {
    const position = eval.position
    if(roster[position]){
        return roster
    }
    return objectSet(roster, position, eval.name)
})
