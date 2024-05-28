import React from 'react'
import Banner from '../shared/Banner'
import BannerImg from '../assets/newsletter.png'
const Newsletter = () => {
  return (
    <div className='md:px-14 max-w-screen-2xl p-4 mx-auto my-12'>
        <Banner banner={BannerImg} heading='Each student an share their discount code for friends' subheading={'A simple paragraph of three major components. The first sentence, which is often declarative sentence,is called the "topic sentence.'} btn1={'I have a code'} btn2={""}/>
    </div>
  )
}

export default Newsletter