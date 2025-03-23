import { motion } from 'framer-motion'
import { useState } from 'react'

import PlayfulTop from '../assets/playful-top.jpg'
import PlayfulBottom from '../assets/playful-bottom.jpg'
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
    <div>
      
    </div>
  )
}

export default CardFlip