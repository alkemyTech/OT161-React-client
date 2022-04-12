import React from "react";
import GoogleMapReact from "google-map-react";
import PropTypes from 'prop-types';
const RegisterMap = ({stateLat, stateLng}) => {
  
    const DivComponent = ({ text }) => <div>{text}</div>;
  
    const defaultVar = {
    center: {
      lat: stateLat,
      lng: stateLng,
    },
    zoom: 15,
  };

  return (
    <div>       
      <div style={{ height: "50vh", width: "50%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API }}
          defaultCenter={defaultVar.center}
          defaultZoom={defaultVar.zoom}
        >    
          <DivComponent
            lat={stateLat}
            lng={stateLng}
            text={
              <div className="circle">
                <p>Aqui esta Usted</p>
              </div>
            }
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};
export default RegisterMap;

RegisterMap.propTypes = {
    stateLat: PropTypes.number,
    stateLng: PropTypes.number,
    text: PropTypes.any,
};