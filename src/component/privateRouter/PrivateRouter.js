import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({component: Component, props, authed, ...rest}) => {
  const routeData = {
    extras: {},
    ...rest
  };
  const token = true;
  return (
    routeData.redirect && routeData.location.pathname !== routeData.redirect
      ?
      <Redirect to={{pathname: routeData.redirect}}/>
      :
      <Route
        {...rest}
        render={props => (
          token ?
            <Component {...props} />
            :
            <Redirect to={{
              pathname: '/authorization/login',
              state: {from: props.location},
            }}/>
        )}/>
  )
};

export default PrivateRoute;
