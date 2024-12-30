import React from "react";
import { FaCheck } from "react-icons/fa";

// Card Component
const Card = ({ title, logo, fee, description, rating }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center w-[300px]">
      <h3 className="text-lg text-[#3D3D3D] font-bold mb-4">{title}</h3>
      <img src={logo} alt={title} className="h-12 mb-4" />
      <p className="text-2xl font-bold text-[#6FC7AB]">{fee}</p>
      <p className="text-base font-bold text-[#393939] mb-4">Processing Fee</p>
      <ul className="text-sm mb-4">
        {description.map((desc, index) => (
          <li
            key={index}
            className="flex items-center gap-2 mb-1 text-left break-words"
          >
            <FaCheck className="text-[#393939] flex-shrink-0" />
            <span className="flex-1 text-[#393939">{desc}</span>
          </li>
        ))}
      </ul>
      <p className="font-bold text-[#3D3D3D]">
        Rating: <span className="text-[#6FC7AB] text-2xl ">{rating}</span>
      </p>
    </div>
  );
};

export default Card;
