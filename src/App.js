import "./App.css";
import Home from "./page/Home";
import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params= {
  api_key: "2afa9c3421c0e71806159b1d3d140fbd",
};
function App(props) {
  return (
    <div>
    <Home/>
    </div>
  );
}

export default App;
