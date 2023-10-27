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

  get amount() {
    throw new Error('서브 클래스에서 처리하도록 설계')
  }

  get volumeCredits() {
    return Math.max(this.performance.audience - 30, 0)
  }
}

export class TragedyCalculator extends Calculator {
  get amount() {
    let thisAmount = 40_000;

    if (this.performance.audience > 30) {
      thisAmount += 1_000 * (this.performance.audience - 30);
    }

    return thisAmount;
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
    return super.volumeCredits + Math.floor(this.performance.audience / 5);
  }
}