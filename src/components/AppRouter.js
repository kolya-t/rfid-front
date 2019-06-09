import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Index from './Index';
import UserList from './UserList';
import AddUser from './AddUser';
import UserInfo from './UserInfo';
import Report from './Report';
import NotFound from './NotFound';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route path="/user-list" component={UserList} />
      <Route path="/add-user" component={AddUser} />
      <Route path="/user/:id" component={UserInfo} />
      <Route path="/report" component={Report} />
      <Route path="/" component={NotFound} />
    </Switch>
  </Router>
);

export default AppRouter;
