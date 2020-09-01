import React from 'react';

import { Row, Grid } from 'carbon-components-react';

import TotalAndGraphs from './TotalAndGraphs';
import Transactions from './Transactions';
import Accounts from './Accounts';

const MainScreen = () => {
  return (
    <Grid style={{ marginTop: '100px' }}>
      <TotalAndGraphs />
      <Row style={{ marginTop: '50px' }}>
        <Transactions />
        <Accounts />
      </Row>
    </Grid>
  );
};

export default MainScreen;
