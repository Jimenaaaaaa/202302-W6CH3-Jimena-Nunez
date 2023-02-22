import { Display } from "../display/display";

export function Actions() {
  return (
    <div className="actions">
      <Display></Display>
      <button className="call">Call</button>
      <button className="hang active">Hang</button>
    </div>
  );
}
