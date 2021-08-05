import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import Calculator from '../components/Calculator';

let componentCalculator;

beforeEach(() => {
  componentCalculator = render(<Calculator />);
  const btn = componentCalculator.getByText('AC');
  fireEvent.click(btn);
});

test('render component to Match Snapshot', () => {
  expect(componentCalculator).toMatchSnapshot();
});

test('Clicking buttons will show them in the display', () => {
  const btnTwo = componentCalculator.getByText('5');
  const btnOperator = componentCalculator.getByText('+');
  fireEvent.click(btnTwo);
  fireEvent.click(btnOperator);
  fireEvent.click(btnTwo);

  const result = componentCalculator.getByText('5+5');
  expect(result).toBeTruthy();
});

test('Pushing equal will show the result of a sum 5+5 operation', () => {
  const btnNum = componentCalculator.getByText('5');
  const btnOperator = componentCalculator.getByText('+');
  const btnEqual = componentCalculator.getByText('=');
  fireEvent.click(btnNum);
  fireEvent.click(btnOperator);
  fireEvent.click(btnNum);
  fireEvent.click(btnEqual);

  const result = componentCalculator.getByText('10');
  expect(result).toBeTruthy();
});

test('Pushing equal will show the result of a substraction 55-3 operation', () => {
  const btnNumOne = componentCalculator.getByText('5');
  const btnNumTwo = componentCalculator.getByText('3');
  const btnOperator = componentCalculator.getByText('-');
  const btnEqual = componentCalculator.getByText('=');
  fireEvent.click(btnNumOne);
  fireEvent.click(btnNumOne);
  fireEvent.click(btnOperator);
  fireEvent.click(btnNumTwo);
  fireEvent.click(btnEqual);

  const result = componentCalculator.getByText('52');
  expect(result).toBeTruthy();
});

test('Pushing equal will show the result of a multiplication 5x3 operation', () => {
  const btnNumOne = componentCalculator.getByText('5');
  const btnNumTwo = componentCalculator.getByText('3');
  const btnOperator = componentCalculator.getByText('X');
  const btnEqual = componentCalculator.getByText('=');
  fireEvent.click(btnNumOne);
  fireEvent.click(btnOperator);
  fireEvent.click(btnNumTwo);
  fireEvent.click(btnEqual);

  const result = componentCalculator.getByText('15');
  expect(result).toBeTruthy();
});

test('Pushing equal will show the result of a division 5÷4 operation', () => {
  const btnNumOne = componentCalculator.getByText('5');
  const btnNumTwo = componentCalculator.getByText('4');
  const btnOperator = componentCalculator.getByText('÷');
  const btnEqual = componentCalculator.getByText('=');
  fireEvent.click(btnNumOne);
  fireEvent.click(btnNumOne);
  fireEvent.click(btnOperator);
  fireEvent.click(btnNumTwo);
  fireEvent.click(btnEqual);

  const result = componentCalculator.getByText('13.75');
  expect(result).toBeTruthy();
});

test('Pushing equal will show the result 10% of 100 operation', () => {
  const btnNumOne = componentCalculator.getByText('1');
  fireEvent.click(btnNumOne);
  const btnNumTwo = componentCalculator.getByText('0');
  const btnOperator = componentCalculator.getByText('%');
  const btnEqual = componentCalculator.getByText('=');
  fireEvent.click(btnNumOne);
  fireEvent.click(btnNumTwo);
  fireEvent.click(btnOperator);
  fireEvent.click(btnNumOne);
  fireEvent.click(btnNumTwo);
  fireEvent.click(btnNumTwo);
  fireEvent.click(btnEqual);

  const result = componentCalculator.getByText('10');
  expect(result).toBeTruthy();
});

test('Using the period will give a float number to use', () => {
  const btnNum = componentCalculator.getByText('5');
  const btnDot = componentCalculator.getByText('.');
  const btnOperator = componentCalculator.getByText('+');
  const btnEqual = componentCalculator.getByText('=');
  fireEvent.click(btnNum);
  fireEvent.click(btnDot);
  fireEvent.click(btnNum);
  fireEvent.click(btnOperator);
  fireEvent.click(btnNum);
  fireEvent.click(btnEqual);

  const result = componentCalculator.getByText('10.5');
  expect(result).toBeTruthy();
});

