import React from "react";

const FAQItem = ({ question, answer }) => {
  return (
    <div className="w-full p-4 shadow-md space-y-2 rounded-lg cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
      <h2 className="text-lg font-semibold">{question}</h2>
      <p className="text-sm text-gray-700">{answer}</p>
    </div>
  );
};

const FAQs = () => {
  const faqData = [
    {
      question: "What is MedImage and how does it work?",
      answer:
        "MedImage is an AI-powered platform that helps users analyze medical images to detect lung diseases. You can upload a medical scan, and our trained AI model will process the image and provide insights based on deep learning algorithms. The results help in early detection and better understanding of medical conditions.",
    },
    {
      question: "Is the analysis provided by MedImage accurate?",
      answer:
        "Our AI models are trained using a vast dataset of medical images and validated by medical professionals. While the system provides high-accuracy results, it is always recommended to consult a healthcare expert for a final diagnosis. AI tools serve as an aid, not a replacement, for professional medical advice.",
    },
    {
      question: "Can I use MedImage without any medical knowledge?",
      answer:
        "Yes, MedImage is designed to be user-friendly for both medical professionals and general users. The platform provides clear insights in simple terms, making it easy to understand the results. However, professional interpretation is advised for accurate medical conclusions.",
    },
    {
      question: "Is my medical data safe on MedImage?",
      answer:
        "We prioritize data privacy and security. All uploaded medical images are encrypted and stored securely. We follow strict compliance guidelines to ensure your personal health data remains confidential and is not shared with third parties without consent.",
    },
    {
      question: "How can I get started with MedImage?",
      answer:
        "Getting started is easy! Simply create an account, upload a medical scan, and let our AI analyze the image. Within moments, you’ll receive an AI-generated report with possible findings. If you need help, our support team is always available to assist you.",
    }
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">
            Frequently Asked Questions
          </h1>
          <p className="mt-2 text-center lg:text-start">
            Here are some common questions and answers to help you understand our platform better.
          </p>
        </div>
      </div>
      <div className="my-8 space-y-6">
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQs;
