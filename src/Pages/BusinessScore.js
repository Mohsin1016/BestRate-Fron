import React, { useState, useContext, useEffect } from "react";
import imglogo from "../assests/getmybestrate 1 (1).png";
import visa from "../assests/visa.png";
import card from "../assests/card.png";
import discover from "../assests/discover.png";
import amex from "../assests/amex.png";
import Card from "./Card";
import b1 from "../assests/best1.png";
import b2 from "../assests/best2.png";
import b3 from "../assests/best3.png";
import b4 from "../assests/best4.png";
import DynamicScoreMeter from "./DynamicScoreMeter";
import { ResponseContext } from "../context/useContext";
import { Modal, Box, Button, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%", // Makes it fluid for smaller screens
  maxWidth: "400px", // Limit width on larger screens
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  border: "none", // Remove the border
};
const BusinessScoreCard = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => setIsModalOpen(true);
  // const closeModal = () => setIsModalOpen(false);
  const { responseData } = useContext(ResponseContext);
  const [open, setOpen] = useState(false);
  const [processingFee, setProcessingFee] = useState();


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    generateProcessingFee();
  }, [])

  const generateProcessingFee = () => {
    const min = 3.36;
    const max = 3.46;
    const processing = (Math.random() * (max - min) + min).toFixed(2);
    setProcessingFee(processing);
    return processing;
  };
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      setOpen(false);
    }
  };

  const cards = [
    {
      title: "Flat Rate Program",
      logo: b1,
      fee: "0.00% ",
      description: [
        "No Transaction Fees",
        "No Processing Fees",
        "No Authorization Fees",
        "Flat Monthly Rate $0 - $299",
      ],
      rating: "A+",
    },
    {
      title: "Mobile Tablet Program",
      logo: b2,
      fee: "0.5% - 2.69% ",
      description: [
        "Low Transaction Fees",
        "Low Processing Fees",
        "Low Authorization Fees",
        "Flat Monthly Rate $0 - $299",
      ],
      rating: "A",
    },
    {
      title: "Cost Plus Program",
      logo: b3,
      fee: "0.5% ",
      description: [
        "Low Transaction Fees",
        "Low Processing Fees",
        "Low Authorization Fees",
        "Flat Monthly Rate $0 - $299",
      ],
      rating: "A-",
    },
    {
      title: "Point of Sale Program",
      logo: b4,
      fee: "0.00% ",
      description: [
        "Low Transaction Fees",
        "Low Processing Fees",
        "Low Authorization Fees",
        "Low Flat Monthly Rate",
      ],
      rating: "A+",
    },
  ];

  const pricingData = [
    {
      title: "Very Bad",
      setupFee: "$1199",
      monthlyFee: "$300",
      bgColor: "#ED6E61",
    },
    {
      title: "Poor",
      setupFee: "$899",
      monthlyFee: "$250",
      bgColor: "#F4974F",
    },
    {
      title: "Fair",
      setupFee: "$599",
      monthlyFee: "$195",
      bgColor: "#FECB26",
    },
    {
      title: "Good",
      setupFee: "$399",
      monthlyFee: "$155",
      bgColor: "#E19CF2",
    },
    {
      title: "Very Good",
      setupFee: "$299",
      monthlyFee: "$125",
      bgColor: "#28C0E1",
    },
    {
      title: "Excellent",
      setupFee: "$199",
      monthlyFee: "$95",
      bgColor: "#30D68A",
    },
  ];
  const [showLightbox, setShowLightbox] = useState(false);
  const score = responseData;

  const toggleLightbox = () => {
    setShowLightbox((prev) => !prev);
  };
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className=" rounded-lg max-w-lg w-full p-6">
          <div className="mb-6">
            <img
              src={imglogo}
              alt="Logo"
              className="w-40 sm:w-48 h-auto mx-auto"
            />
          </div>
          <p className="text-center text-base sm:text-lg font-bold text-[#3D3D3D]">
            <span className="block">CONGRATULATIONS!</span>
            <span className="block">
              YOU ARE{" "}
              <a
                href="/"
                style={{ textDecoration: "underline", paddingRight: "3px" }}
                className="text-[#6FC7AB] cursor-pointer"
                onClick={handleOpen}
              >
                APPROVED
              </a>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                onBackdropClick={handleBackdropClick}
              >
                <Box sx={style} onClick={handleBackdropClick}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    className="text-center"
                  >
                    Business Merchant Score
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Your Business Merchant Score is an algorithm rating that is
                    calculated using various data points that relate to your
                    business, such as your business history, merchant processing
                    history, transaction types, processing amounts, public
                    records, and other provided information.
                  </Typography>
                  <Typography sx={{ mt: 2 }}>
                    It is not a measure of creditworthiness and may be used to
                    determine your eligibility for certain Merchant Broker
                    Products and Programs within our provider network.
                  </Typography>
                </Box>
              </Modal>
              FOR A RATE REDUCTION!
            </span>
          </p>
          <div className="mt-6">
            <h2 className="text-center text-lg sm:text-xl font-bold text-gray-800">
              Business Merchant Score
              <span className="relative group">
                <button className="ml-2 text-gray-600 hover:text-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <circle cx="12" cy="12" r="10" className="fill-blue-100" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 16v-4m0-4h.01"
                    />
                  </svg>
                </button>
                <div className="absolute top-1/2 left-full ml-2 transform -translate-y-1/2 w-48 bg-white text-gray-800 text-sm rounded-md shadow-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  This score indicates the performance and reliability of the business merchant.
                </div>
              </span>
            </h2>
            
            <div className="mt-4 flex justify-center">
              <DynamicScoreMeter score={score} />
            </div>

            {showLightbox && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white p-6 rounded-lg max-w-md text-center">
                  <h3 className="text-lg font-bold mb-4">
                    Business Merchant Score Info
                  </h3>
                  <p>
                    The Business Merchant Score is calculated based on various
                    factors. Ranges are defined as:
                    <br />
                    <strong>Excellent:</strong> 800–850
                    <br />
                    <strong>Very Good:</strong> 750–799
                    <br />
                    <strong>Good:</strong> 700–749
                    <br />
                    <strong>Fair:</strong> 650–699
                    <br />
                    <strong>Poor:</strong> 600–649
                    <br />
                    <strong>Very Bad:</strong> 300–599
                  </p>
                  <button
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
                    onClick={toggleLightbox}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="mt-4 border rounded-lg shadow-lg p-4 sm:p-6 bg-[#F7F7F7]">
            <h3 className="text-center text-base sm:text-lg font-bold text-[#787878] mb-4">
              Your Current Processor *
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              <div className="text-center sm:text-left">
                <p className="text-3xl sm:text-5xl font-bold text-[#ED6E61]">
                  {processingFee}%
                </p>
                <p className="text-[#787878] text-sm sm:text-lg font-medium">
                  Processing Fee
                </p>
              </div>
              {/* Breakdown Section */}
              <div className="text-sm sm:text-base text-[#787878] space-y-1 sm:space-y-2">
                <p>0.15 Transaction Fees</p>
                <p>3.41% Processing Fees</p>
                <p>0.15 Authorization Fees</p>
                <p className="mt-4 text-sm sm:text-base ">
                  Flat Monthly Rate: Unavailable
                </p>
              </div>
            </div>

            {/* Payment Icons */}
            <div className="mt-6 flex justify-center">
              <div className="flex space-x-4">
                <img src={visa} alt="Visa" className="h-6 sm:h-8" />
                <img src={card} alt="Mastercard" className="h-6 sm:h-8" />
                <img src={discover} alt="Discover" className="h-6 sm:h-8" />
                <img src={amex} alt="American Express" className="h-6 sm:h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#5E7499] min-h-screen flex flex-col items-center justify-center py-10 px-4">
        <h1 className="text-white text-center text-2xl md:text-4xl font-bold mt-8  mb-10">
          Your Best Rate Search Results
        </h1>
        <div className="flex flex-wrap justify-center gap-6 px-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-full sm:w-[calc(40%-24px)] flex justify-center"
            >
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 py-8 min-h-[90vh]">
        <h2 className="text-center text-[#3D3D3D] text-2xl md:text-4xl mt-4 font-bold mb-6">
          Setup & Monthly Flat Fee
        </h2>
        <div className="flex flex-wrap justify-center  gap-4">
          {pricingData.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-6 rounded-lg text-white w-[48%] sm:w-[30%] md:w-[25%] lg:w-[13%]`}
              style={{ backgroundColor: item.bgColor }}
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-3xl font-bold mt-4">{item.setupFee}</p>
              <p className="text-sm">Setup Fee**</p>
              <p className="text-xl mt-2 font-semibold">{item.monthlyFee}</p>
              <p className="text-sm">Monthly Flat Fee</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-col text-sm items-start text-[#3D3D3D">
          <p className="text-center  w-full">
            * Current Processor calculations are based on average rates for
            merchants within the same industry and Merchant Score range.
          </p>
          <p className="text-center w-full">
            ** 50% Initial Consultation Discount paid by Visa / Mastercard -
            valid only on first-time visit.
          </p>
        </div>
      </div>
      <footer className=" bottom-0 w-full py-4 text-center bg-[#4D658E] text-[#D9DBE1]">
        © 2024-2025 Get My Best Rate. All rights reserved
      </footer>
    </>
  );
};

export default BusinessScoreCard;

// const Modal = ({ isOpen, closeModal }) => {
//   return (
//     <div
//       className={`fixed inset-0 bg-gray-600 bg-opacity-50 z-50 ${
//         isOpen ? "block" : "hidden"
//       }`}
//     >
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="bg-white p-6 rounded-lg max-w-2xl w-full">
//           <button
//             onClick={closeModal}
//             className="absolute top-3 right-3 text-xl text-gray-600"
//           >
//             ✕
//           </button>
//           <h2 className="text-xl font-semibold mb-4">
//             Business Merchant Score
//           </h2>
//           <p>
//             Your Business Merchant Score is an algorithm rating that is
//             calculated using various data points that relate to your business,
//             such as your business history, merchant processing history,
//             transaction types, processing amounts, public records, and other
//             provided information.
//           </p>
//           <p className="mt-2">
//             It is not a measure of creditworthiness and may be used to determine
//             your eligibility for certain Merchant Broker Products and Programs
//             within our provider network.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };
