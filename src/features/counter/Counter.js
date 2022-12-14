import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement, selectCount } from './counterSlice';

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <button
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      <h1>
        <span>{count}</span>
      </h1>
      
      <button
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
    </div>
  );
}
