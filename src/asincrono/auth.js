import { login } from "../actions/auth";
import { startLoading, finishLoading } from "../actions/ui";
import { firebase, googleAuthProivder } from '../firebase/firebase-config';

export const startLoginEmailPaasword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    firebase.auth().signInWithEmailAndPassword(email, password).then(({user}) => {
      dispatch(login(user.uid, user.displayName));
      dispatch(finishLoading());
    }).catch(err => {
      console.log(err);
      dispatch(finishLoading());
   })
  };
};


export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(email, password).then( async({ user }) => {
      await user.updateProfile({ displayName: name });
      dispatch(login(user.uid, user.displayName));
    }).catch( e => {
      console.log(e);
    })
  }
}


export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(googleAuthProivder)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));
            })

    }
}