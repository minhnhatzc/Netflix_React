import React from "react";
import "./Content.css";
import Row from "../row/Row";
import RowData from "../../constant/urls";
function Content() {
  return(
  <div className="content__wrapper">
  {RowData.map((el)=> {
    return <Row title={el.title} url ={el.url}/>
  })}
  </div>
  )
}

export default Content;
