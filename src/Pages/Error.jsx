import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="error-page">
      <div className="error-content">
        <h1 className="error-title">404</h1>
        <h2 className="error-subtitle">Oops! Page Not Found</h2>
        <p className="error-message">
          The page you're looking for might have been removed or is temporarily unavailable.
        </p>
        <button className="error-btn" onClick={()=>navigate("/")}>
          Go Back to Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
