import React from 'react'
import "./App.css";
import Carousel from './components/carousel/Carousel'
import One from './assets/bg/bg14.png'
import Two from './assets/bg/bg15.png'
import Three from './assets/bg/bg16.png'
import Four from './assets/bg/bg17.png'
import Five from './assets/bg/bg18.png'
import Six from './assets/bg/bg19.png'
import Seven from './assets/bg/bg20.png'
import Eight from './assets/bg/bg21.png'
import Nine from './assets/bg/bg22.png'

function App() {
  return (
    <div className="app ">
      <Carousel >
        <img src={One} alt="caro" />
        <img src={Two} alt="caro" />
        <img src={Three} alt="caro" />
        <img src={Four} alt="caro" />
        <img src={Five} alt="caro" />
        <img src={Six} alt="caro" />
        <img src={Seven} alt="caro" />
        <img src={Eight} alt="caro" />
        <img src={Nine} alt="caro" />
      </Carousel>
    </div>
  )
}

export default App
