import React from 'react';
import PropTypes from 'prop-types';
import RegisterForm from '../RegisterForm';
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit';
import { register } from 'features/Auth/userSlice';
import { useSnackbar } from 'notistack';

const Register = (props) => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (values) => {
    try {
      // Auto set username = email
      values.username = values.email;

      // Assign the 'register' action defined in userSlice.js. Not running at this time.
      // values ​​is considered the payload sent to the action on redux.
      const action = register(values);

      // Send 'action' to redux to execute 'register' action.
      const resultAction = await dispatch(action);

      // Use unwrapResult to get results from resultAction. If successful, return user data. If failed, return error.
      const user = unwrapResult(resultAction);

      // Close dialog.
      const { closeDialog } = props;
      if (closeDialog) {
        closeDialog();
      }

      // Show message successfully.
      enqueueSnackbar('Register successfully!', { variant: 'success' });
    } catch (error) {
      console.log('Failed to register: ', error);
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };

  return (
    <div>
      <RegisterForm onSubmit={handleSubmit} />
    </div>
  );
};

Register.propTypes = {
  closeDialog: PropTypes.func,
};

export default Register;
