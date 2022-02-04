import React, { useContext, useEffect, useState } from 'react';
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
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import haircut from '../../images/haircut2.jpeg';
import nailcolour from '../../images/nailcolour2.jpeg';
import facial from '../../images/facial.jpeg';
import eyebrowicon from '../../images/eyebrowicon2.jpeg';
function ServiceObject(serviceName, serviceDescr, servicePrice, serviceImage) {
	this.serviceName = serviceName;
	this.serviceDescr = serviceDescr;
	this.servicePrice = servicePrice;
	this.serviceImage = serviceImage;
}
let listOfServices = [];
listOfServices.push(
	new ServiceObject('hair treatment', 'takecare of your beautiful hair', '145', haircut)
);
listOfServices.push(
	new ServiceObject(
		'nail beautification',
		'make the most of your nail surfaces',
		'75',
		nailcolour
	)
);

listOfServices.push(
	new ServiceObject('facial treatment', 'make the most of your nail surfaces', '145', facial)
);
listOfServices.push(
	new ServiceObject(
		'eyebrow caretaking routine',
		'upgrade your eyebrow routine',
		'45',
		eyebrowicon
	)
);
function ServiceProviderServicesListComponent() {
	const navigate = useNavigate();
	let result = <Row>barber1</Row>;
	let directToShopPage = (shopName) => {
		console.log('here');
		navigate('/createappointment');
	};
	if (true) {
		result = (
			<Container>
				<List sx={{ width: '100%', bgcolor: 'background.paper' }}>
					{listOfServices.map((serviceResult) => {
						const labelId = `checkbox-list-secondary-label-${serviceResult.serviceName}`;
						return (
							<div>
								<ListItem key={serviceResult.serviceName}>
									<ListItemButton>
										<ListItemAvatar>
											<Avatar src={serviceResult.serviceImage} />
										</ListItemAvatar>
										<ListItemText
											id={labelId}
											primary={` ${serviceResult.serviceName}`}
											secondary={serviceResult.serviceDescr}
											// secondary={serviceResult.servicePrice}
											onClick={() => {
												directToShopPage(serviceResult.serviceName);
											}}
										/>
										{/* <ListItemText secondary={serviceResult.servicePrice}></ListItemText> */}

										<ListItemButton
											onClick={() => {
												directToShopPage(serviceResult.serviceName);
											}}>
											Book now
										</ListItemButton>
									</ListItemButton>
								</ListItem>
							</div>
						);
					})}
				</List>
			</Container>
		);
	}
	return <div>{result}</div>;
}

export { ServiceProviderServicesListComponent };
