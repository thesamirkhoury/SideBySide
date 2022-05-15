import React from 'react'
import UpdateCard from './UpdateCard'
import {BsSearch} from 'react-icons/bs'
import './updates.css'
function Updates() {
  return (
    <div className='update-container'>
        <div className='upper-portion'>
            <div className='info'>
                <button id='btn-2'>הצג הכל</button>
                <div id='str-top'>עדכונים אחרונים</div>
            </div>
            <div className='input-parent'>
            <input lang='Hebrew' className='input-box' placeholder='הזין ערך לחיפוש'/>
            <BsSearch/>
            </div>
        </div>

        <div className='grid-container'>
        <UpdateCard/>
        <UpdateCard/>
        <UpdateCard/>

        </div>
    </div>
  )
}

export default Updates