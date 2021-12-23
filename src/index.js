import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
	<React.StrictMode>
		<Auth0Provider
			domain='dev-47krlgr2.us.auth0.com'
			clientId='XLlqawAL3xvtnMqoiXheYVnD7tCygRNv'
			redirectUri={window.location.origin}
		>
			<App />
		</Auth0Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
