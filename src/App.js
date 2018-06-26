import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

import routes from './routes';

const App = () => (
  <Router>

    <Fragment>
      <ul>
        <li>
          <NavLink to="/javascript" activeClassName="">JavaScript</NavLink>
        </li>
        <li>
          <NavLink to="/react" activeClassName="">React</NavLink>
        </li>
        <li>
          <NavLink to="/redux" activeClassName="">Redux</NavLink>
        </li>
        <li>
          <NavLink to="/react-router" activeClassName="">React Router</NavLink>
        </li>
      </ul>

      <Switch>
        {
          routes.map(route => (
            <Route
              path={route.path}
              component={route.component}
              key={route.id}
            />
          ))
        }
      </Switch>
    </Fragment>
  </Router>
)

export default App;
