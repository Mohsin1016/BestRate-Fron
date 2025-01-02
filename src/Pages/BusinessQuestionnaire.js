import React, { useState, useContext } from "react";
import logo from "../assests/getmybestrate 1 (1).png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ResponseContext } from "../context/useContext";

const BusinessQuestionnaire = () => {
  const { setResponseData } = useContext(ResponseContext);
  const [formData, setFormData] = useState({
    businessDBA: "",
    legalName: "",
    taxID: "",
    entityType: "",
    businessAddress: "",
    city: "",
    state: "",
    zipcode: "",
    phone: "",
    email: "",
    operationLength: "",
    monthlyVolume: "",
    averageTicket: "",
    highTicket: "",
    bbb: "no",
    international: "no",
    chargebacks: "",
    legalSuits: "no",
    visaFine: "no",
    firstName: "",
    lastName: "",
    cellPhone: "",
    homeAddress: "",
    ownerCity: "",
    ownerState: "",
    ownerZipcode: "",
    ssn: "",
    dob: "",
    files: [],
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    setFormData((prevData) => ({ ...prevData, files: uploadedFiles }));
  };

  const handleSubmit = async () => {
    const apiUrl = "https://bestrate-back.onrender.com/api/form/submit";
    const data = new FormData();

    // Add form data to FormData object
    Object.keys(formData).forEach((key) => {
      if (key === "files") {
        formData.files.forEach((file) => data.append("files", file));
      } else {
        data.append(key, formData[key]);
      }
    });

    const userId = localStorage.getItem("userId");
    if (userId) {
      data.append("userId", userId);
    }

    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.post(apiUrl, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      setResponseData(response.data.score);
      console.log("Form submitted successfully", response.data);
      navigate("/progress_screen");
    } catch (error) {
      console.error("Error submitting the form", error);
    }
  };
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4">
        <div className="mb-6 text-center">
          <img src={logo} alt="Logo" className="w-full h-auto mx-auto" />
        </div>
        <h1 className="text-xl font-bold text-center mb-2">
          Business Questionnaire
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Please complete the form with all the fields complete.
        </p>
        <div className="w-full max-w-4xl mx-auto bg-white p-4 sm:p-6 rounded-lg shadow-md">
          {/* Business Information */}
          <section className="mb-6">
            <h2 className="text-[#4D658E] sm:text-lg font-semibold mb-2 border-b border-[#4D658E] pb-1">
              Business Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="businessDBA"
                value={formData.businessDBA}
                onChange={handleInputChange}
                placeholder="Business DBA"
                className="p-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4D658E]"
              />
              <input
                type="text"
                name="legalName"
                value={formData.legalName}
                onChange={handleInputChange}
                placeholder="Legal Name"
                className="p-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4D658E]"
              />
              <input
                type="text"
                name="taxID"
                value={formData.taxID}
                onChange={handleInputChange}
                placeholder="Tax ID Number"
                className="p-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4D658E]"
              />
              <select
                name="entityType"
                value={formData.entityType}
                onChange={handleInputChange}
                className="p-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4D658E]"
              >
                <option value="" disabled>
                  Select Entity Type
                </option>
                <option value="LLC">LLC</option>
                <option value="Corp">Corp</option>
                <option value="Sole Prop">Sole Prop</option>
              </select>

              <input
                type="text"
                name="businessAddress"
                value={formData.businessAddress}
                onChange={handleInputChange}
                placeholder="Business Address"
                className="col-span-1 sm:col-span-2 p-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4D658E]"
              />
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                placeholder="City"
                className="p-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4D658E]"
              />
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                placeholder="State"
                className="p-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4D658E]"
              />
              <input
                type="text"
                name="zipcode"
                value={formData.zipcode}
                onChange={handleInputChange}
                placeholder="Zipcode"
                className="p-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4D658E]"
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Business Phone Number"
                className="p-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4D658E]"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email Address"
                className="p-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4D658E]"
              />
            </div>
          </section>

          {/* Sales Information */}
          <section className="mb-6">
            <h2 className="text-[#4D658E] sm:text-lg font-semibold mb-2 border-b border-[#4D658E] pb-1">
              Sales Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input
                type="text"
                name="operationLength"
                value={formData.operationLength}
                onChange={handleInputChange}
                placeholder="Length of Operation"
                className="p-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4D658E]"
              />
              <select
                name="monthlyVolume"
                value={formData.monthlyVolume}
                onChange={handleInputChange}
                className="p-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4D658E]"
              >
                <option value="" disabled>
                  Select Average Monthly Volume
                </option>
                <option value="0-2500">0-2500</option>
                <option value="2500-5K">2500-5K</option>
                <option value="5K-10K">5K-10K</option>
                <option value="10K-20K">10K-20K</option>
                <option value="20K-50K">20K-50K</option>
                <option value="50K-100K">50K-100K</option>
                <option value="100K+">100K+</option>
              </select>

              <input
                type="text"
                name="averageTicket"
                value={formData.averageTicket}
                onChange={handleInputChange}
                placeholder="Average Ticket or Sale"
                className="p-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4D658E]"
              />
              <input
                type="text"
                name="highTicket"
                value={formData.highTicket}
                onChange={handleInputChange}
                placeholder="High Ticket Amount"
                className="col-span-1 sm:col-span-3 p-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4D658E]"
              />
            </div>
          </section>

          {/* Risk and Compliance Information */}
          <section className="mb-4">
            <h2 className="text-[#4D658E] sm:text-lg font-semibold mb-2 border-b border-[#4D658E] pb-1">
              Risk and Compliance Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-xs sm:text-sm block mb-1">
                  Open BBB Complaints
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="bbb"
                      value="Yes"
                      className="mr-2"
                      onChange={handleInputChange}
                    />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="bbb"
                      value="no"
                      className="mr-2"
                      onChange={handleInputChange}
                      checked={formData.bbb === "no"}
                    />
                    No
                  </label>
                </div>
              </div>
              <div>
                <label className="text-xs sm:text-sm block mb-1">
                  International Transactions
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="international"
                      value="Yes"
                      className="mr-2"
                      onChange={handleInputChange}
                    />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="international"
                      value="no"
                      className="mr-2"
                      onChange={handleInputChange}
                      checked={formData.international === "no"}
                    />
                    No
                  </label>
                </div>
              </div>
              <input
                type="text"
                name="chargebacks"
                value={formData.chargebacks}
                onChange={handleInputChange}
                placeholder="Chargebacks Last Year"
                className="p-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4D658E]"
              />
              <div>
                <label className="text-xs sm:text-sm block mb-1">
                  Open Legal Suits
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="legalSuits"
                      value="Yes"
                      className="mr-2"
                      onChange={handleInputChange}
                    />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="legalSuits"
                      value="no"
                      className="mr-2"
                      onChange={handleInputChange}
                      checked={formData.legalSuits === "no"}
                    />
                    No
                  </label>
                </div>
              </div>
              <div>
                <label className="text-xs sm:text-sm block mb-1">
                  Fined by Visa or MC
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="visaFine"
                      value="Yes"
                      className="mr-2"
                      onChange={handleInputChange}
                    />
                    Yes
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="visaFine"
                      value="no"
                      className="mr-2"
                      onChange={handleInputChange}
                      checked={formData.visaFine === "no"}
                    />
                    No
                  </label>
                </div>
              </div>
            </div>
          </section>

          {/* Owner Information */}
          <section className="mb-6">
            <h2 className="text-[#4D658E] sm:text-lg font-semibold mb-2 border-b border-[#4D658E] pb-1">
              Owner Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
                className="p-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4D658E]"
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
                className="p-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4D658E]"
              />
              <input
                type="text"
                name="cellPhone"
                value={formData.cellPhone}
                onChange={handleInputChange}
                placeholder="Cell Phone Number"
                className="p-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4D658E]"
              />
              <input
                type="text"
                name="homeAddress"
                value={formData.homeAddress}
                onChange={handleInputChange}
                placeholder="Home Address"
                className="col-span-1 sm:col-span-3 p-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4D658E]"
              />
              <input
                type="text"
                name="ownerCity"
                value={formData.ownerCity}
                onChange={handleInputChange}
                placeholder="City"
                className="p-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4D658E]"
              />
              <input
                type="text"
                name="ownerState"
                value={formData.ownerState}
                onChange={handleInputChange}
                placeholder="State"
                className="p-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4D658E]"
              />
              <input
                type="text"
                name="ownerZipcode"
                value={formData.ownerZipcode}
                onChange={handleInputChange}
                placeholder="Zipcode"
                className="p-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4D658E]"
              />
              <input
                type="text"
                name="ssn"
                value={formData.ssn}
                onChange={handleInputChange}
                placeholder="Social Security Number"
                className="p-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4D658E]"
              />
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleInputChange}
                placeholder="Date of Birth"
                className="p-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4D658E]"
              />
            </div>
          </section>

          {/* Document Upload */}
          <section className="mb-6">
            <h2 className="text-[#4D658E] sm:text-lg font-semibold mb-2 border-b border-[#4D658E] pb-1">
              Document Upload
            </h2>
            <div className="space-y-2 mb-4 mt-4">
              <label
                htmlFor="file-upload"
                className="w-full sm:w-auto px-4 py-2 border-[1px] border-[#787878] bg-white-500 text-[#787878] text-sm sm:text-base rounded-md cursor-pointer focus:outline-none mt-4"
              >
                Upload Files
              </label>
              <input
                id="file-upload"
                type="file"
                multiple
                onChange={handleFileUpload}
                className="hidden"
              />
            </div>
          </section>

          {/* Submit Button */}
          <div className="text-center">
            <button
              onClick={handleSubmit}
              className="w-full sm:w-auto px-6 py-2 bg-[#4D658E] text-white text-sm sm:text-base rounded-md hover:bg-[#8D658E] focus:outline-none "
            >
              Find My Best Rate
            </button>
          </div>
        </div>
      </div>

      <footer className=" bottom-0 w-full py-4 text-center bg-[#4D658E] text-[#D9DBE1]">
        © 2024-2025 Get My Best Rate. All rights reserved
      </footer>
    </>
  );
};

export default BusinessQuestionnaire;
