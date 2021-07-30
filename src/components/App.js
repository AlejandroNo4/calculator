import React, { Component } from 'react';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import Display from './Display';

class App extends Component {
  constructor() {
    super();

    this.state = {
      total: null,
      next: '-',
      operation: null,
    };

    this.handleClick = (btnName) => {
      let { total, next, operation } = this.state;
      const calcObj = calculate(this.state, btnName);
      total = calcObj.total;
      next = calcObj.next;
      operation = calcObj.operation;
      this.setState({
        total, next, operation,
      });
    };
  }

  render() {
    const { next } = this.state;
    return (
      <>
        <div>
          <Display result={next} />
          <ButtonPanel clickHandler={this.handleClick} />
        </div>
      </>
    );
  }
}

export default App;
