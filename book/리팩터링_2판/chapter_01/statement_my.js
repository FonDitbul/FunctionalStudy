export function statement_my(invoice, plays) {
    let result = `청구내역 (고객명: ${invoice.customer})\n`;

    // 가격을 계산한다.
    let totalAmount = 0;
    for (let perf of invoice.performances) {
        const play = plays[perf.playID];
        totalAmount += calculateAmount(play.type, perf.audience);
    }

    // 포인트를 적립한다.
    let volumeCredits = 0;
    for (let perf of invoice.performances) {
        const play = plays[perf.playID];
        volumeCredits += stackVolumeCredits(perf.audience, play.type)
    }

    // 청구 내역을 출력한다.
    for (let perf of invoice.performances) {
        const play = plays[perf.playID];
        const thisAmount = calculateAmount(play.type, perf.audience);
        result += billingDetail(play.name, thisAmount, perf.audience)
    }

    result += `총액 ${totalAmount / 100}\n`;
    result += `적립 포인트 ${volumeCredits}점\n`;
    return result;
}

function billingDetail(playName, amount, audience) {
    return `${playName}: ${amount / 100} ${audience}석\n`
}

function stackVolumeCredits (perfAudience, playType) {
    // 포인트를 적립한다.
    let volumeCredit = 0
    volumeCredit += Math.max(perfAudience - 30, 0);

    // 희극 관객 5명마다 추가 포인트를 제공한다.
    if ('comedy' === playType) {
        volumeCredit += Math.floor(perfAudience / 5);
    }
    return volumeCredit
}

function calculateAmount(playType,  perfAudience) {
    let thisAmount = 0;
    switch (playType) {
        case 'tragedy':
            thisAmount = 40_000;

            if (perfAudience > 30) {
                thisAmount += 1_000 * (perfAudience - 30);
            }
            break;
        case 'comedy':
            thisAmount = 30_000;

            if (perfAudience > 20) {
                thisAmount += 10_000 + 500 * (perfAudience - 20);
            }
            thisAmount += 300 * perfAudience;
            break;

        default:
            throw new Error(`알 수 없는 장르: ${playType}`);
    }
    return thisAmount;
}