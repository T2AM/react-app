import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import FrontPage from 'front_page';
import Profile from 'profile';

const Main = () => {
  return (
    <Switch>
      <Route path="/frontpage" component="FrontPage" />
      <Route path="/profile/:id" component="Profile" />
    </Switch>
  )
}
