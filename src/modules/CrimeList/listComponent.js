import React from 'react';
import {
	Box,
	List,
	ListItem,
	ListItemText,
	Divider,
	Paper,
	Grid,
	Typography,
	Card,
	Button,
	CardContent,
	responsiveFontSizes,
	listItemIconClasses,
} from '@mui/material';

export default function ListComponent({ crimedata, loading, classes }) {
	if (loading) {
		return (
			<>
				<h1>Loading...</h1>
			</>
		);
	}

	return (
		<>
			<Paper className={classes.incidentListContainer}>
				<List aria-label='Crime List'>
					{crimedata.map((crime) => {
						return (
							<>
								<ListItem button>
									<ListItemText
										key={crime.id}
										primary={crime.incidentOffense}
									/>
								</ListItem>
								<Divider />
							</>
						);
					})}
				</List>
			</Paper>
		</>
	);
}
