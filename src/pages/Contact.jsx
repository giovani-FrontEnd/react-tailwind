import React from 'react'
// import images 
import WomanImg from '../imgs/woman-contact.png';
// import motion 
import {motion} from 'framer-motion';

function Contact() {
  return (
    <section className="section bg-white">
      <div className="container mx-auto h-full">
        <div className='flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left'>

          {/* bg  */}
          <div className="hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 -z-10">

          </div>
          <motion.div initial={{opacity: 0, x: '-80%'}} animate={{opacity: 1, x: '0%'}} exit={{opacity: 0, x: '-80%'}} transition={{delay: 0.1, duration: 0.8}} className='lg:flex-1 lg:pt-32 px-4'>
            <h1 className='h1'>Contact me</h1>
            <p className='mb-12'>I would love to get suggestions from you.</p>

          {/* text & form  */}
            <form className='flex flex-col gap-y-4'>
              <div className="flex gap-x-10">
                <div>
                  <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]' type="text" placeholder='Your name' />
                </div>
                <div>
                  <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]' type="text" placeholder='Your email address' />
                </div>
              </div>
              <input className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]' type="text" placeholder='Your message' />
              <button className='btn mb-[30px] mx-auto lg:mx-0 self-start'>Send it</button>
            </form>
          </motion.div>

          {/* image  */}
          <motion.div initial={{opacity: 0, x: '90%'}} animate={{opacity: 1, x: '0%'}} exit={{opacity: 0, x: '80%'}} transition={{delay: 0.2, duration: 1}} className='lg:flex-1 max-h-[450px]'>
            <img src={WomanImg} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
