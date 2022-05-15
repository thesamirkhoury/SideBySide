import React from 'react'

import './CouponPopup.css'
function CouponPopup() {
  return (
    <div className='coupon-pop'>
        <div>
        <h1 id='heading'>
        קוד הקופון שלך
        </h1>
        <div className='coupon-code'>
            <p className='coupon'>ABC123</p> 
        </div>
        <button className='coupon-btn'>סגור</button>
        </div>
    </div>
  )
}

export default CouponPopup