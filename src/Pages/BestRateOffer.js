import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import logo from "../assests/getmybestrate 1 (1).png";

const BestRateOffer = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setErrorMessage(""); // Clear the error message when checkbox is toggled
  };

  const handleSubmit = () => {
    if (!isChecked) {
      setErrorMessage("Please check the consent check box before proceeding.");
    } else {
      navigate("/business-questionnaire");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col items-center justify-center flex-grow bg-gray-50 p-4">
        <div className="mb-6 text-center">
          <img src={logo} alt="Logo" className="w-full h-auto mx-auto" />
        </div>
        <h1 className="text-3xl font-bold text-[#393939] text-center mb-6">
          Find your best rate offer
        </h1>

        <div className="max-w-3xl p-6 rounded-lg">
          <p className="text-[#787878] mb-4">
            In order to conduct an accurate and comprehensive search for the
            best rate available for your business, our systems will connect with
            the database of Visa, Mastercard, Discover, and American Express.
            Our systems will search historical account and transactional
            information that is connected to your business as well as historical
            data gathered for the purpose of finding the best rate for your
            business.
          </p>
          <p className="text-[#787878] mb-4">
            If you have ever had an account terminated, suspended, or have been
            fined by any of the card brands, you may be ineligible for our
            service at this time, but you can request a rate assessment in 6
            months.
          </p>
          <p className="text-[#787878] mb-6">
            It is important that you be truthful in your answers. Providing
            false information to Visa, Mastercard, Discover, or American Express
            will result in disqualification from the program.
          </p>

          <div className="flex items-start mb-4">
            <input
              type="checkbox"
              id="consent"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              style={{ marginTop: "2px" }}
            />
            <label
              htmlFor="consent"
              className="ml-3 text-[#787878] text-sm leading-relaxed"
            >
              I understand Merchant Nova is a merchant services broker and not a
              merchant service processing company. By completing the form, I
              authorize Merchant Nova to conduct a search to determine the best
              processing rates for my business based on available options that
              meet my business type, transaction mix, previous business history,
              and other key business metrics. I understand that once the best
              rate options are provided to me, I am under no obligation to
              switch processors unless I choose to do so.
            </label>
          </div>

          {/* Centered Error Message and Button */}
          <div className="flex flex-col items-center justify-center">
            {errorMessage && (
              <p className="text-red-500 text-sm mb-4 text-center">
                {errorMessage}
              </p>
            )}
            <button
              onClick={handleSubmit}
              className="px-6 py-2 text-sm font-medium text-white bg-[#4D658E] rounded-lg hover:bg-[#8D658E] focus:outline-none"
            >
              Continue
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-4 text-center bg-[#4D658E] text-[#D9DBE1]">
        © 2024-2025 Get My Best Rate. All rights reserved
      </footer>
    </div>
  );
};

export default BestRateOffer;
