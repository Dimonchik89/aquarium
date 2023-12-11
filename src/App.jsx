import { useEffect, useState, useRef } from 'react'
import AddButton from './components/AddButton'
import Modal from './components/Modal'
import Fishs from './components/Fishs';
import { bindActionCreators } from '@reduxjs/toolkit';
import { connect } from 'react-redux'
import { changeMaxWidht, changeMaxHeight } from './store/fish';

import './App.css'

function App({ changeMaxWidht, changeMaxHeight }) {
    const [hiddenModal, setHiddenModal] = useState(true);
    const [fishArr, setFishArr] = useState([]);
    const containerRef = useRef();

    // ----------------------

    const [direction, setDirection] = useState("")

    const setStartDirection = () => {
        const rand = Math.random()

      if(rand > 0.5) {
        setDirection("right")
      } else {
        setDirection("left")
      }
    }

    const changeDirection = (arg) => {
      setDirection(arg)
    }


    // --------------------------

    const handleCahngeHiddenModal = () => {
      setHiddenModal(prev => !prev)
    }

    const handleAddFish = (fish) => {
      const posX = Math.floor(Math.random() * ((containerRef.current.clientWidth - 300) - 100 + 1))  + 100;
      const posY = Math.floor(Math.random() * ((containerRef.current.clientHeight - 150) - 50 + 1)) + 50;

      // console.log("posX", posX, containerRef.current.clientWidth);
      // console.log("posY", posY, containerRef.current.clientHeight);
      setStartDirection()

      setFishArr(prev => [...prev, { ...fish, posX, posY }])

      handleCahngeHiddenModal()
    }

    useEffect(() => {
      changeMaxHeight(containerRef?.current?.clientHeight - 50);
      changeMaxWidht(containerRef?.current?.clientWidth - 100)
    }, [containerRef])

    return (
      <div 
        className='container'
        ref={containerRef}
      >
          <AddButton 
            handleCahngeHiddenModal={handleCahngeHiddenModal}
            fishArr={fishArr}
            hiddenModal={hiddenModal}
          />
          <Modal 
            hiddenModal={hiddenModal}
            handleAddFish={handleAddFish}
          />
          <Fishs 
            fishArr={fishArr}
          />
      </div>
    )
}

const mapDispatchToProps = dispatch => ({
  changeMaxWidht: bindActionCreators(changeMaxWidht, dispatch),
  changeMaxHeight: bindActionCreators(changeMaxHeight, dispatch)
})

export default connect(null, mapDispatchToProps)(App)
