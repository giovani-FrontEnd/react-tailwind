import React from 'react'
// import images 
import Image1 from '../imgs/1.png';
import Image2 from '../imgs/2.png';
import Image3 from '../imgs/3.png';
import Image4 from '../imgs/4.png';
// import Link 
import { Link } from 'react-router-dom';
// import motion 
import {motion} from 'framer-motion'; 

function Portfolio() {
  return (
    <motion.section initial={{opacity: 0, y: '-100%'}} animate={{opacity: 1, y: '0%'}} exit={{opacity: 0, y: '-100%'}} transition={{delay: 0.2, duration: 0.5}}  className="section">
      <div className="container mx-auto h-full relative">
        <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>

          {/* text  */}
          <motion.div initial={{opacity: 0, y: '-80%'}} animate={{opacity: 1, y: '0%'}} exit={{opacity: 0, y: '-80%'}} transition={{delay: 0.2, duration: 0.5}} className='flex flex-col lg:items-start'>
            <h1 className='h1'>Portfolio</h1>
            <p className='mb-12 max-w-sm'>
              Lorem ipsum dolor sit, <b>Amet Consectetur</b> adipisicing elit. Facilis tenetur modi laborum dolores sed. Facilis repellendus dolor molestiae distinctio voluptas.
              <br />
              <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta et in harum voluptatibus sunt sed earum, rem veniam molestias deleniti.
            </p>
            <Link to='/contact' className='btn mb-[30px] mx-auto lg:mx-0'>
              Hire me
            </Link>
          </motion.div>

          {/* images  */}
          <div className='grid grid-cols-2 lg:gap-2'>
             <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
                <img src={Image1} className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' />
              </div>
              <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
                <img src={Image2} className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' />
              </div>
              <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
                <img src={Image3} className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' />
              </div>
              <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
                <img src={Image4} className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' />
              </div>
            </div>
          </div>
      </div>
    </motion.section>
  )
}

export default Portfolio
