import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store";
import { Info } from "./info";

describe("Given the info component ", () => {
  describe("When it is rendered ", () => {
    test("Then it should appear on the screen", () => {
      render(
        <Provider store={store}>
          <Info></Info>
        </Provider>
      );
      expect(screen.getByText(/Calling.../i)).toBeInTheDocument();
    });
  });
});
