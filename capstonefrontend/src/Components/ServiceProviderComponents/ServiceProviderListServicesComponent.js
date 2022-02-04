import {
	Grid,
	CardMedia,
	CardHeader,
	Card,
	Typography,
	IconButton,
	CardActions,
	CardContent,
	Button,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	ListItemAvatar,
	Avatar,
} from '@mui/material/';
import { Container, Row, Col } from 'react-bootstrap';
import haircut from '../../images/haircut.png';
import nailcolour from '../../images/nailcolour.png';
import beardicon from '../../images/beardicon.png';
import eyebrowicon from '../../images/eyebrowicon.png';
import React, { useContext, useEffect, useState } from 'react';
let ServiceNameFcn = (serviceName) => {
	return <Typography variant='h5'>{serviceName}</Typography>;
};
let minPriceFcn = (minPriceVal) => {
	return <Typography variant='h5'>{`$ ${minPriceVal}`}</Typography>;
};
let maxPriceFcn = (maxPriceVal) => {
	return <Typography variant='h5'>{`$ ${maxPriceVal}`}</Typography>;
};
let serviceTimeFcn = (serviceTimeVal) => {
	return <Typography variant='h5'>{`${serviceTimeVal} min`}</Typography>;
};
let serviceImage = (serviceImageVal) => {
	return <img height='45px' src={serviceImageVal} />;
};
let serviceComponent = (serviceName, minPrice, maxPrice, serviceTime, serviceImageVal) => {
	return (
		<div>
			<Row>
				<Col>{serviceImage(serviceImageVal)}</Col>
				<Col>{ServiceNameFcn(serviceName)}</Col>
				<Col>{minPriceFcn(minPrice)}</Col>
				<Col>{maxPriceFcn(maxPrice)}</Col>
				<Col>{serviceTimeFcn(serviceTime)}</Col>
			</Row>
		</div>
	);
};

let serviceComponentHeader = (
	serviceName,
	minPrice,
	maxPrice,
	serviceTime,
	serviceImageVal
) => {
	return (
		<div>
			<Row>
				<Col>
					<Typography variant='h5'>{serviceName}</Typography>
				</Col>
				<Col>
					<Typography variant='h5'>{minPrice}</Typography>
				</Col>
				<Col>
					<Typography variant='h5'>{maxPrice}</Typography>
				</Col>
				<Col>
					<Typography variant='h5'>{serviceTime}</Typography>
				</Col>
				<Col>
					<Typography variant='h5'>{serviceImageVal}</Typography>
				</Col>
			</Row>
		</div>
	);
};

function ServiceObject(serviceName, servicePrice, serviceImage) {
	this.serviceName = serviceName;
	this.servicePrice = servicePrice;
	this.serviceImage = serviceImage;
}

function ServiceProviderListServicesComponent() {
	let result = <div>loading</div>;
	let tempList = [];
	tempList.push(new ServiceObject('hair', '30', haircut));
	tempList.push(new ServiceObject('eyebrow', '15', eyebrowicon));
	let servicesList = [];
	for (let i = 0; i < tempList.length; i++) {
		console.log(tempList.length);
		servicesList.push(tempList.pop(i));
	}
	useEffect(() => {}, [tempList, servicesList]);
	result = (
		<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
			{servicesList.map((serviceObj) => {
				const labelId = `checkbox-list-secondary-label-${serviceObj.serviceName}`;
				return (
					<ListItem key={serviceObj.serviceName}>
						<ListItemButton>
							<ListItemAvatar>
								<Avatar src={serviceObj.serviceImage} />
							</ListItemAvatar>
							<ListItemText
								id={labelId}
								primary={` ${serviceObj.serviceName}`}
								secondary={serviceObj.servicePrice}
								onClick={() => {
									// openNewTap(serviceObj.link);
								}}
							/>
						</ListItemButton>
					</ListItem>
				);
			})}
		</List>
	);

	return (
		<div>
			{/* {result} */}
			<Container>
				{serviceComponentHeader(
					'service name',
					'service min price',
					'service max price',
					'service time',
					'service icon'
				)}
				{serviceComponent('eyebrow', '10', '40', '25', eyebrowicon)}
				{serviceComponent('nail art', '29', '60', '20', nailcolour)}
				{serviceComponent('haircut', '30', '42', '60', haircut)}
				{serviceComponent('beard styling', '15', '25', '20', beardicon)}
			</Container>
		</div>
	);
}

export { ServiceProviderListServicesComponent };
