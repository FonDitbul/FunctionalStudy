import {statement_origin} from './statement_origin';
import {statement_my} from './statement_my'
import { plays, invoices } from './data';

describe('[Chapter-01] 리팩터링 첫 번째 예시', () => {
  test('기존 테스트 ', () => {
    const result = statement_origin(invoices, plays)

    expect(result).toEqual('청구내역 (고객명: BigCo)\n' +
        'Hamlet: 650 55석\n' +
        'As You Like It: 580 35석\n' +
        'Othello: 500 40석\n' +
        '총액 1730\n' +
        '적립 포인트 47점\n')
  });

  test('리팩터링 진행 ', () => {
    const result = statement_my(invoices, plays)

    expect(result).toEqual('청구내역 (고객명: BigCo)\n' +
        'Hamlet: 650 55석\n' +
        'As You Like It: 580 35석\n' +
        'Othello: 500 40석\n' +
        '총액 1730\n' +
        '적립 포인트 47점\n')
  });
});