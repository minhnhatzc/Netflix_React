import "./App.css";
import Navbar from "./components/nav/Navbar";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params= {
  api_key: "2afa9c3421c0e71806159b1d3d140fbd",
};
function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Content/>
    </div>
  );
}

export default App;
