import React, { useState, useMemo } from "react";
// Nếu dùng React 17, đảm bảo bạn có dòng này trong src/index.js:
// import ReactDOM from 'react-dom';
// ReactDOM.render(<App />, document.getElementById('root'));

// Giả lập một danh sách lớn để mô phỏng tác vụ nặng.
const ALL_ITEMS = Array.from(
  { length: 20000 },
  (_, i) => `Item number ${i + 1}`
);

// Hàm mô phỏng tác vụ nặng: Lọc danh sách và làm chậm CPU.
function filterHeavy(query, items) {
  // Simulate CPU-intensive work.
  for (let i = 0; i < 1000000000; i++) {
    /* Do nothing */
  }
  return items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );
}

export default function WithoutUseTransition() {
  const [inputValue, setInputValue] = useState("");
  const [filterQuery, setFilterQuery] = useState(""); // State để lọc danh sách.

  // Xử lý khi input thay đổi
  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value); // Cập nhật input (cần phản hồi ngay lập tức)

    // Cập nhật filterQuery và kích hoạt tác vụ lọc nặng
    // Trong React 17, cập nhật này cũng được coi là khẩn cấp
    setFilterQuery(value);
  };

  // Sử dụng useMemo để tránh lọc lại nếu query không đổi (nhưng vẫn sẽ render khi query đổi)
  const filteredItems = useMemo(() => {
    console.log(`[R17] Lọc danh sách cho: "${filterQuery}"`);
    return filterHeavy(filterQuery, ALL_ITEMS).slice(0, 50); // Chỉ hiển thị 50 kết quả đầu
  }, [filterQuery]); // Chạy lại khi filterQuery thay đổi

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>React 17: UI Bị Chặn</h1>
      <p style={descriptionStyle}>
        Gõ vào ô dưới đây. Bạn sẽ thấy UI bị giật/lag khi có tác vụ lọc nặng.
      </p>

      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Gõ để lọc..."
        style={inputStyle}
      />

      <p style={statusStyle}>
        Kết quả tìm kiếm cho:{" "}
        <span style={highlightStyle}>{filterQuery || "Trống"}</span>
      </p>

      <div style={listContainerStyle}>
        {filteredItems.length === 0 && inputValue !== "" ? (
          <p style={noResultStyle}>Không tìm thấy kết quả.</p>
        ) : (
          <ul style={ulStyle}>
            {filteredItems.map((item, index) => (
              <li key={index} style={liStyle}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
      <p style={noteStyle}>Kiểm tra cảm giác gõ phím.</p>
    </div>
  );
}

// Basic Styles
const containerStyle = {
  fontFamily: "Inter, sans-serif",
  textAlign: "center",
  padding: "20px",
  backgroundColor: "#FEE2E2", // red-100 for R17
  borderRadius: "8px",
  maxWidth: "600px",
  margin: "50px auto",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  border: "1px solid #EF4444", // red-500
};

const headerStyle = { color: "#DC2626", marginBottom: "15px" }; // red-600
const descriptionStyle = { color: "#4B5563", marginBottom: "20px" };
const inputStyle = {
  width: "80%",
  padding: "10px",
  fontSize: "1em",
  border: "1px solid #CCC",
  borderRadius: "4px",
  marginBottom: "15px",
};
const statusStyle = { color: "#374151", marginBottom: "10px" };
const highlightStyle = { fontWeight: "bold", color: "#DC2626" };
const listContainerStyle = {
  height: "200px",
  overflowY: "auto",
  border: "1px solid #E5E7EB",
  borderRadius: "4px",
  backgroundColor: "#FFF",
  padding: "10px",
};
const ulStyle = { listStyleType: "none", padding: "0" };
const liStyle = {
  padding: "5px 0",
  borderBottom: "1px dotted #E5E7EB",
  textAlign: "left",
};
const noResultStyle = { color: "#EF4444", fontStyle: "italic" };
const noteStyle = { fontSize: "0.9em", color: "#6B7280", marginTop: "15px" };
