import React from "react";

const SignUpFooter = () => {
  return (
    <div className="signup-footer">
      Already Have An Account? 
      {/* Trong ứng dụng thực tế, thay thế thẻ span này bằng <Link to="/login"> của react-router */}
      <span className="signup-link" onClick={() => window.location.href = '/'}>
        Sign In
      </span>
    </div>
  );
};

export default SignUpFooter;
