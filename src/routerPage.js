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
            <Route path="/pages/home/home" exact component={Home} />
            <Route path="/pages/about/about" exact component={About} />
            <Route path="/pages/contact/contact" exact component={Contact} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default RouterPage;
