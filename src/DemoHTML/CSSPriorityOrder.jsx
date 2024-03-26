import React from "react";
import styles from "./CSSPriorityOrder.css";
/**
 * - In CSS, the priority order between an element, ID, and class is:
		1. Value defined as Important
		2. Inline
		3. ID nesting
		4. ID
		5. Class nesting
		6. Class
		7. Tag nesting
    8. Tag
 * */
export default function CSSPriorityOrder() {
  return (
    <>
      <div id="container" class="container">
        {/* <!-- 8. Tag --> */}
        Tag
        {/* <!-- 7. Tag nesting --> */}
        <p>Tag text</p>
        {/* <!-- 6. Class --> */}
        <p class="text">Class text</p>
        {/* <!-- 5. Class nesting --> */}
        <p id="class_text_with" class="text class-inline">
          Class text with{" "}
          <span id="nesting_style" class="class-nesting">
            nesting style
          </span>
        </p>
        {/* <!-- 4. ID --> */}
        <p id="myId">ID text</p>
        {/* <!-- 3. ID nesting --> */}
        <div id="container_small">
          <p id="myId">Nested ID text</p>

          {/* <!-- 2. Inline --> */}
          <p class="style-inline" style={{ color: "brown" }}>
            Inline text
          </p>

          {/* <!-- 1. Value defined as Important --> */}
          <p id="important" style={{ color: "brown" }}>
            Important text
          </p>
        </div>
      </div>
    </>
  );
}
