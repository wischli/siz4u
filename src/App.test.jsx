import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the welcome heading', () => {
  const { container } = render(<App />);
  const heading = container.querySelector('#willkommen');
  expect(heading).toBeInTheDocument();
  expect(heading).toHaveTextContent('Sicherheit In Zukunft');
});
