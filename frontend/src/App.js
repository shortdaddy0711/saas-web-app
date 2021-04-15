import Header from './common/Header';
import Home from './home/Home';
import Signup from './signup/Signup';
import Profile from './profile/Profile';

import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
	const authDomain = process.env.REACT_APP_DOMAIN;
	const authClientId = process.env.REACT_APP_CLIENTID;
	return (
		<Auth0Provider
			domain={authDomain}
			clientId={authClientId}
			redirectUri={window.location.origin}
			cacheLocation='localstorage'
		>
			<Router>
				<div className='App container mx-auto'>
					<Header />
					<Switch>
						<Route path='/profile'>
							<Profile />
						</Route>
						<Route path='/signup'>
							<Signup />
						</Route>
						<Route path='/'>
							<Home />
						</Route>
					</Switch>
				</div>
			</Router>
		</Auth0Provider>
	);
}

export default App;
