import React from 'react'
import "./Footer.scss"
function Footer() {
  return (
    <div className='footer d-flex align-items-center justify-content-between '>
        <div className='icons d-flex align-items-center justify-content-between'>
        <i class="bi bi-facebook"></i>
        <i class="bi bi-instagram"></i>
        <i class="bi bi-twitter"></i>
        <i class="bi bi-pinterest"></i>
        <i class="bi bi-tiktok"></i>
        <i class="bi bi-whatsapp"></i>
        <i class="bi bi-youtube"></i>
        </div>
        <p>© Start, 2022. All rights reserved.</p>
    </div>
  )
}

export default Footer