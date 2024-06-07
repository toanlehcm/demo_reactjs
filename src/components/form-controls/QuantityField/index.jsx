import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material';
import { Box, FormControl, FormHelperText, IconButton, OutlinedInput, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { Controller } from 'react-hook-form';

QuantityField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function QuantityField(props) {
  const { form, name, label, disabled } = props;
  const {
    control,
    setValue,
    formState: { errors },
  } = form;
  const hasError = errors ? !!errors[name] : false;

  return (
    <FormControl error={hasError} fullWidth margin='normal' variant='outlined' size='small'>
      <Typography>{label}</Typography>

      <Controller
        name={name}
        control={form.control}
        render={({ field }) => {
          const { onChange, onBlur, value, name } = field;

          return (
            <Box
              sx={{
                display: 'flex',
                flexFlow: 'row nowrap',
                alignItems: 'center',
                maxWidth: '200px',
              }}
            >
              <IconButton onClick={() => setValue(name, Number.parseInt(value) ? Number.parseInt(value) - 1 : 1)}>
                <RemoveCircleOutline />
              </IconButton>

              {/* <IconButton onClick={() => field.onChange(Number.parseInt(value) ? Number.parseInt(value) - 1 : 1)}>
                <RemoveCircleOutline />
              </IconButton> */}

              <OutlinedInput
                id={name}
                type='number'
                disabled={disabled}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
              />

              <IconButton
                onClick={() => {
                  setValue(name, Number.parseInt(value) ? Number.parseInt(value) + 1 : 1);
                }}
              >
                <AddCircleOutline />
              </IconButton>

              {/* <IconButton
                onClick={() => {
                  field.onChange(Number.parseInt(value) ? Number.parseInt(value) + 1 : 1);
                }}
              >
                <AddCircleOutline />
              </IconButton> */}
            </Box>
          );
        }}
      />

      {errors && <FormHelperText>{errors[name]?.message}</FormHelperText>}
    </FormControl>
  );
}

export default QuantityField;
