import React, { useState } from 'react';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import Display from './Display';

const App = () => {
  const [total, updateTotal] = useState('0');
  const [next, updateNext] = useState('0');
  const [operation, updateOperation] = useState('');

  const handleClick = (btnName) => {
    const obj = { total, next, operation };
    const calcObj = calculate(obj, btnName);
    updateTotal(calcObj.total);
    updateNext(calcObj.next);
    updateOperation(calcObj.operation);
  };

  return (
    <>
      <div>
        <Display result={next.toString()} />
        <ButtonPanel clickHandler={handleClick} />
      </div>
    </>
  );
};

export default App;
