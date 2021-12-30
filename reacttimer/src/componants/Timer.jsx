import { useEffect, useState } from "react";

export const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((p) => {
        if (p === 10) {
          clearTimeout(id);
          return 0;
        }
        console.log(p)
        return p + 1;
      });
    }, 1000);
    return () => {
      clearInterval(id);
      console.log("cleaning up data")
    };
  }, []);
  return (
    <>
      <h1>count : {count}</h1>
    </>
  );
};
