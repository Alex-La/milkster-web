import { gql } from 'apollo-boost';

const ME_QUERY = gql`
  query me {
    me {
      email
      id
    }
  }
`;

export default ME_QUERY;
