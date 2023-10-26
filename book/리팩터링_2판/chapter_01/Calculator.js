export function createCalculator(play, performance) {
  switch (play.type) {
    case 'tragedy':
      return new TragedyCalculator(performance);
    case 'comedy':
      return new ComedyCalculator(performance);
    default:
      throw new Error(`알 수 없는 장르: ${play.type}`);
  }
}

export class Calculator {
  constructor(performance) {
    this.performance = performance;
  }

  get amount() {}

  get volumeCredits() {}
}

export class TragedyCalculator extends Calculator {
  get amount() {
    let thisAmount = 40_000;

    if (this.performance.audience > 30) {
      thisAmount += 1_000 * (this.performance.audience - 30);
    }

    return thisAmount;
  }
  get volumeCredits() {
    return Math.max(this.performance.audience - 30, 0);
  }
}

export class ComedyCalculator extends Calculator {
  get amount() {
    let thisAmount = 30_000;

    if (this.performance.audience > 20) {
      thisAmount += 10_000 + 500 * (this.performance.audience - 20);
    }
    thisAmount += 300 * this.performance.audience;

    return thisAmount;
  }

  get volumeCredits() {
    return Math.max(this.performance.audience - 30, 0) + Math.floor(this.performance.audience / 5);
  }
}