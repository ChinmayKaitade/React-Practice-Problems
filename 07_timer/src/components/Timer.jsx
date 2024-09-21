import { useEffect } from "react";
import { useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(60);

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
      return () => {
        clearTimeout(timer);
      }
    }
  }, [time]);

  return <div>Time Left : {time} sec</div>;
};

export default Timer;
