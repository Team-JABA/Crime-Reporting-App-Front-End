import React, {useState, useEffect} from "react";
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
export const MapContext = React.createContext();



function MapProvider({children}){

  let [location, setLocation] = useState(
    {lat: 32.778318544903414,
    lng: -117.22823187488879,});
  const [incidentReport, setIncidentReport] = useState([]);

let incidents = async () => {
      let allIncidents = await axios.get('https://isnitch-team-jaba.herokuapp.com/incident');
      console.log(allIncidents.data)
      setIncidentReport(allIncidents.data);
    };

    useEffect(() => {
      incidents()
    },[])

    console.log(incidentReport);


  const values = {
    location,
    incidentReport,
    setIncidentReport,
    setLocation
  }

  return (
    <MapContext.Provider value={values}>
      {children}
    </MapContext.Provider>
  );
  
}

export default MapProvider;

