import React from 'react'

import "../style/button.css";

const AddButton = ({ handleCahngeHiddenModal, fishArr, hiddenModal }) => {
    return (
        <div 
            className={`addButton ${!hiddenModal && !fishArr.length ? "hidden" : hiddenModal && fishArr.length ? "bottom" : ""}`}
            onClick={handleCahngeHiddenModal}
            hidden={!fishArr && !hiddenModal.length}   
        >
            <span>+</span>
        </div>
    )
}

export default AddButton