import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Home';
import User from './User';
import Callback from './Callback';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={Home}/>
        <Route path="/user"  component={User}/>
        <Route path="/callback" component={Callback}/>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
