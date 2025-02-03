import logo from "./logo.svg";
import { useState } from "react";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";

function App() {
  const [value, setValue] = useState(0);
  return (
    <div className="App">
      <Navbar logoText="Harshit"/>
      <div className="value">{value}</div>
      <button onClick={(params) => {setValue(value+1)}}>Click me</button>
      <Footer/>
    </div>
  );
}

export default App;
