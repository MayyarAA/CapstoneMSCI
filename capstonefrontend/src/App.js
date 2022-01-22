import logo from './logo.svg';
import './App.css';
import firebaseConfig from './Config/Firebase';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/firestore';

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
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
			</header>
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
