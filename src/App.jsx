import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  incrementAction,
  decrementAction,
  resetAction,
  updateText
} from "./store/reducers";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count.count);
  const text = useSelector((state) => state.text.text);

  function increment(step) {
    dispatch(incrementAction(step));
  }
  function decrement(step) {
    dispatch(decrementAction(step));
  }
  function reset() {
    dispatch(resetAction());
  }

  function updateTitle(value) {
    dispatch(updateText(value));
  }
  return (
    <>
      <h1>
        {text} {count}
      </h1>
      <button
        style={{ border: "solid 1px blue" }}
        onClick={() => {
          increment(Number(prompt("Insert a number step")));
        }}
      >
        Increase
      </button>
      <button
        style={{ border: "solid 1px blue" }}
        onClick={() => {
          decrement(Number(prompt("Insert a number step")));
        }}
      >
        Decrease
      </button>
      <button style={{ border: "solid 1px blue" }} onClick={reset}>
        Reset
      </button>
      <button
        style={{ border: "solid 1px blue" }}
        onClick={() => {
          updateTitle(prompt("Add new text for the title"));
        }}
      >
        Update Text
      </button>
    </>
  );
}

export default App;
