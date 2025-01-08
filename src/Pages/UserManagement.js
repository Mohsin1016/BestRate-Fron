import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logoimg from "../assests/getmybestrate 1 (1).png";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null); 
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      // http://localhost:5000
      // https://bestrate-back.onrender.com
      const token = localStorage.getItem("authToken");
      const response = await axios.get("http://localhost:5000/api/admin/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(response.data);
    } catch (error) {
      setError("Failed to fetch users. Please try again.");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleEdit = (user) => {
    setSelectedUser(user); // Open modal with the selected user's data
    setNewEmail(user.email);
    setNewPassword(""); // Reset the password field
    
  };

  const handleSave = async () => {
    console.log(selectedUser)
    if (!newEmail || !newPassword) {
      setError("Email and password are required.");
      return;
    }

    try {
      const token = localStorage.getItem("authToken");
      console.log("⌛⌛⌛ id and token are both required" , `${selectedUser._id}` , "and" , token);

      const response = await axios.put(
        `http://localhost:5000/api/admin/user-update/${selectedUser._id}`,
        {id: selectedUser._id , email: newEmail, password: newPassword },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Update user in the state
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === selectedUser._id
            ? { ...user, email: response.data.user.email }
            : user
        )
      );

      setSelectedUser(null); // Close modal
      setError(""); // Clear errors
    } catch (error) {
      setError("Failed to update the user. Please try again.");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      
      try {
        const token = localStorage.getItem("authToken");

        await axios.delete(`http://localhost:5000/api/admin/user/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUsers(users.filter((user) => user._id !== id));
      } catch (error) {
        alert("Failed to delete the user. Please try again.");
      }
    }
  };

  const handleAddUser = () => {
    navigate("/adduserpage");
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/admin_usermanagement");
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
          onClick={handleLogout}
        >
          Logout
        </button>
      </header>

      <main className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md flex-grow p-4">
        <h2 className="text-lg text-[#3D3D3D] sm:text-2xl font-semibold text-center py-4">
          User Management
        </h2>
        {error && (
          <p className="text-red-500 text-center mb-4 text-sm">{error}</p>
        )}
        <div className="overflow-x-auto">
          <table className="w-full border-0 text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-[#4D658E]">
                <th className="p-2 pl-4 text-[#4D658E]">Email Address</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id} className="hover:bg-gray-100">
                  <td className="p-2 border-0 text-[#3D3D3D] text-base font-semibold">
                    {user.email}
                  </td>
                  <td className="p-2 border-0 font-semibold">
                    <button
                      className="text-[#4D658E] text-xs sm:text-sm hover:underline mr-2 sm:mr-4"
                      onClick={() => handleEdit(user)}
                    >
                      Edit
                    </button>
                    <span
                      className="text-[#4D658E]"
                      style={{ marginRight: "8px" }}
                    >
                      |
                    </span>
                    <button
                      className="text-[#4D658E] hover:text-red-600 text-xs sm:text-sm hover:underline"
                      onClick={() => handleDelete(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-4 mb-6">
          <button
            onClick={handleAddUser}
            className="px-3 sm:px-5 py-2 bg-[#4D658E] text-white rounded-lg text-sm sm:text-base hover:bg-[#8D658E] focus:outline-none"
          >
            Add User
          </button>
        </div>
      </main>

      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-96">
            <h3 className="text-lg font-semibold mb-4">Edit User</h3>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              className="w-full mb-4 p-2 border border-gray-300 rounded-md"
            />
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full mb-4 p-2 border border-gray-300 rounded-md"
            />
            <div className="flex justify-end">
              <button
                onClick={() => setSelectedUser()}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      <footer className="w-full mt-8 py-4 text-center bg-[#4D658E] text-[#D9DBE1]">
        © 2024-2025 Get My Best Rate. All rights reserved
      </footer>
    </div>
  );
};

export default UserManagement;
