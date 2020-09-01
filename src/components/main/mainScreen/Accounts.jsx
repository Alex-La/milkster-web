import React from 'react';

import { Column, DataTableSkeleton } from 'carbon-components-react';

import ACCOUNTS_QUERY from '../../../graphql/queries/accounts';
import { useQuery } from '@apollo/react-hooks';
import TableAccounts from './TableAccounts';

const Accounts = () => {
  const { data, loading } = useQuery(ACCOUNTS_QUERY);

  return (
    <Column sm={12} lg={{ span: 4 }}>
      <h2>Accounts</h2>
      {loading ? <DataTableSkeleton /> : <TableAccounts data={data} />}
    </Column>
  );
};

export default Accounts;
