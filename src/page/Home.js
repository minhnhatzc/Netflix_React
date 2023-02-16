import React from 'react'
import Navbar from '../components/nav/Navbar';
import Header from '../components/header/Header';
import Content from '../components/content/Content';

function Home(props) {
  return (
    <div>
    <Navbar/>
    <Header />
    <Content/>
    </div>
  )
}

export default Home;

