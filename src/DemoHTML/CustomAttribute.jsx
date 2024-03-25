import React, { useEffect } from "react";
import styles from "./CustomAttribute.css";

export default function CustomAttribute(params) {
  useEffect(() => {
    var element = document.getElementById("myElement");
    var customAttributeValue = element.dataset.customAttribute;
    console.log(element.dataset, customAttributeValue);

    var adjustElement = document.getElementById("adjustElement");
    var adjustAttributeValue = adjustElement.dataset.adjustAttribute;
    console.log(adjustElement.dataset, adjustAttributeValue);
  }, []);

  /**
   * Tạo một thuộc tính dữ liệu tùy chỉnh có tên là "data-custom-attribute" với giá trị "someValue" cho một phần tử <div>.
   * Bạn có thể truy xuất và sử dụng giá trị của thuộc tính dữ liệu này trong mã JavaScript hoặc CSS.
   * */
  return (
    <>
      <div id="myElement" data-custom-attribute="someValue">
        This is a custom attribute
      </div>

      <div id="adjustElement" data-adjust-attribute="adjust-Value">
        This is a adjust attribute
      </div>
    </>
  );
}
