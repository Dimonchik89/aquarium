import React from 'react'
import Fish from './Fish'

const Fishs = ({fishArr}) => {

    
    const allFish = fishArr.map((fish, i) => <Fish key={`${fish.src}_${i}`} fish={fish} index={i}/>)

    return (
        <div>
            {allFish}
        </div>
    )
}

export default Fishs