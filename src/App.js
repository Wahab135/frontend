import HelloWorld from "./components/helloWorld.js";
import Button from "./components/button.js";
import axios from 'axios';
import "./App.css";
import { useState } from "react";
function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: name,
      price: price,
    };
    axios.post('https://zs4nz2-3005.csb.app/enter',data)
    .then(console.log("Success"))
    .catch((e)=>(console.log(e.message)))
  };

  return (
    <div className="App">
      <HelloWorld />
      <Button />
      <br />

      <form onSubmit={handleSubmit}>
        <div>Name of product?</div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div>Price</div>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
