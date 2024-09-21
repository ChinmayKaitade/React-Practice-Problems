import { useState } from "react";

const ToggleSwitch = () => {
  const [start, setStart] = useState(false);

  function clickHandler() {
    setStart(!start);
  }

  return (
    <div>
      <h1>{!start ? "Light is OFF" : "Light is ON"}</h1>

      <button onClick={clickHandler}>{start ? "Turn OFF" : "Turn ON"}</button>
    </div>
  );
};

export default ToggleSwitch;
