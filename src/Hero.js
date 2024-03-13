import React from 'react'
import './App.css';
let background="https://t3.ftcdn.net/jpg/05/54/51/44/360_F_554514472_8W2lWR9DWu3mHjv0m3i9dcfHTh1Cc4Ue.webp"
const Hero = () => {
  return (
    <section style={{background:{background}}} className='hero'>
     <h1 className='heaading'>CLICKOSHOT</h1>
     <p>Get in touch with nature photography</p>
    </section> 
  )
}

export default Hero