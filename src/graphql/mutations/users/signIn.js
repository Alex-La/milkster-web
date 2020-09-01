import { gql } from 'apollo-boost';

const SIGN_IN = gql`
  mutation signIn($data: SignInInput!) {
    signIn(data: $data) {
      token
      user {
        email
        id
      }
    }
  }
`;

export default SIGN_IN;
