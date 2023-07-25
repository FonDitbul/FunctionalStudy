
// todo Refactor
if(array.length === 0) {
    console.log("array is empty")
}

if(hasItem(cart, "shoes")) {
    return setPriceByName(cart, "shoes", 0);
}

// TO BE Refactor
when(array.length === 0, function() {
    console.log('Array is empty')
})

when(hasItem(cart, "shoes"), function() {
    return setPriceByname(cart, "shoes", 0)
})

// answer
function when (test, then) {
    if(test) {
        return then()
    }
}