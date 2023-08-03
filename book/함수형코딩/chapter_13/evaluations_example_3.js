// scorePlayer 함수를 사용하기
// 직원 이름과 추천 포지션을 넘기면 숫자로 된 점수를 리턴
// 높은 점수가 더 좋은 선수

// > scorePlayer("jane", "catcher") => 25

// 다음과 같은 평점 레코드 만들기

// {
//     name: "Jane",
//     position: "catcher",
//     score: 25
// }

var recommendations = [
    {
        name: "Jane",
        position: "catcher",
    },
    {
        name: "John",
        position: "pitcher",
    }
]

var evalutions = map(recommendations, function(recommendation) {
    return objectSet(recommendation, 'score', scorePlayer(recommendation.name, recommendation.position))
})
