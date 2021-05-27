import React from 'react';
import { render, screen } from '@testing-library/react';
import RewardItem from '.';

it('renders title of reward item', () => {
  render(<RewardItem reward={{
    id: "2",
    userTo: "Alex Brown",
    userBy: "Rajesh Kumar",
    date: "2021-04-21T09:39:21.306Z",
    comment: `Thanks for your help in creating the product overview deck. Your help to show cases
    those scenarios really helped in closing the loop on the story.`,
  }} />);
  screen.debug();
  expect(screen.getAllByRole("heading")[0]).toBeInTheDocument();
});

it('renders date of reward item', () => {
    render(<RewardItem reward={{
      id: "2",
      userTo: "Alex Brown",
      userBy: "Rajesh Kumar",
      date: "2021-04-21T09:39:21.306Z",
      comment: `Thanks for your help in creating the product overview deck. Your help to show cases
      those scenarios really helped in closing the loop on the story.`,
    }} />);
    expect(screen.getByText("Apr 21, 2021")).toBeInTheDocument();
});

it('renders user give', () => {
    render(<RewardItem reward={{
      id: "2",
      userTo: "Alex Brown",
      userBy: "Rajesh Kumar",
      date: "2021-04-21T09:39:21.306Z",
      comment: `Thanks for your help!`,
    }} />);
    expect(screen.getByText(/Thanks for your help!/i)).toBeInTheDocument();
});
