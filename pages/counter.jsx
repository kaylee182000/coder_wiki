import React from "react";
import { useDispatch, useSelector } from "react-redux";
//import { increment } from "../redux/Reducers/counterReducer";

export default function counter() {
  const value = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <h2>counter: {value}</h2>
      <button
        onClick={() => {
          const action = {
            type: "counterReducer/increment",
            payload: value + 1,
          };

          //console.log(action);
          dispatch(action);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          const action = {
            type: "counterReducer/decrement",
            payload: value - 1,
          };

          //console.log(action);
          dispatch(action);
        }}
      >
        -
      </button>
    </div>
  );
}
