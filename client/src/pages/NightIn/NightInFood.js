import React from 'react';
import TopNavbar from '../../components/navbar';
import NightInResults from '../../components/APIs/NightIn/omdbApiResults';

const NightInFood = props => {
    return (
        <div>
            <TopNavbar />
            <NightInResults />
        </div>
    )
}

export default NightInFood
