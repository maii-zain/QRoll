import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SelectUserPage from "./pages/User_selection";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router> {/* يجب أن يكون هنا لضمان عمل Link و useContext */}
      <Routes>
        <Route path="/" element={<SelectUserPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;