import React from 'react';

import { TableContainer, Table, TableBody, TableRow, TableCell } from 'carbon-components-react';

const TableAccounts = ({ data }) => {
  return (
    <TableContainer>
      <Table>
        <TableBody>
          {data.accounts.map((account, index) => (
            <TableRow key={index}>
              <TableCell>{account.provider.name}</TableCell>
              <TableCell>${account.balance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableAccounts;
