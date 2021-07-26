import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';


import { AuthRouter } from './AuthRouter';
import { PublicRoute } from './PublicRoute';
import { PrivateRouter } from './PrivateRouter';
import { JournalScreen } from '../journal/JournalScreen';
import { firebase } from '../../firebase/firebase-config';
import { login } from '../../actions/auth';
import { loadNotes } from '../../helpers/loadNotes';
import { allNotes } from '../../actions/notes';


export const AppRouter = () => {

  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggeIn, setisLoggeIn] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async(user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setisLoggeIn(true);
        const notas = await loadNotes(user.uid);
        dispatch(allNotes(notas));
      } else {
        setisLoggeIn(false);
      }

      setChecking(false);
    });
  }, [dispatch, setChecking, setisLoggeIn]);

  if (checking) {
    return (
      <h1>Please, wait....</h1>
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

