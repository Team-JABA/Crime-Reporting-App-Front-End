import React, { useState, useContext, useEffect } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { makeStyles } from '@material-ui/styles';
import { Box } from '@mui/material';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import Markers from './Markers';
import  {MapContext}  from '../../context/map';

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
	const MapValues = useContext(MapContext);

	

	const containerStyle = {
		width: '110%',
		height: '100%',
		borderRadius: 10,
	};
	const center = async () => {
		if(user === undefined){
			console.log('help');
		}
		let userLocation = await axios.get(
			`https://isnitch-team-jaba.herokuapp.com/user`,
			user.email,
		);

		userLocation.data.map((users) => {
			if (users.userId === user.email) {
				MapValues.setLocation({
					lat: Number(users.homeCityKey.split(',')[0]),
					lng: Number(users.homeCityKey.split(',')[1]),
				});
			}
			return location;
		});
	};

	useEffect(() => {
		center();
	}, []);
	// center();

	return (
		<Box className={classes.box}>
			<LoadScript googleMapsApiKey={MAP_API}
					// onLoad={incidents}
					>
				<GoogleMap
					mapContainerStyle={containerStyle}
					center={MapValues.location}
					zoom={13}
				>
					{MapValues.incidentReport.map(incident => {
						return (
							<Markers
							key={incident.createdAt}
							incident={incident}/>
						);
					})};
				</GoogleMap>
			</LoadScript>
		</Box>
	);
}

export default Map;

// 32.778318544903414, -117.22823187488879
