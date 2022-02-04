import * as React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import searchbackimage from '../../images/searchbackimage.png';
// import { Container, Row, Col } from 'react-bootstrap';
import { Box, Grid, Paper } from '@mui/material/';
function SearchHomeComponent() {
	return (
		<div>
			<Container>
				<Row className='align-items-center'>
					<Col
						xs={{ span: 12, order: 2 }}
						md={{ span: 6, order: 1 }}
						lg={{ span: 8, order: 1 }}>
						<FreeSoloCreateOptionDialog />
					</Col>
				</Row>
				<Row className='align-items-center'>
					<Col
						className='text-center'
						xs={{ span: 12, order: 1 }}
						md={{ span: 6, order: 2 }}
						lg={{ span: 3, order: 1 }}>
						{searchHomePageBackImageComponent}
					</Col>
				</Row>
			</Container>

			{/* <Grid container justify='center'>
				<Grid item>
					<FreeSoloCreateOptionDialog />
				</Grid>
				<Grid item>{searchHomePageBackImageComponent}</Grid>
			</Grid>  */}

			<br />
		</div>
	);
}
const myDivStyle = {
	flex: 1000,
	width: 1000,
};
const searchHomePageBackImageComponent = (
	<div style={myDivStyle}>
		<img height='350 vh' src={searchbackimage} />
	</div>
);

export { SearchHomeComponent };

const filter = createFilterOptions();

function FreeSoloCreateOptionDialog() {
	const navigate = useNavigate();
	const [value, setValue] = React.useState(null);
	const [open, toggleOpen] = React.useState(false);

	const handleClose = () => {
		setDialogValue({
			title: '',
			year: '',
		});

		toggleOpen(false);
	};

	const [dialogValue, setDialogValue] = React.useState({
		title: '',
		year: '',
	});

	const handleSubmit = (event) => {
		event.preventDefault();
		setValue({
			title: dialogValue.title,
			year: parseInt(dialogValue.year, 10),
		});

		handleClose();
	};

	return (
		<React.Fragment>
			<Autocomplete
				value={value}
				onClick={() => {
					console.log('here');
				}}
				onChange={(event, newValue) => {
					if (typeof newValue === 'string') {
						console.log('here string ');
						// timeout to avoid instant validation of the dialog's form.
						setTimeout(() => {
							toggleOpen(true);
							setDialogValue({
								title: newValue,
								year: '',
							});
						});
					} else if (newValue && newValue.inputValue) {
						toggleOpen(true);
						setDialogValue({
							title: newValue.inputValue,
							year: '',
						});
						// const() => {
						console.log('here');
						// };
					} else {
						navigate('/ServiceProviderallservices');
						console.log('here else');
						setValue(newValue);
					}
				}}
				filterOptions={(options, params) => {
					const filtered = filter(options, params);
					return filtered;
				}}
				id='free-solo-dialog-demo'
				options={top100Films}
				getOptionLabel={(option) => {
					// e.g value selected with enter, right from the input
					if (typeof option === 'string') {
						return option;
					}
					if (option.inputValue) {
						return option.inputValue;
					}
					return option.title;
				}}
				selectOnFocus
				clearOnBlur
				handleHomeEndKeys
				renderOption={(props, option) => <li {...props}>{option.title}</li>}
				sx={{ width: 1000 }}
				freeSolo
				renderInput={(params) => <TextField {...params} label='Free solo dialog' />}
			/>
		</React.Fragment>
	);
}

const top100Films = [
	{ title: 'golden style', year: 1994 },
	{ title: 'chateau GC', year: 1972 },
	{ title: 'prettylittlethings shop', year: 1974 },
	{ title: 'colourexperts', year: 2008 },
	{ title: 'studio one', year: 1957 },
	{ title: 'educo', year: 1993 },
	{ title: 'dsquare', year: 1994 },
	{
		title: 'evolve',
		year: 2003,
	},

	{ title: 'One Place', year: 1975 },
	{ title: 'Happy Place', year: 1990 },
	{ title: 'HighOnes', year: 1999 },
	{ title: 'Seven', year: 1954 },
	{
		title: 'The one',
		year: 1977,
	},
];
