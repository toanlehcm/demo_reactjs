'use client';
import React from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from 'components/form-controls/InputField';
import { Avatar, Box, Button, LinearProgress, Typography } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import PasswordField from 'components/form-controls/PasswordField';

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

function LoginForm(props) {
  const schema = yup.object().shape({
    identifier: yup.string().required('Please enter your email.').email('Please enter a valid email.'),
    password: yup.string().required('Please enter your password.'),
  });

  const form = useForm({
    defaultValues: {
      identifier: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    const { onSubmit } = props;

    if (onSubmit) {
      // Wait function 'handleSubmit' in component parent handle to complete.
      await onSubmit(values);
    }
  };

  // 'Submitting' status means the handleSubmit() function has finished running.
  const { isSubmitting } = form.formState;

  return (
    <Box component='div' sx={{ marginTop: 4 }}>
      {isSubmitting && <LinearProgress sx={{ position: 'absolute', top: 0, left: 0, right: 0 }} />}

      <Avatar sx={{ margin: '0 auto', bgcolor: 'secondary.main' }}>
        <LockOutlined></LockOutlined>
      </Avatar>

      <Typography component='h1' variant='h5' sx={{ textAlign: 'center' }}>
        Sign in
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name='identifier' label='Email' form={form} />
        <PasswordField name='password' label='Password' form={form} />

        <Button
          disabled={isSubmitting}
          type='submit'
          variant='contained'
          color='primary'
          fullWidth
          size='large'
          sx={{ mt: 3, mb: 2 }}
        >
          Sign in
        </Button>
      </form>
    </Box>
  );
}

export default LoginForm;
