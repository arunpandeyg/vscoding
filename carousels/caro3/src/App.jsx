import React from "react";
import Carousel from "./components/Carousel";



function App() {
  const caroU = [
    "/bg/bg14.png",
    "/bg/bg15.png",
    "/bg/bg16.png",
    "/bg/bg17.png",
    "/bg/bg19.png",
    "/bg/bg20.png",
    "/bg/bg21.png",
    "/bg/bg22.png",
    "/bg/bg23.png",
  ];
  return (
    <main className='w-[1772px] h-[494px] gap-4'>
          <div >
              <Carousel >
                  {caroU.map((image, index) => (
                    <img key={index} src={image} alt={`Im ${index}`} className='w-[1772px] h-[494px] gap-4'/>
                  ))}
              </Carousel> 
      </div>
    </main>
  )
}

export default App
