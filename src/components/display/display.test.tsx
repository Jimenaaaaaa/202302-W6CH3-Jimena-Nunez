import { render, screen} from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store";
import { Display } from "./display";

describe("Given the Display component", () => {
  describe("When it is rendered ", () => {
    test("Then it should appear on the screen", () => {
      render(
        <Provider store={store}>
          <Display></Display>
        </Provider>
      );
      const element = screen.getByTestId("display");
      expect(element).toBeInTheDocument();
    });
  });
});
