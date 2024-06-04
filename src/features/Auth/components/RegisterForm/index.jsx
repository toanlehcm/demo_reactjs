'use client';
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
    fullName: yup
      .string()
      .required('Please enter your full name.')
      .test('should has at least two words', 'Please enter at least two words.', (value) => {
        return value.split(' ').length >= 2;
      }),
    email: yup.string().required('Please enter your email.').email('Please enter a valid email.'),
  });

  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    const { onSubmit } = props;

    if (onSubmit) {
      onSubmit(values);
    }
  };

  return (
    <Box component='div' sx={{ marginTop: 4 }}>
      <Avatar sx={{ margin: '0 auto', bgcolor: 'secondary.main' }}>
        <LockOutlined></LockOutlined>
      </Avatar>

      <Typography component='h1' variant='h5' sx={{ textAlign: 'center' }}>
        Create an account
      </Typography>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name='fullName' label='Full Name' form={form} />
        <InputField name='email' label='Email' form={form} />
        <PasswordField name='password' label='Password' form={form} />
        <PasswordField name='retypePassword' label='Retype Password' form={form} />

        <Button type='submit' variant='contained' color='primary' fullWidth size='large' sx={{ mt: 3, mb: 2 }}>
          Create an account
        </Button>
      </form>
    </Box>
  );
}

export default RegisterForm;
