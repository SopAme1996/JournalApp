import React from 'react'
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { startRegisterWithEmailPasswordName } from "../../asincrono/auth";
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { setError, removeError } from '../../actions/ui';



export const RegisterScreen = () => {

  const dispatch = useDispatch();
  const { msError } = useSelector(state => state.ui);

  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formValues;

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(startRegisterWithEmailPasswordName(email, password, name));
    }
  }

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError('Name is required'));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError('Email is required'));
      return false;
    } else if (password !== password2 || password.trim().length < 5) {
      dispatch(setError('Password should be at least 6 characters and match other'));
      return false;
    }

    dispatch(removeError());
    return true;
  }

  return (
    <>
      <h3 className="auth__title mb-5">Register</h3>
      <form onSubmit={handleRegisterSubmit} className="animate__animated animate__fadeIn animate__faster">
        {
          msError && <div className="auth__alert-error">{msError}</div>
        }
        <input
          type="text"
          placeholder="Nombre"
          name="name"
          className="auth__input"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />

        <input
          type="email"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          value={password}
          onChange={handleInputChange}
        />

        <input
          type="password"
          placeholder="Confirm password"
          name="password2"
          className="auth__input"
          value={password2}
          onChange={handleInputChange}
        />

        <button type="submit" className="btn btn-primary btn-block mb-5">
          Login
        </button>

        <Link to="/auth/login" className="link">
          Already registered?
        </Link>
      </form>
    </>
  );
}
