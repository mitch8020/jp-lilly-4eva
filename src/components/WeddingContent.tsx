import Postcard from './Postcard';
import RSVPButton from './RSVPButton';

const WeddingContent: React.FC = () => {
  return (
    <div className="p-4 md:p-10 text-center max-w-7xl mx-auto w-full flex flex-col justify-center">
      <div className="space-y-6 md:space-y-12">
        <div className="space-y-3">
          <h1 className="font-playfair text-4xl md:text-6xl text-[#1a1a1a] font-light tracking-widest uppercase">
            JP <span className="mx-4 font-light">&</span> Lilly
          </h1>
          <div className="w-16 h-px bg-gray-300 mx-auto my-6"></div>
        </div>
        <Postcard />
        <div>
          <div className="font-cormorant text-2xl md:text-3xl text-gray-600 font-light tracking-wider uppercase">
            <div className="mb-2">November 29, 2025</div>
            <div className="mb-2 font-playfair">Emerson Hall</div>
            <div>Nashville, Tennessee</div>
          </div>
        </div>
        <RSVPButton />
      </div>
    </div>
  );
};

export default WeddingContent; 