import { useState } from 'react';
import playfulTop from '../assets/playful-top.jpg';
import playfulBottom from '../assets/playful-bottom.jpg';

interface PostcardProps {
  className?: string;
}

const Postcard: React.FC<PostcardProps> = ({ className = '' }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={`perspective-[1000px] w-full flex justify-center ${className}`}>
      <div 
        className={`w-full max-w-[600px] aspect-[3/2] relative transition-transform duration-1000 cursor-pointer`}
        style={{ 
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)'
        }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className="absolute w-full h-full backface-hidden rounded-[15px] shadow-lg overflow-hidden">
          <img 
            src={playfulTop} 
            alt="Wedding invitation front" 
            className="w-full h-full object-cover"
          />
        </div>
        <div 
          className="absolute w-full h-full backface-hidden rounded-[15px] shadow-lg overflow-hidden"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <img 
            src={playfulBottom} 
            alt="Wedding invitation back" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Postcard; 