import { Container } from '@material-ui/core';
import React from 'react';
import { FeedAndMyRewards, UserInfo } from './components';

function App() {
  return (
    <Container maxWidth="md">
      <UserInfo myRewards={250} give={100} />
      <FeedAndMyRewards />
    </Container>
  );
}

export default App;
