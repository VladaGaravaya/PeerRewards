import React from 'react';
import { render, screen } from '@testing-library/react';
import UserInfo from '.';

it('renders user info', () => {
  render(<UserInfo myRewards={320} give={200} />);
  const userNameElement = screen.getByText(/Jane Doe/i);
  expect(userNameElement).toBeInTheDocument();
});

it('renders user Reward', () => {
    render(<UserInfo myRewards={320} give={200} />);
    expect(screen.getByText(/My Rewards/i)).toBeInTheDocument();
    expect(screen.getByText("$320")).toBeInTheDocument();
});

it('renders user give', () => {
    render(<UserInfo myRewards={320} give={200} />);
    expect(screen.getByText(/Give/i)).toBeInTheDocument();
    expect(screen.getByText("$200")).toBeInTheDocument();
});
