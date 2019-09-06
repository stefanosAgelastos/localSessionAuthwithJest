import React from 'react'
import ProtectedRoute from "./route.protected";
import renderer from "react-test-renderer";
import fakeAuth from "./auth.service";

jest.mock("./auth.service");

test("should return Redirect when Auth is false", () => {
  const tree = renderer.create(<ProtectedRoute />).toJSON();
  expect(tree).toMatchSnapshot();
});
