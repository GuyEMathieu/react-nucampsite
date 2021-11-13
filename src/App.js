import React, {Component} from 'react'
import "./App.css";
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';

import Main from "./components/MainComponent";
import {CAMPSITES} from './shared/campsites';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      campsites: CAMPSITES
    };
  }
  render(){
    return (
      <div className="App">
        <Main  />
      </div>
    )
  }
}

export default App;
