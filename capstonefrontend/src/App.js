import React, { useContext, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import firebaseConfig from './Config/Firebase';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/firestore';
import { MainComponent } from './Components/MainComponent.js';
import { SmartBookingToolbarComponent } from './Components/SmartBookingToolbarComponent.js';
import { LoginPage } from './Pages/LoginPages/LoginPage.js';
import { MainContextProvider } from './ContextConfig/MainContext.js';
import { HomePage } from './Pages/HomePage.js';
import { ServiceProviderServicesPage } from './Pages/ServiceProviderPages/ServiceProviderServicesPage.js';
import { ServiceProviderPrivatePage } from './Pages/ServiceProviderPages/ServiceProviderPrivatePage.js';
import { AddServicesPage } from './Pages/ServiceProviderPages/AddServicesPage.js';
import { SearchPage } from './Pages/SearchPages/SearchPage.js';
import { SearchPageResults } from './Pages/SearchPages/SearchPageResults.js';
import { LoginPageUser } from './Pages/LoginPages/LoginPageUser.js';
import { CreateAppointmentPage } from './Pages/AppointmentPages/CreateAppointmentPage.js';
import { FooterComponent } from './Components/FooterComponent.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
function App() {
	if (!firebase.apps.length) {
		console.log('in firebase.apps.length');
		firebase.initializeApp(firebaseConfig);
	} else {
		firebase.app(); // if already initialized, use that one
		console.log('in firebase.apps else statement');
	}
	login();
	return (
		// <div>
		// </div>
		<div className='App'>
			<SmartBookingToolbarComponent />
			<MainContextProvider>
				{/* <LoginComponent /> */}
				<BrowserRouter>
					<Routes>
						<Route path='/Search' element={<SearchPage />} />
						<Route path='/searchresults' element={<SearchPageResults />} />
						<Route
							path='/ServiceProviderPrivatePage'
							element={<ServiceProviderPrivatePage />}
						/>
						<Route
							path='/ServiceProviderallservices'
							element={<ServiceProviderServicesPage />}
						/>
						<Route path='/home' element={<HomePage />} />
						<Route path='/main' element={<MainComponent />} />
						<Route path='/Login' element={<LoginPage />} />
						<Route path='/LoginUser' element={<LoginPageUser />} />
						<Route path='/AddServices' element={<AddServicesPage />} />
						<Route path='/createappointment' element={<CreateAppointmentPage />} />
					</Routes>
				</BrowserRouter>
			</MainContextProvider>
			<FooterComponent />
		</div>
	);
}

function login() {
	let email = 'joshghori@gmail.com';
	let password = 'test123';
	firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then((u) => {
			console.log('Successfully Logged In');
			console.log(email);
		})
		.catch((err) => {
			console.log('Error: ' + err.toString());
		});
}
export default App;
