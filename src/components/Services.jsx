import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion } from 'motion/react'

const Services = () => {

    const servicesData = [
        {
            title : 'Advertising',
            description : 'we turn bold ideas intp powerful digital solutions',
            icon : assets.ads_icon

        },
        {
            title : 'Social Media',
            description : 'we turn bold ideas intp powerful digital solutions',
            icon : assets.social_icon

        },
        {
            title : 'Content Marketing',
            description : 'we turn bold ideas intp powerful digital solutions',
            icon : assets.marketing_icon

        },
        {
            title : 'Content Writing',
            description : 'we turn bold ideas intp powerful digital solutions',
            icon : assets.content_icon

        },

    ]
  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{once:true}}
    transition={{staggerChildren:0.3}}
    id='services' className='relative flex flex-col items-center mt-3 gap-7 px-4 dark:text-white'>

        <img src={assets.bgImage2} className='absolute -top-110 -left-70 -z-1 dark:hidden' alt="" />

        <Title title='How can we Help' desc='from statergy to execution , we craft digital solutions that move your buisness forward' />

        <div className='flex flex-col md:grid grid-cols-2'>
            {servicesData.map((service, index)=>(
                <ServiceCard key={index} service={service} index={index} />
            ))}
        </div>
    </motion.div>
  )
}

export default Services