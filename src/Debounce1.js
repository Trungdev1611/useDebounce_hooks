import { useEffect, useState } from "react";
import UseDebounce from "./UseDebounce";

function Debounce1() {
  const [valueInput, setValueInput] = useState("");
  //lấy giá trị input bị hoãn ở đây, truyền vào giá trị
  const [debounceValueInput] = UseDebounce(valueInput, 4000);
  const [data, setData] = useState([]);

  console.log(`debounceValueInput`, debounceValueInput);
  useEffect(() => {
    //nếu truyền được name ="" lên thì không cần check url như này
    async function getData() {
      let url = `https://api-generator.retool.com/TMI1OJ/data`;
      if (debounceValueInput) {
        url = url + `?name=${debounceValueInput}`;
      }
      let res = await fetch(url);
      let dataRes = await res.json();
      setData(dataRes);
    }
    getData();
  }, [debounceValueInput]);

  return (
    <div className="border">
      <input
        placeholder="search..."
        type="text"
        onChange={(e) => setValueInput(e.target.value)}
      />
      {data.map((item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </div>
  );
}

export default Debounce1;
