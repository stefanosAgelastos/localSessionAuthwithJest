import React from "react";
import authServices from "../utils/auth.service";

class Secret extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "loading"
    };
  }

  componentDidMount() {
    authServices
      .secret()
      .then(done => {
        console.log("secret promise: ", done);
        if (done) {
          this.setState({
            message: done.message
          });
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    return <div>{this.state.message}</div>;
  }
}
export default Secret;
