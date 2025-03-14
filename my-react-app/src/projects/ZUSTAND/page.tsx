/** @format */
import { useCounterStore } from './store';

const ZustandStore = () => {
  const count = useCounterStore((state) => state.count);

  return <OtherComponent count={count} />;
};
const OtherComponent = ({ count }: { count: number }) => {
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <div>
      {count}
      <div>
        <button onClick={increment}>Increment</button> <br />
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default ZustandStore;
