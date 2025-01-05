import React from "react";
import { useMemo, useState } from "react";

function UseMemo() {
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(false)
  const [counter1, setCounter1] = useState(0);
  const onIncrease = () => {
    setCounter((counter) => counter + 1);
   //  setCounter1((counter1) => counter1 + 1);
  };

  const handleChange = () => {
    for (let i = 0; i < 100000; i++) {
      
    }
    return counter * 10
  }

  // const counter2 = useMemo(
  //   () => <div>counter1: {counter1}</div>,
  //   [counter % 5 === 0]
  // );
  return (
    <>
      <div>counter:{counter}</div>
      {/*counter2*/}
      <button onClick={onIncrease}>Increment</button>
      <button onClick={() => setShow((prev) => !prev)}>show</button>
      <p>{handleChange()}</p>
      {show && "mukul"}
    </>
  );
}

export default UseMemo;
