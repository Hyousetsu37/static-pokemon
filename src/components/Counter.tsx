import { createSignal, type Component } from "solid-js";

interface Props {
  initialValue: number;
}

export const Counter: Component<Props> = (props) => {
  const [counter, setCounter] = createSignal(props.initialValue);
  return (
    <>
      <h1 class="text-5xl">Counter</h1>
      <h3 class="text-xl">Value: {counter()} </h3>

      <button
        onclick={() => setCounter((prev) => ++prev)}
        class="px-3 border-2 rounded-lg border-amber-300 mx-0.5 cursor-pointer"
      >
        +1
      </button>
      <button
        onclick={() => setCounter((prev) => --prev)}
        class="px-3 border-2 rounded-lg border-amber-300 mx-0.5 cursor-pointer"
      >
        -1
      </button>
    </>
  );
};
