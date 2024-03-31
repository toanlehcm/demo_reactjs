import styles from "./InlineBlock.css";

export default function InlineBlock() {
  return (
    <>
      {/*------ 1. Not enough space in the container. ------*/}
      <div className="container-not-enough-space">
        <div className="inline-block-element">Element 1</div>
        <div className="inline-block-element">Element 2</div>
        <div className="inline-block-element">Element 3</div>
        <div className="inline-block-element">Element 4</div>
      </div>

      {/*------ 2. White space in HTML code. ------*/}
      <div className="container-white-space">
        <div className="inline-block-element">Element 1</div>
        <div className="inline-block-element">Element 2</div>
        <div className="inline-block-element">Element 3</div>
        <div className="inline-block-element">Element 4</div>
      </div>

      {/*------ 3. Inconsistent size ------*/}
      <div class="container-inconsistent-size">
        <div class="inline-block-element large">Large Element</div>
        <div class="inline-block-element small">Small Element</div>
      </div>
    </>
  );
}
