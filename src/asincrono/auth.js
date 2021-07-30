import { login, logout } from "../actions/auth";
import { startLoading, finishLoading, setError } from "../actions/ui";
import { firebase, googleAuthProivder } from '../firebase/firebase-config';
import { notesLogout } from "../actions/notes";

export const startLoginEmailPaasword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    firebase.auth().signInWithEmailAndPassword(email, password).then(({ user }) => {
      dispatch(login(user.uid, user.displayName));
      dispatch(finishLoading());
    }).catch(err => {
      dispatch(finishLoading());
      dispatch(setError(err));
    })
  };
};


export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(async ({ user }) => {
      await user.updateProfile({ displayName: name });
      dispatch(login(user.uid, user.displayName));
    }).catch(err => {
      dispatch(setError(err.message));
    })
  }
}


export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase.auth().signInWithPopup(googleAuthProivder)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      }).catch((err) => {
        dispatch(setError(err));
      })

  }
}

export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch(logout());
    dispatch(notesLogout());
  };
};