import React from 'react';
import { fireEvent, getByTestId, render, screen, waitForElement } from '@testing-library/react';
import NewRewardModal from '.';
import userEvent from '@testing-library/user-event';

it('add the reward to the list', () => {
  const onReward = jest.fn();
  const onClose = jest.fn();
  const { getByTestId } = render(<NewRewardModal myRewards={320} open={true} onClose={onClose} onReward={onReward} />);
  userEvent.type(getByTestId("user-to-input"), `David Greene`);
  userEvent.type(getByTestId("reward-input"), "78");
  userEvent.type(getByTestId("why-input"), "Comment");
  userEvent.click(getByTestId("reward-button"));
  expect(onReward).toHaveBeenCalled();
});

it('display error under reward input', () => {
  const onReward = jest.fn();
  const onClose = jest.fn();
  const { getByTestId, getByText } = render(<NewRewardModal myRewards={320} open={true} onClose={onClose} onReward={onReward} />);
  userEvent.type(getByTestId("reward-input"), "330");
  expect(getByText("You enter more than your rewards.")).toBeInTheDocument();
});

it('don\'t add the reward to the list if we have empty values', () => {
  const onReward = jest.fn();
  const onClose = jest.fn();
  const { getByTestId } = render(<NewRewardModal myRewards={320} open={true} onClose={onClose} onReward={onReward} />);
  userEvent.type(getByTestId("why-input"), "Comment");
  userEvent.click(getByTestId("reward-button"));
  expect(onReward).not.toHaveBeenCalled();
});

it('close the modal', () => {
  const onReward = jest.fn();
  const onClose = jest.fn();
  const { getByText } = render(<NewRewardModal myRewards={320} open={true} onClose={onClose} onReward={onReward} />);
  fireEvent.click(getByText("Cancel"));
  expect(onClose).toHaveBeenCalled();
});
