import {
  useFoodStore,
  addOneFish,
  removeOneFish,
  removeAllFish,
} from "../stores/foodStore";

function FoodBox() {
  const { fish } = useFoodStore();

  const addFiveFish = () => {
    useFoodStore.setState((state) => ({
      fish: state.fish + 5,
    }));
  };

  return (
    <div className="box">
      <h1>Food Box</h1>

      <p>Fish: {fish}</p>

      <div>
        <button onClick={addOneFish}>Add Fish</button>
        <button onClick={removeOneFish}>Remove Fish</button>
        <button onClick={removeAllFish}>Remove All</button>
        <button onClick={addFiveFish}>Add 5 fish</button>
      </div>
    </div>
  );
}

export default FoodBox;
