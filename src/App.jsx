import { useState } from "react";
import "./App.css";
import Container from "./components/container/Container";
import Doc from "./components/doc/Doc";
import DocButton from "./components/docBtn/docBtn";

function App() {
  const [showDoc, setShowDoc] = useState(false);
  return (
    <div className="App">
      {!showDoc ? (
        <Container setShowDoc={setShowDoc} />
      ) : (
        <Doc setShowDoc={setShowDoc} />
      )}
      <DocButton setShowDoc={setShowDoc} showDoc={showDoc} />
    </div>
  );
}

export default App;
