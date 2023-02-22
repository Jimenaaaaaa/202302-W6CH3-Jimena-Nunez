/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";
import { Key } from "./key";
import { Provider } from "react-redux";
import { store } from "../../store";
import userEvent from "@testing-library/user-event";

describe("Given the Key component", () => {

  const mockAdd = require("../../reducer/numbers.actions.creator").addCreator;

  beforeEach(() => {
    render(
      <Provider store={store}>
        <Key></Key>
      </Provider>
    );
  });

  describe("When it is rendered", () => {
    test("Then it should appear in the screen", () => {
      const element = screen.getByText(/1/);
      expect(element).toBeInTheDocument();
    });
  });

  describe("When we click a number", () => {
    test("Then it should call the addNumber function", () => {
      jest.mock("../../reducer/numbers.actions.creator", () => ({
        addCreator: mockAdd,
      }));

      const deleteMock = jest.fn();

      userEvent.click(screen.getByText("1"));
      expect(mockAdd).toHaveBeenCalled();
    });
  });
});
