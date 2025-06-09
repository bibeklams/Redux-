import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  return (
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button
        onClick={handleDecrement}
        type="button"
        className="btn btn-danger"
      >
        -1
      </button>
      <button
        onClick={handleIncrement}
        type="button"
        className="btn btn-success"
      >
        +1
      </button>
    </div>
  );
};
export default Controls;
