// 구독하는 몯느 코드는 같은 사용자 데이터를 전달 받습니다.
// 전달받은 사용자 데이터는 모두 참조 값으로 메모리에 같은 객체를 가리키고 있습니다.
// 방어적 복사로 사용자 데이터를 보호하기

// before
userChanges.subscribe(function (user) {
    processUser(user);
})


// after
userChanges.subscribe(function (user) {
    const userCopy = deepCopy(user)
    processUser(userCopy);
})
