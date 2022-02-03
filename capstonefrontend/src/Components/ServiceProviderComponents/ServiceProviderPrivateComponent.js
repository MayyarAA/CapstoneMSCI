import React, { useContext, useEffect, useState } from 'react';
import {
	Grid,
	Box,
	TextField,
	Button,
	Typography,
	InputLabel,
	MenuItem,
	FormControl,
	Select,
	Slider,
} from '@mui/material/';
import { Container, Row, Col } from 'react-bootstrap';
const AddServicesText = <Typography variant='h5'>Add Services</Typography>;
const SliderTimeText = <Typography variant='h7'>Time(Minutes)</Typography>;
const cancelButtonText = <Typography variant='h7'>Cancel</Typography>;
const saveButtonText = <Typography variant='h7'>Save</Typography>;
function valuetext(value) {
	return `${value} min`;
}
function ServiceProviderPrivateComponent() {
	const [serviceName, setServiceName] = useState(' ');
	const [minPrice, setMinPrice] = useState();
	const [maxPrice, setMaxPrice] = useState();
	const [timeNeeded, setTimeNeeded] = useState();
	let serviceFullComponent = <div></div>;
	let serviceNameTextField = (
		<div>
			<TextField
				required
				id='outlined-required'
				value={serviceName}
				label='service name'
				onChange={(e) => {
					setServiceName(e.target.value);
				}}
			/>
		</div>
	);
	let minPriceComponent = (
		<div>
			<TextField
				required
				id='outlined-required'
				value={minPrice}
				label='min price'
				onChange={(e) => {
					setMinPrice(e.target.value);
				}}
			/>
		</div>
	);
	let maxPriceComponent = (
		<div>
			<TextField
				required
				id='outlined-required'
				value={maxPrice}
				label='max price'
				onChange={(e) => {
					setMaxPrice(e.target.value);
				}}
			/>
		</div>
	);

	let serviceTimeComponent = (
		<FormControl fullWidth>
			<InputLabel id='demo-simple-select-label'>service time</InputLabel>
			<Select
				labelId='demo-simple-select-label'
				id='demo-simple-select'
				value={timeNeeded}
				label='service time'
				onChange={(e) => {
					setTimeNeeded(e.target.value);
				}}>
				<MenuItem value={10}>10 min</MenuItem>
				<MenuItem value={15}>15 min</MenuItem>
				<MenuItem value={30}>30 min</MenuItem>
				<MenuItem value={45}>45 min</MenuItem>
				<MenuItem value={60}>60 min</MenuItem>
			</Select>
		</FormControl>
	);
	let serviceTimeComponentV2Slider = (
		<div>
			<Slider
				aria-label='Custom marks'
				defaultValue={20}
				getAriaValueText={valuetext}
				step={10}
				valueLabelDisplay='auto'
				marks={marks}
			/>
		</div>
	);

	let priceRangeComponent = (
		<div>
			<Row>
				<Col>{minPriceComponent}</Col>
				<Col>{maxPriceComponent}</Col>
				<Col>
					<Box>{SliderTimeText}</Box>
					<Box>{serviceTimeComponentV2Slider}</Box>
				</Col>
			</Row>
		</div>
	);

	let cancelButton = (
		<div>
			<Button onClick={() => {}} variant='outlined'>
				{cancelButtonText}
			</Button>
		</div>
	);
	let saveButton = (
		<div>
			<Button onClick={() => {}} variant='outlined'>
				{saveButtonText}
			</Button>
		</div>
	);
	return (
		<div>
			<Container>
				<div>{AddServicesText}</div>
				<Row>
					<Col>
						<div>{serviceNameTextField}</div>
					</Col>
					<Col>{priceRangeComponent}</Col>
				</Row>
				<Row xs={2} md={2}>
					<Col>{cancelButton}</Col>
					<Col>{saveButton}</Col>
				</Row>
			</Container>
		</div>
	);
}
export { ServiceProviderPrivateComponent };

const marks = [
	{
		value: 0,
		label: '0 ',
	},
	{
		value: 20,
		label: '20',
	},
	{
		value: 40,
		label: '40',
	},
	{
		value: 60,
		label: '60',
	},
	{
		value: 100,
		label: '5 ',
	},
];
