// 다음 코드를 함수형 도구 체인으로 바꾸기

// example
function shoesAndSocksInventory(products) {
    var inventory = 0;
    for(var p = 0; p < products.length; p++) {
        var product = products[p];
        if(product.type === "shoes" || product.type === "socks") {
            inventory += product.numberInInventory;
        }
    }
    return inventory
}

// answer
function shoesAndSocksInventoryAnswer(products) {
    // 1. shoes 나 socks 데이터를 filter 한다.
    // 2. 해당 데이터를 numberInInventory 데이터로 변환한다.
    // 3. 전부 더한다.
    const productShoesOrSocks = filter(products, (product) => product.type === "shoes" || product.type === "socks")
    const productNumberInInventory = map(productShoesOrSocks, (product) => product.numberInInventory)
    const answer = reduce(productNumberInInventory, 0, plus)

    return answer
}