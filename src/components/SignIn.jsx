import React, { useState } from 'react';

import { Button, TextInput, Grid, Row, Column, Form, FormGroup } from 'carbon-components-react';

import { useMutation } from '@apollo/react-hooks';

import USER_QUERY from '../graphql/queries/user';
import SIGN_IN from '../graphql/mutations/users/signIn';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const [signIn] = useMutation(SIGN_IN, {
    update: (cache, { data }) => {
      if (!data.signIn) return;
      const { token, user } = data.signIn;
      localStorage.setItem('token', token);
      cache.writeQuery({
        query: USER_QUERY,
        data: { me: user },
      });
    },
  });

  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };

  const handleChangePassword = e => {
    setPassword(e.target.value);
  };

  const handleSignInSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      await signIn({ variables: { data: { email, password } } });
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signIn">
      <Grid>
        <Row>
          <Column sm={12} lg={{ span: 4, offset: 4 }}>
            <h1>Sign In</h1>
            <Form onSubmit={handleSignInSubmit}>
              <FormGroup legendText="">
                <TextInput
                  onChange={handleChangeEmail}
                  value={email}
                  id="test1"
                  invalidText="Invalid email."
                  labelText="Email"
                  placeholder="username@example.com"
                />
              </FormGroup>
              <FormGroup legendText="">
                <TextInput
                  onChange={handleChangePassword}
                  value={password}
                  id="test2"
                  invalidText="Invalid password."
                  type="password"
                  labelText="Password"
                  placeholder="************"
                />
              </FormGroup>
              <Button kind="primary" type="submit" disabled={loading}>
                Sign In
              </Button>
            </Form>
          </Column>
        </Row>
      </Grid>
    </div>
  );
};

export default SignIn;
