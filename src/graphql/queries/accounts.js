import { gql } from 'apollo-boost';

const ACCOUNTS_QUERY = gql`
  query accounts(
    $after: AccountWhereUniqueInput
    $before: AccountWhereUniqueInput
    $first: Int
    $last: Int
  ) {
    accounts(after: $after, before: $before, first: $first, last: $last) {
      balance
      provider {
        name
      }
    }
  }
`;

export default ACCOUNTS_QUERY;
