import { Container } from '@material-ui/core';
import React from 'react';
import { FeedAndMyRewards, UserInfo } from './components';

function App() {
  const [myRewards, setMyRewards] = React.useState<number>(250);
  const [give, setGive] = React.useState<number>(100);

  const changeUserReward = (cost: number) => {
    setMyRewards(myRewards - cost);
    setGive(give + cost);
  };

  return (
    <Container maxWidth="md">
      <UserInfo myRewards={myRewards} give={give} />
      <FeedAndMyRewards myRewards={myRewards} changeUserReward={changeUserReward}/>
    </Container>
  );
}

export default App;
