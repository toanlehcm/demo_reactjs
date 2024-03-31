import styles from "./InlineBlock.css";

export default function InlineBlock() {
  return (
    <>
      {/*------ 1. Not enough space in the container. ------*/}
      <div class="container-not-enough-space">
        <div class="inline-block-element">Element 1</div>
        <div class="inline-block-element">Element 2</div>
        <div class="inline-block-element">Element 3</div>
        <div class="inline-block-element">Element 4</div>
      </div>

      {/*------ 2. White space in HTML code. ------*/}
      <div class="container-white-space">
        <div class="inline-block-element">Element 1</div>
        <div class="inline-block-element">Element 2</div>
        <div class="inline-block-element">Element 3</div>
        <div class="inline-block-element">Element 4</div>
      </div>
    </>
  );
}
