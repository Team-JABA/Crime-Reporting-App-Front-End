import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MapProvider from './context/map';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
	<Auth0Provider
	domain='dev-47krlgr2.us.auth0.com'
	clientId='XLlqawAL3xvtnMqoiXheYVnD7tCygRNv'
	redirectUri={window.location.origin}
	>
			<MapProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</MapProvider>
		</Auth0Provider>,
	document.getElementById('root'),
);
