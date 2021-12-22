import React from 'react';
import { Button, Box, TextField } from '@mui/material';

//Responsive meta tag- To ensure proper rendering and touch zooming for all devices
//Add to head component

function HomePage() {
	return (
		<div className='HomePage'>
			<Box
				component='username'
				sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
				noValidate
				autoComplete='off'
			>
				<TextField id='username' label='username' variant='outlined' />
			</Box>
			<Box
				component='password'
				sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
				noValidate
				autoComplete='off'
			>
				<TextField id='username' label='username' variant='outlined' />
			</Box>
			<Button variant='contained'>Login</Button>;
			<Button variant='contained'>Sign Up</Button>;
			<p>
				Tired of seeing crime that isnt being reported?
				<br />
				So are we! Thats why we have created Canary. An interactive map that
				allows you to report crime in real time to help keep you and others
				safe.
			</p>
		</div>
	);
}

export default HomePage;
