import React from 'react';
import { withRouter, Route, Switch } from 'react-router-dom'
import PrivateRouter from "./component/privateRouter/PrivateRouter";
import Auth from "./views/authorization/Authorization";
import Login from "./views/authorization/login/Login";
import SignIn from "./views/authorization/signin/Signin";
import User from "./views/user/User";

function App(props) {
  return (
    <Switch>
      <Route path='/authorization/login' render={props => <Auth><Login {...props} exact={true} /></Auth>} />
      <Route path='/authorization/signIn' render={props => <Auth><SignIn {...props} exact={true} /></Auth>} />
      <PrivateRouter path="/" props={props} component={User} exact={true} />
      <PrivateRouter props={props} component={User} exact={true} />
    </Switch>
  )
}

export default withRouter(App);
