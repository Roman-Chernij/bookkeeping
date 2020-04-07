import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PrivateRouter from '../privateRouter/PrivateRouter';
import { uniqueIdentifierGeneration } from '../../misc/uniqueIdentifierGeneration';

export const RouteGenerator = React.memo(props => {
  const {appRouter, ...rest} = props;
  const routeListGenerator = (router) => {
    if (router.redirectTo) {
      return (
        <Redirect key={uniqueIdentifierGeneration()} to={{
          pathname: '/',
          state: {from: props.location},
        }}/>
      );
    } else if (router.canActivate) {
      return <PrivateRouter key={uniqueIdentifierGeneration()} path={router.path} props={props} component={router.component} exact={true} />
    } else {
      const Component = router.component;
      return <Route
        key={uniqueIdentifierGeneration()}
        path={router.path}
        render={props => <Component {...props} childRouters={router.childRouters} />}
        exact={true} />
    }
  };

  const combineRouteListGenerator = () => appRouter.map(router => routeListGenerator(router));
  return (
    <Switch>
      {
        combineRouteListGenerator()
      }
    </Switch>
  )
});
