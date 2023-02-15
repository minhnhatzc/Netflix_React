import React from 'react'
import './Row.css'
import axios from 'axios'
import Card from '../card/Card'
import { useState, useEffect } from 'react'

function Row(props) {
    const [movies, setMovies] = useState([]);
    const fetchMovies = async() => {
        const response = await axios.get(props.url);
        setMovies(response.data.results);
    };
    useEffect(() => {
        fetchMovies();
    }, [])

  return (
    <div className='row__wrapper'>
    <h3 className='row__title'>{props.title}</h3>
        <div className='row__card'>
            {movies.map((el) => {
                return <Card
                    title= {el.title}
                    poster = {el.backdrop_path}
                    id = {el.id}/>;
            })}
        </div>
    </div>
  );
}

export default Row;



// function Row(title, url) {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         async function fetchData() {
//             const request = await axios.get(url);
//             setData(request.data.results);
//             return request;
//         }
//         fetchData();
//     }, [url])
//     console.log(data);
//   return (
//     <div className='row__wrapper'>
//     <h3 className='row__title'>{title}</h3>
//         <div className='row__card'>
//             {data.map((el) => {
//                 return (
//                     <Card
//                     key={el.id}
//                     id={el.id}
//                     title={el.title}
//                     isAdult={el.isAdult}
//                     backdroPath= {el.backdroPath}
//                     voteAverage= {el.voteAverage}
//                     />
//                 );
//             })}
//         </div>
//     </div>
//   );
// }

