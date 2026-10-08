import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the application root without crashing', () => {
  render(<App />);
  expect(document.querySelector('.App')).toBeInTheDocument();
});
