import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from 'components/form-controls/InputField';
import { Avatar, Box, Button, Typography } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import PasswordField from 'components/form-controls/PasswordField';

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function RegisterForm(props) {
  const schema = yup.object().shape({
    // title: yup.string().required('Please enter title').min(5, 'Title is too short'),
  });

  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    // resolver: yupResolver(schema),
  });

  const handleSubmitRegister = (values) => {
    console.log('handleSubmitRegister');
    // const { onSubmit } = props;

    // if (onSubmit) {
    //   onSubmit(values);
    // }

    // // Reset the form whether submitted successfully or not.
    // form.reset();
  };

  return (
    <Box component='div' sx={{ marginTop: 4 }}>
      <Avatar sx={{ margin: '0 auto', bgcolor: 'secondary.main' }}>
        <LockOutlined></LockOutlined>
      </Avatar>

      <Typography component='h1' variant='h5' sx={{ textAlign: 'center' }}>
        Create an account
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmitRegister)}>
        <InputField name='fullName' label='Full Name' form={form} disabled={false} />
        <InputField name='email' label='Email' form={form} disabled={false} />
        <PasswordField name='password' label='Password' form={form} disabled={false} />
        <PasswordField name='retypePassword' label='Retype Password' form={form} disabled={false} />

        <Button type='submit' variant='contained' color='primary' fullWidth sx={{ mt: 3, mb: 2 }}>
          Create an account
        </Button>
      </form>
    </Box>
  );
}

export default RegisterForm;
