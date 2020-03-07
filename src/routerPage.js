import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import NavBAr from './pages/navigation/nav';

class RouterPage extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBAr />
          <Switch>
            <Route exact path="/" componenet={Home} />
            <Route exact path="/pages/home/home" component={Home} />
            <Route exact path="/pages/about/about" component={About} />
            <Route exact path="/pages/contact/contact" component={Contact} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default RouterPage;
