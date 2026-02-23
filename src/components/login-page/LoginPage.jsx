import React from "react";

export default function LoginPage() {
  return (
    <div className="relative w-[1440px] h-[900px] bg-white">
      {/* Left Panel */}
      <div className="absolute left-[44px] top-[24px] w-[520px] h-[852px] flex flex-col items-start p-0 gap-[284px]">
        {/* Container */}
        <div className="flex flex-col items-center p-0 gap-[104px] w-[520px] h-[548px]">
          {/* Header */}
          <div className="flex flex-row items-center p-0 gap-[12px] w-[520px] h-[32px]">
            {/* Logo */}
            <div className="w-[83px] h-[32px] bg-[#7C9979] rounded" />
            {/* Vectors */}
            <div className="absolute left-[0.38%] top-[15.67%] w-[12px] h-[8px] bg-[#7C9979]" />
            <div className="absolute left-[46.87%] top-[30.17%] w-[12px] h-[8px] bg-[#7C9979]" />
            <div className="absolute left-[71.31%] top-[29.36%] w-[12px] h-[8px] bg-[#7C9979]" />
            <div className="absolute left-[88.6%] top-[14.87%] w-[12px] h-[8px] bg-[#7C9979]" />
            <div className="absolute left-[95.5%] top-[14.87%] w-[12px] h-[8px] bg-[#7C9979]" />
            {/* Orange Vectors */}
            <div className="absolute left-[18.55%] top-[18.66%] w-[12px] h-[8px] bg-[#E77544]" />
            <div className="absolute left-[22.43%] top-[32.35%] w-[12px] h-[8px] bg-[#E77544]" />
            <div className="absolute left-[18.06%] top-[17.4%] w-[12px] h-[8px] bg-[#E77544]" />
            <div className="absolute left-[18.31%] top-[18.03%] w-[12px] h-[8px] bg-[#E77544]" />
            <div className="absolute left-[26%] top-[1.78%] w-[12px] h-[8px] bg-[#E77544]" />
            <div className="absolute left-[27.7%] top-[51.89%] w-[12px] h-[8px] bg-[#E77544]" />
            <div className="absolute left-[25.76%] top-[1.15%] w-[12px] h-[8px] bg-[#E77544]" />
          </div>
          {/* Register Link */}
          <div className="w-[320px] h-[20px] text-right text-[#5C5C5C] font-inter text-[14px] leading-[20px] tracking-[-0.006em]">
            Don’t have an account? <span className="underline font-medium text-[#171717]">Register</span>
          </div>
          {/* Login Form */}
          <div className="flex flex-col items-end p-0 gap-[24px] w-[392px] h-[412px]">
            {/* Header */}
            <div className="flex flex-col items-center p-0 gap-[8px] w-[392px] h-[140px]">
              {/* Custom Icon */}
              <div className="flex flex-row justify-center items-center p-[16px] gap-[16px] w-[72px] h-[72px] bg-gradient-to-b from-[#7177841A] to-transparent rounded-full">
                {/* Key Icon */}
                <div className="flex flex-row justify-center items-center p-[16px] w-[48px] h-[48px] bg-white border border-[#EBEBEB] shadow-[0px_1px_2px_rgba(10,13,20,0.03)] rounded-full">
                  {/* User Icon */}
                  <div className="w-[32px] h-[32px] bg-[#5C5C5C] rounded" />
                </div>
              </div>
              {/* Title */}
              <div className="flex flex-col items-center p-0 gap-[4px] w-[392px] h-[60px]">
                <div className="w-[392px] h-[32px] text-center font-interDisplay font-medium text-[24px] leading-[32px] text-[#171717]">Login to Provider’s Portal</div>
                <div className="w-[392px] h-[24px] text-center font-inter text-[16px] leading-[24px] tracking-[-0.011em] text-[#5C5C5C]">Enter your credentials to access your account</div>
              </div>
            </div>
            {/* Forms */}
            <form className="flex flex-col items-center p-0 gap-[12px] w-[392px] h-[140px]">
              {/* Email Input */}
              <div className="flex flex-col items-start p-0 gap-[4px] w-[392px] h-[64px]">
                <div className="flex flex-row items-center p-0 gap-[1px] w-[392px] h-[20px]">
                  <span className="w-[94px] h-[20px] font-inter font-medium text-[14px] leading-[20px] text-[#171717]">Email</span>
                  <span className="w-[8px] h-[20px] font-inter font-medium text-[14px] leading-[20px] text-[#7C9979]">*</span>
                </div>
                <div className="flex flex-row items-center px-[12px] py-[10px] gap-[8px] w-[392px] h-[40px] bg-white border border-[#EBEBEB] shadow-[0px_1px_2px_rgba(10,13,20,0.03)] rounded-[10px]">
                  <span className="w-[20px] h-[20px] bg-[#A4A4A4] rounded" />
                  <input type="email" placeholder="hello@alignui.com" className="w-[342px] h-[20px] font-inter text-[14px] leading-[20px] text-[#A4A4A4] bg-transparent border-none outline-none" />
                </div>
              </div>
              {/* Password Input */}
              <div className="flex flex-col items-start p-0 gap-[4px] w-[392px] h-[64px]">
                <div className="flex flex-row items-center p-0 gap-[1px] w-[392px] h-[20px]">
                  <span className="w-[65px] h-[20px] font-inter font-medium text-[14px] leading-[20px] text-[#171717]">Password</span>
                  <span className="w-[8px] h-[20px] font-inter font-medium text-[14px] leading-[20px] text-[#7C9979]">*</span>
                </div>
                <div className="flex flex-row items-center px-[12px] py-[10px] gap-[8px] w-[392px] h-[40px] bg-white border border-[#EBEBEB] shadow-[0px_1px_2px_rgba(10,13,20,0.03)] rounded-[10px]">
                  <span className="w-[20px] h-[20px] bg-[#A4A4A4] rounded" />
                  <input type="password" placeholder="••••••••••" className="w-[314px] h-[20px] font-inter text-[14px] leading-[20px] text-[#A4A4A4] bg-transparent border-none outline-none" />
                  <span className="w-[20px] h-[20px] bg-[#A4A4A4] rounded" />
                </div>
              </div>
              {/* Supporting Content */}
              <div className="flex flex-row justify-center items-start p-0 gap-[12px] w-[392px] h-[20px]">
                {/* Checkbox */}
                <label className="flex flex-row items-start p-0 gap-[8px] w-[261px] h-[20px]">
                  <input type="checkbox" className="w-[20px] h-[20px] accent-[#EBEBEB] rounded-[4px]" />
                  <span className="w-[95px] h-[20px] font-inter text-[14px] leading-[20px] text-[#171717]">Remember me</span>
                </label>
                {/* Link Button */}
                <a href="#" className="w-[119px] h-[20px] font-inter font-medium text-[14px] leading-[20px] text-[#171717] underline text-right">
                  Forgot password?
                </a>
              </div>
              {/* Submit Button */}
              <button type="submit" className="flex flex-row justify-center items-center px-[10px] gap-[4px] w-[392px] h-[40px] bg-[#7C9979] rounded-[10px] font-inter font-medium text-[14px] leading-[20px] text-white">
                Login
              </button>
            </form>
          </div>
        </div>
        {/* Footer */}
        <div className="flex flex-row items-center p-0 gap-[12px] w-[520px] h-[20px]">
          <span className="w-[329px] h-[20px] text-[#5C5C5C] font-inter text-[14px] leading-[20px]">© 2024 B3well. All rights reserved.</span>
          <span className="w-[91px] h-[20px] text-[#5C5C5C] font-inter text-[14px] leading-[20px]">USD</span>
          <div className="flex flex-row items-center p-0 gap-[4px] w-[76px] h-[20px]">
            <span className="w-[20px] h-[20px] bg-[#A4A4A4] rounded" />
            <span className="w-[30px] h-[20px] text-[#5C5C5C] font-inter text-[14px] leading-[20px]">USD</span>
            <span className="w-[20px] h-[20px] bg-[#5C5C5C] rounded" />
          </div>
        </div>
      </div>
      {/* Right Panel */}
      <div className="absolute left-[604px] top-0 w-[836px] h-[900px] bg-[url('/public/right-panel.jpg')] bg-cover bg-center bg-black bg-opacity-20">
        {/* Text & Description */}
        <div className="absolute left-1/2 top-1/2 w-[808px] h-[96px] flex flex-col items-center p-0 gap-[8px] -translate-x-1/2 -translate-y-1/2">
          <div className="w-[808px] h-[40px] text-center font-interDisplay font-medium text-[32px] leading-[40px] text-white tracking-[-0.005em]">Simple. Personalized. Connected.</div>
          <div className="w-[764px] h-[48px] text-center font-inter text-[18px] leading-[24px] text-white tracking-[-0.015em]">With B3well Fertility EHR+, reproductive endocrinologists, nutritionists, therapists, coaches, and other providers can seamlessly deliver integrative, patient-centered care.</div>
        </div>
      </div>
    </div>
  );
}
