import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Room from './Room'

export default class Main extends Component {
  render() {
    return (
      <div>
      <Router>
        <Switch>
          <Route path="/" component={Room} />
        </Switch>
      </Router>
      </div>
    )
  }
}
