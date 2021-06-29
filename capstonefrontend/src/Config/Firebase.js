import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/firestore';

//https://console.firebase.google.com/project/CapstoneMSCI/settings/general/
const firebaseConfig = {
	apiKey: 'AIzaSyDY_uqWzvZqz2cWEWf3SogbgiX7fA3bEVo',
	authDomain: 'capstonemsci.firebaseapp.com',
	projectId: 'capstonemsci',
	storageBucket: 'capstonemsci.appspot.com',
	messagingSenderId: '595404792985',
	appId: '1:595404792985:web:fa9b4ced900579640f0408',
	measurementId: 'G-TB21YB1T6J',
};

// const fire = firebase.initializeApp(config);
export default firebaseConfig;
