// 각 고객의 구매액 평균을 구하려고 합니다.
// 지난 페이지에서 만든 average()를 사용하여 구현해보기

function averagePurchaseTotals(customers) {
    return map(customers, function(customer) {
        var purchaseTotals = map(customer.purchases, function(purchase) {
            return purchase.total
        })
        return average(purchaseTotals);
    })
}