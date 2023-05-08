import { useEffect, useState } from "react";

function UseDebounce(valueInput, delay) {
  //hoãn thời gian set giá trị input
  const [valueInputDebounce, setValueInputDebounce] = useState("");
  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setValueInputDebounce(valueInput);
    }, delay);
    return () => clearTimeout(timeoutId);
  }, [valueInput, delay]);
  return [valueInputDebounce];
}

export default UseDebounce;
