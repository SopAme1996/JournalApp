import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';


import { AuthRouter } from './AuthRouter';
import { PublicRoute } from './PublicRoute';
import { PrivateRouter } from './PrivateRouter';
import { JournalScreen } from '../journal/JournalScreen';
import { firebase } from '../../firebase/firebase-config';
import { login } from '../../actions/auth';


export const AppRouter = () => {

  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggeIn, setisLoggeIn] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setisLoggeIn(true);
      } else {
        setisLoggeIn(false);
      }

      setChecking(false);
    });
  }, [dispatch, setChecking, setisLoggeIn]);

  if (checking) {
    return (
      <h1>Espere....</h1>
    )
  }

    return (
      <Router>
        <Switch>
          <PublicRoute
            path="/auth"
            component={AuthRouter}
            isAuthenticated={isLoggeIn}
          />

          <PrivateRouter
            exact
            path="/"
            component={JournalScreen}
            isAuthenticated={isLoggeIn}
          />

          <Redirect to="/auth/login" />
        </Switch>
      </Router>
    );
}

