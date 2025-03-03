import React from "react";
import { Card } from "../components/Card";
import { FaUserGraduate, FaUserTie, FaUserShield, FaBookReader } from "react-icons/fa"; // ✅ أيقونات المستخدمين
import "../styles/UserSelection.css";
import { Link } from "react-router-dom";

const UserCard = ({ icon: Icon, title, onClick }) => {
  return (
    <Card onClick={onClick} className="user-card">
      <Icon className="user-icon" />
      <p className="user-title">{title}</p>
    </Card>
  );
};

export default function SelectUserPage() {
  const handleUserSelect = (userType) => {
    console.log(`Selected User Type: ${userType}`);
    alert(`You selected: ${userType}`);
  };

  return (
    <div className="user-selection-container">

        {/* ✅ Right Section: Image */}
      <div className="image-section">
        <img src="/imgs/qr.jpeg" alt="Select User" className="user-image" />
      </div>


      {/* ✅ Left Section: User Selection Inside a Large Card */}
      <div className="selection-section">
        <Card className="selection-card">

          {/* ✅ Progress Bar Section */}
          <div className="progress-container">
            <img src="imgs\fs.jpeg" alt="Step Icon" className="step-icon" /> 
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "33%" }}></div> {/* Step 1 */}
            </div>
            <span className="step-text">Step 1</span>
          </div>
          <p>Login to your accouct</p>
          <h1 className="selection-title">Select User Type</h1>
          <div className="user-grid">
            <UserCard icon={FaUserShield} title="Admin" onClick={() => handleUserSelect("Admin")} />
            <UserCard icon={FaUserTie} title="Doctor" onClick={() => handleUserSelect("Doctor")} /> 
            <UserCard icon={FaBookReader} title="Teacher" onClick={() => handleUserSelect("Teacher")} /> 
            <UserCard icon={FaUserGraduate} title="Student" onClick={() => handleUserSelect("Student")} />
          </div>
          <Link to="/login" className="next-button">Next →</Link>
        </Card>
      </div>

      
    </div>
  );
}
