import React from 'react';
import './App.css';
import Home from './pages/Home'
import Register from './pages/Register'
import Nav from './components/nav/Nav'
import Chat from './pages/Chat'
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Switch>
      <div>
        <Route path="/" exact component={Home}/>
        <Route path="/cadastro" component={Register}/>
        <Route path="/chat" component={Chat}/>
        <Nav/>
      </div>
    </Switch>
  );
}

export default App;
