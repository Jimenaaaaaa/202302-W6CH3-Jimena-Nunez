import { Display } from "../display/display";

export function Actions() {
  return (
    <div className="actions">
      <Display></Display>
      <a href="#" className="call">
        Call
      </a>
      <a href="#" className="hang active">
        Hang
      </a>
    </div>
  );
}
