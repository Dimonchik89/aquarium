import React from 'react'

import "../style/modal.css";

const FishModal = ({ src, alt, handleAddFish, resetName, name }) => {
    return (
        <div
            onClick={() => {
                resetName()
                handleAddFish({ src, alt, name })
            }}
        >
            <img className='modal__fish' src={src} alt={alt} />
        </div>
    )
}

export default FishModal