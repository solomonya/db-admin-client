import { Button } from '@mui/material';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { Header, Main } from '../../views';

const Root = () => {
  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default observer(Root);
