import React from 'react';
import { Link } from 'react-router-dom';
import { CustomMap } from '../CustomMap';
import { Infos } from '../Infos';

export const Home = props => <>
    <CustomMap onCountryClick={props.onCountryClick} allCountries={props.allCountries} />
    <Link to='/todo'>Voir la liste des todos</Link>
    <Infos currentCountry={props.currentCountry} />
</>;