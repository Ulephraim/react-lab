/** @format */

import { useReducer } from 'react';

interface State {
  count: number;
}

interface Action {
  type: 'INCREMENT' | 'DECREMENT';
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const initialState: State = { count: 0 };

const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>
          Increment
        </button>

        <button onClick={() => dispatch({ type: 'DECREMENT' })}>
          Decrement
        </button>
        <p>{state.count}</p>
      </div>
      <div></div>
    </>
  );
};

export default UseReducerHook;
