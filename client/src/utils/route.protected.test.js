import ProtectedRoute from "./route.protected";
import renderer from "react-test-renderer";
import fakeAuth from "./auth.service";

jest.mock("./auth.service");

test("should return A", () => {
  fakeAuth.isAuthenticated.mockResolvedValue(true);
  it("renders correctly", () => {
    const tree = renderer.create(<ProtectedRoute />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
