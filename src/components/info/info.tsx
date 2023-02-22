import { Actions } from "../actions/actions";
import { Key } from "../key/key";
import { Keyboard } from "../keyboard/keyboard";

export function Info() {
  return (
    <div className="container">
      <span className="message"> Calling...</span>
      <main className="phone">
        <Keyboard>
          <Key></Key>
        </Keyboard>
        <Actions></Actions>
      </main>
    </div>
  );
}
