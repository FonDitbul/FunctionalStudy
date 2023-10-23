import { statement } from './statement_origin';
import { plays, invoices } from './data';

describe('statement 테스트', () => {
  test('test', () => {
    const result = statement(invoices, plays)

    expect(result).toEqual('청구내역 (고객명: BigCo)\n' +
        'Hamlet: 650 55석\n' +
        'As You Like It: 580 35석\n' +
        'Othello: 500 40석\n' +
        '총액 1730\n' +
        '적립 포인트 47점\n')
  });
});