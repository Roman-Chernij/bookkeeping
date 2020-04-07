import React, { Suspense } from 'react';
import { Redirect, Switch } from 'react-router-dom'
import Sidebar from "./component/sidebar/Sidebar";
import Header from "./component/header/Header";
import PrivateRouter from '../../component/privateRouter/PrivateRouter';
import { userRoutes } from '../../misc/router-config';
import { uniqueIdentifierGeneration } from '../../misc/uniqueIdentifierGeneration';

const User = props => {
  return (
    <div className="wrapper">
      <div className="wrapper-container">
        <Sidebar />
        <Header />
        <main className="main">
          <div className="main-container">
            <Suspense fallback={<div>Загрузка...</div>}>
              <Switch>
                {
                  userRoutes.map(router => (
                    <PrivateRouter key={uniqueIdentifierGeneration()} path={router.path} props={props} component={router.component} exact={true} />
                  ))
                }
                <Redirect to={{
                  pathname: '/',
                  state: {from: props.location},
                }}/>
              </Switch>
            </Suspense>
          </div>
        </main>
      </div>
    </div>
  )
};

export default User;
