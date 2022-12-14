import { Toaster } from "react-hot-toast";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";

function App() {
  return (
    <main>
      <Header />
      <Home />
      <Toaster />
    </main>
  );
}

export default App;
