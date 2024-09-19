import { useState } from "react";

const UserInput = () => {
  const [input, setInput] = useState("");

  function inputHandler(e) {
    setInput(e.target.value);
  }

  return (
    <div>
      <input type="text" value={input} onChange={inputHandler} />
      <p>User Input is : {input}</p>
    </div>
  );
};

export default UserInput;
