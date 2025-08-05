import React from "react";
import Button from "../layouts/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleDiagnoseClick = () => {
    navigate("/diagnose");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/home.png')] bg-no-repeat bg-cover opacity-90">
      <div className="w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight">
          AI-Powered Medical Image Analysis for Fast and Accurate Diagnosis..
        </h1>
        <p>
          Upload your medical images and let our advanced AI model detect potential diseases with precision. Get instant insights with our intelligent chatbot for personalized guidance and support.
        </p>

        <div onClick={handleDiagnoseClick} className="inline-block cursor-pointer">
          <Button title="Get Diagnose" />
        </div>
      </div>
    </div>
  );
};

export default Home;
