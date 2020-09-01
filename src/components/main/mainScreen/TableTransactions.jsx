import React from 'react';

import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  Accordion,
  AccordionItem,
} from 'carbon-components-react';

const TableTransactions = ({ data }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Amount</TableHeader>
            <TableHeader>Description</TableHeader>
            <TableHeader>Transaction Ref</TableHeader>
            <TableHeader>Type</TableHeader>
            <TableHeader>Synced at</TableHeader>
            <TableHeader>Created at</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.transactions.map((transaction, index) => (
            <TableRow key={index}>
              <TableCell>{transaction.amount}</TableCell>
              <TableCell>
                <Accordion>
                  <AccordionItem title="show">
                    <p>{transaction.description}</p>
                  </AccordionItem>
                </Accordion>
              </TableCell>
              <TableCell>{transaction.linkedTransactionRef}</TableCell>
              <TableCell>{transaction.type}</TableCell>
              <TableCell>{transaction.syncedAt}</TableCell>
              <TableCell>{transaction.createdAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableTransactions;
