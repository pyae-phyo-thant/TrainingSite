import React from "react";
import loading from "../images/Infinity-1.9s-108px.gif";

function Loading() {
  return (
    <div>
      <img src={loading} alt="Loading..." className="m-auto md:mt-44 mt-28" />
    </div>
  );
}

export default Loading;
