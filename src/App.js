import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  const fetchData = async (limit = 20, offset = 0) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);

    if (!res.ok) {
      throw new Error("Data could not be fetched!");
    }

    return res.json();
  };

  useEffect(() => {
    fetchData()
      .then((res) => setData(res))
      .catch((e) => console.log(e.message));
  }, []);

  const renderData = () => {
    if (!data?.count) {
      return null;
    }

    const list = [];

    data?.results.forEach((item) => {
      console.log(item);
      list.push(
        <div className="flex items-center gap-4 bg-white rounded-[12px] p-4">
          <div className="h-[72px] w-[72px] rounded-full bg-neutral-dark bg-opacity-10"></div>
          <div className="font-title font-medium text-[20px] tracking-wide capitalize">{item.name}</div>
        </div>
      );
    });

    return <div className="grid grid-rows-4 grid-flow-col gap-4">{list}</div>;
  };

  return (
    <div className="container mx-auto bg-neutral-light shadow-strokes rounded-[12px] m-4 p-4">
      <div className="flex justify-between items-center p-4 mb-4">
        <h1 className="font-title text-[32px]">All the Pokemon!</h1>

        <div className="flex justify-center items-center gap-4">
          <div className="text-[20px]">
            <input type="radio" className="text-[20px]" /> Sort Name
          </div>
          <div className="text-[20px]">
            <input type="radio" /> Sort ID
          </div>
        </div>
      </div>

      {renderData()}
    </div>
  );
}

export default App;
