// Title.tsx
import React from "react";
import "./Title.css";

const Title: React.FC = () => {
  return (
    <div>
      <div className="nextPart">
        <a href="/" className="nextP">
          <span className="arrowP">&lt;</span>
        </a>
        <h1>Next 7 Days</h1>
      </div>
    </div>
  );
};

export default Title;
