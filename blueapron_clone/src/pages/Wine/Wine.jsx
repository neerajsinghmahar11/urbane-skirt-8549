import React from 'react'
import "./Wine.css"
import { NavLink } from 'react-router-dom'

const wine = () => {
  return (
    <div className='WinePage'>
      <div className='WineImage'>
        <div className='WineImageContent'>
          <h1 className='Heading'>
            Discover
            <br />
            dinnertime pairings
            <br />
          </h1>
          <h2>(and get all the juice details)</h2>
          <NavLink>
            <div className='WineButton'>GET STARTED</div>
          </NavLink>
        </div>
      </div>
      <div>
        <h2 className='Wine-How'>How It Works</h2>
      </div>
      <div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default wine