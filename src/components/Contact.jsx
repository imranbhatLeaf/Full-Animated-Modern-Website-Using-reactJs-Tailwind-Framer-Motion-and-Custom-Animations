import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import toast from 'react-hot-toast'
import { motion } from 'motion/react'

const Contact = () => {

    const onSubmit = async (event) =>{
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "5bceb9c7-1019-438b-a1c9-a0a176df88d4");
    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData 
          
      });
      const data = await response.json();
      if(data.success){
          toast.success('thank you for the your response')
          event.target.reset()
      }
      else{
          toast.error(data.message)
  
      }
  }
         catch (error) {
            toast.error(error.message)
        
    }
}
       
  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    transition={{staggerChildren:0.2}}
    viewport={{once:true}}
    id='contact' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
        <Title title='Reach out to us' desc='From statergy to exeuction, we craft digital solutions that move your buisness forward' />

        <motion.form
        initial={{opacity: 0, y: 30}}
        whileInView={{opacity: 1, y:0}}
        transition={{duration: 0.5, delay: 0.4}}
        viewport={{once:true}}
        
        onSubmit={onSubmit} className='grid sm:grid-col-2 sm:gap-5 max-w-2xl w-full'>
            <div>
                <p className='mb-2 text-sm font-medium'>Your name</p>
                <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                    <img src={assets.person_icon} alt="" />
                    <input type="text" name='name' placeholder='enter your name' className='w-full text-sm py-2  mb-2 outline-none' />
                </div>
                
               
            </div>
            <div>
                <p className='mb-2 text-sm font-medium'>Your email</p>
                <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                    <img src={assets.person_icon} alt="" />
                    <input type="text" name='email' placeholder='enter your email' className='w-full text-sm py-2  mb-2 outline-none' />
                </div>
                
               
            </div>
            <div className='sm:col-span-2'>
                <p>Message</p>
                <textarea rows={8} name='message' required placeholder='enter your message' className='w-full pl-2 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600'></textarea>
            </div>

            <button type='submit' className='w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all'>submit <img src={assets.arrow_icon} className='w-4' alt="" /></button>

        </motion.form>
    </motion.div>
  )
}

export default Contact