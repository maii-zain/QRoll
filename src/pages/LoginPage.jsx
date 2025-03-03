import React from "react";
import { Card } from "../components/Card";
import LoginForm from "../components/LoginForm";
import "../styles/UserSelection.css"; // نفس الملف مع إضافة ستايل جديد

export default function LoginPage() {
  return (
    <div className="user-selection-container">

     

      {/* ✅ القسم الأيمن: صورة QR */}
      <div className="image-section">
        <img src="/imgs/qr.jpeg" alt="Login" className="user-image" />
      </div>
       {/* ✅ القسم الأيسر: نموذج تسجيل الدخول داخل كارد */}
       <div className="selection-section">
        <Card className="selection-card">
          
          {/* ✅ شريط التقدم Step 2 */}
          <div className="progress-container">
            <img src="imgs\fs.jpeg" alt="Step Icon" className="step-icon" />
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "66%" }}></div> {/* Step 2 */}
            </div>
            <span className="step-text">Step 2</span>
          </div>

          <LoginForm />
        </Card>
      </div>

    </div>
  );
}
