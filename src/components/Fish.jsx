import React, { useEffect, useRef } from 'react'
import { createStructuredSelector } from 'reselect';
import { maxWidth, maxHeight } from '../store/fish';
import { connect } from 'react-redux';

import "../style/fish.css";

const Fish = ({ fish: { src, alt, posX, posY, name }, index, maxHeight, maxWidth }) => {
    const fishRef = useRef(null)
    const healsRef = useRef(null)
    const titleRef = useRef(null)
    const fishImgRef = useRef(null)
    const nameRef = useRef(null)
    let heals = 100;

    function changeHealsLineColor(heals) {
        if(heals <= 0) {
            titleRef.current.classList.add("hidden")
            fishImgRef.current.src = "./dead.png"
            setTimeout(() => {
                fishRef.current.style.display = "none"
            }, 2000)
            return;
        }
        if(heals <= 25) {
            healsRef.current.style.background = "red";
            if(titleRef.current.classList.contains("hidden")) {
                titleRef.current.classList.remove("hidden")
            }
            return;
        }
        if(heals <= 50) {
            healsRef.current.style.background = "orange";
            return;
        }
        if(heals <= 75) {
            healsRef.current.style.background = "yellow";
        }
        if(heals >= 90) {
            healsRef.current.style.background = "green";
        }
    }


    useEffect(() => {
        if(healsRef?.current) {
            function changeHeals() {
                heals -= 0.05;
                healsRef.current.style.width = `${heals}%`
                changeHealsLineColor(heals);

                if(heals > 0) {
                    requestAnimationFrame(changeHeals)
                }
            }

            if(heals > 0) {
                requestAnimationFrame(changeHeals)
            }
        }

    }, [healsRef])
 


    let newPosY = posY;
    let positionY = "bottom"

    function changePositionY() {
        if(heals > 0) {
            requestAnimationFrame(changePositionY)
        }
        if(newPosY === maxHeight - 46) {
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
        if(heals > 0) {
            requestAnimationFrame(changePositionX)
        }
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
            titleRef.current.style.transform = "scaleX(1)";
            nameRef.current.style.transform = "scaleX(1)";
            return;
        }

        if(positionX === 'left') {
            newPosX -= 1;
            fishRef.current.style.left = `${newPosX}px`;
            fishRef.current.style.transform = "scaleX(-1)";
            titleRef.current.style.transform = "scaleX(-1)";
            nameRef.current.style.transform = "scaleX(-1)";
            return;
        }
    }

    requestAnimationFrame(changePositionY)
    requestAnimationFrame(changePositionX)

    function feedFish() {
        heals = 100;
        titleRef.current.classList.add("hidden")
    }

    return (
        <div 
            className='fish__wrapper'
            ref={fishRef}
            onClick={feedFish}
            style={{top: `${posY}px`, left: `${posX}px`}}
        >
            <p 
                ref={titleRef}
                className='fish__title hidden'
            >
                feed me
            </p>
            <p 
                ref={nameRef}
                className='fish__name'
            >
                {name}
            </p>
            <img 
                ref={fishImgRef}
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