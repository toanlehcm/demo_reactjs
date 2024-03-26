import React from "react";
import styles from "./VariablesInPureCSS.css";

export default function VariablesInPureCSS() {
  return (
    <>
      {/*------ Using custom properties (CSS variables) ------*/}
      <div className="style-text">text</div>

      {/**
       * Using class .primary-color to apply color:
       * In pure CSS, the inherit keyword causes an element to take the computed value of a property from its parent element.
       * This means that if a parent element has a certain style applied to it,
       * any child elements within it that have that same property set to inherit will also inherit that style.
       */}
      <div class="primary-color">
        Content with primary color
        {/* Using class .element to apply inherit color from parent class. */}
        <div class="element">Content with inherited color</div>
      </div>

      {/*------ Using Hack Selector ------*/}
      <div class="color-main" data-color="adjust-color">
        Content
      </div>
    </>
  );
}
