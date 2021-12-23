import React from 'react';
import { Marker } from '@react-google-maps/api';

export default function Markers() {
	return (
		<Marker
			key='test-pin'
			position={{ lat: 32.778318544903414, lng: -117.22823187488879 }}
		/>
	);
}


// Here we can  create a markers state to go through our Crime API and pull data when they do an api call to the system and load pins for each place on the map. 