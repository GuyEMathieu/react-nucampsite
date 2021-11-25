import React, {Component} from 'react'
import "./App.css";
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';

import Main from "./components/MainComponent";
import {CAMPSITES} from './shared/campsites';

import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
const store = ConfigureStore();

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      campsites: CAMPSITES
    };
  }
  render(){
    return (
      <Provider store={store}>
        <div className="App">
          <Main  />
        </div>
      </Provider>
    )
  }
}

export default App;
