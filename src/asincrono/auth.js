import { login } from "../actions/auth";
import { firebase, googleAuthProivder } from '../firebase/firebase-config';

export const startLoginEmailPaasword = (email, password) => {
  return (dispatch) => {
    
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