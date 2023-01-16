import Home from "./Pages/Home";
import ButtonAppBar from "./Components/Header";
import './App.css';
import {ToastContainer} from "react-toastify";

function App() {
  return (
    <div className="App">
        <ButtonAppBar/>
        <Home/>
        <ToastContainer />
    </div>
  );
}

export default App;
