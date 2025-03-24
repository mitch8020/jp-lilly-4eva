import { motion } from 'framer-motion'
import { useState } from 'react'

import PlayfulTop from '../assets/playful-top.jpg'
import HazyVersion from '../assets/hazy-version.jpg'

const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  function handleFlip () {
    if (!isAnimating) {
      setIsAnimating(true)
      setIsFlipped(!isFlipped)
      setTimeout(() => setIsAnimating(false), 1000)
    }
  }

  return (
    <div className='flex items-center justify-center bg-black h-[800px] cursor-pointer'>
      <div className='flip-card w-[600px] h-[360px] rounded-md' onClick={handleFlip}>
        <motion.div 
        className='flip-card-inner w-[100%] h-[100%]'
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.6, animationDirection: 'normal' }}
        onAnimationComplete={() => setIsAnimating(false)}
        >
          <div className='flip-card-front w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4'>
            <img src={PlayfulTop} alt='Hazy Version' className='w-[100%] h-[100%] object-cover' />
            <h1 className='text-4xl font-bold'>Front</h1>
            <p>Hello world</p>
          </div>

          <div className='flip-card-back w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4'>
            <img src={HazyVersion} alt='Hazy Version' className='w-[100%] h-[100%] object-cover' />
            <h1 className='text-4xl font-bold'>Back</h1>
            <p>Goodbye</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default CardFlip