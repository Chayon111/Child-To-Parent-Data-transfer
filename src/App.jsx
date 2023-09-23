import { useState } from "react";
import ChildComponent from "./ChildComponent";
export default function App() {
  const [childData, setChildData] = useState(null);

  const parentToChild = (childToParent) => {
    setChildData(childToParent);
  };

  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h2>Child to Parent Data Transfer</h2>
      <fieldset style={{ backgroundColor: `${childData}` }}>
        <h2>This is a Parent component</h2>
        <h5>
          Child component send me this :
          <span style={{ fontSize: "20px" }}> {childData} </span>
        </h5>
      </fieldset>
      <ChildComponent parentToChild={parentToChild} />
    </div>
  );
}
