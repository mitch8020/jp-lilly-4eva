import Postcard from './Postcard';
import RSVPButton from './RSVPButton';

const WeddingContent: React.FC = () => {
  return (
    <div className="p-4 md:p-10 text-center max-w-7xl mx-auto w-full">
      <Postcard className="mb-10" />
      <h1 className="font-playfair text-4xl md:text-5xl text-[#1a1a1a] mb-5">
        JP & Lilly
      </h1>
      <div className="text-xl md:text-2xl text-[#4a4a4a] mb-10">
        November 29, 2025<br />
        Emerson Hall<br />
        Nashville, TN
      </div>
      <RSVPButton />
    </div>
  );
};

export default WeddingContent; 