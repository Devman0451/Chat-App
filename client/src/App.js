import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom'

import './App.css';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Route path="/Dashboard" component={Dashboard}/>
      <Route path="/SignUp" component={SignUp}/>
      <Route path="/" exact component={SignIn}/>
    </BrowserRouter>
  );
}

export default App;
