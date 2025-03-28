import { useState } from 'react';
import aSide from '../assets/front-cover-cd.png';
import bSide from '../assets/back-cover-cd.png';

interface PostcardProps {
  className?: string;
}

const Postcard: React.FC<PostcardProps> = ({ className = '' }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className={`perspective-[1000px] w-full flex flex-col items-center ${className}`}>
      <div 
        className={`w-[95%] md:w-full max-w-[600px] aspect-[2840/2500] relative transition-transform duration-1000 cursor-pointer`}
        style={{ 
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)'
        }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className="absolute w-full h-full backface-hidden rounded-[15px] shadow-lg overflow-hidden">
          <img 
            src={aSide} 
            alt="Wedding invitation front" 
            className="w-full h-full object-cover"
          />
        </div>
        <div 
          className="absolute w-full h-full backface-hidden rounded-[15px] shadow-lg overflow-hidden"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <img 
            src={bSide} 
            alt="Wedding invitation back" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <p className="mt-1 md:mt-2 text-xs md:text-sm text-gray-500 italic animate-pulse">
        Click for more info
      </p>
    </div>
  );
};

export default Postcard; 