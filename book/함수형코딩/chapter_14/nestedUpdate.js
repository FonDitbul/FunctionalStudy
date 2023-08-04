
function nestedUpdate (object, keys, modify) {
    if(keys.length === 0) {
        return modify(object);
    }
    var key1 = keys[0]
    var restOfKeys = drop_first(keys);
    return update(object, key1, function(value1) {
        return nestedUpdate(value1, restOfKeys, modify)
    })
}
// 위 함수로 incrementSizeByName() 구현하기
function incrementSizeByName (cart, name) {
    return nestedUpdate(cart, ['name', 'options', 'size'], function(size) {
        return size + 1
    })
}
