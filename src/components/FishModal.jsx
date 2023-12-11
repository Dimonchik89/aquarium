import React from 'react'

import "../style/modal.css";

const FishModal = ({ src, alt, handleAddFish }) => {
    return (
        <div
            onClick={() => handleAddFish({ src, alt })}
        >
            <img className='modal__fish' src={src} alt={alt} />
        </div>
    )
}

export default FishModal