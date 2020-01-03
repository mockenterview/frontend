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
import { Container, Row, Button, Alert, Col } from "reactstrap";
import Axios from 'axios';


export const Login = ({ values, errors, touched, status }) => {
	return (
		<Container fluid="sm" className="reg_log_wrapper">
			<Button close />
			<Col>
				<Row>
					<h5>Sign In</h5>
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
                        Axios
                        .post(`https://mockenterview.herokuapp.com/api/login`, values)
                        .then(res => {
                          console.log("POST res", res.data);
                          localStorage.setItem("token", res.data.token);
                          localStorage.setItem("message", res.data.message);
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
							<MyTextInput name="email" type="email" placeholder="Email" />
						</Row>

						<Row>
							<MyTextInput name="password" type="password" placeholder="Password" />
						</Row>

						<Row>
							<MyCheckbox name="rememberMe"> Remember me</MyCheckbox>
						</Row>

						<Row>
							<Button color="primary" size="lg" block>
								Sign In
							</Button>
						</Row>
					</Form>
				</Formik>


{/* Skipping LinkedIn Oauth for now */}
{/* 
				<div>
					<p>or</p>
				</div>

				<Row>
					<p>Sign In With</p>
					<img src="src\images\kisspng-linkedin-business-marketing-social-networking-serv-company-profile-5ac8b49c8802a9.8421942815231028765571.png"></img>
				</Row> */}
			</Col>
		</Container>
	);
};
