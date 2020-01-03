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

import { MyTextInput, MyCheckbox } from "../Register/Register";
import { Container, Row, Button, Alert } from "reactstrap";

export const Login = ({ values, errors, touched, status }) => {
	return (
		<Container size="md">
			<Row>
				<h3>Sign In</h3>
			</Row>

            <Row>
				<a href="/register">Not a member?</a>
            </Row>

			<Formik
				initialValues={{ email: "" }}
				validationSchema={Yup.object({
					email: Yup.string()
						.email("Invalid email address")
						.required(<Alert color="warning">Email Required!</Alert>),
					password: Yup.string().required(
						<Alert color="warning">Password Required!</Alert>
					),
					rememberMe: Yup.boolean()
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
						<MyTextInput name="email" type="email" placeholder="Email" />
					</Row>

					<Row>
						<MyTextInput name="password" type="password" placeholder="Password" />
					</Row>

					<Row>
						<MyCheckbox name="rememberMe"> Remember me</MyCheckbox>
					</Row>

					<Row>
						<Button color="primary" size="lg">
							Sign In
						</Button>{" "}
					</Row>
				</Form>
			</Formik>

			<Row>
				<p>or</p>
			</Row>

			<Row>
				<p>Sign In With</p>
			</Row>
		</Container>
	);
};
