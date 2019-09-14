import React from "react";
import authServices from "../utils/auth.service";
import ProfileWrapper from "./protectedWrapper.component";

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
    return (
      <ProfileWrapper>
        <div>{this.state.message}</div>
      </ProfileWrapper>
    );
  }
}
export default Secret;
