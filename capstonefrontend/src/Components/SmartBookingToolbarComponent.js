import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import sb1 from '../images/sb1main.png';
import { Grid, Box, TextField, Button, Typography } from '@mui/material/';
const smartBookingText = <Typography variant='h6'>SmartBooking</Typography>;
function SmartBookingToolbarComponent() {
	let CalendarPlusText = (
		<Grid container>
			<Grid item>
				{/* <CalendarViewDayIcon /> */}
				<img height='25vh' src={sb1} />
			</Grid>
			<Grid item>{smartBookingText}</Grid>
		</Grid>
	);

	return <div>{CalendarPlusText}</div>;
}

export { SmartBookingToolbarComponent };
