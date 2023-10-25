export class Calculator {
  constructor(performance, play) {
    this.performance = performance;
    this.play = play;
  }

  get amount() {
    let thisAmount = 0;
    switch (this.play.type) {
      case 'tragedy':
        thisAmount = 40_000;

        if (this.performance.audience > 30) {
          thisAmount += 1_000 * (this.performance.audience - 30);
        }
        break;
      case 'comedy':
        thisAmount = 30_000;

        if (this.performance.audience > 20) {
          thisAmount += 10_000 + 500 * (this.performance.audience - 20);
        }
        thisAmount += 300 * this.performance.audience;
        break;

      default:
        throw new Error(`알 수 없는 장르: ${this.play.type}`);
    }
    return thisAmount;
  }

  get volumeCredits() {
      // 포인트를 적립한다.
      let volumeCredit = 0;
      volumeCredit += Math.max(this.performance.audience - 30, 0);

      // 희극 관객 5명마다 추가 포인트를 제공한다.
      if ('comedy' === this.performance.type) {
          volumeCredit += Math.floor(this.performance.audience / 5);
      }
      return volumeCredit;
  }
}
