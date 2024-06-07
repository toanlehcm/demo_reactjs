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

  // Only show error when has error.
  const hasError = errors[name];

  return (
    <Controller
      name={name}
      control={form.control}
      render={(
        { field }, //onChange, onBlur, value, name,
      ) => (
        <TextField
          {...field}
          // name={name}
          // value={value}
          // onChange={onChange}
          // onBlur={onBlur}
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
