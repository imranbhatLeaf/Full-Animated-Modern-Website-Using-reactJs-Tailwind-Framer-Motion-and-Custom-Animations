import React from 'react'
import assets from '../assets/assets'
import { motion } from 'motion/react'
const Footer = ({theme}) => {
  return (
    <motion.div
    initial={{opacity:0,y:20}}
    whileInView={{opacity:1,y:0}}
    transition={{duration:0.6}}
    viewport={{once:true}}
    className='bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20
    sm:mt-40 px-4 sm:px-10 lg:px-24
    xl:px-40'>
        <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'>
            <div className='space-y-5 text-sm text-gray-700'>
                <img src={theme==='dark'?assets.logo_dark:assets.logo} className='w-32 sm:w-44' alt="" />
                <p className='max-w-md'>From scratch to execution, we craft digital solutions that move your buisness forward</p>

                    <ul className='flex gap-5'>
                        <li><a className='hover:text-primary' href="#home"></a>Home</li>
                        <li><a className='hover:text-primary' href="#Service"></a>Services</li>
                        <li><a className='hover:text-primary' href="#ourWork"></a>Our Works</li>
                        <li><a className='hover:text-primary' href="#contact"></a>Contact us</li>
                    </ul>           
            </div>

            <div className='text-gray-600 dark:text-gray-900'>
                <h3 className='font-semibold mt-2 mb-2'>Subscribe to newsletter</h3>
                <p className='text-sm mt-2 mb-5'>The latest news, articles, and resources, sent to your inbox weekly</p>
                <div className='flex text-sm gap-2'>
                    <input type="email" placeholder='enter your email' className='w-full  p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-50'/>
                    <button className='bg-primary text-white hover:bg-white transition-all duration-300 ease-in
                     hover:text-primary rounded px-6'>Subscribe</button>
                </div>
            </div>
        </div>
            <hr className='border-gray-500 dark:border-gray-900 my-6' />
            <div className='pb-6 text-sm text-gray-500 flex justify-center gap-4 sm:justify-between flex-wrap '>
                <p>Copyright 2025 agency ai</p>
                <div className='flex items-center justify-between gap-4'>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.instagram_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
    </motion.div>

  )
}

export default Footer