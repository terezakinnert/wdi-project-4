import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Index from './components/bands/Index';
import New from './components/bands/New';
import Show from './components/bands/Show';
import UserIndex from './components/users/Index';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <main>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/bands' component={Index} />
              <Route exact path='/users' component={UserIndex} />
              <Route exact path='/bands/new' component={New} />
              <Route exact path='/bands/:id' component={Show} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
