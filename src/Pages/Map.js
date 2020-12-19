import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';

function Map() {
  const [latest, setLatest] = useState([]);
  const [results, setResults] = useState([]);
  
  useEffect(() => {
    axios
      .all([
        axios.get("https://corona.lmao.ninja/v3/covid-19/all"),
        axios.get("https://corona.lmao.ninja/v3/covid-19/countries")
      ])
      .then(responseArr => {
        setLatest(responseArr[0].data);
        setResults(responseArr[1].data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const date = new Date(parseInt(latest.updated));
  const lastUpdated = date.toString();

  const countriesLocation = results.map((data, i) => {
    return(
        <div
            lat={data.countryInfo.lat}
            lng={data.countryInfo.long}
            style={{
                color:"Blue",
                height: "25px",
                wight: "35px",
                textAlign: "center"
                
            }}>
            <img height="10px" src={data.countryInfo.flag}/>
            <br/>
            {data.cases}
        </div>
     
    );
});

    return (
          <div style={{
               backgroundColor: "",
               height: "100vh",
               textAlign: "center"}}>
          <br />
          <h2>Map</h2>
          <br />
         <div style={{ height: '100vh', width: '100%' }}>
         <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDmoIvN2g4S9RvJLk7Ut75dHfwqrcBRTz4" }}
          defaultCenter={{ lat: 37, lng: 127 }}
          defaultZoom={10}
         >
         {countriesLocation} 
         </GoogleMapReact>
         </div>
        </div>
    )
}

export default Map;