import React, { useState } from 'react';

import { Column, DataTableSkeleton, Tile, Pagination } from 'carbon-components-react';

import TRANSACTIONS_QUERY from '../../../graphql/queries/transactions';
import useTransactionsQuery from '../../../hooks/useTransactionsQuery';
import TableTransactions from './TableTransactions';

const Transactions = () => {
  const [paginationVars, setPaginationVars] = useState({ page: 1, pageSize: 10 });

  const { data, loading } = useTransactionsQuery(paginationVars, TRANSACTIONS_QUERY);

  const handlePaginationChange = p => {
    setPaginationVars(p);
  };

  return (
    <Column sm={12} lg={{ span: 8 }}>
      <h2>Transactions</h2>
      {loading ? <DataTableSkeleton /> : <TableTransactions data={data} />}
      <Tile>
        <Pagination
          backwardText="Previous page"
          forwardText="Next page"
          itemsPerPageText="Items per page:"
          page={1}
          pageNumberText="Page Number"
          pageSize={10}
          pageSizes={[10, 20, 30, 40, 50]}
          totalItems={data && data.transactions.length}
          onChange={handlePaginationChange}
        />
      </Tile>
    </Column>
  );
};

export default Transactions;
