import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import App from './App';
import Home from './page/Home';
import Blog from './page/Blog';
import Services from './page/Services';
import Testimonial from './page/Testimonial';
import Contact from './page/Contact';

const Root = ({ routingStore }) =>
  (
    <Router>
      <App routingStore={routingStore}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/blog' component={Blog} />
          <Route path='/services' component={Services} />
          <Route path='/testimonial' component={Testimonial} />
          <Route path='/contact' component={Contact} />
          <Route path='*' component={Home} />
        </Switch>
      </App>
    </Router>
  );


Root.propTypes = {
  routingStore: PropTypes.object.isRequired
};

export default Root;
