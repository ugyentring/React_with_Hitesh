import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        tailwind test
      </h1>
      <Card username="ugyen" btnText="Click me" />
      <Card username="karma" btnText="Use Me" />
      <Card username="deki" btnText="Register" />
    </div>
  );
}

export default App;
