import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store";
import { Actions } from "./actions";

describe("Given the Actions component", () => {
  describe("When we render the component", () => {
    test("Then it should appear on the screen", () => {
      render(
        <Provider store={store}>
          <Actions></Actions>
        </Provider>
      );
      expect(screen.getByText(/Call/i)).toBeInTheDocument();
    });
  });
});
