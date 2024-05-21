import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../context/auth/authContext';

const Auth = () => {
  const authContext = useContext(AuthContext);
  const { register, login, error, clearErrors, isAuthenticated } = authContext;

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = user;

  let history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      history.push('/dashboard');
    }

    if (error === 'User already exists') {
      clearErrors();
    }
  }, [error, isAuthenticated, history]);

  const onChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      console.log('Please enter all fields');
    } else if (password !== password2) {
      console.log('Passwords do not match');
    } else {
      register({
        name,
        email,
        password,
      });
    }
  };

  const onLogin = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      console.log('Please enter all fields');
    } else {
      login({
        email,
        password,
      });
    }
  };

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Register</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" value={name} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" value={email} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            name="password2"
            value={password2}
            onChange={onChange}
          />
        </div>
        <input
          type="submit"
          value="Register"
          className="btn btn-primary btn-block"
        />
      </form>
      <h1>
        Account <span className="text-primary">Login</span>
      </h1>
      <form onSubmit={onLogin}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" value={email} onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <input type="submit" value="Login" className="btn btn-primary btn-block" />
      </form>
    </div>
  );
};

export default Auth;


