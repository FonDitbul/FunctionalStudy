// 주어진 것
// 모든 고객 배열인 customers
// 주어진 데이터는 customer.firstName, customer.lastName, customer.address

// answer
map(customers, function(customer) {
    return {
        firstName: customer.firstName,
        lastName: customer.lastName,
        address: customer.address
    }
})