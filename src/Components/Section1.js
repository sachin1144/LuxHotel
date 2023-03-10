import React from 'react'
import { Button } from 'react-bootstrap'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Section1() {
  return (
    <>
      <OwlCarousel className='owl-theme' items={1} loop={true} dots={false}  >
        <div className='banner-1'>
          <div className='text-light position-absolute banner-text'>
            <p>
              <i class="bi bi-star-fill text-warning"></i>
              <i class="bi bi-star-fill text-warning"></i>
              <i class="bi bi-star-fill text-warning"></i>
              <i class="bi bi-star-fill text-warning"></i>
              <i class="bi bi-star-fill text-warning"></i>
            </p>
            <h4>Luxury Hotel & Best Resort</h4>
            <h1 className='my-5'>Enjoy a Luxury Experience</h1>
            <Button className='bg-transparent btn-outline-light px-3 py-2'>ROOMS & SUITES</Button>
          </div>
        </div>
        <div className='banner-2'>
          <div className='text-light position-absolute banner-text'>
            <p>
              <i class="bi bi-star-fill text-warning"></i>
              <i class="bi bi-star-fill text-warning"></i>
              <i class="bi bi-star-fill text-warning"></i>
              <i class="bi bi-star-fill text-warning"></i>
              <i class="bi bi-star-fill text-warning"></i>
            </p>
            <h4 >Unique Place to Relax & Enjoy</h4>
            <h1 className='my-5'>The Perfect Base For You</h1>
            <Button className='bg-transparent btn-outline-light px-3 py-2'>ROOMS & SUITES</Button>
          </div>
        </div>
        <div className='banner-3'>
          <div className='text-light position-absolute banner-text'>
            <p>
              <i class="bi bi-star-fill text-warning"></i>
              <i class="bi bi-star-fill text-warning"></i>
              <i class="bi bi-star-fill text-warning"></i>
              <i class="bi bi-star-fill text-warning"></i>
              <i class="bi bi-star-fill text-warning"></i>
            </p>
            <h4 >The Ultimate Luxury Experience</h4>
            <h1 className='my-5'>Enjoy The Best Moments<br /> of Life</h1>
            <Button className='bg-transparent btn-outline-light px-3 py-2'>ROOMS & SUITES</Button>
          </div>
        </div>
        </OwlCarousel>
        {/* data-aos="fade-up" data-aos-duration="3000" */}
    </>
  )
}

export default Section1
