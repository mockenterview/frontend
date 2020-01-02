import React from "react";
import { Formik, Field, Form, useFormik, ErrorMessage, withFormik, useField } from "formik";
import * as Yup from "yup";
import { Container, Row, Col, Label } from 'reactstrap';
import axios from 'axios';
import {Link} from 'react-router-dom';

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <>
      <label className="checkbox">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // spread into <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};



const Register = ({ values, errors, touched, status }) => {


  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '' }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
        password: Yup.string()
        .min(8, 'Must be more than 8 characters')
        .required('Required'),
        acceptedTerms: Yup.boolean()
        .required('Required')
        .oneOf([true], 'You must accept the terms and conditions to continue')
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>

        <MyTextInput 
        label="First Name"
        name="firstName"
        type="text"
        placeholder="First Name"
        />

        <MyTextInput
        label="Last Name"
        name="lastName"
        type="text"
        placeholder="Last Name"
        />

        <MyTextInput 
        label="Email"
        name="email"
        type="email"
        placeholder="youremail@email.com"
        />

        <MyTextInput
        label= "Password"
        name="password"
        type="password"
        />

        <MyCheckbox name="acceptedTerms">
            I accept the terms and conditions
        </MyCheckbox>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
export default Register