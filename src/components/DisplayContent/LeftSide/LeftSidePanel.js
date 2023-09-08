import React from "react";
import "../LeftSide/LeftSide.css";

function LeftSidePanel() {
  return (
    <div className="LeftSide_main">
      <div className="leftSide_header">Brand</div>
      <div className="leftSide_brandname">
        <label className="brandname">
          <input type="checkbox" value="Apple" />
          Apple
        </label>
        <label className="brandname">
          <input type="checkbox" value="Samsung" />
          Samsung
        </label>
        <label className="brandname">
          <input type="checkbox" value="MI" />
          MI
        </label>
        <label className="brandname">
          <input type="checkbox" value="MI" />
          realme
        </label>
      </div>
    </div>
  );
}

export default LeftSidePanel;
