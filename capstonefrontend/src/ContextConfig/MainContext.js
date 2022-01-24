import React, { createContext, useState } from 'react';

const MainContext = createContext();

const MainContextProvider = (props) => {
	const [userData, setUserData] = useState('here');
	return (
		<MainContext.Provider value={{ userData, setUserData }}>
			{props.children}
		</MainContext.Provider>
	);
};

export { MainContext, MainContextProvider };
