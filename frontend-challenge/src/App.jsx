import { useState } from "react";
import "./App.css";
import RegisterForm from "./components/Form";
import Valores from "./components/Valores";
import { GlobalStyle } from "./styles/global";

function App() {
  const [valores, setvalores] = useState([]);

  return (
    <div className="App">
      <GlobalStyle />
      <div className="container">
        <RegisterForm valores={valores} setvalores={setvalores} />
        <Valores valores={valores} />
      </div>
    </div>
  );
}

export default App;
