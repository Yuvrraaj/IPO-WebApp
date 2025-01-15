import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className="flex justify-between items-center cursor-pointer py-4 px-2"
        onClick={toggleFaq}
      >
        <div className="text-base font-medium">{question}</div>
        <div
          className={`text-xl font-bold text-blue-600 transform transition-transform duration-300 ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        >
          <FaPlus />
        </div>
      </div>
      <div
        className={`px-2 text-sm whitespace-pre-line text-black overflow-hidden transition-all ease-in-out duration-150 ${
          isOpen ? "max-h-[500px] pb-4" : "max-h-0"
        }`}
      >
        {answer}
      </div>
    </div>
  );
};

const FAQSection = () => {
  const faqData = [
    {
      id: "faq1",
      question: "How to Subscribe to an IPO?",
      answer:
        "Step 1: Login to your service provider. \nStep 2: Select the IPO. \nStep 3: Enter the details.\nStep 4: Complete the payment.",
    },
    {
      id: "faq2",
      question: "Should I buy an IPO on the first day?",
      answer: "Answer to be given",
    },
    {
      id: "faq3",
      question: "How do you know if an IPO is good?",
      answer: "Answer to be given",
    },
    {
      id: "faq4",
      question: "How to check IPO start date?",
      answer: "Answer to be given",
    },
    {
      id: "faq5",
      question: "What is issue size?",
      answer: "Answer to be given",
    },
    {
      id: "faq6",
      question: "How many shares in a lot?",
      answer: "Answer to be given",
    },
    {
      id: "faq7",
      question: "How is the lot size calculated?",
      answer: "Answer to be given",
    },
    {
      id: "faq8",
      question: "Who decides the IPO price band?",
      answer: "Answer to be given",
    },
    {
      id: "faq9",
      question: "What is IPO GMP?",
      answer: "Answer to be given",
    },
    {
      id: "faq10",
      question: "How many lots should I apply for IPO?",
      answer: "Answer to be given",
    },
  ];

  return (
    <>
      {faqData.map((faq) => (
        <div key={faq.id} className="mb-4 bg-white rounded-lg p-2 w-[93vw]">
          <FaqItem question={faq.question} answer={faq.answer} />
        </div>
      ))}
    </>
  );
};

export default FAQSection;
