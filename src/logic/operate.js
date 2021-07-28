import Big from "big.js";

const operate = (numberOne, numberTwo, operation) => {

  const oneB = Big(numberOne)
  const twoB = Big(numberTwo)

  const aritmethic ={
    '+': oneB.plus(twoB),
    '-': oneB.minus(twoB),
    'x': oneB.times(twoB) ,
    '/': oneB.div(twoB),
    '%': (oneB * twoB) / 100,
  }

  return aritmethic[operation]

};


export default operate