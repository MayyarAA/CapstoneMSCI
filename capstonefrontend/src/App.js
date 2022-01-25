import React, { useContext, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import firebaseConfig from './Config/Firebase';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/firestore';
import { MainComponent } from './Components/MainComponent.js';
import { MainContextProvider } from './ContextConfig/MainContext.js';
import { HomePage } from './Pages/HomePage.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
		<MainContextProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/homepage' element={<HomePage />} />
					<Route path='/main' element={<MainComponent />} />
				</Routes>
			</BrowserRouter>
			<div className='App'></div>
		</MainContextProvider>
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
