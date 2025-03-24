import { useState } from 'react';

interface Hotel {
  name: string;
  url: string;
  distance?: string;
  note?: string;
}

const hotels: Hotel[] = [
  {
    name: "The Gallatin",
    url: "https://thegallatinhotel.com/",
    note: "Next to the reception!"
  },
  {
    name: "Waymore's Guest House",
    url: "http://waymoresnashville.com",
    distance: "1.7 mi away"
  },
  {
    name: "The Russell",
    url: "https://www.russellnashville.com/",
    distance: "1.8 mi away"
  },
  {
    name: "Noelle",
    url: "https://www.noelle-nashville.com",
    distance: "3.7 mi away"
  },
  {
    name: "Bobby Hotel",
    url: "http://www.bobbyhotel.com/",
    distance: "3.7 mi away"
  },
  {
    name: "Dream Nashville, by Hyatt",
    url: "https://www.hyatt.com/dream-hotels/en-US/bnadz-dream-nashville?src=corp_lclb_google_seo_bnadz&utm_source=google&utm_medium=organic&utm_campaign=lmr",
    distance: "3.7 mi away"
  },
  {
    name: "Inn at Opryland (Marriott)",
    url: "https://www.marriott.com/en-us/hotels/bnagi-the-inn-at-opryland-a-gaylord-hotel/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0",
    distance: "5.6 mi away"
  },
];

const generateHotelList = (): string => {
  return hotels.map(hotel => 
    `<div class="flex justify-between items-center mb-2">
      <a href='${hotel.url}' target='_blank' rel='noopener noreferrer' class='text-[#D4B9A9] hover:text-[#E8D3C7] transition-colors'>${hotel.name}</a>
      <div class="text-gray-500">
        ${hotel.distance ? `<span>${hotel.distance}</span>` : ''}
        ${hotel.note ? `<span>${hotel.note}</span>` : ''}
      </div>
    </div>`
  ).join('');
};

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What time should I arrive?",
    answer: "The ceremony will begin promptly at 4:00 PM. We recommend arriving at least 15 minutes early to find parking and get seated."
  },
  {
    question: "Is there parking available?",
    answer: "Yes, there is free parking available at Emerson Hall. Additional parking can be found in the surrounding area if needed."
  },
  {
    question: "What is the dress code?",
    answer: "The dress code is semi-formal. We recommend cocktail attire or business casual."
  },
  {
    question: "Can I bring a plus one?",
    answer: "Please check your invitation for your specific guest allocation. If you have any questions, feel free to reach out to us."
  },
  {
    question: "Will there be a reception?",
    answer: "Yes, the reception will follow immediately after the ceremony at the same location."
  },
  {
    question: "Where can I stay?",
    answer: `Here are some recommended hotels in the area: <br/><br/>${generateHotelList()}`
  },
  {
    question: "Can I see pictures of your cats?",
    answer: "Of course! We'd love to share our furry family with you. <a href='/cats' class='text-[#D4B9A9] hover:text-[#E8D3C7] transition-colors'>Click here to meet our cats</a>."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-playfair text-center mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-medium text-gray-900">{item.question}</span>
              <span className="text-gray-500">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-gray-50">
                <div 
                  className="text-gray-600"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ; 