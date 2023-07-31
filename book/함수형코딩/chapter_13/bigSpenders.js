// 최소 100달러를 넘고 (AND) 두번 이상 구매한 고객 찾기

// answer
function bigSpenders(customers) {
    var withBigPurchases = filter(customers, hasBigPurchase)
    var with2OrMorePurchases = filter(withBigPurchases, has2OrMorePurchases)

    return with2OrMorePurchases
}

function hasBigPurchase(customer) {
    return filter(customer.purchase, isBigPurchases).length > 0
}

function isBigPurchases(purchases) {
    return purchases.total > 100
}

function has2OrMorePurchases(customer) {
    return customer.purchases.length >= 2
}