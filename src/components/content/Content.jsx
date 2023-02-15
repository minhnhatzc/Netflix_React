import React from "react";
import "./Content.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Row from "../row/Row";
import RowData from "../../constant/urls";
function Content() {
//   const [movies, setMovies] = useState([]);
//   const getMovies = async () => {
//     const responce = await axios.get(
//       "https://api.themoviedb.org/3/movie/top_rated",
//       {
//         params: {
//           api_key: "2afa9c3421c0e71806159b1d3d140fbd",
//         },
//       }
//     );
//     setMovies(responce.data.results);
//   };

//   useEffect(() => {
//     getMovies();
//   }, []);

//   console.log(movies);
  return(
  <div className="content__wrapper">
  {RowData.map((el)=> {
    return <Row title={el.title} url ={el.url}/>
  })};
  </div>
  )
}

export default Content;
