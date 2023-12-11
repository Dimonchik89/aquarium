import React, { useEffect, useRef, useState } from 'react'
import { createStructuredSelector } from 'reselect';
import { maxWidth, maxHeight } from '../store/fish';
import { connect } from 'react-redux';

import "../style/fish.css";

const Fish = ({ fish: { src, alt, posX, posY }, index, maxHeight, maxWidth }) => {
    const fishRef = useRef(null)
    const healsRef = useRef(null)

    // function changePositionX() {
    //     let newPosX = posX;
    //     let positionX = "right"

    //     setInterval(() => {
    //         if(newPosX === maxWidth - 30) {
    //             positionX = "left"; 
    //         }
    //         if(newPosX === 30) {
    //             positionX = "right";
    //         }

    //         if(positionX === "right") {
    //             newPosX += 1;
    //             fishRef.current.style.left = `${newPosX}px`;
    //             fishRef.current.style.transform = "scaleX(1)";
    //             return;
    //         }

    //         if(positionX === 'left') {
    //             newPosX -= 1;
    //             fishRef.current.style.left = `${newPosX}px`;
    //             fishRef.current.style.transform = "scaleX(-1)";
    //             return;
    //         }
    //     }, 20)
    // }

    // function changePositionY() {
    //     let newPosY = posY;
    //     let positionY = "bottom"

    //     setInterval(() => {
    //         if(newPosY === maxHeight - 30) {
    //             positionY = "top";
    //         }
    //         if(newPosY === 30) {
    //             positionY = "bottom";
    //         }

    //         if(positionY === "bottom") {
    //             newPosY += 1;
    //             fishRef.current.style.top = `${newPosY}px`;
    //             return;
    //         }

    //         if(positionY === 'top') {
    //             newPosY -= 1;
    //             fishRef.current.style.top = `${newPosY}px`;
    //             return;
    //         }

    //         fishRef.current.style.top = `${newPosY}px`;
    //     }, 20)
    // }

    // changePositionX()
    // changePositionY()

 


    let newPosY = posY;
    let positionY = "bottom"

    function changePositionY() {
        requestAnimationFrame(changePositionY)
        if(newPosY === maxHeight - 30) {
            positionY = "top";
        }
        if(newPosY === 30) {
            positionY = "bottom";
        }

        if(positionY === "bottom") {
            newPosY += 1;
            fishRef.current.style.top = `${newPosY}px`;
            return;
        }

        if(positionY === 'top') {
            newPosY -= 1;
            fishRef.current.style.top = `${newPosY}px`;
            return;
        }

        fishRef.current.style.top = `${newPosY}px`;
    }


    let newPosX = posX;
    let positionX = "right"

    function changePositionX() {
        requestAnimationFrame(changePositionX)
        if(newPosX === maxWidth - 30) {
            positionX = "left"; 
        }
        if(newPosX === 30) {
            positionX = "right";
        }

        if(positionX === "right") {
            newPosX += 1;
            fishRef.current.style.left = `${newPosX}px`;
            fishRef.current.style.transform = "scaleX(1)";
            return;
        }

        if(positionX === 'left') {
            newPosX -= 1;
            fishRef.current.style.left = `${newPosX}px`;
            fishRef.current.style.transform = "scaleX(-1)";
            return;
        }
    }

    requestAnimationFrame(changePositionY)
    requestAnimationFrame(changePositionX)


    return (
        <div 
            className='fish__wrapper'
            ref={fishRef}
            style={{top: `${posY}px`, left: `${posX}px`}}
        >
            <img 
                className='fish'
                src={src} 
                alt={alt}
            />
            <div 
                ref={healsRef}
                className='fish__heals'
            >
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    maxHeight,
    maxWidth
})

export default connect(mapStateToProps)(Fish)