import React, { useState } from "react";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Xử lý thay đổi input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear lỗi nếu user đang gõ lại
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  // Logic validate cơ bản
  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Giả lập Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        console.log("Account created with data:", formData);
        alert("Sign Up Successful! (Check Console)");
        setIsSubmitting(false);
      }, 1000);
    }
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      
      <div className="signup-input-group">
        <input 
          type="email" 
          name="email"
          placeholder="Email Address" 
          className={`signup-input ${errors.email ? 'signup-input-error' : ''}`}
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="signup-error-text">{errors.email}</span>}
      </div>

      <div className="signup-input-group">
        <input 
          type="password" 
          name="password"
          placeholder="Password" 
          className={`signup-input ${errors.password ? 'signup-input-error' : ''}`}
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <span className="signup-error-text">{errors.password}</span>}
      </div>

      <button 
        type="submit" 
        className="signup-submit-btn"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Creating..." : "Create Account"}
      </button>

    </form>
  );
};

export default SignUpForm;
