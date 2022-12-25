import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  const fetchData = async (url) => {
    if (!url) {
      url = `https://pokeapi.co/api/v2/pokemon?limit=12&offset=0`;
    }

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Data could not be fetched!");
    }

    return res.json();
  };

  const getPokemons = (url = '') => {
    fetchData(url)
      .then((res) => {
        setData(res);
      })
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    getPokemons();
  }, []);

  const renderData = () => {
    if (!data?.count) {
      return null;
    }

    const list = [];

    data?.results.forEach((item) => {
      const url = item.url.split("/");
      const id = url.splice(-2)[0];
      const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

      list.push(
        <div key={id} className="flex items-center gap-4 bg-white rounded-[12px] p-4">
          <div className="h-[72px] w-[72px] rounded-full bg-neutral-dark bg-opacity-10">
            <img src={img} alt={item.name} className="object-cover object-center" />
          </div>
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

      <div className="flex justify-between items-center pt-4">
        <button onClick={() => getPokemons(data?.previous)} disabled={!data?.previous} className="bg-white border border-secondary rounded-[12px] w-[120px] p-4 disabled:bg-slate-200">
          Previous 12
        </button>
        <button onClick={() => getPokemons(data?.next)} disabled={!data?.next} className="bg-white border border-secondary rounded-[12px] w-[120px] p-4">
          Next 12
        </button>
      </div>
    </div>
  );
}

export default App;
