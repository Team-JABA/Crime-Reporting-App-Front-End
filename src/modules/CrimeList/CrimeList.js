import React from 'react';

export default function CrimeList() {
	return <></>;
}

// This is where we need to display a Card for each crime the use has input via the ReportCrime Form. We will need to create a state to handle anytime this changes, Most likely a context that handles this globally. Anytime the use inputs a new crime, we need to add this to our crimes[] and map through that here, displaying each crime in its own seperate card. We will could also use a Hook to do a GET request to our db onload and pull all of the stores crimes associated to the user here. 