import operate from './operate';

const calculate = (dataObj, btnName) => {
  let { total, next, operation } = dataObj;

  const inputsArr = [];

  const operatorNames = {
    '+': 'addition',
    '-': 'substraction',
    x: 'multiplication',
    '÷': 'division',
    '%': 'percentage',
  };

  const usedOperator = Object.keys(operatorNames).find(
    (key) => operatorNames[key] === operation,
  );

  const splitOperation = (arr) => {
    const splitedNumbers = arr.join('').split(usedOperator);
    splitedNumbers.splice(1, 0, usedOperator);

    return splitedNumbers;
  };

  const typeOfButton = {
    numComposer: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'],
    symbol: ['AC', '+/-', '='],
    operator: ['+', '-', '÷', '%', 'x'],
  };

  if (typeOfButton.numComposer.includes(btnName)) {
    if (total === '0') {
      if (next === '0' && btnName === '0') {
        next = '0';
      } else if (next === '0' || total === next) {
        next = btnName === '.' ? '0.' : btnName;
      } else if (next !== '0') {
        if (btnName === '.') {
          next = next.split('').includes('.') ? next : `${next}${btnName}`;
        } else {
          next = `${next}${btnName}`;
        }
      }
    }
  }

  if (typeOfButton.symbol.includes(btnName)) {
    if (btnName === 'AC') {
      next = '0';
      total = '0';
      operation = '';
    }
    if (total !== next) {
      if (btnName === '+/-') {
        const lastChar = next.slice(-1);
        const previousOperator = Object.keys(operatorNames).includes(lastChar);
        if (operation !== '') {
          inputsArr.push(next);
          const num = splitOperation(inputsArr);
          const minVal = `${num[2] * -1}`;
          num.splice(2, 1, minVal);
          next = previousOperator === false ? num.join('') : next;
        } else {
          next = `${next * -1}`;
        }
      } else if (btnName === '=') {
        inputsArr.push(next);
        const num = splitOperation(inputsArr);
        if (num.length === 3 && num[2] !== '') {
          total = operate(parseFloat(num[0]), parseFloat(num[2]), operation);
          next = total;
        }
      }
    }
  }

  if (typeOfButton.operator.includes(btnName)) {
    if (total !== next) {
      next = operation !== '' ? next : `${next}${btnName}`;
      const lastChar = next.slice(-1);
      if (Object.keys(operatorNames).includes(lastChar)) {
        next = next.replace(/.$/, btnName);
      }
      operation = operatorNames[btnName];
      inputsArr.push(next);
    }
  }

  const finalObj = { total, next, operation };

  return finalObj;
};

export default calculate;
