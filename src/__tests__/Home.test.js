import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Home from '../components/Home';

test('render component', () => {
  const component = render(<Home />);
  
});
