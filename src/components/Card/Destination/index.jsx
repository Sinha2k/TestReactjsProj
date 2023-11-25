import React from 'react';

import "./style.scss"

const DestinationCard = ({src, des}) => {
    return (
        <div className='destination_card'>
            <div className='layout_image'></div>
            <img src={src} alt='' />
            <h3>{des}</h3>
        </div>
    );
}

export default DestinationCard;
