import React from 'react';
import { List, ListItem, ListItemText, Box } from '@mui/material';

export default function Pagination({
	paginate,
	totalPosts,
	postsPerPage,
	classes,
}) {
	const pageNumber = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumber.push(1);
	}

	console.log(pageNumber);
	return (
		<Box className={classes.pagination}>
			<List>
				{pageNumber.map((number) => {
					return (
						<ListItem key={number} button>
							<ListItemText onClick={() => paginate(number)} primary={number} />
						</ListItem>
					);
				})}
			</List>
		</Box>
	);
}
