import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Secret from '../components/secret.component'
import Signup from '../components/signup.component'
import Signin from '../components/signin.component'
import ProtectedRoute from '../utils/route.protected';

const MainRoutes = () => (
    <Router>
      <ProtectedRoute exact path="/" component={Secret}/>
      <Route exact path="/signin" component={Signin}/>
      <Route exact path="/signup" component={Signup}/>
    </Router>
);

export default MainRoutes;