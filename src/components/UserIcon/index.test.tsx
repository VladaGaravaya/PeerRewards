import React from 'react';
import { cleanup, render } from '@testing-library/react';
import UserIcon from '.';

afterEach(cleanup)

it('renders user icon', () => {
  const { asFragment } = render(<UserIcon size="small" />);
  expect(asFragment()).toMatchSnapshot();
});
