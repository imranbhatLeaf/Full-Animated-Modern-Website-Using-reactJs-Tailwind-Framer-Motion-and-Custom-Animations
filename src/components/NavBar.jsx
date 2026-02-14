import React from 'react'
import assets from '../assets/assets'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle'
import { easeOut, motion } from 'motion/react'
const NavBar = ({theme,setTheme}) => {
    const [sidebar, setsidebar] = useState(false)
  
  
    return (
    <motion.div 
    initial={{opacity:0,y:-50}}
    animate={{opacity:1,y:0}}
    transition={{duration:0.6,ease:'easeOut'}} 
    className=' py-2 flex justify-between items-center px-4 sm:px-10 lg:px-24 xl:px-40 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-950/70 '>

        <img src={theme === 'dark'? assets.logo_dark : assets.logo}
        className='w-32 sm:w-40' alt="Logo" />

        <div className={`text-gray-700 dark:text-white sm:text-sm ${!sidebar? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20
        flex sm:items-center gap-5 transition-all`}>
            <img onClick={()=>setsidebar(false)} src={assets.close_icon} className='w-5 absolute right-4 top-4 sm:hidden ' alt="" />

            <a onClick={()=>setsidebar(false)} href="#home"className='sm:hover:border-b'>Home</a>
            <a onClick={()=>setsidebar(false)}  href="#services"className='sm:hover:border-b'>Services</a>
            <a onClick={()=>setsidebar(false)}  href="#ourWork"className='sm:hover:border-b'>Our Work</a>
            <a onClick={()=>setsidebar(false)}  href="#contact"className='sm:hover:border-b'>contact</a>
            
        </div>

        <motion.div layout className='flex items-center gap-2 sm:gap-4'>
            <ThemeToggle theme={theme} setTheme={setTheme}/>
            <img src={theme ==='dark'?assets.menu_icon_dark :assets.menu_icon} onClick={()=>{setsidebar(true)}} className='w-8 sm:hidden' alt="" />
            <a href="#contact" className='text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all '>
                connect <img src={assets.arrow_icon} width={14} alt="connect" />
            </a>
        </motion.div>

    </motion.div>
  )
}

export default NavBar