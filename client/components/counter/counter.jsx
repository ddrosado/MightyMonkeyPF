import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../redux/slices';

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  console.log(counter)

  return (
    <div>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;