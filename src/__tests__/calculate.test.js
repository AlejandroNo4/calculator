import calculate from '../logic/calculate';

let obj;

beforeEach(() => {
  obj = { total: null, next: '0', operation: '' };
});

test('calculate returns an object', () => {
  const res = calculate(obj, '+');
  expect(typeof (res)).toBe('object');
});

test('When next is 0, it doesnt add anoter 0', () => {
  const res = calculate(obj, '0');
  expect(res.next).toBe('0');
  expect(res.next).not.toBe('00');
});

test('When adding a number, the next changes to that number', () => {
  const res = calculate(obj, '3');
  expect(res.next).toBe('3');
  expect(res.next).not.toBe('03');
});

test('When adding a number, the next changes to that number', () => {
  const res = calculate(obj, '3');
  expect(res.next).toBe('3');
  expect(res.next).not.toBe('03');
});

test('Adding an operator, operation changes to addition', () => {
  const res = calculate(obj, '+');
  expect(res.operation).toBe('addition');
  expect(res.operation).not.toBe(null);
});

test('Adding an operator, operation changes to substraction', () => {
  const res = calculate(obj, '-');
  expect(res.operation).toBe('substraction');
  expect(res.operation).not.toBe(null);
});

test('Adding an operator, operation changes to multiplication', () => {
  const res = calculate(obj, 'x');
  expect(res.operation).toBe('multiplication');
  expect(res.operation).not.toBe(null);
});

test('Adding an operator, operation changes to division', () => {
  const res = calculate(obj, '÷');
  expect(res.operation).toBe('division');
  expect(res.operation).not.toBe(null);
});

test('Adding an operator, operation changes to ercentage', () => {
  const res = calculate(obj, '%');
  expect(res.operation).toBe('percentage');
  expect(res.operation).not.toBe(null);
});

test("It's not possible to add a second operator", () => {
  obj = { total: null, next: '4+', operation: null };
  const res = calculate(obj, '+');
  expect(res.operation).toBe('addition');
  expect(res.operation).not.toBe(null);
  expect(res.next).toBe('4+');
  expect(res.next).not.toBe('4++');
});

test('Clicking on AC cleans up all values from obj', () => {
  obj = { total: '2142', next: '2142+3', operation: 'addition' };
  const res = calculate(obj, 'AC');
  expect(res.total).toBe('0');
  expect(res.next).toBe('0');
  expect(res.operation).toBe('');
  expect(res.total).not.toBe('2142');
  expect(res.next).not.toBe('2142+3');
  expect(res.operation).not.toBe('addition');
});

test('Clicking on . adds it to the next, event with a previous 0', () => {
  let res = calculate(obj, '.');
  expect(res.next).toBe('0.');
  expect(res.next).not.toBe('.');
  obj = { total: null, next: '35', operation: null };
  res = calculate(obj, '.');
  expect(res.next).toBe('35.');
});

test('Clicking on +/- returns the same value * -1', () => {
  obj = { total: null, next: '340', operation: '' };
  const res = calculate(obj, '+/-');
  expect(res.next).toBe('-340');
  expect(res.next).not.toBe('340');
});

test('Clicking on +/- doesnt work with a 0', () => {
  const res = calculate(obj, '+/-');
  expect(res.next).toBe('0');
  expect(res.next).not.toBe('-0');
});

test('Clicking on = doesnt work with 0', () => {
  obj = { total: '0', next: '0', operation: '' };
  const res = calculate(obj, '=');
  expect(res.total).toBe('0');
  expect(res.next).not.toBe('0=');
});

test('Clicking on = changes the total value of a sum', () => {
  obj = { total: '', next: '2+2', operation: 'addition' };
  const res = calculate(obj, '=');
  expect(res.total).toBe('4');
  expect(res.total).not.toBe('');
  expect(res.next).toBe('4');
  expect(res.next).not.toBe('2+2=');
});

test('Clicking on = changes the total value of a substraction', () => {
  obj = { total: '', next: '3-2', operation: 'substraction' };
  const res = calculate(obj, '=');
  expect(res.total).toBe('1');
  expect(res.total).not.toBe('');
  expect(res.next).toBe('1');
  expect(res.next).not.toBe('3-2=');
});

test('Clicking on = changes the total value of a multiplication', () => {
  obj = { total: '', next: '3x2', operation: 'multiplication' };
  const res = calculate(obj, '=');
  expect(res.total).toBe('6');
  expect(res.total).not.toBe('');
  expect(res.next).toBe('6');
  expect(res.next).not.toBe('3x2=');
});

test('Clicking on = changes the total value of a percentage', () => {
  obj = { total: '', next: '10%100', operation: 'percentage' };
  const res = calculate(obj, '=');
  expect(res.total).toBe('10');
  expect(res.total).not.toBe('');
  expect(res.next).toBe('10');
  expect(res.next).not.toBe('10%100=');
});

test('Clicking on = changes the total value of a division', () => {
  obj = { total: '', next: '6÷2', operation: 'division' };
  const res = calculate(obj, '=');
  expect(res.total).toBe('3');
  expect(res.total).not.toBe('');
  expect(res.next).toBe('3');
  expect(res.next).not.toBe('6÷2=');
});

test('Is not possible to divide by 0', () => {
  obj = { total: '', next: '6÷0', operation: 'division' };
  const res = calculate(obj, '=');
  expect(res.total).toBe('');
  expect(res.next).toBe('Impossible');
  expect(res.next).not.toBe('6÷0=');
});
