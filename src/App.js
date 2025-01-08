import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import BestRateOffer from "./Pages/BestRateOffer";
import BusinessQuestionnaire from "./Pages/BusinessQuestionnaire";
import ProgressScreen from "./Pages/ProgressScreen";
import BusinessScoreCard from "./Pages/BusinessScore";
import AdminUserPage from "./Pages/AdminUser";
import UserManagement from "./Pages/UserManagement";
import AddUserPage from "./Pages/AddUserPage";
import ProtectedRoute from "./Pages/ProtectedRoutes";
import { AuthProvider } from "./context/AuthContext.js";
function App() {
  const [users, setUsers] = useState([
    { id: 1, email: "johnsmith@google.com" },
    { id: 2, email: "johndoe@google.com" },
    { id: 3, email: "janesmith@google.com" },
    { id: 4, email: "janedoe@google.com" },
  ]);

  const handleAddUser = (newUser) => {
    setUsers((prevUsers) => [
      ...prevUsers,
      { id: prevUsers.length + 1, ...newUser },
    ]);
  };

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<LoginPage />} />

            <Route
              path="/best-rate-offer"
              element={
                <ProtectedRoute>
                  <BestRateOffer />
                </ProtectedRoute>
              }
            />
            <Route
              path="/business-questionnaire"
              element={<BusinessQuestionnaire />}
            />
            <Route path="/progress_screen" element={<ProgressScreen />} />
            <Route path="/business_scorecard" element={<BusinessScoreCard />} />



            <Route path="/admin_usermanagement" element={<AdminUserPage />} />
            <Route
              path="/usermanagement"
              element={<UserManagement users={users} setUsers={setUsers} />}
            />
            <Route
              path="/adduserpage"
              element={<AddUserPage addUser={handleAddUser} />}
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>

  );
}

export default App;
