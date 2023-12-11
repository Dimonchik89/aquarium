import React from 'react';
import FishModal from './FishModal';

import "../style/modal.css";

const fishs = [
    {
        src: "./golden-purple-fish.png",
        alt: "golden-purple-fish"
    },
    {
        src: "./goldfish.png",
        alt: "goldfish"
    },
    {
        src: "./guppie.png",
        alt: "guppie"
    },
    {
        src: "./tropical-fish.png",
        alt: "tropical-fish"
    },
    {
        src: "./tuna.png",
        alt: "tuna"
    },
]

const Modal = ({ hiddenModal, handleAddFish }) => {

    const container = fishs.map(({src, alt} )=> <FishModal key={src} src={src} alt={alt} handleAddFish={handleAddFish}/>)

    return (
        <div className='modal' hidden={hiddenModal}>
            <div className='modal__container'>
                <div className="modal-fish__wrapper">
                    {container}
                </div>
                <div>
                    <input type="text" />
                </div>
            </div>
        </div>
    )
}

export default Modal