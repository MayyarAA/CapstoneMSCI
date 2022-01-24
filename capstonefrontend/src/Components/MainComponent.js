import React, { useContext, useEffect, useState } from 'react';
import { MainContext } from '../ContextConfig/MainContext.js';
function MainComponent() {
	const { userData, setUserData } = useContext(MainContext);
	useEffect(() => {
		setUserData('from main component context reset');
	}, []);
	return <div>here main + {userData}</div>;
}

export { MainComponent };
