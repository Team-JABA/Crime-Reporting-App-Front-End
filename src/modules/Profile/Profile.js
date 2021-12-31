import React, { useState, useContext } from 'react';
import axios from 'axios';
import  {MapContext}  from '../../context/map';
import { useAuth0 } from '@auth0/auth0-react';
import { Box, Grid, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/styles';
import Location from './Location';

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
	const MapValues = useContext(MapContext);
	const { user } = useAuth0();
	const classes = useStyles();
	let [userName, setUserName] = useState('');

	const handleSaveUser = async (location) => {
		let getUsers = await axios.get(
			`https://isnitch-team-jaba.herokuapp.com/user`,
			user.email,
		);
		getUsers.data.map((users) => {
			if (users.userId === user.email) {
				setUserName((userName = users.userId));
			}
		});
		if (user.email === userName) {
			await axios.put(
				`https://isnitch-team-jaba.herokuapp.com/user/${user.email}`,
				{
					homeCityKey: location,
				},
				);
				MapValues.setLocation({
					lat: Number(location.split(',')[0]),
					lng: Number(location.split(',')[1]),
				});
				console.log(MapValues.userLocation)
				console.log(MapValues.location)

		} else {
			await axios.post(`https://isnitch-team-jaba.herokuapp.com/user`, {
				userId: user.email,
				homeCityKey: location,
			});
			MapValues.setLocation({
				lat: Number(location.split(',')[0]),
				lng: Number(location.split(',')[1]),
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
