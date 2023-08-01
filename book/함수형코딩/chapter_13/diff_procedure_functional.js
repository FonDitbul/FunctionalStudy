// 절차적인 원래 코드
function averageProcedure(array) {
    var answer = [];
    var window = 5;
    for(var i = 0; I < array.length; i++) {
        var sum = 0 ;
        var count = 0;
        for(var w = 0; w < window; w++) {
            var idx = i + w;
            if(idx < array.length) {
                sum += array[idx];
                count += 1;
            }
        }
        answer.push(sum/count)
    }
    return answer
}

// 함수형 도구를 사용한 코드
function averageFunctional (array) {
    var window = 5;
    var indices = range(0, array.length)
    var windows = map(indices, function(i) {
        return array.slice(i, i + window);
    });
    var answer = map(windows, average);
    return answer
}

function range(start, end) {
    var ret = []
    for(var i = start; i < end; i++) {
        ret.push(i)
    }
    return ret
}
