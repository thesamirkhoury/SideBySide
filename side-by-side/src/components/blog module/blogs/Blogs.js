import React from 'react'
import SingleBlog from './SignleBlog'
import {BsSearch} from 'react-icons/bs'
import './Blogs.css'
function Blogs() {
  return (
    <div className='Blog-container'>
        <div className='upper-portionB'>
           
            <div className='input-parentB'>
            <input className='input-boxB' dir='rtl' placeholder='הזין ערך לחיפוש'/>
            <BsSearch/>
            </div>
        </div>

        <div className='grid-containerB'>
        <SingleBlog/>
        <SingleBlog/>
        <SingleBlog/>

        </div>
    </div>
  )
}

export default Blogs