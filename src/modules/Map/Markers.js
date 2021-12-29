import React from 'react';
import { Marker } from '@react-google-maps/api';

export default function Markers() {
	return (
		<Marker
			key='test-pin'
			position={{ lat: 32.778318544903414, lng: -117.22823187488879 }}
			title='Home Base'
			animation={window.google.maps.Animation.DROP}
		/>
	);
}
