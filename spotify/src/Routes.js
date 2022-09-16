import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AuthNavigation from './navigation/AuthNavigation';
import MovieNavigaiton from './navigation/MovieNavigation';
import {Provider, useSelector} from 'react-redux';
import {store} from './store';

const Contain = () => {
  const userInRedux = useSelector(state => state.user.user);

  return (
    <NavigationContainer>
      {userInRedux ? <MovieNavigaiton /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

function Router() {
  return (
    <Provider store={store}>
      <Contain />
    </Provider>
  );
}
export default Router;
