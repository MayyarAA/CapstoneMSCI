import { ServiceProviderPrivateComponent } from '../../Components/ServiceProviderComponents/ServiceProviderPrivateComponent.js';
import { ServiceProviderListServicesComponent } from '../../Components/ServiceProviderComponents/ServiceProviderListServicesComponent.js';

function ServiceProviderPrivatePage() {
	return (
		<div>
			<div>
				<ServiceProviderListServicesComponent />
			</div>
		</div>
	);
}

export { ServiceProviderPrivatePage };
