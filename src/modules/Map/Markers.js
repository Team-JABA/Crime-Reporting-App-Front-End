import React from 'react';
import { Marker } from '@react-google-maps/api';

export default function Markers() {
	const defaultState = {
		key: [],
		position: [],
	};

	return (
		<Marker
			key='test-pin'
			position={{ lat: 32.778318544903414, lng: -117.22823187488879 }}
		/>
	);
}

// Here we can  create a markers state to go through our Crime API and pull data when they do an api call to the system and load pins for each place on the map.

// MArkers needs to pull from the DataBase and pull all the information it needs for a pin from the Crime API in order to generate Pins to the Map.

//The Report a Crime FOrm should be able to submit a new crime to the DB and pin it to the map and update the map.
