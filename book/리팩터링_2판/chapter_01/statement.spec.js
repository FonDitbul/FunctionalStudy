import {statement} from "./statement_origin";
import {plays, invoices} from "./data";

// describe('statement 테스트', () => {
//     test('' => {
//         console.log(statement(invoices, plays))
//     })
//
// });

const sum = (a, b) => {return a+ b}
describe('sum module', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
});