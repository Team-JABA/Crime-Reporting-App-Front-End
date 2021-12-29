import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';
import axios from 'axios';

const LoginButton = () => {
	const { user, isAuthenticated, isLoading } = useAuth0();
	const { loginWithRedirect } = useAuth0();

	const handleLogin = () => {
		loginWithRedirect();
		console.log(user.address);
		console.log('hello, world');
		// let userCheck = axios.get(`https://isnitch-team-jaba.herokuapp.com/user`)
	};
	return (
		<Button variant='contained' color='success' fullWidth onClick={handleLogin}>
			Login
		</Button>
	);
};

export default LoginButton;
