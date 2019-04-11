import React from 'react';

import {Route, Switch, Redirect } from 'react-router-dom';

/*// 引入页面
import Home from './pages/home';
import Page from './pages/page';
import Counter from './pages/counter';*/

import loadable from 'react-loadable';
import Loading from 'components/Loading';
const Home = loadable({
  loader: () => import('pages/Home'),
  loading: Loading,
  timeout: 10000, // 10 seconds
})
const Login = loadable({
  loader: () => import('pages/login'),
  loading: Loading,
  timeout: 10000, // 10 seconds
})
const Page = loadable({
  loader: () => import('pages/page'),
  loading: Loading,
  timeout: 10000, // 10 seconds
})
const Counter = loadable({
  loader: () => import('pages/Counter'),
  loading: Loading,
  timeout: 10000, // 10 seconds
})
const NotFound = loadable({
  loader: () => import('pages/notfound'),
  loading: Loading,
  timeout: 10000, // 10 seconds
})

const getRouter = () => (
  <Switch>
    {/*<Route exact path="/" component={Home}/>*/}
    <Route path="/page" component={Page}/>
    <Route path="/login" component={Login}/>
    <Route path="/counter" component={Counter}/>
    <Redirect to="/login"/>
    <Route component={NotFound}/>
  </Switch>
);

export default getRouter;
