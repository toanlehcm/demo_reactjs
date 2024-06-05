import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../LoginForm';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { login } from 'features/Auth/userSlice';
import { useSnackbar } from 'notistack';

const Login = (props) => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    try {
      // Assign the 'login' action defined in userSlice.js. Not running at this time.
      // values ​​is considered the payload sent to the action on redux.
      const action = login(values);

      // Send 'action' to redux to execute 'login' action.
      const resultAction = await dispatch(action);

      // Use unwrapResult to get results from resultAction. If successful, return user data. If failed, return error.
      const user = unwrapResult(resultAction);

      // Close dialog.
      const { closeDialog } = props;
      if (closeDialog) {
        closeDialog();
      }
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
};

Login.propTypes = {
  closeDialog: PropTypes.func,
};

export default Login;
