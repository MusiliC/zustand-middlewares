import BearBox from "./components/BearBox";
import CartBoxTwo from "./components/CartBoxTwo";
import CartController from "./components/CartController";
import CatBox from "./components/CatBox";
import FoodBox from "./components/FoodBox";

function App() {
  return (
    <div className="container">
      <p>Zustand</p>
      <FoodBox />
      <BearBox />
      <div>
        <CatBox />
        <CartBoxTwo />
        <CartController />
      </div>
    </div>
  );
}

export default App;
