import React from 'react'

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../journal/JournalScreen';


export const AppRouter = () => {
    return (
      <Router>

        {/* <div>
          <nav>
            <ul>
              <li>
                <Link to="/"></Link>
              </li>
            </ul>
          </nav>
        </div> */}

        <Switch>
          <Route path="/auth">
            <AuthRouter />
          </Route>

          <Route exact path="/">
            <JournalScreen />
          </Route>

          <Redirect to = '/auth/login'/>

        </Switch>
      </Router>
    );
}

