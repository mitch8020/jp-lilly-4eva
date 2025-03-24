import Postcard from './Postcard';
import RSVPButton from './RSVPButton';

const WeddingContent: React.FC = () => {
  return (
    <div className="p-4 md:p-10 text-center max-w-7xl mx-auto w-full flex flex-col justify-center">
      <div className="space-y-6 md:space-y-12">
        <Postcard />
        <div>
          <div className="font-playfair text-gray-600 font-light tracking-wider space-y-4 md:space-y-6">
            <div className="text-xl md:text-2xl uppercase">Emerson Hall</div>
            <div className="text-base md:text-lg">November 29, 2025</div>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=2512+Gallatin+Avenue+Nashville+TN+37206" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="text-base md:text-lg group-hover:text-indigo-600 transition-colors">2512 Gallatin Avenue</div>
              <div className="text-base md:text-lg group-hover:text-indigo-600 transition-colors">Nashville, TN 37206</div>
            </a>
          </div>
        </div>
        <RSVPButton />
      </div>
    </div>
  );
};

export default WeddingContent; 