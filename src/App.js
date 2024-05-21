import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AuthState from './context/AuthState';
import PostState from './context/PostState';
import AuthContext from './context/auth/authContext';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import PostForm from './components/PostForm';
import Posts from './components/Posts';

const App = () => {
  return (
    <AuthState>
      <PostState>
        <Router>
          <div className="App">
            <Switch>
              <Route exact path="/" component={Auth} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/new-post" component={PostForm} />
              <Route exact path="/posts" component={Posts} />
            </Switch>
          </div>
        </Router>
      </PostState>
    </AuthState>
  );
};

export default App;

