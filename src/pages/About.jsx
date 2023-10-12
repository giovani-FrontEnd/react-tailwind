import React from 'react'
// import images 
import WomanImg from '../imgs/woman-about.png';
// import Link 
import { Link } from 'react-router-dom';
// import motion 
import { delay, motion } from 'framer-motion';

function About() {
  return (
    <motion.section initial={{opacity: 0, y: '100%'}} animate={{opacity: 1, y: '0%'}} exit={{opacity: 0, y: '0'}} transition={{delay: 0.2, duration: 0.5}} className="sectio">
      <div className="container lg:px-[80px] pt-10 mx-auto h-screen relative">
        {/* text & img wrapper  */}
        <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>

          {/* image  */}
          <div className='flex-1 max-w-[400px] max-h-96 lg:max-h-[400px] order-2 lg:order-none overflow-hidden'>
            <img src={WomanImg} alt="" />
          </div>

          {/* text  */}
          <motion.div initial={{opacity: 0, y: '80%'}} animate={{opacity: 1, y: '0%'}} exit={{opacity: 0, y: '-80%'}} transition={{delay: 0.2, duration: 0.5}} className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center  items-center lg:items-start'>
            <h1 className='h1'>About me</h1>
            <p className='mb-12'>
              Lorem ipsum dolor sit amet <b>Consectetur Adipisicing</b> elit. Eum delectus eaque quibusdam aut repellat asperiores ab sit culpa voluptatem quo.
              <br />
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt dignissimos voluptatem assumenda, maiores modi aperiam voluptatum ipsam ratione. Dolor, eveniet?
            </p>
            
            <Link to='/portfolio' className='btn'>View my work</Link>
        </motion.div>
          </div>
        </div>
    </motion.section>
  )
}

export default About
