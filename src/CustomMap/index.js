import React from 'react';
import './leafletConfig';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

export const CustomMap = props => {
    const { allCountries, onCountryClick } = props;
    const ListMarkers = () => allCountries.map(
        (country, index) => {
            return (country.latlng[0])
                ? <Marker onclick={() => onCountryClick(country)} key={index} position={country.latlng}>
                    <Popup>
                        {country.name}
                    </Popup>
                </Marker>
                : null
        }
    );
    const mapCenter = typeof allCountries[0] !== "undefined" ? allCountries[0].latlng : [0, 0];
    return <Map center={mapCenter} zoom={3} maxZoom={5} minZoom={1}>
        <TileLayer
            attribution={'&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}
            url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
        />
        <ListMarkers />
    </Map>
}