import React, { useState, useEffect }  from 'react';
import { Marker, InfoWindow } from '@react-google-maps/api';
import {Box, Typography, Grid} from '@mui/material';
import { makeStyles } from '@material-ui/styles';



const useStyles = makeStyles({
	grid: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		width: '300px',
		height: '300px',
	},
	gridItem: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		border: '3px solid rgba(0, 0, 0, 0.9)',
		borderRadius: 10,
		margin: '5px',
		padding: '2px',
		flexDirection: 'column',
	},
});

export default function Markers(props) {
	const classes = useStyles();
	let [selected, setSelected] = useState(null);

	return (
		<>
		<Marker
			position={{ lat: props.incident.incidentLat, lng: props.incident.incidentLon }}
			title={props.incident.incidentOffense}
			animation={window.google.maps.Animation.DROP}
			onClick={() => setSelected(props.incident)}
		/>
		{selected === props.incident ? 
		<InfoWindow position={ {lat: props.incident.incidentLat, lng: props.incident.incidentLon} } onCloseClick={() => {setSelected(null);}}>
			<Box className={classes.grid}>
				<Grid>
					<Grid item className={classes.gridItem}>
						<Typography><b>Incident</b></Typography>
						<Typography>{props.incident.incidentOffense}</Typography>
					</Grid>
					<Grid item className={classes.gridItem}>
						<Typography><b>Date</b></Typography>
						<Typography>{props.incident.incidentDate}</Typography>
					</Grid>
					<Grid item className={classes.gridItem}>
						<Typography><b>Description</b></Typography>
						<Typography>{props.incident.incidentOffenseDescription}</Typography>
					</Grid>
					<Grid item className={classes.gridItem}>
						<Typography>Any new information regarding the above offense please call 9.1.1</Typography>
					</Grid>
				</Grid>
			</Box>
		</InfoWindow> : null}
		</>
	);
}
