import React, { useState } from 'react';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import Display from './Display';

const App = () => {
  const [total, updateTotal] = useState(null);
  const [next, updateNext] = useState('-');
  const [operation, updateOperation] = useState(null);

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
