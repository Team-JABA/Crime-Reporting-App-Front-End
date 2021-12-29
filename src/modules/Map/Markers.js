import React, { useState, useEffect }  from 'react';
import { Marker } from '@react-google-maps/api';
// import axios from 'axios';


export default function Markers(props) {
	return (
		<Marker
			position={{ lat: props.incident.incidentLat, lng: props.incident.incidentLon }}
			title={props.incident.incidentOffense}
			animation={window.google.maps.Animation.DROP}
		/>
	);
}
