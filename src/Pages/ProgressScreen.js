import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assests/getmybestrate 1 (1).png";
import visa from "../assests/visa.png";
import card from "../assests/card.png";
import discover from "../assests/discover.png";
import amex from "../assests/amex.png";

const ProgressScreen = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          navigate("/business_scorecard");
          return 100;
        }
        return prev + 1;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow flex flex-col items-center justify-center text-center py-6">
          <div className="mb-6">
            <img src={logo} alt="Logo" className="w-48 h-auto mx-auto" />
          </div>
          <h1 className="text-lg font-semibold text-gray-800 mb-4">
            SEARCHING...
          </h1>
          <div className="w-11/12 sm:w-1/2 bg-gray-200 rounded-full h-4 overflow-hidden mb-4">
            <div
              className="bg-[#6FC7AB] h-full rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 text-center w-10/12 sm:w-2/3 lg:w-1/2 mx-auto mb-6">
            Please be patient. Our system is connecting with Visa, Mastercard,
            Discover, and American Express to gather your historical data and
            find you the best credit card processing options for your business.
          </p>
          <div className="flex space-x-4 mt-4">
            <img src={visa} alt="Visa" className="w-10 h-10" />
            <img src={card} alt="Mastercard" className="w-10 h-10" />
            <img src={discover} alt="Discover" className="w-10 h-10" />
            <img src={amex} alt="Amex" className="w-10 h-10" />
          </div>
        </div>
        <footer className="w-full py-4 text-center bg-[#4D658E] text-[#D9DBE1]">
          © 2024-2025 Get My Best Rate. All rights reserved
        </footer>
      </div>
    </>
  );
};

export default ProgressScreen;
