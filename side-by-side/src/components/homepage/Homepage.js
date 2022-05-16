import React from 'react'
import './homepage.css'
import emoji from '../../assests/homepage-emoji.svg'
function Homepage() {
  return (
    <div className='homepage-component'>
        <div className='image-side'>
            <img src ={emoji} alt='emoji' className='emoji' />          
            </div>

            <div className='content-side'>
                <h1>  החממה  </h1>    
                <p>קהילה תומכת דיגיטלית. </p>   
                <button className='home-login' > התחבר לאזור האישי</button>       
                <button className='home-waitinglist' > להצטרף לקהילה </button>
                </div>
    </div>
  )
}

export default Homepage