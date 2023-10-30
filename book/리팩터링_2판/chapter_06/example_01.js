// 유호 범위를 벗어나는 변수가 없을 때
// before 
function printOwing(invoice) {
    let outstanding = 0;
    
    console.log('******************')
    console.log('**** 고객 채무 ****')
    console.log('******************')
    
    // 미해결 채무(outstanding)를 계산한다.
    for(const o of invoice.orders) {
        outstanding += o.amount;
    }
    
    // 마감일(dueDate)을 기록한다.
    const today = Clock.today;
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
    
    // 세부 사항을 출력한다.
    console.log(`고객명: ${invoice.customer}`);
    console.log(`채무액: ${outstanding}`)
    console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`)
}

// after 
function printOwingModify(invoice) {
    const outstanding = calculateOutstanding(invoice);
    
    printBanner();
    
    recordDueDate(invoice)

    
    printDetail(invoice, outstanding)
}

function printBanner() {
    console.log('******************')
    console.log('**** 고객 채무 ****')
    console.log('******************')
}

function printDetail(invoice, outstanding) {
    console.log(`고객명: ${invoice.customer}`);
    console.log(`채무액: ${outstanding}`)
    console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`)
}

function recordDueDate(invoice) {
    const today = Clock.today;
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30); 
}

function calculateOutstanding(invoice) {
    let outstanding = 0;
    for(const o of invoice.orders) {
        outstanding += o.amount;
    }
    return outstanding
}