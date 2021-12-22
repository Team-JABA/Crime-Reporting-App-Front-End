import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import HomePage from './modules/HomePage.js'

ReactDOM.render(
	<React.StrictMode>
		<App />
		<HomePage/>
	</React.StrictMode>,
	document.getElementById('root')
);
