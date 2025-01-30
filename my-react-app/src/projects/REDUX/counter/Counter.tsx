/** @format */

import { AppDispatch, RootState } from '../store';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, incrementAysnc, incrementByAmount } from './CounterSlice';

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h1>Redux Project</h1>
      <h2>{count}</h2>
      <div>
        <button
          className="btn-primary"
          onClick={() => dispatch(incrementByAmount(10))}
        >
          Increment
        </button>
        <button className="btn-secondary" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button
          className="btn-primary"
          onClick={() => dispatch(incrementAysnc(15))}
        >
          Increment Async
        </button>
      </div>
    </div>
  );
};

export default Counter;
