import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from "react-redux";
import { startLoginEmailPaasword, startGoogleLogin } from '../../asincrono/auth';
import validator from "validator";
import { setError, removeError } from "../../actions/ui";
import { viewPassword } from '../../helpers/viewPaasword';


export const LoginScreen = () => {

  const dispatch = useDispatch();
  const { loading, msError } = useSelector(state => state.ui);


  const [formValues, handleInputChange] = useForm({
    email: '',
    password: '',
  });
  const { email, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid()) {
      dispatch(startLoginEmailPaasword(email, password));
    }
  }

  const handleGoogleSubmit = (e) => {
    e.preventDefault();
    dispatch(startGoogleLogin());
  }

  const handleViewPassword = () => {
    viewPassword();
  }



  const isValid = () => {
    if (!validator.isEmail(email) || validator.isEmpty(email)) {
      dispatch(setError("Email is required"));
      return false;
    } else if (validator.isEmpty(password) || password.trim().length < 5) {
      dispatch(
        setError("Password should be at least 6 characters and match other")
      );
      return false;
    }
    dispatch(removeError());
    return true;
  }

  return (
    <>
      <h3 className="auth__title mb-5">Login</h3>
      {msError && (
        <div className="auth__alert-error">{msError.message ? msError.message : msError}</div>
      )}

      <form onSubmit={handleSubmit} className='animate__animated animate__fadeIn animate__faster'>
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />

        <div className="auth__passwordView">
          <input
            type="password"
            placeholder="Password"
            name="password"
            id='password'
            className="auth__input"
            value={password}
            onChange={handleInputChange}
          />

          <i className="far fa-eye-slash" onClick={handleViewPassword} id="viewEye"></i>
          <input type="checkbox" hidden name='viewPassword' id='viewpassword' />
        </div>


        <button
          type="submit"
          className="btn btn-primary btn-block"
          disabled={loading}
        >
          Login
        </button>

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
