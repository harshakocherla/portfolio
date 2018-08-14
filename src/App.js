import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';

import About from './components/About';
import Work from './components/Work';
import './App.css';

class App extends Component {
  render() {
    return (
<HashRouter>
        <div>
          <h1>Nice to meet you...</h1>
          <ul className="header">
            <li>
              <NavLink activeStyle={{ color: '#99ff99' }} to="">
                About
              </NavLink>
            </li>
            <li>
              <NavLink activeStyle={{ color: '#99ff99' }} to="/work">
                Work
              </NavLink>
            </li>
       
          </ul>
          <div>
            <Route exact path="" component={About} />
            <Route exact path="/work" component={Work} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
