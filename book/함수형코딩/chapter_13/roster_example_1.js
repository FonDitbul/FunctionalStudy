// 포지션 별로 가장 높은 사람을 골라 명단을 완성하는 코드를 만들어 보세요 .
// 목록은 이미 높은 점수순으로 정렬되어 있습니다.

// example
var evaluations = [{
    name: 'Jane', position: 'catcher', score: 25,
    name: 'John', position: 'pitcher', score: 10,
    name: 'Harry', position: 'pitcher', score: 3,
    name: 'Hale', position: 'first base', score: 3
}]

var rosters = {
    pitcher: "John",
    catcher: "Jane",
    "first base": "Ellen"
}

// answer
var roasterAnswer = reduce(evaluations, {}, function(roster, evaluation) {
    const position = evaluation.position
    if(!roster[position]) {
        return objectSet(roster, position, evaluation.name)
    }
    return roster
})