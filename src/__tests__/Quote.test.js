import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Quote from '../components/Quote';

test('render component', () => {
  const componentQuote = render(<Quote />);
  expect(componentQuote).toMatchSnapshot();
});

test('Presence of the quote of the day', () => {
  const componentQuote = render(<Quote />);
  const text = componentQuote.getByText(
    'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. –William Paul Thurston',
  );
  expect(text).toBeTruthy();
});
