import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Box, Grid, Typography, Button } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import Location from './Location';
import axios from 'axios';

const useStyles = makeStyles({
	boxContainer: {
		backgroundImage: 'url(https://source.unsplash.com/random/?neighborhood)',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		width: '110%',
		height: '99%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
	},
	paperContainer: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'lightgray',
		width: '50%',
		height: '75%',
		borderRadius: 10,
		flexDirection: 'column',
	},
});
export default function Profile() {
	const { user } = useAuth0();
	const classes = useStyles();
	let [userName, setUserName] = useState('');

	const handleSaveUser = async (location, e) => {
		let userLocation = await axios.get(
			`https://isnitch-team-jaba.herokuapp.com/user`,
			user.email
		);
		console.log(userLocation);
		userLocation.data.map((users) => {
			if (users.userId === user.email) {
				setUserName((userName = users.userId));
			}
		});
		console.log(userName);
		if (user.email === userName) {
			console.log('in the if');
			console.log(location);
			await axios.put(`http://localhost:3001/user/${user.email}`, {
				homeCityKey: location,
			});
		} else {
			console.log('in the else');
			await axios.post(`http://localhost:3001/user`, {
				userId: user.email,
				homeCityKey: location,
			});
		}
	};

	return (
		<Box className={classes.boxContainer}>
			<Grid className={classes.paperContainer}>
				<Grid item>
					<Typography>{user.name}</Typography>
					<Typography>Settings</Typography>
				</Grid>
				<Grid item>
					<Typography>Edit Your Location</Typography>
					<Location handleSaveUser={handleSaveUser} />
				</Grid>
			</Grid>
		</Box>
	);
}
