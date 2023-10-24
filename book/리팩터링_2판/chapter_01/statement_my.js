export function statement_my(invoices, plays) {
  let result = `청구내역 (고객명: ${invoices.customer})\n`;

  // amount 를 포함한 객체 생성
  const resultData = Object.assign({}, invoices);
  resultData.performances = invoices.performances.map((perf) => ({
    ...perf,
    amount: calculateAmount(plays, perf),
    type: getPlayType(plays, perf),
    name: getPlayName(plays, perf),
  }));

  // 가격을 계산한다.
  const totalAmount = sumTotalAmount(resultData.performances);

  // 포인트를 적립한다.
  const volumeCredits = sumVolumeCredits(resultData.performances);

  // 청구 내역을 출력한다.
  for (let perf of resultData.performances) {
    result += billingDetail(perf);
  }

  result += `총액 ${totalAmount / 100}\n`;
  result += `적립 포인트 ${volumeCredits}점\n`;
  return result;
}

function getPlay(plays, perf) {
  return plays[perf.playID];
}

function getPlayType(plays, perf) {
  const play = getPlay(plays, perf);
  return play.type;
}

function getPlayName(plays, perf) {
  const play = getPlay(plays, perf);
  return play.name;
}

function billingDetail(perf) {
  return `${perf.name}: ${perf.amount / 100} ${perf.audience}석\n`;
}

function stackVolumeCredits(perf) {
  // 포인트를 적립한다.
  let volumeCredit = 0;
  volumeCredit += Math.max(perf.audience - 30, 0);

  // 희극 관객 5명마다 추가 포인트를 제공한다.
  if ('comedy' === perf.type) {
    volumeCredit += Math.floor(perf.audience / 5);
  }
  return volumeCredit;
}

function calculateAmount(plays, perf) {
  let thisAmount = 0;
  const play = getPlay(plays, perf)
  switch (play.type) {
    case 'tragedy':
      thisAmount = 40_000;

      if (perf.audience > 30) {
        thisAmount += 1_000 * (perf.audience - 30);
      }
      break;
    case 'comedy':
      thisAmount = 30_000;

      if (perf.audience > 20) {
        thisAmount += 10_000 + 500 * (perf.audience - 20);
      }
      thisAmount += 300 * perf.audience;
      break;

    default:
      throw new Error(`알 수 없는 장르: ${play.type}`);
  }
  return thisAmount;
}

function sumTotalAmount(performances) {
  return performances.reduce((prev, cur) => prev + cur.amount, 0)
}

function sumVolumeCredits (performances) {
  return performances.reduce((prev, cur) => prev + stackVolumeCredits(cur), 0)
}
