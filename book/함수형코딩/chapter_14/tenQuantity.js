// update()를 이용해 제품의 수량을 10배 늘려주는 함수 만들기

var item = {
    name: "shoes",
    price: 7,
    quantity: 2
}

function tenXQuantity(item) {
    return update(item, 'quantity', (quantity) => {
        return quantitiy * 10
    })
}
