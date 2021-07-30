import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const oneB = Big(numberOne);
  const twoB = Big(numberTwo);

  const aritmethic = {
    addition: oneB.plus(twoB),
    substraction: oneB.minus(twoB),
    multiplication: oneB.times(twoB),
    division: oneB.div(twoB),
    percentage: oneB.mod(twoB),
  };

  const res = aritmethic[operation];

  return parseFloat(res).toString();
};

export default operate;
