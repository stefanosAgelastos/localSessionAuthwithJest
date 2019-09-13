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
            message: done
          });
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    return <div>Secret stuff</div>;
  }
}
export default Secret;