test('Clicking on +/- will transform the number to negative or positive', () => {
  const btnNum = componentCalculator.getByText('5');
  const btnOperator = componentCalculator.getByText('+/-');
  fireEvent.click(btnNum);
  fireEvent.click(btnNum);
  fireEvent.click(btnOperator);

  const result = componentCalculator.getByText('-55');
  expect(result).toBeTruthy();
});

test('BAD USAGE. Testing on a +/operation, - returning the same number throws an error', () => {
  const t = () => {
    const btnNum = componentCalculator.getByText('5');
    const btnOperator = componentCalculator.getByText('+/-');
    fireEvent.click(btnNum);
    fireEvent.click(btnNum);
    fireEvent.click(btnOperator);

    const result = componentCalculator.getByText('55');
    return result;
  };
  expect(t).toThrow(Error);
});

test('BAD USAGE. Testing on a + operation, returning the wrong number throws an error', () => {
  const t = () => {
    const btnNum = componentCalculator.getByText('5');
    const btnOperator = componentCalculator.getByText('+');
    const btnEqual = componentCalculator.getByText('=');
    fireEvent.click(btnNum);
    fireEvent.click(btnOperator);
    fireEvent.click(btnNum);
    fireEvent.click(btnEqual);

    const result = componentCalculator.getByText('100');
    return result;
  };
  expect(t).toThrow(Error);
});

test('BAD USAGE. Testing on a - operation, returning the wrong number throws an error', () => {
  const t = () => {
    const btnNumOne = componentCalculator.getByText('5');
    const btnNumTwo = componentCalculator.getByText('3');
    const btnOperator = componentCalculator.getByText('-');
    const btnEqual = componentCalculator.getByText('=');
    fireEvent.click(btnNumOne);
    fireEvent.click(btnNumOne);
    fireEvent.click(btnOperator);
    fireEvent.click(btnNumTwo);
    fireEvent.click(btnEqual);

    const result = componentCalculator.getByText('-52');
    return result;
  };
  expect(t).toThrow(Error);
});

test('BAD USAGE. Testing on a X operation, returning the wrong number throws an error', () => {
  const t = () => {
    const btnNumOne = componentCalculator.getByText('5');
    const btnNumTwo = componentCalculator.getByText('3');
    const btnOperator = componentCalculator.getByText('X');
    const btnEqual = componentCalculator.getByText('=');
    fireEvent.click(btnNumOne);
    fireEvent.click(btnOperator);
    fireEvent.click(btnNumTwo);
    fireEvent.click(btnEqual);

    const result = componentCalculator.getByText('53');
    return result;
  };
  expect(t).toThrow(Error);
});

test('BAD USAGE. Testing on a ÷ operation, returning the wrong number throws an error', () => {
  const t = () => {
    const btnNumOne = componentCalculator.getByText('5');
    const btnNumTwo = componentCalculator.getByText('4');
    const btnOperator = componentCalculator.getByText('÷');
    const btnEqual = componentCalculator.getByText('=');
    fireEvent.click(btnNumOne);
    fireEvent.click(btnNumOne);
    fireEvent.click(btnOperator);
    fireEvent.click(btnNumTwo);
    fireEvent.click(btnEqual);

    const result = componentCalculator.getByText('54');
    return result;
  };
  expect(t).toThrow(Error);
});

test('BAD USAGE. Testing on a % operation, returning the wrong number throws an error', () => {
  const t = () => {
    const btnNumOne = componentCalculator.getByText('1');
    fireEvent.click(btnNumOne);
    const btnNumTwo = componentCalculator.getByText('0');
    const btnOperator = componentCalculator.getByText('%');
    const btnEqual = componentCalculator.getByText('=');
    fireEvent.click(btnNumOne);
    fireEvent.click(btnNumTwo);
    fireEvent.click(btnOperator);
    fireEvent.click(btnNumOne);
    fireEvent.click(btnNumTwo);
    fireEvent.click(btnNumTwo);
    fireEvent.click(btnEqual);

    const result = componentCalculator.getByText('20');
    return result;
  };
  expect(t).toThrow(Error);
});
