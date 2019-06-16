import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import IndexPage from './pages/IndexPage';
import UserListPage from './pages/UserListPage';
import AddUserPage from './pages/AddUserPage';
import UserInfoPage from './pages/UserInfoPage';
import ReportPage from './pages/ReportPage';
import NotFoundPage from './pages/NotFoundPage';

const AppRouter = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={IndexPage} />
      <Route path="/user-list" component={UserListPage} />
      <Route path="/add-user" component={AddUserPage} />
      <Route path="/user/:id" component={UserInfoPage} />
      <Route path="/report" component={ReportPage} />
      <Route path="/" component={NotFoundPage} />
    </Switch>
  </Router>
);

export default AppRouter;
