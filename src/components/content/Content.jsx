import React from "react";
import "./Content.css";
import { useEffect, useState } from "react";
import axios from "axios";
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
