import "./App.css";
import Home from "./page/Home";
import axios from "axios";
import { getUserAuth } from "./action";
import { useEffect } from "react";
import { connect } from "react-redux";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {
  api_key: "2afa9c3421c0e71806159b1d3d140fbd",
};
function App(props) {
  useEffect(() => {
    props.getUserAuth();
  }, []);

  return (
    <div>
      <Home />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
