import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Markers from './Markers';

function Map() {
	const MAP_API = process.env.REACT_APP_MAP_API_KEY;

	const containerStyle = {
		width: '100vh',
		height: '87vh',
		margin: '10px',
	};

	const center = {
		lat: 32.778318544903414,
		lng: -117.22823187488879,
	};

	return (
		<LoadScript googleMapsApiKey={MAP_API}>
			<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
				{/* Child components, such as markers, info windows, etc. */}
				<Markers />
			</GoogleMap>
		</LoadScript>
	);
}

// const WrappedMap = withScriptjs(withGoogleMap(Map));

export default Map;

// 32.778318544903414, -117.22823187488879
