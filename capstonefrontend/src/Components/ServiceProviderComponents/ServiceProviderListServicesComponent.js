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
let ServiceNameFcn = (serviceName) => {
	return <Typography variant='h5'>{serviceName}</Typography>;
};
let minPriceFcn = (minPriceVal) => {
	return <Typography variant='h5'>{minPriceVal}</Typography>;
};
let maxPriceFcn = (maxPriceVal) => {
	return <Typography variant='h5'>{maxPriceVal}</Typography>;
};
let serviceTimeFcn = (serviceTimeVal) => {
	return <Typography variant='h5'>{serviceTimeVal}</Typography>;
};
let serviceComponent = (serviceName, minPrice, maxPrice, serviceTime) => {
	return (
		<div>
			<Row>
				<Col>{ServiceNameFcn(serviceName)}</Col>
				<Col>{minPriceFcn(minPrice)}</Col>
				<Col>{maxPriceFcn(maxPrice)}</Col>
				<Col>{serviceTimeFcn(serviceTime)}</Col>
			</Row>
		</div>
	);
};

function ServiceProviderListServicesComponent() {
	return <div>{serviceComponent('haircut', '10', '40', '20')}</div>;
}

export { ServiceProviderListServicesComponent };
