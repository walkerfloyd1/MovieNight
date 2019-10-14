import React from 'react';
import TopNavbar from '../../components/navbar';
import NightOutResults from '../../components/APIs/NightOut/nightOutTMDBApiCall';
import Map from '../../components/APIs/NightOut/MapboxAPI';

const NightOutTheaters = () => {
    return (
        <div>
            <TopNavbar />
            <Map />
            <NightOutResults />
        </div>
    )
}

export default NightOutTheaters
