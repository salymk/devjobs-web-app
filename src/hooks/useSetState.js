import React, { useReducer } from "react";

// Learned this custom hook from frontend masters course:
// State Management in Pure React, v2

// merge the previous state with updated state
const reducer = (previousState = {}, updatedState = {}) => {
  return { ...previousState, ...updatedState };
};

const useSetState = (initialState = {}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // take the updated state and dispatch it
  const setState = (updatedState) => dispatch(updatedState);

  return [state, setState];
};

export default useSetState;
