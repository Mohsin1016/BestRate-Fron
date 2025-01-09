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
              element={
                <ProtectedRoute>
                  <BusinessQuestionnaire />
                </ProtectedRoute>
              }
            />
            <Route
              path="/progress_screen"
              element={
                <ProtectedRoute>
                  <ProgressScreen />
                </ProtectedRoute>
              }
            />
            <Route
              path="/business_scorecard"
              element={
                <ProtectedRoute>
                  <BusinessScoreCard />
                </ProtectedRoute>
              }
            />
            <Route path="/admin_usermanagement" element={<AdminUserPage />} />
            <Route
              path="/usermanagement"
              element={
                <ProtectedRoute>
                  <UserManagement users={users} setUsers={setUsers} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/adduserpage"
              element={
                <ProtectedRoute>
                  <AddUserPage addUser={handleAddUser} />
                </ProtectedRoute>
              }
            />
          </Routes>

        </div>
      </Router>
    </AuthProvider>

  );
}

export default App;
