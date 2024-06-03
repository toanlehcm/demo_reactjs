import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease } from './counterSlice'; // name import.

const CounterFeature = (props) => {
  const dispatch = useDispatch();

  // (state) is root state. Get state from redux.
  // state <=> rootReducer in file store, so state.count.
  const count = useSelector((state) => state.count);

  const handleIncreaseClick = () => {
    const action = increase(123); // functions is called 'action creator'. Basically, increase() return 1 object

    // After have action, dispatch action. Pass action to redux (action increase in counterSlice.js)
    dispatch(action);
  };

  const handleDecreaseClick = () => {
    // const action = decrease();
    dispatch(decrease());
  };

  return (
    <div>
      CounterFeature: {count}
      <div>
        <button onClick={handleIncreaseClick}>Increase</button>
      </div>
      <div>
        <button onClick={handleDecreaseClick}>Decrease</button>
      </div>
    </div>
  );
};

CounterFeature.propTypes = {};

export default CounterFeature;
