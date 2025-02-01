/** @format */

import { useState } from 'react';
interface cardProps {
  msg: string;
}

const UseStateHook = () => {
  const [message, setMessage] = useState<string>('');

  return (
    <>
      <div>
        <button onClick={() => setMessage('Hello There')}>Say Hello</button>
        <button onClick={() => setMessage('GoodBye')}>Say Goodbye</button>

        <br />
        <Card msg={message} />
        <div>{message}</div>
      </div>
      <div>
        <Counter />
      </div>
    </>
  );
};

export default UseStateHook;

const Card = ({ msg }: cardProps) => {
  return <div>{msg}</div>;
};

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((state) => state + 1)}>Increment</button>
    </div>
  );
};
