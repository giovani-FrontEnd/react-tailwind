import React from 'react'
// import images 
import WomanImg from '../imgs/woman.png';
// import link 
import { Link } from 'react-router-dom';
// import motion 
import { delay, motion }  from 'framer-motion';
// import transiton 
import { transition1 } from '../transition'; 

function Home() {
  return (
    <motion.section initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{ duration: 0.7 }} className="section">
      <div className="container mx-auto h-full relative">
        {/* text & img wrapper  */}
        <div className='flex flex-col justify-center'>

          {/* text  */}
          <motion.div initial={{opacity: 0, y: '-50%'}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: '-50%'}} transition={{ duration: 0.7 }} className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute lg:top-40 flex flex-col justify-center items-center lg:items-start'>
            <h1 className='h1'>Photograpger <br /> & film maker</h1>
            <p className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12'>Los Angeles, USA</p>
            <Link to={'/contact'} className='btn mb-[30px]'>Hire me</Link>
          </motion.div>

          {/* image  */}
          <div className='flex justify-end max-h-96 lg:max-h-max'>
            <motion.div initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}} exit={{opacity: 0, scale: 0}} transition={{ duration: 0.7 }} className='relative lg:-right-40 overflow-hidden'>
              <motion.img whileHover={{scale: 1.1}} src={WomanImg} alt="" />
            </motion.div>
            </div>
      </div>
        </div>
    </motion.section>
  )
}

export default Home
