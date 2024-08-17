import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Screen/Home";
import Createuser from "./Screen/Createuser";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/createuser" element={<Createuser />} />
      </Routes>
    </>
  );
}

export default App;
