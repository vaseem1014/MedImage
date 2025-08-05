import React from "react";
import img from "../assets/img/about.jpg";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-center lg:text-start">About Us</h1>
        <p className=" text-justify lg:text-start">
        At our core, we believe that technology should make healthcare easier and more accessible. Our platform uses AI-powered medical image analysis to help users quickly and accurately detect potential diseases. By simply uploading a medical image, users can receive instant insights, allowing them to take the next steps with confidence.
        </p>
        <p className="text-justify lg:text-start">
        We’ve trained our AI model on a vast collection of medical data to ensure it delivers precise and reliable results. As technology evolves, so does our system, constantly learning and improving to provide the best possible support. Whether you're a patient looking for answers or a doctor seeking a second opinion, our platform is built to assist you.
        </p>
        <p className="text-justify lg:text-start">
        Beyond just analysis, we want to make the experience simple and stress-free. Our intelligent chatbot is here to guide you, answer questions, and help you understand your results. We’re committed to bridging the gap between AI and healthcare, making advanced medical insights available to everyone in a way that’s easy to use and trustworthy.
        </p>
      </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;
