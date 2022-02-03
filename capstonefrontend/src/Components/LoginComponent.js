// import calendariconv1 from '../images/calendariconv1.png';
import React, { useContext, useEffect, useState } from 'react';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import { Grid, Box, TextField, Typography } from '@mui/material/';

const smartBookingText = <Typography variant='h6'>SmartBooking</Typography>;

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
	return (
		<div>
			{/* <div>cimonent</div> */}
			<Grid container>
				<Grid item>
					<CalendarViewDayIcon />
				</Grid>
				<Grid item>{smartBookingText}</Grid>
			</Grid>

			<Box>
				<div>Business Account</div>
				<div>Login to your account</div>
			</Box>

			<Grid contianer direction='row' justifyContent='center' alignItems='center'>
				<Grid item>{userNameTextField}</Grid>
				<Grid item>{passwordTextField}</Grid>
			</Grid>
		</div>
	);
}

export { LoginComponent };
