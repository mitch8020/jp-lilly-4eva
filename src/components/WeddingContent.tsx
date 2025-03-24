import Postcard from './Postcard';
import RSVPButton from './RSVPButton';

const WeddingContent: React.FC = () => {
  const generateCalendarEvent = () => {
    const event = {
      text: 'JP & Lilly Wedding',
      dates: '20251129T170000/20251129T230000',
      details: 'Join us for our wedding ceremony at Emerson Hall',
      location: '2512 Gallatin Avenue, Nashville, TN 37206',
      filename: 'jp-lilly-wedding.ics'
    };

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'BEGIN:VEVENT',
      `SUMMARY:${event.text}`,
      `DTSTART:${event.dates.split('/')[0]}`,
      `DTEND:${event.dates.split('/')[1]}`,
      `DESCRIPTION:${event.details}`,
      `LOCATION:${event.location}`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', event.filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-4 md:p-10 text-center max-w-7xl mx-auto w-full flex flex-col justify-center">
      <div className="space-y-6 md:space-y-12">
        <Postcard />
        <div>
          <div className="font-playfair text-gray-600 font-light tracking-wider space-y-4 md:space-y-6">
            <div className="text-xl md:text-2xl uppercase">Emerson Hall</div>
            <button 
              onClick={generateCalendarEvent}
              className="text-base md:text-lg hover:text-[#D4B9A9] transition-colors cursor-pointer"
            >
              Saturday, November 29, 2025
            </button>
            <div className="text-base md:text-lg">5:00 PM</div>
            
            <div className="text-base md:text-lg">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=2512+Gallatin+Avenue+Nashville+TN+37206" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block hover:text-[#D4B9A9] transition-colors cursor-pointer"
              >
                <p>2512 Gallatin Avenue</p>
                <p>Nashville, TN 37206</p>
              </a>
            </div>
          </div>
        </div>
        <div className="space-y-4 md:space-y-6">
          <div className="text-center">
            <a 
              href={import.meta.env.VITE_RSVP_GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-8 py-3 bg-[#E8D3C7] text-gray-800 rounded-full 
                transition-all duration-300 ease-in-out
                hover:bg-[#D4B9A9] hover:shadow-lg hover:scale-[1.02]
                active:scale-[0.98] active:shadow-md
                focus:outline-none focus:ring-2 focus:ring-[#D4B9A9] focus:ring-offset-2
                shadow-md"
            >
              RSVP
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingContent; 