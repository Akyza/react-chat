import React from 'react';
import logo from './logo.svg';
import './App.css';
import {getMovies} from './exercice/apiFilm';
import Chat from './component/Chat';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//import Login from './component/Login';

function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <Router>
        <div>
          <ul>
            <li link to="/chat">Chat</li>
          </ul>
        </div>
        <Route path="/chat" exact component={Chat}/>
      </Router>
      <Chat/>
    </Provider> 
    </div>
  );
}

export default App;
