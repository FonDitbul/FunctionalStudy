// 특정 필드값 가져오기

function pluck (array, field) {
    return map(array, function(object) {
        return object[field]
    })
}
