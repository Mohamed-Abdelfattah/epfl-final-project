import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">App component</h1>
        <h1 className="text-3xl font-bold underline">
          Should render landing page
        </h1>
      </div>
    </>
  );
}

export default App;
