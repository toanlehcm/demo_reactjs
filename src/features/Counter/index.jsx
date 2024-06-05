import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease } from './counterSlice'; // name import.
import { Button } from '@mui/material';

const CounterFeature = (props) => {
  const dispatch = useDispatch();

  // useSelector is used to get state from redux.
  // (state) is root state. Get state from redux.
  // state <=> rootReducer in file store, so state.count.
  const count = useSelector((state) => state.count);

  const handleIncreaseClick = () => {
    // Every time you want to send an action to redux, just call the action already defined by CounterSlice, for example increase().
    // Then dispatch this action to redux.
    // Functions is called 'action creator'. Basically, increase() return 1 object
    const action = increase(123);

    // After have action, dispatch(send) action to pass action to redux (action increase in counterSlice.js)
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
        <Button variant='contained' color='primary' onClick={handleIncreaseClick}>
          Increase
        </Button>
      </div>
      <div>
        <Button variant='contained' color='primary' onClick={handleDecreaseClick}>
          Decrease
        </Button>
      </div>
    </div>
  );
};

CounterFeature.propTypes = {};

export default CounterFeature;
