import { useDispatch, useSelector } from "react-redux";
import {
  addCreator,
  deleteCreator,
} from "../../reducer/numbers.actions.creator";
import { AppDispatch, RootState } from "../../store";

export function Key() {
  const numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const dispatch = useDispatch<AppDispatch>();

  const addNumber = (number: string) => {
    dispatch(addCreator(number));
  };

  const deleteNumber = () => {
    dispatch(deleteCreator());
  };

  return (
    <>
      {numberArray.map((number: string) => (
        <li>
          <button className="key" onClick={() => addNumber(number)}>
            {number}
          </button>
        </li>
      ))}
      <li>
        <button className="key big" onClick={() => deleteNumber()}>
          delete
        </button>
      </li>
    </>
  );
}
