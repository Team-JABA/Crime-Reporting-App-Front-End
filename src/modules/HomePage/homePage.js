import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


//Responsive meta tag- To ensure proper rendering and touch zooming for all devices
//Add to head component
<meta name="viewport" content="initial-scale=1, width=device-width" />

function HomePage() {
  return(
    <div className='HomePage'>
            <Box
                component="username"
                sx={{'& > :not(style)': { m: 1, width: '25ch' },}}
                noValidate
                autoComplete="off"
            >
            <TextField id="username" label="username" variant="outlined" />
            </Box>

            <Box
                component="password"
                sx={{'& > :not(style)': { m: 1, width: '25ch' },}}
                noValidate
                autoComplete="off"
            >
            <TextField id="username" label="username" variant="outlined" />
            </Box>
                
            <Button variant="contained">Login</Button>;
            <Button variant="contained">Sign Up</Button>;

            <p>
                Tired of seeing crime that isnt being reported?
                <br>
                So are we! Thats why we have created Canary. An interactive map that allows you to report crime in real time to help keep you and others safe.
            </p>
    </div>
  );
}
ReactDOM.render(<App/>, document.querySelector('#app'));

export default HomePage