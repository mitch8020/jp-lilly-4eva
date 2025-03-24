import { useState } from 'react';

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
                <p className="text-gray-600">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ; 