import { SearchResultComponent } from '../../Components/SearchComponents/SearchResultComponent.js';
import { SearchHomeComponent } from '../../Components/SearchComponents/SearchHomeComponent.js';

import '../../App.css';
function SearchPage() {
	return (
		<div className='App'>
			{/* <SearchResultComponent /> */}
			<SearchHomeComponent />
		</div>
	);
}

export { SearchPage };
