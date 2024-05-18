import Map from "../GoogleMap/Map";
import { googleMapAPIKey } from "../GoogleMap/Maps";
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';




const AnyReactComponent = ({ text }) => <div className="text-red-600 font-bold">{text}</div>;
const Properties = () => {


    const defaultProps = {
        center: {
            lat: 26.0274,
            lng: 88.4646
        },
        zoom: 20
    };

    return (
        <div>
            {/* <h1>This is a properties</h1> */}
            <div style={{ height: '450px', width: '100%' }}>

<GoogleMapReact
    bootstrapURLKeys={{ key: googleMapAPIKey }}
    defaultCenter={defaultProps.center}
    defaultZoom={defaultProps.zoom}
>
    <AnyReactComponent
        lat={defaultProps.center.lat}
        lng={defaultProps.center.lng}
        text="My Home"
    />
</GoogleMapReact>
</div>
            
        </div>
    );
};

Properties.propTypes ={
    children: PropTypes.node.isRequired
}

export default Properties;