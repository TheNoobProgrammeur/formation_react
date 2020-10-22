import React from 'react';
import { Link } from 'react-router-dom';
import { CustomMap } from '../CustomMap';
import { Infos } from '../Infos';

export const Home = props => <>
    <CustomMap onCountryClick={props.onCountryClick} allCountries={props.allCountries} />
    <Link to='/todo'>Voir la liste des todos</Link> <br />
    <Link to='/persistance'>Persistance</Link> <br />
    <Link to='/posts'>Affichage Posts</Link> <br />
    <Infos currentCountry={props.currentCountry} />
</>;