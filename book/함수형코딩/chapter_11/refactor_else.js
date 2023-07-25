IF(array.length ===0, function() {
    console.log("array is empty");
}, function () {
    console.log("Array has something in it.")
})

IF(hasITem(cart, "shoes"), function() {
    return setPriceByName(cart, "shoes", 0);
}, function () {
    return cart;
})

// answer
function IF(test, then, ELSE) {
    if(test){
        return then();
    } else {
        return ELSE()
    }
}