import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-controls/InputField';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};

function TodoForm(props) {
  // Set the schema here for multilingual use.
  // const schema = yup
  //   .object({
  //     title: yup.string().required('Please enter title').min(5, 'Title is too short'),
  //   })
  //   .required();

  const schema = yup.object().shape({
    title: yup.string().required('Please enter title').min(5, 'Title is too short'),
  });

  const form = useForm({
    defaultValues: {
      title: '',
    },
    resolver: yupResolver(schema),
  });

  const onHandleSubmit = (values) => {
    const { onSubmit } = props;

    if (onSubmit) {
      onSubmit(values);
    }

    // Reset the form whether submitted successfully or not.
    form.reset();
  };

  return (
    <form onSubmit={form.handleSubmit(onHandleSubmit)}>
      Todo Form
      <InputField name='title' label='Todo' form={form} disabled={false} />
    </form>
  );
}

export default TodoForm;
