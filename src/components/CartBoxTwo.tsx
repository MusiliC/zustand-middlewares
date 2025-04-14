import { useCatStore } from "../stores/catStore"


function CartBoxTwo() {

    const bigCats = useCatStore((state) => state.cats.bigCats)

  return (
    <div className="box">
      <h1>Partial State From Store</h1>
      <p>Big cats: {bigCats}</p>
      <p>{Math.random()}</p>
    </div>
  );
}

export default CartBoxTwo