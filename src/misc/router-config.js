import React from 'react';
import { quard } from "./quard";
// import User from '../views/user/User';
// import Auth from '../views/authorization/Authorization';
// import Login from '../views/authorization/login/Login';
// import SignIn from '../views/authorization/signin/Signin';

const User = React.lazy(() => import('../views/user/User'));
const Auth = React.lazy(() => import('../views/authorization/Authorization'));
const Login = React.lazy(() => import('../views/authorization/login/Login'));
const SignIn = React.lazy(() => import('../views/authorization/signin/Signin'));


const Bill = React.lazy(() => import('../views/user/views/bill/Bill'));
const History = React.lazy(() => import('../views/user/views/history/History'));
const Record = React.lazy(() => import('../views/user/views/record/Record'));
const Planning = React.lazy(() => import('../views/user/views/planning/Planning'));

export const userRoutes = [
  {
    path: '/',
    component: Bill,
    canActivate: [quard],
    title: 'Счет'
  },
  {
    path: "/history",
    component: History,
    canActivate: [quard],
    title: 'История'
  },
  {
    path: '/planning',
    component: Planning,
    canActivate: [quard],
    title: 'Планирование'
  },
  {
    path: '/record',
    component: Record,
    canActivate: [quard],
    title: 'Запись'
  },
];

export const appRouters = [
  {
    path: '',
    component: User,
    childRouters: [...userRoutes]
  },
  {
    path: '/authorization',
    component: Auth,
    childRouters: [
      {
        path: '',
        redirectTo: '/authorization/login'
      },
      {
        path: '/login',
        component: Login
      },
      {
        path: '/signIn',
        component: SignIn
      }
    ]
  }
];
