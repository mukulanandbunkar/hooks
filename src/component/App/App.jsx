import React, { useState } from "react";
import UseCallBack from "../UseCallBack";
import UseMemo from "../UseMemo.jsx";
import UseContext from "../UseContext.jsx";
import { counterContext } from "../../context/counterContext.js";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <counterContext.Provider value={{count, setCount}}>
      {/*<UseCallBack />*/} 
        <UseMemo />
        {/* <UseContext /> */}
      </counterContext.Provider>
    </div>
  );
}

export default App;
