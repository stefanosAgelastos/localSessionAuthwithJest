import React, { Component } from "react";
import MainRoutes from "../utils/routes.main";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from 'react-alert-template-basic'

// alert cofiguration
const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "30px",
  transition: transitions.SCALE
};

class App extends Component {
  render() {
    return (
      <AlertProvider template={AlertTemplate} {...options}>
        <div>
          <MainRoutes />
        </div>
      </AlertProvider>
    );
  }
}

export default App;
