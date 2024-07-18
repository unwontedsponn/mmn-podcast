"use client"
import { useState } from 'react';

const faqs = [
  { question: "How many usually attend MMN?", answer: "The answer to this question will be provided here." },
  { question: "Can I speak with the speakers directly?", answer: "The answer to this question will be provided here." },
  { question: "What types of tech do you feature?", answer: "The answer to this question will be provided here." },
  { question: "Do I need to be making music to attend?", answer: "The answer to this question will be provided here." },
  { question: "Do I need to understand music theory?", answer: "The answer to this question will be provided here." },
  { question: "How frequent are the events?", answer: "The answer to this question will be provided here." },
  { question: "How do I become a speaker?", answer: "The answer to this question will be provided here." },
  { question: "How do I become a performer?", answer: "The answer to this question will be provided here." },
  { question: "Where are the events held?", answer: "The answer to this question will be provided here." },
  { question: "When are the events held?", answer: "The answer to this question will be provided here." }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex justify-between items-center p-8">
      <div className="w-2/3">
        <h1 className="text-3xl font-bold mb-6">FAQs</h1>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="text-left w-full text-xl py-2 font-semibold"
            >
              {faq.question}
            </button>
            <div className={`overflow-hidden transition-height duration-300 ease-in-out ${openIndex === index ? 'h-auto' : 'h-0'}`}>
              <p className="pl-4 text-gray-700 body-poppins">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-1/3 flex justify-center">
        {/* SVG Placeholder */}
        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 17V11H13V17H11ZM11 7V9H13V7H11Z" fill="#FF6347"/>
        </svg>
      </div>
    </div>
  );
};

export default FAQ;
