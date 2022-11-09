import { useState } from "react";

const Component = () => {
  const [state, setState] = useState(true);

  const handleMouseOver = (e) => {
    e.target.style.background = "rgb(200, 153, 52)";
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
