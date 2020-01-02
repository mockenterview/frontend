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
import { Container, Row, Button, Alert } from "reactstrap";

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
			<label htmlFor={props.id || props.name}>{label}</label>
			<input className="text-input" {...field} {...props} />
			{meta.touched && meta.error ? (
				<div className="error">{meta.error}</div>
			) : null}
		</>
	);
};

export const Register = ({ values, errors, touched, status }) => {
	return (
		<Container fluid="sm" className="register_wrapper">
			<Row>
				<h3>Sign Up</h3>
			</Row>
			<Row>
				<a href="/login">Already have an account?</a>
			</Row>
			<Formik
				initialValues={{ firstName: "", lastName: "", email: "" }}
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
					acceptedTerms: Yup.boolean()
						.required("Required")
						.oneOf([true], "You must accept the terms and conditions to continue")
				})}
				onSubmit={(values, { setSubmitting }) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
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
					</Row>

					<Row>
						<MyTextInput name="confirmPassword" placeholder="Confirm Password" />
					</Row>

					<Row>
						<MyCheckbox name="acceptedTerms">
							I accept the terms and conditions
						</MyCheckbox>
					</Row>

					<Button type="submit" color="primary" size="lg">Submit</Button>
				</Form>
			</Formik>

			<div>
				<p>or</p>
			</div>

			<Row>
				<p>Sign Up With</p>
			</Row>
		</Container>
	);
};
