import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import AuthorizedRoutes from "./auth.routes.main";
import Signup from "./signup.component";
import Signin from "./signin.component";
import { Route } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AuthorizedRoutes />, div);
});

let pathMap = {};
const TestComponent = () => {
  return <div>Test Component</div>;
};
describe("routes render proper components", () => {
  beforeAll(() => {
    const component = shallow(
      <AuthorizedRoutes signinComponent={Signin} signupComponent={Signup}>
        <Route exact path="/" component={TestComponent} />
      </AuthorizedRoutes>
    );
    pathMap = component.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      pathMap[routeProps.path] = routeProps.component;
      return pathMap;
    }, {});
    console.log(pathMap);
  });
  it("should show Signin component for /signin route", () => {
    expect(pathMap["/signin"]).toBe(Signin);
  });
  it("should show Signup component for /signup route", () => {
    expect(pathMap["/signup"]).toBe(Signup);
  });
  it("should show TestComponent component for child / route", () => {
    expect(pathMap["/"]).toBe(TestComponent);
  });
});
