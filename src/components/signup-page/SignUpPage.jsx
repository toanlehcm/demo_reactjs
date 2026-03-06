import React from "react";
import "./SignUpPage.css";
import SignUpHeader from "./SignUpHeader";
import SignUpForm from "./SignUpForm";
import SignUpFooter from "./SignUpFooter";

const SignUpPage = () => {
  return (
    <div className="signup-page-root">
      <div className="signup-page-background">
        {/* Decorative background blobs to mimic the Figma design */}
        <div className="signup-blob signup-blob-1"></div>
        <div className="signup-blob signup-blob-2"></div>
        
        <div className="signup-page-container">
          <SignUpHeader />
          <SignUpForm />
          <SignUpFooter />
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
