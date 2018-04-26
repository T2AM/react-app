import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import FrontPage from './front_page';
import Profile from './profile';
import Projects from './components/projects';

export default class Main extends Component {
  constructor() {
    super()
    this.state = {
      maintainer: {},
      projects: []
    }
  }

  fetchMaintainer = (maintainerId, fn) => {
    fetch(`/path/to/maintainer/${maintainerId}`)
    .then(res => res.json())
    .then(json => fn(json))
  }

  fetchProject = (projectId, fn) => {
    fetch(`/path/to/projectData/${projectId}`)
    .then(res => {
      if (res.ok) return res.json
      // also check for errors here, handle not-ok res codes
    }).then(json => {
      fn(json)
    })
  }

  render() {
    return (
      <Switch>
        <Route path="/frontpage" component={ FrontPage } />
        <Route
          path={ `/profile/${this.state.maintainer.maintainerId}` }
          component={ Profile }
        />
        <Route
          path="/projects"
          component={ Projects }
        />
      </Switch>
    )
  }
}
