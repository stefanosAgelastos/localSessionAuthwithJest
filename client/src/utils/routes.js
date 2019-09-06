import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const createRoutes = () => (
    <Router>
      <Route exact path="/" component={Template1}/>
      <Route exact path="/signin" component={Template2}/>
      <Route exact path="/signup" component={Template3}/>
    </Router>
);

export default createRoutes;