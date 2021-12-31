import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MapProvider from './context/map';
import Auth0ProviderWithHistory from './context/auth0-provider-with-history';
import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.render(
	<Router>
		<Auth0ProviderWithHistory>
			<MapProvider>
				<App />
			</MapProvider>
		</Auth0ProviderWithHistory>
	</Router>,
	document.getElementById('root'),
);

