import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Markers from './Markers';
import { makeStyles } from '@material-ui/styles';
import { Box } from '@mui/material';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

const useStyles = makeStyles({
	box: {
		display: 'flex',
		height: '84vh',
		width: '87vh',
		alignContent: 'center',
		margin: '10px',
	},
});

function Map() {
	const { user } = useAuth0();
	const classes = useStyles();
	const MAP_API = process.env.REACT_APP_MAP_API_KEY;

	const defaultValues = {
		lat: 32.778318544903414,
		lng: -117.22823187488879,
	};

	let [location, setLocation] = useState(defaultValues);

	const containerStyle = {
		width: '110%',
		height: '100%',
		borderRadius: 10,
	};

	const center = async () => {
		let userLocation = await axios.get(
			`https://isnitch-team-jaba.herokuapp.com/user`,
			user.email
		);

		userLocation.data.map((users) => {
			console.log(Number(users.homeCityKey.split(',')[1]));
			if (users.userId === user.email) {
				setLocation({
					...defaultValues,
					lat: Number(users.homeCityKey.split(',')[0]),
					lng: Number(users.homeCityKey.split(',')[1]),
				});
			}
		});
	};
	console.log(location);
	useEffect(() => {
		center();
	}, []);

	return (
		<Box className={classes.box}>
			<LoadScript googleMapsApiKey={MAP_API}>
				<GoogleMap
					mapContainerStyle={containerStyle}
					center={location}
					zoom={13}
				>
					{/* Child components, such as markers, info windows, etc. */}
					<Markers />
				</GoogleMap>
			</LoadScript>
		</Box>
	);
}

// const WrappedMap = withScriptjs(withGoogleMap(Map));

export default Map;

// 32.778318544903414, -117.22823187488879
