export class Calculator {
  constructor(performance, play) {
    this.performance = performance;
    this.play = play;
  }

  get amount() {
    let thisAmount = 0;
    switch (this.play.type) {
      // TODO 변경
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
}
