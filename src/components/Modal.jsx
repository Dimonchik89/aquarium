import React, { useState } from 'react';
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
    const [name, setName] = useState("")

    const resetName = () => {
        setName("")
    }

    const handleChangeName = (event) => {
        setName(event.target.value)
    }

    const container = fishs.map(({src, alt} )=> <FishModal key={src} src={src} alt={alt} handleAddFish={handleAddFish} resetName={resetName} name={name}/>)

    return (
        <div className='modal' hidden={hiddenModal}>
            <div className='modal__container'>
                <div className="modal-fish__wrapper">
                    {container}
                </div>
                <div className='modal__input-wrapper'>
                    <input 
                        type="text" 
                        className='modal__input'
                        placeholder='Fish name' 
                        onChange={handleChangeName}
                        value={name}  
                    />
                </div>
            </div>
        </div>
    )
}

export default Modal