import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../Buttons/Login';

export default function Login() {
	const { user, isAuthenticated, isLoading } = useAuth0();

	if (isLoading) {
		return <div>Loading ...</div>;
	}

	const handleSubmit = () => {};
	return (
		<Container>
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Avatar>
					{!isAuthenticated ? (
						<Avatar alt='' />
					) : (
						<Avatar alt={user.name} src={user.picture} />
					)}
				</Avatar>
				<Typography component='h1' variant='h5'>
					Welcome to ISnitch! Please Sign-in
				</Typography>
				<Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
					<TextField
						margin='normal'
						required
						fullWidth
						id='email'
						label='Email Address'
						name='email'
						autoComplete='email'
						autoFocus
						disabled='true'
					/>
					<TextField
						margin='normal'
						required
						fullWidth
						name='password'
						label='Password'
						type='password'
						id='password'
						autoComplete='current-password'
						disabled='true'
					/>
					<LoginButton />
				</Box>
			</Box>
		</Container>
	);
}

// This component loads the Login Homepage
