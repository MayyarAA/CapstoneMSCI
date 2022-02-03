import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import { Grid, Box, TextField, Button, Typography } from '@mui/material/';
const smartBookingText = <Typography variant='h6'>SmartBooking</Typography>;
function SmartBookingToolbarComponent() {
	let CalendarPlusText = (
		<Grid container>
			<Grid item>
				<CalendarViewDayIcon />
			</Grid>
			<Grid item>{smartBookingText}</Grid>
		</Grid>
	);

	return <div>{CalendarPlusText}</div>;
}

export { SmartBookingToolbarComponent };
