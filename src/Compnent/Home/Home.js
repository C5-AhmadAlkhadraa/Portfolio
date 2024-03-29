import React from 'react'
import image from "../assets/unnamed.jpg"
import Button from 'react-bootstrap/Button'
import "./Home.css"
const Home = () => {
  return (
    <div className='test-height2'>
        <div id="Home" className='homeComponent'>
            <div className='row1'>
                <div className='col-ld-7 order-lg-1 order-2 banner-content'>
                    <h2 className='text-uppercase position-relative'>Hello!</h2>
                    <h1 className='text-uppercase'>I am Ahmad Alkhadra</h1>
                    <h2 className='text-uppercase'>Full Stack developer...</h2>
                    <h4 className='text-uppercase'>With an engineering background and a strong mentality for learning new things in relative fields and high speed of applying what have learned.</h4>
                    <div className='mt-5'>
                      <a   href='https://drive.google.com/file/d/1QBiHXWdzbyiT8N2y-AUFsQAgDVE5wYbm/view?usp=sharing'><Button className='main-btn secondary-btn'>Get CV</Button> </a>
                    </div>
                </div>
                
                    <div className='top-right-img'>
                        <img src={image} className='img-fluid'></img>
                    </div>
                
            </div>
        </div>
    </div>
  )
}

export default Home