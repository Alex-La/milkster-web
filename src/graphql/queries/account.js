import { gql } from 'apollo-boost';

const ACCOUNT_QUERY = gql`
  query account($where: AccountWhereUniqueInput!) {
    account(where: $where) {
      balance
    }
  }
`;

export default ACCOUNT_QUERY;
