import {
	Toolbar,
	AppBar,
	Button,
	Typography,
	Tabs,
	Grid,
	FormHelperText,
	IconButton,
	Box,
} from '@mui/material/';
import { SmartBookingToolbarComponent } from './SmartBookingToolbarComponent.js';
import { Container, Row, Col } from 'react-bootstrap';
import { makeStyles } from '@mui/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import FacebookIcon from '@mui/icons-material/Facebook';
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},

	title: {
		flexGrow: 1,
	},
	items: {
		fontSize: 40,
	},
	Appbartheme: { background: '#ffcccb' },
}));
function FooterComponent() {
	const classes = useStyles();
	const toolBar = (
		<div>
			{/* <div className={classes.root}> */}
			<AppBar
				className={classes.Appbartheme}
				// position='static'

				style={{ top: 'auto', bottom: 0 }}>
				<Toolbar>
					<Grid container>
						<Grid item>
							<SmartBookingToolbarComponent />
						</Grid>
						{/* <Grid item>Name</Grid> */}
					</Grid>
					<Grid container>
						<Grid item>{/* <InstagramIcon /> */}</Grid>
						<Grid item>{/* <PinterestIcon /> */}</Grid>
					</Grid>
					<Grid container>
						<Grid item>{/* <InstagramIcon /> */}</Grid>
						<Grid item>{/* <PinterestIcon /> */}</Grid>
					</Grid>
					<Grid container>
						<Grid item>{/* <InstagramIcon /> */}</Grid>
						<Grid item>{/* <PinterestIcon /> */}</Grid>
					</Grid>
					<Grid container>
						<Grid item>{/* <InstagramIcon /> */}</Grid>
						<Grid item>{/* <PinterestIcon /> */}</Grid>
					</Grid>
					<Grid container>
						<Grid item>{/* <InstagramIcon /> */}</Grid>
						<Grid item>{/* <PinterestIcon /> */}</Grid>
					</Grid>
					<Grid container>
						<Grid item>
							<InstagramIcon />
						</Grid>
						<Grid item>
							<PinterestIcon />
						</Grid>
						<Grid item>
							<FacebookIcon />
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
			{/* </div> */}
		</div>
	);
	// <Container fluid>
	// 	<Row>
	// 		{/* <Col>Contact Us</Col> */}
	// 		<Col>
	// 			<div>
	// 				<InstagramIcon />
	// 			</div>
	// 		</Col>
	// 		<Col>
	// 			<div>
	// 				<PinterestIcon />
	// 			</div>
	// 		</Col>
	// 		<Col>
	// 			<div>
	// 				<FacebookIcon />
	// 			</div>
	// 		</Col>
	// 	</Row>
	// </Container>

	// return <NavBar />;
	return toolBar;
}

const toolBar2 = (
	<div>
		{/* <div className={classes.root}> */}
		<Container fluid>
			<Grid container>
				<Grid item>
					<SmartBookingToolbarComponent />
				</Grid>
				{/* <Grid item>Name</Grid> */}
			</Grid>
			<Container fluid>
				<Row>
					{/* <Col>Contact Us</Col> */}
					<Col>
						<div>
							<InstagramIcon />
						</div>
					</Col>
					<Col>
						<div>
							<PinterestIcon />
						</div>
					</Col>
					<Col>
						<div>
							<FacebookIcon />
						</div>
					</Col>
				</Row>
			</Container>
		</Container>
		{/* </div> */}
	</div>
);

export { FooterComponent };
