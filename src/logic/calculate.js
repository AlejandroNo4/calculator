import operate from './operate';

const calculate = (dataObj, btnName) => {
  let { total, next, operation } = dataObj;

  const operationParts = {
    numOne: '0',
    numTwo: '0',
    op: '',
  };

  const operatorNames = {
    '+': 'addition',
    '-': 'substraction',
    x: 'multiplication',
    '÷': 'division',
    '%': 'percentage',
  };

  const typeOfButton = {
    numComposer: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'],
    symbol: ['AC', '+/-', '='],
    operator: ['+', '-', '÷', '%', 'x'],
  };

  if (typeOfButton.numComposer.includes(btnName)) {
    if (next === '0' && btnName === '0') {
      next = '0';
    } else if (next !== '0' && total === next) {
      next = btnName === '.' ? '0.' : btnName;
      total = '0';
      operationParts.op = '';
      operationParts.numOne = btnName;
    } else if (next === '0' && operationParts.op === '') {
      operationParts.numOne = btnName === '.' ? '0.' : btnName;
      next = operationParts.numOne;
    } else if (next !== '0' && operationParts.op === '') {
      operationParts.numOne = `${operationParts.numOne}${btnName}`;
      next = operationParts.numOne;
    } else if (
      next !== '0'
      && operationParts.op !== ''
      && operationParts.numTwo === '0'
    ) {
      operationParts.numTwo = btnName === '.' ? '0.' : btnName;
      next = operationParts.numTwo;
    } else if (
      next !== '0'
      && operationParts.op !== ''
      && operationParts.numTwo !== '0'
    ) {
      operationParts.numTwo = `${operationParts.numTwo}${btnName}`;
      next = operationParts.numTwo;
    }
  }

  if (typeOfButton.symbol.includes(btnName)) {
    if (btnName === 'AC') {
      next = '0';
      total = '0';
      operationParts.op = '';
    } else if (btnName === '+/-') {
      next = next === 0 ? next : parseFloat(next) * -1;
      total = next;
    } else if (btnName === '=') {
      next = operationParts.op === ''
        ? next
        : operate(operationParts.numOne, operationParts.numTwo, operation);
      operationParts.op = '';
    }
  }

  if (typeOfButton.operator.includes(btnName)) {
    operation = operatorNames[btnName];
    operationParts.op = btnName;
    if (total !== '0') {
      next = operationParts.op === ''
        ? next
        : operate(operationParts.numOne, operationParts.numTwo, operation);
      operationParts.numOne = total;
      operationParts.numTwo = '0';
      operationParts.op = '';
    }
  }

  const finalObj = { total, next, operation };

  return finalObj;
};

export default calculate;
