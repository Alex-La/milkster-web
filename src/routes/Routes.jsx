import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import { Loading } from 'carbon-components-react';

import SignIn from '../components/SignIn';
import Main from '../components/main/Main';

import { UserContext } from '../hooks/useCurrentUser';
import { useQuery } from '@apollo/react-hooks';
import USER_QUERY from '../graphql/queries/user';

const Routes = () => {
  const { data, loading } = useQuery(USER_QUERY);

  const { me } = data || {};

  if (loading) return <Loading />;

  const renderPrivateRoutes = () => {
    return (
      <Switch>
        <Route path="/" component={Main} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    );
  };

  const renderPublicRoutes = () => {
    return (
      <Switch>
        <Route path="/sign-in" component={SignIn} />
        <Route render={() => <Redirect to="/sign-in" />} />
      </Switch>
    );
  };

  return (
    <UserContext.Provider value={me}>
      {me ? renderPrivateRoutes() : renderPublicRoutes()}
    </UserContext.Provider>
  );
};

export default Routes;
