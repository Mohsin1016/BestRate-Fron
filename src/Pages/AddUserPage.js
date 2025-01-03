import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logoimg from "../assests/getmybestrate 1 (1).png";

const AddUserPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSave = async () => {
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const token = localStorage.getItem("authToken");
      console.log("token ", token);


      const response = await axios.post(
        "https://bestrate-back.onrender.com/api/admin/user",
        { email, password },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("response ", response);
      navigate("/usermanagement");
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };


  const handleCancel = () => {
    navigate("/usermanagement");
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      <header className="w-full flex justify-between items-center p-4">
        <img
          src={logoimg}
          alt="Logo"
          className="h-10 w-auto sm:h-14 md:h-16 object-contain"
        />
        <button
          className="text-gray-600 text-sm sm:text-base font-medium hover:underline"
          onClick={() => navigate("/admin_usermanagement")}
        >
          Logout
        </button>
      </header>

      <main className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md flex-grow p-6">
        <h2 className="text-lg sm:text-2xl font-semibold text-center py-4">
          Add User
        </h2>
        <div className="flex flex-col space-y-4">
          {error && (
            <div className="text-red-500 text-center text-sm font-medium mb-4">
              {error}
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-[#4D658E] focus:border-[#4D658E]"
              placeholder="Enter email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-[#4D658E] focus:border-[#4D658E]"
              placeholder="Enter password"
            />
          </div>
          <div className="flex justify-between mt-6">
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-[#4D658E] text-white rounded-md hover:bg-[#8D658E]"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="px-4 py-2 bg-[#BCBCBC] text-white rounded-md hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      </main>

      <footer className="w-full mt-8 py-4 text-center bg-[#4D658E] text-[#D9DBE1]">
        © 2024-2025 Get My Best Rate. All rights reserved
      </footer>
    </div>
  );
};

export default AddUserPage;
