import { render, screen } from "@testing-library/react";
import { Key } from "../key/key";
import { Keyboard } from "./keyboard";
import { Provider } from "react-redux";
import { store } from "../../store";

describe("Given the Keyboard component", () => {
  describe("When it is rendered", () => {
    test("Then it should appear in the screen", () => {
      render(
        <Provider store={store}>
          <Keyboard>
            <Key></Key>
          </Keyboard>
        </Provider>
      );
      const element = screen.getByText(/1/);
      expect(element).toBeInTheDocument();
    });
  });
});
