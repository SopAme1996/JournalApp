import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useDispatch } from "react-redux";
import { startLoginEmailPaasword, startGoogleLogin } from '../../asincrono/auth';


export const LoginScreen = () => {

  const dispatch = useDispatch();

  const [ formValues, handleInputChange] = useForm({
    email: '',
    password: '',
  });

  const { email, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
     dispatch(startLoginEmailPaasword(email, password));
  }

  const handleGoogleSubmit = (e) => {
    e.preventDefault();
    dispatch(startGoogleLogin());
  }

    return (
      <>
        <h3 className="auth__title mb-5">Login</h3>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" name="email" className='auth__input' autoComplete='off' value={ email } onChange={handleInputChange}/>
          <input type="password" placeholder="Password" name="password" className='auth__input' value={ password } onChange={handleInputChange}/>

          <button type="submit" className="btn btn-primary btn-block">Login</button>

          <div className="auth__social-networks">
            <p>Login with social netwoks</p>

            <div className="google-btn" onClick={handleGoogleSubmit}>
              <div className="google-icon-wrapper">
                <img
                  className="google-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt="google button"
                />
              </div>
              <p className="btn-text">
                <b>Sign in with google</b>
              </p>
            </div>
                </div>

                <Link to="/auth/register" className="link">
                    Create a new accout
                </Link>
        </form>
      </>
    );
}
