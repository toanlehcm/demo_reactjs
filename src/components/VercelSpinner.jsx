import React from "react";
import "./VercelSpinner.css";

/**
 * Đây là cách Vercel tối ưu hóa Animation.
 * Thay vì xoay trực tiếp thẻ <svg>, họ xoay thẻ <div> hoặc <span> bao quanh.
 * Điều này giúp kích hoạt Layer GPU (Hardware Acceleration) trong trình duyệt.
 */
export default function VercelSpinner({ size = 20, color = "currentColor" }) {
  return (
    // WRAPPER: Đây là nơi xử lý Animation
    // 'animate-spin' áp dụng transform: rotate() lên thẻ div này
    <div className="inline-block animate-spin" style={{ width: size, height: size }} aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "100%", height: "100%" }}>
        {/* SVG Element chỉ đóng vai trò hiển thị đồ họa tĩnh */}
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" />
        <path className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor" stroke="none" />
      </svg>
    </div>
  );
}

function BadSpinner({ size = 20, color = "currentColor" }) {
  return (
    <svg className="spin gpu-layer" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: size, height: size }}>
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" />
      <path className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function GoodSpinner({ size = 20, color = "currentColor" }) {
  return (
    <div className="spin gpu-layer inline-block" style={{ width: size, height: size }} aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: "100%", height: "100%" }}>
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" />
        <path className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor" stroke="none" />
      </svg>
    </div>
  );
}

// Cách dùng trong UI của Vercel
export function DeploymentStatus() {
  return (
    // <div className="flex items-center gap-2 p-4 border rounded-lg bg-black text-white w-fit">
    //   <VercelSpinner size={16} color="#0070f3" />
    //   <span className="text-sm font-medium">Building Deployment...</span>
    // </div>

    <div className="flex flex-col gap-4 p-4 bg-black text-white w-fit rounded-lg">
      <div className="flex items-center gap-2">
        <BadSpinner size={18} color="#ff4d4f" />
        <span className="text-sm">Animating SVG trực tiếp (dễ drop frame)</span>
      </div>

      <div className="flex items-center gap-2">
        <GoodSpinner size={18} color="#0070f3" />
        <span className="text-sm">Animating wrapper div (mượt hơn)</span>
      </div>
    </div>
  );
}
