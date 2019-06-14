import React from 'react';
import Clima from './components/Clima'
import Font from './components/Font'
import BtnMostra from './components/BtnMostra'
import './App.css';


export default class App extends React.Component {
  render() {
      return (
          <div>
              <Clima />
              <Font />
              <BtnMostra />
          </div>

      )

  }
}


