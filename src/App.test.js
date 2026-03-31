import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the staking calculator experience', () => {
  render(<App />);

  expect(
    screen.getByRole('heading', { name: /crypto staking calculator/i })
  ).toBeInTheDocument();
  expect(screen.getByLabelText(/staked coins/i)).toBeInTheDocument();
  expect(
    screen.getByRole('button', { name: /mine block/i })
  ).toBeInTheDocument();
});
