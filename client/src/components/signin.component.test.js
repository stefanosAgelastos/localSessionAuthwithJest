import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import Signin from "./signin.component";
import authServices from "../utils/auth.service";
import { AuthContext } from "../utils/auth.context";


it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Signin />, div);
});

/* TODO: still working on this test */
it("sets the username in AuthContext when authServices return the username", done => {
  const promise = new Promise((resolve, reject) =>
    setTimeout(
      () =>
        resolve({
          username: "fakeuser"
        }),
      100
    )
  );
  authServices.authenticate = jest.fn(() => promise);
  const setUserMock = jest.fn();
  const wrapper = mount(
    <AuthContext.Provider value={{setUserName: setUserMock}}>
      <Signin />
    </AuthContext.Provider>
  );
  /* expect(wrapper.find("li").length).toEqual(0); */
  promise.then(() => {
    setImmediate(() => {
      expect(setUserMock.mock.calls.length).toEqual(1)
      authServices.authenticate.mockClear();
      done();
    });
  });
});
