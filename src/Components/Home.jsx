import React from 'react'
import banner from '../assets/Programming.png'
import '../App.css'
import Banner from '../shared/Banner'

const Home = () => {
  return (
    <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-24' id='home'>
        <Banner banner={banner} heading="Develop your without diligence" subheading="A good example of a paragraph Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt corrupti nisi architecto animi veniam facilis." btn1={'Get Started'} btn2={'Discount'}/>
    </div>
  )
}

export default Home