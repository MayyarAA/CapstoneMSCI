// import calendariconv1 from '../images/calendariconv1.png';
import React, { useContext, useEffect, useState } from 'react';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import { Grid, Box, TextField, Button, Typography } from '@mui/material/';
import loginpageiconv1 from '../images/loginpageiconv1.png';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { ServiceProviderPrivatePage } from '../Pages/ServiceProviderPages/ServiceProviderPrivatePage.js';
import '../App.css';
const smartBookingText = <Typography variant='h6'>SmartBooking</Typography>;
const BusinessAccountText = <Typography variant='h3'>Business Account</Typography>;
const LoginText = <Typography variant='h4'>Login to your account</Typography>;
const emailText = <Typography variant='h7'>email</Typography>;
const passwordText = <Typography variant='h7'>password</Typography>;
const loginButtonText = <Typography variant='h7'>Login</Typography>;
const registerButtonText = <Typography variant='h7'>Register</Typography>;

function LoginComponent() {
	const [userName, setUserName] = useState(' ');
	const [password, setPassword] = useState(' ');
	let userNameTextField = (
		<div>
			<TextField
				required
				id='outlined-required'
				value={userName}
				label='email'
				onChange={(e) => {
					setUserName(e.target.value);
				}}
			/>
		</div>
	);
	let passwordTextField = (
		<div>
			<TextField
				required
				id='outlined-required'
				value={password}
				label='password'
				onChange={(e) => {
					setPassword(e.target.value);
				}}
			/>
		</div>
	);
	let loginButton = (
		<div>
			<Link to='/ServiceProviderPrivatePage'>
				<Button
					onClick={() => {
						// AddNewUserLinksService(linkNameValue, linkURLValue, linkImageValue, userObject);
						// setUserSubmittingNewLink(false);
						// setRenderUserLinksUserInput(false);
					}}
					variant='outlined'>
					{loginButtonText}
				</Button>
			</Link>
		</div>
	);
	let registerButton = (
		<div>
			<Button onClick={() => {}} variant='outlined'>
				{registerButtonText}
			</Button>
		</div>
	);
	return (
		<div className='section'>
			<div className='section-content'>
				<Container>
					<Row className='align-items-center'>
						<Col
							xs={{ span: 12, order: 2 }}
							md={{ span: 6, order: 1 }}
							lg={{ span: 8, order: 1 }}>
							<div>{BusinessAccountText}</div>
							<div>{LoginText}</div>

							{emailText}
							<br />
							{userNameTextField}
							<br />
							{passwordText}
							<br />
							{passwordTextField}

							{loginButton}
							{registerButton}
						</Col>
						<Col
							className='text-center'
							xs={{ span: 12, order: 1 }}
							md={{ span: 6, order: 2 }}
							lg={{ span: 3, order: 1 }}>
							<img src={loginpageiconv1} height='200px' />
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
}

export { LoginComponent };
