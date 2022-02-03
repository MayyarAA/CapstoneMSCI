// import calendariconv1 from '../images/calendariconv1.png';
import React, { useContext, useEffect, useState } from 'react';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import { Grid, Box, TextField, Button, Typography } from '@mui/material/';
import loginpageiconv1 from '../images/loginpageiconv1.png';
import { Container, Row, Col } from 'react-bootstrap';
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
			<Button
				onClick={() => {
					// AddNewUserLinksService(linkNameValue, linkURLValue, linkImageValue, userObject);
					// setUserSubmittingNewLink(false);
					// setRenderUserLinksUserInput(false);
				}}
				variant='outlined'>
				{loginButtonText}
			</Button>
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
		<div>
			{/* <div className='App'> */}
			<Grid container>
				<Grid item>
					<CalendarViewDayIcon />
				</Grid>
				<Grid item>{smartBookingText}</Grid>
			</Grid>
			{/* <Grid container> */}
			<Grid
				container
				// direction='column'
				// alignItems='center'
				// justify='center'
				style={{ minHeight: '100vh' }}
				spacing={1}>
				<Grid item>
					<Box>
						<div>{BusinessAccountText}</div>
						<div>{LoginText}</div>
					</Box>
					<Grid contianer direction='row' justifyContent='center' alignItems='center'>
						<Grid item>{emailText}</Grid>
						<br />
						<Grid item>{userNameTextField}</Grid>
						<br />
						<Grid item>{passwordText}</Grid>
						<br />
						<Grid item>{passwordTextField}</Grid>
					</Grid>

					<Grid
						container
						direction='row'
						// alignItems='center'
						// justify='center'
						style={{ minHeight: '100vh' }}
						spacing={2}>
						<Grid item>{loginButton}</Grid>
						<Grid item>{registerButton}</Grid>
					</Grid>
				</Grid>
				<Grid item>
					<img src={loginpageiconv1} height='200px' />
				</Grid>
			</Grid>

			{/* <img src={loginpageiconv1} /> */}

			<div></div>
		</div>
	);
}

export { LoginComponent };
