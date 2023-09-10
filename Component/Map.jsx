import React from 'react'
import { GoogleMap, LoadScript, MarkerF} from '@react-google-maps/api';

const Map = () => {
    const location = {
        address: '1100 favoritenstrasse, Vienna, Austria.',
        position:{
          lat: 48.160040,
          lng: 16.382920,  
        }
    };
    const defaultCenter = {
          lat: 48.160040,
          lng: 16.382920,  
        }
        
      
    return<>
    <div className="map">
    <h2 className="address">Come Visit Us At Our Campus</h2>
    <LoadScript googleMapsApiKey=''>
        <GoogleMap mapContainerStyle={{width: "100%", height: "100%"}} zoom={17} center={defaultCenter}>
            <MarkerF key={location.address} position={location.position} />
        </GoogleMap>
    </LoadScript>
    </div>
    
    </>
}

 
  export default Map;