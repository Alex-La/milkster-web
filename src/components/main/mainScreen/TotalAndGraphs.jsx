import React from 'react';

import { Row, Column, Tile, Tabs, Tab, Loading } from 'carbon-components-react';

import ACCOUNT_QUERY from '../../../graphql/queries/account';
import useCurrentUser from '../../../hooks/useCurrentUser';

import { useQuery } from '@apollo/react-hooks';

const TotalAndGraphs = () => {
  const user = useCurrentUser();

  const { data, loading } = useQuery(ACCOUNT_QUERY, { variables: { where: { id: user.id } } });
  return (
    <Row>
      <Column sm={12} lg={{ span: 3 }}>
        <Tile>
          Total
          <Tabs>
            <Tab href="#" id="tab-1" label="USD">
              <div className="some-content">{loading ? <Loading /> : data.account.balance}</div>
            </Tab>
            <Tab href="#" id="tab-2" label="RUB">
              <div className="some-content">Content for second tab goes here.</div>
            </Tab>
          </Tabs>
        </Tile>
      </Column>
      <Column sm={12} lg={{ span: 3 }}>
        <Tile>Graph</Tile>
      </Column>
      <Column sm={12} lg={{ span: 3 }}>
        <Tile>Graph</Tile>
      </Column>
    </Row>
  );
};

export default TotalAndGraphs;
