import React from 'react'
// import { Card } from './Card'

const Loading = () => {
 return (
  <div data-testid = "loadingDiv" >
    <div className='broad'>
        <div className="heading">
          <h1  data-testid="loading">Loading Restaurants For You</h1>
          <h2>In Delhi</h2>
        </div>        
      </div>
      <div className='body'>
        <div className="search">
          <input type="text" onChange={(e)=>{}} value={"loading"}  />
          <button type='submit' >---</button>
        </div>
      </div>
  </div>
 )
}

export default Loading