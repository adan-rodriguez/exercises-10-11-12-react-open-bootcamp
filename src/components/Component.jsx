import { useState } from "react";

const Component = () => {
  const [state, setState] = useState(true);

  const handleMouseOver = (e) => {
    e.target.style.background =
      "rgb(" +
      Math.round(Math.random() * 255) +
      ", " +
      Math.round(Math.random() * 255) +
      ", " +
      Math.round(Math.random() * 255) +
      ")";
  };

  const handleMouseLeave = (e) => {
    e.target.style.removeProperty("background");
  };

  return (
    <div
      {...(state && { onMouseOver: handleMouseOver })}
      {...(state && { onMouseLeave: handleMouseLeave })}
      onDoubleClick={() => setState(!state)}
      className="container"
    ></div>
  );
};

export default Component;
