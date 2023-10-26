import { createCalculator } from './Calculator';

export function statement_my(invoices, plays) {
  let result = `청구내역 (고객명: ${invoices.customer})\n`;

  const resultData = Object.assign({}, invoices);
  resultData.performances = invoices.performances.map((perf) => enrichStatementData(plays, perf));

  // 가격을 계산한다.
  const totalAmount = sumTotalAmount(resultData.performances);

  // 포인트를 적립한다.
  const volumeCredits = resultData.performances.reduce((prev, cur) => prev + cur.credits, 0);

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

function getPlayName(plays, perf) {
  const play = getPlay(plays, perf);
  return play.name;
}

function billingDetail(perf) {
  return `${perf.name}: ${perf.amount / 100} ${perf.audience}석\n`;
}

function sumTotalAmount(performances) {
  return performances.reduce((prev, cur) => prev + cur.amount, 0);
}

function enrichStatementData(plays, performance) {
  const play = getPlay(plays, performance);

  const calculator = createCalculator(play, performance);

  const result = Object.assign({}, performance);
  result.name = getPlayName(plays, performance);
  result.amount = calculator.amount;
  result.credits = calculator.volumeCredits;

  return result;
}