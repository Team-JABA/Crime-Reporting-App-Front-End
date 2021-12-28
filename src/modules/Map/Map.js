import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Markers from './Markers';
import { makeStyles } from '@material-ui/styles';
import { Box } from '@mui/material';

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
	const classes = useStyles();
	const MAP_API = process.env.REACT_APP_MAP_API_KEY;

	const containerStyle = {
		width: '110%',
		height: '100%',
		borderRadius: 10,
	};

	const center = {
		lat: 32.778318544903414,
		lng: -117.22823187488879,
	};

	return (
		<Box className={classes.box}>
			<LoadScript googleMapsApiKey={MAP_API}>
				<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
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
