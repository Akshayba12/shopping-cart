import React, { useContext } from 'react';
import { Field, Formik, Form } from 'formik';
import { validate } from 'schema-utils';
// import Input from '../../components/Input';
import {
  registerFields,
  registerInitvalues,
} from './registerfields';
import CustomForm from '../../components/CustomForm';
import { AuthContext } from '../../context/AuthContext';
// import Input from '../../components/Input';

// const wait = (time) =>
//   new Promise((resolve) => setTimeout(resolve, time));

function Register() {
  const { register } = useContext(AuthContext);

  return (
    <CustomForm
      initialValues={registerInitvalues}
      fields={registerFields}
      onSubmit={register}
      btnProps={{
        children: 'Sign up',
      }}
    />
  );
}

export default Register;
