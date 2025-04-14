import { useCatStore } from "../stores/catStore";

function CatBox() {
  const { bigCats, smallCats } = useCatStore((state) => state.cats);
  const { increaseBigCats, increaseSmallCats, summary } = useCatStore();

  console.log(summary());
  
  return (
    <div className="box">
      <h1>Cat Box</h1>

      <p>Big Cats: {bigCats}</p>
      <p>Small Cats: {smallCats}</p>
      <p>{Math.random()}</p>
      <div>
        <button onClick={increaseBigCats}>Add Big Cats</button>
        <button onClick={increaseSmallCats}>Add Small Cats</button>
      </div>
    </div>
  );
}

export default CatBox;
