import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assests/getmybestrate 1 (1).png";
import { AuthContext } from "../context/AuthContext.js";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [formError, setFormError] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(!emailRegex.test(emailValue) ? "Please enter a valid email address." : "");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // const LoginPage = () => {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [formError, setFormError] = useState("");
  //   const { login } = useContext(AuthContext);
  //   const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://bestrate-back.onrender.com/api/user/login", {
        email,
        password,
      });
      console.log("response ✅✅✅✅", response);

      const { token, userId } = response.data;

      localStorage.setItem("authToken", token);
      localStorage.setItem("userId", userId);

      login(token);
      navigate("/best-rate-offer");
    } catch (error) {
      setFormError(error.response?.data?.message || "An error occurred.");
    }
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="mb-6 text-center">
        <img src={logo} alt="Logo" className="w-full h-auto mx-auto" />
      </div>

      <div className="w-full max-w-md p-6 rounded-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              value={email}
              onChange={handleEmailChange}
              className={`w-full px-4 py-2 text-sm border rounded-lg focus:outline-none ${emailError
                ? "border-red-500 focus:ring-red-500 focus:border-red-500"
                : "focus:ring-2 focus:ring-[#4D658E] focus:border-blue-500"
                }`}
            />
            {emailError && <p className="mt-1 text-sm text-red-500">{emailError}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4D658E] focus:border-blue-500"
            />
          </div>
          {formError && <p className="mb-4 text-sm text-center text-red-500">{formError}</p>}
          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 text-sm font-medium text-white bg-[#4D658E] rounded-lg hover:bg-[#8D658E] focus:outline-none"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>

      <footer className="absolute bottom-0 w-full py-4 text-center bg-[#4D658E] text-[#D9DBE1]">
        © 2024-2025 Get My Best Rate. All rights reserved
      </footer>
    </div>
  );
};

export default LoginPage;
