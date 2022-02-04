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
import { makeStyles } from '@mui/styles';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 500,
	},
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
}));
function ShopObject(shopName, shopShortDescr, shopeLongDescr, shopImage) {
	this.shopName = shopName;
	this.shopShortDescr = shopShortDescr;
	this.shopeLongDescr = shopeLongDescr;
	this.shopImage = shopImage;
}
function SearchResultComponent() {
	const navigate = useNavigate();
	let result = <Row>barber1</Row>;
	let listOfShops = [];
	for (let i = 0; i < 4; i++) {
		listOfShops.push(
			new ShopObject(
				`barber ${i}`,
				'modern gender netueral barber',
				'long descr',
				'../../images/calendariconv1.png'
			)
		);
	}

	let directToShopPage = (shopName) => {
		navigate('/ServiceProviderallservices');
	};
	if (true) {
		result = (
			<Container>
				<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
					{listOfShops.map((shopResult) => {
						const labelId = `checkbox-list-secondary-label-${shopResult.shopName}`;
						return (
							<div>
								<ListItem key={shopResult.shopName}>
									<ListItemButton>
										<ListItemAvatar>
											<Avatar src={shopResult.shopImage} />
										</ListItemAvatar>
										<ListItemText
											id={labelId}
											primary={` ${shopResult.shopName}`}
											secondary={shopResult.shopShortDescr}
											onClick={() => {
												directToShopPage(shopResult.shopName);
											}}
										/>
										{/* <ListItemText
											id={labelId}
											primary={` ${shopResult.shopShortDescr}`}
											onClick={() => {}}
										/> */}
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
function SearchResultComponentV2() {
	cardComponent = (shopName, shopDscr, img, longDscr) => {
		return (
			<Card sx={{ maxWidth: 345 }}>
				<CardMedia component='img' height='140' image={img} alt='green iguana' />
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{shopName}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{shopDscr}
					</Typography>
				</CardContent>
				<CardActions>
					<Button size='small'>Share</Button>
					<Button size='small'>Learn More</Button>
				</CardActions>
			</Card>
		);
	};
	return (
		<div>
			{cardComponent(
				'barber1',
				'modern gender netueral barber',
				'../../images/calendariconv1.png',
				'goldie barber shop is here to provide you with all the services you need'
			)}
		</div>
	);
}

export { SearchResultComponent };

let cardComponent = (skillname, dscr, img, fullDetail) => {
	return (
		<div>
			<Card>
				<CardHeader title={skillname} subheader={dscr} />
				<CardMedia image={img} title={skillname} />

				<CardActions disableSpacing>
					<IconButton aria-label='add to favorites'></IconButton>
					<IconButton aria-label='share'>{/* <ShareIcon /> */}</IconButton>
				</CardActions>
				<CardContent>
					<Typography variant='h6' color='textSecondary' component='p'>
						{fullDetail}
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
};
