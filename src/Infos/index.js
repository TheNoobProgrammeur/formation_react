import React from 'react';
export const Infos = props => {
    const CountryInfoList = () => (props.currentCountry)
        ? <>
            {
                Object.keys(props.currentCountry).map(
                    (name, index) => <div key={index} >{name}:{JSON.stringify(props.currentCountry[name])}</div>
                )
            }
        </>
        : null;
        
    return <div className='info-container'>
        <CountryInfoList />
    </div>
};