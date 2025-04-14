import { useEffect, useState } from "react";
import { useBearStore } from "../stores/bearStore";
import { useFoodStore } from "../stores/foodStore";
import { shallow } from "zustand/shallow";

function BearBox() {
  const { bears, increasePopulation, removeAllBears, reset } = useBearStore();

  const [bgColor, setBgColor] = useState<
    "lightgreen" | "lightpink" | undefined
  >(useFoodStore.getState().fish > 5 ? "lightgreen" : "lightpink");

  const clearStorage = () => {
    // This clears the persisted data from storage (sessionStorage in your case)
    useBearStore.persist.clearStorage();
    // Also reset the state to initial values
    reset();
  };

  useEffect(() => {
    // const unSub = useFoodStore.subscribe((state, prevState) => {
    //   if (prevState.fish <= 5 && state.fish > 5) {
    //     setBgColor("lightpink");
    //   } else if (prevState.fish > 5 && state.fish <= 5) {
    //     setBgColor("lightgreen");
    //   }
    // });

    const unSub = useFoodStore.subscribe(
      (state) => state.fish,
      (fish, prevFish) => {
        if (prevFish <= 5 && fish > 5) {
          setBgColor("lightpink");
        } else if (prevFish > 5 && fish <= 5) {
          setBgColor("lightgreen");
        }
      },
      {
        equalityFn: shallow,
        fireImmediately: true,
      }
    );

    return unSub;
  }, []);

  return (
    <div className="box" style={{ background: bgColor }}>
      <h1>Bear Box</h1>
      <p>Bears: {bears}</p>
      <p>{Math.random()}</p>
      <div>
        <button onClick={increasePopulation}>Add Bear</button>
        <button onClick={removeAllBears}>Remove Bear</button>
        {/* Clearing persisted data in the storage */}
        <button onClick={clearStorage}>Clear Storage</button>
      </div>
    </div>
  );
}

export default BearBox;
