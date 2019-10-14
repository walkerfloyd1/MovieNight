import React from 'react';
import TopNavbar from '../../components/navbar';

import ZomatoResults from '../../components/APIs/NightOut/zomatoAPI.js';

import Map from '../../components/APIs/NightOut/MapboxAPI';

const NightOutFood = () => {
    return (
        <div>
            <TopNavbar />
            <ZomatoResults />
            <Map />
        </div>
    )
}

export default NightOutFood
