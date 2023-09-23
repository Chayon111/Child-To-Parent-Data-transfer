import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function ChildComponent({ parentToChild }) {
  const [color, setColor] = useState(" ");

  const childToParent = () => {
    parentToChild(color);
  };
  return (
    <div>
      <fieldset>
        <h3> I am Child Component</h3>
        <h6>If you Change Parent component BG color input a color</h6>
        <input
          type="text"
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
        />
        <button onClick={childToParent}>Set BG Color</button>
      </fieldset>
    </div>
  );
}
