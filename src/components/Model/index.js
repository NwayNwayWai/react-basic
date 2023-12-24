import React from "react";
import "./index.css";
import ReactDom from "react-dom";

export default function Model({ children, danger = false, setShowModel }) {
  let className = danger ? "border-red" : "border-blue";
  return ReactDom.createPortal(
    <div className="modal-component">
      <div className="model-backdrop">
        <div
          className={`model ${className}`}
          // style={{ border: "1px solid", borderColor: danger ? "red" : "blue" }}
        >
          {children}
          <button onClick={() => setShowModel(false)}>Close</button>
        </div>
      </div>
    </div>,
    document.getElementById("model")
  );
}
