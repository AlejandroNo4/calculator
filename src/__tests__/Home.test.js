import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Home from '../components/Home';

test('render component', () => {
  const componentHome = render(<Home />);
  expect(componentHome).toMatchSnapshot();
});

test('Presence of the welcome text', () => {
  const componentHome = render(<Home />);
  const text = componentHome.getByText('Welcome to our page!');
  expect(text).toBeTruthy();
});
