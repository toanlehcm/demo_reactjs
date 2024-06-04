import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disabled } = props;
  const {
    control,
    formState: { errors, touchedFields },
  } = form;

  // Only show error when touched and has error.
  const hasError = touchedFields[name] && errors[name];

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field }) => (
        <TextField
          {...field}
          margin='normal'
          variant='outlined'
          fullWidth
          label={label}
          disabled={disabled}
          error={!!hasError}
          helperText={errors?.[name]?.message}
        />
      )}
    />
  );
}

export default InputField;
