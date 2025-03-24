import Postcard from './Postcard';
import RSVPButton from './RSVPButton';

const WeddingContent: React.FC = () => {
  return (
    <div className="p-4 md:p-10 text-center max-w-7xl mx-auto w-full h-full flex flex-col justify-center">
      <div className="space-y-4 md:space-y-10">
        <Postcard />
        <h1 className="font-playfair text-3xl md:text-5xl text-[#1a1a1a]">
          JP & Lilly
        </h1>
        <div className="text-lg md:text-2xl text-[#4a4a4a]">
          November 29, 2025<br />
          Emerson Hall<br />
          Nashville, TN
        </div>
        <RSVPButton />
      </div>
    </div>
  );
};

export default WeddingContent; 