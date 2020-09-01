import { gql } from 'apollo-boost';

const TRANSACTIONS_QUERY = gql`
  query transactions(
    $after: TransactionWhereUniqueInput
    $before: TransactionWhereUniqueInput
    $first: Int
    $last: Int
    $orderBy: TransactionOrderByInput
    $where: TransactionWhereInput
  ) {
    transactions(
      after: $after
      before: $before
      first: $first
      last: $last
      orderBy: $orderBy
      where: $where
    ) {
      amount
      description
      linkedTransactionRef
      type
      syncedAt
      createdAt
    }
  }
`;

export default TRANSACTIONS_QUERY;
