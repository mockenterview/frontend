import React from "react";
import {
	Formik,
	Field,
	Form,
	useFormik,
	ErrorMessage,
	withFormik,
	useField
} from "formik";
import * as Yup from "yup";
import { Container, Row, Button, Alert, Label, FormGroup, Col, Toast, ToastBody, ToastHeader } from "reactstrap";

import Axios from 'axios';



export const MyCheckbox = ({ children, ...props }) => {
	const [field, meta] = useField({ ...props, type: "checkbox" });
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

export const MyTextInput = ({ label, ...props }) => {
	// useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
	// spread into <input> and also replace ErrorMessage entirely.
	const [field, meta] = useField(props);
	return (
		<>
			<Label htmlFor={props.id || props.name}>{label}</Label>
			<input className="text-input" {...field} {...props} />
			{meta.touched && meta.error ? (
				<div className="error">{meta.error}</div>
			) : null}
		</>
	);
};

export const Register = (props, { values, errors, touched, status }) => {

	return (
		<div className="TestLog">
	  <Container fluid="xs"  className="reg_log_wrapper">
      <Col >
      <Button close href="/" />
			<Row>
				<h5>Sign Up</h5>
			</Row>
			<Row>
				<a href="/login">Already have an account?</a>
			</Row>
			<Formik
				initialValues={{ firstName: "", lastName: "", email: "", interviewer:false }}
				validationSchema={Yup.object({
					firstName: Yup.string()
						.max(15, "Must be 15 characters or less")
						.required(<Alert color="warning">First Name Required!</Alert>),
					lastName: Yup.string()
						.max(20, "Must be 20 characters or less")
						.required(<Alert color="warning">Last Name Required!</Alert>),
					email: Yup.string()
						.email("Invalid email address")
						.required(<Alert color="warning">Email Required!</Alert>),
					password: Yup.string()
						.min(8, "Must be more than 8 characters")
            .required(<Alert color="warning">Password Required!</Alert>),
          interviewer: Yup.boolean()
          .oneOf([false, true]),
					acceptedTerms: Yup.boolean()
						.required("Required")
						.oneOf([true], <Alert color="warning">You must accept the terms and conditions to continue</Alert>)
				})}
				onSubmit={(values, { setSubmitting }) => {
          Axios
          .post(`https://mockenterview.herokuapp.com/api/register`, values)
          .then(res => {
            console.log("POST res", res);
            props.history.push("/login");
          })
          .catch(err => console.log(err));

					setTimeout(() => {
						console.log(JSON.stringify(values, null, 2));
						setSubmitting(false);
					}, 400);
				}}
			>
				<Form>
					<Row>
						<MyTextInput
							name="firstName"
							type="text"
							placeholder="First Name"
						/>
					</Row>

					<Row>
						<MyTextInput
							name="lastName"
							type="text"
							placeholder="Last Name"
						/>
					</Row>

					<Row>
						<MyTextInput
							name="email"
							type="email"
							placeholder="Email"
						/>
					</Row>

					<Row>
						<MyTextInput name="password" placeholder="Create Password"/>
						<p style>Must be at least 8 characters long, must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number </p>
					</Row>
{/* 
					<Row>
						<MyTextInput name="confirmPassword" placeholder="Confirm Password" />
					</Row> */}
          
          <Row>
            <MyCheckbox name="interviewer" >
            I'd Like to be an Interviewer
            </MyCheckbox>
          </Row>

					<Row>
						<MyCheckbox name="acceptedTerms">
							I accept the terms and conditions
						</MyCheckbox>
					</Row>

					<Button type="submit" color="primary" size="lg" block>Sign Up</Button>
				</Form>
			</Formik>

      {/* Skipping LinkedIn Oauth for now */}

			{/* <div>
				<p>or</p>
			</div>

			<Row>
				<p>Sign Up With</p>
        <img src="src\images\kisspng-linkedin-business-marketing-social-networking-serv-company-profile-5ac8b49c8802a9.8421942815231028765571.png"></img>
			</Row> */}


      </Col>
		</Container>
		</div>

	);
};
